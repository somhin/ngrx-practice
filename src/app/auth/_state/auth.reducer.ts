import { createReducer, on } from "@ngrx/store";
import { LoginSuccess } from "./auth.action";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState, on(LoginSuccess, (state, action) => {
    return {
        ...state,
        user: action.user
    }
}))

export function AuthReducer(state, action) {
    return _authReducer(state, action);
}