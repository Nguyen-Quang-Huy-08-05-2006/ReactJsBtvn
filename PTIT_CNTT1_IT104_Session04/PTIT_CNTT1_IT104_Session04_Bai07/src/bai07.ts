const processInput = (input: string | number| boolean)=>{
    if(typeof input === "string"){
        if(isNaN(Number(input))){
            let result = input.match(/[a-zA-Z]/g)
            let temp:string[] = [];
            if(result){
                temp = result;
                let count = 0;
                for (let index = 0; index < temp.length; index++) {
                    count ++;
                }
                console.log(`${count} ky tu chu cai`);
                
            }
        }else{
            let result = Number(input) ** 2;
            console.log(result);
            
        }
    }if (typeof input === "number") {
        let count = 1;
        for (let index = 1; index < input; index++) {
            if(input % index === 0) count++
        }
        if(count != 2){
            console.log("Không phải số nguyên tố");
        }else{
            console.log("Là số nguyên tố");
        }
    } if (typeof input === "boolean") {
        if(input){
            console.log("Giá trị là true - tiến hành xử lý");
        }else{
            console.log("Giá trị là false - dừng xử lý");
            
        }
    } 
}

processInput(1)
processInput("1234")
processInput("123abc")
processInput(true)