import { ThemeProvider, Button } from "@mui/material";
import { ReactNode } from "react";
import { customButtonTheme } from "../utils/Theme";

interface KiraButtonProps {
  text: string;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: number;
  textDecoration?: string;
  color?: string;
  bgColor?: string;
}

function KiraButton({
  text,
  disabled = false,
  variant = "contained",
  onClick,
  endIcon,
  startIcon,
  size,
  textDecoration = "none",
  color,
  bgColor,
}: Readonly<KiraButtonProps>) {
  return (
    <ThemeProvider theme={customButtonTheme}>
      <Button
        variant={variant}
        onClick={onClick}
        endIcon={endIcon}
        startIcon={startIcon}
        disabled={disabled}
        size="small"
        sx={{
          color: color,
          backgroundColor: bgColor,
          fontSize: size,
          padding: "8px 15px",
          textDecoration: textDecoration,
          "&:hover": {
            textDecoration: textDecoration,
            backgroundColor: bgColor,
          },
        }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}

export default KiraButton;
