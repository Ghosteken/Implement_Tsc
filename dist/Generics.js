"use strict";
const score = [];
const names = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
//identity3(1)
function identity4(val) {
    return val;
}
identity4({
    brand: "",
    type: 0
});
function getsearchproducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//generic arrow method syntax
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 7;
    return products[myIndex];
};
function getSearchbroad(val1, val2) {
    return {
        val1,
        val2,
    };
}
//generic classes or function
class Sellable {
    constructor() {
        this.cart = [];
    }
    addtocart(product) {
        this.cart.push(product);
    }
}
