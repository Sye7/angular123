import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { DiagnosticCenter } from '../model/diagnosticCenter';
import { Test } from '../model/test';

@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateCenterComponent implements OnInit {

  data=null;
  center=null;
  centerId=null;
  centerName=null;
  contactNumber=null;
  centerLocation=null;
service:AdminService;

  constructor(private activatedroute:ActivatedRoute,service:AdminService) {
 this.service=service;
  this.activatedroute.queryParams.subscribe(data=>{
  this.data=data;
  this.center=Object.values(data);
  this.centerId=this.center[0];
  this.centerName=this.center[1];
  this.contactNumber=this.center[2];
  this.centerLocation=this.center[3];
  }) 
  }
modifiedCenter=null;
errorField=null;
  ngOnInit(): void {

  }

update(form:any)
{ 
  let details=form.value;
  let centerId=details.id;
  let centerName=details.name;
  let contactNumber=details.number;
  let centerLocation=details.location;
  let test:Test[];
  let center:DiagnosticCenter=new DiagnosticCenter(centerId,centerName,contactNumber,centerLocation,test)
  let result=this.service.modifyCenter(center,center.centerId) // adding to the store

    result.subscribe(center=>
      {
      this.modifiedCenter="modified";
      this.errorField=null;

    },
    err=>{
      this.errorField=err;
      
    console.log("err="+err);
    } );
    
    this.errorField=null;

}

} 