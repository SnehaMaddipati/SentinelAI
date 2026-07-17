import {
  Stack,
  Button,
} from "@mui/material";

interface UploadActionsProps {
  hasFile: boolean;
  isUploading: boolean;
  onUpload: () => void;
  onCancel: () => void;
}

export default function UploadActions({
  hasFile,
  isUploading,
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
  disabled={isUploading}
  onClick={onCancel}
>
  Cancel
</Button>

    <Button
  variant="contained"
  disabled={!hasFile || isUploading}
  onClick={onUpload}
>
  {isUploading ? "Uploading..." : "Upload"}
</Button>
    </Stack>
  );
}