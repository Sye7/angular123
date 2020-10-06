export class CenterDto{
    centerId:number;
    centerName:string;
    contactNumber:number;
    centerLocation:string;

constructor(centerId:number,centerName:string,contactNumber:number,centerLocation:string)
{
    this.centerId=centerId;
    this.centerName=centerName;
    this.contactNumber=contactNumber;
    this.centerLocation=centerLocation;
}
}