


function getIndiaDistrictjson(apiResponse, statename) {

    let arr = [];

    function createData(district, confirmed) {
        return { district, confirmed };
    }

    apiResponse[0].map(values => {
        if (!statename) {
            if (values.DistrictReport) {
                values.DistrictReport.map(dist => {
                    arr.push(createData(dist.District, dist.confirmed))
                })
            }
        }

        else {
            if (values.DistrictReport && statename == values.state) {
                values.DistrictReport.map(dist => {
                    arr.push(createData(dist.District, dist.confirmed))
                })
            }

        }

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


    let arr = [];

    function createData(city, province, confirmed, deaths, recovered) {
        return { city, province, confirmed, deaths, recovered };
    }


    apiResponse.map(values => {

        arr.push(createData(
            values.city ? values.city : values.country,
            values.province ? values.province : values.country,
            values.confirmed ? values.confirmed : 0,
            values.deaths ? values.deaths : 0,
            values.recovered ? values.recovered : 0))
    })

    return arr;

}


export default function getTableData(sortTypes, apiResponse, statename = false) {

    console.log('getTableData')
    console.log(statename)

    if (apiResponse)
        switch (sortTypes) {
            case 'india_district':
                return getIndiaDistrictjson(apiResponse, statename)
            case 'india_state':
                return getIndiaGeojson(apiResponse)
            case 'world_country':
                return getCountryjson(apiResponse.data.covid19Stats);
            default:
                return 0;
        }

    return 0;

}


