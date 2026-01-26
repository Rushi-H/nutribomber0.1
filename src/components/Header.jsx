import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ShoppingCart, User, Menu, X, LogIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { getCartCount, setIsCartOpen } = useCart();
    const { user, isAuthenticated } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/?search=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    const cartCount = getCartCount();

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <span className="logo-icon">🍔</span>
                        <span className="logo-text">
                            Nutri <span className="text-gradient">Bomber</span>
                        </span>
                    </Link>

                    {/* Location */}
                    <div className="location-selector">
                        <MapPin size={20} />
                        <div className="location-text">
                            <span className="location-label">Deliver to</span>
                            <span className="location-value">Bangalore</span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <form className="search-bar" onSubmit={handleSearch}>
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for restaurants or dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </form>

                    {/* Desktop Navigation */}
                    <nav className="nav-links">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        {isAuthenticated && (
                            <Link to="/orders" className="nav-link">
                                Orders
                            </Link>
                        )}
                        <button
                            className="nav-link cart-button"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart size={20} />
                            Cart
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>
                        {isAuthenticated ? (
                            <Link to="/profile" className="nav-link profile-link">
                                <User size={20} />
                                {user?.name?.split(' ')[0] || 'Profile'}
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link">
                                    <LogIn size={20} />
                                    Login
                                </Link>
                                <Link to="/signup" className="nav-link signup-link">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Search */}
                <form className="mobile-search" onSubmit={handleSearch}>
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search restaurants or dishes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </form>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <Link to="/" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                        {isAuthenticated && (
                            <Link to="/orders" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
                                Orders
                            </Link>
                        )}
                        <button
                            className="mobile-menu-link"
                            onClick={() => {
                                setIsCartOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            <ShoppingCart size={18} />
                            Cart {cartCount > 0 && `(${cartCount})`}
                        </button>
                        {isAuthenticated ? (
                            <Link to="/profile" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
                                <User size={18} />
                                {user?.name || 'Profile'}
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
                                    <LogIn size={18} />
                                    Login
                                </Link>
                                <Link to="/signup" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
