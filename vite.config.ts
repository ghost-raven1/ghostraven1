import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    include: /\.(jsx|tsx)$/,
    babel: {
      plugins: ['styled-components'],
      babelrc: false,
      configFile: false
    }
  })],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173
  }
})
