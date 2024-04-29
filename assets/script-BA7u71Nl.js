import { divWindow, typeDiv, tagDiv, yearDiv, tagsArray, typesArray, yearsArray } from './selectors.js';
import { Card } from './classes.js';

const activeCards = new Set();
const activeFilters = new Set();
const allCards = []; // Will store all card references and their current DOM status

// FETCHING DATA
async function fetchData() {
    const response = await fetch('../data.json');
    const data = await response.json();
    console.log(data)
    const [cards, allTagsSet,allTypesSet, allYearsSet]  = initializeCards(data.projects);
    initializeCardsToDOM(cards)
    console.log(cards)
    createFilters(allTagsSet,allTypesSet, allYearsSet, tagDiv, typeDiv, yearDiv )
    
}

function initializeCards(projects) {
    const cards = []
    const allTagsSet = new Set();
    const allTypesSet = new Set();
    const allYearsSet = new Set();
    projects.forEach((project, i) => {
        //Create the card
        const card = new Card(`card-${i}`, 'card', project.name, 'cardTitle', project.img, project.tags, project.type, project.year, project.subtitle, project.description, project.video, project.bwImg);
        cards.push(card)  
        activeCards.add(card)

        //Add projects filters the sets
        project.tags.forEach(tag => allTagsSet.add(tag));
        project.type.forEach(type => allTypesSet.add(type));
        allYearsSet.add(project.year);
           
    });
    console.log(allTagsSet, allTypesSet, allYearsSet)
    return [cards, allTagsSet, allTypesSet, allYearsSet]
}


function initializeCardsToDOM(cards) {
  console.log(divWindow, cards)
  divWindow.innerHTML = '';
  cards.forEach(card => {
      card.div.className = 'card visible';
      allCards.push({
        card: card,
        inDOM: true, // Initially all cards are in the DOM
        div: card.div
      });
      divWindow.appendChild(card.div)
  })
}

function createFilters(allTagsSet,allTypesSet, allYearsSet, tagDiv, typeDiv, yearDiv ){
  allTagsSet.forEach(tag => createFilterBtn(tag,tagDiv))
  allTypesSet.forEach(type => createFilterBtn(type,typeDiv))
  allYearsSet.forEach(year => createFilterBtn(year,yearDiv))
}

function createFilterBtn(element, targetDiv) {
    const btn = document.createElement('button');
    btn.innerText = element;
    btn.className = 'filterbtn';
    targetDiv.appendChild(btn);

    btn.addEventListener('click', () => {
      if (activeFilters.has(element)) {
          activeFilters.delete(element);
          btn.classList.remove('active');
      } else {
          activeFilters.add(element);
          btn.classList.add('active');
      }
      applyFilters();
  });
}

function applyFilters() {
  if (activeFilters.size === 0) {
      // Show all cards
      allCards.forEach(item => {
          if (!item.inDOM) {
              divWindow.appendChild(item.div); // Re-add to DOM if not already there
              item.inDOM = true;
          }
          item.div.className = 'card visible';
      });
      return;
  }

  allCards.forEach(item => {
      const { card, div } = item;
      const tags = card.tags;
      const types = card.types;
      const year = card.year.toString();

      if (matchesAllFilters(tags, types, year)) {
          if (!item.inDOM) {
              divWindow.appendChild(div); // Re-add to DOM if not already there
              item.inDOM = true;
          }
          div.className = 'card visible';
      } else {
          div.className = 'card hidden';
          // Remove the card from DOM after transition only if it is still hidden
          div.addEventListener('transitionend', function handler(e) {
              if (e.propertyName === 'flex-grow' && div.classList.contains('hidden')) {
                  div.removeEventListener('transitionend', handler);
                  divWindow.removeChild(div);
                  item.inDOM = false;
              }
          }, {once: true});
      }
  });
}


function matchesAllFilters(tags, types, year) {
  // Check if every filter in activeFilters matches the card's tags, types, or year
  return Array.from(activeFilters).every(filter =>
      tags.includes(filter) || types.includes(filter) || filter === year
  );
}

fetchData()

