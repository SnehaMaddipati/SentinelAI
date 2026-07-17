import {
  Chip,
  Paper,
} from "@mui/material";

import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

import type { Investigation } from "../../models/investigation";

interface InvestigationTableProps {
  investigations: Investigation[];
  onRowClick: (id: string) => void;
}
export default function InvestigationTable({
  investigations,
  onRowClick,
}: InvestigationTableProps) {

  const columns: GridColDef[] = [
    {
      field: "investigationNumber",
      headerName: "Investigation",
      flex: 1.2,
    },
    {
      field: "originalFilename",
      headerName: "File",
      flex: 1.5,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color="success"
          size="small"
        />
      ),
    },
    {
      field: "fileSize",
      headerName: "Size (KB)",
      flex: 0.8,
      valueGetter: (_, row) =>
        (row.fileSize/ 1024).toFixed(2),
    },
    {
      field: "uploadedAt",
      headerName: "Uploaded",
      flex: 1.5,
      valueGetter: (_, row) =>
        new Date(row.uploadedAt).toLocaleString(),
    },
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        height: 600,
        borderRadius: 3,
      }}
    >
      <DataGrid
        rows={investigations}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
        onRowClick={(params) =>
          onRowClick(params.row.id)
        }
      />
    </Paper>
  );
}