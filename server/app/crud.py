from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime
from sqlalchemy import func
import smtplib
import ssl
import os
from dotenv import load_dotenv

load_dotenv()
server = os.environ.get('SMTP_SERVER')
port = os.environ.get('SMTP_PORT')
sender = os.environ.get('SMTP_EMAIL')
pwd = os.environ.get("SMTP_PWD")

weekdays = ["Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday", "Sunday"]


def notify_email(request: schemas.ContactRequest):
    date = datetime.now()

    message = f"""Subject: {request.firstname} {request.lastname}\n\n
    Date Submitted: {weekdays[date.isoweekday() - 1]} {date.date()}\n
    First Name: {request.firstname}\n
    Last Name: {request.lastname}\n
    Email: {request.email}\n
    Phone: {request.phone}\n
    Message: {request.message}\n
    """

    if (type(request) == schemas.RegisterRequest):
        date = datetime.now()

        message = f"""Subject:{request.firstname} {request.lastname} wants to register!\n\n
    Date Submitted: {weekdays[date.isoweekday() - 1]} {date.date()}
     First Name: {request.firstname}\n
     Last Name: {request.lastname}\n
     Email: {request.email}\n
     Phone: {request.phone}\n
     Position: {request.position}\n
     Company Name: {request.company_name}\n
     Company Type: {request.company_type}\n
     Company Website: {request.company_website}\n
     Company Address: {request.company_address}\n
     Estimated Quantity: {request.estimated_quantity}\n
     Number of Locations: {"N/A" if request.num_of_locations == -1 else request.num_of_locations}\n
     Further Notes: {request.message}\n
     """

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(server, port, context=context) as server_session:
        server_session.login(sender, pwd)
        server_session.sendmail(sender, sender, message)


def submit_register_request(db: Session, request: schemas.RegisterRequest):
    notify_email(request)

    db_request = models.RegisterRequest(
        date_submitted=datetime.now(),
        firstname=request.firstname,
        lastname=request.lastname,
        email=request.email,
        phone=request.phone,
        position=request.position,
        company_name=request.company_name,
        company_type=request.company_type,
        company_website=request.company_website,
        company_address=request.company_address,
        estimated_quantity=request.estimated_quantity,
        num_of_locations=request.num_of_locations,
        message=request.message
    )
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request


def submit_contact_request(db: Session, request: schemas.ContactRequest):
    notify_email(request)

    db_request = models.ContactRequest(
        date_submitted=datetime.now(),
        firstname=request.firstname,
        lastname=request.lastname,
        email=request.email,
        phone=request.phone,
        message=request.message
    )
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request
