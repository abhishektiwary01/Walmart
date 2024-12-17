import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost',  // Ensure the server listens on localhost
    port: 5173,         // Make sure the port matches your setup
    strictPort: true,   // Prevent Vite from switching ports automatically
    hmr: {
      protocol: 'ws',   // WebSocket protocol
      host: 'localhost',
      port: 5173,
    },
  },
});
