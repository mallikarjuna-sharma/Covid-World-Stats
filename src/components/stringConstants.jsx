
const stringConstants = {


    /* Grpah constants*/

    GRAPHTYPES: [
        { value: 'line', label: 'line' },
        { value: 'bar', label: 'bar' },
        { value: 'pie', label: 'pie' },
    ],
    GETGRAPHTYPE: 'GETGRAPHTYPE',
    SORT_TYPES: [
        { value: 'india_state', label: ' States in India' },
        { value: 'india_district', label: 'Districts in India' },
        { value: 'world_country', label: 'Countries in World' },
        { value: 'world_stats', label: 'Get Stats for World Countries' },
    ],
    SORT_TYPES_ACTION: 'SORT_TYPES',

    X_AXIS_LABELS_INDIA_DISTRICT:[ { value: 'district', label: 'Districts India'}],
    X_AXIS_LABELS_INDIA_STATE:[ { value: 'state', label: 'States India' } ],
    X_AXIS_LABELS_WORLD_COUNTRY:[{ value: 'cities', label: 'Cities from selected Countries' } ],
    X_AXIS_LABELS_WORLD_STATS:[{ value: 'countries', label: 'Countries' }],

    Y_AYIS_LABELS_INDIA_DISTRICT:[{ value: 'confirmed', label: 'Confirmed'}],
    Y_AYIS_LABELS_INDIA_STATE:[
        { value: 'confirmed', label: 'Confirmed'},
        { value: 'recovered', label: 'Recovered'},
        { value: 'deaths', label: 'Deaths'},
        { value: 'active', label: 'Active'},
    ],
    Y_AYIS_LABELS_WORLD_COUNTRY:[
        { value: 'confirmed', label: 'Confirmed'},
        { value: 'recovered', label: 'Recovered'},
        { value: 'deaths', label: 'Deaths'}],
    Y_AXIS_LABELS_WORLD_STATS:[
        { value: 'new', label: 'New'},
        { value: 'active', label: 'Active'},
        { value: 'critical', label: 'Critical'},
        { value: 'recovered', label: 'Recovered'},
        { value: 'total', label: 'Total'},
        { value: 'deaths', label: 'Deaths'}],

    X_LABEL : 'X_LABEL',
    Y_LABEL : 'Y_LABEL',

    /* rapid api headers constants*/
    RAPID_API_INDIA_STATE_WISE: {
        'X-RapidAPI-Host': 'covid19-data.p.rapidapi.com',
        'X-RapidAPI-Key': 'd55fe518a0mshfaba210c9470cefp1be9e7jsn4ee844d0190d'
    },
    RAPID_API_COUNTRY_STATE_WISE: {
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'X-RapidAPI-Key': 'd55fe518a0mshfaba210c9470cefp1be9e7jsn4ee844d0190d'
    },
    RAPID_API_WORLD_COUNTRY_STATS: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
	"x-rapidapi-key": "d55fe518a0mshfaba210c9470cefp1be9e7jsn4ee844d0190d"
    },

    /* api constants*/
    INDIA_STATE_WISE: 'https://covid19-data.p.rapidapi.com/india',
    INDIA_DISTRICT_WISE: 'https://covid19-data.p.rapidapi.com/in-dist',
    COUNTRY_STATE_WISE: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats/?country=',
    WORLD_COUNTRY_STATS_API:'https://covid-193.p.rapidapi.com/statistics',


    /* action constants*/

    INDIAGEOJSONACTION: 'INDIAGEOJSONACTION',
    INDIA_DISTRICT_JSON_ACTION: 'INDIA_DISTRICT_JSON_ACTION',
    COUNTRYJSONACTION: 'COUNTRYJSONACTION',
    SELECTEDSTATE:'SELECTEDSTATE',
    WORLD_COUNTRY_STATS:'WORLD_COUNTRY_STATS',


    /* table constants    */

    INDIA_GEO_JSON_COLUMNS: [
        { id: 'state', label: 'State', minWidth: 120 },
        { id: 'confirmed', label: 'Confirmed', minWidth: 100 },
        {
            id: 'recovered',
            label: 'Recovered',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString(),
        },
        {
            id: 'deaths',
            label: 'Deaths',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString(),
        },
        {
            id: 'active',
            label: 'Active',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString(),
        },
    ],

    INDIA_GEO_JSON_ROWS: ['state', 'confirmed', 'recovered', 'deaths', 'active'],


    INDIA_DISTRICT_JSON_COLUMNS: [
        { id: 'district', label: 'district', minWidth: "30%" },
        { id: 'confirmed', label: 'Confirmed', minWidth: "30%" },
    ],

    INDIA_DISTRICT_JSON_ROWS: ['District', 'Confirmed'],


    WORLD_JSON_COLUMNS: [
        { id: 'city', label: 'city', minWidth: "25%" },
        { id: 'province', label: 'province', minWidth: "25%" },
        { id: 'confirmed', label: 'confirmed', minWidth: "10%" },
        { id: 'deaths', label: 'deaths', minWidth: "10%" },
        { id: 'recovered', label: 'recovered', minWidth: "10%" },
    ],

    WORLD_COUNTRY_STATS_COLUMNS: [
        { id: 'country', label: 'country', minWidth: "10%" },
        { id: 'newcases', label: 'new', minWidth: "10%" },
        { id: 'active', label: 'active', minWidth: "10%" },
        { id: 'critical', label: 'critical', minWidth: "10%" },
        { id: 'recovered', label: 'recovered', minWidth: "10%" },
        { id: 'total', label: 'total', minWidth: "10%" },
        { id: 'deaths', label: 'deaths', minWidth: "10%" },
    ],


    /* response constant */
    INDIA_STATE : [{
        "countrycode": "IN",
        "country": "India",
        "state": "Andaman and Nicobar Islands",
        "latitude": "11.7401",
        "longitude": "92.6586",
        "confirmed": 16,
        "deaths": 0,
        "recovered": 11,
        "active": 5
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Andhra Pradesh",
        "latitude": "15.9129",
        "longitude": "79.74",
        "confirmed": 757,
        "deaths": 22,
        "recovered": 96,
        "active": 639
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Arunachal Pradesh",
        "latitude": "28.218",
        "longitude": "94.7278",
        "confirmed": 1,
        "deaths": 0,
        "recovered": 1,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Assam",
        "latitude": "26.2006",
        "longitude": "92.9376",
        "confirmed": 35,
        "deaths": 1,
        "recovered": 19,
        "active": 15
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Bihar",
        "latitude": "25.0961",
        "longitude": "85.3131",
        "confirmed": 114,
        "deaths": 2,
        "recovered": 42,
        "active": 70
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Chandigarh",
        "latitude": "30.7333",
        "longitude": "76.7794",
        "confirmed": 26,
        "deaths": 0,
        "recovered": 13,
        "active": 13
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Chhattisgarh",
        "latitude": "21.2787",
        "longitude": "81.8661",
        "confirmed": 36,
        "deaths": 0,
        "recovered": 25,
        "active": 11
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Delhi",
        "latitude": "28.7041",
        "longitude": "77.1025",
        "confirmed": 2081,
        "deaths": 47,
        "recovered": 431,
        "active": 1603
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Goa",
        "latitude": "15.2993",
        "longitude": "74.124",
        "confirmed": 7,
        "deaths": 0,
        "recovered": 7,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Gujarat",
        "latitude": "22.309425",
        "longitude": "72.13623",
        "confirmed": 2066,
        "deaths": 77,
        "recovered": 131,
        "active": 1858
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Haryana",
        "latitude": "29.238478",
        "longitude": "76.431885",
        "confirmed": 254,
        "deaths": 3,
        "recovered": 127,
        "active": 124
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Himachal Pradesh",
        "latitude": "32.084206",
        "longitude": "77.571167",
        "confirmed": 39,
        "deaths": 1,
        "recovered": 16,
        "active": 22
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Jammu and Kashmir",
        "latitude": "33.7782",
        "longitude": "76.5762",
        "confirmed": 368,
        "deaths": 5,
        "recovered": 71,
        "active": 292
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Jharkhand",
        "latitude": "23.6102",
        "longitude": "85.2799",
        "confirmed": 46,
        "deaths": 2,
        "recovered": 0,
        "active": 44
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Karnataka",
        "latitude": "15.317277",
        "longitude": "75.71389",
        "confirmed": 415,
        "deaths": 17,
        "recovered": 114,
        "active": 284
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Kerala",
        "latitude": "10.850516",
        "longitude": "76.27108",
        "confirmed": 408,
        "deaths": 3,
        "recovered": 291,
        "active": 114
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Ladakh",
        "latitude": "34.152588",
        "longitude": "77.577049",
        "confirmed": 18,
        "deaths": 0,
        "recovered": 14,
        "active": 4
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Madhya Pradesh",
        "latitude": "23.473324",
        "longitude": "77.947998",
        "confirmed": 1540,
        "deaths": 76,
        "recovered": 127,
        "active": 1337
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Maharashtra",
        "latitude": "19.601194",
        "longitude": "75.552979",
        "confirmed": 4669,
        "deaths": 232,
        "recovered": 572,
        "active": 3865
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Manipur",
        "latitude": "24.6637",
        "longitude": "93.9063",
        "confirmed": 2,
        "deaths": 0,
        "recovered": 2,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Meghalaya",
        "latitude": "25.467",
        "longitude": "91.3662",
        "confirmed": 11,
        "deaths": 1,
        "recovered": 0,
        "active": 10
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Mizoram",
        "latitude": "23.1645",
        "longitude": "92.9376",
        "confirmed": 1,
        "deaths": 0,
        "recovered": 0,
        "active": 1
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Nagaland",
        "latitude": "26.1584",
        "longitude": "94.5624",
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Odisha",
        "latitude": "20.94092",
        "longitude": "84.803467",
        "confirmed": 74,
        "deaths": 1,
        "recovered": 24,
        "active": 49
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Puducherry",
        "latitude": "11.9416",
        "longitude": "79.8083",
        "confirmed": 7,
        "deaths": 0,
        "recovered": 3,
        "active": 4
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Punjab",
        "latitude": "30.525005",
        "longitude": "75.890121",
        "confirmed": 245,
        "deaths": 16,
        "recovered": 39,
        "active": 190
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Rajasthan",
        "latitude": "27.0238",
        "longitude": "74.2179",
        "confirmed": 1576,
        "deaths": 25,
        "recovered": 205,
        "active": 1346
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Tamil Nadu",
        "latitude": "11.059821",
        "longitude": "78.387451",
        "confirmed": 1520,
        "deaths": 17,
        "recovered": 457,
        "active": 1046
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Telengana",
        "latitude": "17.123184",
        "longitude": "79.208824",
        "confirmed": 919,
        "deaths": 23,
        "recovered": 190,
        "active": 706
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Tripura",
        "latitude": "23.9408",
        "longitude": "91.9882",
        "confirmed": 2,
        "deaths": 0,
        "recovered": 1,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Uttarakhand",
        "latitude": "30.0668",
        "longitude": "79.0193",
        "confirmed": 46,
        "deaths": 0,
        "recovered": 18,
        "active": 28
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Uttar Pradesh",
        "latitude": "26.8467",
        "longitude": "80.9462",
        "confirmed": 1294,
        "deaths": 20,
        "recovered": 140,
        "active": 1134
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "West Bengal",
        "latitude": "22.978624",
        "longitude": "87.747803",
        "confirmed": 392,
        "deaths": 12,
        "recovered": 73,
        "active": 307
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Lakshadweep",
        "latitude": "13.7",
        "longitude": "72.1833",
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Dadra and Nagar Haveli",
        "latitude": "20.1809",
        "longitude": "73.0169",
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Uttaranchal",
        "latitude": "30.0668",
        "longitude": "79.0193",
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Daman and Diu",
        "latitude": "20.4283",
        "longitude": "72.8397",
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0,
        "active": 0
    }, {
        "countrycode": "IN",
        "country": "India",
        "state": "Sikkim",
        "latitude": "27.533",
        "longitude": "88.5122",
        "confirmed": 0,
        "deaths": 0,
        "recovered": 0,
        "active": 0
    }],
    US_STATE :  {
        "error": false,
        "statusCode": 200,
        "message": "OK",
        "data": {
            "lastChecked": "2020-04-22T17:54:08.257Z",
            "covid19Stats": [{
                "city": "Abbeville",
                "province": "South Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Abbeville, South Carolina, US",
                "confirmed": 17,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Acadia",
                "province": "Louisiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Acadia, Louisiana, US",
                "confirmed": 114,
                "deaths": 7,
                "recovered": null
            }, {
                "city": "Accomack",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Accomack, Virginia, US",
                "confirmed": 52,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Ada",
                "province": "Idaho",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ada, Idaho, US",
                "confirmed": 616,
                "deaths": 12,
                "recovered": null
            }, {
                "city": "Adair",
                "province": "Iowa",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adair, Iowa, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adair",
                "province": "Kentucky",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adair, Kentucky, US",
                "confirmed": 54,
                "deaths": 4,
                "recovered": null
            }, {
                "city": "Adair",
                "province": "Missouri",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adair, Missouri, US",
                "confirmed": 12,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adair",
                "province": "Oklahoma",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adair, Oklahoma, US",
                "confirmed": 47,
                "deaths": 3,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Colorado",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Colorado, US",
                "confirmed": 996,
                "deaths": 46,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Idaho",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Idaho, US",
                "confirmed": 3,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Illinois",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Illinois, US",
                "confirmed": 29,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Indiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Indiana, US",
                "confirmed": 7,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Mississippi",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Mississippi, US",
                "confirmed": 90,
                "deaths": 6,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Nebraska",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Nebraska, US",
                "confirmed": 101,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Ohio",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Ohio, US",
                "confirmed": 3,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Pennsylvania",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Pennsylvania, US",
                "confirmed": 91,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Washington",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Washington, US",
                "confirmed": 43,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Adams",
                "province": "Wisconsin",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Adams, Wisconsin, US",
                "confirmed": 4,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Addison",
                "province": "Vermont",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Addison, Vermont, US",
                "confirmed": 61,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Aiken",
                "province": "South Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Aiken, South Carolina, US",
                "confirmed": 70,
                "deaths": 4,
                "recovered": null
            }, {
                "city": "Air Force",
                "province": "US Military",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Air Force, US Military, US",
                "confirmed": 800,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Aitkin",
                "province": "Minnesota",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Aitkin, Minnesota, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alachua",
                "province": "Florida",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alachua, Florida, US",
                "confirmed": 224,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Alamance",
                "province": "North Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alamance, North Carolina, US",
                "confirmed": 58,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alameda",
                "province": "California",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alameda, California, US",
                "confirmed": 1241,
                "deaths": 43,
                "recovered": null
            }, {
                "city": "Alamosa",
                "province": "Colorado",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alamosa, Colorado, US",
                "confirmed": 9,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Albany",
                "province": "New York",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Albany, New York, US",
                "confirmed": 704,
                "deaths": 23,
                "recovered": null
            }, {
                "city": "Albany",
                "province": "Wyoming",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Albany, Wyoming, US",
                "confirmed": 6,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Albemarle",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Albemarle, Virginia, US",
                "confirmed": 66,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alcona",
                "province": "Michigan",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alcona, Michigan, US",
                "confirmed": 4,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alcorn",
                "province": "Mississippi",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alcorn, Mississippi, US",
                "confirmed": 7,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alexander",
                "province": "Illinois",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alexander, Illinois, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alexander",
                "province": "North Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alexander, North Carolina, US",
                "confirmed": 4,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alexandria",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alexandria, Virginia, US",
                "confirmed": 462,
                "deaths": 8,
                "recovered": null
            }, {
                "city": "Alfalfa",
                "province": "Oklahoma",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alfalfa, Oklahoma, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Allamakee",
                "province": "Iowa",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allamakee, Iowa, US",
                "confirmed": 44,
                "deaths": 3,
                "recovered": null
            }, {
                "city": "Allegan",
                "province": "Michigan",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allegan, Michigan, US",
                "confirmed": 47,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Allegany",
                "province": "Maryland",
                "country": "US",
                "lastUpdate": "2020-04-21T23:38:51+00:00",
                "keyId": "Allegany, Maryland, US",
                "confirmed": 56,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Allegany",
                "province": "New York",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allegany, New York, US",
                "confirmed": 30,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Alleghany",
                "province": "North Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alleghany, North Carolina, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alleghany",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alleghany, Virginia, US",
                "confirmed": 5,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Allegheny",
                "province": "Pennsylvania",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allegheny, Pennsylvania, US",
                "confirmed": 1059,
                "deaths": 67,
                "recovered": null
            }, {
                "city": "Allen",
                "province": "Indiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allen, Indiana, US",
                "confirmed": 336,
                "deaths": 27,
                "recovered": null
            }, {
                "city": "Allen",
                "province": "Kentucky",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allen, Kentucky, US",
                "confirmed": 4,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Allen",
                "province": "Louisiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allen, Louisiana, US",
                "confirmed": 79,
                "deaths": 9,
                "recovered": null
            }, {
                "city": "Allen",
                "province": "Ohio",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allen, Ohio, US",
                "confirmed": 88,
                "deaths": 12,
                "recovered": null
            }, {
                "city": "Allendale",
                "province": "South Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Allendale, South Carolina, US",
                "confirmed": 6,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Alpena",
                "province": "Michigan",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alpena, Michigan, US",
                "confirmed": 35,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Alpine",
                "province": "California",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Alpine, California, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Amador",
                "province": "California",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Amador, California, US",
                "confirmed": 7,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Amelia",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Amelia, Virginia, US",
                "confirmed": 15,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Amherst",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Amherst, Virginia, US",
                "confirmed": 10,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Amite",
                "province": "Mississippi",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Amite, Mississippi, US",
                "confirmed": 18,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Anchorage",
                "province": "Alaska",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anchorage, Alaska, US",
                "confirmed": 160,
                "deaths": 4,
                "recovered": null
            }, {
                "city": "Anderson",
                "province": "Kansas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anderson, Kansas, US",
                "confirmed": 0,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Anderson",
                "province": "Kentucky",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anderson, Kentucky, US",
                "confirmed": 7,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Anderson",
                "province": "South Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anderson, South Carolina, US",
                "confirmed": 134,
                "deaths": 5,
                "recovered": null
            }, {
                "city": "Anderson",
                "province": "Tennessee",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anderson, Tennessee, US",
                "confirmed": 21,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Anderson",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anderson, Texas, US",
                "confirmed": 10,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Andrew",
                "province": "Missouri",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Andrew, Missouri, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Andrews",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Andrews, Texas, US",
                "confirmed": 19,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Androscoggin",
                "province": "Maine",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Androscoggin, Maine, US",
                "confirmed": 36,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Angelina",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Angelina, Texas, US",
                "confirmed": 30,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Anne Arundel",
                "province": "Maryland",
                "country": "US",
                "lastUpdate": "2020-04-21T23:38:51+00:00",
                "keyId": "Anne Arundel, Maryland, US",
                "confirmed": 1157,
                "deaths": 52,
                "recovered": null
            }, {
                "city": "Anoka",
                "province": "Minnesota",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anoka, Minnesota, US",
                "confirmed": 97,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Anson",
                "province": "North Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Anson, North Carolina, US",
                "confirmed": 19,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Antelope",
                "province": "Nebraska",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Antelope, Nebraska, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Antrim",
                "province": "Michigan",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Antrim, Michigan, US",
                "confirmed": 9,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Apache",
                "province": "Arizona",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Apache, Arizona, US",
                "confirmed": 226,
                "deaths": 5,
                "recovered": null
            }, {
                "city": "Appanoose",
                "province": "Iowa",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Appanoose, Iowa, US",
                "confirmed": 2,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Appling",
                "province": "Georgia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Appling, Georgia, US",
                "confirmed": 21,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Appomattox",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Appomattox, Virginia, US",
                "confirmed": 7,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Aransas",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Aransas, Texas, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Arapahoe",
                "province": "Colorado",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Arapahoe, Colorado, US",
                "confirmed": 1649,
                "deaths": 80,
                "recovered": null
            }, {
                "city": "Archuleta",
                "province": "Colorado",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Archuleta, Colorado, US",
                "confirmed": 7,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Arenac",
                "province": "Michigan",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Arenac, Michigan, US",
                "confirmed": 13,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Arkansas",
                "province": "Arkansas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Arkansas, Arkansas, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Arlington",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Arlington, Virginia, US",
                "confirmed": 625,
                "deaths": 22,
                "recovered": null
            }, {
                "city": "Armstrong",
                "province": "Pennsylvania",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Armstrong, Pennsylvania, US",
                "confirmed": 38,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Armstrong",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Armstrong, Texas, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Army",
                "province": "US Military",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Army, US Military, US",
                "confirmed": 841,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Aroostook",
                "province": "Maine",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Aroostook, Maine, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Ascension",
                "province": "Louisiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ascension, Louisiana, US",
                "confirmed": 515,
                "deaths": 31,
                "recovered": null
            }, {
                "city": "Ashe",
                "province": "North Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ashe, North Carolina, US",
                "confirmed": 4,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Ashland",
                "province": "Ohio",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ashland, Ohio, US",
                "confirmed": 5,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Ashland",
                "province": "Wisconsin",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ashland, Wisconsin, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Ashley",
                "province": "Arkansas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ashley, Arkansas, US",
                "confirmed": 12,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Ashtabula",
                "province": "Ohio",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ashtabula, Ohio, US",
                "confirmed": 70,
                "deaths": 6,
                "recovered": null
            }, {
                "city": "Asotin",
                "province": "Washington",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Asotin, Washington, US",
                "confirmed": 13,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Assumption",
                "province": "Louisiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Assumption, Louisiana, US",
                "confirmed": 151,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Atascosa",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Atascosa, Texas, US",
                "confirmed": 14,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Atchison",
                "province": "Kansas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Atchison, Kansas, US",
                "confirmed": 6,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Atchison",
                "province": "Missouri",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Atchison, Missouri, US",
                "confirmed": 2,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Athens",
                "province": "Ohio",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Athens, Ohio, US",
                "confirmed": 3,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Atkinson",
                "province": "Georgia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Atkinson, Georgia, US",
                "confirmed": 5,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Atlantic",
                "province": "New Jersey",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Atlantic, New Jersey, US",
                "confirmed": 469,
                "deaths": 19,
                "recovered": null
            }, {
                "city": "Atoka",
                "province": "Oklahoma",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Atoka, Oklahoma, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Attala",
                "province": "Mississippi",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Attala, Mississippi, US",
                "confirmed": 49,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Audrain",
                "province": "Missouri",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Audrain, Missouri, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Audubon",
                "province": "Iowa",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Audubon, Iowa, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Auglaize",
                "province": "Ohio",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Auglaize, Ohio, US",
                "confirmed": 23,
                "deaths": 3,
                "recovered": null
            }, {
                "city": "Augusta",
                "province": "Virginia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Augusta, Virginia, US",
                "confirmed": 28,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Aurora",
                "province": "South Dakota",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Aurora, South Dakota, US",
                "confirmed": 1,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Austin",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Austin, Texas, US",
                "confirmed": 12,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Autauga",
                "province": "Alabama",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Autauga, Alabama, US",
                "confirmed": 30,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Avoyelles",
                "province": "Louisiana",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Avoyelles, Louisiana, US",
                "confirmed": 69,
                "deaths": 7,
                "recovered": null
            }, {
                "city": "Baca",
                "province": "Colorado",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Baca, Colorado, US",
                "confirmed": 10,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Bacon",
                "province": "Georgia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Bacon, Georgia, US",
                "confirmed": 19,
                "deaths": 1,
                "recovered": null
            }, {
                "city": "Baker",
                "province": "Florida",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Baker, Florida, US",
                "confirmed": 17,
                "deaths": 3,
                "recovered": null
            }, {
                "city": "Baker",
                "province": "Georgia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Baker, Georgia, US",
                "confirmed": 20,
                "deaths": 2,
                "recovered": null
            }, {
                "city": "Baldwin",
                "province": "Alabama",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Baldwin, Alabama, US",
                "confirmed": 123,
                "deaths": 3,
                "recovered": null
            }, {
                "city": "Baldwin",
                "province": "Georgia",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Baldwin, Georgia, US",
                "confirmed": 132,
                "deaths": 4,
                "recovered": null
            }, {
                "city": "Ballard",
                "province": "Kentucky",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Ballard, Kentucky, US",
                "confirmed": 4,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Baltimore",
                "province": "Maryland",
                "country": "US",
                "lastUpdate": "2020-04-21T23:38:51+00:00",
                "keyId": "Baltimore, Maryland, US",
                "confirmed": 1925,
                "deaths": 58,
                "recovered": null
            }, {
                "city": "Baltimore City",
                "province": "Maryland",
                "country": "US",
                "lastUpdate": "2020-04-21T23:38:51+00:00",
                "keyId": "Baltimore City, Maryland, US",
                "confirmed": 1542,
                "deaths": 59,
                "recovered": null
            }, {
                "city": "Bamberg",
                "province": "South Carolina",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Bamberg, South Carolina, US",
                "confirmed": 7,
                "deaths": 0,
                "recovered": null
            }, {
                "city": "Bandera",
                "province": "Texas",
                "country": "US",
                "lastUpdate": "2020-04-21T23:30:50+00:00",
                "keyId": "Bandera, Texas, US",
                "confirmed": 4,
                "deaths": 0,
                "recovered": null
            }]
        }
    },
}


export default stringConstants;
