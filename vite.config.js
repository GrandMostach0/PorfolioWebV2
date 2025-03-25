import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config:{
        darkMode: 'class',
        content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
      }
    }),
  ],
})
