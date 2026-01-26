import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on init
        const savedCart = localStorage.getItem('nutriBomberCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('nutriBomberCart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item, restaurantInfo) => {
        setCartItems(prevItems => {
            // Check if item already exists
            const existingItemIndex = prevItems.findIndex(
                cartItem => cartItem.id === item.id
            );

            if (existingItemIndex > -1) {
                // Update quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            } else {
                // Add new item with restaurant info
                return [...prevItems, {
                    ...item,
                    quantity: 1,
                    restaurantId: restaurantInfo.id,
                    restaurantName: restaurantInfo.name
                }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        setIsCartOpen(false);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const getTaxAmount = () => {
        const subtotal = getCartTotal();
        return Math.round(subtotal * 0.05); // 5% tax
    };

    const getDeliveryFee = () => {
        // Get delivery fee from first item's restaurant (assuming single restaurant order)
        if (cartItems.length === 0) return 0;
        return 40; // Default delivery fee
    };

    const getGrandTotal = () => {
        return getCartTotal() + getTaxAmount() + getDeliveryFee();
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        getTaxAmount,
        getDeliveryFee,
        getGrandTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
