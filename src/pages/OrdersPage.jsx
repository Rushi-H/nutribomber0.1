import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Clock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './OrdersPage.css';

const OrdersPage = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('nutriBomberOrders') || '[]');
        setOrders(savedOrders);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed':
                return 'var(--success)';
            case 'preparing':
                return 'var(--warning)';
            case 'delivered':
                return 'var(--info)';
            default:
                return 'var(--text-secondary)';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'confirmed':
                return <CheckCircle size={20} />;
            case 'preparing':
                return <Clock size={20} />;
            case 'delivered':
                return <Package size={20} />;
            default:
                return <Package size={20} />;
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const toggleOrderExpansion = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    if (orders.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="empty-orders">
                    <div className="empty-icon">📦</div>
                    <h2>No orders yet</h2>
                    <p>When you place orders, they will appear here</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Start Ordering
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="orders-page">
            <div className="container">
                <h1 className="page-title">My Orders</h1>

                <div className="orders-list">
                    {orders.map((order) => (
                        <div key={order.id} className="order-card">
                            <div className="order-header" onClick={() => toggleOrderExpansion(order.id)}>
                                <div className="order-info">
                                    <div className="order-id">Order #{order.id}</div>
                                    <div className="order-date">{formatDate(order.timestamp)}</div>
                                </div>
                                <div className="order-status" style={{ color: getStatusColor(order.status) }}>
                                    {getStatusIcon(order.status)}
                                    <span className="status-text">{order.status.toUpperCase()}</span>
                                </div>
                                <div className="order-total">₹{order.total}</div>
                                <button className="expand-btn">
                                    {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                            </div>

                            {expandedOrder === order.id && (
                                <div className="order-details">
                                    <div className="order-items">
                                        <h4>Items</h4>
                                        {order.items.map((item) => (
                                            <div key={item.id} className="order-item">
                                                <div className="item-info">
                                                    <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                                                        <span className="veg-dot"></span>
                                                    </span>
                                                    <div>
                                                        <div className="item-name">{item.name}</div>
                                                        <div className="item-restaurant">{item.restaurantName}</div>
                                                    </div>
                                                </div>
                                                <div className="item-quantity">x{item.quantity}</div>
                                                <div className="item-price">₹{item.price * item.quantity}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="divider"></div>

                                    <div className="order-address">
                                        <h4>Delivery Address</h4>
                                        <p>
                                            <strong>{order.address.name}</strong><br />
                                            {order.address.phone}<br />
                                            {order.address.address}<br />
                                            {order.address.landmark && `${order.address.landmark}, `}
                                            {order.address.city} - {order.address.pincode}
                                        </p>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="order-payment">
                                        <h4>Payment Method</h4>
                                        <p className="payment-method-text">
                                            {order.paymentMethod === 'card' && '💳 Credit/Debit Card'}
                                            {order.paymentMethod === 'upi' && '📱 UPI'}
                                            {order.paymentMethod === 'cod' && '💵 Cash on Delivery'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
// srfsfsrfrg