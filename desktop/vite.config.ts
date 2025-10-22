import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'
import tailwind from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    electron({
      main: {
        entry: 'electron/main.js',
      },
    }),
  ],
  resolve: {
		alias: {
		  '@': path.resolve(__dirname, './src'),
		},
	}
})
