import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../../my-profile/services/client.service";
import {PlansService} from "../../services/plans.service";
import {Plan} from "../../model/plan";

@Component({
  selector: 'app-card-my-subscription',
  templateUrl: './card-my-subscription.component.html',
  styleUrls: ['./card-my-subscription.component.css']
})
export class CardMySubscriptionComponent implements OnInit {
  @Input() myId!: number;
  @Input() myPlanId!: number;
  @Output() planStatusChangeDelete = new EventEmitter<void>() ;
  plan!: Plan;

  constructor(
    private clientService: ClientService,
    private plansService: PlansService
  ) { }

  ngOnInit(): void {
    this.retrieveMyPlan(this.myPlanId);
  }

  deletePlan(){
    this.clientService.updatePlan(this.myId, 0).subscribe((response: any) => {
      this.planStatusChangeDelete.emit();
    })
  }

  retrieveMyPlan(id: any) {
    this.plansService.getById(id).subscribe((response: any) => {
      this.plan = response;
    });
  }

}
