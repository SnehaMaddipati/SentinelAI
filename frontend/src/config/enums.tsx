export const INVESTIGATION_STATUS = {
  UPLOADED: "UPLOADED",
  PARSING: "PARSING",
  ANALYZING: "ANALYZING",
  REPORT_GENERATION: "REPORT_GENERATION",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;

export type InvestigationStatus =
  typeof INVESTIGATION_STATUS[keyof typeof INVESTIGATION_STATUS];

export const INVESTIGATION_STEPS = [
  "Upload Complete",
  "Parsing Logs",
  "AI Threat Analysis",
  "Report Generation",
] as const;