import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Client} from "../my-profile/model/client";
import {ClientService} from "../my-profile/services/client.service";
import {TokenStorageService} from "../api/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-navigation',
  templateUrl: './client-navigation.component.html',
  styleUrls: ['./client-navigation.component.css']
})
export class ClientNavigationComponent implements OnInit {
  title = 'Clients-navigation';
  currentClientId!: number;
  clientData!: Client;
  private roles: string[] | undefined;
  isLoggedIn = false;
  username: string | undefined;

  menuOptions = [
    { name: "Search auto", url: 'search' },
    { name: "Reservations", url: 'reservations' },
    { name: "My cars", url: 'my-car' },
    { name: "My Favourites", url: 'favourites' },
    { name: "Subscription", url: 'subscription' },
    { name: "My Profile", url: 'profile'}
  ];

  constructor(private clientService: ClientService,
              private tokenStorageService: TokenStorageService,
              private router: Router) {
    this.clientData = {} as Client;
    this.currentClientId = JSON.parse(<string>localStorage.getItem("clientId"));
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.getClient();
    }

  }

  getClient() {
    this.clientService.getById(this.currentClientId).subscribe((response: any) => {
      this.clientData = response;
    });
  }

  signOut() {
    this.tokenStorageService.signOut();
    localStorage.removeItem('clientId');
    this.router.navigateByUrl("/login");
  }
}


