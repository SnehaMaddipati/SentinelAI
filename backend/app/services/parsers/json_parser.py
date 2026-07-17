import json
from datetime import datetime

from app.services.parsers.base_parser import BaseParser


class JsonParser(BaseParser):
    """
    Parses JSON log files.

    Supports:
    [
        {
            "timestamp": "...",
            "severity": "...",
            "message": "..."
        }
    ]
    """

    def parse(self, file_path: str):

        events = []

        with open(file_path, "r", encoding="utf-8") as file:
            data = json.load(file)

        if isinstance(data, dict):
            data = [data]

        for item in data:

            timestamp = None

            if item.get("timestamp"):
                try:
                    timestamp = datetime.fromisoformat(
                        item["timestamp"]
                    )
                except Exception:
                    pass

            events.append(
                {
                    "timestamp": timestamp,
                    "severity": item.get("severity", "UNKNOWN"),
                    "event_source": item.get("source", "JSON"),
                    "event_id": item.get("event_id"),
                    "message": item.get("message", ""),
                    "raw_log": json.dumps(item),
                }
            )

        return events