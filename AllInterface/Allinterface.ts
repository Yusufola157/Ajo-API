export interface AdminData{
    name:string,
    email:string,
    password:string,
    Totalbalance:number,
    phoneNumber:number,
    Message:{}[],
    accountNumber:number,
    wallet:{}[] | any,
    history:{}[],
    backToSchool:{}[],
    isAdmin:boolean,
}
export interface UserData{
    name:string,
    email:string,
    username:string,
    password:string,
    amount:number,
    phoneNumber:number,
    Target:number,
    Message:{}[],
    accountNumber:number,
    verified:boolean,
    wallet:{}[] | any,
    history:{}[],
    backToSchool:{}[],
    isAdmin:boolean,
    purpose : string,
}
export interface IBackToSchool{
    balance:number,
    credit:number,
    debit:number,
    purpose:string,
    Target:number,
}
export interface IWalletData{
    balance:number,
    credit:number,
    debit:number
}
export interface IHistory{
message:string,
transactionRefrence:string,
Date:string,
description:string,
}