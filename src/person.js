class Person {
    constructor(name='noname', age=20){
        this.name = name;
        this.age = age;    
    }

    // 老師自己定義的
    toJSON(){
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }

    aaa = ()=>{
        return 123;
    }
}

module.exports = Person;