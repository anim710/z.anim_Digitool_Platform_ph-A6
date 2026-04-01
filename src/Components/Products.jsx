import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ productPromise, carts, setCarts, showCart, setShowCart }) => {
  const products = use(productPromise);

  return (
    <div className="py-16 px-6 bg-white">

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setShowCart(false)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              !showCart ? "bg-purple-600 text-white" : "text-gray-600"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setShowCart(true)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              showCart ? "bg-purple-600 text-white" : "text-gray-600"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Products Grid — always visible */}
      {!showCart && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Products;