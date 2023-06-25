from fastapi import APIRouter
from .company import company
from .user import user
from .type_user import type_user

router=APIRouter()
router.include_router(company.router, tags=["🏭 company"], prefix="/company")
router.include_router(user.router, tags=["👮‍♂️ auth"], prefix="/auth")
router.include_router(type_user.router, tags=["👨‍💻 type user"], prefix="/type_user")