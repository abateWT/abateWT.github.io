interface IUniversity {
    name:string;
    dept:string;
    graduation(year:number):void;
    }
class University implements IUniversity{
    name:string;
    dept:string;
 constructor(name,dept){
          this.name = name;
          this.dept = dept;
 }
  graduation(year):any {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
let miu = new University("MBA", "MSD");
miu.graduation(2022);
