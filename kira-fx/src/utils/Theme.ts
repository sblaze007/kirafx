import { createTheme } from "@mui/material/styles";
import { Colors, TextColors } from "./AppColors";
import { fontSize, fontStyle } from "./AppFonts";

export const appTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: Colors.primary,
          },
          borderRadius: "2px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: Colors.primary,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: " 0px 2px 8px 0px rgba(0, 0, 0, 0.16)",
        },
        colorPrimary: {
          backgroundColor: Colors.white,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            paddingRight: "40px",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: Colors.neutral6,
          fontSize: fontSize.xxsmall,
          lineHeight: "14px",
          fontWeight: fontStyle.mediumPlus,
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "yellow",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 16,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "2px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: Colors.primary,
            },
          },
          borderRadius: "2px",
          borderWidth: 0,
          "& fieldset": {
            borderWidth: 0,
          },
          "& input": {
            "&::placeholder": {
              color: Colors.secondary,
              opacity: 1,
            },
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          color: TextColors.secondary,
          border: "1px solid #D6D6E1",
          borderRadius: "2px",
          "&.Mui-disabled": {
            backgroundColor: "#F0F0F0",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "xl",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: TextColors.main,
          backgroundColor: Colors.neutral4,
          "&:hover": {
            color: TextColors.main,
            backgroundColor: Colors.neutral4,
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            color: Colors.primary,
          },
          "&.Mui-disabled": {
            color: Colors.neutral6,
          },
          "&.Mui-completed": {
            color: Colors.primary6,
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: Colors.primary7,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: Colors.neutral6,
          fontSize: fontSize.xsmall,
          fontWeight: fontStyle.medium,
          lineHeight: "20px",
          letterSpacing: "0.15px",
          "&.Mui-active": {
            fontWeight: fontStyle.bold,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: Colors.inputBg,
          borderTop: "2px solid",
          borderRadius: "2px",
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: Colors.themeRed,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.lightGrey,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          position: "relative",
          boxShadow: "none",
          border: "1px solid",
          borderColor: Colors.lightGrey,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: Colors.neutral6,
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-checked": {
            color: Colors.primary,
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          "&.MuiCheckbox-indeterminate": {
            color: Colors.primary,
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          "&.Mui-disabled": {
            color: Colors.neutral6,
            "&.Mui-checked": {
              color: Colors.neutral6,
            },
            "&.MuiCheckbox-indeterminate": {
              color: Colors.neutral6,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": { backgroundColor: Colors.primary },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: fontStyle.medium,
          fontSize: fontSize.medium,
          color: TextColors.sub,
          textTransform: "none",
          "&.Mui-selected": {
            color: Colors.primary,
            fontWeight: fontStyle.bold,
          },
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: Colors.primary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: Colors.primary2,
            fontWeight: fontStyle.bold,
          },
          "&.Mui-selected": {
            backgroundColor: Colors.primary2,
            fontWeight: fontStyle.bold,
          },
          "&.Mui-selected:hover": {
            backgroundColor: Colors.primary2,
            fontWeight: fontStyle.bold,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: Colors.neutral6,
          "&.Mui-checked": {
            color: Colors.primary,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: Colors.primary,
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: Colors.primary,
            "&:hover": {
              // backgroundColor: Colors.secondary,
            },
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Colors.primary,
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: Colors.white,
        },
        track: {
          color: Colors.primary,
        },
        rail: {
          color: Colors.neutral4,
        },
      },
    },
  },
});
export const iconButtons = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: Colors.neutral3,
          },
          "&:hover": {
            backgroundColor: Colors.primary2,
            borderRadius: 0.5,
          },
          backgroundColor: Colors.primary2,
        },
      },
    },
  },
});

export const customButtonTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
            backgroundColor: Colors.primary,
            borderRadius: 8,
            minWidth: "fit-content",
            fontWeight: fontStyle.bold,
            boxShadow:
              "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F",

            "&:hover": {
              backgroundColor: Colors.primary,
              boxShadow:
                "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F",
            },
            "&.Mui-disabled": {
              color: "white",
              backgroundColor: Colors.primary4,
              boxShadow:
                "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024,  0px 1px 5px 0px #0000001F",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: Colors.primary,
            borderRadius: 8,
            borderColor: Colors.primary,
            backgroundColor: Colors.white,
            fontWeight: fontStyle.bold,
            boxShadow:
              "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F",

            "&.Mui-disabled": {
              color: Colors.primary,
              backgroundColor: Colors.white,
              opacity: 0.5,
              boxShadow:
                "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F",
            },
            "&:hover": {
              backgroundColor: Colors.white,
              borderColor: Colors.primary,
              boxShadow:
                "0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001F",
            },
          },
        },

        {
          props: { variant: "text" },
          style: {
            color: Colors.primary,
            backgroundColor: "transparent",
            textDecorationColor: Colors.underlineColor,
            padding: 0,
            fontWeight: fontStyle.bold,
            border: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: fontSize.xsmall,
          ":hover": {
            fontWeight: fontStyle.bold,
          },
        },
      },
    },
  },
});

export const mapDropdownTheme = createTheme({
  typography: {
    fontFamily: "Manrope",
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "290px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: fontStyle.medium,
          fontSize: fontSize.medium,
          letterSpacing: "0.15px",
          color: Colors.neutral6,
          "&.Mui-focused, &.MuiInputLabel-shrink": {
            color: Colors.searchText,
            fontSize: fontSize.xsmall,
            fontWeight: fontStyle.medium,
            letterSpacing: "0.15px",
            backgroundColor: Colors.white,
            padding: "0px 5px",
            transform: "translate(14px, -7px) scale(1)",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "100%",
          cursor: "pointer",
          fontWeight: fontStyle.medium,
          fontSize: fontSize.medium,
          border: "1px solid " + Colors.neutral4,
          letterSpacing: "0.15px",
          color: Colors.neutral6,
          borderRadius: "2px",
          padding: "0px 12px",
          "& .MuiSelect-select": {
            color: Colors.neutral6,
            padding: "16px 0px",
          },
          "& .MuiSelect-nativeInput": {
            top: "50%",
            bottom: "auto",
            transform: "translateY(-50%)",
            width: "200px",
            padding: "0px 12px",
            border: "0",

            "&::placeholder": {
              color: Colors.neutral5,
              letterSpacing: "0.15px",
              fontSize: fontSize.medium,
              fontWeight: fontStyle.medium,
            },
          },
          "&:hover, &.Mui-focused": {
            border: "1px solid " + Colors.neutral4,
          },
          fieldset: {
            display: "none",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          maxHeight: "128px",
          marginTop: "4px",
          overflowY: "auto",
          padding: "0px 4px",
          border: "1px solid " + Colors.neutral4,
          boxShadow: "none",

          ".MuiMenu-list": {
            padding: "0px",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "4px 16px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          "&.Mui-selected": {
            background: "none",
          },
          "&:hover, &.Mui-selected:hover": {
            background: Colors.primary2,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          height: "20px",
          width: "20px",
          boxSizing: "border-box",
          background: Colors.white,
          borderRadius: "2px",
          "& .MuiSvgIcon-root": {
            padding: 0,
            height: "15px",
            width: "15px",
          },
          "&.Mui-checked": {
            color: Colors.primary,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          ".MuiTypography-root": {
            fontFamily: "Manrope",
            color: Colors.neutral,
            letterSpacing: "0.15px",
            fontWeight: fontStyle.medium,
            fontSize: fontSize.xsmall,
          },
        },
      },
    },
  },
});

export const mapButtonTheme = createTheme({
  typography: {
    fontFamily: "Manrope",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: Colors.primary,
            backgroundColor: Colors.primary2,
            borderRadius: 2,
            borderWidth: 0,
            padding: 10,
            "svg path": {
              fill: Colors.primary,
            },
            "&:hover": {
              backgroundColor: Colors.primary2,

              borderWidth: 0,
              "svg path": {
                fill: Colors.primary,
              },
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            color: Colors.neutral6,
            backgroundColor: Colors.primary1,
            borderRadius: 2,
            borderWidth: 0,
            padding: 4,
            "svg path": {
              fill: Colors.neutral6,
            },
            "&:hover": {
              backgroundColor: Colors.primary1,
              borderWidth: 0,
              cursor: "initial",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: Colors.primary,
            backgroundColor: Colors.primary,
            borderRadius: 2,
            borderWidth: 0,
            padding: 10,
            "svg path": {
              fill: Colors.white,
            },
            "&:hover": {
              backgroundColor: Colors.primary,
              borderWidth: 0,
              "svg path": {
                fill: Colors.white,
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          fontFamily: "Manrope",
        },
        endIcon: {
          margin: 0,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          ".MuiBadge-badge": {
            borderRadius: "100px",
            fontSize: fontSize.xxsmall,
            color: Colors.white,
          },
        },
      },
    },
  },
});

export const paginationTheme = () =>
  createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            ul: {
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: Colors.primary,
                color: Colors.white,
              },
              "& .MuiPaginationItem-root.Mui-selected.MuiPaginationItem-page": {
                borderRadius: 0,
              },
            },
          },
        },
      },
    },
  });

export const searchDropDownTheme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          marginTop: "4px",
          padding: "0px 4px",
          border: "1px solid " + Colors.neutral4,
          boxShadow: "none",
        },
        listbox: {
          maxHeight: "128px",
          overflowY: "auto",
        },
        root: {
          "&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon": {
            "& .MuiOutlinedInput-root": {
              paddingRight: 0,
            },
            "& .MuiAutocomplete-inputRoot": {
              paddingRight: 12,
            },
          },
          "&.MuiAutocomplete-hasPopupIcon": {
            "& .MuiOutlinedInput-root": {
              paddingRight: 0,
            },
            "& .MuiAutocomplete-inputRoot": {
              paddingRight: "8px",
            },
          },
          "&.MuiAutocomplete-hasClearIcon": {
            "& .MuiOutlinedInput-root": {
              paddingRight: 0,
            },
            "& .MuiAutocomplete-inputRoot": {
              paddingRight: 0,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          height: "20px",
          width: "20px",
          boxSizing: "border-box",
          background: Colors.white,
          borderRadius: "2px",
          marginRight: "8px",
          "& .MuiSvgIcon-root": {
            padding: 0,
            height: "15px",
            width: "15px",
          },
          "&.Mui-checked": {
            color: Colors.primary,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          ".MuiTypography-root": {
            fontFamily: "Manrope",
            color: Colors.neutral,
            fontSize: fontSize.xsmall,
          },
        },
      },
    },
  },
});

export const customSliderTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: Colors.white,
        },
        track: {
          color: Colors.primary,
        },
        rail: {
          color: Colors.neutral4,
        },
      },
    },
  },
});

export const mappingAccordionTheme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&.Mui-expanded": {
            margin: "0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: "42px",
          backgroundColor: "#ECE6F0",
          borderRadius: "2px",
          padding: "8px 16px",
          "&.Mui-expanded": {
            minHeight: "42px",
            margin: 0,
          },
        },
        content: {
          margin: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&.Mui-expanded": {
            margin: "0",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});

export const alertTheme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          "&.MuiAlert-outlined": {
            boxShadow:
              "0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
            backgroundColor: Colors.white,
            borderColor: Colors.white,
          },
        },
      },
    },
  },
});

export const commentTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderBottom: "0px",
          "&.MuiInput-root::after": {
            borderBottom: `2px solid ${Colors.neutral4}`,
          },
          "&.MuiInput-root::before": {
            borderBottom: `1px solid ${Colors.neutral4}`,
          },
        },
      },
    },
  },
});
