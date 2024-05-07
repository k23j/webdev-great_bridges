class FooterGridItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode:'open'});

    const title = this.getAttribute('title') || 'Default Title';
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.textAlign = 'start';
    titleElement.style.height = '2em';
    
    const slot = document.createElement('slot');
    this.style.textAlign = 'justify';
    
    this.style.width = '24%';
    this.style.maxWidth = '250px';

    slot.style.fontSize = '.85em';


    this.shadowRoot.appendChild(titleElement);
    this.shadowRoot.appendChild(slot);
  }
}

customElements.define('footer-grid-item', FooterGridItem);