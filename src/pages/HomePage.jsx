import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants, categories, offers } from '../data/mockData';
import './HomePage.css';

const HomePage = () => {
    const [searchParams] = useSearchParams();
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [sortBy, setSortBy] = useState('rating');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        let filtered = [...restaurants];

        // Search filter
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (restaurant) =>
                    restaurant.name.toLowerCase().includes(query) ||
                    restaurant.cuisine.some((c) => c.toLowerCase().includes(query))
            );
        }

        // Cuisine filter
        if (selectedCuisines.length > 0) {
            filtered = filtered.filter((restaurant) =>
                restaurant.cuisine.some((c) => selectedCuisines.includes(c))
            );
        }

        // Rating filter
        if (selectedRating > 0) {
            filtered = filtered.filter((restaurant) => restaurant.rating >= selectedRating);
        }

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'deliveryTime':
                    return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
                case 'deliveryCost':
                    return a.deliveryCost - b.deliveryCost;
                default:
                    return 0;
            }
        });

        setFilteredRestaurants(filtered);
    }, [searchParams, selectedCuisines, selectedRating, sortBy]);

    const toggleCuisine = (cuisine) => {
        setSelectedCuisines((prev) =>
            prev.includes(cuisine)
                ? prev.filter((c) => c !== cuisine)
                : [...prev, cuisine]
        );
    };

    const clearFilters = () => {
        setSelectedCuisines([]);
        setSelectedRating(0);
        setSortBy('rating');
    };

    const allCuisines = [...new Set(restaurants.flatMap((r) => r.cuisine))];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">
                        Order Food <span className="text-gradient">Online</span>
                    </h1>
                    <p className="hero-subtitle">
                        Discover the best food & drinks in Bangalore
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <div className="container">
                    <h2 className="section-title">What's on your mind?</h2>
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <div key={category.id} className="category-card">
                                <div
                                    className="category-icon"
                                    style={{ background: `${category.color}20`, color: category.color }}
                                >
                                    {category.icon}
                                </div>
                                <span className="category-name">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offers */}
            <section className="offers-section">
                <div className="container">
                    <h2 className="section-title">Top Offers for You</h2>
                    <div className="offers-grid">
                        {offers.map((offer) => (
                            <div key={offer.id} className="offer-card">
                                <img src={offer.image} alt={offer.title} className="offer-image" />
                                <div className="offer-content">
                                    <h3 className="offer-title">{offer.title}</h3>
                                    <p className="offer-description">{offer.description}</p>
                                    <div className="offer-code">Code: {offer.code}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Restaurants */}
            <section className="restaurants-section">
                <div className="container">
                    <div className="restaurants-header">
                        <h2 className="section-title">
                            Restaurants ({filteredRestaurants.length})
                        </h2>
                        <button
                            className="filter-toggle"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter size={20} />
                            Filters
                        </button>
                    </div>

                    {/* Filters */}
                    {showFilters && (
                        <div className="filters-panel">
                            <div className="filter-group">
                                <h4>Sort By</h4>
                                <div className="filter-options">
                                    <button
                                        className={`filter-btn ${sortBy === 'rating' ? 'active' : ''}`}
                                        onClick={() => setSortBy('rating')}
                                    >
                                        Rating
                                    </button>
                                    <button
                                        className={`filter-btn ${sortBy === 'deliveryTime' ? 'active' : ''}`}
                                        onClick={() => setSortBy('deliveryTime')}
                                    >
                                        Delivery Time
                                    </button>
                                    <button
                                        className={`filter-btn ${sortBy === 'deliveryCost' ? 'active' : ''}`}
                                        onClick={() => setSortBy('deliveryCost')}
                                    >
                                        Cost
                                    </button>
                                </div>
                            </div>

                            <div className="filter-group">
                                <h4>Minimum Rating</h4>
                                <div className="filter-options">
                                    {[4.5, 4.0, 3.5].map((rating) => (
                                        <button
                                            key={rating}
                                            className={`filter-btn ${selectedRating === rating ? 'active' : ''}`}
                                            onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                                        >
                                            {rating}+ ⭐
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="filter-group">
                                <h4>Cuisines</h4>
                                <div className="filter-options cuisine-options">
                                    {allCuisines.map((cuisine) => (
                                        <button
                                            key={cuisine}
                                            className={`filter-btn ${selectedCuisines.includes(cuisine) ? 'active' : ''}`}
                                            onClick={() => toggleCuisine(cuisine)}
                                        >
                                            {cuisine}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {(selectedCuisines.length > 0 || selectedRating > 0) && (
                                <button className="clear-filters-btn" onClick={clearFilters}>
                                    <X size={16} />
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    )}

                    {/* Restaurant Grid */}
                    {filteredRestaurants.length > 0 ? (
                        <div className="restaurants-grid">
                            {filteredRestaurants.map((restaurant) => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <h3>No restaurants found</h3>
                            <p>Try adjusting your filters or search query</p>
                            <button className="btn btn-primary" onClick={clearFilters}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
