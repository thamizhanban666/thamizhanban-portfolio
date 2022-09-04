import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
    typography: {
        h1: {
            fontFamily: "Maven Pro",
            fontSize: "2rem",
            fontWeight: "600",
        },
        h3: {
            fontFamily: "Maven Pro",
            fontSize: "2.1rem",
            letterSpacing: "0.05em",
            fontWeight: "600",
            color:"var(--txt-secondary)"
        },
        h4: {
            fontFamily: "Maven Pro",
            fontSize: "1.9rem",
            letterSpacing: "0.09em",
        },
        h6: {
            fontFamily: "Maven Pro",
            fontSize: "1rem",
            letterSpacing: "0.09em",  
        },
        p: {
            fontSize: "1.25rem",
            fontWeight: "300",
            lineHeight: "1.5",
            color: "var(--txt-2)",
        }
    },
    mode: "dark",
    palette: {
        primary: {
            light: "#45c09f",
            main: "#0c0c0d",
            dark: "#00845c",
            contrastText: "#fff",
        },
        secondary: {
            light: "#45c09f",
            main: "#ffffff",
            dark: "#00845c",
            contrastText: "#fff",
        }
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 370,
            sm: 420,
            md: 768,
            lg: 1200,
            xl: 1536,
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
});

export default muiTheme;
