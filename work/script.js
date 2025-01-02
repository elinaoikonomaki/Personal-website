import { divWindow, typeDiv, tagDiv, yearDiv } from './selectors.js';
import { Card } from './classes.js';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

let globalMinYear = Infinity;
let globalMaxYear = -Infinity;
let yearRange = { min: 2020, max: 2025 }; 
const MIN_WIDTH = 2; // for recalcWidths
const selectedTypes = new Set();
const allCards = []; // Will store all card references and their current DOM status

window.addEventListener("load", () => {
  fetchData();
});

async function fetchData() {
  const response = await fetch('../data.json');
  const data = await response.json();

  const [cards, allTypesSet, minYear, maxYear] = initializeCards(data.projects);
  globalMinYear = minYear;
  globalMaxYear = maxYear;

  initializeCardsToDOM(cards);
  createTypeFilters(allTypesSet, typeDiv);
  createYearSlider(minYear, maxYear, yearDiv);

  console.log("Data loaded + filters created.");
}

// Create Card objects from the JSON
function initializeCards(projects) {
    const cards = [];
    const allTypesSet = new Set();
  
    let minY = Infinity;
    let maxY = -Infinity;

  projects.forEach((project, i) => {
    // Create the card from the class
    const card = new Card(
      `card-${i}`,
      'panel',
      project.name,
      'cardTitle',
      project.img,
      project.tags,
      project.type,
      project.year,
      project.subtitle,
      project.description,
      project.video,
      project.bwImg,
      project.blogItems,
      project.hasVideo
    );
    cards.push(card);
    allCards.push({ card, div: card.div, inDOM: true });

    // gather types
    project.type.forEach(t => allTypesSet.add(t));

    // track min & max year
    const y = parseInt(project.year, 10);
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  });

  return [cards, allTypesSet, minY, maxY];
}

// Attach cards to the DOM
function initializeCardsToDOM(cards) {
  divWindow.innerHTML = '';
  cards.forEach(card => {
    divWindow.appendChild(card.div);
  });

  // Expand first card by default
  if (cards.length > 0) {
    cards[0].div.classList.add("expanded");
  }

  // Ensure none are hidden initially
  cards.forEach((c) => c.div.classList.remove("hidden"));

  // Recalc widths for the initial layout
  recalcWidths();
}

// =============== Filtering ===============
function createTypeFilters(allTypesSet, containerDiv) {
    allTypesSet.forEach(typeName => {
      const btn = document.createElement('button');
      btn.className = 'type-chip';
      btn.innerHTML = `
        <span class="chip-label">${typeName}</span>
        <span class="chip-close">
            <i class="fa fa-times fa-fw"></i>
        </span>
      `;
      containerDiv.appendChild(btn);
  
      btn.addEventListener('click', () => {
        if (selectedTypes.has(typeName)) {
          selectedTypes.delete(typeName);
          btn.classList.remove('active-chip');
        } else {
          selectedTypes.add(typeName);
          btn.classList.add('active-chip');
        }
        applyFilters();
      });
    });
  }
  
  function createYearSlider(minYear, maxYear, containerEl) {

  const sliderDiv = document.createElement('div');
  sliderDiv.id = 'slider'; 
  containerEl.appendChild(sliderDiv);

  noUiSlider.create(sliderDiv, {
    start: [minYear,  maxYear], // thumbs at min, max
    connect:true,
    range: {
      min: minYear,
      max: maxYear
    },
    format: {
        to: (val) => Math.round(val),
        from: (val) => Number(val)
      },
    step: 1,         // only whole years
    tooltips: true,  // show the year values above the thumbs
  });

  // Listen for slider changes
  sliderDiv.noUiSlider.on('update', (values, handle) => {
    // values = [minVal, maxVal]
    const [valMin, valMax] = values.map(v => parseInt(v, 10));
    yearRange.min = valMin;
    yearRange.max = valMax;
    applyFilters();
  });

  // Initialize yearRange right away
  yearRange.min = minYear;
  yearRange.max = maxYear;
  }
  
  
  // Actually filter
  function applyFilters() {
    const noTypesSelected = (selectedTypes.size === 0);
    const isYearFullRange = (yearRange.min === globalMinYear && yearRange.max === globalMaxYear);
  
    // If no type selected and slider at full range => show all
    if (noTypesSelected && isYearFullRange) {
      allCards.forEach(({ div }) => {
        div.classList.remove("hidden");
        div.classList.remove("expanded");
      });
      expandFirstVisiblePanel();
      recalcWidths();
      return;
    }
  
    allCards.forEach(({ card, div }) => {
      const projectYear = parseInt(card.year, 10);
      const projectTypes = card.types;
  
      const typeMatch = matchesTypes(projectTypes);
      const yearMatch = matchesYear(projectYear);
  
      if (typeMatch && yearMatch) {
        div.classList.remove("hidden");
      } else {
        div.classList.add("hidden");
        div.classList.remove("expanded");
      }
    });
  
    expandFirstVisiblePanel();
    recalcWidths();
  }
  
  function matchesTypes(projectTypes) {
    if (selectedTypes.size === 0) return true;
    return projectTypes.some(t => selectedTypes.has(t));
  }
  
  function matchesYear(y) {
    return y >= yearRange.min && y <= yearRange.max;
  }

// Expand the first visible panel
function expandFirstVisiblePanel() {
  const panels = document.querySelectorAll(".panel");
  const visiblePanels = Array.from(panels).filter(p => !p.classList.contains("hidden"));
  if (visiblePanels.length > 0) {
    // Remove expansion from all
    panels.forEach(p => p.classList.remove("expanded"));
    // Expand the first visible
    console.log( "visible panels:", visiblePanels, "first one",visiblePanels[0])
    visiblePanels[0].classList.add("expanded");
  }
}

// ---- WIDTH CALCULATION ----
export function recalcWidths() {
  const panels = document.querySelectorAll(".panel");
  // visible panels
  const visiblePanels = Array.from(panels).filter(p => !p.classList.contains("hidden"));

  if (visiblePanels.length === 0) return;

  // Which is expanded?
  let expandedPanel = visiblePanels.find(p => p.classList.contains("expanded"));
  if (!expandedPanel) {
    visiblePanels[0].classList.add("expanded");
    expandedPanel = visiblePanels[0];
  }

  // Figure out widths: expanded vs. non-expanded
  const nonExpandedPanels = visiblePanels.filter(p => p !== expandedPanel);

  // leftover = 100% - (#nonExpanded * MIN_WIDTH)
  const leftoverWidth = 100 - (nonExpandedPanels.length * MIN_WIDTH);
  const expandedWidth = Math.max(0, leftoverWidth);

  // Assign widths
  nonExpandedPanels.forEach(p => {
    p.style.flexBasis = `${MIN_WIDTH}%`;
    p.style.flexGrow = 0;
    p.style.flexShrink = 0;
    p.style.opacity = "1";
  });
  
  expandedPanel.style.flexBasis = `${expandedWidth}%`;
  expandedPanel.style.flexGrow = 0;
  expandedPanel.style.flexShrink = 0;
  expandedPanel.style.opacity = "1";

  // For hidden panels => collapse
  panels.forEach(p => {
    if (p.classList.contains("hidden")) {
      p.style.flexBasis = 0;
      p.style.opacity = "0";
    }
  });
}
