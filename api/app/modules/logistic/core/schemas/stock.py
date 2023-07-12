from sqlalchemy import Column, Integer, String, ForeignKey
from ....common.core.db.database import Base
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

class Stock(Base):
  __tablename__ = 'stocks'

  uuid = Column(UUID(as_uuid=True), primary_key=True, index=True)
  product_uuid = Column(UUID, ForeignKey('products.uuid'))
  storage_uuid = Column(UUID, ForeignKey('storages.uuid'))
  quantity = Column(Integer)
  comment = Column(String)

  products = relationship("Product")
  storages = relationship("Storage")
