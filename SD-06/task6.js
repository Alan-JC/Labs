const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ShoppingList(items) {
    this.items = items;
}

rl.question("¿Cuántos productos quieres agregar? ", (number) => {

    let items = [];
    let count = 0;

    function askItem() {

        if (count < Number(number)) {

            rl.question("Nombre del producto: ", (name) => {

                rl.question("Cantidad: ", (quantity) => {

                    items.push({
                        name: name,
                        quantity: Number(quantity)
                    });

                    count++;
                    askItem();
                });

            });

        } else {

            const shoppingList = new ShoppingList(items);

            console.log(shoppingList.items);

            rl.close();
        }
    }

    askItem();
});