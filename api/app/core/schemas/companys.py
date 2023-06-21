from sqlalchemy import Column, Integer, String
from ..db.database import Base
from sqlalchemy.orm import relationship

class Company(Base):
  __tablename__ = 'companys'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True)
  description = Column(String)
 
  users = relationship("User", back_populates="company")
