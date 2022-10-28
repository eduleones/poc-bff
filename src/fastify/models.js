const Item = {
    id: { type: 'integer' },
    name: { type: 'string' },
    price: { type: 'number' },
    quantity: { type: 'integer' },
}


const Order = {
    id: { type: 'string' },
    items: { type: 'array', items: Item },
    total: { type: 'number' },
}