import type { Product } from ".";

interface ProductState{
    products:Product[]
}

const initialState: ProductState = {
    products:[
        {
            id:1,
            name:"Pizza",
            price:15,
            img:"https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
        },{
            id:2,
            name:"Hamburger",
            price:17,
            img:"https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
        },{
            id:3,
            name:"Bread",
            price:10,
            img:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Mom-s-Italian-Bread_EXPS_TOHcom24_41847_P2_MD_04_19_2b.jpg?fit=300,300&webp=1"
        },{
            id:4,
            name:"Cake",
            price:20,
            img:"https://www.katysfoodfinds.com/wp-content/uploads/2022/04/easy-chocolate-cake-23.jpg"
        }
    ]
}

type Action = {type: "SET_PRODUCTS";payload:Product[]}

export const productReducer = (
    state = initialState,
    action: Action
):ProductState=>{
    switch (action.type) {
        case "SET_PRODUCTS":
            return {...state,products:action.payload}
    
        default:
            return state
    }
}