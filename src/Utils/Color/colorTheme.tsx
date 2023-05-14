import { extendTheme } from "native-base";

export const customTheme = extendTheme({
    components: {
        Button: {
          variants: {
            interia: {
              backgroundColor: '#546CFF',
              borderRadius: 10,
              color: 'white',
            },
            interia_outline: {
              backgroundColor: 'black',
              border:"5px solid #546CFF",
              borderRadius: 10,
              color: 'white',
            },
          },
        },
      },
      colors: {
        // Add new color
        primary: {
          50: '#E3F2F9',
          100: '#C5E4F3',
          200: '#A2D4EC',
          300: '#546CFF',
          400: '#47A9DA',
          500: '#0088CC',
          600: '#007AB8',
          700: '#006BA1',
          800: '#005885',
          900: '#003F5E',
        },
        // Redefining only one shade, rest of the color will remain same.
        amber: {
          400: '#546CFF',
        },
        _dark: {
          300: '#546CFF',
        },
        black:{
            100:"#313131"
        }
      },
      config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
      },
    }
)