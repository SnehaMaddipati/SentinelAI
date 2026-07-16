from sqlalchemy.orm import Session

from app.models.investigation import Investigation


class InvestigationRepository:

    def create(
        self,
        db: Session,
        investigation: Investigation,
    ) -> Investigation:

        db.add(investigation)

        db.commit()

        db.refresh(investigation)

        return investigation