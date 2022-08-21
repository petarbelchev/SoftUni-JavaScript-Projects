function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let arrOfRestaurants = JSON.parse(document.querySelector('textarea').value);
      let restaurants = {};

      for (const restaurant of arrOfRestaurants) {
         let restData = restaurant.split(' - ');
         let name = restData[0];

         let workers = restData[1].split(', ').map(str => {
            let splitedData = str.split(' ');
            let worker = { name: splitedData[0], salary: Number(splitedData[1]) }
            return worker;
         });

         if (!restaurants[name]) {
            restaurants[name] = workers;
         } else {
            workers.forEach(worker => restaurants[name].push(worker));
         }
      }

      let bestAvSalary = 0;
      let bestSalary = 0;
      let bestRestaurant = '';

      for (const restaurant in restaurants) {
         let sumSalaries = 0;
         let currBestSalary = 0;

         for (const worker of restaurants[restaurant]) {
            sumSalaries += worker.salary;

            if (currBestSalary < worker.salary) { currBestSalary = worker.salary }
         }

         let currAvSalary = sumSalaries / restaurants[restaurant].length;

         if (bestAvSalary < currAvSalary) {
            bestAvSalary = currAvSalary;
            bestSalary = currBestSalary;
            bestRestaurant = restaurant;
         }
      }

      document.getElementsByTagName('p')[0].innerText = `Name: ${bestRestaurant} Average Salary: ${bestAvSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      let bestWorkers = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary);
      let workersOutput = '';

      for (const worker of bestWorkers) {
         workersOutput += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      document.getElementsByTagName('p')[1].innerText = workersOutput;
   }
}