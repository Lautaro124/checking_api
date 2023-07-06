from sqlalchemy import Column, Integer, String,ForeignKey
from ....common.core.db.database import Base
from sqlalchemy.orm import relationship

class Storage(Base):
    __tablename__ = 'storages'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    location = Column(String, unique=False)
    product_id = Column(Integer, ForeignKey("products.id", ondelete="SET NULL"), nullable=True)
    company_id = Column(Integer, ForeignKey("companys.id"))

    company = relationship("Company", back_populates="storages", uselist=False)
    product = relationship("Product",back_populates="storages", nullable=True)