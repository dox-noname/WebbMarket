import React, { useState, useEffect } from "react";
import "./add.css";

const ProductUploader = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleAddProduct = () => {
    const newProduct = {
      title,
      description,
      price,
      image,
      id: Date.now(),
    };
    setProducts([...products, newProduct]);
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="product-uploader">
      <h1>Subir producto</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Titulo"
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Descripción"
        />
      </div>
      <div>
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder="Precio"
        />
      </div>
      <div>
        <input type="file" onChange={handleImageChange} />
      </div>
      <div>
        <button onClick={handleAddProduct}>Subir producto</button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="info-card">
              <div className="title-price">
                <strong className="product-title">{product.title}</strong>
                <p className="price">$ {product.price}</p>
              </div>
              <p className="descripcion">{product.description}</p>
              <div className="">
                <button
                  className="btn-cart"
                  style={{
                    backgroundColor: "#F43636",
                    transition:
                      "background-color 0.3s ease, transform 0.3s ease",
                  }}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductUploader;
