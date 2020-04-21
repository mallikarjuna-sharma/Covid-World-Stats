
const stringConstants = {


    /* Grpah constants*/

    GRAPHTYPES: [
        { value: 'line', label: 'line' },
        { value: 'bar', label: 'bar' },
        { value: 'pie', label: 'pie' },
    ],
    GETGRAPHTYPE: 'GETGRAPHTYPE',
    SORT_TYPES: [
        { value: 'india_state', label: 'states in india' },
        { value: 'india_district', label: 'districts in india' },
    ],
    SORT_TYPES_ACTION: 'SORT_TYPES',

    /* rapid api headers constants*/
    RAPID_API_INDIA_STATE_WISE: {
        'X-RapidAPI-Host': 'covid19-data.p.rapidapi.com',
        'X-RapidAPI-Key': 'd55fe518a0mshfaba210c9470cefp1be9e7jsn4ee844d0190d'
    },
    RAPID_API_COUNTRY_STATE_WISE: {
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'X-RapidAPI-Key': 'd55fe518a0mshfaba210c9470cefp1be9e7jsn4ee844d0190d'
    },


    /* api constants*/
    INDIA_STATE_WISE: 'https://covid19-data.p.rapidapi.com/india',
    INDIA_DISTRICT_WISE: 'https://covid19-data.p.rapidapi.com/in-dist',
    COUNTRY_STATE_WISE: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats/?country=',



    /* action constants*/

    INDIAGEOJSONACTION: 'INDIAGEOJSONACTION',
    INDIA_DISTRICT_JSON_ACTION: 'INDIA_DISTRICT_JSON_ACTION',
    COUNTRYJSONACTION: 'COUNTRYJSONACTION',


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

    INDIA_DISTRICT_JSON_ROWS: ['District', 'Confirmed']


}


export default stringConstants;
