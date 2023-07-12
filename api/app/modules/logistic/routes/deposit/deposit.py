from fastapi import APIRouter, Depends, HTTPException, status
from app.modules.logistic.core.models.deposit import DepositModelCreated
from app.modules.common.config.dependences import get_db
from app.modules.logistic.core.schemas.deposit import Deposit

router = APIRouter()

@router.get("/${deposit_name}")
async def get_your_deposit(
  deposit_name: str,
  db = Depends(get_db)
):
  deposit = db.query(Deposit).filter(Deposit.name == deposit_name).first()
  if not deposit:
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND,
      detail=f"Depos {deposit_name} not found"
    )
  return deposit

@router.post("/")
async def create_deposit(
  deposit: DepositModelCreated = Depends(DepositModelCreated.as_form),
  db = Depends(get_db)
):
  db.add(deposit)
  db.commit()
  db.refresh(deposit)
  return deposit