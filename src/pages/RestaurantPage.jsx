import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Bike, MapPin } from 'lucide-react';
import FoodItemCard from '../components/FoodItemCard';
import { restaurants, menuItems } from '../data/mockData';
import './RestaurantPage.css';

const RestaurantPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const restaurant = restaurants.find((r) => r.id === parseInt(id));
    const menu = menuItems[parseInt(id)] || [];

    if (!restaurant) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Restaurant not found</h2>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        );
    }

    // Group menu items by category
    const menuByCategory = menu.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="restaurant-page">
            {/* Back Button */}
            <div className="container">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    Back
                </button>
            </div>

            {/* Restaurant Header */}
            <div className="restaurant-header">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="restaurant-banner"
                />
                <div className="restaurant-header-overlay">
                    <div className="container">
                        <div className="restaurant-header-content">
                            <div>
                                <h1 className="restaurant-title">{restaurant.name}</h1>
                                <p className="restaurant-description">{restaurant.description}</p>
                                <div className="restaurant-cuisines">
                                    {restaurant.cuisine.join(' • ')}
                                </div>
                                <div className="restaurant-location-info">
                                    <MapPin size={16} />
                                    {restaurant.location}
                                </div>
                            </div>
                            <div className="restaurant-stats">
                                <div className="stat-card">
                                    <div className="rating-large">
                                        <Star size={20} fill="currentColor" />
                                        <span>{restaurant.rating}</span>
                                    </div>
                                    <div className="stat-label">{restaurant.reviews} reviews</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">
                                        <Clock size={20} />
                                        {restaurant.deliveryTime} mins
                                    </div>
                                    <div className="stat-label">Delivery Time</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">
                                        <Bike size={20} />
                                        ₹{restaurant.deliveryCost}
                                    </div>
                                    <div className="stat-label">Delivery Fee</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offer Banner */}
            {restaurant.offer && (
                <div className="offer-banner">
                    <div className="container">
                        <div className="offer-banner-content">
                            <span className="offer-icon">🎉</span>
                            <span className="offer-text">{restaurant.offer}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu */}
            <div className="restaurant-menu">
                <div className="container">
                    <h2 className="menu-title">Menu</h2>

                    {Object.entries(menuByCategory).map(([category, items]) => (
                        <div key={category} className="menu-category">
                            <h3 className="category-title">{category}</h3>
                            <div className="menu-items">
                                {items.map((item) => (
                                    <FoodItemCard
                                        key={item.id}
                                        item={item}
                                        restaurantInfo={restaurant}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}

                    {menu.length === 0 && (
                        <div className="no-menu">
                            <p>No menu items available for this restaurant.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;
