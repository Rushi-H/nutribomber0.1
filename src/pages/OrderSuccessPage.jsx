import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Package } from 'lucide-react';
import './OrderSuccessPage.css';

const OrderSuccessPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Confetti animation or celebration effect could be added here
    }, []);

    return (
        <div className="order-success-page">
            <div className="container">
                <div className="success-card">
                    <div className="success-icon">
                        <CheckCircle size={80} />
                    </div>

                    <h1 className="success-title">Order Placed Successfully!</h1>

                    <p className="success-message">
                        Your order has been confirmed and will be delivered soon.
                    </p>

                    <div className="order-id-display">
                        <span className="order-id-label">Order ID:</span>
                        <span className="order-id-value">{orderId}</span>
                    </div>

                    <div className="success-actions">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate('/orders')}
                        >
                            <Package size={20} />
                            View Orders
                        </button>
                        <button
                            className="btn btn-outline btn-lg"
                            onClick={() => navigate('/')}
                        >
                            <Home size={20} />
                            Back to Home
                        </button>
                    </div>

                    <div className="delivery-info">
                        <div className="info-item">
                            <div className="info-icon">🚚</div>
                            <div className="info-content">
                                <h4>Estimated Delivery</h4>
                                <p>30-40 minutes</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h4>Need Help?</h4>
                                <p>Contact Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
