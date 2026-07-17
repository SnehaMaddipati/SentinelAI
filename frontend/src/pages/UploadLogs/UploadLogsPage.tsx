import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import PageContainer from "../../components/common/PageContainer";
import UploadCard from "../../components/upload/UploadCard";
import FileDetails from "../../components/upload/FileDetails";
import UploadActions from "../../components/upload/UploadActions";
import {
  uploadLog,
} from "../../services/uploadService";
import { Alert, LinearProgress, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UploadLogsPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setErrorMessage("");
  };

 const handleCancel = () => {
    setSelectedFile(null);
    setErrorMessage("");
};

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);
      setErrorMessage("");

      const response = await uploadLog(selectedFile);
      setSelectedFile(null);

      navigate(
          `/investigations/${response.id}`,
      );

    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.detail ?? "Upload failed.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <MainLayout>
      <PageContainer title="Security Log Ingestion">
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMessage}
          </Alert>
        )}
        {isUploading && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Uploading Security Log...
            </Typography>

            <LinearProgress />
          </Box>
        )}
        <Box sx={{ mt: 3 }}>
          <UploadCard onFileSelect={handleFileSelect} isUploading={isUploading} />
        </Box>

        <Box sx={{ mt: 3 }}>
          <FileDetails file={selectedFile} />
        </Box>

        <Box sx={{ mt: 3 }}>
          <UploadActions
            hasFile={selectedFile !== null}
            isUploading={isUploading}
            onUpload={handleUpload}
            onCancel={handleCancel}
          />
        </Box>
        
      </PageContainer>
    </MainLayout>
  );
}
