import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {
  data=[];

  id:any;
  description!: string;
  message!: string;

  constructor( private route:ActivatedRoute  ) {
    this.description = this.route.snapshot.params.description;
    this.message = this.route.snapshot.params.message;
    this.clientId.getData().subscribe(data => {
      console.warn(data)
      this.data= data
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  getDescription(): void {
    return this.description;
  }
}
