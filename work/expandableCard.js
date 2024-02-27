import { createBtn } from "./selectors.js";

export function onCardClick(el,title,videoUrl, imgUrl, paragraph, keywords, subtitle, year) {
  console.log(year)

  //get the clicked card
  const card = el;
  //clone the card
  const cardClone = card.cloneNode(false);
  //get the location of the card in the window
  var { top, left, width, height } = card.getBoundingClientRect();
  //positioning the clone on top of the original card
  cardClone.className = 'cardClone';
  cardClone.style.position = 'fixed';
  cardClone.style.top = top + 'px';
  cardClone.style.left = left + 'px';
  cardClone.style.width = width + 'px';
  cardClone.style.height = height + 'px';
  // hide the original card with opacity
  card.style.opacity = '0';
  // add card to the same container
  card.parentNode.appendChild(cardClone);

  //adding close button for each div
  let btn = closeBtn(cardClone, card, top, left, width, height);
  // expand the clone card
  var { top, left, width, height } = card.parentNode.getBoundingClientRect();
  toggleExpansion(cardClone, {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  });
  
  const content = getCardContent(title, videoUrl, imgUrl, paragraph, keywords, subtitle, year);
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = 'block';
  cardClone.style.padding = '0';
  // append the close button after the expansion is done
  cardClone.appendChild(btn);
  cardClone.insertAdjacentHTML('afterbegin', content);
}

function closeBtn(cardClone, card, top, left, width, height){
  let btn = createBtn();
  btn.innerText = 'x';
  btn.setAttribute('class', 'closebtn');
  cardClone.appendChild(btn);
  btn.addEventListener('click', (e) =>
    setTimeout(
      closeCard(e.target, cardClone, card, top, left, width, height),
      500
    )
  );
  return btn;
}

function closeCard(btn, cardClone, card, top, left, width, height) {
  // remove the button on close
  btn.remove();
  //remove the clone div & its content
  cardClone.style.removeProperty('display');
  cardClone.style.removeProperty('padding');
  // show original card content
  [...cardClone.children].forEach((child) =>
    child.style.removeProperty('display')
  );
  fadeContent(cardClone, '0');
  // shrink the card back to the original position and size
  toggleExpansion(
    cardClone,
    {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    },
    300
  );
  // show the original card again
  card.style.removeProperty('opacity');
  // remove the clone card
  cardClone.remove();
  // fade the content away
  fadeContent(cardClone, '0').then(() => {
    [...cardClone.children].forEach((child) => (child.style.display = 'none'));
  });
};

const toggleExpansion = (element, to, duration = 350) => {
  return new Promise((res) => {
    element.animate(
      [
        {
          top: to.top,
          left: to.left,
          width: to.width,
          height: to.height,
        },
      ],
      { duration, fill: 'forwards', ease: 'ease-in' }
    );
    setTimeout(res, duration);
  });
};

const fadeContent = (element, opacity, duration = 300) => {
  return new Promise((res) => {
    [...element.children].forEach((child) => {
      requestAnimationFrame(() => {
        child.style.transition = `opacity ${duration}ms linear`;
        child.style.opacity = opacity;
      });
    });
    setTimeout(res, duration);
  });
};

const getCardContent = (title,videoUrl,imgUrl, paragraph, keywords, subtitle,year) => {
 
  return `
    <div class="card-content">
      <div class="header">
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
      </div>
      <video autoplay muted controls> 
        <source src= ${videoUrl} type="video/mp4">
      </video>
     <div class= "wrapper"> 
        <div class="info ">
          <h3> Keywords </h3>
          <p> ${keywords} </p>
          <h3> Year </h3>
          <p> ${year} </p>
        </div>
        <div class="info dec">
          <h3> Short Description </h3>
          <p> ${paragraph}</p>
        </div>
      </div>
   
    </div>
  `};