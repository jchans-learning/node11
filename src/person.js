class Person {
    constructor(name='noname', age=20){
        this.name = name;
        this.age = age;    
        this.bbb = 'abc';
    }

    // toJSON() ，老師自己定義的

    // 回傳 JSON 
    toJSON(){
        return {
            name: this.name,
            age: this.age,
        }
    }

    // 回傳成為把 JSON 轉為字串
    //
    // toJSON(){
    //     return JSON.stringify({
    //         name: this.name,
    //         age: this.age,
    //     })
    // }

    aaa = ()=>{
        return 123;
    }
}

module.exports = Person;