class SSCStudent{
    constructor(name,gender,age){
        console.log(name,gender,age);
        console.log("Inside SSCStudent Constructor");
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    calculateResult = ()=>{
        console.log("Calculate result");
    }

}

export default SSCStudent;