.DEFAULT_GOAL := help

.PHONY: dev
dev: ## 開発用サーバの起動
	@next dev

.PHONY: build
build: ## ビルド
	@next build

.PHONY: start
start: ## 本番サーバの起動
	@next start

.PHONY: fmt
fmt: ## Prettier, stylelint によるフォーマット
	@prettier -w --ignore-path ./.gitignore "**/*.{js,jsx,ts,tsx,scss,json,md}"
	@stylelint --fix --ignore-path ./.gitignore "**/*.scss"

.PHONY: lint
lint: ## ESLint, stylelint による静的解析
	@next lint
	@stylelint --ignore-path ./.gitignore "**/*.scss"

.PHONY: test
test: ## Jest, React Testing Library によるテスト
	@jest

.PHONY: help
help: ## ヘルプ
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'
