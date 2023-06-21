from sqlalchemy import Column, Integer, String, Boolean,ForeignKey
from ..db.database import Base
from sqlalchemy.orm import relationship

class TypeUser(Base):
  __tablename__ = 'type_users'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True)

  user = relationship("User", back_populates="type_user")