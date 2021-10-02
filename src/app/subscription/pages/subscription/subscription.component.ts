import { Component, OnInit } from '@angular/core';
import {SubscriptionService} from "../../services/subscription.service";
import {Plan} from "../../model/plan";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans!: Plan[];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.getPlans();
  }

  getPlans() {
    this.subscriptionService.getPlans().subscribe((response: any) => {
      this.plans = response;
    });
  }


}
