// Task 4: delUser(number)


import { getServerURL } from "./task1.js";


export function delUser(number) {

    return fetch (`${getServerURL()}/users/${number}`, {
                           method: "DELETE",
                            });

                        }