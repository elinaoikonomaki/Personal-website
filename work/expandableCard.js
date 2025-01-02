export function onCardClick(
  el,
  title,
  videoUrl,
  imgUrl,
  paragraph,
  keywords,
  subtitle,
  year,
  blogItems,
  hasVideo
) {
  // Here, we insert .card-content if it’s not there or hidden
  const child = el.querySelector('.card-content');
  if (!child || child.style.display === 'none') {
    const content = getCardContent(
      title,
      videoUrl,
      imgUrl,
      paragraph,
      keywords,
      subtitle,
      year,
      blogItems,
      hasVideo
    );
    el.insertAdjacentHTML('afterbegin', content);
  }
}

const getCardContent = (
  title,
  videoUrl,
  imgUrl,
  paragraph,
  keywords,
  subtitle,
  year,
  blogItems,
  hasVideo
) => {
  const blogContent = Array.isArray(blogItems) && blogItems.length > 0
    ? blogItems.map((b) => `
        <p>${b.text}</p>
        <img src="${b.imgUrl}" alt="Blog Image">
      `).join('')
    : '';

  const previewContent = hasVideo
    ? `<video muted controls><source src="${videoUrl}" type="video/mp4">Browser does not support the video tag.</video>`
    : `<img src="${imgUrl}" alt="Preview">`;

  return `
    <div class="card-content">
      <div class="header">
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
      </div>
      ${previewContent}
      <div class="wrapper">
        <div class="info">
          <h3> Keywords </h3>
          <p>${keywords}</p>
          <h3> Year </h3>
          <p>${year}</p>
        </div>
        <div class="dec">
          <h3> Short Description </h3>
          <p>${paragraph}</p>
          ${blogContent}
        </div>
      </div>
    </div>
  `;
};
