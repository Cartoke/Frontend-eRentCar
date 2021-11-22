import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../my-profile/services/client.service";
import {AuthService} from "../../../api/auth.service";
import {TokenStorageService} from "../../../api/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  wrongEmailOrPassword: Boolean = false;
  showPassword: Boolean = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private clientService: ClientService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
  ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
  }


  submit(): void {
    if (this.form.valid) {
      console.log(this.form.value.email)
      console.log(this.form.value.password);

      this.authService.login({email: this.form.value.email, password: this.form.value.password}).subscribe(
        data => {
          this.tokenStorageService.saveToken(data.resource.token);
          this.tokenStorageService.saveUser(data.resource);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorageService.getUser().roles;
          this.router.navigateByUrl("/client/search");
        },
        error => {
          this.errorMessage = error.error.errorMessage;
          this.isLoginFailed = true;
        }
      );
    }
  }
}
