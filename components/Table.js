class Table
{
    constructor(id)
    {
        //table id
        this._isOccupied = false;
    }

    get occupied()
    {
        return this._isOccupied;
    }

    set occupied(value)
    {
        this._isOccupied = value
    }
}

module.exports = Table;