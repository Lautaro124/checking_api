from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.modules.common.core.db.database import Base, engine
from app.modules.common.routes.index_routes import router
from app.modules.logistic.routes.router_index import router as logistic_router

Base.metadata.create_all(bind=engine)
app = FastAPI(
  title="Gestion app",
  version="1.0.0",
  description="This app is for manage the users and logistics systems of the company",
  docs_url="/api/docs",
  redoc_url="/api/redocs",
  openapi_url="/api/openapi.json",
)
# cors
origins = [
  "http://localhost:8080",
  "http://localhost:3000",
]
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)
app.include_router(router, prefix="/api/v1")
app.include_router(logistic_router, prefix="/api/v1/logistic")