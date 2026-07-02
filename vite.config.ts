import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',  // EasyAgent Server 通过 /doc-viewer/ 路径托管，必须使用绝对路径
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // 产物清空后重新生成，确保每次构建干净
    emptyOutDir: true,
  },
  server: {
    port: 5184,
  },
});
