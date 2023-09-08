import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  loading = false;
  sent = false;
  // minLengthPassword = environment.minLengthPassword;

  // constructor(private _auth: AuthService, private _toast: ToastrService) {}

  ngOnInit(): void {
    // this.signUpForm = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(environment.patternEmail),
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(this.minLengthPassword + 1),
    //   ]),
    //   passwordAgain: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(this.minLengthPassword + 1),
    //   ]),
    // });
  }

  signUp(): void {
    console.log(this.signUpForm.value);
    this.sent = true;

    // if (this.signUpForm.valid) {
    //   if (this.invalidPasswords()) {
    //     this._toast.error('Las contraseñas no son iguales', 'Error');
    //   } else {
    //     const user = new User(
    //       this.signUpForm.get('email')?.value,
    //       this.signUpForm.get('password')?.value
    //     );
    //     this.loading = true;
    //     this._auth
    //       .signUp(user.Email, user.Password)
    //       .then(() => {
    //         this._toast.success('El usuario se registro', 'Exito');
    //       })
    //       .catch((error) => {
    //         switch (error.code) {
    //           case 'auth/network-request-failed':
    //             this._toast.warning(
    //               'No tiene conexión a internet',
    //               'Advertencia'
    //             );
    //             break;
    //           default:
    //             this._toast.error('Llamar al administrador', 'Error');
    //             break;
    //         }
    //         console.log(error.code);
    //       })
    //       .finally(() => {
    //         this.signUpForm.reset();
    //         this.loading = false;
    //         this.sent = false;
    //       });
    //   }
    // }
  }

  // errorsPassword() {
  //   return this.sent && this.signUpForm.get('password')?.errors;
  // }

  // errorsPasswordAgain() {
  //   return this.sent && this.signUpForm.get('passwordAgain')?.errors;
  // }

  // errorsEmail() {
  //   return this.sent && this.signUpForm.get('email')?.errors;
  // }

  // invalidPasswords() {
  //   return (
  //     this.sent &&
  //     this.signUpForm.get('password')?.value !==
  //       this.signUpForm.get('passwordAgain')?.value
  //   );
  // }
}
