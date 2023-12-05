class Resturant
{
    constructor(menu, tables)
    {
        this._menu = menu;
        this._tables = tables;
    }

    get menu()
    {
        return this._menu;
    }

    get availableTables()
    {
        return this._tables.filter(table => !table.occupied);
    }
}

module.exports = Resturant;