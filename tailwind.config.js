/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1F1C',
        deep: {
          DEFAULT: '#0B3D3D',
          50: '#E9F2F1',
          100: '#CFE4E1',
          200: '#9FC9C3',
          300: '#6FAEA5',
          400: '#3F9387',
          500: '#0B3D3D',
          600: '#0A3535',
          700: '#082A2A',
          800: '#061E1E',
          900: '#041313'
        },
        mint: {
          DEFAULT: '#2DD4A7',
          50: '#EAFBF5',
          100: '#CFF6E9',
          400: '#2DD4A7',
          500: '#1FB88F'
        },
        amber: {
          DEFAULT: '#F2994A',
          100: '#FCE7D3'
        },
        bone: '#F6F8F7'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(11, 61, 61, 0.25)',
        card: '0 2px 12px -4px rgba(11, 61, 61, 0.12)'
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        }
      },
      animation: {
        scanline: 'scanline 2.4s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.4,0,0.6,1) infinite'
      }
    }
  },
  plugins: []
}
