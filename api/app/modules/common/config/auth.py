from uuid import UUID
from app.modules.common.controller.user import get_user_by_email
from app.modules.common.core.schemas.user import User
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
import datetime
import os

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_HOURS = 3
auth = HTTPBearer()

def create_token(to_encode: dict):
  expire = datetime.datetime.now() + datetime.timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
  to_encode["exp"]= expire
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt


def verify_token(auth_header: HTTPAuthorizationCredentials = Depends(auth)) -> User:
  token = auth_header.credentials
  token_decode = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
  if token_decode is None:
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail="Invalid token",
      headers={"WWW-Authenticate": "Bearer"},
    )
  user = get_user_by_email(token_decode['email'])
  if user is None:
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail="Invalid token",
      headers={"WWW-Authenticate": "Bearer"},
    )
  return user
