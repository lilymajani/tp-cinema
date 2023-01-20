import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user.model";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      birthdate: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  register() {
    const user = this.createUser()
    console.log('user : ', user)
    this.authService.register(user)
      .subscribe(user => {
        this.router.navigate([''])
      });
  }

  private createUser(): User {
    return new User(
      this.form.get('name')?.value,
      this.form.get('firstname')?.value,
      this.form.get('birthdate')?.value,
      this.form.get('email')?.value,
      this.form.get('password')?.value,
      'user',
    )

  }
}
