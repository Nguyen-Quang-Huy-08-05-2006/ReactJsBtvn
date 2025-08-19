abstract class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public stock: number,
        public category: string
    ) {}

    abstract getDetails(): string;
}

class Electronics extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        stock: number,
        public warranty: string
    ) {
        super(id, name, price, stock, "Electronics");
    }

    getDetails(): string {
        return `Bảo hành: ${this.warranty}`;
    }
}

class Clothing extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        stock: number,
        public size: string,
        public color: string
    ) {
        super(id, name, price, stock, "Clothing");
    }

    getDetails(): string {
        return `Size: ${this.size}, Màu: ${this.color}`;
    }
}

class Customer {
    constructor(
        public id: number,
        public name: string
    ) {}
}

class OrderItem {
    constructor(
        public product: Product,
        public quantity: number
    ) {}
}

class Order {
    static nextId = 1;
    public id: number;
    public items: OrderItem[] = [];
    constructor(public customer: Customer) {
        this.id = Order.nextId++;
    }

    addItem(product: Product, quantity: number) {
        this.items.push(new OrderItem(product, quantity));
    }

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
}

class Store {
    customers: Customer[] = [];
    products: Product[] = [];
    orders: Order[] = [];

    addCustomer(name: string) {
        const newCustomer = new Customer(this.customers.length + 1, name);
        this.customers.push(newCustomer);
        return newCustomer;
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    createOrder(customerId: number, items: { productId: number, quantity: number }[]) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) return null;

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

    cancelOrder(orderId: number) {
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

    getOrdersByCustomer(customerId: number) {
        return this.orders.filter(o => o.customer.id === customerId);
    }

    getTotalRevenue() {
        return this.orders.reduce((sum, order) => sum + order.getTotal(), 0);
    }

    getProductStats() {
        return this.products.reduce((stats: Record<string, number>, p) => {
            stats[p.category] = (stats[p.category] || 0) + 1;
            return stats;
        }, {});
    }

    updateStock(productId: number, newStock: number) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            return true;
        }
        return false;
    }

    findById<T extends { id: number }>(arr: T[], id: number): T | undefined {
        return arr.find(item => item.id === id);
    }

    getProductDetails(productId: number) {
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
    const choiceInput = document.getElementById("choice") as HTMLInputElement;
    const choice = Number(choiceInput.value);
    const resultDiv = document.getElementById("result")!;

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
            .map((k) => `- ${k}: ${stats[k as keyof typeof stats]}`)
            .join("\n");           
            resultDiv.innerText = lines;
            break;
        default:
            resultDiv.innerText = "⚠ Chức năng chưa được triển khai.";
    }
}

// Gắn hàm vào window để HTML gọi được
(window as any).handleChoice = handleChoice;
