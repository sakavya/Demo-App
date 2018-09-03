import requests
import base64
import hashlib
import json
from datetime import datetime
from src import config


# Function to generate sha256 encoded data
def sha256(hash_string):
    sha_signature = \
        hashlib.sha256(hash_string.encode('utf-8')).hexdigest()
    return sha_signature


# Function to generate unique number
def generate_number():
    date = str(datetime.now())[3:22]
    number = date.replace(':', '').replace('.', '').replace(' ', '').replace('-', '')
    return number


# Function to fetch Cart Details
def select_cart_item(category):
    key = str(category).lower() + "_init_request"
    return key


def service_init(category, amount):
    merchant_id = "M2306160483220675579140"
    salt_key = "48b7228c-605e-4bab-9632-5bf9e61e8b75"
    salt_index = "2"
    transaction_id = "TX" + generate_number()

    key = select_cart_item(category)
    cart_details = ""
    fare_details = ""
    exist = key in config.category
    if exist:
        fare_details = config.category.get(key).get("fareDetails")
        cart_details = config.category.get(key).get("cartDetails")
        key = "fareBreakup"
        if key in fare_details:
            fare_list = fare_details.get(key)
            for item in fare_list:
                search_str = "fareType"
                if item.get(search_str) == "TOTAL_FARE":
                    item["amount"] = amount
                    break
        else:
            print("key - fareBreakup doesn't exist")
    else:
        print("Category is wrong or Category doesn't exist")

    # embedding merchant id, transaction id and fare and cart details to request data
    request = {
        "merchantId": merchant_id,
        "transactionId": transaction_id,
        "amount": amount,
        "merchantOrderId": "OD1234656",
        "merchantOrderContext": {
            "tid": "TX123456789"
        },
        "quantity": 1,
        "mobileNumber": "9xxxxxxxx",
        "validFor": 180,
        "fareDetails": fare_details,
        "cartDetails": cart_details
    }
    path = "/v3/service/initiate"
    url = "https://mercury-uat.phonepe.com/v3/service/initiate"

    # convert dictionary to String
    jsonData = json.dumps(request)

    # Base 64 encryption
    base64_encode = base64.b64encode(jsonData.encode('utf-8')).decode('utf-8')

    payload = "{\"request\":" + "\"" + base64_encode + "\"" + "}"

    # Inputs for sha256 encryption
    sha256_input = base64_encode + path + salt_key

    # sha256 encryption
    sha256_output = \
        hashlib.sha256(sha256_input.encode('utf-8')).hexdigest()

    headers = {
        'content-type': "application/json",
        'x-verify': sha256_output + "###2",
        'x-tracking-url': "http://www.phonepe.com",
        'x-callback-url': "http://www.phonepe.com"
    }

    response = requests.request("POST", url, data=payload, headers=headers)
    return response