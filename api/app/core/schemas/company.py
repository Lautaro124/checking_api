from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..db.database import Base

class Company(Base):
  __tablename__ = "companies"

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True, index=True)
  description = Column(String, index=True)
  owner_id = Column(Integer, ForeignKey("users.id"))
  owner = relationship("User", back_populates="companies")
  employees = relationship("User", back_populates="company")
