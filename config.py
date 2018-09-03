hostname = "http://merchant-service.traefik.stg.phonepe.nm3/v1"

category = {
  "food_init_request" : {
    "fareDetails": {
      "category": "FOOD",
      "fareBreakup": [
        {
          "fareType": "TOTAL_FARE",
          "amount": 5000
        },
        {
          "fareType": "BASE_FARE",
          "amount": 5000
        },
        {
          "fareType": "DISCOUNT",
          "amount": -1000
        },
        {
          "fareType": "PACKAGING_FEE",
          "amount": 500
        },
        {
          "fareType": "DELIVERY_FEE",
          "amount": 300
        },
        {
          "fareType": "TAX",
          "amount": 200
        }
      ]
    },
    "cartDetails": {
      "cartItem": [
        {
          "itemId":"itemId",
          "category": "FOOD",
          "itemName": "Burger",
          "quantity": 2,
          "price": "5000"
        }
      ],
      "cartInfo": {
        "category": "FOOD",
        "deliveryEta": 40,
        "deliveryInfo": "Delivery Slot 6:30PM - 7:30PM",
        "orderType": "ON_DEMAND",
        "address": {
          "pincode": "560008",
          "locality": "Domlur",
          "street": "Old Madras Road",
          "buildingName": "Diamond District",
          "houseNo": "M38",
          "city": "Bangalore"
        }
      }
    }
  },

  "hotel_init_request" : {
    "fareDetails": {
      "category": "HOTEL",
      "fareBreakup": [
        {
          "fareType": "TOTAL_FARE",
          "amount": 5000
        }
      ]
    },
    "cartDetails": {
      "cartItem": [
        {
          "category": "HOTEL",
          "itemId": "1234567890",
          "hotelName": "Ritz Carlton",
          "checkIn": "22-03-2018 12:00:00",
          "checkOut": "25-03-2018 02:00:00",
          "roomsCount":1,
          "personsCount":1,
          "roomsType": "Budget",
          "hotelDetails": {
            "starRating": 4,
            "address": "Highway to Heaven, Devils Road",
            "city": "Maximum City",
            "country": "India",
            "propertyType": "POSH"
          }
        }
      ]
    }
  },

  "movie_init_request" : {
    "fareDetails": {
      "category": "MOVIE",
      "fareBreakup": [
        {
          "fareType": "TOTAL_FARE",
          "amount": 5000
        }
      ]
    },
    "cartDetails": {
      "cartItem": {
        "category": "MOVIE",
        "itemId": "XVGSDA3",
        "movieName": "The Avengers",
        "format": "IMAX(3D)",
        "language": "English",
        "imageUrl": "https://pre00.deviantart.net/7025/th/pre/i/2016/259/1/b/avengers__infinity_war_poster__2_by_bakikayaa-dahtubc.jpg",
        "screenDetails": {
          "screenNo": "Audi 2",
          "venue": "PVR Koramangala, Bangalore",
          "seats": [
            {
              "seatNo": "B12",
              "seatType": "GOLD",
              "seatPrice": 100
            }
          ],
          "date": "22-03-2018 10:19:56"
        },
        "addOns": [
          {
            "addonType": "FANDB",
            "itemName": "PopCorn Pepsi Combo",
            "quantity": 1,
            "price": 200
          }
        ]
      }
    }
  },

  "shopping_init_request" : {
    "fareDetails": {
      "category": "SHOPPING",
      "fareBreakup": [
        {
          "fareType": "TOTAL_FARE",
          "amount": 5000
        }
      ]
    },
    "cartDetails": {
      "cartItem": [
        {
          "category": "SHOPPING",
          "itemId": "1234567890"
        }
      ]
    }
  },

  "flight_init_request" : {
    "fareDetails": {
      "category": "FLIGHT",
      "fareBreakup": [
        {
          "fareType": "TOTAL_FARE",
          "amount": 5000
        },
        {
          "fareType": "BASE_FARE",
          "amount": 500
        },
        {
          "fareType": "DISCOUNT",
          "amount": -1000
        },
        {
          "fareType": "BAGGAGE_FEE",
          "amount": 1000
        },
        {
          "fareType": "EXTRA_SERVICE_FEE",
          "amount": 200
        },
        {
          "fareType": "SEAT_FEE",
          "amount": 500
        },
        {
          "fareType": "CONVENIENCE_FEE",
          "amount": 500
        },
        {
          "fareType": "INSURANCE",
          "amount": 1500
        },
        {
          "fareType": "TAX",
          "amount": 500
        }
      ]
    },
    "cartDetails": {
      "cartItem": [
        {
          "itemId":"itemId",
          "category": "FLIGHT",
          "origin": "Bengaluru",
          "destination": "Mumbai",
          "tripType": "ROUND_TRIP",
          "flightType": "DOMESTIC",
          "flightClass": "ECONOMY",
          "onwardJourney": [{
            "departure" : "2018-12-03T10:15:30+01:00",
            "arrival" : "2018-12-03T10:15:30+02:00",
            "airlines": "AirIndia",
            "noOfStops" : 0,
            "isRefundable": True
          }],
          "returnJourney": [{
            "departure" : "2018-12-03T10:15:30+01:00",
            "arrival" : "2018-12-03T10:15:30+02:00",
            "airlines": "AirIndia",
            "noOfStops" : 0,
            "isRefundable": True
          }],
          "adultCount": 1,
          "childCount": 1
        }
      ]
    }
  }
}