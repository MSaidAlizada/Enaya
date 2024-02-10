import { Typography } from "@mui/material";
import styled from "styled-components";

// Styled components for the Patient container and info items
const PatientContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  max-width: 400px; /* Limiting width for better readability */
  margin: 0 auto; /* Center align */
`;

const InfoItem = styled(Typography)`
  && {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold; /* Make text bold */
  }
`;

const Patient = () => {
  return (
    <PatientContainer style={{marginTop: 20}}>
      <InfoItem variant="h5">Hospital: Hamad Hospital</InfoItem>
      <InfoItem variant="h5">Name: Ahmed Abdullah</InfoItem>
      <InfoItem variant="h5">Age: 45</InfoItem>
      <InfoItem variant="h5">Patient Number: 50984321</InfoItem>
      <InfoItem variant="h5">Emergency Contact: 78856342</InfoItem>
      <InfoItem variant="h5">Blood Type: O</InfoItem>
      <InfoItem variant="h5">Allergies: Nuts</InfoItem>
      <InfoItem variant="h5">Chronic Diseases: Diabetes</InfoItem>
      <InfoItem variant="h5">Medication: Insulin</InfoItem>
      <InfoItem variant="h5">Medical History:</InfoItem>
      <Typography variant="body1">Date: 2023-10-10</Typography>
      <Typography variant="body1">
      Follow-up appointment for diabetes management
      </Typography>
      <Typography variant="body1">Doctor: Dr. Yusuf</Typography>
    </PatientContainer>
  );
};

export default Patient;
