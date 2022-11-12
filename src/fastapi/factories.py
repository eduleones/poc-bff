import uuid
from typing import List

from .models import Item, Order


async def make_items(quantity: int = 10) -> List[Item]:
    return [
        Item(id=i, name=f"Item {i}", price=5.0, quantity=1) for i in range(quantity)
    ]


async def make_orders(quantity: int = 10) -> List[Order]:
    orders = []
    for i in range(quantity):
        items = await make_items()
        orders.append(Order(id=str(uuid.uuid4()), items=items, total=10.0))

    return orders
