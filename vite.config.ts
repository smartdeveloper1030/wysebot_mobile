import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // This must match Capacitor's webDir
    sourcemap: true, // Optional: Helps debug errors in production
  },
  server: {
    host: true,
    port: 3000,
  },
});

// we have to reconfigure it fully . 
// aslo have to made this Ios Directory 
// also we've to reconfigure the Xcode 
// we need to reBuild for better performance and OutPut .