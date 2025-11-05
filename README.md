# tsumugi 最小テンプレート

- 余計なツールなし（Tailwind/PostCSS/Eslint なし）
- Vite + React + TypeScript の最小構成
- GitHub Pages へ自動デプロイ
  - ブランチ: `/preview/<branch>/`
  - タグ: `/vX/` と `/latest/`

## 使い方（GitHub 側）
1. リポジトリにプッシュ（`main` を想定）
2. Settings → Pages → **Source: GitHub Actions** を選択
3. 以降は push / タグ作成で自動公開

