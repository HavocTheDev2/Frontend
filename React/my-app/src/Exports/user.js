export default class User {
    constructor(details) {
        this.name = details.name;
        this.pass = details.password;
        this.email = details.email;
        this.age = details.age;
        this.number = details.number;
        this.isEmployed = details.isEmployed;
    }

    // Format: console,log('User ' + this.name + ' has been deleted.');

    deleteUser() {
        console.log('User ' + this.name + ' has been deleted.');
    }

    changePassword(newPass) {
        this.pass = newPass;
        console.log('User ' + this.name + ' has changed his password to ' + this.pass + '.');
    }

    changeEmail(newEmail) {
        this.email = newEmail;
        console.log('User ' + this.name + ' has changed his email to ' + this.email + '.');
    }

    changeNumber(newNumber) {
        this.number = newNumber;
        console.log('User ' + this.name + ' has changed his number to ' + this.number + '.');
    }
}