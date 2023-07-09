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

class UserModelResponse(BaseModel):
  uuid: str
  email: EmailStr
  is_active: bool
  company_id: int
  type_user_id: int
  username: str
  
  class Config:
    schema_extra = {
      "example": {
          "email": "test@test.com",
          "uuid": "f692d44f-efda-4501-82f5-b14c35c45a61",
          "is_active": True,
          "company_id": 1,
          "type_user_id": 1,
          "username": "Nahuel",
        }
    }