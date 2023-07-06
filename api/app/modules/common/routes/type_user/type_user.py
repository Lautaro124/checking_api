from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session


from app.modules.common.core.schemas.type_user import TypeUser
from app.modules.common.config.dependences import get_db
from app.modules.common.controller.type_user import create_type_user, get_all_type_users, get_type_user_by_id

router = APIRouter()

@router.get('/')
async def get_type_users(db: Session = Depends(get_db)):
  try:
    type_users = get_all_type_users(db)
    return type_users
  except Exception as e:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.get('/{type_user_id}')
async def get_type_user(type_user_id: int, db: Session = Depends(get_db)):
  try:
    type_user = get_type_user_by_id(type_user_id, db)
    return type_user
  except Exception as e:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
  
@router.post('/')
async def add_type_user(
    name: str,
    db: Session = Depends(get_db),
  ):
  try:
    type_user = TypeUser(name=name)
    create_type_user(type_user, db)
    return type_user
  except Exception as e:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))