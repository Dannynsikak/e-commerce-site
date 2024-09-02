import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./authConstants";
import { Dispatch } from "@reduxjs/toolkit";

export const login =
  (email: string, passwword: string) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        email,
        passwword
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userCredentail.user,
      });
    } catch (error: any) {
      console.error("Firebase Login Error:", error.message);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  await signOut(auth);
  dispatch({ type: LOGOUT });
};
