from enum import Enum


class InvestigationStatus(str, Enum):
    UPLOADED = "UPLOADED"
    PARSING = "PARSING"
    ANALYZING = "ANALYZING"
    REPORT_GENERATION = "REPORT_GENERATION"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"