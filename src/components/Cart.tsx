import { useCart } from "../context/CartContext";

const Cart = () => {
  // Destructure `state` and `dispatch` from `useCart()`
  const { state, dispatch } = useCart();
  const { cart } = state;

  // Delete item from cart
  const deleteFromCart = (product: any) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id }); // Use unique `id` as payload
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item: any) => (
            <li
              key={item.id} // Use a unique key like `id`
              className="flex justify-between items-center p-2 border-b"
            >
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => deleteFromCart(item)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
