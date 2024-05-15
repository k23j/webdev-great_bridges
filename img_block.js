(function(){
  class ImgBlock extends HTMLElement {
    constructor(){

      super();

      this.attachShadow({mode:'open'});

      const src = this.getAttribute('src') || null;
      const title = this.getAttribute('title') || "default_title";
      const text = this.textContent.trim() || 'default_text';

      const outerDiv = document.createElement('div');
      outerDiv.style.display = "inline-block";
      outerDiv.style.width = "300px";
      outerDiv.style.height = "300px";
      outerDiv.style.border = "1px solid #44444444";

      const textDiv = document.createElement('div');
      textDiv.style.padding = "16px";
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";
      textDiv.style.justifyContent = "space-between";

      const img = document.createElement('img');
      img.setAttribute("src", src);
      img.style.objectFit = "cover";
      img.style.width = "100%";
      img.style.height = "200px";

      const header = document.createElement('h5');
      header.innerHTML = title;
      header.style.margin = "0";

      const textElement = document.createElement('span');
      textElement.innerHTML = text;
      textElement.margin = '0';
      textElement.style.fontSize = "12px";
      textElement.style.alignSelf = "flex-end";


      textDiv.appendChild(header);
      textDiv.appendChild(textElement);

      outerDiv.appendChild(img);
      outerDiv.appendChild(textDiv);

      this.shadowRoot.appendChild(outerDiv);
    }
  }

  customElements.define('img-block', ImgBlock);

})();