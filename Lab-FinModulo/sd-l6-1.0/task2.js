// Task 2: listUsers()

import { getServerURL } from "./task1.js";

export function listUsers() {
    fetch (`${getServerURL}/users`)
        .then (respuesta => respuesta.json())
        .then (users => console.log (users));
}
