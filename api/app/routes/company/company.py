from fastapi import APIRouter

router=APIRouter()
company=[
  {"name":"caca"}
]

@router.get('/')
async def companys():
  return company
