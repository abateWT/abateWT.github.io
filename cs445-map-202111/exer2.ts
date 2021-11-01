interface IBankAccount {
    money:number;
    deposit(value:number):void;
}
let BA:IBankAccount = {
        money:2000,
        deposit(value:number):void {
        this.money += value;
    }
};
interface IMyself {
    name:string;
    bankAccount:any;
    hobbies:Array<string>;
}
let myself:IMyself = {
    name:"John",
    bankAccount:"bankAccount",
    hobbies:["Violin","Cooking"]
}
myself.bankAccount.deposit(3000);
console.log(myself);







