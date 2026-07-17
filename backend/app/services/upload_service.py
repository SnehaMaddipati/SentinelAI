from fastapi import UploadFile
from sqlalchemy.orm import Session
from app.models.enums import InvestigationStatus
from app.repositories.log_repository import LogRepository
from app.services.investigation_service import InvestigationService
from app.services.log_parser_service import LogParserService


class UploadService:

    def __init__(self):
        self.repository = LogRepository()
        self.investigation_service = InvestigationService()
        self.log_parser_service = LogParserService()

    async def upload_file(
        self,
        db: Session,
        file: UploadFile,
    ):

        allowed_extensions = {
            ".log",
            ".txt",
            ".json",
            ".evtx",
        }

        extension = "." + file.filename.split(".")[-1].lower()

        if extension not in allowed_extensions:
            raise ValueError(
                f"Unsupported file type: {extension}"
            )

        # Save uploaded file
        saved_file = await self.repository.save_file(file)

        # Create Investigation
        investigation = self.investigation_service.create_investigation(
            db=db,
            original_filename=saved_file.original_file_name,
            stored_filename=saved_file.stored_file_name,
            file_size=saved_file.file_size,
        )

        self.log_parser_service.parse_file(
            db=db,
            investigation_id=investigation.id,
            file_path=saved_file.file_path,
        )

        self.investigation_service.update_status(
            db=db,
            investigation=investigation,
            status=InvestigationStatus.PARSING,
        )

        db.commit()
        db.refresh(investigation)

        return investigation