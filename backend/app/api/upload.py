from fastapi import APIRouter, File, UploadFile, HTTPException

from app.services.upload_service import UploadService

router = APIRouter(
    prefix="/api/v1",
    tags=["Upload"]
)

upload_service = UploadService()


@router.post("/upload")
async def upload_log(file: UploadFile = File(...)):
    """
    Upload a security log file.
    """

    try:
        response = await upload_service.upload_file(file)
        return response

    except ValueError as ex:
        raise HTTPException(status_code=400, detail=str(ex))

    except Exception as ex:
        raise HTTPException(status_code=500, detail=str(ex))