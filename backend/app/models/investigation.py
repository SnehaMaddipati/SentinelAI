import uuid
from datetime import datetime
from sqlalchemy import DateTime, String, BigInteger, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.enums import InvestigationStatus

from app.database.base import Base


class Investigation(Base):
    __tablename__ = "investigations"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    investigation_number: Mapped[str] = mapped_column(
        String(30),
        unique=True,
        nullable=False,
    )

    original_filename: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    stored_filename: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    file_size: Mapped[int] = mapped_column(
        BigInteger,
        nullable=False,
    )

    
    status: Mapped[InvestigationStatus] = mapped_column(
        Enum(InvestigationStatus),
        default=InvestigationStatus.UPLOADED,
        nullable=False,
    )
    uploaded_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )
    log_events = relationship(
        "LogEvent",
        back_populates="investigation",
        cascade="all, delete-orphan",
    )