import { useCart } from "../context/CartContext";

const Product = ({
  product,
}: {
  product: {
    id: number;
    title: string;
    price: number;
    img: string;
    desc: string;
    rating: number;
  };
}) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const deleteFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={addToCart}
        className="bg-blue-500 text-white py-1 px-3 rounded mt-2 hover:bg-blue-600"
      >
        Add to Cart
      </button>
      <button
        onClick={deleteFromCart}
        className="bg-red-500 text-white py-1 px-3 rounded mt-2 hover:bg-red-600 ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Product;
