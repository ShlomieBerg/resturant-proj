const { Dish, Menu, Resturant, Table } = require('./components');


const dish1 = new Dish('Spaghetti Carbonara', 12.99, 30);
const dish2 = new Dish('Chicken Alfredo', 14.99, 40);

const menu = new Menu([dish1, dish2]);

const table1 = new Table();
const table2 = new Table();
const table3 = new Table();
const table4 = new Table();

const resturant = new Resturant(menu, [table1, table2, table3, table4]);

module.exports = resturant;