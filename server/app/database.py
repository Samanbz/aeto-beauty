from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()
db_user = os.environ['DB_USER']
db_pwd = os.environ['DB_PWD']
db_port = os.environ['DB_PORT']

SQLALCHEMY_DATABASE_URL = f"""postgresql://{
    db_user}:{db_pwd}@localhost:{db_port}/aeto-beauty"""

engine = create_engine(SQLALCHEMY_DATABASE_URL)

if not database_exists(engine.url):
    create_database(engine.url)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
