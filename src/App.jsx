import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Header />
            <Cart />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurant/:id" element={<RestaurantPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/checkout" element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                } />
                <Route path="/orders" element={
                  <ProtectedRoute>
                    <OrdersPage />
                  </ProtectedRoute>
                } />
                <Route path="/order-success/:orderId" element={
                  <ProtectedRoute>
                    <OrderSuccessPage />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <footer className="footer">
              <div className="container">
                <div className="footer-content">
                  <div className="footer-section">
                    <h3 className="footer-title">
                      <span className="logo-icon">🍔</span>
                      Nutri <span className="text-gradient">Bomber</span>
                    </h3>
                    <p className="footer-description">
                      Your favorite food, delivered fast and fresh.
                    </p>
                  </div>
                  <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                      <li><a href="/">Home</a></li>
                      <li><a href="/orders">Orders</a></li>
                      <li><a href="/profile">Profile</a></li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h4>Support</h4>
                    <ul className="footer-links">
                      <li><a href="#help">Help Center</a></li>
                      <li><a href="#contact">Contact Us</a></li>
                      <li><a href="#terms">Terms of Service</a></li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                      <a href="#facebook" className="social-link">📘</a>
                      <a href="#instagram" className="social-link">📷</a>
                      <a href="#twitter" className="social-link">🐦</a>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>&copy; 2024 Nutri Bomber. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
