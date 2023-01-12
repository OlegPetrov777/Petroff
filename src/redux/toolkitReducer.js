import {createReducer} from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit";

const initialState = {
    darkTheme: false
}

export const changeTheme = createAction('CHANGE_THEME')

export default createReducer(initialState, {
    [changeTheme]: function (state) {
        state.darkTheme = !state.darkTheme
    }
})