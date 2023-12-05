class Menu
{
    constructor(dishes)
    {
        this._dishes = Array.isArray(dishes) ? dishes : [];
    }

    addDish(dish)
    {
        this._dishes.push(dish);
    }

    get dishes()
    {
        return this._dishes;
    }

    isDishExists(dishName)
    {
        return this._dishes.find(dish => dish.name === dishName);
    }


    presentMenu()
    {
        return this._dishes.map(({ name, price }) => ({ name, price }));
    }
}

module.exports = Menu;