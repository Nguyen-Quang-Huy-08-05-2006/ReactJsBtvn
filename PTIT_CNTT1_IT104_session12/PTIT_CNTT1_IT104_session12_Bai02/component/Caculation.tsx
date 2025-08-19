import React from "react";

function Caculation(){
    const add = (a:number, b:number) => a+b
    const minus = (a:number, b:number) => a-b
    const mutiply = (a:number, b:number) => a*b
    const divide = (a:number, b:number) => a/b
    
    const x = 10
    const y = 10

    return (
        <div>
            <h3>Danh sach ket qua</h3>
            <ul>
                <li>{x}+{y}={add(x,y)}</li>
                <li>{x}-{y}={minus(x,y)}</li>
                <li>{x}*{y}={mutiply(x,y)}</li>
                <li>{x}/{y}={divide(x,y)}</li>
            </ul>
        </div>
    )
}

export default Caculation