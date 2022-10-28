from typing import List

from pydantic import BaseModel


class Item(BaseModel):
    id: int
    name: str
    price: float
    quantity: int

    class Config:
        orm_mode = True


class Order(BaseModel):
    id: str
    itens: List[Item]
    total: float

    class Config:
        orm_mode = True
