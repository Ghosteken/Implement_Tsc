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
    protected _courseCount: number = 1;
    readonly city: string = "jahun";
    constructor(
        public email: string, 
        private name: string,
        private userId: string,
        ) {
        

    }
    //private methods 
        private deleteToken(){
            console.log("deleteToken");
        }
    ///getters
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    
     get courseCount() : number {
        return this.courseCount
    }
    //setter    
    set courseCount(courseNum) {
        if (courseNum <= 1){
            throw new Error ("courseCount must be greater than 1")
        }
        this._courseCount = courseNum
    }
    

}
//inheritance
class SubUser extends User {
    isFmarked: boolean = false
    changedCount(){
        this._courseCount = 6
    }
};
const hommie = new User('hommie@gmail.com', 'addin ross','665'); 