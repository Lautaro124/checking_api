from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.controller.company import get_company_by_id
from app.controller.type_user import get_type_user_by_id
from app.controller.user import create_user, get_user_by_email
from app.config.dependences import get_db
from app.core.schemas.user import User
from app.utils.hash_password import hash_password, verify_password

router = APIRouter()

@router.get('/')
async def login(email: str, password: str, db: Session = Depends(get_db)):
  try:
    user = get_user_by_email(email, db)
    if verify_password(password, user.password):
      return user
    else:
      raise Exception('Unaiuthorized user')
  except Exception as e:
    raise HTTPException(status_code=401, detail=str(e))

@router.post('/')
async def register(
    email: str,
    password:str,
    uuid: str,
    username: str,
    company_id: int,
    type_user_id: int,
    is_superuser: bool,
    db: Session = Depends(get_db),
  ):
  try:
    company = get_company_by_id(company_id, db)
    type_user = get_type_user_by_id(type_user_id, db)
    hashed_password = hash_password(password)
    user = User(
      email=email,
      password=hashed_password,
      username=username,
      uuid=uuid,
      company=company,
      type_user=type_user,
      is_superuser=is_superuser,
    )
    db_user = create_user(user, db)
    return db_user
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))