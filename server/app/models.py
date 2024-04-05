from .database import Base
from sqlalchemy import Column, String, DateTime, Integer


class ContactRequest(Base):
    __tablename__ = "contact requests"
    id = Column(Integer,  autoincrement=True, primary_key=True, index=True)
    date_submitted = Column(DateTime)
    firstname = Column(String)
    lastname = Column(String)
    email = Column(String)
    phone = Column(String)
    message = Column(String)


class RegisterRequest(Base):
    __tablename__ = "register requests"

    id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    date_submitted = Column(DateTime)
    firstname = Column(String)
    lastname = Column(String)
    email = Column(String)
    phone = Column(String)
    position = Column(String)

    company_name = Column(String)
    company_type = Column(String)
    company_website = Column(String)
    company_address = Column(String)
    estimated_quantity = Column(String)
    num_of_locations = Column(Integer)
    message = Column(String)
