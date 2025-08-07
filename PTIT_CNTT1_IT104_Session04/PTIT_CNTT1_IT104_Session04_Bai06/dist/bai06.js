"use strict";
const listProduct = [
    {
        id: "1",
        name: "áo sơ mi",
        price: 100000,
        category: {
            id: "001",
            name: "Thời trang nam",
        }
    },
    {
        id: "2",
        name: "áo khoác gió",
        price: 170000,
        category: {
            id: "001",
            name: "Thời trang nam",
        },
        discount: 20,
    },
    {
        id: "3",
        name: "váy",
        price: 300000,
        category: {
            id: "002",
            name: "Thời trang nữ",
        },
        discount: 50,
    }
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
};
const printProductInfo = (product) => {
    console.log(`Tên: ${product.name}`);
    if (product.discount) {
        console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
        console.log(`Giá sau khi giảm: ${getFinalPrice(product).toLocaleString()} VND`);
        console.log(`Danh mục: ${product.category.name}`);
    }
    else {
        console.log(`Giá: ${product.price.toLocaleString()}`);
        console.log(`Danh mục: ${product.category.name}`);
    }
};
listProduct.forEach(printProductInfo);
//# sourceMappingURL=bai06.js.map