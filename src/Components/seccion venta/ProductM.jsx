// import React, { useState } from "react";
// const data = [
//   {
//     id: 1,
//     label: "Marca",
//     value: "ASUS",
//     mainImage:
//       "data:image/jpeg;base64,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",
//     title: "titulo",
//     price: "12",
//     color:'red'
//   },
// ];

// const ProductDetails = () => {
//   const [product, setData] = useState(data);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedQuantity, setSelectedQuantity] = useState(1);

//   const handleColorChange = (event) => {
//     setSelectedColor(event.target.value);
//   };

//   const handleQuantityChange = (event) => {
//     setSelectedQuantity(parseInt(event.target.value));
//   };

//   const handleAddToCart = () => {
//     // Agregar producto al carrito
//   };

//   const handleBuyNow = () => {
//     // Redirigir al checkout
//   };

//   return (
//     <div className="product-details">
//       <div className="product-images">
//         <div className="product-main-image">
//           <img src={product.mainImage} alt={product.title} />
//         </div>
//         <div className="product-thumbnail-images">
//           {product.map((image, index) => (
//             <div key={index} className="product-thumbnail-image">
//               <img src={image} alt={product.title} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="product-info">
//         <h1>{product.title}</h1>
//         <div className="product-price">
//           <span className="product-price-label">Precio:</span>
//           <span className="product-price-value">${product.price}</span>
//         </div>
//         <div className="product-color">
//           <span className="product-color-label">Color:</span>
//           {/* <select value={selectedColor} onChange={handleColorChange}>
//             <option value="">Seleccionar color</option>
//             {product.map((color, index) => (
//               <option key={index} value={color}>
//                 {color}
//               </option>
//             ))}
//           </select> */}
//         </div>
//         <div className="product-quantity">
//           <span className="product-quantity-label">Cantidad:</span>
//           <select value={selectedQuantity} onChange={handleQuantityChange}>
//             {[...Array(10)].map((_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="product-shipping">
//           <span className="product-shipping-label">Envío:</span>
//           <span className="product-shipping-value">{product.shipping}</span>
//         </div>
//         {/* <div className="product-payment-methods">
//           <span className="product-payment-methods-label">
//             Métodos de pago:
//           </span>
//           <ul className="product-payment-methods-list">
//             {product.paymentMethods.map((method, index) => (
//               <li key={index}>{method}</li>
//             ))}
//           </ul>
//         </div> */}
//         <div className="product-buttons">
//           <button onClick={handleAddToCart}>Agregar al carrito</button>
//           <button onClick={handleBuyNow}>Comprar ahora</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import { GrFavorite } from "react-icons/gr";
import React, { useState } from "react";
import "./ap.css";
import { AddToCartIcon } from "../../card/components/Icons";
import  {Cart} from '../../../src/card/components/Cart.jsx'
function DetalleProducto() {
  const [imagenActual, setImagenActual] = useState(0);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  const cambiarImagenHandler = (index) => {
    setImagenActual(index);
  };

  const aumentarCantidadHandler = () => {
    setCantidadSeleccionada(cantidadSeleccionada + 1);
  };

  const disminuirCantidadHandler = () => {
    if (cantidadSeleccionada > 1) {
      setCantidadSeleccionada(cantidadSeleccionada - 1);
    }
  };

  return (
    <div className="detalle-producto">
      <div className="detalle-producto-imagenes">
        <img
          src="https://images.unsplash.com/photo-1585857188823-77658a70979a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80s"
          alt="Imagen grande del producto"
        />
        <div className="detalle-producto-miniaturas">
          <img
            src="https://images.unsplash.com/photo-1614925379183-3ce5e634a612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pbnRlbmRvJTIwc3dpdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Imagen miniatura 1"
            onClick={() => cambiarImagenHandler(0)}
          />
          <img
            src="https://images.unsplash.com/photo-1612036781124-847f8939b154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Imagen miniatura 2"
            onClick={() => cambiarImagenHandler(1)}
          />
          <img
            src="https://images.unsplash.com/photo-1605142806312-9ba7fa5cd0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Imagen miniatura 3"
            onClick={() => cambiarImagenHandler(2)}
          />
        </div>
      </div>
      <div className="detalle-producto-info">
        <div>
          <h2>nintendo switch model 2019</h2>
          <p className="precio-info">Precio: $100</p>
          <p className="descripcion-info">Descripción del producto</p>
          <p className="des2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eveniet quo recusandae ex amet similique architecto, a expedita
            reiciendis suscipit provident minus laudantium deserunt
          </p>
        </div>
        <div className="detalle-producto-pago">
          <p className="title-cuotas">Paga en cuotas con :</p>
          <img
            src="data:image/png;base64,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"
            alt="Icono de método de pago"
          />
          <a href="" className="cta-info">
            mas informacion
          </a>
        </div>
        <div className="detalle-producto-envio">
          <p className="tile-entrega">entrega con el vendedor</p>
          <p className="ciudad-entrega">Ciudad : Quito</p>
          <p className="tipo-entrega">gratis</p>
          <p className="ciudad-envio">Desde Ciudad de Ambato</p>
        </div>

        <div className="detalle-producto-cantidad">
          <div className="butons-catidad">
            <p>cantidad unidad :</p>
            <div>
              <button onClick={disminuirCantidadHandler}>-</button>
              <span>{cantidadSeleccionada}</span>
              <button onClick={aumentarCantidadHandler}>+</button>
            </div>
          </div>
        </div>
        <div className="buttons-action">
          <button className="detalle-producto-boton-comprar">
            Comprar {cantidadSeleccionada} unidades
          </button>
          <button className="f"></button>
          
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
