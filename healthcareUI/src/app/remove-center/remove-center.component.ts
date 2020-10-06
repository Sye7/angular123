import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DiagnosticCenter } from '../model/diagnosticCenter';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remove-center',
  templateUrl: './remove-center.component.html',
  styleUrls: ['./remove-center.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveCenterComponent implements OnInit {
    data=null;
    centerId=null;
    service:AdminService;
    centers:DiagnosticCenter[]=[];
    ngOnInit(): void {
    }
    foundCenter=null;
  foundStatus=null;
  errorField=null;
    
      constructor(
        private activatedroute:ActivatedRoute,service:AdminService)
        {   
          this.service=service;
          this.activatedroute.queryParams.subscribe
          (data=>{
            this.data=data;
            this.centerId=Object.values(data);
            console.log(this.centerId);
            }) 
    
          let observable:Observable<DiagnosticCenter[]>=this.service.fetchAllCenters();
        observable.subscribe(
          center=>{
            this.centers=center
            console.log(this.centers);
          },
          err=>console.log(err)
          );
    
            
          }
          
          checkDeletion=null;
            remove(form:any)
            {
              let details=form.value;
              let cId=details.centerId;
              console.log(cId);
    
              let result:Observable<boolean>=this.service.deleteCenter(cId);
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
    
      