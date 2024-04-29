import { createPar } from "./selectors.js";
import {onCardClick} from "./expandableCard.js";

export class Card {
  constructor(id, classname, title, titleclass, imgUrl, tags, types, year, subtitle, paragraph, videoUrl, bwUrl) {
      this.id = id;
      this.title = title;
      this.titleclass = titleclass;
      this.classname = classname;
      this.imgUrl = `${imgUrl}`;
      this.tags = tags;
      this.types = types;
      this.year = year;
      this.subtitle = subtitle;
      this.paragraph = paragraph;
      this.videoUrl = `${videoUrl}`;
      this.bwUrl = `${bwUrl}`;
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
      this.createSubtitle();
      this.createKeywords();
      this.setupInteractions();
  }

  createBackground() {
    this.div.style.position = 'relative';
    this.div.style.backgroundImage = `url("${this.bwUrl}")`;
    this.div.style.backgroundSize = "cover";
    this.div.style.backgroundPosition = "center";

    // Create a div for the overlay
    let overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0)';
    overlay.style.transition = 'background-color 0.2s ease';
    overlay.style.zIndex = '10'
    overlay.className = 'overlay';

    this.div.appendChild(overlay);
  }

  createTitle() {
      let title = createPar();
      title.textContent = this.title;
      title.className = `cardText ${this.titleclass}`;
      title.style.opacity = '0'; // Initially invisible
      title.style.transition = 'opacity 0.5s ease';
      title.style.zIndex = '20'; 
      this.div.appendChild(title);
  }

  createSubtitle() {
      let subtitle = createPar();
      subtitle.textContent = this.subtitle;
      subtitle.className = 'cardText cardSubtitle';
      subtitle.style.opacity = '0'; // Initially hidden
      subtitle.style.transition = 'opacity 0.5s ease';
      subtitle.style.zIndex = '20'; 
      this.div.appendChild(subtitle);
  }

  createKeywords() {
      let keywordsContainer = document.createElement('div');
      keywordsContainer.className = 'cardText cardKeywords';
      keywordsContainer.style.opacity = '0'; // Initially hidden
      keywordsContainer.style.transition = 'opacity 0.5s ease';
      keywordsContainer.style.zIndex = '20';
      this.tags.forEach(tag => {
          let keyword = document.createElement('span');
          keyword.textContent = tag;
          keyword.className = 'keywordTag';
          keywordsContainer.appendChild(keyword);
      });

      this.div.appendChild(keywordsContainer);
  }

  setupInteractions() {
      this.div.addEventListener('mouseenter', this.mouseOver.bind(this));
      this.div.addEventListener('mouseleave', this.mouseOut.bind(this));
      this.div.addEventListener('click', this.onClick.bind(this));
  }

  mouseOver(e) {
    this.div.style.backgroundImage = `url("${this.imgUrl}")`;
      this.div.querySelector('.overlay').style.background = 'rgba(0, 0, 0, 0.85)';
      this.div.querySelectorAll('.cardText').forEach(el => el.style.opacity = '1');

  }

  mouseOut(e) {
    this.div.style.backgroundImage = `url("${this.bwUrl}")`;
    this.div.querySelector('.overlay').style.background = 'rgba(0, 0, 0, 0)';
    this.div.querySelectorAll('.cardText').forEach(el => el.style.opacity = '0');
  }

  onClick(e) {
      setTimeout(() => onCardClick(this.div, this.title, this.videoUrl, this.imgUrl, this.paragraph, this.tags.concat(this.types).join(', '), this.subtitle, this.year), 500);
  }
}