class PostResume extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode:'open'});

    const date = this.getAttribute('date') || 'xx-mmmm-yyyy';
    const link = this.getAttribute('href') || 'index.html';
    const title = this.textContent.trim() || 'default_text';

    const div = document.createElement('div');

    const dateDiv = document.createElement('div');
    dateDiv.style.display = 'flex';
    dateDiv.style.flexDirection = 'row';
    dateDiv.style.alignContent = 'center';

    const titleElement = document.createElement('h4');
    titleElement.textContent = title;
    titleElement.style.textAlign = 'start';
    titleElement.style.marginBottom = '.3em';
    titleElement.style.opacity = '.8';
    
    const dateElement = document.createElement('p');
    dateElement.textContent = date;
    dateElement.style.margin = 0;
    dateElement.style.marginLeft = '.5em';
    dateElement.style.opacity = '.7';
  //   margin-bottom: 0px;
  // margin-top: 0px;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('height', '18px');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('width', '18px');
    svg.setAttribute('fill', '#75FBFD');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'm612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z');

    svg.appendChild(path);

    dateDiv.appendChild(svg);
    dateDiv.appendChild(dateElement);

    div.appendChild(titleElement);
    div.appendChild(dateDiv);

    this.shadowRoot.appendChild(div);
  }
}

customElements.define('post-resume', PostResume);