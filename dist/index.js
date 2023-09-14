"use strict";
//acsses modfires
//classes
// class User{
//     public email: string;
//     name: string;
//     //only accsessible here
//     private city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// const hommie = new User('hommie@gmail.com','addin ross');
//hommie.city = 'rome';
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "jahun";
    }
    //private methods 
    deleteToken() {
        console.log("deleteToken");
    }
    ///getters
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this.courseCount;
    }
    //setter    
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("courseCount must be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
//inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFmarked = false;
    }
    changedCount() {
        this._courseCount = 6;
    }
}
;
const hommie = new User('hommie@gmail.com', 'addin ross', '665');
