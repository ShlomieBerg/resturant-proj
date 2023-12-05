const router = require('express').Router();
const { Dish } = require('../components')
const resturant = require('../myResturant');

const menu = resturant.menu;
// routes
router.get("/present", (req, res) =>
{
    try {
        res.status(200).json({ dishes: menu.presentMenu() });
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed");
    }

});


router.post('/add-dish', (req, res) =>
{
    const { name, price, preparationTimeInMinutes } = req.body;

    if (!name || !price || !preparationTimeInMinutes) {
        return res.status(400).json({ error: 'Incomplete dish information' });
    }

    if (!!menu.isDishExists(name)) {
        return res.status(400).json({ error: 'Dish already exists' });
    }

    const newDish = new Dish(name, price, preparationTimeInMinutes);
    menu.addDish(newDish);

    res.status(200).json({ message: 'Dish added to the menu successfully', menu: menu.presentMenu() });
});

module.exports = router;