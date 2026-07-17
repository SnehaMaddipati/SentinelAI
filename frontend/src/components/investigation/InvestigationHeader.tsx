import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

import type { Investigation } from "../../models/investigation";

interface InvestigationHeaderProps {
  investigation: Investigation;
}

export default function InvestigationHeader({
  investigation,
}: InvestigationHeaderProps) {

  const navigate = useNavigate();

  return (
    <Box>

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/investigations")}
        sx={{ mb: 3 }}
      >
        Back to Investigations
      </Button>

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
          >
            {investigation.investigationNumber}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 0.5,
            }}
          >
            Security Investigation
          </Typography>

        </Box>

        <Chip
          label={investigation.status}
          color="success"
          size="medium"
        />

      </Stack>

    </Box>
  );

}