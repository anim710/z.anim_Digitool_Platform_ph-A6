import { useState } from "react";
import { toast } from "react-toastify";

const getBadgeColor = (tagType) => {
  if (tagType === "popular") return "bg-purple-100 text-purple-700";
  if (tagType === "new") return "bg-green-100 text-green-700";
  if (tagType === "best-seller") return "bg-yellow-100 text-yellow-700";
  return "bg-gray-100 text-gray-700";
};

const ProductCard = ({ product, carts, setCarts }) => {
  const [isBought, setIsBought] = useState(false);

  const handleAddToCart = () => {
    const isFound = carts.find((item) => item.id === product.id);
    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }
    setIsBought(true);
    setCarts([...carts, product]);
    toast.success("Item added to cart!");
  };

  return (
    <div className="relative border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">

      {/* Badge */}
      {product.tag && (
        <div className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(product.tagType)}`}>
          {product.tag}
        </div>
      )}

      {/* Icon */}
      <div className="text-3xl">{product.icon}</div>

      {/* Name & Desc */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 whitespace-pre-line">{product.description}</p>
      </div>

      {/* Price */}
      <div className="flex items-end gap-1">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <span className="text-sm text-gray-500 mb-0.5">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="text-purple-600">✓</span> {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        disabled={isBought}
        className="w-full py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
      >
        {isBought ? "Added" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;