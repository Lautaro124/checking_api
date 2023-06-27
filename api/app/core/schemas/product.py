from sqlalchemy import Column, Integer, String
from ..db.database import Base
from sqlalchemy.orm import relationship

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True)
    name = Column(String, unique=True)
    company = relationship("Company", back_populates="products", nullable=True)
    storage = relationship("Storage", back_populates="products", nullable=True)