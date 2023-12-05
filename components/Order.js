class Order
{
    constructor(dishes, tableNumber, specialComments)
    {
        this._dishes = dishes;
        this._tableNumber = tableNumber;
        this._specialComments = specialComments;
    }

    get dishes()
    {
        return this._dishes;
    }

    get tableNumber()
    {
        return this._tableNumber;
    }

    get specialComments()
    {
        return this._specialComments;
    }

    calculateOrderTime()
    {
        return this._dishes.reduce(
            (total, dish) => total + dish.preparationTime,
            0
        );
    }
}

module.exports = Order;