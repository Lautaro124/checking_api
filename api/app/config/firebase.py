import firebase_admin
from firebase_admin import credentials, auth

credential = credentials.Certificate('../checking-ce4a3-7c0d2df60772.json')
firebase_admin.initialize_app(credential=credential)