from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.investigation_schema import InvestigationResponse
from app.services.investigation_service import InvestigationService

router = APIRouter(
    prefix="/api/v1/investigations",
    tags=["Investigations"],
)

service = InvestigationService()
@router.get(
    "",
    response_model=list[InvestigationResponse],
)
def get_all_investigations(
    db: Session = Depends(get_db),
):

    return service.get_all_investigations(
        db=db,
    )

@router.get(
    "/{investigation_id}",
    response_model=InvestigationResponse,
)
def get_investigation(
    investigation_id: UUID,
    db: Session = Depends(get_db),
):

    try:

        return service.get_investigation(
            db=db,
            investigation_id=investigation_id,
        )

    except ValueError as ex:

        raise HTTPException(
            status_code=404,
            detail=str(ex),
        )