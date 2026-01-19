import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function EligibilityLoan() {

    const eligibilityData = {
        home: [
            {criteria: "MINIMUM AGE", value: "21-23 years"},
            {criteria: "MAXIMUM AGE", value: "60-65 years (70 for salaried)"},
            {criteria: "EMPLOYMENT TYPE", value: "Salaried, Self-employed, Business owners"},
            {criteria: "MINIMUM MONTHLY INCOME", value: "₹25,000-₹30,000"},
            {criteria: "CREDIT SCORE REQUIREMENT", value: "650-750+ (higher is better)"},
            {criteria: "LOAN AMOUNT RANGE", value: "₹5 lakh - ₹5 crore+"},
            {criteria: "LOAN TENURE", value: "5-30 years"},
            {criteria: "INTEREST RATE TYPE", value: "Fixed or Floating"},
            {criteria: "COLLATERAL REQUIRED", value: "Yes (property being purchased)"},
            {criteria: "CO-APPLICANT ALLOWED", value: "Yes (often required/recommended)"},
            {criteria: "PROCESSING TIME", value: "7-15 days"},
            {criteria: "SPECIAL NOTES", value: "Tax benefits under Section 80C & 24(b); Property valuation required"}
        ],

        education: [
            {criteria: "MINIMUM AGE", value: "18 years"},
            {criteria: "MAXIMUM AGE", value: "No upper limit (co-applicant may have limits)"},
            {criteria: "EMPLOYMENT TYPE", value: "Students (with co-applicant/guarantor)"},
            {criteria: "MINIMUM MONTHLY INCOME", value: "Not applicable (co-applicant income considered)"},
            {criteria: "CREDIT SCORE REQUIREMENT", value: "650+ (for co-applicant/guarantor)"},
            {criteria: "LOAN AMOUNT RANGE", value: "₹50,000 - ₹1.5 crore"},
            {criteria: "LOAN TENURE", value: "5-15 years"},
            {criteria: "INTEREST RATE TYPE", value: "Fixed or Floating (often floating)"},
            {criteria: "COLLATERAL REQUIRED", value: "No (for loans up to ₹7.5 lakh); Yes for higher amounts"},
            {criteria: "CO-APPLICANT ALLOWED", value: "Yes (mandatory in most cases - parent/guardian)"},
            {criteria: "PROCESSING TIME", value: "10-15 days"},
            {criteria: "SPECIAL NOTES", value: "Moratorium period available; Tax benefits under Section 80E; No collateral for loans to premier institutes"}
        ],

        personal: [
            {criteria: "MINIMUM AGE", value: "21 years"},
            {criteria: "MAXIMUM AGE", value: "60-65 years"},
            {criteria: "EMPLOYMENT TYPE", value: "Salaried, Self-employed"},
            {criteria: "MINIMUM MONTHLY INCOME", value: "₹15,000-₹25,000"},
            {criteria: "CREDIT SCORE REQUIREMENT", value: "700-750+"},
            {criteria: "LOAN AMOUNT RANGE", value: "₹50,000 - ₹40 lakh"},
            {criteria: "LOAN TENURE", value: "1-5 years"},
            {criteria: "INTEREST RATE TYPE", value: "Fixed"},
            {criteria: "COLLATERAL REQUIRED", value: "No"},
            {criteria: "CO-APPLICANT ALLOWED", value: "Yes (optional, improves eligibility)"},
            {criteria: "PROCESSING TIME", value: "24 hours - 7 days"},
            {criteria: "SPECIAL NOTES", value: "Minimal documentation; No end-use restriction; Higher interest rates"}
        ],

        car: [
            {criteria: "MINIMUM AGE", value: "21 years"},
            {criteria: "MAXIMUM AGE", value: "60-65 years"},
            {criteria: "EMPLOYMENT TYPE", value: "Salaried, Self-employed, Business owners"},
            {criteria: "MINIMUM MONTHLY INCOME", value: "₹20,000-₹25,000"},
            {criteria: "CREDIT SCORE REQUIREMENT", value: "650-700+"},
            {criteria: "LOAN AMOUNT RANGE", value: "₹1 lakh - ₹1 crore+"},
            {criteria: "LOAN TENURE", value: "1-7 years"},
            {criteria: "INTEREST RATE TYPE", value: "Fixed or Floating"},
            {criteria: "COLLATERAL REQUIRED", value: "Yes (vehicle being purchased)"},
            {criteria: "CO-APPLICANT ALLOWED", value: "Yes (optional)"},
            {criteria: "PROCESSING TIME", value: "2-7 days"},
            {criteria: "SPECIAL NOTES", value: "Registration charges extra; Insurance mandatory"}
        ],

        gold: [
            {criteria: "MINIMUM AGE", value: "18 years"},
            {criteria: "MAXIMUM AGE", value: "No upper limit"},
            {criteria: "EMPLOYMENT TYPE", value: "Any (including homemakers, retirees)"},
            {criteria: "MINIMUM MONTHLY INCOME", value: "Not applicable"},
            {criteria: "CREDIT SCORE REQUIREMENT", value: "Not required (or minimal check)"},
            {criteria: "LOAN AMOUNT RANGE", value: "₹5,000 - based on gold value (typically 75-90% of gold value)"},
            {criteria: "LOAN TENURE", value: "3 months - 3 years"},
            {criteria: "INTEREST RATE TYPE", value: "Fixed"},
            {criteria: "COLLATERAL REQUIRED", value: "Yes (gold ornaments/coins)"},
            {criteria: "CO-APPLICANT ALLOWED", value: "Yes (optional)"},
            {criteria: "PROCESSING TIME", value: "30 minutes - 24 hours"},
            {criteria: "SPECIAL NOTES", value: "Instant liquidity; Interest calculated on daily/monthly basis; No income proof needed"}
        ]
    }

    const criteriaList = eligibilityData.home.map((item,index)=>({
        criteria: item.criteria,
        home: eligibilityData.home[index]?.value || "-",
        education: eligibilityData.education[index]?.value || "-",
        personal: eligibilityData.personal[index]?.value || "-",
        car: eligibilityData.car[index]?.value || "-",
        gold: eligibilityData.gold[index]?.value || "-",
    }));

  return (
    <Box>
      <Box
        sx={{
          padding: "40px 70px 40px 70px",
          fontSize: "25px",
          fontFamily: "serif",
          display: "flex",
          justifyContent: "center",
          color: "#5B122D",
          fontWeight: "500",
        }}
      >
        <h1>CHECK YOUR LOAN ELIGIBILITY</h1>
      </Box>
      <Box sx={{padding: "0px 70px 40px 80px", display: "flex", justifyContent: "center",}}>
        <Table sx={{borderCollapse: "collapse", "& th, & td" : {
            border: "1.5px solid #5B122D", textAlign: "center", verticalAlign: "middle", fontFamily: "sans-serif"
        }, padding: "8px"}}>
          <TableHead>
            <TableRow>
              <TableCell sx={{}}>CRITERIA</TableCell>
              <TableCell>HOME LOAN</TableCell>
              <TableCell>EDUCATION LOAN</TableCell>
              <TableCell>PERSONAL LOAN</TableCell>
              <TableCell>CAR LOAN</TableCell>
              <TableCell>GOLD LOAN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criteriaList.map((row,index)=>(
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
    </Box>
  );
}

export default EligibilityLoan;
