from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class LogEventResponse(BaseModel):

    id: UUID
    investigation_id: UUID

    timestamp: datetime | None
    severity: str
    event_source: str
    event_id: str | None
    message: str
    raw_log: str

    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )