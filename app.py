# import http.client

# conn = http.client.HTTPSConnection("stock-and-options-trading-data-provider.p.rapidapi.com")

# headers = {
#     'X-RapidAPI-Proxy-Secret': "a755b180-f5a9-11e9-9f69-7bf51e845926",
#     'X-RapidAPI-Key': "SIGN-UP-FOR-KEY",
#     'X-RapidAPI-Host': "stock-and-options-trading-data-provider.p.rapidapi.com"
# }

# conn.request("GET", "/options/aapl", headers=headers)

# res = conn.getresponse()
# data = res.read()

# print(data.decode("utf-8"))