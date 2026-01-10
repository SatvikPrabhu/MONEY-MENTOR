import { Box, Typography, Slider } from "@mui/material";

const formatCurrency = (value) =>
  `₹ ${value.toLocaleString("en-IN")}`;

export default function SalarySlider({ value, onChange }) {
  const handleChange = (_, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">
          What is your annual salary?
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          {formatCurrency(value)}
        </Typography>
      </Box>

      {/* Salary Display */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "text.secondary",
          mb: 3,
        }}
      >
        {formatCurrency(value)}
      </Typography>

      {/* Slider */}
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={5000000}
        step={25000}
        marks={[
          { value: 0, label: "₹0" },
          { value: 500000, label: "₹5L" },
          { value: 1000000, label: "₹10L" },
          { value: 2000000, label: "₹20L" },
          { value: 5000000, label: "₹50L" },
        ]}
        sx={{
          color: "text.secondary",
          height: 8,
          "& .MuiSlider-thumb": {
            width: 24,
            height: 24,
            backgroundColor: "text.secondary",
            border: "3px solid white",
          },
          "& .MuiSlider-track": {
            height: 8,
            borderRadius: 4,
          },
          "& .MuiSlider-rail": {
            height: 8,
            borderRadius: 4,
            opacity: 0.3,
          },
        }}
      />

      {/* Helper text */}
      <Typography
        variant="caption"
        sx={{ display: "block", mt: 2, opacity: 0.75 }}
      >
        Include your total gross salary before tax deductions.
      </Typography>
    </Box>
  );
}
