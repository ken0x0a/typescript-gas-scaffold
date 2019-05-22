SCRIPT_ID = 1mqS29NCynL6WrVpzvkYWYlbSGg3AAnvnvmJM-kMOTrjE1KVGZaeDO76P

setup:
	yarn clasp login
	open https://docs.google.com/spreadsheets/u/0/

setup2:
	yarn clasp clone $(SCRIPT_ID)

enable.api:
	open https://script.google.com/home/usersettings
build.push:
	yarn run watch:push

open:
	yarn clasp open
