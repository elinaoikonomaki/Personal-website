import { createDiv, createPar } from "./selectors.js";
import {onCardClick} from "./expandableCard.js";

export let cards = [];
export class Card {
  constructor(id,  classname, title, titleclass, imgUrl,tags, types, year, subtitle, paragraph, videoUrl,bwUrl){
    this.id = id;
    this.title = title;
    this.titleclass = titleclass;
    this.classname = classname;
    this.imgUrl = imgUrl;
    this.tags = tags;
    this.types = types;
    this.videoUrl = videoUrl;
    this.paragraph = paragraph;
    this.subtitle = subtitle;
    this.year = year;
    this.bwUrl = bwUrl;
  }
  initCard(){
    let card = createDiv(); //from selectors.js
    card.setAttribute('class', `${this.classname}`);
    card.setAttribute('id', `${this.id}`);
    card.dataset.fr = this.tags;
    card.dataset.pt = this.types;
    this.createBackground(card);
    this.createTitle(card);
    this.mouseOver(card);
    this.mouseOut(card);
    this.onClick(card);
    cards.push(card);
  }
  mouseOut(card){
    card.addEventListener('mouseleave', (e) => {
      if(e.target.nodeName === 'DIV'){
       // e.target.style.transform = "translate(-20px, -20px)";
        e.target.style.backgroundImage = `url("${this.bwUrl}")`;
      }
    })
  }
  mouseOver(card){
    card.addEventListener('mouseenter', (e) => {
      //console.log(e.target.nodeName);
      if(e.target.nodeName === 'DIV'){
        //e.target.style.transform = "translate(20px, 20px)";
        e.target.style.backgroundImage = `url("${this.imgUrl}")`;
      }
    })
  }
  createTitle(card){
      let title = createPar();
      let textNode = document.createTextNode(this.title);
      title.setAttribute('class', `${this.titleclass}`);
      title.appendChild(textNode);
      card.appendChild(title);
  }
  createBackground(card){
    card.style.background = `url("${this.bwUrl}")`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
  }
  onClick(card){
    let arrays = this.tags.concat(this.types);
    let keywords = arrays.toString();

    card.addEventListener('click', (e) =>
        setTimeout(onCardClick(e.target,this.title,this.videoUrl, this.imgUrl, this.paragraph, keywords, this.subtitle,this.year), 500)
      );
  }
}