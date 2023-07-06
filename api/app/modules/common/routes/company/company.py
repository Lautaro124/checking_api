from fastapi import APIRouter, Depends, Form, HTTPException, status
from sqlalchemy.orm import Session
from app.modules.common.core.models.company import CompanyBase
from app.modules.common.core.schemas.companys import Company

from app.modules.common.config.dependences import get_db
from app.modules.common.controller.company import create_company, get_companys
from app.modules.common.controller.user import get_user_by_id

router=APIRouter()

@router.get('/')
async def get_all_companys(db: Session = Depends(get_db)):
  try:
    companys = get_companys(db)
    return companys
  except Exception as e:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

@router.post('/', response_model=CompanyBase)
async def add_company(
    company: CompanyBase = Depends(CompanyBase.as_form),
    db: Session = Depends(get_db),
  ):
  try:
    company = Company(name=company.name, description=company.description)
    create_company(company, db)
    return company
  except Exception as e:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
