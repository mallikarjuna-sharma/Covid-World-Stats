import { INCREMENT, GETGRAPHTYPE, SEARCHEDTEXT } from '../actions/index.jsx'
import stringConstants from '../stringConstants.jsx'


let defaultState =  {
    num: 0, graphType: "line" 
}
export default function performAction(state = defaultState , action) {
    switch (action.type) {
        case INCREMENT:
            return state

        case GETGRAPHTYPE:
            return Object.assign({}, state, {
                graphType:
                    action.graphType,
            })
        case SEARCHEDTEXT:
            return Object.assign({}, state, {
                searchedText: action.searchedText
            })
        case stringConstants.INDIAGEOJSONACTION:
                return Object.assign({}, state, {
                    getindiageojson: action.getindiageojson
                })

        default:
            return state
    }
}

