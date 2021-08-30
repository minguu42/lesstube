.PHONY: dev
dev:
	@next dev

.PHONY: build
build:
	@next build

.PHONY: start
start:
	@next start

.PHONY: fmt
fmt:
	@prettier -w --ignore-path ./.gitignore "**/*.{js,jsx,ts,tsx,scss,json,md}"
	@stylelint --fix --ignore-path ./.gitignore "**/*.scss"

.PHONY: lint
lint:
	@next lint
	@stylelint --ignore-path ./.gitignore "**/*.scss"

.PHONY: test
test:
	@jest
