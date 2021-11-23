import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../../my-profile/services/client.service";
import {Plan} from "../../model/plan";

@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit {
  @Input() plans!: Plan[];
  @Input() myId!: number;
  @Output() planStatusChangeCreate = new EventEmitter<number>() ;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  updatePlanValueFromPlans(planId: number) {
    this.planStatusChangeCreate.emit(planId);
  }

  async addPlan(planId: any){
    await this.clientService.updatePlan(this.myId, planId).subscribe((response: any) => {
       this.updatePlanValueFromPlans(response.planId);
    });
  }

}
