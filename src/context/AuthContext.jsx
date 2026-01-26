import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem('nutriBomberUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    // Save user to localStorage whenever it changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('nutriBomberUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('nutriBomberUser');
        }
    }, [user]);

    const signup = (userData) => {
        // Get existing users or initialize empty array
        const users = JSON.parse(localStorage.getItem('nutriBomberUsers') || '[]');

        // Check if email already exists
        if (users.some(u => u.email === userData.email)) {
            throw new Error('Email already registered');
        }

        // Create new user
        const newUser = {
            id: 'U' + Date.now(),
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            createdAt: new Date().toISOString()
        };

        // Save to users list
        users.push({ ...newUser, password: userData.password });
        localStorage.setItem('nutriBomberUsers', JSON.stringify(users));

        // Set as current user (without password)
        setUser(newUser);
        return newUser;
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('nutriBomberUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Set current user (without password)
        const { password: _, ...userWithoutPassword } = user;
        setUser(userWithoutPassword);
        return userWithoutPassword;
    };

    const logout = () => {
        setUser(null);
    };

    const updateProfile = (updates) => {
        const updatedUser = { ...user, ...updates };

        // Update in users list
        const users = JSON.parse(localStorage.getItem('nutriBomberUsers') || '[]');
        const userIndex = users.findIndex(u => u.id === user.id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updates };
            localStorage.setItem('nutriBomberUsers', JSON.stringify(users));
        }

        setUser(updatedUser);
        return updatedUser;
    };

    const value = {
        user,
        loading,
        signup,
        login,
        logout,
        updateProfile,
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
