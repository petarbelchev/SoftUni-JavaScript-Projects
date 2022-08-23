function create(words) {
   for (const str of words) {
      let newP = document.createElement('p');
      newP.textContent = str;
      newP.style.display = 'none';
      let newDiv = document.createElement('div');
      newDiv.addEventListener('click', showUp);
      newDiv.appendChild(newP);
      document.getElementById('content').appendChild(newDiv);
   }

   function showUp(e) {
      e.target.children[0].style.display = '';
   }
}