function solve() {
   Array.from(document.getElementsByClassName('add-product')).forEach(btn => btn.addEventListener('click', addProduct));
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);   
   let textArea = document.getElementsByTagName('textarea')[0];
   let purchasedProducts = {};

   function addProduct(e) {
      let parent = e.target.parentElement.parentElement;
      let productName = parent.getElementsByClassName('product-details')[0].children[0].textContent;
      let price = Number(parent.getElementsByClassName('product-line-price')[0].textContent);      
      
      if (!purchasedProducts[productName]) purchasedProducts[productName] = 0;
      purchasedProducts[productName] += price;
      
      textArea.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
   }

   function checkOut() {
      Array.from(document.getElementsByTagName('button')).forEach(btn => btn.disabled = true);
      
      let list = Object.keys(purchasedProducts);
      let totalPrice = 0;

      for (const product in purchasedProducts) {
         totalPrice += purchasedProducts[product];
      }
      
      textArea.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
}