import os

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

        saved_file = None

        try:

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

            # Create investigation
            investigation = self.investigation_service.create_investigation(
                db=db,
                original_filename=saved_file.original_file_name,
                stored_filename=saved_file.stored_file_name,
                file_size=saved_file.file_size,
            )

            # Parse uploaded log
            self.log_parser_service.parse_file(
                db=db,
                investigation_id=investigation.id,
                file_path=saved_file.file_path,
            )

            # Update investigation status
            self.investigation_service.update_status(
                db=db,
                investigation=investigation,
                status=InvestigationStatus.PARSING,
            )

            # Commit everything as one transaction
            db.commit()
            db.refresh(investigation)

            return investigation

        except Exception as ex:

            # Roll back all database changes
            db.rollback()

            # Remove uploaded file from disk
            if (
                saved_file
                and os.path.exists(saved_file.file_path)
            ):
                os.remove(saved_file.file_path)

            print(f"Upload failed: {ex}")

            raise