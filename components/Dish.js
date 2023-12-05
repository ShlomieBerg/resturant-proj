class Dish
{
    constructor(name, price, preparationTimeInMinutes)
    {
        this._name = name;
        this._price = price;
        this._preparationTimeInMinutes = preparationTimeInMinutes;
    }

    get name()
    {
        return this._name;
    }

    get price()
    {
        return this._price;
    }

    get preparationTime()
    {
        return this._preparationTimeInMinutes;
    }
}

module.exports = Dish;