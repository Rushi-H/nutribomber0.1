// Mock data for Nutri Bomber app

export const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', color: '#ff6b35' },
    { id: 2, name: 'Burger', icon: '🍔', color: '#f7b731' },
    { id: 3, name: 'Sushi', icon: '🍣', color: '#4ecdc4' },
    { id: 4, name: 'Indian', icon: '🍛', color: '#e74c3c' },
    { id: 5, name: 'Chinese', icon: '🥡', color: '#9b59b6' },
    { id: 6, name: 'Desserts', icon: '🍰', color: '#e67e22' },
    { id: 7, name: 'Healthy', icon: '🥗', color: '#2ecc71' },
    { id: 8, name: 'Beverages', icon: '🥤', color: '#3498db' },
];

export const restaurants = [
    {
        id: 1,
        name: 'Pizza Paradise',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
        cuisine: ['Italian', 'Pizza'],
        rating: 4.5,
        reviews: 1250,
        deliveryTime: '30-35',
        deliveryCost: 40,
        offer: '50% OFF up to ₹100',
        isVeg: false,
        location: 'Koramangala',
        description: 'Authentic Italian pizzas with fresh ingredients'
    },
    {
        id: 2,
        name: 'Burger King',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
        cuisine: ['American', 'Burgers'],
        rating: 4.3,
        reviews: 2100,
        deliveryTime: '25-30',
        deliveryCost: 30,
        offer: '20% OFF',
        isVeg: false,
        location: 'Indiranagar',
        description: 'Flame-grilled burgers and crispy fries'
    },
    {
        id: 3,
        name: 'Sushi Station',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
        cuisine: ['Japanese', 'Sushi'],
        rating: 4.7,
        reviews: 890,
        deliveryTime: '40-45',
        deliveryCost: 60,
        offer: 'Free Delivery',
        isVeg: false,
        location: 'Whitefield',
        description: 'Fresh sushi and authentic Japanese cuisine'
    },
    {
        id: 4,
        name: 'Spice Garden',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
        cuisine: ['Indian', 'North Indian'],
        rating: 4.6,
        reviews: 1580,
        deliveryTime: '35-40',
        deliveryCost: 35,
        offer: '30% OFF up to ₹150',
        isVeg: true,
        location: 'HSR Layout',
        description: 'Traditional Indian flavors with modern twist'
    },
    {
        id: 5,
        name: 'Wok This Way',
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80',
        cuisine: ['Chinese', 'Asian'],
        rating: 4.4,
        reviews: 1120,
        deliveryTime: '30-35',
        deliveryCost: 40,
        offer: '25% OFF',
        isVeg: false,
        location: 'Marathahalli',
        description: 'Authentic Chinese wok-tossed delicacies'
    },
    {
        id: 6,
        name: 'Sweet Tooth',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
        cuisine: ['Desserts', 'Bakery'],
        rating: 4.8,
        reviews: 2340,
        deliveryTime: '20-25',
        deliveryCost: 25,
        offer: 'Buy 1 Get 1',
        isVeg: true,
        location: 'Jayanagar',
        description: 'Heavenly desserts and fresh bakery items'
    },
    {
        id: 7,
        name: 'Green Bowl',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
        cuisine: ['Healthy', 'Salads'],
        rating: 4.5,
        reviews: 780,
        deliveryTime: '25-30',
        deliveryCost: 30,
        offer: '15% OFF',
        isVeg: true,
        location: 'Bellandur',
        description: 'Nutritious bowls and fresh salads'
    },
    {
        id: 8,
        name: 'Taco Fiesta',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
        cuisine: ['Mexican', 'Tacos'],
        rating: 4.4,
        reviews: 950,
        deliveryTime: '30-35',
        deliveryCost: 35,
        offer: '40% OFF up to ₹120',
        isVeg: false,
        location: 'Electronic City',
        description: 'Authentic Mexican tacos and burritos'
    },
    {
        id: 9,
        name: 'Pasta House',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
        cuisine: ['Italian', 'Pasta'],
        rating: 4.6,
        reviews: 1340,
        deliveryTime: '35-40',
        deliveryCost: 45,
        offer: '20% OFF',
        isVeg: true,
        location: 'Koramangala',
        description: 'Handmade pasta with authentic Italian sauces'
    },
    {
        id: 10,
        name: 'BBQ Nation',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
        cuisine: ['BBQ', 'Grilled'],
        rating: 4.7,
        reviews: 1890,
        deliveryTime: '40-45',
        deliveryCost: 50,
        offer: 'Free Delivery on orders above ₹500',
        isVeg: false,
        location: 'MG Road',
        description: 'Grilled perfection with smoky flavors'
    },
    {
        id: 11,
        name: 'Biryani Blues',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
        cuisine: ['Indian', 'Biryani'],
        rating: 4.8,
        reviews: 2560,
        deliveryTime: '35-40',
        deliveryCost: 40,
        offer: '30% OFF',
        isVeg: false,
        location: 'BTM Layout',
        description: 'Aromatic biryanis with authentic spices'
    },
    {
        id: 12,
        name: 'Smoothie Bar',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80',
        cuisine: ['Beverages', 'Healthy'],
        rating: 4.5,
        reviews: 670,
        deliveryTime: '15-20',
        deliveryCost: 20,
        offer: '10% OFF',
        isVeg: true,
        location: 'Indiranagar',
        description: 'Fresh smoothies and healthy beverages'
    },
];

export const menuItems = {
    1: [ // Pizza Paradise
        {
            id: 101,
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
            price: 299,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
            isVeg: true,
            rating: 4.5,
            category: 'Pizza',
            bestseller: true
        },
        {
            id: 102,
            name: 'Pepperoni Delight',
            description: 'Loaded with pepperoni, cheese, and Italian herbs',
            price: 399,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
            isVeg: false,
            rating: 4.7,
            category: 'Pizza',
            bestseller: true
        },
        {
            id: 103,
            name: 'Veggie Supreme',
            description: 'Bell peppers, onions, mushrooms, olives, and corn',
            price: 349,
            image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80',
            isVeg: true,
            rating: 4.4,
            category: 'Pizza'
        },
        {
            id: 104,
            name: 'BBQ Chicken Pizza',
            description: 'Grilled chicken with BBQ sauce and cheese',
            price: 449,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
            isVeg: false,
            rating: 4.6,
            category: 'Pizza'
        },
        {
            id: 105,
            name: 'Garlic Bread',
            description: 'Crispy bread with garlic butter and herbs',
            price: 129,
            image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24f9e6?w=400&q=80',
            isVeg: true,
            rating: 4.3,
            category: 'Sides'
        }
    ],
    2: [ // Burger King
        {
            id: 201,
            name: 'Whopper',
            description: 'Flame-grilled beef patty with fresh vegetables',
            price: 189,
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
            isVeg: false,
            rating: 4.6,
            category: 'Burgers',
            bestseller: true
        },
        {
            id: 202,
            name: 'Veggie Burger',
            description: 'Crispy veggie patty with lettuce and mayo',
            price: 149,
            image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80',
            isVeg: true,
            rating: 4.3,
            category: 'Burgers'
        },
        {
            id: 203,
            name: 'Chicken Royale',
            description: 'Crispy chicken fillet with special sauce',
            price: 199,
            image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
            isVeg: false,
            rating: 4.5,
            category: 'Burgers',
            bestseller: true
        },
        {
            id: 204,
            name: 'French Fries',
            description: 'Crispy golden fries with seasoning',
            price: 99,
            image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
            isVeg: true,
            rating: 4.4,
            category: 'Sides'
        }
    ],
    3: [ // Sushi Station
        {
            id: 301,
            name: 'California Roll',
            description: 'Crab, avocado, and cucumber wrapped in rice',
            price: 349,
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
            isVeg: false,
            rating: 4.7,
            category: 'Sushi',
            bestseller: true
        },
        {
            id: 302,
            name: 'Salmon Nigiri',
            description: 'Fresh salmon on seasoned rice',
            price: 399,
            image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=400&q=80',
            isVeg: false,
            rating: 4.8,
            category: 'Sushi'
        },
        {
            id: 303,
            name: 'Vegetable Tempura',
            description: 'Crispy battered vegetables with dipping sauce',
            price: 249,
            image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&q=80',
            isVeg: true,
            rating: 4.5,
            category: 'Appetizers'
        }
    ],
    4: [ // Spice Garden
        {
            id: 401,
            name: 'Paneer Butter Masala',
            description: 'Cottage cheese in rich tomato gravy',
            price: 279,
            image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
            isVeg: true,
            rating: 4.7,
            category: 'Main Course',
            bestseller: true
        },
        {
            id: 402,
            name: 'Dal Makhani',
            description: 'Creamy black lentils with butter',
            price: 229,
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80',
            isVeg: true,
            rating: 4.6,
            category: 'Main Course'
        },
        {
            id: 403,
            name: 'Garlic Naan',
            description: 'Soft bread with garlic and butter',
            price: 49,
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
            isVeg: true,
            rating: 4.5,
            category: 'Breads'
        },
        {
            id: 404,
            name: 'Veg Biryani',
            description: 'Fragrant rice with mixed vegetables',
            price: 249,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
            isVeg: true,
            rating: 4.6,
            category: 'Rice',
            bestseller: true
        }
    ],
    5: [ // Wok This Way
        {
            id: 501,
            name: 'Hakka Noodles',
            description: 'Stir-fried noodles with vegetables',
            price: 199,
            image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80',
            isVeg: true,
            rating: 4.5,
            category: 'Noodles',
            bestseller: true
        },
        {
            id: 502,
            name: 'Manchurian',
            description: 'Crispy vegetable balls in spicy sauce',
            price: 219,
            image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80',
            isVeg: true,
            rating: 4.4,
            category: 'Appetizers'
        },
        {
            id: 503,
            name: 'Fried Rice',
            description: 'Wok-tossed rice with vegetables and sauces',
            price: 189,
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80',
            isVeg: true,
            rating: 4.3,
            category: 'Rice'
        }
    ],
    6: [ // Sweet Tooth
        {
            id: 601,
            name: 'Chocolate Cake',
            description: 'Rich chocolate cake with ganache',
            price: 149,
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
            isVeg: true,
            rating: 4.8,
            category: 'Cakes',
            bestseller: true
        },
        {
            id: 602,
            name: 'Red Velvet Cupcake',
            description: 'Moist red velvet with cream cheese frosting',
            price: 89,
            image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&q=80',
            isVeg: true,
            rating: 4.7,
            category: 'Cupcakes'
        },
        {
            id: 603,
            name: 'Tiramisu',
            description: 'Classic Italian coffee-flavored dessert',
            price: 199,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
            isVeg: true,
            rating: 4.9,
            category: 'Desserts',
            bestseller: true
        }
    ],
    7: [ // Green Bowl
        {
            id: 701,
            name: 'Greek Salad',
            description: 'Fresh vegetables with feta cheese and olives',
            price: 249,
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80',
            isVeg: true,
            rating: 4.6,
            category: 'Salads',
            bestseller: true
        },
        {
            id: 702,
            name: 'Quinoa Bowl',
            description: 'Protein-rich quinoa with roasted vegetables',
            price: 299,
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
            isVeg: true,
            rating: 4.7,
            category: 'Bowls'
        },
        {
            id: 703,
            name: 'Avocado Toast',
            description: 'Whole grain toast with mashed avocado',
            price: 199,
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80',
            isVeg: true,
            rating: 4.5,
            category: 'Breakfast'
        }
    ],
    8: [ // Taco Fiesta
        {
            id: 801,
            name: 'Chicken Tacos',
            description: 'Grilled chicken with salsa and guacamole',
            price: 249,
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
            isVeg: false,
            rating: 4.6,
            category: 'Tacos',
            bestseller: true
        },
        {
            id: 802,
            name: 'Veggie Burrito',
            description: 'Beans, rice, and vegetables wrapped in tortilla',
            price: 229,
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
            isVeg: true,
            rating: 4.4,
            category: 'Burritos'
        },
        {
            id: 803,
            name: 'Nachos Supreme',
            description: 'Crispy nachos with cheese, salsa, and jalapeños',
            price: 199,
            image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80',
            isVeg: true,
            rating: 4.5,
            category: 'Appetizers'
        }
    ]
};

export const offers = [
    {
        id: 1,
        title: '50% OFF',
        description: 'On orders above ₹500',
        code: 'NUTRI50',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80'
    },
    {
        id: 2,
        title: 'Free Delivery',
        description: 'On all orders today',
        code: 'FREEDEL',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
    },
    {
        id: 3,
        title: '₹100 Cashback',
        description: 'For new users',
        code: 'NEW100',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80'
    }
];
