const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function FriendsList(names) {
    this.names = names;
}

rl.question("¿Cuántos amigos quieres agregar? ", (number) => {

    let names = [];
    let count = 0;

    function askName() {

        if (count < Number(number)) {

            rl.question("Escribe un nombre: ", (name) => {
                names.push(name);
                count++;
                askName();
            });

        } else {

            const friends = new FriendsList(names);
            console.log(friends.names);
            rl.close();

        }
    }

    askName();
});