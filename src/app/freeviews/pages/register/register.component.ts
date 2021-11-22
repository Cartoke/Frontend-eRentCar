import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../my-profile/services/client.service";
import {MatStepper} from "@angular/material/stepper";
import { v4 as uuid } from 'uuid';
import {Client} from "../../../my-profile/model/client";
import {AuthService} from "../../../api/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPassword: Boolean = false;
  emailAndPasswordForm: FormGroup;
  personalInformationForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService,
              private authService: AuthService
  ) {
    this.emailAndPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"), Validators.minLength(8)]]
    });

    this.personalInformationForm = this.formBuilder.group({
      names: ["", [Validators.required, Validators.maxLength(30)]],
      lastNames: ["", [Validators.required, Validators.maxLength(30)]],
      address: ["", [Validators.required, Validators.maxLength(50)]],
      cellphoneNumber: ["", [Validators.required, Validators.pattern("^(9)([0-9]){8}$")]]
    });
  }

  ngOnInit(): void {
  }

  validateEmail(stepper: MatStepper) {
    /*this.clientService.getByEmail(this.emailAndPasswordForm.value.email).subscribe((response: any) => {
      if (response.length == 0) {
        stepper.next();
      }
      else {
        alert('The email already exist');
      }
    });*/
    stepper.next();
  }

  registerClient(stepper: MatStepper) {
    /*const newClient: Client = {
      id: uuid(),
      names: this.personalInformationForm.value.names,
      lastNames: this.personalInformationForm.value.lastNames,
      address: this.personalInformationForm.value.address,
      cellphoneNumber: this.personalInformationForm.value.cellphoneNumber,
      averageResponsibility: -1,
      responseTime: -1,
      rate: -1,
      imagePath: "",
      planId: "",
      email: this.emailAndPasswordForm.value.email,
      password: this.emailAndPasswordForm.value.password
    }

    this.authService.register({
      username: newClient.email,
      email: newClient.email,
      password: newClient.password,
      roles: ["ROLE_USER"],
    }).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        stepper.next();
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );

    /*
    this.clientService.create(newClient).subscribe((response: any) => {
      stepper.next();
    });*/
  }
}
