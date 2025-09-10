import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import { Colors, TextColors } from "../utils/AppColors";
import { fontSize, fontStyle } from "../utils/AppFonts";
import { appTheme } from "../utils/Theme";

interface IKiraTextProps {
  text: string | React.ReactNode;
  title?: string;
  color?: string;
  size?: string | number;
  weight?: string | number;
  bgColor?: string;
  decor?: string;
  letterSpacing?: string | number;
  className?: string;
  underline?: boolean;
  noWrap?: boolean;
  onClick?(): void;
}

function KiraText(props: Readonly<IKiraTextProps>) {
  const {
    text,
    title = "",
    color = TextColors.main,
    size = fontSize.small,
    weight = fontStyle.medium,
    bgColor,
    decor,
    letterSpacing = 0.2,
    className,
    underline,
    noWrap = false,
    onClick,
  } = props;
  return (
    <ThemeProvider theme={appTheme}>
      <Typography
        {...(className ? { className } : {})}
        onClick={onClick}
        sx={{
          letterSpacing: letterSpacing || 0,
          fontSize: size,
          fontWeight: weight,
          color: color,
          backgroundColor: bgColor,
          textDecoration: decor ?? "none",
          borderBottom: underline ? "1px solid" + Colors.primary : "none",
          title: "hello",
        }}
        title={title || undefined}
        noWrap={noWrap}
        data-testid="dream-atom-custom-text"
      >
        {text}
      </Typography>
    </ThemeProvider>
  );
}

export default KiraText;
