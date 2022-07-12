 class employee{
    constructor(givenname,givenage,givenexp,givenfood){
    this.name=givenname
    this.age=givenage 
    this.exp=givenexp;
    this.food=givenfood
    }
  fun1()
    {
       // return 'hi my name is , ${this.name}';
        console.log(`hi my name is ${this.name}`)
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

//export default {fun1, joinyear}

function sum(a,b) {
    return a +b;
}

export default sum