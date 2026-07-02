import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // base 必须与 EasyAgent Server 的静态托管路径一致：/doc-viewer/
  // 独立 dev 开发时也要用 /doc-viewer/ 前缀访问 http://localhost:5184/doc-viewer/
  base: '/doc-viewer/',
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
    // 让 dev server 也能处理 /doc-viewer/ 前缀访问
    open: '/doc-viewer/',
  },
});
