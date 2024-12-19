import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { tap } from 'rxjs';
import { JwtToken } from '../../../shared/models/jwt.token';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInForm!: FormGroup;
  buttonDisabled: Boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router :Router) {
    this.signInForm = this.fb.group({
      login: ["admin", [Validators.required]],
      password: ["admin", [Validators.required]]
    })
  }


  signIn(): void {
    const credentials = this.signInForm.value;
    const login = credentials.login;
    const password = credentials.password
    if (login && password) {
      this.buttonDisabled = true;

      this.authService.signIn(login, password).pipe(
        tap((token : string)  => {
          console.log("called : ",token)
          this.router.navigateByUrl('/home')
        } 
        )
      ).subscribe({
        
        next : response  => console.log("response : ", response),
        error : error => console.log("error : ", error)
        
     })
        //(data: JwtToken) => {
          //if (data && data.token) {

           // console.log("here ss");

            //this.authService.setTokenData(data);

            /*  this.userService.getByLogin(this.login.toLowerCase()).subscribe(
               (res: CustomResponse<UserDTO>) => {
                 if (
                   res &&
                   res.data &&
                   res.data.privileges &&
                   res.data.privileges.length > 0 &&
                   res.data.roles &&
                   res.data.roles.length > 0
                 ) {
                   this.authService.setUserData(res.data);
                   setTimeout(
                     () =>
                       this.router.navigate(['/dashboard'], {
                         replaceUrl: true,
                       }),
                     1000
                   );
                 } else {
                   this.buttonDisabled = false;
                   this.authService.resetUserState();
                   this.router.navigate(['/auth/se-connecter'], {
                     replaceUrl: true,
                   });
 
                   this.messageToastService.displayToast(
                     "Vous n'êtes pas autorisé à vous connecter à la plateforme !",
                     ToastSeverity.ERROR,
                     ToastSummary.ERROR
                   );
                 }
               },
               (error) => {
                 this.buttonDisabled = false;
                 this.messageToastService.displayToast(
                   'Les données de cet utilisateur ne peuvent pas être récupérées.',
                   ToastSeverity.ERROR,
                   ToastSummary.ERROR
                 );
               }
             ); */
         // }
       // }
      //);
    }
  }
}
