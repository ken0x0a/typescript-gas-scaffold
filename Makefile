SCRIPT_ID = 1mqS29NCynL6WrVpzvkYWYlbSGg3AAnvnvmJM-kMOTrjE1KVGZaeDO76P

setup:
	yarn clasp login
	open https://docs.google.com/spreadsheets/u/0/

setup2:
	yarn clasp clone $(SCRIPT_ID)
