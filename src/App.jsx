import { products as initialProducts } from "./card/mocks/products.json";
import { products as initialProductss } from "./card/mocks/productss.json"; // importa los nuevos datos de un archivo JSON diferente
import { useFilters } from "./card/hooks/useFilters";
import { CartProvider } from "./card/context/cart";
import { Products } from "./card/components/Products";
import Navigation from "./Components/Navigation/Navigation";
import MainSlider from "./Components/SlidersComponets/MainSLider";
import ProductCarousel from "./Components/SlidersComponets/Sliderrb";
import ProductDetail from "./Components/seccion venta/ProductM";
import Apcart from "./card/Apcart";
import Footer from "./Components/footer/Footer";
import SliderProduct from "./Components/SlidersComponets/SliderProduct";
import { DataPdProvider } from "./DataContext/DataPdProvider";
import ProductUploader from "./Components/addproduct/AddProduct";
import Beneficios from "./Components/MainContent/Beneficios";
import Banner from "./Components/MainContent/Banner";
import Section from "./Components/MainContent/Section";
import { Cart } from "./card/components/Cart";
import AppDetail from "./Components/detalleProducto/AppDetail";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./Components/LOGIN-SINGUP/UserProfile";
import Opinions from "./Components/footer/Opinios";
function App() {
  const miTexto = "20% de descuento en todos los productos";
  const miImagen = "/ruta/de/la/imagen.jpg";
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  const filteredProductss = filterProducts(initialProductss); // usa los nuevos datos importados

  return (
    <>
      <CartProvider>
        <DataPdProvider>
          <Navigation />
          <MainSlider />
          <Beneficios />

          <Banner texto={miTexto} imagen={miImagen} />
          <Section title="Electronica de consumo" backgroundColor="#9F0F0F" />
          <Products products={filteredProducts} />
          <Section title="Super Ofertas !!" backgroundColor="#F13A00" />
          <SliderProduct />
         
          <Section title="Jueguetes y mas" backgroundColor="#0DBB7C" ><a href="../src/Components/detalleProducto/AppDetail.jsx" className="cta-banner">ver mas</a></Section>

          <Products products={filteredProductss} />
          <Opinions />
          <ProductUploader />
          <Footer />
        </DataPdProvider>
      </CartProvider>
   
    </>
  );
}

export default App;
