from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.investigation_schema import InvestigationResponse
from app.services.upload_service import UploadService

router = APIRouter(
    prefix="/api/v1",
    tags=["Upload"],
)

upload_service = UploadService()


@router.post(
    "/upload",
    response_model=InvestigationResponse,
)
async def upload_log(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    """
    Upload a security log file and create an investigation.
    """

    try:
        response = await upload_service.upload_file(
            db=db,
            file=file,
        )

        return response

    except ValueError as ex:
        raise HTTPException(
            status_code=400,
            detail=str(ex),
        )

    except Exception as ex:
        raise HTTPException(
            status_code=500,
            detail=str(ex),
        )