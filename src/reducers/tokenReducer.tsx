export interface tokenState {
    token: any
}

const initialState = {
    token: null,
}

type Action = { type: 'SET_TOKEN'; payload: string }

export const tokenReducer = (
    state: tokenState = initialState,
    action: Action
) => {
    switch (action.type) {
        case 'SET_TOKEN': {
            console.log('here')
            return { ...state, token: [action.payload] }
        }
        default:
            return state
    }
}
