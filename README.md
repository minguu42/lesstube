# LessTube

`LessTube` は YouTube の見過ぎを防ぐための Web アプリケーションです. 動画を見始める前に見たい動画を全て選択し, その動画だけを見ることで, 時間を忘れ, 動画を見過ぎてしまったという事態をなくします.

## 開発環境

- プログラミング言語：TypeScript
- 主なライブラリ・フレームワーク：React, Next.js
- スタイリング：CSS Modules, Sass
- 状態管理：Recoil
- デプロイ：Vercel
- フォーマッタ・リンタ：Prettier, ESLint, stylelint
- テスト：Jest + React Testing Library, Next page tester, MSW
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
