import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from "../../services/subscription.service";
import {Plan} from "../../model/plan";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../my-profile/services/client.service";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans!: Plan[];
  myPlanId!: string;
  myId!: string;

  constructor(
    private subscriptionService: SubscriptionService,
    private clientService: ClientService,
    private route: ActivatedRoute
  )  { }

  ngOnInit(): void {
    this.retrievePlans();
    this.route.data.subscribe(response => {
      this.myPlanId = response.planId;
      this.myId = response.id;
    });
  }


  async retrievePlans() {
    await this.subscriptionService.getPlans().subscribe((response: any) => {
      this.plans = response;
    });
  }

  deletePlanStatusChange(ev: any) {
    this.myPlanId = ev;
  }

  createPlanStatusChange(ev: any) {
    this.myPlanId = ev;
  }



}
