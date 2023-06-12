from firebase_admin import auth
from ..config.firebase import firebase_app

def authenticate_user(email: str):
  try:
    auth_email = auth.get_user_by_email(email=email, app=firebase_app)
    if auth_email:
      return auth_email.uid
    return None
  except:
    return None

def verify_token(token: str):
  try:
    decoded_token = auth.get_user(uid=token, app=firebase_app)
    if decoded_token:
      return True
    return False
  except:
    return False