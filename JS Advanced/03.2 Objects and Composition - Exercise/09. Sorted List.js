function createSortedList() {
    let specialObject = {
        collection: [],
        size: 0,
        add(element) {
            this.collection.push(element);
            this.size++;
            this.collection.sort((a, b) => a - b);
            return this.collection;
        },
        remove(position) {
            let index = position - 1;
            if (this.collection.length > 0 && index >= 0 && index < this.collection.length) {
                this.collection.splice(index, 1);
                this.size--;
                this.collection.sort((a, b) => a - b);
                return this.collection;
            }
        },
        get(index) {
            if (this.collection.length > 0 && index >= 0 && index < this.collection.length) {
                return this.collection[index];
            }
        }
    }
    return specialObject;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));