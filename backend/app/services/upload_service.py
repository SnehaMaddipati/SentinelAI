from fastapi import UploadFile

from app.repositories.log_repository import LogRepository


class UploadService:

    def __init__(self):
        self.repository = LogRepository()

    async def upload_file(self, file: UploadFile):

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

        return await self.repository.save_file(file)