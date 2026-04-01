from fastapi import FastAPI
from api.routes import router


app = FastAPI(title="ML Recommendation Service")

app.include_router(router)

@app.get("/")
def health_check():
    return {"status" : "ML Service running"}