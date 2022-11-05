from time import sleep
from typing import List

from fastapi import FastAPI
from fastapi.responses import ORJSONResponse

from .factories import make_orders
from .models import Order

app = FastAPI(default_response_class=ORJSONResponse)


@app.get("/orders", status_code=200, response_model=List[Order])
def get_orders():
    return make_orders(30)
