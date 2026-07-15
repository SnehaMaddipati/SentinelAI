from fastapi import FastAPI
from app.api.health import router as health_router

app = FastAPI(
    title="SentinelAI Backend",
    description="Backend API for the Autonomous Multi-Agent Security Operations Center (AI-SOC)",
    version="1.0.0"
)

app.include_router(health_router)

@app.get("/", tags=["Home"])
async def home():
    """
    Root endpoint.
    """
    return {
        "message": "Welcome to SentinelAI Backend",
        "documentation": "/docs"
    }