import {Component, OnInit} from '@angular/core';
import {Client} from "../../model/client";
import {ClientService} from "../../services/client.service";
import {Car} from "../../../search-car/model/car";
import {CommentsService} from "../../services/comments.service";
import {Language} from "../../model/language";
import {LanguageService} from "../../services/language.service";
import {SocialService} from "../../services/social.service";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {CarsService} from "../../../search-car/services/cars.service";
import {CarBrandsService} from "../../../search-car/services/car-brands.service";
import {CarModelsService} from "../../../search-car/services/car-models.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  clientUsers !: Client;
  clientId!: number;
  userCars !: Car[];
  clientLanguages !: Language[];

  constructor(private clientService: ClientService,
              private commentsServices: CommentsService,
              private languagesServices: LanguageService,
              private socialService: SocialService,
              private carsService: CarsService,
              private carBrandsService: CarBrandsService,
              private carModelsService: CarModelsService,
              public editProfile: MatDialog
  ) {
    this.clientUsers = {} as Client;
    this.clientId = parseInt(<string>localStorage.getItem('clientId'));
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCars();
  }

  getUsers() {
    this.clientService.getById(this.clientId).subscribe((response:any) => {
      this.clientUsers = response;
    })
  }

  getCars() {
    this.carsService.getCarsByClientId(this.clientId).subscribe((response: any) => {
      this.userCars = response.content;

      for (let i = 0; i < this.userCars.length; i++) {
        this.getModelName(i, this.userCars[i].carModelId);
      }
    });
  }

  getModelName(index: number, carModelId: number): any {
    this.carModelsService.getById(carModelId).subscribe((response: any) => {
      this.userCars[index].model = response.name;
      this.getBrandName(index, response.carBrandId);
    });
  }

  getBrandName(index: number, carBrandId: number): any {
    this.carBrandsService.getById(carBrandId).subscribe((response: any) => {
      this.userCars[index].brand = response.name;
    });
  }

  editDialogClient(): void {
     this.editProfile.open(EditProfileComponent, {
       width: "500px",
       data: {
         client: this.clientUsers,
         clientId: this.clientId,
       }
     });
  }
}
