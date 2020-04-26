


function getIndiaDistrictjson(apiResponse, statename) {

    let arr = [];

    function createData(district, confirmed) {
        return { district, confirmed };
    }


    apiResponse[0].map(values => {
        if (!statename) {
            if (values.DistrictReport) {
                values.DistrictReport.map(dist => {
                    if(dist.District !== "Unknown")
                    arr.push(createData(dist.District, dist.confirmed))
                })
            }
        }
        else {
            if (statename == values.state)
                if (values.DistrictReport) {
                    values.DistrictReport.map(dist => {
                        if(dist.District !== "Unknown")
                        arr.push(createData(dist.District, dist.confirmed))
                    })
                }
                else {
                    arr.push(createData(values.state, values.confirmed))
                }
        }
    })

    return arr;
}


function getIndiaGeojson(apiResponse,statename) {

    let arr = [];

    function createData(state, confirmed, recovered, deaths, active) {
        return { state, confirmed, recovered, deaths, active };
    }


    apiResponse.map(values => {
        if(!statename)

        arr.push(createData(values.state, values.confirmed,
            values.recovered, values.deaths, values.active))

        else if(statename && statename===values.state)
        
            arr.push(createData(values.state, values.confirmed,
            values.recovered, values.deaths, values.active))
    })


    return arr;
}


function getCountryjson(apiResponse,selectedCountry) {

    let arr = [];

    function createData(city, province, confirmed, deaths, recovered) {
        return { city, province, confirmed, deaths, recovered };
    }


    if(selectedCountry === 'USA') selectedCountry='US'

    apiResponse.map(values => {

        if(selectedCountry && values.country &&  
            (selectedCountry.toUpperCase() === values.country.toUpperCase()) )
        arr.push(createData(
            values.city ? values.city : values.country,
            values.province ? values.province : values.country,
            values.confirmed ? values.confirmed : 0,
            values.deaths ? values.deaths : 0,
            values.recovered ? values.recovered : 0))

    })


    return arr;

}



function getWorldStats(apiResponse,countryName) {

    let arr = [];
    let countryDatas = [];
    

    function createData(country, newcases, active, critical, recovered, total, deaths) {
        return { country, newcases, active, critical, recovered, total, deaths };
    }

    apiResponse.map(values => {

        if(values.country !== 'All' && values.country && !countryName)
        arr.push(createData(
            values.country,
            values.cases.new ? parseInt(values.cases.new.substring(1)) : 0,
            values.cases.active ? values.cases.active : 0,
            values.cases.critical ? values.cases.critical : 0,
            values.cases.recovered ? values.cases.recovered : 0,
            values.cases.total ? values.cases.total : 0,
            values.deaths.total ? values.deaths.total : 0))
        else if(countryName && (countryName == values.country)){
            countryDatas.push(createData(
                values.country,
                values.cases.new ? parseInt(values.cases.new.substring(1)) : 0,
                values.cases.active ? values.cases.active : 0,
                values.cases.critical ? values.cases.critical : 0,
                values.cases.recovered ? values.cases.recovered : 0,
                values.cases.total ? values.cases.total : 0,
                values.deaths.total ? values.deaths.total : 0))
        }
    })

    return !countryName ? arr :countryDatas ;
}


export default function getTableData(sortTypes, apiResponse, statename = false,selectedCountry) {


    if (apiResponse)
        switch (sortTypes) {
            case 'india_district':
                return getIndiaDistrictjson(apiResponse, statename)
            case 'india_state':
                return getIndiaGeojson(apiResponse,statename)
            case 'world_country':
                return getCountryjson(apiResponse.data.covid19Stats,selectedCountry);
            case 'world_stats':
                return getWorldStats(apiResponse.response,selectedCountry);
            default:
                return 0;
        }
    return 0;
}


