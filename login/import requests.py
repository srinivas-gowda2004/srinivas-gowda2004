import requests
from geopy.geocoders import Nominatim

def get_public_ip():
    response = requests.get('https://api64.ipify.org?format=json')
    return response.json()['ip']

def get_location(ip):
    response = requests.get(f'https://ipinfo.io/{ip}/json')
    data = response.json()
    return data['loc'], data['city'], data['region'], data['country']

def get_geocode(location):
    geolocator = Nominatim(user_agent="geoapiExercises")
    loc = geolocator.reverse(location, exactly_one=True)
    address = loc.raw['address']
    return address

if __name__ == "__main__":
    ip = get_public_ip()
    location, city, region, country = get_location(ip)
    print(f"IP Address: {ip}")
    print(f"Location: {location}")
    print(f"City: {city}")
    print(f"Region: {region}")
    print(f"Country: {country}")

    # Get detailed address
    address = get_geocode(location)
    print(f"Address: {address}")
