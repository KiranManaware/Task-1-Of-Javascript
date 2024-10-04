// for(let i=0;i<5;i++){
//     let line = " ";
//     for(let j=0;j<5;j++ ){
//         line+="* "
//     }
//     console.log(line);
//     // console.log("\n");
// }
// const table=()=>{
//     for(let i=num;i<=num*10;i=i+num){
//         console.log(i);
//     }

// }
// let num=5;
// table(num);
for(let i=1;i<=6;i++){
    let str="";
    for(let j=1;j<=6;j++){
        // str=str+"*";
        str+="* "        
    }
    console.log(str);
}
for(let i=1;i<=6;i++){
    let str="";
    for(let j=1;j<=6;j++){
        // str=str+"*";
        if(i==1||j==6||j==1||i==6) str+="* "
        else str+="  ";
        
    }
    console.log(str);
}