import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User as UserIcon, Mail, Phone, Edit2, Save, LogOut, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './ProfilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, logout, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        updateProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            name: user?.name || '',
            phone: user?.phone || ''
        });
        setIsEditing(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) {
        return null;
    }

    return (
        <div className="profile-page">
            <div className="container">
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <UserIcon size={48} />
                        </div>
                        <h1>My Profile</h1>
                    </div>

                    <div className="profile-card">
                        <div className="profile-section">
                            <div className="section-header">
                                <h2>Personal Information</h2>
                                {!isEditing ? (
                                    <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(true)}>
                                        <Edit2 size={16} />
                                        Edit
                                    </button>
                                ) : (
                                    <div className="edit-actions">
                                        <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
                                            Cancel
                                        </button>
                                        <button className="btn btn-primary btn-sm" onClick={handleSave}>
                                            <Save size={16} />
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="profile-info">
                                <div className="info-item">
                                    <label>
                                        <UserIcon size={20} />
                                        Full Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input"
                                        />
                                    ) : (
                                        <p>{user.name}</p>
                                    )}
                                </div>

                                <div className="info-item">
                                    <label>
                                        <Mail size={20} />
                                        Email Address
                                    </label>
                                    <p>{user.email}</p>
                                    <span className="info-note">Email cannot be changed</span>
                                </div>

                                <div className="info-item">
                                    <label>
                                        <Phone size={20} />
                                        Phone Number
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input"
                                            maxLength="10"
                                        />
                                    ) : (
                                        <p>{user.phone}</p>
                                    )}
                                </div>

                                <div className="info-item">
                                    <label>Member Since</label>
                                    <p>{new Date(user.createdAt).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}</p>
                                </div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="profile-actions">
                            <button
                                className="btn btn-outline btn-lg"
                                onClick={() => navigate('/orders')}
                            >
                                <Package size={20} />
                                View Order History
                            </button>

                            <button
                                className="btn btn-secondary btn-lg logout-btn"
                                onClick={handleLogout}
                            >
                                <LogOut size={20} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
