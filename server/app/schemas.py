from pydantic import BaseModel
from datetime import datetime


class ContactRequest(BaseModel):
    firstname: str
    lastname: str
    email: str
    phone: str
    message: str

    class Config:
        orm_mode = True


class RegisterRequest(ContactRequest):

    position: str

    company_name: str
    company_type: str
    company_website: str
    company_address: str
    estimated_quantity: str
    num_of_locations: int

    class Config:
        orm_mode = True
