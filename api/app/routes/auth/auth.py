from fastapi import APIRouter, HTTPException, Depends

from app.config.header_auth import HTTPAuthentication
from ...utils.auth import authenticate_user, verify_token
router = APIRouter()

@router.post("/login")
async def login(email: str):
  user_id = authenticate_user(email)
  if user_id is None:
    return HTTPException(status_code=403, detail="User does not exist")
  return { 'userId': user_id }

@router.post("/sociaLogin", dependencies=[Depends(HTTPAuthentication())])
def auth_token(token: str):
  token_verificed = verify_token(token)
  if not token_verificed:
    return HTTPException(status_code=403, detail="Token does not exist")
  return { 'verified': True }

@router.post("/logout", dependencies=[Depends(HTTPAuthentication())])
def logout():
  return { 'logout': True }