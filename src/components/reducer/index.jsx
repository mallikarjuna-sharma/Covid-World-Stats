import stringConstants from '../stringConstants.jsx'


let defaultState = {
    num: 0, graphType: "line", sortType: 'india_state'
}
export default function performAction(state = defaultState, action) {
    switch (action.type) {
        case stringConstants.GETGRAPHTYPE:
            return Object.assign({}, state, {
                graphType:
                    action.graphType,
            })
        case stringConstants.SORT_TYPES_ACTION:
            return Object.assign({}, state, {
                sortType:
                    action.sortType,
            })
        case stringConstants.INDIAGEOJSONACTION:
            return Object.assign({}, state, {
                getindiageojson: action.getindiageojson
            })
        case stringConstants.COUNTRYJSONACTION:
            return Object.assign({}, state, {
                getCountryjson: action.getCountryjson
            })
        case stringConstants.INDIA_DISTRICT_JSON_ACTION:
            return Object.assign({}, state, {
                getIndiaDistrictjson: action.getIndiaDistrictjson
            })
        default:
            return state
    }
}

