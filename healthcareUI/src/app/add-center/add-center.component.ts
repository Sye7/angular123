import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DiagnosticCenter } from '../model/diagnosticCenter';
import { AdminService } from '../service/admin.service';
import { Test } from '../model/test';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddCenterComponent implements OnInit {

  

  service:AdminService;

  constructor(service:AdminService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
addedCenter:DiagnosticCenter=null;

errorField=null;
addCenter(form:any)
{
  let details=form.value;
  let name=details.name;
  let id=details.id;
  let number=details.number;
  let location=details.location;
  let test:Test[]=details.listOfTest;
  this.addedCenter =new DiagnosticCenter(id,name,number,location,test);
  
  let result=this.service.addCenter(this.addedCenter)
  result.subscribe((center:DiagnosticCenter)=>
  {
this.addedCenter=center;
  },
  err=>{
    this.errorField=err;
    console.log("err="+Object.values(this.errorField));
    
    } );
    form.reset();
    this.errorField=null;

}


}
