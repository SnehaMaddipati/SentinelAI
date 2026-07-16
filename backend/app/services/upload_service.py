from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.repositories.log_repository import LogRepository
from app.services.investigation_service import InvestigationService


class UploadService:

    def __init__(self):
        self.repository = LogRepository()
        self.investigation_service = InvestigationService()

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

        return investigation