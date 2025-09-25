// console.log("hello world");
// let a=40;
// if(a>18){
//     let a=22
//     console.log("eligible for vote"+a);
// }
// else{
//      console.log("not eligible for vote");
// }
// console.log("value of a outside if block"+a);

// function greater(a,b){
//      console.log("inside function");
//      return a+b;
// }
// const value=greater(3,7);
// console.log(value);
// const data=function greeting(name){
//     return "hello "+name;
// }
// console.log(data("prince"));
const hero=(a,b)=>{
    console.log("hello hero"+a+b);
    return a*b;

}
// const value =hero(2,4);
// console.log(value);
// const data =msg=>msg;
// console.log(data("hello arrow function"));
// (
//     function(){
//         console.log("hello immmidately invoked function");
//     }
// )();
function outer(){
    console.log("inside outer function");   
}
setInterval(outer,2000);