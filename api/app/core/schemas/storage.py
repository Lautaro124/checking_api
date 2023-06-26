from sqlalchemy import Column, Integer, String
from ..db.database import Base
from sqlalchemy.orm import relationship

class Storage(Base):
  __tablename__ = 'storage'

  id = Column(Integer, primary_key=True, index=True)
  uuid = Column(String, unique=True)
  name = Column(String, unique=True)
  location = Column(String, unique=False)
  company_id = relationship("Companys", back_populates="storage")
 

