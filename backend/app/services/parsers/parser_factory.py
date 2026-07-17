from pathlib import Path

from app.services.parsers.text_parser import TextParser
from app.services.parsers.json_parser import JsonParser
from app.services.parsers.evtx_parser import EvtxParser


class ParserFactory:

    @staticmethod
    def get_parser(file_path: str):

        extension = Path(file_path).suffix.lower()

        if extension in [".log", ".txt"]:
            return TextParser()

        elif extension == ".json":
            return JsonParser()

        elif extension == ".evtx":
            return EvtxParser()

        raise ValueError(
            f"Unsupported file format: {extension}"
        )