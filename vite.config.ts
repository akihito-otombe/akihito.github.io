import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages の公開パス（ユーザー名/リポジトリ名が tsumugi の想定）
export default defineConfig({
  plugins: [react()],
  base: '/tsumugi/'
})
