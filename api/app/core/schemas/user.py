from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
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
  company_id = Column(Integer, ForeignKey('companies.id'))
  company = relationship('Company', back_populates='employees')
  companies = relationship('Company', back_populates='owner')
