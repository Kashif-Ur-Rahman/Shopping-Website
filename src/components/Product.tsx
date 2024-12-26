import { useCart } from "./CartContext";

const Products = ({ product }: { product: { id: number; title: string; price: number; img: string; desc: string; rating: number } }) => {
    const { dispatch } = useCart();
  
    const addToCart = () => {
      // Convert price to string if needed
      const productWithStringPrice = {
        ...product,
        price: product.price.toString(),
      };
  
      dispatch({ type: "ADD_TO_CART", payload: productWithStringPrice });
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
      </div>
    );
  };
  