from fastapi import Form
from pydantic import BaseModel

class CompanyBase(BaseModel):
    
  name: str = Form(...)
  description: str = Form(...)
  
  @classmethod
  def as_form(
    cls,
    name: str = Form(...),
    description: str = Form(...),
  ):
    return cls(
          name=name,
          description=description,
      )
  
  class Config:
    orm_mode = True
    schema_extra = {
        "example": {
          "id": 1,
          "name": "Company name",
          "description": "Company description"
        }
      }