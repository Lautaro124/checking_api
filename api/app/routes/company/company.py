from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.schemas.user import User
from ...config.dependences import get_db
from ...core.schemas.companys import Company

router=APIRouter()

@router.get('/')
async def get_all_companys(db: Session = Depends(get_db)):
  return db.query(Company).all()

@router.post('/')
async def add_company(
    name:str, 
    description: str,
    db: Session = Depends(get_db),
  ):
  user_id = db.query(User).first()
  company = Company(name=name, description=description, users=[user_id])
  db.add(company)
  db.commit()
  db.refresh(company)
  return company
