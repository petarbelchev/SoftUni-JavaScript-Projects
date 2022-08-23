function solve() {
   document.getElementsByTagName('button')[0].addEventListener('click', getProducts);

   function getProducts() {
      let arrOfObjs =JSON.parse(document.getElementsByTagName('textarea')[0].value);
      let tHeads = document.getElementsByTagName('th');
      
      for (const obj of arrOfObjs) {
         let newTr = document.createElement('tr');

         for (const th of tHeads) {
            let newElem;
            
            if (th.textContent == 'Image') {
               newElem = document.createElement('img');
               newElem.src = obj['img'];
            } else {
               newElem = document.createElement('p');
               
               if (th.textContent == 'Name') newElem.textContent = obj['name']
               else if (th.textContent == 'Price') newElem.textContent = obj['price']
               else if (th.textContent == 'Decoration factor') newElem.textContent = obj['decFactor']
               else if (th.textContent == 'Mark') {
                  newElem = document.createElement('input');
                  newElem.type = 'checkbox';
               }
            }
            let newTd = document.createElement('td');
            newTd.appendChild(newElem);
            newTr.appendChild(newTd);
            document.getElementsByTagName('tbody')[0].appendChild(newTr);
         }
      }

      document.getElementsByTagName('button')[1].addEventListener('click', getOrder);
   }

   function getOrder() {
      let outputArea = document.getElementsByTagName('textarea')[1];
      let boughtFurnitures = [];
      let totalPrice = 0;
      let sumDecorationFactor = 0;

      Array.from(document.querySelectorAll('tbody tr')).forEach(tr => {
         if (tr.lastElementChild.children[0].checked) {
            boughtFurnitures.push(tr.children[1].textContent);
            totalPrice += Number(tr.children[2].textContent);
            sumDecorationFactor += Number(tr.children[3].textContent);
         }
      })

      outputArea.value += `Bought furniture: ${boughtFurnitures.join(', ')}\n`;
      outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
      outputArea.value += `Average decoration factor: ${sumDecorationFactor / boughtFurnitures.length}`;
   }
}