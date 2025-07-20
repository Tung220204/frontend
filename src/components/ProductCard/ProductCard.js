// ProductCard.js
import React from "react";
import "./ProductCard.css";


const fallbackImg = require("../../assets/images/ImgProduct/image1.png");

const ProductCard = ({ image, name, originalPrice, discountedPrice }) => {
  const [imgSrc, setImgSrc] = React.useState(image || fallbackImg);

  React.useEffect(() => {
    setImgSrc(image || fallbackImg);
  }, [image]);

  return (
    <div className="product-card">
      <img
        src={imgSrc}
        alt={name}
        onError={() => setImgSrc(fallbackImg)}
      />
      <div className="product-info">
        <div className="hot-deal">Giá cực sốc</div>
        <h3 className="product-name">{name}</h3>
        <div className="price-section">
          <span className="discounted-price">{discountedPrice}</span>
          <span className="original-price">{originalPrice} <span className="discount">-10%</span></span>
        </div>
        <button className="buy-button">Mua ngay</button>
      </div>
    </div>
  );
};

export default ProductCard;