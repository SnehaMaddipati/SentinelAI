import apiClient from "../api/apiClient";
import type { InvestigationStatus } from "../config/enums";
import type { Investigation } from "../models/investigation";

interface InvestigationApiResponse {
  id: string;
  investigation_number: string;
  original_filename: string;
  stored_filename: string;
  file_size: number;
  status: InvestigationStatus
  uploaded_at: string;
}

function mapInvestigation(
  api: InvestigationApiResponse,
): Investigation {

  return {

    id: api.id,

    investigationNumber:
      api.investigation_number,

    originalFilename:
      api.original_filename,

    storedFilename:
      api.stored_filename,

    fileSize:
      api.file_size,

    status:
      api.status,

    uploadedAt:
      api.uploaded_at,

  };

}

export async function getInvestigations(): Promise<
  Investigation[]
> {

  const response = await apiClient.get(
    "/investigations",
  );

  return response.data.map(mapInvestigation);

}

export async function getInvestigation(
  id: string,
): Promise<Investigation> {

  const response = await apiClient.get(
    `/investigations/${id}`,
  );

  return mapInvestigation(
    response.data,
  );

}