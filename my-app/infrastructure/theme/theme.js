import { createTheme, responsiveFontSizes } from "@mui/material";

const typography = {
    fontFamily: "Inter, 'DM Sans', sans-serif",
    body1: {
        fontWeight: 400,
    },
    h1: {
        fontWeight: 500,
        fontSize: "1.875rem",
        lineHeight: "1.5",
    },
}

const baseTheme = {
    palette: {
        primary: {
            main: "#3E8E80",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#DDF2E2",
            contrastText: "#ffffff",
        }
    },
    typography,
};

export const buildTheme = (config = {}) => {
    const theme = responsiveFontSizes(createTheme({ ...baseTheme }));
    return theme;
}


