import React from "react";
import ReactDOM from "react-dom";
import { useCart } from "../../Context/CartContext";
import './DropdownCart.css';

function DropdownCart({ cartPosition }) {
  const { cart, removeFromCart } = useCart();
  const style = {
    position: 'absolute',
    top: cartPosition?.top || 0,
    left: cartPosition?.left || 0,
    zIndex: 99999,
  };

  return ReactDOM.createPortal(
    <div className="dropdown-cart" style={style}>
      <div className="dropdown-cart-title">Giỏ hàng</div>
      {cart.length === 0 ? (
        <div style={{ padding: "16px 20px" }}>Chưa có sản phẩm</div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div>
                  <span className="cart-item-price">{item.price.toLocaleString()}đ</span>
                  <span className="cart-item-qty">x{item.quantity}</span>
                </div>
              </div>
              <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))}
          <div className="dropdown-cart-footer">
            <span>{cart.length} sản phẩm</span>
            <button className="dropdown-cart-view-btn">Xem giỏ hàng</button>
          </div>
        </>
      )}
    </div>,
    document.body
  );
}

export default DropdownCart;