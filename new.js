//const timerID=setInterval(()=>{console.log("setInterval")},1000);
//const timeoutID=setTimeout(()=>{console.log(timerID)},10000);
//clearInterval(timerID);

let num=1;
const id=setInterval(()=>{
    if (num===10)clearInterval(id)
    console.log(num)
    num+=1
},1000);    