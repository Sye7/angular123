import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../model/test';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewTestsComponent implements OnInit {

  service:AdminService;
  constructor(service:AdminService) {
    this.service=service;

   }
  
  ngOnInit(): void {
  }
  foundTest=null;
  foundStatus=null;
  errorField=null;
  testId=null;
  findTest(form:any){
    let details=form.value;
    let testId=details.testId;

    let fetched:Observable<Test>=this.service.findTest(testId);

    fetched.subscribe((test:Test)=>{
        this.foundTest=test;
    
        this.foundStatus="found";
    },
    err=>
    {
      this.foundStatus="notfound";
      this.errorField=err
      console.log(Object.values(err));
    }
      )

  }

}
