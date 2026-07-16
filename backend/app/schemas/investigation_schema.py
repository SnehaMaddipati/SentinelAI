from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class InvestigationResponse(BaseModel):
    id: UUID
    investigation_number: str
    original_filename: str
    stored_filename: str
    file_size: int
    status: str
    uploaded_at: datetime

    class Config:
        from_attributes = True