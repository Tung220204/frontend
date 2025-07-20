import React, { useState, useEffect } from "react";
import "./DropdownCategory.css";

const CATEGORY_LABELS = {
  "Oil Filter": "Bộ Lọc Dầu",
  "Air Filter": "Bộ Lọc Không Khí",
  "Fuel Filter": "Bộ Lọc Nhiên Liệu",
  "Spark Plug": "Bugi Động Cơ",
};
const CATEGORY_ICONS = {
  "Oil Filter": "/ImgProduct/icon-category/locdau.png",
  "Air Filter": "/ImgProduct/icon-category/lockhongkhi.png",
  "Fuel Filter": "/ImgProduct/icon-category/locnhienlieu.png",
  "Spark Plug": "/ImgProduct/icon-category/loctrngcabin.jpg",
};
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " đ";
}

export default function DropdownCategory() {
  const [products, setProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/Data/Product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const cats = Array.from(new Set(data.map((p) => p.category)));
        setCategories(cats);
      });
  }, []);

  const currentCategory = categories[selectedCat];
  const subProducts = products.filter((p) => p.category === currentCategory);
  const bestSellers = products.slice(0, 5);

  return (
    <div className="dropdown-category-root">
      <div className="dropdown-category-left">
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className={`dropdown-category-item${
              selectedCat === idx ? " active" : ""
            }`}
            onMouseEnter={() => setSelectedCat(idx)}
          >
            <img
              src={CATEGORY_ICONS[cat]}
              alt={cat}
              className="dropdown-category-icon"
            />
            <span>{CATEGORY_LABELS[cat] || cat}</span>
          </div>
        ))}
      </div>
      <div className="dropdown-category-right">
        <div className="dropdown-category-subgroup">
          {subProducts.slice(0, 6).map((item, idx) => (
            <div key={item.id} className="dropdown-category-subitem">
              <img
                src={
                  item.image.startsWith("..")
                    ? item.image.replace("..", "")
                    : item.image
                }
                alt={item.name}
                className="dropdown-category-subitem-img"
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="dropdown-category-bestseller">
          <div className="dropdown-category-bestseller-title">
            <strong style={{ color: "#000000" }}>Sản Phẩm Bán Chạy</strong>{" "}
            <a href="#">Xem tất cả &gt;</a>
          </div>
          <div className="dropdown-category-bestseller-list">
            {bestSellers.map((item, idx) => (
              <div key={item.id} className="dropdown-category-bestseller-item">
                <img
                  src={
                  item.image.startsWith("..")
                    ? item.image.replace("..", "")
                    : item.image
                }
                  alt={item.name}
                  className="dropdown-category-bestseller-img"
                />
                <div className="dropdown-category-bestseller-info">
                  <div className="dropdown-category-bestseller-name">
                    {item.name}
                  </div>
                  <div className="dropdown-category-bestseller-price">
                    {formatPrice(item.price)}
                  </div>
                  <div className="dropdown-category-bestseller-oldprice">
                    <span>
                      {formatPrice(
                        item.price +
                          (item.discount
                            ? Math.round((item.price * item.discount) / 100)
                            : 0)
                      )}
                    </span>
                    {item.discount > 0 && (
                      <span className="discount">-{item.discount}%</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
