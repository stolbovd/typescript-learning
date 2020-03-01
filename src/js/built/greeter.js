var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.toString = function () {
        return this.fullName;
    };
    return Student;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(firstName, middleInitial, lastName, saincificLevel) {
        var _this = _super.call(this, firstName, middleInitial, lastName) || this;
        _this.saincificLevel = saincificLevel;
        _this.saincificLevel = saincificLevel;
        _this.fullName = firstName + " " + middleInitial + " " + lastName;
        return _this;
    }
    Professor.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " " + this.saincificLevel;
    };
    return Professor;
}(Student));
function greeter(person) {
    return "Hello, " + person;
}
function onDocumentLoad() {
    //	let user = {firstName: "Jane", lastName: "User", birthday: "07.05.2000"};
    var user = new Student("Jane", "M.", "User");
    var users = [user, new Professor("Catherine", "A.", "Stolbova", "PhD")];
    var temp = "";
    users.forEach(function (user) {
        temp += greeter(user) + "\n";
    });
    document.body.textContent = temp;
}
