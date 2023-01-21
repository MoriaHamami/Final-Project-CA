export const SET_WAP = 'SET_WAP'
export const SET_CMP_ID = 'SET_CMP_ID'
export const SET_ELEMENT = 'SET_ELEMENT'
export const SET_SAVED_WAPS = 'SET_SAVED_WAPS'
export const REMOVE_SAVED_WAP = 'REMOVE_SAVED_WAP'

const initialState = {
    wap: null,
    selectedCmpId: null,
    selectedElement: null,
    // savedWaps: null,
}

export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WAP:
            return { ...state, wap: { ...action.wap } }
        case SET_CMP_ID:
            return { ...state, selectedCmpId: action.cmpId }
        case SET_ELEMENT:
            return { ...state, selectedElement: action.element }


        // case SET_SAVED_WAPS:
        //     return { ...state, savedWaps: action.savedWaps }

        // case REMOVE_SAVED_WAP:
        //     return { ...state, savedWaps: state.savedWaps.filter(wap => wap._id !== action.wapId) }

        default:
            return state
    }
}
