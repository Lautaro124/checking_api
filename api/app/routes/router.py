from .auth import auth
from fastapi import APIRouter

router = APIRouter()
router.include_router(auth.router, tags=["auth"], prefix="/auth")