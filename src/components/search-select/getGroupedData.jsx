

function getIndiaDistrictjson(apiResponse) {
    let arr = [];
    apiResponse[0].map((values, index) => {
        let obj = { id: index, value: values.state }
        if (values.state)
            arr.push(obj)
    })
    return arr;
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
