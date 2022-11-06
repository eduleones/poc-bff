const uuid = require('uuid');
const OrderDto = require('./models').OrderDto
const ItemDto = require('./models').ItemDto


async function makeItems (quantity = 10) {
    const items = []
    for (let i = 0; i < quantity; i++) {
        const price = Math.random() * 100
        const quantity = Math.random() * 10
        const item = new ItemDto(uuid.v4(), `Item ${i}`, price, quantity)
        items.push(item)
    }
    return items
}

async function makeOrders (quantity = 10) {
    const orders = []
    for (let i = 0; i < quantity; i++) {
        const items = await makeItems()
        order = new OrderDto(uuid.v4(), items, 10.0)
        orders.push(order)
    }
    return orders
}

module.exports = { makeOrders }