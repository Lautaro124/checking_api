from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from ..utils.auth import verify_token


class HTTPAuthentication(HTTPBearer):
  def __init__(self, auto_error: bool = True):
    super(HTTPAuthentication, self).__init__(auto_error=auto_error)
  
  async def __call__(self, request: Request):
    credentials: HTTPAuthorizationCredentials = await super(HTTPAuthentication, self).__call__(request)
    if credentials:
      if not credentials.scheme == "Bearer":
        raise HTTPException(status_code=403, detail="Invalid authentication token schema")
      if not verify_token(credentials.credentials):
        raise HTTPException(status_code=403, detail="Invalid or expired authentication token")
      return credentials.credentials
    else:
      raise HTTPException(status_code=403, detail="Invalid authorization code")
