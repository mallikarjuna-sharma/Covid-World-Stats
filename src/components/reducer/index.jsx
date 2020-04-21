import { INCREMENT, GETGRAPHTYPE, SEARCHEDTEXT } from '../actions/index.jsx'


export default function performAction(state = { num: 0, graphType: "line" }, action) {
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
        default:
            return state
    }
}

