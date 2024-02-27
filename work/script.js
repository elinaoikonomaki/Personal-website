
import {divWindow, typeDiv, tagDiv, yearDiv, tagsArray, typesArray, yearsArray} from "./selectors.js";
import {Card,cards} from './classes.js'

// FETCING THE DATA
const projects = fetch('../data.json')
  .then((response) => response.json())
  .then((data) =>
    data['projects'].forEach((project, i) => {
      //creating the cards for the projects from the json
      let projDivs = new Card(`card-${i}`,'card',project.name,'cardTitle',project.img,project.tags,project.type, project.year, project.subtitle, project.description, project.video, project.bwImg);
      projDivs.initCard();
      updateDOM();

      // adding tags to an array to create buttons. Should be written differently for optimization.
      let tagsTemp = Object.values(project.tags);
      tagsTemp.forEach((tag) => {
        if (tagsArray.includes(tag) === false) {
          tagsArray.push(tag);
          createBtn(tag, tagDiv);
        }
      });

      let typeTemp = Object.values(project.type);
      typeTemp.forEach((ptype) => {
        if (typesArray.includes(ptype) === false) {
          typesArray.push(ptype);
          createBtn(ptype, typeDiv);
        }
      });

      let year =  project.year;
      if (yearsArray.includes(year) === false){
        yearsArray.push(year);
        createBtn(year, yearDiv);
      }
    })
  );

function updateDOM(){
  for (let i = 0; i < cards.length; i++) {
    divWindow.appendChild(cards[i]);
  }
}

// FILTER BUTTONS FUNCTIONALITY
function createBtn(el, targetDiv) {
  let btn = document.createElement('button');
  btn.innerText = el;
  btn.setAttribute('class', 'filterbtn');
  targetDiv.appendChild(btn);
  btn.addEventListener('click', (e) => setTimeout(filterBtn(e.target), 500));
}

function filterBtn(btn) {
  let btnTag = btn.innerText;
  //console.log('button= ', btn.innerText);
  let divs = divWindow.querySelectorAll('div.card');
  console.log(divs);

  //searching for the matching divs
  divs.forEach((div) => {
    let divTg = div.dataset.fr;
    let tgSliced = divTg.split(',');
    let divPt = div.dataset.pt;
    let ptSliced = divPt.split(',');
    let divYear = div.dataset.year;
    let yearSliced = divYear.split(',');
    let divNode = document.getElementById(div.attributes['id'].nodeValue);
    //i should fix the case that you click again on the same button twice. --> see javascript btn
    if (tgSliced.includes(btnTag) == true || ptSliced.includes(btnTag) || yearSliced.includes(btnTag) ) {
      //console.log('selected', divNode);
      // divNode.setAttribute('hidden', false);
      divNode.className = 'card opUp';
      //console.log('opUp');
      setTimeout(() => {
        divNode.className = 'card opUp show';
      }, 300);
    } else {
      //console.log('should be remove', divNode);
      divNode.className = 'card opDown';
      //console.log('opDown');
      setTimeout(() => {
        divNode.className = 'card opDown hide';
      }, 300);
    }
  });
  return;
}


