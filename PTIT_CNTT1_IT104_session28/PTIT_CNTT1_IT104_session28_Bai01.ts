type callbackType = (result:number)=>void

const calculate = (a:number,b:number,callback:callbackType)=>{
  const sum = a+b
  callback(sum)
}

const handleLogSum = (result:number):void=>{
  console.log(result);
}

calculate(1,2,handleLogSum)