from fastapi import APIRouter


router=APIRouter()
company=[
    {
      "id":"1",
      "name":"caca"
    }
]

@router.get('/')
async def companys():
  return company


@router.get('/{id}')
async def company_id(id: str):
    for c in company:
        if c['id'] == id:
            return c
    return {"message": "Company not found"}

@router.post('/')
async def add_company(name:str):
  new_company={
    "id": str(len(company) + 1),
    'name': name
  }
  company.append(new_company)
  return new_company

@router.get('/search')
async def search_companies(name: str):
    matching_companies = [c for c in company if name.lower() in c['name'].lower()]
    return matching_companies
