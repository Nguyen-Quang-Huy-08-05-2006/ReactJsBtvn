import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../reducer/store";
import { deleteFromCart, updateQuantity } from "../action/cartAction";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-[700px] bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-center items-center bg-pink-200 px-5 py-4">
        <h2 className="font-bold text-lg text-gray-800">🛒 Your Cart</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">Qty</th>
              <th className="py-2 px-3">Total</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-6 text-gray-500">
                  Your cart is empty
                </td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={item.product.id} className="border-b">
                  <td className="py-2 px-3">{index + 1}</td>
                  <td className="py-2 px-3">{item.product.name}</td>
                  <td className="py-2 px-3">{item.product.price} USD</td>
                  <td className="py-2 px-3 flex items-center justify-center gap-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity(
                            item.product.id,
                            Math.max(1, item.quantity - 1)
                          )
                        )
                      }
                      className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded text-xs"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity(
                            item.product.id,
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        )
                      }
                      className="w-14 text-center border rounded"
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity(item.product.id, item.quantity + 1)
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                    >
                      +
                    </button>
                  </td>
                  <td className="py-2 px-3 font-semibold">
                    {Number(item.product.price) * item.quantity} USD
                  </td>
                  <td className="py-2 px-3">
                    <button
                      onClick={() => dispatch(deleteFromCart(item.product.id))}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      🗑 Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 px-5 py-3">
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>

      <div className="px-5 py-4 bg-gray-50 border-t">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span className="text-orange-600">{total} USD</span>
        </div>
        <button
          disabled={cart.length === 0}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition disabled:bg-gray-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
