from fastapi import FastAPI
from app.modules.common.core.db.database import Base, engine
from app.modules.common.routes.index_routes import router

Base.metadata.create_all(bind=engine)
app = FastAPI(
  title="Gestion app",
  version="1.0.0",
  description="This app is for manage the users and logistics systems of the company",
  docs_url="/api/docs",
  redoc_url="/api/redocs",
  openapi_url="/api/openapi.json",
)
app.include_router(router, prefix="/api/v1")