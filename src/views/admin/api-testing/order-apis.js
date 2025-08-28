import React, { useState } from 'react';
import { createOrder, createCheckoutSession } from '../../../api/Order/Order';
import './style.css';

const OrderAPIsPage = ({ token }) => {
  const [orderForm, setOrderForm] = useState({
    userId: '',
    cartKey: '',
    shippingAddress: {
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    }
  });

  const [responses, setResponses] = useState({});

  // Handle form submissions
  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await createOrder(orderForm, token);
      setResponses(prev => ({ ...prev, createOrder: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, createOrder: { success: false, error: error.message } }));
    }
  };

  const handleCreateCheckoutSession = async (e) => {
    e.preventDefault();
    try {
      const response = await createCheckoutSession(orderForm, token);
      setResponses(prev => ({ ...prev, createCheckoutSession: { success: true, data: response.data } }));
    } catch (error) {
      setResponses(prev => ({ ...prev, createCheckoutSession: { success: false, error: error.message } }));
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
          <h1>📋 Order APIs Testing</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
            <button onClick={() => window.history.back()} className="btn btn-secondary">Back to Dashboard</button>
          </div>
        </div>

        <div className="forms-grid">
          {/* POST Create Order */}
          <div className="form-section">
            <h2>POST /api/Order/create</h2>
            <p className="api-description">Create new order</p>
            <form onSubmit={handleCreateOrder}>
              {renderField('User ID', orderForm.userId, (e) => setOrderForm(prev => ({ ...prev, userId: e.target.value })), 'text', true)}
              {renderField('Cart Key', orderForm.cartKey, (e) => setOrderForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              
              <h4>Shipping Address</h4>
              {renderField('Full Name', orderForm.shippingAddress.fullName, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, fullName: e.target.value } })), 'text', true)}
              {renderField('Address Line 1', orderForm.shippingAddress.addressLine1, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, addressLine1: e.target.value } })), 'text', true)}
              {renderField('Address Line 2', orderForm.shippingAddress.addressLine2, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, addressLine2: e.target.value } })))}
              {renderField('City', orderForm.shippingAddress.city, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, city: e.target.value } })), 'text', true)}
              {renderField('State', orderForm.shippingAddress.state, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, state: e.target.value } })), 'text', true)}
              {renderField('Postal Code', orderForm.shippingAddress.postalCode, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, postalCode: e.target.value } })), 'text', true)}
              {renderField('Country', orderForm.shippingAddress.country, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, country: e.target.value } })), 'text', true)}
              
              <button type="submit" className="btn btn-primary">Create Order</button>
            </form>
            {responses.createOrder && (
              <div className={`response ${responses.createOrder.success ? 'success' : 'error'}`}>
                {responses.createOrder.success ? 'Success!' : `Error: ${responses.createOrder.error}`}
                {responses.createOrder.data && (
                  <pre className="response-data">{JSON.stringify(responses.createOrder.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>

          {/* POST Create Checkout Session */}
          <div className="form-section">
            <h2>POST /api/Order/create-checkout-session</h2>
            <p className="api-description">Create checkout session</p>
            <form onSubmit={handleCreateCheckoutSession}>
              {renderField('User ID', orderForm.userId, (e) => setOrderForm(prev => ({ ...prev, userId: e.target.value })), 'text', true)}
              {renderField('Cart Key', orderForm.cartKey, (e) => setOrderForm(prev => ({ ...prev, cartKey: e.target.value })), 'text', true)}
              
              <h4>Shipping Address</h4>
              {renderField('Full Name', orderForm.shippingAddress.fullName, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, fullName: e.target.value } })), 'text', true)}
              {renderField('Address Line 1', orderForm.shippingAddress.addressLine1, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, addressLine1: e.target.value } })), 'text', true)}
              {renderField('Address Line 2', orderForm.shippingAddress.addressLine2, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, addressLine2: e.target.value } })))}
              {renderField('City', orderForm.shippingAddress.city, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, city: e.target.value } })), 'text', true)}
              {renderField('State', orderForm.shippingAddress.state, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, state: e.target.value } })), 'text', true)}
              {renderField('Postal Code', orderForm.shippingAddress.postalCode, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, postalCode: e.target.value } })), 'text', true)}
              {renderField('Country', orderForm.shippingAddress.country, (e) => setOrderForm(prev => ({ ...prev, shippingAddress: { ...prev.shippingAddress, country: e.target.value } })), 'text', true)}
              
              <button type="submit" className="btn btn-primary">Create Checkout Session</button>
            </form>
            {responses.createCheckoutSession && (
              <div className={`response ${responses.createCheckoutSession.success ? 'success' : 'error'}`}>
                {responses.createCheckoutSession.success ? 'Success!' : `Error: ${responses.createCheckoutSession.error}`}
                {responses.createCheckoutSession.data && (
                  <pre className="response-data">{JSON.stringify(responses.createCheckoutSession.data, null, 2)}</pre>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderAPIsPage; 