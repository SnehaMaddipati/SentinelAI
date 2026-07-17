import apiClient from "../api/apiClient";
import type { InvestigationStatus } from "../config/enums";

export interface InvestigationResponse {
  id: string;
  investigation_number: string;
  original_filename: string;
  stored_filename: string;
  file_size: number;
  status: InvestigationStatus;
  uploaded_at: string;
}

export async function uploadLog(
  file: File
): Promise<InvestigationResponse> {

  const formData = new FormData();

  formData.append("file", file);

  const response = await apiClient.post(
    "/upload",
    formData
  );

  return response.data;
}