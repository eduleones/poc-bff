const uuid = require('uuid');
const Order = require('./models').Order
const Item = require('./models').Item


async function makeItems (quantity = 10) {
    const items = []
    for (let i = 0; i < quantity; i++) {
        items.push({
            id: i,
            name: `Item ${i}`,
            price: Math.random() * 100,
            quantity: Math.floor(Math.random() * 10),
        })
    }
    return items
}

async function makeOrders (quantity = 10) {
    const orders = []
    for (let i = 0; i < quantity; i++) {
        const items = await makeItems()
        orders.push({
        id: uuid.v4(),
        items,
        total: 10.00,
        })
    }
    return orders
}

module.exports = { makeOrders }