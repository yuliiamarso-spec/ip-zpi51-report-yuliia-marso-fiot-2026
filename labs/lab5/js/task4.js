function labTask4ObjArray(){ 
    
    function Storage(items) {
        this.items = items;

        this.getItems = function() {
            return this.items;
        };

        this.addItems = function(item) {
            this.items.push(item);
        };

        this.removeItem = function(item) {
            const index = this.items.indexOf(item);

            if (index !== -1) {
                this.items.splice(index, 1);
            }
        };
    }

    const fruits = ["apple", "banana", "mango"];

    const storage = new Storage(fruits);

    console.log(storage.getItems());

    storage.addItems("orange");
    console.log(storage.getItems());

    storage.removeItem("banana");
    console.log(storage.getItems());
}