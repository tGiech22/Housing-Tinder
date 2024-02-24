import requests

url = "https://zillow56.p.rapidapi.com/search"

querystring = {"location":"houston, tx"}

headers = {
	"X-RapidAPI-Key": "1dd1359b17msh3de5ad9b77c2d72p1952b2jsnfe0e9f3f63bb",
	"X-RapidAPI-Host": "zillow56.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())