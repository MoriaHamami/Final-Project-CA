export const SET_WAPS = 'SET_WAPS'
export const REMOVE_WAP = 'REMOVE_WAP'
export const ADD_WAP = 'ADD_WAP'
export const UPDATE_WAP = 'UPDATE_WAP'
export const SET_WAP = 'SET_WAP'
export const SET_CMP_ID = 'SET_CMP_ID'
export const SET_ELEMENT = 'SET_ELEMENT'
export const SET_SAVED_WAPS = 'SET_SAVED_WAPS'
export const REMOVE_SAVED_WAP = 'REMOVE_SAVED_WAP'
export const SET_DISPLAY_SIZE = 'SET_DISPLAY_SIZE'

const initialState = {
    waps: [],
    wap: null,
    selectedCmpId: null,
    selectedElement: null,
    displaySize: '100%',
    // savedWaps: null,
}

export function wapReducer(state = initialState, action) {
    let waps
    switch (action.type) {
        case SET_WAPS:
            return { ...state, waps: action.waps }
        case REMOVE_WAP:
            const lastRemovedWap = state.waps.find(wap => wap._id === action.wapId)
            waps = state.waps.filter(wap => wap._id !== action.wapId)
            return { ...state, waps, lastRemovedWap }
        case ADD_WAP:
            return { ...state, waps: [...state.waps, action.wap] }
        case UPDATE_WAP:
            waps = state.waps.map(wap => (wap._id === action.wap._id) ? action.wap : wap)
            return { ...state, waps }
        case SET_WAP:
            return { ...state, wap: { ...action.wap } }
        case SET_CMP_ID:
            return { ...state, selectedCmpId: action.cmpId }
        case SET_ELEMENT:
            return { ...state, selectedElement: action.element }
        case SET_DISPLAY_SIZE:
            return { ...state, displaySize: action.displaySize }

        // case SET_SAVED_WAPS:
        //     return { ...state, savedWaps: action.savedWaps }

        // case REMOVE_SAVED_WAP:
        //     return { ...state, savedWaps: state.savedWaps.filter(wap => wap._id !== action.wapId) }

        default:
            return state
    }
}
