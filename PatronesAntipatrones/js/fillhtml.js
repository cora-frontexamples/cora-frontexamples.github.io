// import patterns from './teory/patterns.json' assert {type: 'json'};
// import {antipatterns} from './teory/antipatterns.json' assert {type: 'json'};
// const fs = require(['fs']);
// const patterns = JSON.parse(fs.readFileSync('./teory/patterns.json', 'utf-8'))
// patterns = JSON.parse(patterns);
// const antipatterns = require(['./teory/antipatterns']);
// const patterns = fetch("./teory/patterns")
//      .then(response => response.json())
//       .then(json => data = (json));


let sw = document.getElementById("ispatron");
let lp = document.getElementById("lst-patterns");
let la = document.getElementById("lst-antipatterns");
let sp = document.getElementById("sect-patterns");
let sa = document.getElementById("sect-antipatterns");

const short = (txt, pos = 0, pref = '') => {
  return pref + txt.split(' ').at(pos).toLowerCase();
}


// LINK NAVS
const set_nav = ( list ) => {
  let html = '';
  list.forEach(type => {
    html += `
      <details open>
        <summary>
          <a href="#${short(type.name,-1)}">${type.name}</a>
        </summary>
        <div class="lst-links">`;

    type.list.forEach( item => {
      html += `
          <a href="#${short(item.title)}">${item.title}</a>`
    } );
    
    html += `
        </div>
      </details>
    `;
  });
  return html;
};

const set_navs = () => {
  lp.innerHTML = set_nav(patterns);
  la.innerHTML = set_nav(antipatterns);
};


// MAIN
const set_section = ( list ) => {
  let html = '';
  list.forEach(type => {
    html += `
    <div class="type" id="${short(type.name,-1)}">
      <h3>${type.name}</h3>`;

    type.list.forEach( item => {
      html += `
      <div class="item" id="${short(item.title)}">
        <div class="description">
          <h4>${item.title}</h4>
          <div class="summary">${item.summary}</div>
          <div class="examples">
      `;

      item.applications.forEach( a => {
        html += `<span>${a}</span>`;
      } );

      html += `
          </div>
        </div>
        <img src="${item.image}"/>
      </div>
      `;
    });
    
    html += `
    </div>`;
  });
  return html;
};

const set_sections = () => {
  sp.innerHTML += set_section(patterns);
  sa.innerHTML += set_section(antipatterns);
};


set_navs();
set_sections();