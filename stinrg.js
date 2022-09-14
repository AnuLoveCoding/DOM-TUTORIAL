// let str ="AaAnurag";
// let obj={};




// for (let i=0;i<=str.length-1;i++){
//     if(obj[str[i]]==undefined)//here checkimg value not present
//     {
//         obj[str[i]]=1
//     }else{
//         obj[str[i]]++
//     }
// }
// console.log(obj);

let arr=[7,2,7,7,3,4,2];
let poc={};
for (let j=0;j<=arr.length-1;j++){
    if(poc[arr[j]]==undefined){;
       poc[arr[j]]=1;
   }else{
    poc[arr[j]]++;
   }
}
console.log(poc);