import uuid
from uuid import UUID
from datetime import datetime
from sqlalchemy.orm import Session
from app.models.enums import InvestigationStatus
from app.models.investigation import Investigation
from app.repositories.investigation_repository import InvestigationRepository


class InvestigationService:

    def __init__(self):
        self.repository = InvestigationRepository()

    def create_investigation(
        self,
        db: Session,
        original_filename: str,
        stored_filename: str,
        file_size: int,
    ) -> Investigation:

        investigation = Investigation(
            investigation_number=self.generate_investigation_number(),
            original_filename=original_filename,
            stored_filename=stored_filename,
            file_size=file_size,
            status=InvestigationStatus.UPLOADED,
        )

        return self.repository.create(
            db=db,
            investigation=investigation,
        )

    def generate_investigation_number(self) -> str:

        today = datetime.now().strftime("%Y%m%d")

        unique = uuid.uuid4().hex[:6].upper()

        return f"INV-{today}-{unique}"
    
    def get_investigation(
        self,
        db: Session,
        investigation_id: UUID,
    ) -> Investigation:

        investigation = self.repository.get_by_id(
            db=db,
            investigation_id=investigation_id,
        )

        if investigation is None:
            raise ValueError("Investigation not found.")

        return investigation
    
    def get_all_investigations(
        self,
        db: Session,
    ):

        return self.repository.get_all(db)
    
    def update_status(
        self,
        db: Session,
        investigation: Investigation,
        status: InvestigationStatus,
    ) -> Investigation:

        return self.repository.update_status(
            db=db,
            investigation=investigation,
            status=status,
        )