import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        fontSizes: {
            xs: "12rem",
            sm: "14rem",
            md: "16rem",
            lg: "18rem",
            xl: "20rem",
            '36': "36rem"
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          colors: {
              light: '#F5F8FA',
              gray: '#DADADA'
          }
    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "#47585B"
            },
            html: {
                fontSize: '1px'
            }
        }
    }
})