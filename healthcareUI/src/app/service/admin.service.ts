import {HttpClient} from '@angular/common/http';
import {DiagnosticCenter} from '../model/diagnosticcenter';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs'
import { Test } from '../model/test';
@Injectable()
export class AdminService{
  client:  HttpClient
  constructor(client:HttpClient)
  {
      this.client=client;
  }

  baseUserUrl="http://localhost:8087/centers";
  baseTestUrl="http://localhost:8087/test";



  addCenter(center:DiagnosticCenter):Observable<DiagnosticCenter>{
    let url=this.baseUserUrl+"/add";
    let result:Observable<DiagnosticCenter>= this.client.post<DiagnosticCenter>(url,center);
    return result;
    }
    
    fetchAllCenters():Observable<DiagnosticCenter[]>
    {
      let url=this.baseUserUrl;
      let observable:Observable<DiagnosticCenter[]> =this.client.get<DiagnosticCenter[]>(url);
      return observable;
    }

    findCenterByCenterId(centerId:number):Observable<DiagnosticCenter>{
      let url=this.baseUserUrl+'/get/'+centerId
      let observable:Observable<DiagnosticCenter> =this.client.get<DiagnosticCenter>(url);
      return observable;  
    }
  
  
    deleteCenter(centerId:number){
      let url=this.baseUserUrl+"/delete/"+centerId;
      let result:Observable<boolean>=this.client.delete<boolean>(url);
      return result;
    }

    modifyCenter(center:DiagnosticCenter,centerId:number):Observable<DiagnosticCenter>{
      let url=this.baseUserUrl+"/modify/"+centerId;
     // console.log("userId"+user.userId+"username"+user.userName+"usertype"+user.userType+"userphone"+user.userPhone+"useremail:"+user.email);
      let result:Observable<DiagnosticCenter>= this.client.put<DiagnosticCenter>(url,center);
      return result;
      }

      addTest(test:Test):Observable<Test>{
        let url=this.baseTestUrl+"/addTest";
        let result:Observable<Test>=this.client.post<Test>(url,test);
        return result;

      }

      findTest(testId:number):Observable<Test>{
        let url=this.baseTestUrl+"/get/"+testId;
        let result:Observable<Test>=this.client.get<Test>(url);
        return result;
      }

      deleteTest(testId:number){
        let url=this.baseTestUrl+"/delete/"+testId;
        let result:Observable<boolean>=this.client.delete<boolean>(url);
        return result;
      }

}