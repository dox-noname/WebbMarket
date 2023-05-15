import ReactDOM from "react-dom/client";
import Apcart from "./Apcart";
import { FiltersProvider } from "./context/filters.jsx";
import "./";
import Productsmain from "./Productsmain";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";
import { IS_DEVELOPMENT } from "./config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      <FiltersProvider>
        <Productsmain />
      </FiltersProvider>
      {IS_DEVELOPMENT && <Footer />}
      <Cart />
    </CartProvider>
  </>
);
