from fastapi import FastAPI
from .routes import router

app = FastAPI()
app.include_router(router.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

