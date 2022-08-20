import DrinkingUser from './CreateUserDb';
import { getDatabase, ref, set, get } from "firebase/database";

export default class DrinkingUserManager {
    constructor(db) {
        this.db = db;
    }


    //cocktails / ingredients  винести в змінну

    //* get data from db
    fetchUserById(id) {
        const user = new DrinkingUser(id);
        return get(ref(db, 'drinkingUser/' + id))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let dataDb = snapshot.val();
                    //TODO change 
                    let cocktails = dataDb.cocktails === undefined ? [] : dataDb.cocktails;
                    // dataDb ? (drinks = Object.values(dataDb)) : (drinks = false);
                    user.importCocktails(cocktails);
                    //TODO by ingredient

                    return user;
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

    //* set data to db
    //Створюю юзера якщо його немає Можна повернути привітання.
    pushUserById(user) {
        let id = user.getId();
        let dataDb = {};
        dataDb.cocktails = user.getFavouritesCocktails();
        dataDb.ingredients = user.getFavouritesIngredients();
        return set(ref(db, 'drinkingUser/' + id), dataDb)
            .then((response) => {
                console.log("🚀 ~ DrinkingUserManager ~ .then ~ response", response)
                //TODO response.status
            })
            .catch((error) => {
                console.error(error);
            });
    }


    pushCoctaileToDbByUserId(id) {
        let id = user.getId();
        let dataDb = {};

        return set(ref(db, 'drinkingUser/' + id + '/cocktails/'), user.getFavouritesCocktails())
            .then((response) => {
                console.log("🚀 ~ DrinkingUserManager ~ .then ~ response", response)
                //TODO response.status
            })
            .catch((error) => {
                console.error(error);
            });
    }
    //TODO pushIngredientsByUserId(id)


    //delete user coctailByUserID
    //delete user ingredientsByUserID

}