import React, { useState } from 'react';
import { login } from '../../../api/Auth/Auth';
import CartAPIsPage from './cart-apis';
import CheckoutAPIsPage from './checkout-apis';
import GroupAPIsPage from './group-apis';
import ProductAPIsPage from './product-apis';
import CampaignAPIsPage from './campaign-apis';
import OrderAPIsPage from './order-apis';
import './style.css';

const APITestingPage = () => {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');
  const [loginData, setLoginData] = useState({
    email: 'bilaltest@gmail.com',
    password: 'Password@123'
  });

  // Response states
  const [responses, setResponses] = useState({});

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginData);
      if (response && response.data.token) {
        setToken(response.data.token);
        setIsLoggedIn(true);
        setResponses(prev => ({ ...prev, login: { success: true, data: response } }));
      }
    } catch (error) {
      setResponses(prev => ({ ...prev, login: { success: false, error: error.message } }));
    }
  };

  // Navigation function
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (!isLoggedIn) {
    return (
      <div className="api-testing-page">
        <div className="container">
          <h1>API Testing - Login Required</h1>
          <div className="login-form">
            <h2>Login to Test APIs</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {responses.login && (
              <div className={`response ${responses.login.success ? 'success' : 'error'}`}>
                {responses.login.success ? 'Login successful!' : `Error: ${responses.login.error}`}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Render different pages based on currentPage state
  if (currentPage === 'cart') {
    return <CartAPIsPage token={token} />;
  }

  if (currentPage === 'checkout') {
    return <CheckoutAPIsPage token={token} />;
  }

  if (currentPage === 'group') {
    return <GroupAPIsPage token={token} />;
  }

  if (currentPage === 'product') {
    return <ProductAPIsPage token={token} />;
  }

  if (currentPage === 'campaign') {
    return <CampaignAPIsPage token={token} />;
  }

  if (currentPage === 'order') {
    return <OrderAPIsPage token={token} />;
  }

  // Main navigation page
  return (
    <div className="api-testing-page">
      <div className="container">
        <div className="header">
          <h1>🧪 API Testing Dashboard</h1>
          <div className="token-info">
            <span>Token: {token.substring(0, 20)}...</span>
            <button onClick={() => { setIsLoggedIn(false); setToken(''); setCurrentPage('main'); }} className="btn btn-secondary">Logout</button>
          </div>
        </div>

        <div className="api-navigation">
          <h2>Select API Category to Test</h2>
          
          <div className="api-cards">
            <div className="api-card" onClick={() => navigateTo('cart')}>
              <div className="api-card-icon">🛒</div>
              <h3>Cart APIs</h3>
              <p>Test all cart-related operations including GET, POST, PUT, DELETE</p>
              <div className="api-endpoints">
                <span>GET /api/cart</span>
                <span>POST /api/cart</span>
                <span>POST /api/cart/remove</span>
                <span>POST /api/cart/clear</span>
              </div>
            </div>

            <div className="api-card" onClick={() => navigateTo('checkout')}>
              <div className="api-card-icon">💳</div>
              <h3>Checkout APIs</h3>
              <p>Test checkout operations and shipping address handling</p>
              <div className="api-endpoints">
                <span>GET /api/Checkout</span>
                <span>POST /api/checkout</span>
                <span>POST /api/Checkout/remove</span>
                <span>POST /api/Checkout/clear</span>
              </div>
            </div>

            <div className="api-card" onClick={() => navigateTo('group')}>
              <div className="api-card-icon">👥</div>
              <h3>Group APIs</h3>
              <p>Test complete CRUD operations for groups</p>
              <div className="api-endpoints">
                <span>GET /api/group</span>
                <span>POST /api/group</span>
                <span>GET /api/group/{'{id}'}</span>
                <span>PUT /api/group/{'{id}'}</span>
                <span>DELETE /api/group/{'{id}'}</span>
              </div>
            </div>

            <div className="api-card" onClick={() => navigateTo('product')}>
              <div className="api-card-icon">📦</div>
              <h3>Product APIs</h3>
              <p>Test product management with FormData support</p>
              <div className="api-endpoints">
                <span>GET /api/Product</span>
                <span>POST /api/Product</span>
                <span>GET /api/Product/{'{id}'}</span>
                <span>PUT /api/Product/{'{id}'}</span>
                <span>DELETE /api/Product/{'{id}'}</span>
              </div>
            </div>

            <div className="api-card" onClick={() => navigateTo('campaign')}>
              <div className="api-card-icon">🎯</div>
              <h3>Campaign APIs</h3>
              <p>Test campaign management with FormData support</p>
              <div className="api-endpoints">
                <span>GET /api/Compaign</span>
                <span>POST /api/Compaign</span>
                <span>GET /api/Compaig/{'{id}'}</span>
                <span>PUT /api/Compaig/{'{id}'}</span>
                <span>DELETE /api/Compaig/{'{id}'}</span>
              </div>
            </div>

            <div className="api-card" onClick={() => navigateTo('order')}>
              <div className="api-card-icon">📋</div>
              <h3>Order APIs</h3>
              <p>Test order creation and checkout sessions</p>
              <div className="api-endpoints">
                <span>POST /api/Order/create</span>
                <span>POST /api/Order/create-checkout-session</span>
              </div>
            </div>
          </div>

          <div className="navigation-info">
            <p>Click on any API category to start testing. Each page includes all available HTTP methods (GET, POST, PUT, DELETE) for that API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APITestingPage; 