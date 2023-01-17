
export const SET_WAP = 'SET_WAP'


const initialState = {
    wap: null,
}

export function wapReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case SET_WAP:
            newState = { ...state, wap: {...action.wap} }
            break
        default:
    }
    return newState
}
