function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let input = document.getElementById('searchField').value;
      for (const row of rows) {
         row.classList.remove('select');
         let text = String(row.innerText);
         if (text.includes(input)) {
            row.classList.add('select');            
         }
      }
   }
}