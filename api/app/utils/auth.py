from firebase_admin import auth

def authenticate_user(email: str):
  try:
    auth_email = auth.get_user_by_email(email=email)
    if auth_email:
      return True
    return False
  except:
    return None

def verify_token(token: str):
  try:
    decoded_token = auth.verify_id_token(token)
    if decoded_token:
      return True
    return False
  except:
    return None