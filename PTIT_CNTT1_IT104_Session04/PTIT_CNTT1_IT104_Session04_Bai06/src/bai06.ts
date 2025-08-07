type Product = {
     id: string,
     name: string,
     price: number,
     category: {
       id: string,
       name: string,
  }
     discount?: number;
};

const listProduct: Product[]=[
    {
        id: "1",
        name: "áo sơ mi",
        price: 100000,
        category:{
            id: "001",
            name:"Thời trang nam",
        }
    },
    {
        id: "2",
        name: "áo khoác gió",
        price: 170000,
        category:{
            id: "001",
            name:"Thời trang nam",
        },
        discount: 20,
    },
    {
        id: "3",
        name: "váy",
        price: 300000,
        category:{
            id: "002",
            name:"Thời trang nữ",
        },
        discount: 50,
    }
]

const getFinalPrice =(product: Product)=>{
    if(product.discount){
        return product.price * (1- product.discount/100)
    }
    return product.price;
}

const printProductInfo = (product:Product)=>{
    console.log(`Tên: ${product.name}`);
    if(product.discount){
        console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
        console.log(`Giá sau khi giảm: ${getFinalPrice(product).toLocaleString()} VND`);
        console.log(`Danh mục: ${product.category.name}`);
    }else{
        console.log(`Giá: ${product.price.toLocaleString()}`);
        console.log(`Danh mục: ${product.category.name}`);
    }
}

listProduct.forEach(printProductInfo);