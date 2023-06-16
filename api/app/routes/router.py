from .auth import auth
from fastapi import APIRouter
from .company import company

router = APIRouter()
router.include_router(auth.router, tags=["auth"], prefix="/auth")
router.include_router(company.router)