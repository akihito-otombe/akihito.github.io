import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base は書かない（Workflowが --base=/tsumugi/ を毎回指定）
export default defineConfig({
  plugins: [react()],
})
