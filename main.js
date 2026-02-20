//const timerID=setInterval(()=>{console.log("setInterval")},1000);
//const timeoutID=setTimeout(()=>{console.log(timerID)},10000);
//clearInterval(timerID);

//let num=1;
const id=setInterval(()=>{
    if (num===10)clearInterval(id)
    console.log(num)
    num+=1
},1000);    
//const timerID=setTimeout(()=>{console.log("setTimeout")},10000);
//const li=document.querySelectorAll("li");
//li.forEach(item)=>
//    item.addEventListener"click",()=>
//        clearInterval(id);
//        clearTimeout(timerID);
//    }

// function print(num){//highier order fn
//     setTimeout(()=>{
//     console.log("Inside print")
//     num()
//     },2000);
// }

// function callback(){ //callback fn
//     console.log("Inside callback")
// }
// print(sample)

console.log("starting homework . . .");

setTimeout(()=>{
    console.log("homework done! ");
    console.log("starting dinner...");
setTimeout(()=>{
    console.log("dinner done");
    console.log("getting ready to go out");
setTimeout(()=>{
    console.log("going to the playground");
},1000);
},1500);
},2000);
onsole.log("Before Promise");
const p=new Promise((resolve,reject)=>{
    let done=true;
    setTimeout(()=>{
        if(done){
            resolve("work has been completed")
        }else{
            reject("work has not been completed")
        }
        },5000)
    });
p.then((data)=>{
    console.log(data.name)
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        console.log("finally block");
    });
