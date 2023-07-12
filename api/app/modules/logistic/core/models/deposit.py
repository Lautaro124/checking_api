from pydantic import BaseModel
from fastapi import Form

class DepositModelCreated(BaseModel):
  id: int = Form(...)
  name: str = Form(...)
  description: str = Form(...)
  location: str = Form(...)
  company_id: int = Form(...)
  storages_id: str = Form(...)

  @classmethod
  def as_form(
    cls,
    id: int = Form(...),
    name: str = Form(...),
    description: str = Form(...),
    location: str = Form(...),
    company_id: int = Form(...),
    storages_id: str = Form(...)
  ):
    return cls(
      id=id,
      name=name,
      description=description,
      location=location,
      company_id=company_id,
      storages_id=storages_id
    )
  
  class Config:
    orm_mode = True