default: clean install

clean: 
	rm -rf node_modules && rm -rf dist

install:
	npm install

lint:
	npm run lint

dev:
	npm run start:dev

prod:
	npm run build && npm run start

build:
	npm run build

test:
	npm run test

test_watch:
	npm run test:watch