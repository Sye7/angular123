import { Test } from './test';

export class DiagnosticCenter{
    centerId:number;
    centerName:string;
    contactNumber:number;
    centerLocation:string;
    listOfTest:Test[];

constructor(centerId:number,centerName:string,contactNumber:number,centerLocation:string,listOfTest:Test[])
{
    this.centerId=centerId;
    this.centerName=centerName;
    this.contactNumber=contactNumber;
    this.centerLocation=centerLocation;
    this.listOfTest=listOfTest;
}
}