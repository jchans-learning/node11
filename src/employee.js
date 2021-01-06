const Person = require('./person');

class Employee extends Person {
    constructor(id, name='noname', age=20){
        super(name='noname', age=20)
        this.employee_id = id;
    }

    toString(){
        return JSON.stringify(this.toJSON())
    }

    // 覆蓋父類別的功能
    toJSON(){
        return JSON.stringify({
            name: this.name,
            age: this.age,
            employee_id: this.employee_id
        })
    }
}

module.exports = Employee;