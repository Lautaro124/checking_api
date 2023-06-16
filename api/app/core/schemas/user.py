from sqlalchemy import Column, Integer, String, Boolean
from ..db.database import Base

class User(Base):
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True, index=True)
  uuid = Column(String, unique=True)
  username = Column(String, unique=True)
  email = Column(String, unique=True)
  password = Column(String, nullable=True)
  is_active = Column(Boolean, default=True)
  is_superuser = Column(Boolean, default=False)
