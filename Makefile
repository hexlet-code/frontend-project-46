install:
	npm ci
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
jest:
	npx jest
publish:
	npm publish --dry-run
lint:
	npx eslint .
fix: 
	npx eslint --fix .

.PHONY: test