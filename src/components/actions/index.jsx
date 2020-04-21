import stringConstants from '../stringConstants.jsx'
import axios from 'axios'

export const INCREMENT = 'increment'
export const GETGRAPHTYPE = 'GETGRAPHTYPE'
export const SEARCHEDTEXT = "SEARCHEDTEXT"


export  function loadIndiaGeojson() {
    return (dispatch) => {
        return axios.get(stringConstants.INDIA_STATE_WISE, {
            headers: stringConstants.RAPID_API_HEADER  ,
        })
        .then(res => {
            dispatch(getIndiaGeojson(res.data));
        })
    }
}

export function incrementFunction(num) {
    const action = {
        type: INCREMENT,
        num
    }
    return action
}

export function getgraphTypeAction(graphType) {
    const action = {
        type: GETGRAPHTYPE,
        graphType
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