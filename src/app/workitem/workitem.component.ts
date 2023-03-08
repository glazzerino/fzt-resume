import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent {
  @Input() companyName: string = "";
  @Input() dateRange: string = "";
  @Input() experienceList: string[] = [];
}
