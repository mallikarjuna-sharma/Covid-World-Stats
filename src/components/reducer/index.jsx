import stringConstants from '../stringConstants.jsx'

let defaultState = {
    num: 0,
    graphType: "line",
    sortType: 'india_state',
    getIndiaDistrictjson: stringConstants.INDIA_DIST,
    getindiageojson: stringConstants.INDIA_STATE,
    getCountryjson: stringConstants.US_STATE,
    selectedState: false,
    getWorldStats: false,
    xAxisLabel:'state',
    yAxisLabel:'confirmed'
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
        case stringConstants.SELECTEDSTATE:
            return Object.assign({}, state, {
                selectedState: action.selectedState
            })
        case stringConstants.WORLD_COUNTRY_STATS:
            return Object.assign({}, state, {
                getWorldStats: action.getWorldStats
            })
        case stringConstants.X_LABEL:
            return Object.assign({}, state, {
                xAxisLabel: action.xAxisLabel
            })
        case stringConstants.Y_LABEL:
            return Object.assign({}, state, {
                yAxisLabel: action.yAxisLabel
            })
        default:
            return state
    }
}

