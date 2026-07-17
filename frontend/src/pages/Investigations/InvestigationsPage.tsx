import { useEffect, useState } from "react";
import { Alert, CircularProgress, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import PageContainer from "../../components/common/PageContainer";
import InvestigationTable from "../../components/investigation/InvestigationTable";
import { getInvestigations } from "../../services/investigationService";
import type { Investigation } from "../../models/investigation";

export default function InvestigationsPage() {
  const navigate = useNavigate();

const [investigations, setInvestigations] = useState<Investigation[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInvestigations = async () => {
      try {
        setLoading(true);

        const data = await getInvestigations();

        setInvestigations(data);
      } catch {
        setError("Failed to load investigations.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestigations();
  }, []);

  const handleRowClick = (id: string) => {
    navigate(`/investigations/${id}`);
  };

  return (
    <MainLayout>
      <PageContainer title="Investigations">
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <InvestigationTable
            investigations={investigations}
            onRowClick={handleRowClick}
          />
        )}
      </PageContainer>
    </MainLayout>
  );
}
