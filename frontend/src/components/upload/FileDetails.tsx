import {
  Paper,
  Stack,
  Typography,
  Chip,
} from "@mui/material";

interface FileDetailsProps {
  file: File | null;
}

export default function FileDetails({
  file,
}: FileDetailsProps) {
  if (!file) return null;

  return (
    <Paper
      elevation={1}
      sx={{
        mt: 3,
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Selected File
      </Typography>

      <Stack spacing={2}>
        <Chip
          label={`Name : ${file.name}`}
          color="primary"
        />

        <Chip
          label={`Size : ${(file.size / 1024).toFixed(2)} KB`}
        />

        <Chip
          label={`Type : ${
            file.name.split(".").pop()?.toUpperCase() ?? "Unknown"
          }`}
        />
      </Stack>
    </Paper>
  );
}