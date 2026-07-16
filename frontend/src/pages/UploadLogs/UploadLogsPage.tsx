import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import PageContainer from "../../components/common/PageContainer";

import UploadCard from "../../components/upload/UploadCard";
import FileDetails from "../../components/upload/FileDetails";
import UploadActions from "../../components/upload/UploadActions";

export default function UploadLogsPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleCancel = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    console.log("Uploading:", selectedFile);

    // Tomorrow
    // uploadService.upload(selectedFile)
  };

  return (
    <MainLayout>
      <PageContainer title="Security Log Ingestion">
        <UploadCard
          onFileSelect={handleFileSelect}
        />

        <FileDetails
          file={selectedFile}
        />

        <UploadActions
          hasFile={selectedFile !== null}
          onUpload={handleUpload}
          onCancel={handleCancel}
        />
      </PageContainer>
    </MainLayout>
  );
}