window.addEventListener("load", solve);

function solve() {
   const titleInputField = document.getElementById('post-title');
   const categoryInputField = document.getElementById('post-category');
   const contentInputField = document.getElementById('post-content');
   
   document.getElementById('publish-btn').addEventListener('click', () => {
      if (titleInputField.value !== '' && categoryInputField.value !== '' && contentInputField.value !== '') {
         moveForReview(titleInputField.value, categoryInputField.value, contentInputField.value);
         clearInputFields();
      }
   })
   
   function moveForReview(title, category, content) {
      let article = document.createElement('article');
      article.appendChild(makeElement('h4', title));
      article.appendChild(makeElement('p', `Category: ${category}`));
      article.appendChild(makeElement('p', `Content: ${content}`));

      let liElem = makeElement('li', undefined, 'rpost');
      liElem.appendChild(article);
      
      let approveBtn = makeElement('button', 'Approve', 'action-btn approve');
      approveBtn.addEventListener('click', (e) => moveToUploaded(e, article));
      liElem.appendChild(approveBtn);
      
      let editBtn = makeElement('button', 'Edit', 'action-btn edit');
      editBtn.addEventListener('click', (e) => moveForEdit(e, title, category, content))
      liElem.appendChild(editBtn);
      
      document.getElementById('review-list').appendChild(liElem);
   }
   
   function makeElement(type, textContent, className) {
      let element = document.createElement(type);
      if (textContent) element.textContent = textContent;
      if (className) element.className = className;
      return element;
   }
   
   function clearInputFields() {
      titleInputField.value = '';
      categoryInputField.value = '';
      contentInputField.value = '';
   }
   
   const publishedList = document.getElementById('published-list');
   
   function moveToUploaded(e, article) {
      e.target.parentElement.remove();
      let liElem = makeElement('li', undefined, 'rpost');
      liElem.appendChild(article);
      publishedList.appendChild(liElem);
   }
   
   function moveForEdit(e, title, category, content) {
      titleInputField.value = title;
      categoryInputField.value = category;
      contentInputField.value = content;
      e.target.parentElement.remove();
   }
   
   document.getElementById('clear-btn').addEventListener('click', () => {
      while (publishedList.children.length > 0) {
         publishedList.children[0].remove();
      }
   })
}
