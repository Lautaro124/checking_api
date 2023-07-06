from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.modules.common.core.schemas.user import User
from app.modules.common.config.dependences import get_db
from app.modules.common.controller.company import get_company_by_id
from app.modules.common.controller.type_user import get_type_user_by_id
from app.modules.common.controller.user import create_user, get_user_by_email
from app.modules.common.utils.hash_password import hash_password, verify_password

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
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))

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
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))