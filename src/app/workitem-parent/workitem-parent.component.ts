import { Component, OnInit } from '@angular/core';
import { WorkitemComponent } from '../workitem/workitem.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workitem-parent',
  templateUrl: './workitem-parent.component.html',
  styleUrls: ['./workitem-parent.component.css'],
})


export class WorkitemParentComponent implements OnInit {
  constructor(private http: HttpClient) { }
  workItems: WorkItem[] = [];

  ngOnInit(): void {
    this.http.get<WorkItem[]>('assets/workitems.json').subscribe(data => {
      this.workItems = data;
    });
  }
}

interface WorkItem {
  companyName: string;
  dateRange: string;
  experienceList: string[];
}  