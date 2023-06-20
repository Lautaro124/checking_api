from sqlalchemy import Column, Integer, String, Boolean
from ..db.database import Base
from sqlalchemy.orm import relationship

class Company(Base):
  __tablename__ = 'companys'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True)
  description = Column(String, unique=True)
  users=relationship("Users",back_populates="users")
