window.addEventListener("load", solve);

function solve() {
   const publishBtn = document.getElementById('form-btn');
   const firstNameField = document.getElementById('first-name');
   const lastNameField = document.getElementById('last-name');
   const ageField = document.getElementById('age');
   const storyTitleField = document.getElementById('story-title');
   const genreField = document.getElementById('genre');
   const storyField = document.getElementById('story');
   const previewList = document.getElementById('preview-list');
   const mainDiv = document.getElementById('main');

   publishBtn.addEventListener('click', (ev) => {
      ev.preventDefault();

      if (firstNameField.value == '' ||
         lastNameField.value == '' ||
         ageField.value == '' ||
         storyTitleField.value == '' ||
         genreField.value == '' ||
         storyField.value == '') {

         return;
      }

      let firstName = firstNameField.value;
      let lastName = lastNameField.value;
      let age = ageField.value;
      let storyTitle = storyTitleField.value;
      let genre = genreField.value;
      let story = storyField.value;

      publishBtn.disabled = true;
      firstNameField.value = '';
      lastNameField.value = '';
      ageField.value = '';
      storyTitleField.value = '';
      genreField.value = '';
      storyField.value = '';

      let li = elemGenerator('li', undefined, previewList, 'story-info');
      let article = elemGenerator('article', undefined, li);
      elemGenerator('h4', `Name: ${firstName} ${lastName}`, article);
      elemGenerator('p', `Age: ${age}`, article);
      elemGenerator('p', `Title: ${storyTitle}`, article);
      elemGenerator('p', `Genre: ${genre}`, article);
      elemGenerator('p', story, article);

      let saveBtn = elemGenerator('button', 'Save Story', li, 'save-btn');
      saveBtn.addEventListener('click', () => {
         mainDiv.innerHTML = `<h1>Your scary story is saved!</h1>`;
      });

      let editBtn = elemGenerator('button', 'Edit Story', li, 'edit-btn');
      editBtn.addEventListener('click', () => {
         publishBtn.disabled = false;
         firstNameField.value = firstName;
         lastNameField.value = lastName;
         ageField.value = age;
         storyTitleField.value = storyTitle;
         genreField.value = genre;
         storyField.value = story;

         li.remove();
      });

      let deleteBtn = elemGenerator('button', 'Delete Story', li, 'delete-btn');
      deleteBtn.addEventListener('click', () => {
         li.remove();
         publishBtn.disabled = false;
      });
   });

   function elemGenerator(type, content, parent, className) {
      let elem = document.createElement(type);
      if (content) elem.textContent = content;
      if (parent) parent.appendChild(elem);
      if (className) elem.className = className;
      return elem;
   }
}
