import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { AuthActions } from "../action-types";

@Injectable()
export class AuthEffects {
    login$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthActions.loginAction),
            tap(action => {
              localStorage.setItem('token', JSON.stringify(action.token));
            })
          ),
        { dispatch: false } // No action is dispatched from this effect
      );

   
    
      constructor(private actions$: Actions) {
        this.login$.subscribe();
      }  
      
}