// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

export function addUser(first_name, last_name, email){
    

    fetch (`${getServerURL()}/users`)
        .then(response => response.json())
        .then( users => {

            const maxId = Math.max (...users.map(user => user.id));
            const newId = maxId +1;

            const user = {
                id: newId,
                first_name: first_name,
                last_name: last_name,
                email: email
                };



                return fetch ((`${getServerURL()}/users`), {
                       method: "POST",
                        headers: {
                        "Content-Type": "application/json"
                         },

                        body: JSON.stringify(user)
        
        });
 })

        .then(response => response.json())
        .then(result => console.log(result));
    
    }





