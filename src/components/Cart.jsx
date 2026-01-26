import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        getTaxAmount,
        getDeliveryFee,
        getGrandTotal
    } = useCart();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div className="overlay" onClick={() => setIsCartOpen(false)} />
            <div className="cart-drawer">
                <div className="cart-header">
                    <div className="cart-title">
                        <ShoppingBag size={24} />
                        <h2>Your Cart</h2>
                        <span className="cart-count">({cartItems.length})</span>
                    </div>
                    <button className="cart-close" onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <div className="empty-icon">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p>Add items from restaurants to get started</p>
                        <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                            Browse Restaurants
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <div className="cart-item-header">
                                            <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                                                <span className="veg-dot"></span>
                                            </span>
                                            <h4 className="cart-item-name">{item.name}</h4>
                                        </div>
                                        <p className="cart-item-restaurant">{item.restaurantName}</p>
                                        <div className="cart-item-price">₹{item.price}</div>
                                    </div>

                                    <div className="cart-item-actions">
                                        <div className="quantity-controls">
                                            <button
                                                className="quantity-btn"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="quantity-value">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                            title="Remove item"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{getCartTotal()}</span>
                            </div>
                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <span>₹{getDeliveryFee()}</span>
                            </div>
                            <div className="summary-row">
                                <span>Taxes & Charges</span>
                                <span>₹{getTaxAmount()}</span>
                            </div>
                            <div className="divider"></div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>₹{getGrandTotal()}</span>
                            </div>
                        </div>

                        <div className="cart-footer">
                            <button className="btn btn-primary btn-lg" onClick={handleCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
