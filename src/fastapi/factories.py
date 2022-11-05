import uuid
from typing import List

from .models import Item, Order


def make_items(quantity: int = 10) -> List[Item]:
    return [
        Item(id=i, name=f"Item {i}", price=5.0, quantity=1) for i in range(quantity)
    ]


def make_orders(quantity: int = 10) -> List[Order]:
    return [
        Order(id=str(uuid.uuid4()), items=make_items(), total=10.0)
        for i in range(quantity)
    ]
