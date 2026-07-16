from pydantic import BaseModel


class UploadResponse(BaseModel):
    message: str
    original_file_name: str
    stored_file_name: str
    file_path: str
    file_size: int