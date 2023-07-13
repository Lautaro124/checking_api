from app.modules.common.core.schemas.user import User
from sqlalchemy.orm import Session
import uuid

def get_all_users(db: Session):
  return db.query(User).all()

def get_user_by_id(uuid: str, db: Session):
  id = uuid.UUID(uuid)
  return db.query(User).filter(User.uuid == id).first()

def get_user_by_email(email: str, db: Session):
  return db.query(User).filter(User.email == email).first()

def create_user(user: User, db: Session):
  db.add(user)
  db.commit()
  db.refresh(user)
  return user

def update_user(id: int, user: User, db: Session):
  db_user = db.query(User).filter(User.id == id).first()
  db_user.name = user.name
  db_user.email = user.email
  db_user.password = user.password
  db.commit()
  db.refresh(db_user)
  return db_user