import { createPar, createH4 } from "./selectors.js";
import {onCardClick} from "./expandableCard.js";
import { recalcWidths } from "./script.js";
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export class Card {
    constructor(
        id,
        classname,
        title,
        titleclass,
        imgUrl,
        tags,
        types,
        year,
        team,
        subtitle,
        paragraph,
        videoUrl,
        bwUrl,
        blogItems,
        hasVideo
      ) {
      this.id = id;
      this.title = title;
      this.titleclass = titleclass;
      this.classname = classname;
      this.imgUrl = `${imgUrl}`;
      this.tags = tags;
      this.types = types;
      this.year = year;
      this.team = team;
      this.subtitle = subtitle;
      this.paragraph = paragraph;
      this.videoUrl = `${videoUrl}`;
      this.bwUrl = `${bwUrl}`;
      this.blogItems = blogItems;
      this.hasVideo = hasVideo;
      this.div = document.createElement('div');
      this.div.id = id;
      this.div.className = classname;
      this.div.dataset.fr = tags.join(', ');
      this.div.dataset.pt = types.join(', ');
      this.div.dataset.year = year;
      this.setupCard();
  }

  setupCard() {
      this.createBackground();
      this.createTitle();
      this.createCardContent();
    //   this.createSubtitle();
    //   this.createKeywords();
      this.setupInteractions();
    //   this.createCardContent();
  }

  createBackground() {
    this.div.style.position = 'relative';
    this.div.style.background = 'rgba(255, 255, 255, 1)';
    this.div.style.transition = 'background-color 0.2s ease';
  }

  createTitle() {
      let title = createH4();
      title.textContent = this.title;
      this.div.appendChild(title);
  }

  createCardContent() {
    // Build the HTML content for each project 
    const blogContentContainer = document.createElement('div');
    blogContentContainer.className = 'blog-content';

    if (Array.isArray(this.blogItems) && this.blogItems.length > 0) {
        this.blogItems.forEach((item) => {
            if (item.markdownFile) {
                // Fetch Markdown and convert to HTML
                fetch(item.markdownFile)
                    .then((response) => response.text())
                    .then((markdownContent) => {
                        const htmlContent = md.render(markdownContent);
                        const blogItemDiv = document.createElement('div');
                        blogItemDiv.innerHTML = htmlContent;
                        blogContentContainer.appendChild(blogItemDiv);
                    })
                    .catch((error) => console.error(`Error loading Markdown file: ${error}`));
            } else if (item.text && item.imgUrl) {
                // Render blog item with both text and image
                const blogItemDiv = document.createElement('div');
                blogItemDiv.innerHTML = `
                    <p>${item.text}</p>
                    <img class="blog_img" src="${item.imgUrl}" alt="Blog Image">
                `;
                blogContentContainer.appendChild(blogItemDiv);
            } else if (item.imgUrl) {
                // Render blog item with just an image
                const blogItemDiv = document.createElement('div');
                blogItemDiv.innerHTML = `
                    <img class="blog_img" src="${item.imgUrl}" alt="Blog Image">
                `;
                blogContentContainer.appendChild(blogItemDiv);
            }
        });
    } else {
        // Default content for projects without blog items
        const defaultMessage = document.createElement('p');
        defaultMessage.textContent = "";
        blogContentContainer.appendChild(defaultMessage);
    }

    const previewContent = this.hasVideo
        ? `<video muted controls><source src="${this.videoUrl}" type="video/mp4"></video>`
        : `<img class="blog_img" src="${this.imgUrl}" alt="Preview">`;

    // Create wrapper element
    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';
    contentDiv.innerHTML = `
        <div class="header">
            <h1>${this.title}</h1>
            <h2>${this.subtitle}</h2>
        </div>
        ${previewContent}
        <div class="wrapper">
            <div class="info">
                <h3>Keywords</h3>
                <p>${this.tags.concat(this.types).join(', ')}</p>
                <h3>Year</h3>
                <p>${this.year}</p>
                <h3>Team</h3>
                <p>${this.team}</p>
            </div>
            <div class="dec">
                <h3>About</h3>
                <p>${this.paragraph}</p>
            </div>
        </div>
    `;

    contentDiv.appendChild(blogContentContainer);

    // Append to the card div
    this.div.appendChild(contentDiv);
  }

  createSubtitle() {
      let subtitle = createPar();
      subtitle.textContent = this.subtitle;
    //   subtitle.className = 'cardText cardSubtitle';
    //   subtitle.style.opacity = '0'; // Initially hidden
    //   subtitle.style.transition = 'opacity 0.5s ease';
    //   subtitle.style.zIndex = '20'; 
      this.div.appendChild(subtitle);
  }

  createKeywords() {
      let keywordsContainer = document.createElement('div');
      keywordsContainer.className = 'cardText cardKeywords';
      keywordsContainer.style.opacity = '0'; // Initially hidden
      keywordsContainer.style.transition = 'opacity 0.5s ease';
    //   keywordsContainer.style.zIndex = '20';
      this.tags.forEach(tag => {
          let keyword = document.createElement('span');
          keyword.textContent = tag;
          keyword.className = 'keywordTag';
          keywordsContainer.appendChild(keyword);
      });

      this.div.appendChild(keywordsContainer);
  }

  setupInteractions() {
    //   this.div.addEventListener('mouseenter', this.mouseOver.bind(this));
    //   this.div.addEventListener('mouseleave', this.mouseOut.bind(this));
      this.div.addEventListener('click', this.onClick.bind(this));
  }

  mouseOver(e) {
    this.div.style.backgroundImage = `url("${this.imgUrl}")`;
    this.div.querySelector('.card').style.background = 'rgba(0, 0, 0, 0.85)';
    this.div.querySelectorAll('.cardText').forEach(el => el.style.opacity = '1');

  }

  mouseOut(e) {
    this.div.style.backgroundImage = `url("${this.bwUrl}")`;
    this.div.querySelector('.card').style.background = 'rgba(0, 0, 0, 0)';
    this.div.querySelectorAll('.cardText').forEach(el => el.style.opacity = '0');
  }

  onClick(e) {
    const panels = document.querySelectorAll(".panel");
    // If hidden, ignore
    if (this.div.classList.contains("hidden")) return;

    // Remove expanded from all
    panels.forEach((p) => p.classList.remove("expanded"));
    // Expand this
    this.div.classList.add("expanded");

    recalcWidths(); // re-calc after expansion
  }
}