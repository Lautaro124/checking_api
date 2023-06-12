import firebase_admin
from firebase_admin import credentials

credential = credentials.Certificate('app/config/credentials.json')
firebase_app = firebase_admin.initialize_app(credential=credential)
