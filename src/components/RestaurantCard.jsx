import { useNavigate } from 'react-router-dom';
import { Star, Clock, Bike } from 'lucide-react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/restaurant/${restaurant.id}`);
    };

    return (
        <div className="restaurant-card" onClick={handleClick}>
            <div className="restaurant-image-container">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="restaurant-image"
                    loading="lazy"
                />
                {restaurant.offer && (
                    <div className="restaurant-offer">
                        {restaurant.offer}
                    </div>
                )}
            </div>

            <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>

                <div className="restaurant-meta">
                    <div className="rating">
                        <Star size={14} fill="currentColor" />
                        <span>{restaurant.rating}</span>
                        <span className="reviews">({restaurant.reviews})</span>
                    </div>

                    <div className="restaurant-cuisine">
                        {restaurant.cuisine.join(', ')}
                    </div>
                </div>

                <div className="restaurant-details">
                    <div className="detail-item">
                        <Clock size={14} />
                        <span>{restaurant.deliveryTime} mins</span>
                    </div>
                    <div className="detail-item">
                        <Bike size={14} />
                        <span>₹{restaurant.deliveryCost}</span>
                    </div>
                    {restaurant.isVeg && (
                        <span className="badge badge-veg">Pure Veg</span>
                    )}
                </div>

                <div className="restaurant-location">
                    📍 {restaurant.location}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
