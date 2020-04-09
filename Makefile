.PHONY: build_dummy_translations clean compile_translations detect_changed_source_translations dummy_translations extract_translations help pull_translations push_translations requirements validate validate_translations

.DEFAULT_GOAL := help

help: ## display this help message
	@echo "Please use \`make <target>' where <target> is one of"
	@perl -nle'print $& if m{^[a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}'

clean: ## remove generated byte code, coverage reports, and build artifacts
	find . -name '__pycache__' -exec rm -rf {} +
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	# coverage erase
	rm -fr build/
	rm -fr dist/
	rm -fr *.egg-info


requirements: ## install development environment requirements
	pip install -qr requirements/dev.txt --exists-action w
	pip-sync requirements/dev.txt requirements/private.*


validate: quality test validate_translations ## run tests and quality checks

## Localization targets
extract_translations: ## extract strings to be translated, outputting .po files
	rm -rf docs/_build

	# Extract Python and Django template strings
	mkdir -p locale/en/LC_MESSAGES/
	rm -f locale/en/LC_MESSAGES/{django,text}.po
	## django-admin makemessages -l en -v1 -d django
	## macbook ...
	django-admin makemessages -l en -v1 -d django -i venv
	mv locale/en/LC_MESSAGES/django.po locale/en/LC_MESSAGES/text.po

	django-admin makemessages -l en -v1 -d djangojs -e js

compile_translations: ## compile translation files, outputting .mo files for each supported language
	i18n_tool generate
	python manage.py compilejsi18n
	make clean

detect_changed_source_translations: ## Determines if the source translation files are up-to-date, otherwise exit with a non-zero code.
	i18n_tool changed

pull_translations: ## pull translations from Transifex
	i18n_tool transifex pull
	make compile_translations

push_translations: extract_translations ## push source translation files (.po) to Transifex
	i18n_tool transifex push

dummy_translations: ## generate dummy translation (.po) files
	i18n_tool dummy

build_dummy_translations: extract_translations dummy_translations compile_translations ## generate and compile dummy translation files

validate_translations: build_dummy_translations detect_changed_source_translations ## validate translations

