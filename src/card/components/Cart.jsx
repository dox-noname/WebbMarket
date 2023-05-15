import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeFromCart,
}) {
  return (
    <li className="card-container--itms">
      <div className="product-item">
        <img src={thumbnail} alt={title} />
        <div className="title-price">
          <strong className="title-price">{title}</strong>
          <p className="price-cart">- ${price}</p>
        </div>
      </div>

      <footer>
        <div className="btn-catidad">
          <button onClick={removeFromCart}>-</button>
          <small>{quantity}</small>
          <button onClick={addToCart}>+</button>
        </div>

        <button onClick={removeFromCart} className="eliminar">Eliminar</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, decrementFromCart, removeFromCart } =
    useCart();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              decrementFromCart={() => decrementFromCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <div className="cart-total">
          Total: <span>${calculateTotalPrice()}</span>
        </div>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
