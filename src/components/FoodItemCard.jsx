import { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './FoodItemCard.css';

const FoodItemCard = ({ item, restaurantInfo }) => {
    const { addToCart, cartItems, updateQuantity } = useCart();
    const [imageError, setImageError] = useState(false);

    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem?.quantity || 0;

    const handleAdd = () => {
        addToCart(item, restaurantInfo);
    };

    const handleIncrement = () => {
        updateQuantity(item.id, quantity + 1);
    };

    const handleDecrement = () => {
        updateQuantity(item.id, quantity - 1);
    };

    return (
        <div className="food-item-card">
            <div className="food-item-content">
                <div className="food-item-details">
                    <div className="food-item-header">
                        <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                            <span className="veg-dot"></span>
                        </span>
                        {item.bestseller && (
                            <span className="bestseller-badge">⭐ Bestseller</span>
                        )}
                    </div>

                    <h4 className="food-item-name">{item.name}</h4>

                    <div className="food-item-price">₹{item.price}</div>

                    {item.rating && (
                        <div className="food-item-rating">
                            <Star size={12} fill="currentColor" />
                            <span>{item.rating}</span>
                        </div>
                    )}

                    <p className="food-item-description">{item.description}</p>
                </div>

                <div className="food-item-image-section">
                    {!imageError ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="food-item-image"
                            loading="lazy"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="food-item-image-placeholder">
                            {item.isVeg ? '🥗' : '🍖'}
                        </div>
                    )}

                    <div className="food-item-actions">
                        {quantity === 0 ? (
                            <button className="btn-add" onClick={handleAdd}>
                                <Plus size={18} />
                                Add
                            </button>
                        ) : (
                            <div className="quantity-controls">
                                <button className="quantity-btn" onClick={handleDecrement}>
                                    <Minus size={16} />
                                </button>
                                <span className="quantity-value">{quantity}</span>
                                <button className="quantity-btn" onClick={handleIncrement}>
                                    <Plus size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItemCard;
