# LessTube

`LessTube` は YouTube の見過ぎを防ぐための Web アプリケーションです. 動画を見始める前に見たい動画を全て選択し, 選択した動画だけを見ることで, 時間を忘れ, 動画を見過ぎてしまったという事態を防ぎます.

## セットアップ

本アプリケーションは YouTUbe Data API v3 を利用しており, それを利用するための API キーが必要です.

1. 環境変数ファイル `.env.development.local` の作成

以下の内容で `.env.development.local` ファイルを作成します.

```bash
NEXT_PUBLIC_YOUTUBE_API_KEY=<Youtube Data API key>
```

2. 依存ライブラリのインストールとローカルでの実行

以下のコマンドを実行します.

```bash
npm i
npm run dev
```

## 開発環境

- プログラミング言語：TypeScript
- 主なライブラリ・フレームワーク：React, Next.js
- スタイリング：CSS Modules, Sass
- 状態管理：Recoil
- デプロイ：Vercel
- フォーマッタ・リンタ：Prettier, ESLint, stylelint
- テスト：Jest, React Testing Library, Next page tester, MSW
- タスクランナー：GNU make

### ローカル実行

```bash
make dev
```

### 自動整形

```bash
make fmt
```

### 静的解析

```bash
make lint
```

### テスト

```bash
make test
```
