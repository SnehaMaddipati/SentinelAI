from uuid import UUID

from sqlalchemy.orm import Session

from app.repositories.log_event_repository import LogEventRepository
from app.repositories.investigation_repository import InvestigationRepository


class LogEventService:

    def __init__(self):
        self.log_event_repository = LogEventRepository()
        self.investigation_repository = InvestigationRepository()

    def get_events(
        self,
        db: Session,
        investigation_id: UUID,
    ):
        investigation = self.investigation_repository.get_by_id(
            db,
            investigation_id,
        )

        if not investigation:
            raise ValueError("Investigation not found.")

        return self.log_event_repository.get_by_investigation(
            db=db,
            investigation_id=investigation_id,
        )