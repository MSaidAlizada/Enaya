import { Typography } from "@mui/material";
import styled from "styled-components";

// Styled components for the Patient container and info items
const PatientContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  max-width: 400px; 
  margin: 0 auto; 
`;

const InfoItem = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Patient = () => {
  return (
    <PatientContainer style={{marginTop: 20}}>
      <InfoItem variant="h5">Hospital: Hamad Hospital</InfoItem>
      <InfoItem variant="h5">Name: Fatima Khalid</InfoItem>
      <InfoItem variant="h5">Age: 32</InfoItem>
      <InfoItem variant="h5">Patient Number: 50321678</InfoItem>
      <InfoItem variant="h5">Emergency Contact: 77982134</InfoItem>
      <InfoItem variant="h5">Blood Type: B</InfoItem>
      <InfoItem variant="h5">Allergies: Eggs</InfoItem>
      <InfoItem variant="h5">Chronic diseases: N/A</InfoItem>
      <InfoItem variant="h5">Medication: Accutane</InfoItem>
      <InfoItem variant="h5">Medical History:</InfoItem>
      <Typography variant="body1">Date: 2023-08-20</Typography>
      <Typography variant="body1">
        Description: Flu symptoms, prescribed antibiotics.
      </Typography>
      <Typography variant="body1">Doctor: Dr. Sarah</Typography>
    </PatientContainer>
  );
};

export default Patient;
