import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Wallet, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const {
        cartItems,
        getCartTotal,
        getTaxAmount,
        getDeliveryFee,
        getGrandTotal,
        clearCart
    } = useCart();

    const [deliveryAddress, setDeliveryAddress] = useState({
        name: '',
        phone: '',
        address: '',
        landmark: '',
        city: 'Bangalore',
        pincode: ''
    });

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        setDeliveryAddress({
            ...deliveryAddress,
            [e.target.name]: e.target.value
        });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // Validate form
        if (!deliveryAddress.name || !deliveryAddress.phone || !deliveryAddress.address || !deliveryAddress.pincode) {
            alert('Please fill in all required fields');
            return;
        }

        setIsProcessing(true);

        // Simulate order processing
        setTimeout(() => {
            const orderId = 'NB' + Date.now();

            // Save order to localStorage
            const orders = JSON.parse(localStorage.getItem('nutriBomberOrders') || '[]');
            orders.unshift({
                id: orderId,
                items: cartItems,
                address: deliveryAddress,
                paymentMethod,
                total: getGrandTotal(),
                status: 'confirmed',
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('nutriBomberOrders', JSON.stringify(orders));

            clearCart();
            setIsProcessing(false);
            navigate(`/order-success/${orderId}`);
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Your cart is empty</h2>
                <p>Add items to your cart before checkout</p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Browse Restaurants
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h1 className="page-title">Checkout</h1>

                <div className="checkout-grid">
                    {/* Left Column - Forms */}
                    <div className="checkout-forms">
                        {/* Delivery Address */}
                        <div className="checkout-section">
                            <div className="section-header">
                                <MapPin size={24} />
                                <h2>Delivery Address</h2>
                            </div>
                            <form className="address-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={deliveryAddress.name}
                                            onChange={handleInputChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={deliveryAddress.phone}
                                            onChange={handleInputChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address *</label>
                                    <textarea
                                        name="address"
                                        value={deliveryAddress.address}
                                        onChange={handleInputChange}
                                        className="input"
                                        rows="3"
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Landmark</label>
                                        <input
                                            type="text"
                                            name="landmark"
                                            value={deliveryAddress.landmark}
                                            onChange={handleInputChange}
                                            className="input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Pincode *</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={deliveryAddress.pincode}
                                            onChange={handleInputChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Payment Method */}
                        <div className="checkout-section">
                            <div className="section-header">
                                <CreditCard size={24} />
                                <h2>Payment Method</h2>
                            </div>
                            <div className="payment-methods">
                                <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <CreditCard size={20} />
                                    <span>Credit/Debit Card</span>
                                </label>
                                <label className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="upi"
                                        checked={paymentMethod === 'upi'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <Wallet size={20} />
                                    <span>UPI</span>
                                </label>
                                <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <CheckCircle size={20} />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="order-summary-section">
                        <div className="order-summary-card">
                            <h2>Order Summary</h2>

                            <div className="order-items">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="summary-item">
                                        <div className="item-details">
                                            <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                                                <span className="veg-dot"></span>
                                            </span>
                                            <div>
                                                <div className="item-name">{item.name}</div>
                                                <div className="item-quantity">Qty: {item.quantity}</div>
                                            </div>
                                        </div>
                                        <div className="item-price">₹{item.price * item.quantity}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="divider"></div>

                            <div className="price-breakdown">
                                <div className="price-row">
                                    <span>Subtotal</span>
                                    <span>₹{getCartTotal()}</span>
                                </div>
                                <div className="price-row">
                                    <span>Delivery Fee</span>
                                    <span>₹{getDeliveryFee()}</span>
                                </div>
                                <div className="price-row">
                                    <span>Taxes & Charges</span>
                                    <span>₹{getTaxAmount()}</span>
                                </div>
                                <div className="divider"></div>
                                <div className="price-row total">
                                    <span>Total</span>
                                    <span>₹{getGrandTotal()}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary btn-lg place-order-btn"
                                onClick={handlePlaceOrder}
                                disabled={isProcessing}
                            >
                                {isProcessing ? (
                                    <>
                                        <span className="spin">⏳</span>
                                        Processing...
                                    </>
                                ) : (
                                    'Place Order'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
