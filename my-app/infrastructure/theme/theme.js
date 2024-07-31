import { createTheme, responsiveFontSizes } from "@mui/material";

const typography = {
    fontFamily: "'DM Sans',Inter, sans-serif",
    body1: {
        fontWeight: 400,
    },
    h0: {
        fontWeight: 500,
        fontSize: "2.25rem",
        lineHeight: "1.5",
    },
    h0Bold: {
        fontWeight: 600,
        fontSize: "2.25rem",
        lineHeight: "1.2",
    },
    h1: {
        fontWeight: 500,
        fontSize: "1.875rem",
        lineHeight: "1.5",
    },
    h2: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "1.5",
    },
    h3: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: "1.5",
    },
    h3Bold: {
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: "1.5",
    },
    h4Bold: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: "1.5",
    },
    h4: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.5",
    },
    h5: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "1.5",
    },
    h6: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.5",
    },
    quote: {
        fontWeight: 400,
        fontSize: "2rem",
        lineHeight: "1.5",
    },
    titleSession: {
        fontWeight: 600,
        fontSize: "1.75rem",
        lineHeight: "1.5",
        borderBottom: "2px solid #000",
        
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
        },
        white: {
            main: "#ffffff",
            contrastText: "#ffffff",
        },
    },
    typography,
};

export const buildTheme = (config = {}) => {
    const theme = responsiveFontSizes(createTheme({ ...baseTheme }));
    return theme;
}


