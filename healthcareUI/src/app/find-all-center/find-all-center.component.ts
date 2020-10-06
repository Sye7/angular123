import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DiagnosticCenter } from '../model/diagnosticCenter';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-all-center',
  templateUrl: './find-all-center.component.html',
  styleUrls: ['./find-all-center.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FindAllCenterComponent implements OnInit {

  centers:DiagnosticCenter[]=[];
  ngOnInit(): void {
  }
 

service:AdminService
constructor(service:AdminService,private router:Router) {
  this.service=service;
 let observable:Observable<DiagnosticCenter[]>=this.service.fetchAllCenters();
 observable.subscribe(
   center=>{
     this.centers=center;
     console.log("inside success callback ="+this.centers.length)
   },
   err=>
   { 
     console.log(err)
   }
 );
}




centerId=null;
centerName=null;
  remove(centerId:String)
{this.centerId=centerId;
  this.router.navigate(['../remove-center'],{queryParams:{centerId:this.centerId}});
}



update(centerId:String,centerName:String)
{   this.centerId=centerId;
  this.centerName=centerName;
  this.router.navigate(['../update-center'],{queryParams:{centerId:this.centerId,centerName:this.centerName}})
}
}