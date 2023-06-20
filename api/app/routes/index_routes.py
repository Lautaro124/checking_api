from fastapi import APIRouter
from .company import company

router=APIRouter()
router.include_router(company.router,tags=["companias"])