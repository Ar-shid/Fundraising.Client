import React, { useState } from 'react';
import { getCheckout, processCheckout, removeFromCheckout, clearCheckout } from '../../../api/Checkout/Checkout';
import './style.css';

const CheckoutAPIsPage = ({ token }) => {
  const [checkoutForm, setCheckoutForm] = useState({
    Id: '1',
    UserId: 'user123',
    CartKey: 'cart_key_123',
    UserName: 'Test User',
    ProductId: '1',
    Quantity: '2',
    CartItems: [
      { productId: 1, quantity: 2, price: 29.99 },
      { productId: 3, quantity: 1, price: 19.99 }
    ]
  });

  const [getCheckoutForm, setGetCheckoutForm] = useState({
    cartKey: ''
  });

  const [responses, setResponses] = useState({});

  // Handle form submissions
  const handleProcessCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await processCheckout(checkoutForm, token);
      setResponses(prev => ({ ...prev, processCheckout: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, processCheckout: { success: false, error: error.message } }));
    }
  };

  const handleGetCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await getCheckout(getCheckoutForm.cartKey, token);
      setResponses(prev => ({ ...prev, getCheckout: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, getCheckout: { success: false, error: error.message } }));
    }
  };

  const handleRemoveFromCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await removeFromCheckout(getCheckoutForm.cartKey, checkoutForm.ProductId, token);
      setResponses(prev => ({ ...prev, removeFromCheckout: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, removeFromCheckout: { success: false, error: error.message } }));
    }
  };

  const handleClearCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await clearCheckout(getCheckoutForm.cartKey, token);
      setResponses(prev => ({ ...prev, clearCheckout: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, clearCheckout: { success: false, error: error.message } }));
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
          <h1>💳 Checkout APIs Testing</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
          </div>
        </div>

        <div className="forms-grid">
          {/* GET Checkout */}
          <div className="form-section">
            <h2>GET /api/Checkout</h2>
            <p className="api-description">Get checkout by cartKey</p>
            <form onSubmit={handleGetCheckout}>
              {renderField('Cart Key', getCheckoutForm.cartKey, (e) => setGetCheckoutForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-primary">Get Checkout</button>
            </form>
            {responses.getCheckout && (
              <div className={`response ${responses.getCheckout.success ? 'success' : 'error'}`}>
                {responses.getCheckout.success ? 'Success!' : `Error: ${responses.getCheckout.error}`}
                {responses.getCheckout.data && (
                  <pre className="response-data">{JSON.stringify(responses.getCheckout.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Checkout */}
          <div className="form-section">
            <h2>POST /api/checkout</h2>
            <p className="api-description">Process checkout with required fields only</p>
            <form onSubmit={handleProcessCheckout}>
              {renderField('ID', checkoutForm.Id, (e) => setCheckoutForm(prev => ({ ...prev, Id: parseInt(e.target.value) })), 'number', true)}
              {renderField('User ID', checkoutForm.UserId, (e) => setCheckoutForm(prev => ({ ...prev, UserId: e.target.value })), 'text', true)}
              {renderField('Cart Key', checkoutForm.CartKey, (e) => setCheckoutForm(prev => ({ ...prev, CartKey: e.target.value })), 'text', true)}
              {renderField('User Name', checkoutForm.UserName, (e) => setCheckoutForm(prev => ({ ...prev, UserName: e.target.value })), 'text', true)}
              {renderField('Product ID', checkoutForm.ProductId, (e) => setCheckoutForm(prev => ({ ...prev, ProductId: parseInt(e.target.value) })), 'number', true)}
              {renderField('Quantity', checkoutForm.Quantity, (e) => setCheckoutForm(prev => ({ ...prev, Quantity: parseInt(e.target.value) })), 'number', true)}
              
              <div className="form-group">
                <label>Cart Items (JSON array)</label>
                <textarea
                  value={JSON.stringify(checkoutForm.CartItems, null, 2)}
                  onChange={(e) => {
                    try {
                      const parsed = JSON.parse(e.target.value);
                      setCheckoutForm(prev => ({ ...prev, CartItems: parsed }));
                    } catch (error) {
                      // Keep the current value if parsing fails
                    }
                  }}
                  className="form-control"
                  rows="3"
                  placeholder='[{"productId": 1, "quantity": 2}, {"productId": 3, "quantity": 1}]'
                />
                <small className="form-text">Enter cart items as a JSON array</small>
              </div>
              
              <button type="submit" className="btn btn-primary">Process Checkout</button>
            </form>
            {responses.processCheckout && (
              <div className={`response ${responses.processCheckout.success ? 'success' : 'error'}`}>
                {responses.processCheckout.success ? 'Success!' : `Error: ${responses.processCheckout.error}`}
                {responses.processCheckout.data && (
                  <pre className="response-data">{JSON.stringify(responses.processCheckout.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Remove from Checkout */}
          <div className="form-section">
            <h2>POST /api/Checkout/remove</h2>
            <p className="api-description">Remove item from checkout</p>
            <form onSubmit={handleRemoveFromCheckout}>
              {renderField('Cart Key', getCheckoutForm.cartKey, (e) => setGetCheckoutForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              {renderField('Product ID', checkoutForm.ProductId, (e) => setCheckoutForm(prev => ({ ...prev, ProductId: parseInt(e.target.value) })), 'number', true)}
              <button type="submit" className="btn btn-primary">Remove from Checkout</button>
            </form>
            {responses.removeFromCheckout && (
              <div className={`response ${responses.removeFromCheckout.success ? 'success' : 'error'}`}>
                {responses.removeFromCheckout.success ? 'Success!' : `Error: ${responses.removeFromCheckout.error}`}
                {responses.removeFromCheckout.data && (
                  <pre className="response-data">{JSON.stringify(responses.removeFromCheckout.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Clear Checkout */}
          <div className="form-section">
            <h2>POST /api/Checkout/clear</h2>
            <p className="api-description">Clear checkout</p>
            <form onSubmit={handleClearCheckout}>
              {renderField('Cart Key', getCheckoutForm.cartKey, (e) => setGetCheckoutForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              <button type="submit" className="btn btn-primary">Clear Checkout</button>
            </form>
            {responses.clearCheckout && (
              <div className={`response ${responses.clearCheckout.success ? 'success' : 'error'}`}>
                {responses.clearCheckout.success ? 'Success!' : `Error: ${responses.clearCheckout.error}`}
                {responses.clearCheckout.data && (
                  <pre className="response-data">{JSON.stringify(responses.clearCheckout.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAPIsPage; 