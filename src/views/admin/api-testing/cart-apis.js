import React, { useState } from 'react';
import { getCart, addToCart, removeFromCart, clearCart } from '../../../api/Cart/Cart';
import './style.css';

const CartAPIsPage = ({ token }) => {
  const [cartForm, setCartForm] = useState({
    Id: '',
    UserId: '',
    CartKey: '',
    UserName: '',
    ProductId: '',
    Quantity: '',
    CartItems: []
  });

  const [getCartForm, setGetCartForm] = useState({
    cartKey: '',
    userId: ''
  });

  const [responses, setResponses] = useState({});

  // Handle form submissions
  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await addToCart(cartForm, token);
      setResponses(prev => ({ ...prev, addToCart: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, addToCart: { success: false, error: error.message } }));
    }
  };

  const handleGetCart = async (e) => {
    e.preventDefault();
    try {
      const response = await getCart(getCartForm.cartKey, getCartForm.userId, token);
      setResponses(prev => ({ ...prev, getCart: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, getCart: { success: false, error: error.message } }));
    }
  };

  const handleRemoveFromCart = async (e) => {
    e.preventDefault();
    try {
      const response = await removeFromCart(getCartForm.cartKey, getCartForm.userId, cartForm.ProductId, token);
      setResponses(prev => ({ ...prev, removeFromCart: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, removeFromCart: { success: false, error: error.message } }));
    }
  };

  const handleClearCart = async (e) => {
    e.preventDefault();
    try {
      const response = await clearCart(getCartForm.cartKey, getCartForm.userId, cartForm.ProductId, token);
      setResponses(prev => ({ ...prev, clearCart: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, clearCart: { success: false, error: error.message } }));
    }
  };

  // Helper function to render form field
  const renderField = (label, value, onChange, type = 'text', required = false, placeholder = '') => (
    <div className="form-group">
      <label>{label} {required && '*'}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );

  return (
    <div className="api-testing-page">
      <div className="container">
        <div className="header">
          <h1>🛒 Cart APIs Testing</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
          </div>
        </div>

        <div className="forms-grid">
          {/* GET Cart */}
          <div className="form-section">
            <h2>GET /api/cart</h2>
            <p className="api-description">Get cart by cartKey and userId</p>
            <form onSubmit={handleGetCart}>
              {renderField('Cart Key', getCartForm.cartKey, (e) => setGetCartForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              {renderField('User ID', getCartForm.userId, (e) => setGetCartForm(prev => ({ ...prev, userId: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-primary">Get Cart</button>
            </form>
            {responses.getCart && (
              <div className={`response ${responses.getCart.success ? 'success' : 'error'}`}>
                {responses.getCart.success ? 'Success!' : `Error: ${responses.getCart.error}`}
                {responses.getCart.data && (
                  <pre className="response-data">{JSON.stringify(responses.getCart.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Cart */}
          <div className="form-section">
            <h2>POST /api/cart</h2>
            <p className="api-description">Add item to cart</p>
            <form onSubmit={handleAddToCart}>
              {renderField('ID', cartForm.Id, (e) => setCartForm(prev => ({ ...prev, Id: e.target.value })))}
              {renderField('User ID', cartForm.UserId, (e) => setCartForm(prev => ({ ...prev, UserId: e.target.value })), 'text', true)}
              {renderField('Cart Key', cartForm.CartKey, (e) => setCartForm(prev => ({ ...prev, CartKey: e.target.value })), 'text', true)}
              {renderField('User Name', cartForm.UserName, (e) => setCartForm(prev => ({ ...prev, UserName: e.target.value })), 'text', true)}
              {renderField('Product ID', cartForm.ProductId, (e) => setCartForm(prev => ({ ...prev, ProductId: e.target.value })), 'number', true)}
              {renderField('Quantity', cartForm.Quantity, (e) => setCartForm(prev => ({ ...prev, Quantity: e.target.value })), 'number', true)}
              <button type="submit" className="btn btn-primary">Add to Cart</button>
            </form>
            {responses.addToCart && (
              <div className={`response ${responses.addToCart.success ? 'success' : 'error'}`}>
                {responses.addToCart.success ? 'Success!' : `Error: ${responses.addToCart.error}`}
                {responses.addToCart.data && (
                  <pre className="response-data">{JSON.stringify(responses.addToCart.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Remove from Cart */}
          <div className="form-section">
            <h2>POST /api/cart/remove</h2>
            <p className="api-description">Remove item from cart</p>
            <form onSubmit={handleRemoveFromCart}>
              {renderField('Cart Key', getCartForm.cartKey, (e) => setGetCartForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              {renderField('User ID', getCartForm.userId, (e) => setGetCartForm(prev => ({ ...prev, userId: e.target.value })), 'text', true)}
              {renderField('Product ID', cartForm.ProductId, (e) => setCartForm(prev => ({ ...prev, ProductId: e.target.value })), 'number', true)}
              <button type="submit" className="btn btn-primary">Remove from Cart</button>
            </form>
            {responses.removeFromCart && (
              <div className={`response ${responses.removeFromCart.success ? 'success' : 'error'}`}>
                {responses.removeFromCart.success ? 'Success!' : `Error: ${responses.removeFromCart.error}`}
                {responses.removeFromCart.data && (
                  <pre className="response-data">{JSON.stringify(responses.removeFromCart.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Clear Cart */}
          <div className="form-section">
            <h2>POST /api/cart/clear</h2>
            <p className="api-description">Clear cart</p>
            <form onSubmit={handleClearCart}>
              {renderField('Cart Key', getCartForm.cartKey, (e) => setGetCartForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              {renderField('User ID', getCartForm.userId, (e) => setGetCartForm(prev => ({ ...prev, userId: e.target.value })), 'text', true)}
              {renderField('Product ID', cartForm.ProductId, (e) => setCartForm(prev => ({ ...prev, ProductId: e.target.value })), 'number', true)}
              <button type="submit" className="btn btn-primary">Clear Cart</button>
            </form>
            {responses.clearCart && (
              <div className={`response ${responses.clearCart.success ? 'success' : 'error'}`}>
                {responses.clearCart.success ? 'Success!' : `Error: ${responses.clearCart.error}`}
                {responses.clearCart.data && (
                  <pre className="response-data">{JSON.stringify(responses.clearCart.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAPIsPage; 