import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="info-card">
                <div className="title-price">
                  <strong className="product-title">{product.title}</strong>
                  <p className="price"> -$ {product.price}</p>
                </div>

                {/* <p className='descripcion'>{product.description}</p> */}

                <div className="">
                  <button
                    className="btn-cart"
                    style={{
                      backgroundColor: isProductInCart ? "#F43636" : "#0071DC",
                      transition:
                        "background-color 0.3s ease, transform 0.3s ease",
                    }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product);
                    }}
                  >
                    {isProductInCart
                      ? "Quitar del carrito"
                      : "Añadir al carrito"}
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
