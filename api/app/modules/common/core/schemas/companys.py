from sqlalchemy import Column, Integer, String
from ..db.database import Base

class Company(Base):
    __tablename__ = 'companys'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, unique=True)
    description = Column(String)
