from sqlalchemy import Column, Integer, String,ForeignKey
from ..db.database import Base
from sqlalchemy.orm import relationship

class Company(Base):
  __tablename__ = 'companys'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True)
  description = Column(String)
  storage_id = Column(Integer, ForeignKey("storage.id", ondelete="SET NULL"), nullable=True)
  users = relationship("User", back_populates="company")
  storage = relationship("Storage", back_populates="company")