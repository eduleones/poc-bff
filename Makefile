###
# Python Lint section
###
_flake8:
	@flake8 --show-source .

_isort:
	@isort --diff --check-only src/

_black:
	@black --check src/

_isort-fix:
	@isort .

_black_fix:
	@black .


lint: _flake8 _isort _black   ## Check code lint
format-code: _isort-fix _black_fix ## Format code

run-fastapi:  ## Run FastAPI
	@gunicorn src.fastapi.main:app -b 0.0.0.0:8000 --keep-alive 5 --preload -k uvicorn.workers.UvicornWorker --workers 4 --log-level debug

run-fastify:  ## Run Fastify
	@node src/fastify/server