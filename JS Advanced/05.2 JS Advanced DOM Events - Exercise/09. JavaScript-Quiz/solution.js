function solve() {
   Array.from(document.getElementsByClassName('quiz-answer low-value'))
      .forEach(btn => btn.addEventListener('click', moveUp));
   Array.from(document.getElementsByClassName('quiz-answer high-value'))
      .forEach(btn => btn.addEventListener('click', moveUp));   

   let sectionIndex = 0;
   let sections = document.getElementsByTagName('section');
   let points = 0;

   function moveUp(e) {
      if (sectionIndex == 0 && e.currentTarget.dataset.quizindex == 2) points++;
      else if (sectionIndex == 1 && e.currentTarget.dataset.quizindex == 4) points++;
      else if (sectionIndex == 2 && e.currentTarget.dataset.quizindex == 2) points++;

      sections[sectionIndex].classList.add('hidden');

      if (sectionIndex < 2) {
         sections[++sectionIndex].classList.remove('hidden');
      } else {
         document.getElementById('results').style.display = 'block';
         let textResult = document.querySelector('.results-inner h1');

         if (points == 3) {
            textResult.textContent = 'You are recognized as top JavaScript fan!';
         } else {
            textResult.textContent = `You have ${points} right answers`;
         }
      }
   }
}
