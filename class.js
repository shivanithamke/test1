class employee{
    constructor(givenname,givenage,givenexp,givenfood){
    this.name=givenname
    this.age=givenage 
    this.exp=givenexp;
    this.food=givenfood
    }
    fun1()
    {
        return `hi my name is  ${this.name}`;
       // console.log(`hi my name is ${this.name}`)
    }
    joinyear(exp)
    {
        return 2020 -this.exp;

    }
    static add(a,b)
    {

return a+b
    }
}
const shivani=new employee('shivani',23,2,'pavbhaji');
console.log(shivani);
console.log(shivani.fun1())
console.log(shivani.joinyear());
console.log(employee.add(2,5));