from pydantic import BaseModel
from fastapi import Form


class DepositModelCreated(BaseModel):
    name: str = Form(...)
    address: str = Form(...)
    city: str = Form(...)
    country: str = Form(...)
    postal_code: str = Form(...)
    contact_name: str = Form(...)
    contact_phone: str = Form(...)
    contact_email: str = Form(...)
    company_id: int = Form(...)
    storages_id: str = Form(...)

    @classmethod
    def as_form(
        cls,
        name: str = Form(...),
        address: str = Form(...),
        city: str = Form(...),
        country: str = Form(...),
        postal_code: str = Form(...),
        contact_name: str = Form(...),
        contact_phone: str = Form(...),
        contact_email: str = Form(...),
        company_id: int = Form(...),
        storages_id: str = Form(...)
    ):
        return cls(
            name=name,
            company_id=company_id,
            storages_id=storages_id,
            address=address,
            city=city,
            country=country,
            postal_code=postal_code,
            contact_name=contact_name,
            contact_phone=contact_phone,
            contact_email=contact_email
        )

    class Config:
        orm_mode = True
