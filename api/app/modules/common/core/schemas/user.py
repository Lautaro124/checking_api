from sqlalchemy import Column, Integer, String, Boolean,ForeignKey
from ..db.database import Base
from sqlalchemy.orm import relationship

class User(Base):
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True, index=True)
  uuid = Column(String, unique=True)
  username = Column(String, unique=True)
  email = Column(String, unique=True)
  password = Column(String, nullable=True)
  is_active = Column(Boolean, default=True)
  is_superuser = Column(Boolean, default=False)
  company_id = Column(Integer, ForeignKey("companys.id", ondelete="SET NULL"), nullable=True)
  type_user_id = Column(Integer, ForeignKey("type_users.id", ondelete="SET NULL"), nullable=True, unique=True)

  company = relationship("Company", uselist=False)
  type_user = relationship("TypeUser", uselist=False)
