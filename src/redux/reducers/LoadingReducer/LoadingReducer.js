import * as config from './../../types/LoadingTypes'; 

const initialState = {
    isLoading: false
}

export   const LoadingReducer =  (state = initialState, action) => {
    switch (action.type) {
        case config.DISPLAY_LOADING:
            state.isLoading = true;
            return { ...state }
        case config.HIDE_LOADING:
            state.isLoading = false;
            return { ...state }

        default:
            return state
    }
}
