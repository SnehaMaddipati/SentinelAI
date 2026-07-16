import shutil
import uuid
from datetime import datetime
from pathlib import Path

from fastapi import UploadFile

from app.core.config import UPLOAD_FOLDER
from app.schemas.upload_schema import UploadResponse


class LogRepository:

    def __init__(self):
        UPLOAD_FOLDER.mkdir(parents=True, exist_ok=True)

    async def save_file(self, file: UploadFile) -> UploadResponse:
        """
        Save the uploaded file to the uploads directory
        using a unique server-side filename.
        """

        extension = Path(file.filename).suffix

        unique_file_name = (
            f"LOG_"
            f"{datetime.now():%Y%m%d_%H%M%S}_"
            f"{uuid.uuid4().hex[:6]}"
            f"{extension}"
        )

        file_path = UPLOAD_FOLDER / unique_file_name

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return UploadResponse(
            message="File uploaded successfully",
            original_file_name=file.filename,
            stored_file_name=unique_file_name,
            file_path=str(file_path),
            file_size=file_path.stat().st_size,
        )