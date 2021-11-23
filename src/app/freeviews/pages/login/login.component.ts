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
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
    if(localStorage.getItem('clientId')) {
      this.router.navigateByUrl("/client/search");
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.authService.login({username: this.form.value.userName, password: this.form.value.password}).subscribe(
        data => {
          this.tokenStorageService.saveToken(data.resource.token);
          this.tokenStorageService.saveUser(data.resource);
          this.saveClientId(data.resource.id);
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

  saveClientId(userId: number) {
    this.clientService.getAll().subscribe((response: any) => {
      for (let i = 0; response.content.length; i++) {
        if (response.content[i].userId === userId) {
          localStorage.setItem("clientId", response.content[i].id);
          return;
        }
      }
    });
  }
}
