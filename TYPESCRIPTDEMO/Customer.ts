import {Address} from "./Address"
interface ICustomer{
    Add();
}

class Customer implements ICustomer{

    public addressObj:Address=new Address();

    Add() {
        throw new Error("Method not implemented")
    }


    public CustomerName: string="Deepak";
    private _CustomerDesignation : string="";

    public set CustomerDesignation(value : string){
        if(value.length==0){
            throw "Customer designation is required"
        }
        this._CustomerDesignation=value;
    }
    public get CustomerDesignation(){
        return this._CustomerDesignation;
    }
    validate(){
        alert("Test");
    }
    validatereturn():boolean{
        alert("Tets");
        return true;
    }

    validatedata(intput :number):boolean{
        alert(intput);
        return true;
    }
}

class SomeOtherCustomer extends Customer{
    validate(): void {
        alert("This is a new customer");
    }
}