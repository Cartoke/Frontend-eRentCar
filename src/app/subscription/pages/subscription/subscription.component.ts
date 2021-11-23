import {Component, OnInit} from '@angular/core';
import {PlansService} from "../../services/plans.service";
import {Plan} from "../../model/plan";
import {ClientService} from "../../../my-profile/services/client.service";
import {Client} from "../../../my-profile/model/client";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans!: Plan[];
  clientData!: Client;

  constructor(
    private plansService: PlansService,
    private clientService: ClientService,
  )  {
  }

  ngOnInit(): void {
    this.retrievePlans();
    this.retrieveClient();
  }

  retrieveClient() {
    const clientId = parseInt(<string>localStorage.getItem("clientId"));

    this.clientService.getById(clientId).subscribe((response: any) => {
      this.clientData = response;
    })
  }

  retrievePlans() {
    this.plansService.getAll().subscribe((response: any) => {
      this.plans = response.content;
    });
  }

  deletePlanStatusChange() {
    this.clientData.planId = Number.NaN;
  }

  createPlanStatusChange(ev: number) {
    this.clientData.planId = ev;
  }
}
