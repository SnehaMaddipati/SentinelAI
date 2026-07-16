import { useRef } from "react";

import {
  Paper,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

interface UploadCardProps {
  onFileSelect: (file: File) => void;
}

export default function UploadCard({
  onFileSelect,
}: UploadCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 5,
        border: "2px dashed",
        borderColor: "primary.main",
        textAlign: "center",
        borderRadius: 3,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
        }}
      >
        <CloudUploadOutlinedIcon
          color="primary"
          sx={{
            fontSize: 70,
          }}
        />

        <Typography variant="h5">
          Upload Security Logs
        </Typography>

        <Typography color="text.secondary">
          Drag & Drop your security log here
        </Typography>

        <Typography color="text.secondary">
          OR
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleBrowseClick}
        >
          Browse Files
        </Button>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept=".log,.txt,.json,.evtx"
          onChange={handleFileChange}
        />

        <Box>
          <Typography variant="body2">
            Supported Formats
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            .log • .txt • .json • .evtx
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}