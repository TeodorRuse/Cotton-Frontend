import {createTheme} from "@mui/material/styles";

// const theme = createTheme({
//     palette: {
//         mode: 'dark', // Use dark mode to match the dashboard's background
//         primary: {
//             main: '#272638', // Dark background color
//             light: '#2A2E54', // Lighter variant
//             dark: '#1A1A2E', // Darker variant
//             contrastText: '#FFFFFF', // Text color on secondary
//         },
//         secondary: {
//
//             main: '#FCE09D', // Main yellow color
//             light: '#FDE47C', // Light variant for hover states or backgrounds
//             dark: '#CDAA6B', // Darker variant for active states
//             contrastText: '#1A1A2E', // Text color on primary
//         },
//         background: {
//             default: '#1A1A2E', // Dark background for the entire app
//             paper: '#1A1A2E', // Background for cards and paper elements
//         },
//         text: {
//             primary: '#FFFFFF', // Main text color
//             secondary: '#FFFFFF', // Secondary text color (muted)
//         },
//         error: {
//             main: '#FF0000', // Error color (can be customized)
//         },
//     },
//     typography: {
//         fontFamily: 'Roboto, sans-serif', // You can use 'DejaVu Sans' if needed
//         h3: {
//             fontWeight: 700,
//             color: '#FCE09D', // Make h3 use primary color
//         },
//         // Additional typography styles can be defined here
//     },
// });

const theme = createTheme({
    palette: {
        mode: 'dark', // Use dark mode to match the dashboard's background
        primary: {
            main: '#2A2E54', // Dark background color
            light: '#2A2E54', // Lighter variant
            dark: '#1A1A2E', // Darker variant
            contrastText: '#FFFFFF', // Text color on secondary
        },
        secondary: {
            main: '#FCE09D', // Main yellow color
            light: '#FDE47C', // Light variant for hover states or backgrounds
            dark: '#CDAA6B', // Darker variant for active states
            contrastText: '#1A1A2E', // Text color on primary
        },
        background: {
            default: '#1A1A2E', // Dark background for the entire app
            paper: '#2A2E54', // Background for cards and paper elements
        },
        text: {
            primary: '#FFFFFF', // Main text color
            secondary: '#e6e1e1', // Secondary text color (muted)
        },
        error: {
            main: '#FF0000', // Error color (can be customized)
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // You can use 'DejaVu Sans' if needed
        h3: {
            fontWeight: 700,
            color: '#FCE09D', // Make h3 use primary color
        },
        // Additional typography styles can be defined here
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FCE09D', // Outline color when focused
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#FCE09D', // Label color when focused
                    },
                },
            },
        },
    },
});


export default theme;