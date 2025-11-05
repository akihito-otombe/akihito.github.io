import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages で /<リポジトリ名>/ 配下になるため base を必ず設定
export default defineConfig({
  plugins: [react()],
  base: '/tsumugi/',
})
