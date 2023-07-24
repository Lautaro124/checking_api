from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ....common.core.db.database import Base
from sqlalchemy.dialects.postgresql import UUID


class Deposit(Base):
    __tablename__ = 'deposits'

    uuid = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True)
    address = Column(String, unique=False)
    city = Column(String, unique=False)
    country = Column(String, unique=False)
    postal_code = Column(String, unique=False)
    contact_name = Column(String, unique=False)
    contact_phone = Column(String, unique=False)
    contact_email = Column(String, unique=False)
    company_id = Column(Integer, ForeignKey(
        "companys.id", ondelete="SET NULL"))

    storages = relationship("Storage")
    company = relationship("Company", uselist=False)
