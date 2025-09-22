// json 
// 
const user={
    rollno:"230032150143",
    name:"priyanshu",
    age:32

}
//convert object to json object
const jsonobj=JSON.stringify(user);
console.log(jsonobj);
console.log("type of json:",typeof jsonobj);
// json data
const jsonData=[{
     'rollno':1,
     'name': 'priyanshu'
},{
    'rollno':2,
     'name':'prince'
},{
     'rollno':3,
     'name':'parv'
}]
jsonData.forEach((data)=>{
    console.log(data.rollno,data.name);
})
let result;
const arr1=[2,4,48,9];
const ouput=arr1.map((val)=> val+1);
console.log(ouput);
