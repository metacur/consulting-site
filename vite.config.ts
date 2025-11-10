// vite.config.ts
// Viteのビルド設定ファイル
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages用の設定
  // リポジトリ名を指定（例: https://username.github.io/consulting-site/）
  base: '/consulting-site/',
  
  // ビルド設定
  build: {
    outDir: 'dist',
    sourcemap: true,
    // チャンクサイズの警告を調整
    chunkSizeWarningLimit: 1000,
  },
  
  // 開発サーバー設定
  server: {
    port: 3000,
    open: true, // ブラウザ自動起動
  },
})