import {
  Card,
  CardContent,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import {
  INVESTIGATION_STATUS,
  INVESTIGATION_STEPS,
  type InvestigationStatus,
} from "../../config/enums";

interface InvestigationTimelineProps {
  status: InvestigationStatus;
}

function getActiveStep(status: InvestigationStatus): number {
  switch (status) {
    case INVESTIGATION_STATUS.UPLOADED:
      return 0;

    case INVESTIGATION_STATUS.PARSING:
      return 1;

    case INVESTIGATION_STATUS.ANALYZING:
      return 2;

    case INVESTIGATION_STATUS.REPORT_GENERATION:
      return 3;

    case INVESTIGATION_STATUS.COMPLETED:
      return 4;

    default:
      return 0;
  }
}

export default function InvestigationTimeline({
  status,
}: InvestigationTimelineProps) {
  const activeStep = getActiveStep(status);

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
          Processing Timeline
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Stepper
          activeStep={activeStep}
          orientation="vertical"
        >
          {INVESTIGATION_STEPS.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>
    </Card>
  );
}