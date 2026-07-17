from uuid import UUID

from sqlalchemy.orm import Session

from app.models.log_event import LogEvent
from app.repositories.log_event_repository import LogEventRepository
from app.services.parsers.parser_factory import ParserFactory


class LogParserService:

    def __init__(self):
        self.repository = LogEventRepository()

    def parse_file(
        self,
        db: Session,
        investigation_id: UUID,
        file_path: str,
    ):

        parser = ParserFactory.get_parser(file_path)

        parsed_events = parser.parse(file_path)

        log_events = []

        for event in parsed_events:

            log_events.append(
                LogEvent(
                    investigation_id=investigation_id,
                    timestamp=event["timestamp"],
                    severity=event["severity"],
                    event_source=event["event_source"],
                    event_id=event["event_id"],
                    message=event["message"],
                    raw_log=event["raw_log"],
                )
            )

        self.repository.create_many(
            db=db,
            log_events=log_events,
        )

        db.commit()

        return len(log_events)