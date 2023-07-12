from sqlalchemy import Column, Integer, String,ForeignKey
from sqlalchemy.orm import relationship
from ....common.core.db.database import Base
from sqlalchemy.dialects.postgresql import UUID


class Deposit(Base):
    __tablename__ = 'deposits'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    location = Column(String, unique=False)
    description = Column(String)
    company_id = Column(Integer, ForeignKey("companys.id", ondelete="SET NULL"))
    storages_id = Column(UUID, ForeignKey('storages.uuid'))

    storages = relationship("Storage")
    company = relationship("Company", uselist=False)