import {
  Stack,
  Button,
} from "@mui/material";

interface UploadActionsProps {
  hasFile: boolean;
  onUpload: () => void;
  onCancel: () => void;
}

export default function UploadActions({
  hasFile,
  onUpload,
  onCancel,
}: UploadActionsProps) {
  return (
    <Stack
    direction="row"
    spacing={2}
    sx={{
        mt: 3,
        justifyContent: "flex-end",
    }}
    >
      <Button
        variant="outlined"
        color="inherit"
        onClick={onCancel}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        disabled={!hasFile}
        onClick={onUpload}
      >
        Upload
      </Button>
    </Stack>
  );
}