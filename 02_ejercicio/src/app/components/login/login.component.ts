import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';
import { environment } from 'src/environments/environment.develop';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario:Usuario = new Usuario();
  signupForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.signupForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // signIn(values: FormGroup) {
  signIn(values: any) {
    this.usuario.nombre = values.nombre;
    this.usuario.clave = values.clave;

    if (
      environment.login.nombre === this.usuario.nombre &&
      environment.login.clave === this.usuario.clave
    ) {
      this._router.navigate(['/bienvenido']);
    } else {
      this._router.navigate(['/error']);
    }
  }

}
