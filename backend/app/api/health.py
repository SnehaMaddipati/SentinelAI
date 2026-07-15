from fastapi import APIRouter

router = APIRouter(
    prefix="/health",
    tags=["Health"]
)


@router.get("/")
async def health_check():
    """
    Health check endpoint to verify that the backend is running.
    """
    return {
        "status": "healthy",
        "service": "SentinelAI Backend",
        "version": "1.0.0"
    }