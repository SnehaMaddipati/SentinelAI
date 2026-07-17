from sqlalchemy.orm import Session
from app.models.investigation import Investigation
from uuid import UUID


class InvestigationRepository:

    def create(
        self,
        db: Session,
        investigation: Investigation,
    ) -> Investigation:

        db.add(investigation)
        db.flush()
        db.refresh(investigation)

        return investigation
    

    def get_by_id(
        self,
        db: Session,
        investigation_id: UUID,
    ) -> Investigation | None:

        return (
            db.query(Investigation)
            .filter(
                Investigation.id == investigation_id
            )
            .first()
        )
    def get_all(
        self,
        db: Session,
    ) -> list[Investigation]:

        return (
            db.query(Investigation)
            .order_by(
                Investigation.created_at.desc()
            )
            .all()
        )
    def update_status(
        self,
        db: Session,
        investigation: Investigation,
        status,
    ) -> Investigation:

        investigation.status = status

        db.flush()
        db.refresh(investigation)

        return investigation
