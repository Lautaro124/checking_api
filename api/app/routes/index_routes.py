from fastapi import APIRouter
from .company import company
from .user import user

router=APIRouter()
router.include_router(company.router, tags=["🏭 company"], prefix="/company")
router.include_router(user.router, tags=["👮‍♂️ auth"], prefix="/auth")