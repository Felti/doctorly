import { createAction, props } from "@ngrx/store";

export const loginAction = createAction("[Login Page] User login", props<{token : string}>());

export const logout = createAction("[Top menu] Logout", props<{token : string}>());
