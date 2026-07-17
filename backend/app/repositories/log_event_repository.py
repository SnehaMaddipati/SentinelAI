from sqlalchemy import UUID
from sqlalchemy.orm import Session
from typing import Optional

from app.models.log_event import LogEvent


class LogEventRepository:

    def create_many(
        self,
        db: Session,
        log_events: list[LogEvent],
    ):

        db.add_all(log_events)
        db.flush()

        return log_events
    def get_by_investigation(
        self,
        db: Session,
        investigation_id: UUID,
        severity: Optional[str] = None,
    ):

        query = (
            db.query(LogEvent)
            .filter(
                LogEvent.investigation_id == investigation_id
            )
        )

        if severity:
            query = query.filter(
                LogEvent.severity == severity
            )

        return (
            query.order_by(LogEvent.timestamp.asc())
            .all()
        )