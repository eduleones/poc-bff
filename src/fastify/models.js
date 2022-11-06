class ItemDto{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class OrderDto {
    constructor(id, items, total) {
        this.id = id;
        this.items = items;
        this.total = total;
    }
}

module.exports = { ItemDto, OrderDto }