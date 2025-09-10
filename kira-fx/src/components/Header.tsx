import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { TrendingUpOutlined } from "@mui/icons-material";
import KiraText from "../atoms/KiraText";
import KiraButton from "../atoms/KiraButton";
import { fontSize, fontStyle } from "../utils/AppFonts";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: "2px solid white",
      }}
    >
      {/* name and logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}>
        <TrendingUpOutlined
          sx={{
            backgroundColor: "#5061FF",
            p: 1,
            color: "white",
            height: 24,
            width: 24,
            borderRadius: "8px",
          }}
        />
        <KiraText
          text="KiraFx"
          size={fontSize.tweentyfour}
          color="white"
          weight={fontStyle.bold}
        />
      </Box>
      {/* Desktop Navigation */}
      <Box sx={{ display: "flex", gap: 3 }}>
        <a href="#home" style={{ textDecoration: "none" }}>
          <KiraText
            text="Home"
            color="white"
            weight={fontStyle.bold}
            size={fontSize.medium}
          />
        </a>
        <a href="#services" style={{ textDecoration: "none" }}>
          <KiraText
            text="Services"
            color="white"
            weight={fontStyle.bold}
            size={fontSize.medium}
          />
        </a>
        <a href="#performance" style={{ textDecoration: "none" }}>
          <KiraText
            text="Performance"
            color="white"
            weight={fontStyle.bold}
            size={fontSize.medium}
          />
        </a>
        <a href="#about" style={{ textDecoration: "none" }}>
          <KiraText
            text="About"
            color="white"
            weight={fontStyle.bold}
            size={fontSize.medium}
          />
        </a>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <KiraText
            text="Contact"
            color="white"
            weight={fontStyle.bold}
            size={fontSize.medium}
          />
        </a>
        {/* Mobile Menu Button */}

        {/* <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button> */}
      </Box>
      {/* Mobile Navigation */}

      <KiraButton text="Get Started" />
    </Grid>
  );
}
