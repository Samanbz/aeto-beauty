from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, schemas, models
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "httpsgit ://91.132.144.32",
    "https://aeto-beauty.com",
    "https://www.aeto-beauty.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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


@app.middleware("http")
async def test_origin(request: Request, call_next):
    origin = request.headers.get("Origin")
    print("Origin: " + origin)
    print(origin in origins)
    response = await call_next(origin)
    return response


@app.get("/")
def root():
    return {"message": "AetO Beauty API"}


@app.post("/register")
def post_register_request(request: schemas.RegisterRequest, db: Session = Depends(get_db)):
    return crud.submit_register_request(db, request)


@app.post("/contact")
def post_contact_requet(request: schemas.ContactRequest, db: Session = Depends(get_db)):
    return crud.submit_contact_request(db, request)
