import { Button } from "@mui/material";

export default function ButtonPrimary({ text, onClick, disabled = false }) {
  return (
    <Button
      py={4}
      fullWidth
      sx={{
        borderRadius: "48px",
        paddingY: 1.5,
        pointerEvents: disabled ? "none" : "auto",
        fontWeight: "600",
      }}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      {text}
    </Button>
  );
}
