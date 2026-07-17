from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.health import router as health_router
from app.api.upload import router as upload_router
from app.api.investigation import router as investigation_router



app = FastAPI(
    title="SentinelAI Backend",
    description="Backend API for the Autonomous Multi-Agent Security Operations Center (AI-SOC)",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(upload_router)
app.include_router(investigation_router)

@app.get("/", tags=["Home"])
async def home():
    """
    Root endpoint.
    """
    return {
        "message": "Welcome to SentinelAI Backend",
        "documentation": "/docs"
    }