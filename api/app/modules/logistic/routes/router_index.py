from .deposit import router as deposit_router
from fastapi import APIRouter

router = APIRouter()

router.include_router(deposit_router, tags=["🏢 deposit"], prefix="/deposit")