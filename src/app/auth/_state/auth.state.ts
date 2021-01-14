import { User } from "src/app/_models/user.model";

export interface AuthState {
    user: User | null;
}

export const initialState: AuthState = {
    user: null
};
