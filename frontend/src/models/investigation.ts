import type { InvestigationStatus } from "../config/enums";

export interface Investigation {
  id: string;
  investigationNumber: string;
  originalFilename: string;
  storedFilename: string;
  fileSize: number;
  status: InvestigationStatus;
  uploadedAt: string;
}
