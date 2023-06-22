from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.controller.company import get_company_by_id
from app.controller.type_user import get_type_user_by_id

from app.controller.user import create_user, get_user_by_email
from app.config.dependences import get_db
from app.core.schemas.user import User

router = APIRouter()

@router.get('/')
async def login(email: str, password: str, db: Session = Depends(get_db)):
  try:
    user = get_user_by_email(email, db)
    if user.password == password:
      return user
    else:
      raise HTTPException(status_code=400, detail="Password incorrect")
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))

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
    user = User(
      email=email,
      password=password,
      username=username,
      uuid=uuid,
      company=company,
      type_user=type_user,
      is_superuser=is_superuser,
    )
    create_user(user, db)
    return user
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))