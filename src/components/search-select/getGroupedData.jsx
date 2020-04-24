function getIndiaDistrictjson(apiResponse) {

    let arr = [];

    apiResponse[0].map((values, index) => {
        let obj = { id: index, value: values.state }
        if (values.state)
            arr.push(obj)

    })
    return arr;

}


function getIndiaGeojson(apiResponse) {

    let arr = [];

    function createData(state, confirmed, recovered, deaths, active) {
        return { state, confirmed, recovered, deaths, active };
    }
    apiResponse.map(values => {
        arr.push(createData(values.state, values.confirmed,
            values.recovered, values.deaths, values.active))
    })

    return arr;
}

function getCountryjson(apiResponse) {
    return apiResponse ? apiResponse : [];
}


export default function getGroupedData(sortTypes, apiResponse) {


    if (apiResponse)
        switch (sortTypes) {
            case 'india_district':
                return getIndiaDistrictjson(apiResponse)
            case 'india_state':
                return getIndiaGeojson(apiResponse)
            case 'world_country':
                return getCountryjson(apiResponse.data.covid19Stats);
            default:
                return 0;
        }

    return 0;

}


