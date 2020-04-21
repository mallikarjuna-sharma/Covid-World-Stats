
export const INCREMENT = 'increment'
export const GETGRAPHTYPE = 'GETGRAPHTYPE'
export const SEARCHEDTEXT = "SEARCHEDTEXT"

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

export function getSearchedText(searchedText) {
    const action = {
        type: SEARCHEDTEXT,
        searchedText
    }
    return action
}