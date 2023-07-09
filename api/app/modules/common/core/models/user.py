from pydantic import BaseModel, EmailStr
from fastapi import Form

class UserModelCreated(BaseModel):
  username: str = Form(...)
  email: EmailStr = Form(...)
  password: str = Form(...)
  company_name: str = Form(...)
  type_user_id: str = Form(...)

  @classmethod
  def as_form(
      cls,
      username: str = Form(...),
      email: EmailStr = Form(...),
      password: str = Form(...),
      company_name: str = Form(...),
      type_user_id: str = Form(...),
    ):
    return cls(
      username=username,
      email=email,
      password=password,
      company_name=company_name,
      type_user_id=type_user_id,
    )
  
  class Config:
    orm_mode = True
    schema_extra = {
      "example": {
        "username": "John Doe",
        "email": "jon@gmail.sd",
        "password": "123456",
      }
    }