import { toast } from "react-toastify";

const Cart = ({ carts, setCarts, showCart, setShowCart }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    setShowCart(false);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item removed!");
  };

  return (
    <div className="max-w-2xl mx-auto border border-gray-200 rounded-2xl p-8 shadow-sm mb-10">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

      {carts.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {carts.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm">${item.price}/{item.period}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="text-red-500 text-sm font-semibold hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4">
            <span className="text-gray-500">Total</span>
            <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handlePayment}
            className="w-full py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all mt-4"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;