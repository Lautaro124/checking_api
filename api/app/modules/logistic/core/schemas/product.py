from sqlalchemy import Column, Integer, String
from ....common.core.db.database import Base
from sqlalchemy.dialects.postgresql import UUID

class Product(Base):
    __tablename__ = 'products'

    uuid = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True)
    code_number = Column(String, unique=True)
    description = Column(String)
    quantity = Column(Integer)