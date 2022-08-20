import { initializeApp } from 'firebase/app';
// import { getDatabase, getDatabase, ref, update, get } from "firebase/database";

import { getDatabase, ref, set, get, remove } from "firebase/database";

import { firebaseConfig } from '../config/firebaseConfig';

import './UserManager';

initializeApp(firebaseConfig);

// import { getUser } from "./firebase-authorization";

const db = getDatabase();

console.log(db);


//створюю функціонал юзера.
// let userManager = new userManager(db);

// userManager.fetchUserById(id);
//далі отримаємо користувача


// userManager.pushUserById(user);



// export function addCocktailToDb(objForDb) {
//     try {
//         set(ref(db, "task/" + objForDb.date), objForDb);
//     } catch (error) {
//         console.log(error);
//     }
// }

// addTaskToDb('1')



// user = {
//     userId: "id",
//     userName: "name",
//     coctaile: { 0: 0, 1: 1, 2: 2 },
//     ingredients: { 0: 0, 1: 1, 2: 2 }
// }

// // * ArrayCocktail[1, 2, 3, 4, 5]
// // * ArrayIngredien[11, 22, 33, 44, 55]



// user = {
//     userId: "id",
//     userName: "name",
//     coctaile: []
//     ingredients: []
// }


// function getUserInfo(message) {
//     const { userName, uid } = getUser();
//     return {
//         uid,
//         userName,
//         coctaile: [],
//         ingredients: [],
//     }
// }















//     const { photoURL, uid } = getUser();
//     return {
//         uid,
//         coctaile: {
//             id,
//         },
//         ingredient: {
//             id,
//         },
//         photoURL,
//     }
// }









/* // function getUserInfo(message) {
//     const { photoURL, uid } = getUser();
//     return {
//         uid,
//         coctaile: {
//             id,
//         },
//         ingredient: {
//             id,
//         },
//         photoURL,
//     }
// }






function getRecomendedFilms() {
    return get(ref(db, `users/${userId}/recommend/results`)).then((snapshot) => {
        if (snapshot.exists())
            return snapshot.val()
    }).catch((error) => {
        console.log(error.message);
        return []
    });
}

function getFilms(src) {
    return get(ref(db, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val()[src]) {
                return snapshot.val()[src]
            } else return []

        } else return []

    }).catch((error) => {
        console.log(error.message);
        return []
    });
}


function updateRecommendFilms(results) {
    update(ref(db, `users/${userId}/recommend`), { results }).catch(error => {
        console.log(error.message);

    });
}



function updateFilms(results, src) {
    if (userId === null) {
        Notify.failure('Please register for access to library', notifyConfigs);
        return;
    }

    get(ref(db, `users/${userId}/${src}/${[results.id]}`))
        .then(snapshot => {
            if (snapshot.exists()) {
                Notify.info(
                    `${userName}, you alredy have this film in your library`,
                    notifyConfigs
                );
            } else {
                if (src === 'queue') {
                    getRecommendId(results.id);
                }
                update(ref(db, `users/${userId}/${src}`), {
                    [results.id]: results,
                }).then(() =>
                    Notify.success(
                        `${userName}, you have add film to your library`,
                        notifyConfigs
                    )
                );
            }
        })
        .catch(error => {
            console.log(error.message);
        });
}

function deletFilm(id, src) {
    update(ref(db, `users/${userId}/${src}`), { [id]: null }).then(() =>
        Notify.warning(
            `${userName}, you have delet film from your library`,
            notifyConfigs
        )
    );
}

export {
    getUserData,
    updateFilms,
    getFilms,
    deletFilm,
    updateRecommendFilms,
    getRecomendedFilms,
};










export function addTaskToDb(objForDb) {
    try {
        set(ref(db, "task/" + objForDb.date), objForDb);
    } catch (error) {
        console.log(error);
    }
}


export function getTaskFromDb(key = "") {
    let url = "task/";
    if (key) {
        url += key;
    }

    return get(ref(db, url))
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log("No data available");
                console.log(snapshot);
                return null;
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function updateTaskDB(idTask, isChecked) {
    getTaskFromDb(idTask)
        .then((data) => {
            data.checked = isChecked;
            return data;
        })
        .then((data) => addTaskToDb(data))
        .catch((error) => console.log(error));
}



export function deleteTask(id) {
    console.log(id);
    try {
        remove(ref(db, "task/" + id));
    } catch (error) {
        console.log(error);
    }
}
 */