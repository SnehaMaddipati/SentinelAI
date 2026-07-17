import re
from datetime import datetime

from app.services.parsers.base_parser import BaseParser


class TextParser(BaseParser):
    """
    Parses plain text log files (.log, .txt)
    Expected format:
    YYYY-MM-DD HH:MM:SS SEVERITY Message
    Example:
    2026-07-18 10:15:22 INFO User admin logged in
    """

    LOG_PATTERN = re.compile(
        r"^(?P<timestamp>\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})\s+"
        r"(?P<severity>INFO|WARN|WARNING|ERROR|DEBUG|CRITICAL)\s+"
        r"(?P<message>.*)$"
    )

    def parse(self, file_path: str):

        events = []

        with open(file_path, "r", encoding="utf-8") as file:

            for line in file:

                line = line.strip()

                if not line:
                    continue

                match = self.LOG_PATTERN.match(line)

                if match:
                    timestamp = datetime.strptime(
                        match.group("timestamp"),
                        "%Y-%m-%d %H:%M:%S",
                    )

                    severity = match.group("severity")
                    message = match.group("message")

                else:
                    timestamp = None
                    severity = "UNKNOWN"
                    message = line

                events.append(
                    {
                        "timestamp": timestamp,
                        "severity": severity,
                        "event_source": "TEXT",
                        "event_id": None,
                        "message": message,
                        "raw_log": line,
                    }
                )

        return events