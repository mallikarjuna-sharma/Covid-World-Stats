
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
    INDIA_DIST:  [[
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Andaman and Nicobar Islands",
            "latitude": "11.7401",
            "longitude": "92.6586",
            "confirmed": 18,
            "deaths": 0,
            "recovered": 11,
            "active": 7
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Andhra Pradesh",
            "latitude": "15.9129",
            "longitude": "79.74",
            "confirmed": 895,
            "deaths": 27,
            "recovered": 141,
            "active": 727,
            "NoOfAffectedDistrict": "11+",
            "DistrictReport": [
                {
                    "District": "ANANTAPUR",
                    "Latitude": "14.685001",
                    "Longitude": "77.597605",
                    "confirmed": 13
                },
                {
                    "District": "CHITTOOR",
                    "Latitude": "13.481529",
                    "Longitude": "78.946846",
                    "confirmed": 19
                },
                {
                    "District": "EAST GODAVARI",
                    "Latitude": "16.963207",
                    "Longitude": "82.23255",
                    "confirmed": 12
                },
                {
                    "District": "GUNTUR",
                    "Latitude": "16.315045",
                    "Longitude": "80.416597",
                    "confirmed": 51
                },
                {
                    "District": "KADAPA",
                    "Latitude": "14.477234",
                    "Longitude": "78.826904",
                    "confirmed": 30
                },
                {
                    "District": "KRISHNA",
                    "Latitude": "16.177748",
                    "Longitude": "81.12854",
                    "confirmed": 35
                },
                {
                    "District": "KURNOOL",
                    "Latitude": "15.499906",
                    "Longitude": "78.006346",
                    "confirmed": 75
                },
                {
                    "District": "NELLORE",
                    "Latitude": "14.438633",
                    "Longitude": "79.975989",
                    "confirmed": 48
                },
                {
                    "District": "PRAKASAM",
                    "Latitude": "15.568231",
                    "Longitude": "79.342147",
                    "confirmed": 38
                },
                {
                    "District": "VISAKHAPATNAM",
                    "Latitude": "17.728801",
                    "Longitude": "83.316116",
                    "confirmed": 20
                },
                {
                    "District": "WEST GODAVARI",
                    "Latitude": "16.711196",
                    "Longitude": "81.106424",
                    "confirmed": 22
                },
                {
                    "District": "Unknown",
                    "confirmed": 532
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Arunachal Pradesh",
            "latitude": "28.218",
            "longitude": "94.7278",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 1,
            "active": 0,
            "NoOfAffectedDistrict": "1",
            "DistrictReport": [
                {
                    "District": "LOHIT",
                    "Latitude": "27.836392",
                    "Longitude": "96.202308",
                    "confirmed": 1
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Assam",
            "latitude": "26.2006",
            "longitude": "92.9376",
            "confirmed": 35,
            "deaths": 1,
            "recovered": 19,
            "active": 15,
            "NoOfAffectedDistrict": "12",
            "DistrictReport": [
                {
                    "District": "CACHAR",
                    "Latitude": "24.811683",
                    "Longitude": "92.891651",
                    "confirmed": 1
                },
                {
                    "District": "DHUBRI",
                    "Latitude": "26.024523",
                    "Longitude": "89.974567",
                    "confirmed": 2
                },
                {
                    "District": "GOALPARA",
                    "Latitude": "26.157265",
                    "Longitude": "90.621076",
                    "confirmed": 3
                },
                {
                    "District": "GOLAGHAT",
                    "Latitude": "26.509901",
                    "Longitude": "93.969166",
                    "confirmed": 9
                },
                {
                    "District": "HAILAKANDI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KAMRUP",
                    "Latitude": "26.000519",
                    "Longitude": "91.289131",
                    "confirmed": 1
                },
                {
                    "District": "KAMRUP METRO",
                    "Latitude": "26.122958",
                    "Longitude": "91.967629",
                    "confirmed": 1
                },
                {
                    "District": "KARIMGANJ",
                    "Latitude": "24.86919",
                    "Longitude": "92.35544",
                    "confirmed": 1
                },
                {
                    "District": "LAKHIMPUR",
                    "Latitude": "27.279048",
                    "Longitude": "94.08148",
                    "confirmed": 1
                },
                {
                    "District": "MARIGAON",
                    "Latitude": "26.37957",
                    "Longitude": "92.34146",
                    "confirmed": 4
                },
                {
                    "District": "NALBARI",
                    "Latitude": "26.666075",
                    "Longitude": "91.385966",
                    "confirmed": 4
                },
                {
                    "District": "S MANCACHAR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "Unknown",
                    "confirmed": 6
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Bihar",
            "latitude": "25.0961",
            "longitude": "85.3131",
            "confirmed": 148,
            "deaths": 2,
            "recovered": 46,
            "active": 100,
            "NoOfAffectedDistrict": "11",
            "DistrictReport": [
                {
                    "District": "BEGUSARAI",
                    "Latitude": "25.41853",
                    "Longitude": "86.1339",
                    "confirmed": 5
                },
                {
                    "District": "BHAGALPUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "GAYA",
                    "Latitude": "24.695262",
                    "Longitude": "84.982156",
                    "confirmed": 5
                },
                {
                    "District": "GOPALGANJ",
                    "Latitude": "26.465654",
                    "Longitude": "84.439271",
                    "confirmed": 3
                },
                {
                    "District": "LAKHISARAI",
                    "Latitude": "25.1765",
                    "Longitude": "86.0947",
                    "confirmed": 1
                },
                {
                    "District": "MUNGER",
                    "Latitude": "25.376452",
                    "Longitude": "86.480918",
                    "confirmed": 8
                },
                {
                    "District": "NALANDA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "NAWADA",
                    "Latitude": "25.215537",
                    "Longitude": "85.429865",
                    "confirmed": 1
                },
                {
                    "District": "PATNA",
                    "Latitude": "25.619273",
                    "Longitude": "85.10641",
                    "confirmed": 5
                },
                {
                    "District": "SARAN",
                    "Latitude": "25.895557",
                    "Longitude": "84.798063",
                    "confirmed": 1
                },
                {
                    "District": "SIWAN",
                    "Latitude": "26.101188",
                    "Longitude": "84.490357",
                    "confirmed": 29
                },
                {
                    "District": "Unknown",
                    "confirmed": 88
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Chandigarh",
            "latitude": "30.7333",
            "longitude": "76.7794",
            "confirmed": 27,
            "deaths": 0,
            "recovered": 14,
            "active": 13,
            "NoOfAffectedDistrict": "1",
            "DistrictReport": [
                {
                    "District": "CHANDIGARH",
                    "Latitude": "30.726621",
                    "Longitude": "76.786829",
                    "confirmed": 18
                },
                {
                    "District": "Unknown",
                    "confirmed": 9
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Chhattisgarh",
            "latitude": "21.2787",
            "longitude": "81.8661",
            "confirmed": 36,
            "deaths": 0,
            "recovered": 28,
            "active": 8
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Delhi",
            "latitude": "28.7041",
            "longitude": "77.1025",
            "confirmed": 2248,
            "deaths": 48,
            "recovered": 724,
            "active": 1476,
            "NoOfAffectedDistrict": "11",
            "DistrictReport": [
                {
                    "District": "CENTRAL DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 19
                },
                {
                    "District": "EAST DELHI",
                    "Latitude": "24.734319",
                    "Longitude": "81.334404",
                    "confirmed": 17
                },
                {
                    "District": "NEW DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 17
                },
                {
                    "District": "NORTH DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 21
                },
                {
                    "District": "NORTH EAST DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 12
                },
                {
                    "District": "NORTH WEST DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 12
                },
                {
                    "District": "SHAHADARA",
                    "Latitude": "28.6894",
                    "Longitude": "77.2919",
                    "confirmed": 26
                },
                {
                    "District": "SOUTH DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 332
                },
                {
                    "District": "SOUTH EAST",
                    "Latitude": "24.734319",
                    "Longitude": "81.334404",
                    "confirmed": 26
                },
                {
                    "District": "SOUTH WEST DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 16
                },
                {
                    "District": "WEST DELHI",
                    "Latitude": "28.709498",
                    "Longitude": "77.184029",
                    "confirmed": 25
                },
                {
                    "District": "Unknown",
                    "confirmed": 1725
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Goa",
            "latitude": "15.2993",
            "longitude": "74.124",
            "confirmed": 7,
            "deaths": 0,
            "recovered": 7,
            "active": 0,
            "NoOfAffectedDistrict": "2",
            "DistrictReport": [
                {
                    "District": "NORTH GOA",
                    "Latitude": "15.534861",
                    "Longitude": "73.93041",
                    "confirmed": 6
                },
                {
                    "District": "SOUTH GOA",
                    "Latitude": "15.124326",
                    "Longitude": "74.118351",
                    "confirmed": 1
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Gujarat",
            "latitude": "22.309425",
            "longitude": "72.13623",
            "confirmed": 2407,
            "deaths": 103,
            "recovered": 179,
            "active": 2125,
            "NoOfAffectedDistrict": "18",
            "DistrictReport": [
                {
                    "District": "AHMEDABAD",
                    "Latitude": "23.029213",
                    "Longitude": "72.570387",
                    "confirmed": 134
                },
                {
                    "District": "ANAND",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "BHAVNAGAR",
                    "Latitude": "21.758598",
                    "Longitude": "72.146613",
                    "confirmed": 18
                },
                {
                    "District": "CHHOTA UDEPUR",
                    "Latitude": "23.361661",
                    "Longitude": "71.64895",
                    "confirmed": 2
                },
                {
                    "District": "DAHOD",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "GANDHI NAGAR",
                    "Latitude": "23.226861",
                    "Longitude": "72.645882",
                    "confirmed": 13
                },
                {
                    "District": "GIR SOMNATH",
                    "Latitude": "20.89597",
                    "Longitude": "70.407986",
                    "confirmed": 2
                },
                {
                    "District": "JAMNAGAR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KUTCH",
                    "Latitude": "23.361661",
                    "Longitude": "71.64895",
                    "confirmed": 2
                },
                {
                    "District": "MAHESANA",
                    "Latitude": "23.702457",
                    "Longitude": "72.507428",
                    "confirmed": 2
                },
                {
                    "District": "MORBI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "PANCHMAHAL",
                    "Latitude": "23.361661",
                    "Longitude": "71.64895",
                    "confirmed": 1
                },
                {
                    "District": "PATAN",
                    "Latitude": "23.850661",
                    "Longitude": "72.13464",
                    "confirmed": 5
                },
                {
                    "District": "PORBANDAR",
                    "Latitude": "21.640592",
                    "Longitude": "69.61636",
                    "confirmed": 3
                },
                {
                    "District": "RAJKOT",
                    "Latitude": "22.289356",
                    "Longitude": "70.787335",
                    "confirmed": 11
                },
                {
                    "District": "SABARKANTHA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "SURAT",
                    "Latitude": "21.196102",
                    "Longitude": "72.815766",
                    "confirmed": 24
                },
                {
                    "District": "VADODARA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 18
                },
                {
                    "District": "Unknown",
                    "confirmed": 2166
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Haryana",
            "latitude": "29.238478",
            "longitude": "76.431885",
            "confirmed": 262,
            "deaths": 3,
            "recovered": 140,
            "active": 119,
            "NoOfAffectedDistrict": "17",
            "DistrictReport": [
                {
                    "District": "AMBALA",
                    "Latitude": "30.377946",
                    "Longitude": "76.7782",
                    "confirmed": 4
                },
                {
                    "District": "BHIWANI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "CHARKHI DADRI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "FARIDABAD",
                    "Latitude": "28.417987",
                    "Longitude": "77.307538",
                    "confirmed": 28
                },
                {
                    "District": "FATEHABAD",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "GURGAON",
                    "Latitude": "28.459647",
                    "Longitude": "77.061922",
                    "confirmed": 32
                },
                {
                    "District": "HISSAR",
                    "Latitude": "29.147086",
                    "Longitude": "75.733876",
                    "confirmed": 1
                },
                {
                    "District": "JIND",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KAITHAL",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "KARNAL",
                    "Latitude": "29.677013",
                    "Longitude": "76.99747",
                    "confirmed": 5
                },
                {
                    "District": "NUH",
                    "Latitude": "28.10296",
                    "Longitude": "77.00144",
                    "confirmed": 38
                },
                {
                    "District": "PALWAL",
                    "Latitude": "28.14327",
                    "Longitude": "77.32698",
                    "confirmed": 28
                },
                {
                    "District": "PANCHKULA",
                    "Latitude": "30.680826",
                    "Longitude": "76.964057",
                    "confirmed": 2
                },
                {
                    "District": "PANIPAT",
                    "Latitude": "29.380631",
                    "Longitude": "76.970556",
                    "confirmed": 4
                },
                {
                    "District": "ROHTAK",
                    "Latitude": "28.890997",
                    "Longitude": "76.60233",
                    "confirmed": 1
                },
                {
                    "District": "SIRSA",
                    "Latitude": "29.53045",
                    "Longitude": "75.031888",
                    "confirmed": 3
                },
                {
                    "District": "SONEPAT",
                    "Latitude": "29.009128",
                    "Longitude": "77.078234",
                    "confirmed": 2
                },
                {
                    "District": "Unknown",
                    "confirmed": 107
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Himachal Pradesh",
            "latitude": "32.084206",
            "longitude": "77.571167",
            "confirmed": 40,
            "deaths": 1,
            "recovered": 18,
            "active": 21,
            "NoOfAffectedDistrict": "5",
            "DistrictReport": [
                {
                    "District": "CHAMBA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 4
                },
                {
                    "District": "KANGRA",
                    "Latitude": "32.115148",
                    "Longitude": "76.283569",
                    "confirmed": 4
                },
                {
                    "District": "SIRMAUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 7
                },
                {
                    "District": "SOLAN",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 7
                },
                {
                    "District": "UNA",
                    "Latitude": "31.467695",
                    "Longitude": "76.264171",
                    "confirmed": 6
                },
                {
                    "District": "Unknown",
                    "confirmed": 12
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Jammu and Kashmir",
            "latitude": "33.7782",
            "longitude": "76.5762",
            "confirmed": 407,
            "deaths": 5,
            "recovered": 92,
            "active": 310,
            "NoOfAffectedDistrict": "12",
            "DistrictReport": [
                {
                    "District": "BADGAM",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 10
                },
                {
                    "District": "BANDIPORA",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 36
                },
                {
                    "District": "BARAMULLA",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 25
                },
                {
                    "District": "GANDERBAL",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 2
                },
                {
                    "District": "JAMMU",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 18
                },
                {
                    "District": "KULGAM",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 3
                },
                {
                    "District": "KUPWARA",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 8
                },
                {
                    "District": "PULWAMA",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 3
                },
                {
                    "District": "RAJOURI",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 3
                },
                {
                    "District": "SHOPIAN",
                    "Latitude": "33.7594",
                    "Longitude": "74.8039",
                    "confirmed": 13
                },
                {
                    "District": "SRINAGAR",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 50
                },
                {
                    "District": "UDHAMPUR",
                    "Latitude": "35.340606",
                    "Longitude": "77.129553",
                    "confirmed": 11
                },
                {
                    "District": "Unknown",
                    "confirmed": 225
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Jharkhand",
            "latitude": "23.6102",
            "longitude": "85.2799",
            "confirmed": 49,
            "deaths": 3,
            "recovered": 8,
            "active": 38,
            "NoOfAffectedDistrict": "3",
            "DistrictReport": [
                {
                    "District": "BOKARO",
                    "Latitude": "23.639492",
                    "Longitude": "86.462402",
                    "confirmed": 5
                },
                {
                    "District": "HAZARIBAGH",
                    "Latitude": "23.99507",
                    "Longitude": "85.36109",
                    "confirmed": 1
                },
                {
                    "District": "RANCHI",
                    "Latitude": "23.375701",
                    "Longitude": "85.329918",
                    "confirmed": 7
                },
                {
                    "District": "Unknown",
                    "confirmed": 36
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Karnataka",
            "latitude": "15.317277",
            "longitude": "75.71389",
            "confirmed": 443,
            "deaths": 17,
            "recovered": 141,
            "active": 285,
            "NoOfAffectedDistrict": "19",
            "DistrictReport": [
                {
                    "District": "BAGALKOTE",
                    "Latitude": "14.882195",
                    "Longitude": "75.57454",
                    "confirmed": 8
                },
                {
                    "District": "BALLARI",
                    "Latitude": "15.138683",
                    "Longitude": "76.927567",
                    "confirmed": 6
                },
                {
                    "District": "BBMP",
                    "Latitude": "14.882195",
                    "Longitude": "75.57454",
                    "confirmed": 45
                },
                {
                    "District": "BELAGAVI",
                    "Latitude": "15.870963",
                    "Longitude": "74.515855",
                    "confirmed": 10
                },
                {
                    "District": "BENGALURU (R)",
                    "Latitude": "14.882195",
                    "Longitude": "75.57454",
                    "confirmed": 2
                },
                {
                    "District": "BENGALURU (U)",
                    "Latitude": "14.882195",
                    "Longitude": "75.57454",
                    "confirmed": 24
                },
                {
                    "District": "BIDAR",
                    "Latitude": "17.900341",
                    "Longitude": "77.55249",
                    "confirmed": 10
                },
                {
                    "District": "CHIKKABALLAPUR",
                    "Latitude": "13.352219",
                    "Longitude": "77.72517",
                    "confirmed": 9
                },
                {
                    "District": "DAKSHIN KANNADA",
                    "Latitude": "12.866554",
                    "Longitude": "75.297651",
                    "confirmed": 12
                },
                {
                    "District": "DAVANAGERE",
                    "Latitude": "14.345102",
                    "Longitude": "75.907225",
                    "confirmed": 3
                },
                {
                    "District": "DHARWAD",
                    "Latitude": "15.383671",
                    "Longitude": "75.161765",
                    "confirmed": 2
                },
                {
                    "District": "GADAG",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KALBURGI",
                    "Latitude": "17.235221",
                    "Longitude": "76.552523",
                    "confirmed": 9
                },
                {
                    "District": "KODAGU",
                    "Latitude": "12.328477",
                    "Longitude": "75.729208",
                    "confirmed": 1
                },
                {
                    "District": "MANDYA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 5
                },
                {
                    "District": "MYSURU",
                    "Latitude": "12.317074",
                    "Longitude": "76.638276",
                    "confirmed": 37
                },
                {
                    "District": "TUMAKURU",
                    "Latitude": "13.333653",
                    "Longitude": "77.117644",
                    "confirmed": 1
                },
                {
                    "District": "UDUPI",
                    "Latitude": "13.352223",
                    "Longitude": "74.74418",
                    "confirmed": 3
                },
                {
                    "District": "UTTARA KANNADA",
                    "Latitude": "14.791589",
                    "Longitude": "74.699721",
                    "confirmed": 9
                },
                {
                    "District": "Unknown",
                    "confirmed": 246
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Kerala",
            "latitude": "10.850516",
            "longitude": "76.27108",
            "confirmed": 438,
            "deaths": 3,
            "recovered": 324,
            "active": 111,
            "NoOfAffectedDistrict": "14+",
            "DistrictReport": [
                {
                    "District": "ALAPPUZHA",
                    "Latitude": "9.497826",
                    "Longitude": "76.339324",
                    "confirmed": 5
                },
                {
                    "District": "CANNANORE(KANNUR)",
                    "Latitude": "11.8745",
                    "Longitude": "75.3704",
                    "confirmed": 64
                },
                {
                    "District": "ERNAKULAM",
                    "Latitude": "10.052821",
                    "Longitude": "76.477804",
                    "confirmed": 24
                },
                {
                    "District": "IDUKKI",
                    "Latitude": "9.85522",
                    "Longitude": "76.964778",
                    "confirmed": 9
                },
                {
                    "District": "KASARAGODE",
                    "Latitude": "9.791129",
                    "Longitude": "76.746728",
                    "confirmed": 155
                },
                {
                    "District": "KOLLAM",
                    "Latitude": "8.895683",
                    "Longitude": "76.600777",
                    "confirmed": 9
                },
                {
                    "District": "KOTTAYAM",
                    "Latitude": "9.588253",
                    "Longitude": "76.529574",
                    "confirmed": 6
                },
                {
                    "District": "KOZHICODE (CALICUT)",
                    "Latitude": "11.278596",
                    "Longitude": "75.805073",
                    "confirmed": 15
                },
                {
                    "District": "MALAPPURAM",
                    "Latitude": "11.051361",
                    "Longitude": "76.077977",
                    "confirmed": 17
                },
                {
                    "District": "PALAKKAD",
                    "Latitude": "10.774862",
                    "Longitude": "76.654783",
                    "confirmed": 7
                },
                {
                    "District": "PATHANAMTHITTA",
                    "Latitude": "9.268849",
                    "Longitude": "76.782067",
                    "confirmed": 14
                },
                {
                    "District": "THIRUVANANTHAPURAM",
                    "Latitude": "8.505766",
                    "Longitude": "76.94749",
                    "confirmed": 15
                },
                {
                    "District": "THRISSUR",
                    "Latitude": "10.445094",
                    "Longitude": "76.123906",
                    "confirmed": 14
                },
                {
                    "District": "WYANAD",
                    "Latitude": "9.791129",
                    "Longitude": "76.746728",
                    "confirmed": 3
                },
                {
                    "District": "Unknown",
                    "confirmed": 81
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Ladakh",
            "latitude": "34.152588",
            "longitude": "77.577049",
            "confirmed": 18,
            "deaths": 0,
            "recovered": 14,
            "active": 4,
            "NoOfAffectedDistrict": "2",
            "DistrictReport": [
                {
                    "District": "KARGIL",
                    "Latitude": "34.55764",
                    "Longitude": "76.12622",
                    "confirmed": 3
                },
                {
                    "District": "LEH (LADAKH)",
                    "Latitude": "34.442917",
                    "Longitude": "78.077329",
                    "confirmed": 12
                },
                {
                    "District": "Unknown",
                    "confirmed": 3
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Madhya Pradesh",
            "latitude": "23.473324",
            "longitude": "77.947998",
            "confirmed": 1695,
            "deaths": 81,
            "recovered": 148,
            "active": 1466,
            "NoOfAffectedDistrict": "12",
            "DistrictReport": [
                {
                    "District": "BARWANI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 3
                },
                {
                    "District": "BETUL",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "BHOPAL",
                    "Latitude": "23.235467",
                    "Longitude": "77.435763",
                    "confirmed": 83
                },
                {
                    "District": "CHINDWARA",
                    "Latitude": "22.952601",
                    "Longitude": "78.35788",
                    "confirmed": 2
                },
                {
                    "District": "GWALIOR",
                    "Latitude": "26.204733",
                    "Longitude": "78.174188",
                    "confirmed": 6
                },
                {
                    "District": "INDORE",
                    "Latitude": "22.705243",
                    "Longitude": "75.864121",
                    "confirmed": 123
                },
                {
                    "District": "JABALPUR",
                    "Latitude": "23.170662",
                    "Longitude": "79.921139",
                    "confirmed": 8
                },
                {
                    "District": "KHARGON",
                    "Latitude": "21.815491",
                    "Longitude": "75.622152",
                    "confirmed": 4
                },
                {
                    "District": "MORENA",
                    "Latitude": "26.50286",
                    "Longitude": "78.00163",
                    "confirmed": 13
                },
                {
                    "District": "SHIVPURI",
                    "Latitude": "25.380438",
                    "Longitude": "77.798606",
                    "confirmed": 2
                },
                {
                    "District": "UJJAIN",
                    "Latitude": "23.165172",
                    "Longitude": "75.790848",
                    "confirmed": 13
                },
                {
                    "District": "VIDISHA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "Unknown",
                    "confirmed": 1436
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Maharashtra",
            "latitude": "19.601194",
            "longitude": "75.552979",
            "confirmed": 5652,
            "deaths": 269,
            "recovered": 789,
            "active": 4594,
            "NoOfAffectedDistrict": "27",
            "DistrictReport": [
                {
                    "District": "AHMEDNAGAR",
                    "Latitude": "19.105326",
                    "Longitude": "74.733165",
                    "confirmed": 23
                },
                {
                    "District": "AKOLA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 9
                },
                {
                    "District": "AMRAVATI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 4
                },
                {
                    "District": "AURANGABAD",
                    "Latitude": "19.877458",
                    "Longitude": "75.34249",
                    "confirmed": 17
                },
                {
                    "District": "BEED",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "BULDHANA",
                    "Latitude": "20.5292",
                    "Longitude": "76.1842",
                    "confirmed": 11
                },
                {
                    "District": "GONDIA",
                    "Latitude": "21.46736",
                    "Longitude": "80.188141",
                    "confirmed": 1
                },
                {
                    "District": "HINGOLI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "JALGAON",
                    "Latitude": "20.992517",
                    "Longitude": "75.570367",
                    "confirmed": 2
                },
                {
                    "District": "JALNA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KOLHAPUR",
                    "Latitude": "16.692209",
                    "Longitude": "74.242894",
                    "confirmed": 5
                },
                {
                    "District": "LATUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 8
                },
                {
                    "District": "MUMBAI",
                    "Latitude": "19.10109",
                    "Longitude": "72.875449",
                    "confirmed": 873
                },
                {
                    "District": "MUMBAI SUB Ur",
                    "Latitude": "19.125501",
                    "Longitude": "72.897224",
                    "confirmed": 7
                },
                {
                    "District": "NAGPUR",
                    "Latitude": "21.145537",
                    "Longitude": "79.074901",
                    "confirmed": 25
                },
                {
                    "District": "NASHIK",
                    "Latitude": "19.991966",
                    "Longitude": "73.775826",
                    "confirmed": 7
                },
                {
                    "District": "OSMANABAD",
                    "Latitude": "17.816689",
                    "Longitude": "76.28402",
                    "confirmed": 4
                },
                {
                    "District": "PALAGHAR",
                    "Latitude": "19.6967",
                    "Longitude": "72.7699",
                    "confirmed": 3
                },
                {
                    "District": "PUNE",
                    "Latitude": "18.54465",
                    "Longitude": "73.840523",
                    "confirmed": 190
                },
                {
                    "District": "RAIGAD",
                    "Latitude": "18.139979",
                    "Longitude": "73.630886",
                    "confirmed": 2
                },
                {
                    "District": "RATNAGIRI",
                    "Latitude": "16.993753",
                    "Longitude": "73.303394",
                    "confirmed": 4
                },
                {
                    "District": "SANGLI",
                    "Latitude": "17.087516",
                    "Longitude": "74.429737",
                    "confirmed": 26
                },
                {
                    "District": "SATARA",
                    "Latitude": "17.701588",
                    "Longitude": "73.999203",
                    "confirmed": 6
                },
                {
                    "District": "SINDHUDURG (KUDAL)",
                    "Latitude": "16.044232",
                    "Longitude": "73.460504",
                    "confirmed": 2
                },
                {
                    "District": "THANE",
                    "Latitude": "19.217788",
                    "Longitude": "72.985413",
                    "confirmed": 110
                },
                {
                    "District": "WASHIM",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "YAVATMAL",
                    "Latitude": "20.384982",
                    "Longitude": "78.126297",
                    "confirmed": 21
                },
                {
                    "District": "Unknown",
                    "confirmed": 4288
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Manipur",
            "latitude": "24.6637",
            "longitude": "93.9063",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 2,
            "active": 0,
            "NoOfAffectedDistrict": "1",
            "DistrictReport": [
                {
                    "District": "THOUBAL",
                    "Latitude": "24.805538",
                    "Longitude": "93.911142",
                    "confirmed": 1
                },
                {
                    "District": "Unknown",
                    "confirmed": 1
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Meghalaya",
            "latitude": "25.467",
            "longitude": "91.3662",
            "confirmed": 12,
            "deaths": 1,
            "recovered": 0,
            "active": 11
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Mizoram",
            "latitude": "23.1645",
            "longitude": "92.9376",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0,
            "active": 1,
            "NoOfAffectedDistrict": "1",
            "DistrictReport": [
                {
                    "District": "AIZWAL WEST",
                    "Latitude": "23.543786",
                    "Longitude": "92.884718",
                    "confirmed": 1
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Nagaland",
            "latitude": "26.1584",
            "longitude": "94.5624",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Odisha",
            "latitude": "20.94092",
            "longitude": "84.803467",
            "confirmed": 83,
            "deaths": 1,
            "recovered": 32,
            "active": 50,
            "NoOfAffectedDistrict": "8",
            "DistrictReport": [
                {
                    "District": "BHADRAK",
                    "Latitude": "21.058869",
                    "Longitude": "86.49009",
                    "confirmed": 3
                },
                {
                    "District": "CUTTACK",
                    "Latitude": "20.469426",
                    "Longitude": "85.868048",
                    "confirmed": 2
                },
                {
                    "District": "DHENKANAL",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "JAJPUR",
                    "Latitude": "20.966569",
                    "Longitude": "86.050415",
                    "confirmed": 1
                },
                {
                    "District": "KALAHANDI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KENDRAPARA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "KHURDA (BHUVANESHWAR)",
                    "Latitude": "20.152891",
                    "Longitude": "85.703427",
                    "confirmed": 34
                },
                {
                    "District": "PURI",
                    "Latitude": "19.807665",
                    "Longitude": "85.840616",
                    "confirmed": 1
                },
                {
                    "District": "Unknown",
                    "confirmed": 39
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Puducherry",
            "latitude": "11.9416",
            "longitude": "79.8083",
            "confirmed": 7,
            "deaths": 0,
            "recovered": 3,
            "active": 4,
            "NoOfAffectedDistrict": "2",
            "DistrictReport": [
                {
                    "District": "MAHE",
                    "Latitude": "11.700652",
                    "Longitude": "75.537381",
                    "confirmed": 1
                },
                {
                    "District": "PONDICHERRY",
                    "Latitude": "11.937381",
                    "Longitude": "79.821092",
                    "confirmed": 4
                },
                {
                    "District": "Unknown",
                    "confirmed": 2
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Punjab",
            "latitude": "30.525005",
            "longitude": "75.890121",
            "confirmed": 277,
            "deaths": 16,
            "recovered": 65,
            "active": 196,
            "NoOfAffectedDistrict": "17",
            "DistrictReport": [
                {
                    "District": "AMRITSAR",
                    "Latitude": "31.640943",
                    "Longitude": "74.872782",
                    "confirmed": 11
                },
                {
                    "District": "BARNALA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "FARIDKOT",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "FATEHGARH SAHIB (SARHIND)",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "HOSHIARPUR",
                    "Latitude": "31.534657",
                    "Longitude": "75.898853",
                    "confirmed": 7
                },
                {
                    "District": "JALANDHAR",
                    "Latitude": "31.311446",
                    "Longitude": "75.607822",
                    "confirmed": 11
                },
                {
                    "District": "KAPURTHALA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "LUDHIANA",
                    "Latitude": "30.893914",
                    "Longitude": "75.84022",
                    "confirmed": 10
                },
                {
                    "District": "MANSA",
                    "Latitude": "29.99092",
                    "Longitude": "75.4012",
                    "confirmed": 11
                },
                {
                    "District": "MOGA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 4
                },
                {
                    "District": "MUKTSAR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "NAWANSHAHR (SBS Nagar)",
                    "Latitude": "31.12612",
                    "Longitude": "76.11633",
                    "confirmed": 19
                },
                {
                    "District": "PATHANKOT",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 7
                },
                {
                    "District": "PATIALA",
                    "Latitude": "30.33612",
                    "Longitude": "76.390712",
                    "confirmed": 1
                },
                {
                    "District": "RUPNAGAR",
                    "Latitude": "30.972934",
                    "Longitude": "76.525267",
                    "confirmed": 3
                },
                {
                    "District": "SANGRUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "SASNAGAR",
                    "Latitude": "30.754386",
                    "Longitude": "75.523129",
                    "confirmed": 38
                },
                {
                    "District": "Unknown",
                    "confirmed": 145
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Rajasthan",
            "latitude": "27.0238",
            "longitude": "74.2179",
            "confirmed": 1890,
            "deaths": 27,
            "recovered": 230,
            "active": 1633,
            "NoOfAffectedDistrict": "24",
            "DistrictReport": [
                {
                    "District": "AJMER",
                    "Latitude": "26.46962",
                    "Longitude": "74.638119",
                    "confirmed": 5
                },
                {
                    "District": "ALWAR",
                    "Latitude": "27.564459",
                    "Longitude": "76.61419",
                    "confirmed": 5
                },
                {
                    "District": "BANSWARA",
                    "Latitude": "23.549891",
                    "Longitude": "74.441272",
                    "confirmed": 12
                },
                {
                    "District": "BARMER",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "BHARATPUR",
                    "Latitude": "27.479035",
                    "Longitude": "77.32727",
                    "confirmed": 8
                },
                {
                    "District": "BHILWARA",
                    "Latitude": "25.327839",
                    "Longitude": "74.633487",
                    "confirmed": 28
                },
                {
                    "District": "BIKANER",
                    "Latitude": "28.012376",
                    "Longitude": "73.309239",
                    "confirmed": 20
                },
                {
                    "District": "CHURU",
                    "Latitude": "28.057438",
                    "Longitude": "74.613648",
                    "confirmed": 11
                },
                {
                    "District": "DAUSA",
                    "Latitude": "26.894609",
                    "Longitude": "76.334155",
                    "confirmed": 6
                },
                {
                    "District": "DHOLPUR",
                    "Latitude": "26.684061",
                    "Longitude": "77.695735",
                    "confirmed": 1
                },
                {
                    "District": "DUNGARPUR",
                    "Latitude": "23.84306",
                    "Longitude": "73.71466",
                    "confirmed": 5
                },
                {
                    "District": "JAIPUR",
                    "Latitude": "26.898448",
                    "Longitude": "75.78531",
                    "confirmed": 170
                },
                {
                    "District": "JAISALMER",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 19
                },
                {
                    "District": "JHALAWAR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 9
                },
                {
                    "District": "JHUNJHUNU",
                    "Latitude": "28.125281",
                    "Longitude": "75.404231",
                    "confirmed": 31
                },
                {
                    "District": "JODHPUR",
                    "Latitude": "26.261398",
                    "Longitude": "73.023376",
                    "confirmed": 34
                },
                {
                    "District": "KARAULI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "KOTA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 17
                },
                {
                    "District": "NAGAUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "PALI",
                    "Latitude": "25.770026",
                    "Longitude": "73.332057",
                    "confirmed": 2
                },
                {
                    "District": "PRATAPGARH",
                    "Latitude": "24.03215",
                    "Longitude": "74.78162",
                    "confirmed": 2
                },
                {
                    "District": "SIKAR",
                    "Latitude": "27.608512",
                    "Longitude": "75.149638",
                    "confirmed": 1
                },
                {
                    "District": "TONK",
                    "Latitude": "26.16638",
                    "Longitude": "75.78824",
                    "confirmed": 27
                },
                {
                    "District": "UDAIPUR",
                    "Latitude": "24.576885",
                    "Longitude": "73.709683",
                    "confirmed": 4
                },
                {
                    "District": "Iran Evacuees",
                    "Latitude": "26.02196",
                    "Longitude": "76.454361",
                    "confirmed": 42
                },
                {
                    "District": "Unknown",
                    "confirmed": 1427
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Tamil Nadu",
            "latitude": "11.059821",
            "longitude": "78.387451",
            "confirmed": 1629,
            "deaths": 18,
            "recovered": 662,
            "active": 949,
            "NoOfAffectedDistrict": "33",
            "DistrictReport": [
                {
                    "District": "ARIYALUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "CHENGALPATTU",
                    "Latitude": "12.683624",
                    "Longitude": "79.984461",
                    "confirmed": 23
                },
                {
                    "District": "CHENNAI",
                    "Latitude": "13.030109",
                    "Longitude": "80.203047",
                    "confirmed": 149
                },
                {
                    "District": "COIMBATORE",
                    "Latitude": "11.012683",
                    "Longitude": "76.989487",
                    "confirmed": 60
                },
                {
                    "District": "CUDDALORE",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 13
                },
                {
                    "District": "DINDIGUL",
                    "Latitude": "10.360604",
                    "Longitude": "77.982087",
                    "confirmed": 45
                },
                {
                    "District": "ERODE",
                    "Latitude": "11.339876",
                    "Longitude": "77.706479",
                    "confirmed": 32
                },
                {
                    "District": "KALLLAKURICHI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "KANCHEEPURAM",
                    "Latitude": "12.831987",
                    "Longitude": "79.706378",
                    "confirmed": 7
                },
                {
                    "District": "KARUR",
                    "Latitude": "10.957371",
                    "Longitude": "78.239136",
                    "confirmed": 22
                },
                {
                    "District": "MADURAI",
                    "Latitude": "9.93447",
                    "Longitude": "78.133299",
                    "confirmed": 24
                },
                {
                    "District": "NAGAPATTINAM",
                    "Latitude": "10.773881",
                    "Longitude": "79.843011",
                    "confirmed": 11
                },
                {
                    "District": "NAGERKOIL (KANYAKUMARI)",
                    "Latitude": "8.077293",
                    "Longitude": "77.551376",
                    "confirmed": 6
                },
                {
                    "District": "NAMAKKAL",
                    "Latitude": "11.221269",
                    "Longitude": "78.168029",
                    "confirmed": 28
                },
                {
                    "District": "PERAMBALUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "RAMANATHAPURAM",
                    "Latitude": "9.37158",
                    "Longitude": "78.83077",
                    "confirmed": 2
                },
                {
                    "District": "RANIPET",
                    "Latitude": "11.052213",
                    "Longitude": "78.408526",
                    "confirmed": 28
                },
                {
                    "District": "SALEM",
                    "Latitude": "11.668049",
                    "Longitude": "78.150325",
                    "confirmed": 11
                },
                {
                    "District": "SIVAGANGAI",
                    "Latitude": "11.052213",
                    "Longitude": "78.408526",
                    "confirmed": 5
                },
                {
                    "District": "THANJAVUR",
                    "Latitude": "10.761089",
                    "Longitude": "79.118668",
                    "confirmed": 11
                },
                {
                    "District": "THENI",
                    "Latitude": "9.995905",
                    "Longitude": "77.481452",
                    "confirmed": 24
                },
                {
                    "District": "THIRUVALLUR",
                    "Latitude": "13.14376",
                    "Longitude": "79.90889",
                    "confirmed": 12
                },
                {
                    "District": "THIRUVARUR",
                    "Latitude": "10.768556",
                    "Longitude": "79.628906",
                    "confirmed": 12
                },
                {
                    "District": "THOOTHUKUDI",
                    "Latitude": "8.78333",
                    "Longitude": "78.13333",
                    "confirmed": 17
                },
                {
                    "District": "TIRUCHIRAPALLI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 30
                },
                {
                    "District": "TIRUNELVELI",
                    "Latitude": "8.703403",
                    "Longitude": "77.744131",
                    "confirmed": 38
                },
                {
                    "District": "TIRUPATTUR",
                    "Latitude": "12.549202",
                    "Longitude": "78.579712",
                    "confirmed": 11
                },
                {
                    "District": "TIRUPPUR",
                    "Latitude": "11.108328",
                    "Longitude": "77.345706",
                    "confirmed": 20
                },
                {
                    "District": "TIRUVANNAMALAI",
                    "Latitude": "12.259496",
                    "Longitude": "79.074097",
                    "confirmed": 9
                },
                {
                    "District": "UDAGAMANDALAM",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 4
                },
                {
                    "District": "VELLORE",
                    "Latitude": "12.930627",
                    "Longitude": "79.138812",
                    "confirmed": 5
                },
                {
                    "District": "VILLUPURAM",
                    "Latitude": "11.934126",
                    "Longitude": "79.48833",
                    "confirmed": 16
                },
                {
                    "District": "VIRUDHUNAGAR",
                    "Latitude": "9.58509",
                    "Longitude": "77.95787",
                    "confirmed": 11
                },
                {
                    "District": "Unknown",
                    "confirmed": 939
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Telengana",
            "latitude": "17.123184",
            "longitude": "79.208824",
            "confirmed": 960,
            "deaths": 24,
            "recovered": 197,
            "active": 739
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Tripura",
            "latitude": "23.9408",
            "longitude": "91.9882",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 1,
            "active": 0,
            "NoOfAffectedDistrict": "1",
            "DistrictReport": [
                {
                    "District": "GOMATI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "Unknown",
                    "confirmed": 1
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Uttarakhand",
            "latitude": "30.0668",
            "longitude": "79.0193",
            "confirmed": 46,
            "deaths": 0,
            "recovered": 23,
            "active": 23
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Uttar Pradesh",
            "latitude": "26.8467",
            "longitude": "80.9462",
            "confirmed": 1509,
            "deaths": 21,
            "recovered": 187,
            "active": 1301,
            "NoOfAffectedDistrict": "40",
            "DistrictReport": [
                {
                    "District": "AGRA",
                    "Latitude": "27.189062",
                    "Longitude": "78.010888",
                    "confirmed": 83
                },
                {
                    "District": "ALLAHABAD",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "AURAIYA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "AZAMGARH",
                    "Latitude": "26.249083",
                    "Longitude": "83.248901",
                    "confirmed": 4
                },
                {
                    "District": "BAGHPAT",
                    "Latitude": "28.94442",
                    "Longitude": "77.21878",
                    "confirmed": 5
                },
                {
                    "District": "BANDA",
                    "Latitude": "25.477992",
                    "Longitude": "80.337524",
                    "confirmed": 2
                },
                {
                    "District": "BARA-BANKI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "BAREILLY",
                    "Latitude": "28.352197",
                    "Longitude": "79.423704",
                    "confirmed": 6
                },
                {
                    "District": "BASTI",
                    "Latitude": "26.809363",
                    "Longitude": "82.293091",
                    "confirmed": 8
                },
                {
                    "District": "BIJNOR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "BUDAUN",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 1
                },
                {
                    "District": "BULANDSHAHAR",
                    "Latitude": "28.407",
                    "Longitude": "77.8498",
                    "confirmed": 8
                },
                {
                    "District": "FIROZABAD",
                    "Latitude": "27.148959",
                    "Longitude": "78.392458",
                    "confirmed": 10
                },
                {
                    "District": "GAUTAM BUDHA NAGAR",
                    "Latitude": "26.879641",
                    "Longitude": "80.56982",
                    "confirmed": 65
                },
                {
                    "District": "GHAZIABAD",
                    "Latitude": "28.666086",
                    "Longitude": "77.440011",
                    "confirmed": 25
                },
                {
                    "District": "GHAZIPUR",
                    "Latitude": "25.58704",
                    "Longitude": "83.864136",
                    "confirmed": 5
                },
                {
                    "District": "HARDOI",
                    "Latitude": "27.391278",
                    "Longitude": "80.128784",
                    "confirmed": 2
                },
                {
                    "District": "Hapur",
                    "Latitude": "28.729131",
                    "Longitude": "77.871094",
                    "confirmed": 3
                },
                {
                    "District": "HATHRAS",
                    "Latitude": "27.59621",
                    "Longitude": "78.05237",
                    "confirmed": 4
                },
                {
                    "District": "JAUNPUR",
                    "Latitude": "25.75042",
                    "Longitude": "82.693515",
                    "confirmed": 4
                },
                {
                    "District": "Amroha",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "KANPUR",
                    "Latitude": "26.468325",
                    "Longitude": "80.324134",
                    "confirmed": 9
                },
                {
                    "District": "KAUSHAMBI",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "LAKHIMPUR KHERI",
                    "Latitude": "28.170841",
                    "Longitude": "80.667137",
                    "confirmed": 4
                },
                {
                    "District": "LUCKNOW",
                    "Latitude": "26.85579",
                    "Longitude": "80.939247",
                    "confirmed": 29
                },
                {
                    "District": "MAHARAJGANJ",
                    "Latitude": "26.25883",
                    "Longitude": "83.11615",
                    "confirmed": 6
                },
                {
                    "District": "MATHURA",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "MEERUT",
                    "Latitude": "28.981529",
                    "Longitude": "77.717985",
                    "confirmed": 38
                },
                {
                    "District": "MIRZAPUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "MORADABAD",
                    "Latitude": "28.835925",
                    "Longitude": "78.776012",
                    "confirmed": 1
                },
                {
                    "District": "MUZAFFAR NAGAR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 4
                },
                {
                    "District": "PILIBHIT",
                    "Latitude": "28.637568",
                    "Longitude": "79.799194",
                    "confirmed": 2
                },
                {
                    "District": "PRATAPGARH",
                    "Latitude": "25.89644",
                    "Longitude": "81.94041",
                    "confirmed": 6
                },
                {
                    "District": "RAE-BAREILLY",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 2
                },
                {
                    "District": "RAMPUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 5
                },
                {
                    "District": "SAHARANPUR",
                    "Latitude": "29.957327",
                    "Longitude": "77.556076",
                    "confirmed": 20
                },
                {
                    "District": "SHAHJAHANPUR",
                    "Latitude": "27.868163",
                    "Longitude": "79.914446",
                    "confirmed": 1
                },
                {
                    "District": "SHAMLI",
                    "Latitude": "29.44934",
                    "Longitude": "77.31282",
                    "confirmed": 17
                },
                {
                    "District": "SITAPUR",
                    "Latitude": "",
                    "Longitude": "",
                    "confirmed": 10
                },
                {
                    "District": "VARANASI",
                    "Latitude": "25.291146",
                    "Longitude": "82.995841",
                    "confirmed": 9
                },
                {
                    "District": "Unknown",
                    "confirmed": 1099
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "West Bengal",
            "latitude": "22.978624",
            "longitude": "87.747803",
            "confirmed": 456,
            "deaths": 15,
            "recovered": 79,
            "active": 362,
            "NoOfAffectedDistrict": "11+",
            "DistrictReport": [
                {
                    "District": "HOOGHLY",
                    "Latitude": "22.872939",
                    "Longitude": "88.17086",
                    "confirmed": 4
                },
                {
                    "District": "HOWRAH",
                    "Latitude": "22.578506",
                    "Longitude": "88.192347",
                    "confirmed": 7
                },
                {
                    "District": "JALPAIGURI",
                    "Latitude": "26.705206",
                    "Longitude": "89.139624",
                    "confirmed": 4
                },
                {
                    "District": "KALIMPOMG",
                    "Latitude": "23.269974",
                    "Longitude": "87.815506",
                    "confirmed": 7
                },
                {
                    "District": "KOLKATA",
                    "Latitude": "22.608067",
                    "Longitude": "88.419453",
                    "confirmed": 29
                },
                {
                    "District": "NADIA",
                    "Latitude": "23.390071",
                    "Longitude": "88.359595",
                    "confirmed": 5
                },
                {
                    "District": "NORTH 24 PARGANAS",
                    "Latitude": "23.269974",
                    "Longitude": "87.815506",
                    "confirmed": 3
                },
                {
                    "District": "PASCHIM BURDWAN",
                    "Latitude": "23.241345",
                    "Longitude": "87.863159",
                    "confirmed": 0
                },
                {
                    "District": "PASCHIM MEDNIPUR",
                    "Latitude": "23.269974",
                    "Longitude": "87.815506",
                    "confirmed": 2
                },
                {
                    "District": "PURBA MEDNIPUR",
                    "Latitude": "23.269974",
                    "Longitude": "87.815506",
                    "confirmed": 7
                },
                {
                    "District": "SOUTH 24 PARGANAS",
                    "Latitude": "23.269974",
                    "Longitude": "87.815506",
                    "confirmed": 1
                },
                {
                    "District": "Unknown",
                    "confirmed": 387
                }
            ]
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Lakshadweep",
            "latitude": "13.7",
            "longitude": "72.1833",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Dadra and Nagar Haveli",
            "latitude": "20.1809",
            "longitude": "73.0169",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Uttaranchal",
            "latitude": "30.0668",
            "longitude": "79.0193",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Tripura",
            "latitude": "23.9408",
            "longitude": "91.9882",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Daman and Diu",
            "latitude": "20.4283",
            "longitude": "72.8397",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Sikkim",
            "latitude": "27.533",
            "longitude": "88.5122",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        },
        {
            "countrycode": "IN",
            "country": "India",
            "state": "Nagaland",
            "latitude": "26.1584",
            "longitude": "94.5624",
            "confirmed": 0,
            "deaths": 0,
            "recovered": 0,
            "active": 0
        }
    ]],
}


export default stringConstants;
