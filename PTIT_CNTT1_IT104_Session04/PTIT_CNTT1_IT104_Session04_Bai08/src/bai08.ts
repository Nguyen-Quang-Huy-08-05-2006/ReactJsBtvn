interface Product {
    readonly id: string;
    name: string;
    price: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
}

const calculateOrderTotal=(order: Order):number=>{
    let result = 0;
    for (let index = 0; index < order.items.length; index++) {
        let temp = order.items[index]
        result += temp.product.price * temp.quantity;
    }
    return result;
}

const printOrder = (order: Order): void => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);

    order.items.forEach(item => {
        const name = item.product.name;
        const quantity = item.quantity;
        const price = item.product.price * quantity;
        console.log(`- ${name} × ${quantity} → ${price.toLocaleString()} VND`);
    });

    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};

const order: Order = {
    orderId: 'ORD001',
    customerName: 'Nguyễn Văn A',
    items: [
        {
            product: { id: 'p1', name: 'Áo sơ mi', price: 250000 },
            quantity: 2
        },
        {
            product: { id: 'p2', name: 'Quần tây', price: 400000 },
            quantity: 1
        }
    ],
};

printOrder(order);