import React, { useState } from "react";
import ProductUploader from "./AddProduct";
import "./btnfloat.css";

const FloatingButton = () => {
    const [isUploaderVisible, setIsUploaderVisible] = useState(false);
  
    const toggleUploaderVisibility = () => {
      setIsUploaderVisible(!isUploaderVisible);
    };
  
    return (
      <div>
        <button className="floating-button" onClick={toggleUploaderVisibility}>
          +
        </button>
        {isUploaderVisible && (
          <div className="uploader-container">
            <ProductUploader />
          </div>
        )}
      </div>
    );
  };
export default FloatingButton;
