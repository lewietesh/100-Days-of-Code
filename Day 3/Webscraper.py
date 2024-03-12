# Importing the required libraries.
import requests
from bs4 import BeautifulSoup
import re
from pprint import pprint
# Requesting the HTML from the target website.
url = "https://www.digitalstore.co.ke/collections/laptops?page=4"
page = requests.get(url)

# Selecting data. 
soup = BeautifulSoup(page.content, "html.parser")
products = soup.find_all("div", class_="product-item")

# Processing data using Regular Expressions.
re_titles = r'class="product-item_title text-strong link">(.*?)<\/a>'
re_prices = r'class="price price--highlight">.*?"(Ksh[0-9,\.]+)'

data = []

for product in products:
   title_tag = product.find("a", class_="product-item__image-wrapper product-item__image-wrapper--with-secondary")
   price_tag = product.find("span", class_="price price--highlight")
   if title_tag and price_tag:
        title = title_tag['href'].split('/')[-1]  # Extract product name from the href attribute
        price = price_tag.text.strip()
        data.append((title, price))

# Saving the output.
with open("laptops4.txt", "w", encoding="utf-8") as f:
   for title, price in data:
       f.write(f"{title}\t{price}\n")