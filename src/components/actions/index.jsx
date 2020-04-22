import stringConstants from '../stringConstants.jsx'
import axios from 'axios'

/* api calls */
export function loadIndiaGeojson() {
    return (dispatch) => {
        return axios.get(stringConstants.INDIA_STATE_WISE, {
            headers: stringConstants.RAPID_API_INDIA_STATE_WISE,
        })
            .then(res => {
                dispatch(getIndiaGeojson(res.data));
            })
    }
}

export function loadCountryjson(country) {
    if (!country) country = ''

    return (dispatch) => {
        return axios.get(stringConstants.COUNTRY_STATE_WISE + country, {
            headers: stringConstants.RAPID_API_COUNTRY_STATE_WISE,
        })
            .then(res => {
                dispatch(getCountryjson(res.data));
            })
    }
}

export function loadIndiaDistrictjson() {
    return (dispatch) => {
        return axios.get(stringConstants.INDIA_DISTRICT_WISE, {
            headers: stringConstants.RAPID_API_INDIA_STATE_WISE,
        })
            .then(res => {
                dispatch(getIndiaDistrictjson(res.data));
            })
    }
}



/* api actions */

export function getgraphTypeAction(graphType) {
    const action = {
        type: stringConstants.GETGRAPHTYPE,
        graphType
    }
    return action
}

export function getSortTypes(sortType) {
    const action = {
        type: stringConstants.SORT_TYPES_ACTION,
        sortType
    }
    return action
}

export function getIndiaGeojson(getindiageojson) {
    const action = {
        type: stringConstants.INDIAGEOJSONACTION,
        getindiageojson
    }
    return action
}

export function getIndiaDistrictjson(getIndiaDistrictjson) {
    const action = {
        type: stringConstants.INDIA_DISTRICT_JSON_ACTION,
        getIndiaDistrictjson
    }
    return action
}


export function getCountryjson(getCountryjson) {
    const action = {
        type: stringConstants.COUNTRYJSONACTION,
        getCountryjson
    }
    return action
}



export function setSelectedState(selectedState) {
    const action = {
        type: stringConstants.SELECTEDSTATE,
        selectedState
    }
    return action
}

