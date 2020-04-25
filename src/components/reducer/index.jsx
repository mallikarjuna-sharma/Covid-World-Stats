import stringConstants from '../stringConstants.jsx'

let defaultState = {
    num: 0,
    graphType: "line",
    sortType: 'india_state',
    getIndiaDistrictjson: stringConstants.INDIA_DIST,
    getindiageojson: stringConstants.INDIA_STATE,
    getCountryjson: stringConstants.US_STATE,
    selectedState: 'Maharashtra',
    getWorldStats: stringConstants.WORLD_STATS,
    xAxisLabel: 'state',
    yAxisLabel: 'confirmed',
    graphStart: 0,
    tableData: [],
    selectedCountry: "USA"
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
        case stringConstants.GRAPH_SLICE:
            return Object.assign({}, state, {
                graphStart: action.graphStart
            })
        case stringConstants.TABLE_DATA:
            return Object.assign({}, state, {
                tableData: action.tableData
            })
        case stringConstants.SELECTEDCOUNTRY:
            return Object.assign({}, state, {
                selectedCountry: action.selectedCountry
            })
        default:
            return state
    }
}

