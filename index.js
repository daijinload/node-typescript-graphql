var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
// let helloWorld = "Hello World";
console.log(user.name);
