
export const SET_WAP = 'SET_WAP'
export const UPDATE_WAP = 'UPDATE_WAP'


const initialState = {
    wap: null,
}

export function wapReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case SET_WAP:
            newState = { ...state, wap: { ...action.wap } }
            break
        default:
        case UPDATE_WAP:
            return { ...state, wap: { ...action.wap }}
    }
    return newState
}
