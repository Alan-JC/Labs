
import requests
r = requests.get("https://opentdb.com/api.php?amount=2")
print(r.json())