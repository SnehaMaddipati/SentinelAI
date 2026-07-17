import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import type { Investigation } from "../../models/investigation";

interface InvestigationSummaryProps {
  investigation: Investigation;
}

export default function InvestigationSummary({
  investigation,
}: InvestigationSummaryProps) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Investigation Summary
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid
          container
          spacing={3}
        >

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Original File
            </Typography>

            <Typography>
              {investigation.originalFilename}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Stored File
            </Typography>

            <Typography>
              {investigation.storedFilename}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              File Size
            </Typography>

            <Typography>
              {(investigation.fileSize / 1024).toFixed(2)} KB
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Uploaded At
            </Typography>

            <Typography>
              {new Date(
                investigation.uploadedAt,
              ).toLocaleString()}
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  );
}