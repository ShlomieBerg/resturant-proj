const router = require('express').Router();
const { Menu, Order } = require('../components');
const resturant = require('../myResturant');

router.post('/take-order', (req, res) =>
{
    const { dishes } = req.body;

    if (!Array.isArray(dishes)) {
        return res.status(400).json({ error: 'Please send an array of dishes by name' });
    }

    const orderDishes = dishes.map(resturant.menu.isDishExists).filter(dish => dish);
    if (orderDishes.length < dishes.length) {
        return res.status(400).json({ error: 'One or more of the dishes does not exists' });
    }

    const tableNum = resturant.getFreeTable(); // Need to 

    const newOrder = new Order(orderDishes, tableNum);

    //  send the kitchen (which is not implemented yet the new order)

    res.status(200).json({ message: 'Dish added to the menu successfully', menu: menu.presentMenu() });
});

module.exports = router;