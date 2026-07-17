import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  CircularProgress,
} from "@mui/material";

import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import PageContainer from "../../components/common/PageContainer";

import InvestigationHeader from "../../components/investigation/InvestigationHeader";
import InvestigationSummary from "../../components/investigation/InvestigationSummary";
import InvestigationTimeline from "../../components/investigation/InvestigationTimeline";

import { getInvestigation } from "../../services/investigationService";

import type { Investigation } from "../../models/investigation";

export default function InvestigationDetailsPage() {

  const { id } = useParams();

  const [investigation, setInvestigation] =
    useState<Investigation | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    if (!id) return;

    const fetchInvestigation = async () => {

      try {

        setLoading(true);

        const response =
          await getInvestigation(id);

        setInvestigation(response);

      } catch {

        setError(
          "Failed to load investigation."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchInvestigation();

  }, [id]);

  return (

    <MainLayout>

      <PageContainer
        title="Investigation Details"
      >

        {loading && (

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
            }}
          >
            <CircularProgress />
          </Box>

        )}

        {error && (

          <Alert
            severity="error"
            sx={{ mb: 3 }}
          >
            {error}
          </Alert>

        )}

        {!loading &&
          investigation && (

          <>

            <InvestigationHeader
              investigation={investigation}
            />

            <Box sx={{ mt: 3 }}>

              <InvestigationSummary
                investigation={investigation}
              />

            </Box>

            <Box sx={{ mt: 3 }}>

              <InvestigationTimeline
                status={investigation.status}
              />

            </Box>

          </>

        )}

      </PageContainer>

    </MainLayout>

  );

}