from sqlalchemy import Column, ForeignKey, Integer, String
from ....common.core.db.database import Base
from sqlalchemy.orm import relationship

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    company_id = Column(Integer, ForeignKey('companys.id'))

    company = relationship("Company", back_populates="products", uselist=False)
    storage = relationship("Storage", back_populates="products")