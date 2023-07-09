from sqlalchemy import Column, Integer, String
from ..db.database import Base

class TypeUser(Base):
  __tablename__ = 'type_users'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True)