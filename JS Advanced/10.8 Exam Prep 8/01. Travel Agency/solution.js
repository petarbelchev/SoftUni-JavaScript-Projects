window.addEventListener('load', solution);

function solution() {
   const fnameField = document.getElementById('fname');
   const emailField = document.getElementById('email');
   const phoneField = document.getElementById('phone');
   const addressField = document.getElementById('address');
   const codeField = document.getElementById('code');
   const submitBtn = document.getElementById('submitBTN');
   const infoPreviewList = document.getElementById('infoPreview');
   const editBtn = document.getElementById('editBTN');
   const continueBtn = document.getElementById('continueBTN');
   const block = document.getElementById('block');

   submitBtn.addEventListener('click', function (ev) {
      ev.preventDefault();

      if (fnameField.value != '' && emailField.value != '') {
         let firstName = fnameField.value;
         let email = emailField.value;
         let phone = phoneField.value;
         let address = addressField.value;
         let postCode = codeField.value;

         fnameField.value = '';
         emailField.value = '';
         phoneField.value = '';
         addressField.value = '';
         codeField.value = '';

         liGenerator(`Full Name: ${firstName}`, infoPreviewList);
         liGenerator(`Email: ${email}`, infoPreviewList);
         liGenerator(`Phone Number: ${phone}`, infoPreviewList);
         liGenerator(`Address: ${address}`, infoPreviewList);
         liGenerator(`Postal Code: ${postCode}`, infoPreviewList);

         submitBtn.disabled = true;
         editBtn.disabled = false;
         continueBtn.disabled = false;

         editBtn.addEventListener('click', () => {
            fnameField.value = firstName;
            emailField.value = email;
            phoneField.value = phone;
            addressField.value = address;
            codeField.value = postCode;

            submitBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;

            infoPreviewList.innerHTML = '';
         });

         continueBtn.addEventListener('click', () => {
            block.innerHTML = `<h3>Thank you for your reservation!</h3>`;
         });
      }
   });

   function liGenerator(content, parent) {
      let elem = document.createElement('li');
      elem.textContent = content;
      parent.appendChild(elem);
   }
}
