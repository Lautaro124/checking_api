from sqlalchemy import Column, String,ForeignKey
from ....common.core.db.database import Base
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

class Storage(Base):
    __tablename__ = 'storages'

    uuid = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True)
    location = Column(String, unique=False)
    description = Column(String)
    products_id = Column(UUID, ForeignKey('products.uuid'))

    products = relationship("Product")