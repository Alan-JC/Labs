// Task 3: addUser(first_name, last_name, email)



export function addUser(first_name, last_name, email){


    const user = {
    first_name: first_name,
    last_name: last_name,
    email: email
    };
    
    fetch ((`${getServerURL()}/users`), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        
        })
        .then(response => Response.json())
        .then(result => console.log(result));



    }





