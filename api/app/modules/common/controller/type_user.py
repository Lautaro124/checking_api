from app.core.schemas.type_user import TypeUser
from sqlalchemy.orm import Session

def get_all_type_users(db: Session):
  return db.query(TypeUser).all()

def get_type_user_by_id(id: int, db: Session):
  return db.query(TypeUser).filter(TypeUser.id == id).first()

def create_type_user(type_user: TypeUser, db: Session):
  db.add(type_user)
  db.commit()
  db.refresh(type_user)
  return type_user