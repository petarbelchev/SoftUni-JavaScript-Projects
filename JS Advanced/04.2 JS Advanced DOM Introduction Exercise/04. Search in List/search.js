function search() {
   let towns = Array.from(document.getElementById('towns').children);
   let input = document.getElementById('searchText').value;
   let counter = 0;
   for (const town of towns) {
      town.style = '';
      if (town.textContent.includes(input)) {
         town.style = 'font-weight: bold; text-decoration: underline';
         counter++;
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
