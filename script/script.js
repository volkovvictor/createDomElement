'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const DomElement = function(selector, height, width, bg, fontSize) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
   
      let newElem;
   
      this.createElement = function() {
         if (this.selector[0] === '.') {
            newElem = document.createElement('div');
            newElem.classList.add(this.selector.slice(1));
            newElem.textContent = 'я div с классом ' + this.selector.slice(1);
         }
         if(this.selector[0] === '#') {
            newElem = document.createElement('p');
            newElem.setAttribute('id', this.selector.slice(1));
            newElem.textContent = 'я p с id ' + this.selector.slice(1);
         }
   
         newElem.style.cssText = `
         height: ${this.height + 'px'}; 
         width: ${this.width + 'px'};
         background: ${this.bg}; 
         fontSize: ${this.fontSize + 'px'};
         `;
   
         document.body.append(newElem);
         return newElem;
      };
   };
   
   const div = new DomElement('.block', 100, 300, 'red', 24);
   const p = new DomElement('#blockId', 50, 100, 'green', 18);
   
   div.createElement();
   p.createElement();
   
   ///////////////////////
   
   const square = new DomElement('.square', 100, 100, 'blue', 14);
   const squareEl = square.createElement();
   
   let bottom = 0;
   let left = 0;
   
   squareEl.style.position = 'absolute';
   squareEl.style.inset = '0px';
   
   document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowUp') {
         bottom -= 10;
         squareEl.style.top = bottom + 'px';
      }
      if(event.key === 'ArrowRight') {
         left += 10;
         squareEl.style.left = left + 'px';
      }
      if(event.key === 'ArrowDown') {
         bottom += 10;
         squareEl.style.top = bottom + 'px';
      }
      if(event.key === 'ArrowLeft') {
         left -= 10;
         squareEl.style.left = left + 'px';
      }
   });
});