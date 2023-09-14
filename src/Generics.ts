const score : Array<number>  =  [];
const names : Array<string> = [];


function identity1(val: boolean | number): boolean | number{
    return val
}

function identity2(val: any):any {
    return val
}

function identity3<Type>(val: Type): Type{
    return val
}

//identity3(1)

function identity4<T>(val: T):  T{
    return val
}

interface Bootle{
    brand : string,
    type : number,
}

identity4<Bootle>({
    brand: "",
    type: 0
})


function getsearchproducts<T>(products: T[]):T{
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

//generic arrow method syntax
const getMoreSearchProducts = <T,>(products: T[]): T =>{
    //do some database operations
    const myIndex = 7
    return products[myIndex] 
}

interface database {
    connections: string,
    username : string,
    password : string,
}


function getSearchbroad <T,U extends database >(val1:T, val2:U):object{
    return{
        val1,
        val2,
    }
}

//  
//classes in generics

interface quiz{
    name :string,
    type :string,
}

interface Question{
    name:string,
    author:string,
    subject:string,

}
//generic classes or function
class Sellable<T>{
    public cart: T[] = [];

    addtocart(product:T){
        this.cart.push (product);
    }
} 