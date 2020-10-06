import { Component, OnInit } from '@angular/core';
import { Test } from '../model/test';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  service:AdminService;
  constructor(service:AdminService) {
    this.service=service;
   }
  
  ngOnInit(): void {
  }
   foundStatus=null;
  addedTest:Test=null;

errorField=null;
addTest(form:any)
{
  let details=form.value;
  let id=details.id;
  let name=details.name;
  let price=details.price;
  let centerId=details.centerId;
  this.addedTest =new Test(id,name,price,centerId);
  
  let result=this.service.addTest(this.addedTest);
  result.subscribe((test:Test)=>
  {
    this.foundStatus="found"
this.addedTest=test;
  },
  err=>{
    this.errorField=err;
    console.log("err="+Object.values(this.errorField));
    
    } );
    form.reset();
    this.errorField=null;

}


}



