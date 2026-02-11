.PHONY: dev build clean post

dev:
	hugo server --config config.yml -D

build:
	hugo --minify --config config_prod.yml

clean:
	rm -rf public public_prod resources/_gen .hugo_build.lock

post:
	@if [ -z "$(TITLE)" ]; then \
		echo "Usage: make post TITLE=\"My Post Title\""; \
		exit 1; \
	fi
	@slug=$$(printf "%s" "$(TITLE)" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$$//g'); \
		date_prefix=$$(date +"%Y-%m-%d"); \
		filename="$${date_prefix}-$${slug}.md"; \
		hugo new "post/$${filename}" -D; \
		$${EDITOR:-micro} "content/post/$${filename}"; \
		if command -v glow >/dev/null 2>&1; then glow "content/post/$${filename}"; fi
