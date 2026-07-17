from sqlalchemy.orm import Session

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