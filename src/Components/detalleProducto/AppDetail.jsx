import { useEffect, useState } from "react";

import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

// import Swal from "sweetalert2";

import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);

  return (
    <>
      <main className={darkMode ? "dark-mode" : ""}>
        <Breadcrumbs />
        <ProductDetails />
        <ProductCarousel />
      </main>
    </>
  );
};

export default App;
