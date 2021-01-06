const Person = require('./person');
class Employee extends Person {
    constructor(id, name='noname', age=20){
        super(name, age)
        this.employee_id = id;
    }

    toString(){
        return JSON.stringify(this.toJSON())
    }

    // 重新定義與父層同名的方法，會覆蓋父類別的方法
    toJSON(){
        const obj = super.toJSON();
        obj.employee_id = this.employee_id;
        return obj;
    }
}

module.exports = Employee;