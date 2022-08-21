function generateReport() {
   let headers = document.getElementsByTagName('input');
   let pickedColsIdxs = [];

   for (let i = 0; i < headers.length; i++) {
      if (headers[i].checked == true) {
         pickedColsIdxs.push(i);
      }
   }

   let rows = document.querySelectorAll('tbody tr');
   let output = [];

   for (let row = 0; row < rows.length; row++) {
      let currObj = {};

      for (let col = 0; col < headers.length; col++) {
         if (pickedColsIdxs.includes(col)) {
            let newProperty = headers[col].name;
            let newValue = rows[row].children[col].textContent;
            currObj[newProperty] = newValue;
         }
      }

      output.push(currObj);
   }

   document.getElementById('output').value = JSON.stringify(output);
}