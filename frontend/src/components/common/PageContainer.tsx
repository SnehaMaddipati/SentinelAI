import type { ReactNode } from "react";

import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PageContainer({
  title,
  children,
}: Props) {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
      >
        {title}
      </Typography>

      {children}
    </Box>
  );
}