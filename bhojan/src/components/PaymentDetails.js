import React, { useState, useEffect } from 'react';
import './PaymentDetails.css';

function PaymentDetails() {
  const [products, setProducts] = useState([
    { id: 1, name: "Veg Biryani", price: 50, quantity: 1, checked: false },
    { id: 2, name: "Paneer butter masala", price: 100, quantity: 1, checked: false },
    { id: 3, name: "Chapati", price: 30, quantity: 1, checked: false },
    { id: 4, name: "Chocolate milk", price: 20, quantity: 1, checked: false }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const newSubtotal = products.reduce((sum, product) => {
      return sum + (product.checked ? product.price * product.quantity : 0);
    }, 0);
    
    const newGst = newSubtotal * 0.16; // 16% GST
    const newTotal = newSubtotal + newGst;
    const newSelectedCount = products.filter(product => product.checked).length;

    setSubtotal(newSubtotal);
    setGst(newGst);
    setTotal(newTotal);
    setSelectedCount(newSelectedCount);
  }, [products]);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setProducts(products.map(product => ({
      ...product,
      checked: newSelectAll
    })));
  };

  const handleProductCheck = (productId) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, checked: !product.checked }
        : product
    ));
  };

  const handleQuantityChange = (productId, change) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        const newQuantity = Math.max(1, product.quantity + change);
        return { ...product, quantity: newQuantity };
      }
      return product;
    }));
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-header">
          <div className="select-text">
            <input 
              type="checkbox" 
              className="product-checkbox" 
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <span>Select All</span>
            <span className="orange-text">({selectedCount}/{products.length} Items)</span>
          </div>
          <div>
            <span>Total: </span>
            <span className="orange-text">Rs.{subtotal.toFixed(2)}</span>
          </div>
        </div>

        {products.map(product => (
          <div key={product.id} className="product-card">
            <input 
              type="checkbox" 
              className="product-checkbox"
              checked={product.checked}
              onChange={() => handleProductCheck(product.id)}
            />
            <img src=" " alt="Product" className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Rs.{(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(product.id, -1)}
              >
                -
              </button>
              <input 
                type="text" 
                value={product.quantity} 
                className="quantity-input" 
                readOnly 
              />
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(product.id, 1)}
              >
                +
              </button>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>
              <i className="fas fa-trash"></i> {/* Delete icon */}
            </button>
          </div>
        ))}
      </div>

      <div className="payment-section">
        <div className="payment-card">
          <h3 className="payment-title">Payment Details</h3>
          <div className="payment-details">
            <div className="payment-row">
              <span>Subtotal</span>
              <span>Rs.{subtotal.toFixed(2)}</span>
            </div>
            <div className="payment-row">
              <span>GST</span>
              <span>Rs.{gst.toFixed(2)}</span>
            </div>
            <div className="payment-row total">
              <span>Total</span>
              <span className="orange-text">Rs.{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-btn">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
