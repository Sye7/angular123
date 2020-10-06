import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../model/test';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteTestComponent implements OnInit {


service:AdminService;
  constructor(service:AdminService) { 
    this.service=service;
  }
  foundStatus=null;
  errorField=null;
  ngOnInit(): void {
  }

  removeTest(form:any){
    let details=form.value;
    let testId=details.testId;
    let result:Observable<Boolean>=this.service.deleteTest(testId);
    result.subscribe(center=>{
      // this.checkDeletion=center;
       //this.foundCenter=center;
       this.foundStatus="found";
    //    this.removeLocal(this.centerId);
      },err=>{
        this.foundStatus="notfound";
        this.errorField=err
       console.log("err in deleting ="+err);
      })   
      form.reset();
    }
  
  

  
}
