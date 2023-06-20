from fastapi import FastAPI
from .core.db.database import Base, engine
from .routes.index_routes import router

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.include_router(router)