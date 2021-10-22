import { Component, OnInit } from '@angular/core';
import {Client} from "../my-profile/model/client";
import {ClientService} from "../my-profile/services/client.service";

@Component({
  selector: 'app-client-navigation',
  templateUrl: './client-navigation.component.html',
  styleUrls: ['./client-navigation.component.css']
})
export class ClientNavigationComponent implements OnInit {
  title = 'Clients-navigation';
  currentClientId!: string | null;
  clientData!: Client;

  menuOptions = [
    { name: "Search auto", url: 'search' },
    { name: "Reservations", url: 'reservations' },
    { name: "My cars", url: 'my-car' },
    { name: "Rentals", url: 'rentals' },
    { name: "My Favourites", url: 'favourites' },
    { name: "Subscription", url: 'subscription' },
    { name: "My Profile", url: 'profile'}
  ];

  constructor(private clientService: ClientService) {
    this.clientData = {} as Client;
    this.currentClientId = localStorage.getItem("clientId");
  }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientService.getById(this.currentClientId).subscribe((response: any) => {
      this.clientData = response;
    });
  }

  signOut() {
    localStorage.removeItem("clientId");
  }
}


