from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, schemas, models
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "AetO Beauty API"}


@app.post("/register")
def post_register_request(request: schemas.RegisterRequest, db: Session = Depends(get_db)):
    return crud.submit_register_request(db, request)


@app.post("/contact")
def post_contact_requet(request: schemas.ContactRequest, db: Session = Depends(get_db)):
    return crud.submit_contact_request(db, request)
