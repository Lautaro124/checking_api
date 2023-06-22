from app.core.schemas.companys import Company
from app.core.schemas.user import User
from sqlalchemy.orm import Session

def get_all_companys(db: Session):
  return db.query(Company).all()

def get_company_by_id(id: int, db: Session):
  return db.query(Company).filter(Company.id == id).first()

def get_company_by_name(name: str, db: Session):
  return db.query(Company).filter(Company.name == name).first()

def create_company(company: Company, db: Session):
  db.add(company)
  db.commit()
  db.refresh(company)
  return company

def update_company(id: int, company: Company, db: Session):
  db_company = db.query(Company).filter(Company.id == id).first()
  db_company.name = company.name
  db_company.description = company.description
  db.commit()
  db.refresh(db_company)
  return db_company