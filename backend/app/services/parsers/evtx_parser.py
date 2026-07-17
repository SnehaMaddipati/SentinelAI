from app.services.parsers.base_parser import BaseParser


class EvtxParser(BaseParser):
    """
    Placeholder for Windows Event Log (.evtx) parsing.

    Will use python-evtx in the next iteration.
    """

    def parse(self, file_path: str):

        raise NotImplementedError(
            "EVTX parsing is not implemented yet. "
            "Install 'python-evtx' to enable Windows Event Log parsing."
        )