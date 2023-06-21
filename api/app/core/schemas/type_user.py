from sqlalchemy import Column, Integer, String, Boolean,ForeignKey
from ..db.database import Base
from sqlalchemy.orm import relationship

class TipeUser(Base):
  __tablename__ = 'tipe_users'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String, unique=True)
  user_id = Column(Integer, ForeignKey("users.id"))
  user = relationship("User", back_populates="tipe_user")