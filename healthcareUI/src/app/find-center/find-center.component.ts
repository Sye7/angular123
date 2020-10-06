import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Observable } from 'rxjs';
import { DiagnosticCenter } from '../model/diagnosticCenter';
import { Test } from '../model/test';

@Component({
  selector: 'app-find-center',
  templateUrl: './find-center.component.html',
  styleUrls: ['./find-center.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FindCenterComponent implements OnInit {


  service:AdminService;

  constructor(service:AdminService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  tests=null;
  foundCenter=null;
  foundStatus=null;
  errorField=null;
findCenter(form:any)
{
  let details=form.value;
  let centerId=details.centerId;
  let fetched:Observable<DiagnosticCenter>=this.service.findCenterByCenterId(centerId);

  fetched.subscribe(
    center=>{
      this.foundCenter=center;
      this.tests=this.foundCenter.listOfTests;
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



