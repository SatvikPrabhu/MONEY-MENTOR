import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function DocumentsLoan() {
  const documentsData = {
    home: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Utility bills, Passport, Rental agreement" },
      {
        criteria: "INCOME PROOF",
        value: "Salary slips (3-6 months), IT returns, Form 16",
      },
      { criteria: "BANK STATEMENTS", value: "6-12 months" },
      {
        criteria: "EMPLOYMENT PROOF",
        value: "Employment letter, Office ID",
      },
      { criteria: "PROPERTY DOCUMENTS", value: "Sale deed, title deed, approved plan, NOC" },
      { criteria: "ADMISSION/FEE PROOF", value: "Not applicable" },
      { criteria: "VEHICLE DOCUMENTS", value: "Not applicable" },
      {
        criteria: "GOLD RELATED DOCUMENTS",
        value: "Not applicable",
      },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Business registration, GST returns, ITR, Balance sheet",
      },
      { criteria: "PHOTOGRAPHS", value: "Passport-size photos" },
      {
        criteria: "CO-APPLICANT DOCUMENTS",
        value:
          "If applicable - all above docs",
      },
    ],

    education: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Utility bills, Passport" },
      {
        criteria: "INCOME PROOF",
        value: "Parent's/Co-applicant's income proof, IT returns",
      },
      { criteria: "BANK STATEMENTS", value: "6 months (of co-applicant)" },
      {
        criteria: "EMPLOYMENT PROOF",
        value: "Not applicable",
      },
      { criteria: "PROPERTY DOCUMENTS", value: "Not applicable" },
      { criteria: "ADMISSION/FEE PROOF", value: "Admission letter, Fee structure, Scholarship details" },
      { criteria: "VEHICLE DOCUMENTS", value: "Not applicable" },
      {
        criteria: "GOLD RELATED DOCUMENTS",
        value: "Not applicable",
      },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Business proof if applicable",
      },
      { criteria: "PHOTOGRAPHS", value: "Passport-size photos" },
      {
        criteria: "CO-APPLICANT DOCUMENTS",
        value:
          "Parent/Guardian - all income/ID docs",
      },
    ],

    personal: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Utility bills, Passport" },
      {
        criteria: "INCOME PROOF",
        value: "Salary slips (3 months), IT returns, Form 16, Bank statements",
      },
      { criteria: "BANK STATEMENTS", value: "3-6 months" },
      {
        criteria: "EMPLOYMENT PROOF",
        value: "Employment letter, Office ID",
      },
      { criteria: "PROPERTY DOCUMENTS", value: "Not applicable" },
      { criteria: "ADMISSION/FEE PROOF", value: "Not applicable" },
      { criteria: "VEHICLE DOCUMENTS", value: "Not applicable" },
      {
        criteria: "GOLD RELATED DOCUMENTS",
        value: "Not applicable",
      },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Business registration, ITR, P&L statement",
      },
      { criteria: "PHOTOGRAPHS", value: "Passport-size photos" },
      {
        criteria: "CO-APPLICANT DOCUMENTS",
        value:
          "If applicable",
      },
    ],

    car: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Utility bills, Passport" },
      {
        criteria: "INCOME PROOF",
        value: "Salary slips (3 months), IT returns, Bank statements",
      },
      { criteria: "BANK STATEMENTS", value: "3-6 months" },
      {
        criteria: "EMPLOYMENT PROOF",
        value: "Employment letter",
      },
      { criteria: "PROPERTY DOCUMENTS", value: "Not applicable" },
      { criteria: "ADMISSION/FEE PROOF", value: "Not applicable" },
      { criteria: "VEHICLE DOCUMENTS", value: "Proforma invoice, Insurance quote" },
      {
        criteria: "GOLD RELATED DOCUMENTS",
        value: "Not applicable",
      },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Business proof, ITR",
      },
      { criteria: "PHOTOGRAPHS", value: "Passport-size photos" },
      {
        criteria: "CO-APPLICANT DOCUMENTS",
        value:
          "If applicable",
      },
    ],

    gold: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Utility bills" },
      {
        criteria: "INCOME PROOF",
        value: "Usually not required",
      },
      { criteria: "BANK STATEMENTS", value: "Not required" },
      {
        criteria: "EMPLOYMENT PROOF",
        value: "Not required",
      },
      { criteria: "PROPERTY DOCUMENTS", value: "Not applicable" },
      { criteria: "ADMISSION/FEE PROOF", value: "Not applicable" },
      { criteria: "VEHICLE DOCUMENTS", value: "Not applicable" },
      {
        criteria: "GOLD RELATED DOCUMENTS",
        value: "Gold items, Purity certificate (optional)",
      },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Business proof if self-employed",
      },
      { criteria: "PHOTOGRAPHS", value: "Passport-size photos" },
      {
        criteria: "CO-APPLICANT DOCUMENTS",
        value:
          "Not usually required",
      },
    ],
  };

  const criteriaList = documentsData.home.map((item, index) => ({
    criteria: item.criteria,
    home: documentsData.home[index]?.value || "-",
    education: documentsData.education[index]?.value || "-",
    personal: documentsData.personal[index]?.value || "-",
    car: documentsData.car[index]?.value || "-",
    gold: documentsData.gold[index]?.value || "-",
  }));

  return (
    <Box>
      <Box
        sx={{
          padding: "40px 70px 40px 70px",
          fontSize: "25px",
          fontFamily: "serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#5B122D",
          fontWeight: "500",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>~ CHECK REQUIRED DOCUMENTS ~</h1>
        <p style={{ fontSize: "20px", marginTop: "0" }}>
          See document requirements for different loan types in one
          place.
        </p>
      </Box>
      <Box
        sx={{
          padding: "10px 70px 40px 80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table
          sx={{
            borderCollapse: "collapse",
            borderSpacing: "0 8px",
            "& th, & td": {
              border: "1.5px solid #5B122D",
              textAlign: "center",
              verticalAlign: "middle",
              fontFamily: "sans-serif",
              padding: "8px",
              lineHeight: "3.5",
              fontSize: "15px",
              transition: "all 0.25s ease",
            },
            "& thead th": {
              fontSize: "18px",
              fontWeight: "700",
              backgroundColor: "#F4E1C6",
              color: "#5B122D",
              position: "relative",
              zIndex: 1,
            },
            "& th:first-of-type, & td:first-of-type": {
              fontSize: "18px",
              fontWeight: "700",
              backgroundColor: "#F6E4C8",
              color: "#5B122D",
              position: "relative",
              zIndex: 1,
            },
            "& tbody tr:hover td": {
              backgroundColor: "#F2D9C4",
              transform: "translateY(-2px)",
            },
            "& tbody tr:hover td:first-of-type": {
              backgroundColor: "#F2D9C4",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{
                  lineHeight: "1.4 !important",
                  backgroundColor: "#5B122D !important",
                  color: "#F4E1C6 !important",
                }}
              >
                💡 Tip: Requirements vary by bank. Use this as a general guide.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>DOCUMENT TYPE</TableCell>
              <TableCell>HOME LOAN</TableCell>
              <TableCell>EDUCATION LOAN</TableCell>
              <TableCell>PERSONAL LOAN</TableCell>
              <TableCell>CAR LOAN</TableCell>
              <TableCell>GOLD LOAN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criteriaList.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.criteria}</TableCell>
                <TableCell>{row.home}</TableCell>
                <TableCell>{row.education}</TableCell>
                <TableCell>{row.personal}</TableCell>
                <TableCell>{row.car}</TableCell>
                <TableCell>{row.gold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#5B122D",
          fontSize: "17px",
          padding: "40px 0 7px 0",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Not sure which loan you qualify for?</h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          color: "#5B122D",
          fontSize: "20px",
          fontFamily: "sans-serif",
          padding: "0 0 100px 0",
        }}
      >
        <p> 👉 Try our</p>
        <Button component={Link} to="/loanpage"
          sx={{
            backgroundColor: "#5B122D",
            color: "#F4E1C6",
            height: "50px",
            width: "170px",
            borderRadius: "40px",
            "&:hover":{
                backgroundColor: "#7A1A3F"
            }
          }}
        >
          LOAN CALCULATOR
        </Button>
      </Box>
    </Box>
  );
}

export default DocumentsLoan;
