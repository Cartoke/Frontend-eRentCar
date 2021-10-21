import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../my-profile/services/client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  wrongEmailOrPassword: Boolean = false;
  showPassword: Boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private clientService: ClientService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.clientService.getByEmailAndPassword(email, password).subscribe((response: any) => {
      if (response.length > 0) {
        localStorage.setItem("clientId", response[0].id);
        this.router.navigateByUrl("/client/1");
      }
      else {
        this.wrongEmailOrPassword = true;
      }
    });
  }

  submit() {
    if (this.form.valid) {
      this.login(this.form.value.email, this.form.value.password);
    }
  }
}
