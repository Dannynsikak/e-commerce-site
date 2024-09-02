import { Dispatch } from "redux";

// Define a type for your Thunk Action
export type ThunkAction<R> = (dispatch: Dispatch, getState: () => any) => R;
