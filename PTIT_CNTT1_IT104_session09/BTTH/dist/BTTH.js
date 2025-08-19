"use strict";
class Product {
    constructor(id, name, price, stock, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}
class Electronics extends Product {
    constructor(id, name, price, stock, warranty) {
        super(id, name, price, stock, "Electronics");
        this.warranty = warranty;
    }
    getDetails() {
        return `Bảo hành: ${this.warranty}`;
    }
}
class Clothing extends Product {
    constructor(id, name, price, stock, size, color) {
        super(id, name, price, stock, "Clothing");
        this.size = size;
        this.color = color;
    }
    getDetails() {
        return `Size: ${this.size}, Màu: ${this.color}`;
    }
}
class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OrderItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
class Order {
    constructor(customer) {
        this.customer = customer;
        this.items = [];
        this.id = Order.nextId++;
    }
    addItem(product, quantity) {
        this.items.push(new OrderItem(product, quantity));
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
}
Order.nextId = 1;
class Store {
    constructor() {
        this.customers = [];
        this.products = [];
        this.orders = [];
    }
    addCustomer(name) {
        const newCustomer = new Customer(this.customers.length + 1, name);
        this.customers.push(newCustomer);
        return newCustomer;
    }
    addProduct(product) {
        this.products.push(product);
    }
    createOrder(customerId, items) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer)
            return null;
        const order = new Order(customer);
        for (const { productId, quantity } of items) {
            const product = this.products.find(p => p.id === productId && p.stock >= quantity);
            if (product) {
                product.stock -= quantity;
                order.addItem(product, quantity);
            }
        }
        this.orders.push(order);
        return order;
    }
    cancelOrder(orderId) {
        const index = this.orders.findIndex(o => o.id === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            for (const item of order.items) {
                item.product.stock += item.quantity;
            }
            this.orders.splice(index, 1);
            return true;
        }
        return false;
    }
    getAvailableProducts() {
        return this.products.filter(p => p.stock > 0);
    }
    getOrdersByCustomer(customerId) {
        return this.orders.filter(o => o.customer.id === customerId);
    }
    getTotalRevenue() {
        return this.orders.reduce((sum, order) => sum + order.getTotal(), 0);
    }
    getProductStats() {
        return this.products.reduce((stats, p) => {
            stats[p.category] = (stats[p.category] || 0) + 1;
            return stats;
        }, {});
    }
    updateStock(productId, newStock) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            return true;
        }
        return false;
    }
    findById(arr, id) {
        return arr.find(item => item.id === id);
    }
    getProductDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        return product ? product.getDetails() : null;
    }
}
// --- Khởi tạo dữ liệu mẫu ---
const store = new Store();
store.addCustomer("Nguyễn Văn A");
store.addCustomer("Trần Thị B");
store.addProduct(new Electronics(1, "Laptop Dell", 15000000, 5, "12 tháng"));
store.addProduct(new Clothing(2, "Áo Thun", 200000, 10, "L", "Đen"));
// --- Xử lý menu ---
function handleChoice() {
    const choiceInput = document.getElementById("choice");
    const choice = Number(choiceInput.value);
    const resultDiv = document.getElementById("result");
    switch (choice) {
        case 1:
            store.addCustomer("Khách mới");
            resultDiv.innerText = "✅ Đã thêm khách hàng mới!";
            break;
        case 5:
            resultDiv.innerText = store.getAvailableProducts()
                .map(p => `${p.name} - SL: ${p.stock}`)
                .join("\n");
            break;
        case 7:
            resultDiv.innerText = `Tổng doanh thu: ${store.getTotalRevenue()} VNĐ`;
            break;
        case 8:
            const stats = store.getProductStats();
            const lines = Object.keys(stats)
                .map((k) => `- ${k}: ${stats[k]}`)
                .join("\n");
            resultDiv.innerText = lines;
            break;
        default:
            resultDiv.innerText = "⚠ Chức năng chưa được triển khai.";
    }
}
// Gắn hàm vào window để HTML gọi được
window.handleChoice = handleChoice;
//# sourceMappingURL=BTTH.js.map