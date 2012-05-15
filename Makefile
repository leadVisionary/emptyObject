test:
	./node_modules/.bin/mocha --reporter list --compilers coffee:coffee-script *.coffee

.PHONY: test
