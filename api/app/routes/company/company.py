from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.controller.company import create_company
from app.controller.user import get_user_by_id
from app.core.schemas.user import User
from app.config.dependences import get_db
from app.core.schemas.companys import Company

router=APIRouter()

@router.get('/')
async def get_all_companys(db: Session = Depends(get_db)):
  companys = get_all_companys(db)
  return companys

@router.post('/')
async def add_company(
    name:str, 
    description: str,
    user_id: int,
    db: Session = Depends(get_db),
  ):
  try:
    user = get_user_by_id(user_id, db)
    company = Company(name=name, description=description, users=[user])
    create_company(company, db)
    return company
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
