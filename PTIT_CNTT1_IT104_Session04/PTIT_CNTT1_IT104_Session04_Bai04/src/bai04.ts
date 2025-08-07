let input: string | number

const check=(input: string | number)=>{
    if(typeof input === "string"){
        let temp = 0;
        for (let index = 0; index < input.length; index++) {
            temp ++;
        }
        console.log(`${temp} ky tu`);
    }
    if(typeof input === "number"){
        if(input % 2 === 0){
            console.log("Day la so chan");
            
        }else{
            console.log("Day la so le");
            
        }
    }
}

input = 2;
check(input)
input = "abcd123"
check(input)