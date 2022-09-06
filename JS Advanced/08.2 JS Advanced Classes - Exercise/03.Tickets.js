function result(arrOfTickets, sortArg) {
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    arrOfTickets.forEach(element => {
        let [destination, price, status] = element.split('|');
        tickets.push(new Ticket(destination, Number(price), status));
    });

    tickets.sort((a, b) => {
        if (sortArg == 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortArg == 'price') {
            return a.price - b.price;
        } else if (sortArg == 'status') {
            return a.status.localeCompare(b.status);
        }
    })

    return tickets;
}

console.log(result(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))

console.log(result(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
))