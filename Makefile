.PHONY: dev build clean

dev:
	hugo server --config config.yml -D

build:
	hugo --minify --config config_prod.yml -D

clean:
	rm -rf public public_prod resources/_gen .hugo_build.lock
