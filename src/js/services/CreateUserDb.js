export default class DrinkingUser {
    constructor(id) {
        this.ID = id;
        this.favouritesCocktails = [];
        this.favouritesIngredients = [];
    }

    getId() {
        return this.ID;
    }


    addFavouriteCocktailById(id) {
        if (!this.favouritesCocktails.includes(id)) {
            this.favouritesCocktails.push(id);
        }
        return this;
    }

    deleteFavouritesCocktailsById(id) {
        this.favouritesCocktails.filter(data => data !== id)
        return this;
    }

    getFavouritesCocktails() {
        return this.favouritesCocktails;
    }

    hasFavouriteCocktailById(id) {
        return this.favouritesCocktails.includes(id);
    }



    //TODO описуємо інгрідієнти

    addFavouriteIngredientById(id) {
        if (!this.favouritesIngredients.includes(id)) {
            this.favouritesIngredients.push(id);
        }
        return this;
    }

    deleteFavouritesIngredientById(id) {
        this.favouritesIngredients.filter(data => data !== id)
        return this;
    }

    getFavouritesIngredients() {
        return this.favouritesIngredients;
    }

    hasFavouritesIngredientById(id) {
        return this.favouritesIngredients.includes(id);
    }


    importCocktails(data) {
        for (let i in data) {
            this.addFavouriteCocktailById(data[i])
        }
        return this;
    }

}