const productsData = [
 
 {
      "id": "p1",
      "name": "Samsung Galaxy S23",
      "description": "Flagship smartphone with AMOLED display",
      "price": 74999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller1@shop.com"
    },
    {
      "id": "p2",
      "name": "iPhone 14",
      "description": "Apple smartphone with A15 Bionic chip",
      "price": 69999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller2@shop.com"
    },
    {
      "id": "p3",
      "name": "OnePlus 11R",
      "description": "Smooth performance with Snapdragon processor",
      "price": 39999,
      "category": "Mobile Phones",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-Lhkp-Mjyuk89Z8JapzUrciomGPw4tZSAQ&s",
      "sellerEmail": "seller3@shop.com"
    },
    {
      "id": "p4",
      "name": "Samsung Galaxy A54",
      "description": "Mid-range smartphone with great camera",
      "price": 28999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller4@shop.com"
    },
    {
      "id": "p5",
      "name": "Redmi Note 13 Pro",
      "description": "Best budget performance phone",
      "price": 24999,
      "category": "Mobile Phones",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-Lhkp-Mjyuk89Z8JapzUrciomGPw4tZSAQ&s",
      "sellerEmail": "seller5@shop.com"
    },

    {
      "id": "e1",
      "name": "Sony Wireless Earbuds",
      "description": "Noise cancelling true wireless earbuds",
      "price": 5999,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller6@shop.com"
    },
    {
      "id": "e2",
      "name": "JBL Tune 230NC",
      "description": "Bluetooth earbuds with ANC",
      "price": 3499,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller7@shop.com"
    },
    {
      "id": "e3",
      "name": "Apple AirPods Pro",
      "description": "Premium noise cancellation earbuds",
      "price": 19999,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller8@shop.com"
    },

    {
      "id": "pb1",
      "name": "Mi Power Bank 20000mAh",
      "description": "High capacity fast charging power bank",
      "price": 1999,
      "category": "Power Banks",
      "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller9@shop.com"
    },
    {
      "id": "pb2",
      "name": "Realme Power Bank",
      "description": "Fast charging slim power bank",
      "price": 1799,
      "category": "Power Banks",
      "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller10@shop.com"
    },

    {
      "id": "bs1",
      "name": "JBL Flip 6",
      "description": "Portable Bluetooth speaker",
      "price": 7999,
      "category": "Bluetooth Speakers",
      "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller11@shop.com"
    },
    {
      "id": "bs2",
      "name": "Boat Stone 1200",
      "description": "Loud bass Bluetooth speaker",
      "price": 3999,
      "category": "Bluetooth Speakers",
      "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller12@shop.com"
    },

    {
      "id": "ch1",
      "name": "Anker 30W Charger",
      "description": "Fast charging USB-C adapter",
      "price": 1499,
      "category": "Chargers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XeDGe4TTCCe8u5Za3uuyT2QBk961F7SUbQ&s",
      "sellerEmail": "seller13@shop.com"
    },
    {
      "id": "ch2",
      "name": "Samsung Fast Charger",
      "description": "25W fast charging adapter",
      "price": 1299,
      "category": "Chargers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XeDGe4TTCCe8u5Za3uuyT2QBk961F7SUbQ&s",
      "sellerEmail": "seller14@shop.com"
    },

    {
      "id": "mc1",
      "name": "iPhone Silicone Cover",
      "description": "Premium soft silicone mobile cover",
      "price": 999,
      "category": "Mobile Covers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlicv2akfw_MSij7x_x4StWA2BgViy_v72Lg&s",
      "sellerEmail": "seller15@shop.com"
    },

    {
      "id": "sp1",
      "name": "Tempered Glass Protector",
      "description": "Scratch resistant screen protector",
      "price": 399,
      "category": "Screen Protectors",
      "image": "https://5.imimg.com/data5/SELLER/Default/2022/10/HX/FZ/FN/161129185/mobile-screen-protector.jpg",
      "sellerEmail": "seller16@shop.com"
    },

    {
      "id": "cc1",
      "name": "USB-C Charging Cable",
      "description": "Durable fast charging cable",
      "price": 299,
      "category": "Charging Cables",
      "image": "https://m.media-amazon.com/images/I/7100MyxcglL.jpg",
      "sellerEmail": "seller17@shop.com"
    } ,
        {
      "id": "p51",
      "name": "Google Pixel 7a",
      "description": "Clean Android experience with powerful camera",
      "price": 38999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller51@shop.com"
    },
    {
      "id": "p52",
      "name": "Realme 12 Pro",
      "description": "Affordable phone with smooth performance",
      "price": 21999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller52@shop.com"
    },
    {
      "id": "p53",
      "name": "Vivo V29",
      "description": "Premium design with excellent selfie camera",
      "price": 32999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller53@shop.com"
    },
    {
      "id": "p54",
      "name": "Oppo Reno 10 Pro",
      "description": "Great camera and fast charging",
      "price": 35999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller54@shop.com"
    },
    {
      "id": "p55",
      "name": "Motorola Edge 40",
      "description": "Near stock Android with OLED display",
      "price": 29999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller55@shop.com"
    },

    {
      "id": "e51",
      "name": "Boat Airdopes 141",
      "description": "Budget earbuds with strong bass",
      "price": 1499,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller56@shop.com"
    },
    {
      "id": "e52",
      "name": "Noise Buds VS104",
      "description": "Long battery life wireless earbuds",
      "price": 1299,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller57@shop.com"
    },
    {
      "id": "e53",
      "name": "Samsung Galaxy Buds 2",
      "description": "Balanced sound with ANC",
      "price": 8999,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller58@shop.com"
    },

    {
      "id": "pb51",
      "name": "Ambrane 10000mAh Power Bank",
      "description": "Compact fast charging power bank",
      "price": 1199,
      "category": "Power Banks",
      "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller59@shop.com"
    },
    {
      "id": "pb52",
      "name": "Syska Power Bank",
      "description": "Dual USB output power bank",
      "price": 1399,
      "category": "Power Banks",
      "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller60@shop.com"
    },

    {
      "id": "bs51",
      "name": "Sony SRS-XB13",
      "description": "Extra bass portable speaker",
      "price": 4999,
      "category": "Bluetooth Speakers",
      "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller61@shop.com"
    },
    {
      "id": "bs52",
      "name": "Boat Stone 650",
      "description": "Compact speaker with punchy sound",
      "price": 1999,
      "category": "Bluetooth Speakers",
      "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller62@shop.com"
    },

    {
      "id": "ch51",
      "name": "MI 33W Fast Charger",
      "description": "Quick charge support adapter",
      "price": 1199,
      "category": "Chargers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCs-8pQeNjbSUAMdM5opIA8baZHTOj6SrzA&s",
      "sellerEmail": "seller63@shop.com"
    },
    {
      "id": "ch52",
      "name": "OnePlus Warp Charger",
      "description": "Fast charging for OnePlus devices",
      "price": 1499,
      "category": "Chargers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCs-8pQeNjbSUAMdM5opIA8baZHTOj6SrzA&s",
      "sellerEmail": "seller64@shop.com"
    },

    {
      "id": "mc51",
      "name": "Transparent Mobile Cover",
      "description": "Shockproof clear back cover",
      "price": 499,
      "category": "Mobile Covers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlicv2akfw_MSij7x_x4StWA2BgViy_v72Lg&s",
      "sellerEmail": "seller65@shop.com"
    },

    {
      "id": "sp51",
      "name": "Privacy Screen Protector",
      "description": "Anti-spy tempered glass",
      "price": 699,
      "category": "Screen Protectors",
      "image": "https://5.imimg.com/data5/SELLER/Default/2022/10/HX/FZ/FN/161129185/mobile-screen-protector.jpg",
      "sellerEmail": "seller66@shop.com"
    },

    {
      "id": "cc51",
      "name": "Fast USB Type-C Cable",
      "description": "Nylon braided charging cable",
      "price": 399,
      "category": "Charging Cables",
      "image": "https://m.media-amazon.com/images/I/7100MyxcglL.jpg",
      "sellerEmail": "seller67@shop.com"
    },
        {
      "id": "p101",
      "name": "Samsung Galaxy S22 FE",
      "description": "Fan edition flagship smartphone",
      "price": 42999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller101@shop.com"
    },
    {
      "id": "p102",
      "name": "iPhone 13",
      "description": "Powerful performance with A15 chip",
      "price": 59999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller102@shop.com"
    },
    {
      "id": "p103",
      "name": "Nothing Phone (2a)",
      "description": "Unique transparent design smartphone",
      "price": 25999,
      "category": "Mobile Phones",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIlm8wd8jazpzPFGERjvqe4r3sSY8_JRMsQ&s",
      "sellerEmail": "seller103@shop.com"
    },
    {
      "id": "p104",
      "name": "Infinix Zero 30",
      "description": "High megapixel selfie camera phone",
      "price": 22999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller104@shop.com"
    },
    {
      "id": "p105",
      "name": "Tecno Phantom X2",
      "description": "Premium curved display smartphone",
      "price": 36999,
      "category": "Mobile Phones",
      "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller105@shop.com"
    },

    {
      "id": "e101",
      "name": "Realme Buds Air 5",
      "description": "ANC earbuds with clear sound",
      "price": 4999,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller106@shop.com"
    },
    {
      "id": "e102",
      "name": "Boat Nirvana Ion",
      "description": "Long playback premium earbuds",
      "price": 2999,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller107@shop.com"
    },
    {
      "id": "e103",
      "name": "Oppo Enco Buds",
      "description": "Lightweight earbuds with deep bass",
      "price": 1999,
      "category": "Earbuds",
      "image": "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller108@shop.com"
    },

    {
      "id": "pb101",
      "name": "URBN 20000mAh Power Bank",
      "description": "Fast charging with LED display",
      "price": 2499,
      "category": "Power Banks",
      "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller109@shop.com"
    },
    {
      "id": "pb102",
      "name": "Stuffcool Power Bank",
      "description": "Slim metal body power bank",
      "price": 2199,
      "category": "Power Banks",
      "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller110@shop.com"
    },

    {
      "id": "bs101",
      "name": "Marshall Emberton",
      "description": "Premium compact Bluetooth speaker",
      "price": 14999,
      "category": "Bluetooth Speakers",
      "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller111@shop.com"
    },
    {
      "id": "bs102",
      "name": "Zebronics Zeb-County",
      "description": "Affordable portable speaker",
      "price": 1299,
      "category": "Bluetooth Speakers",
      "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400&h=300",
      "sellerEmail": "seller112@shop.com"
    },

    {
      "id": "ch101",
      "name": "Portronics 65W Charger",
      "description": "Laptop & mobile fast charger",
      "price": 2499,
      "category": "Chargers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCs-8pQeNjbSUAMdM5opIA8baZHTOj6SrzA&s",
      "sellerEmail": "seller113@shop.com"
    },
    {
      "id": "ch102",
      "name": "Apple 20W Adapter",
      "description": "Original fast charging adapter",
      "price": 1999,
      "category": "Chargers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCs-8pQeNjbSUAMdM5opIA8baZHTOj6SrzA&s",
      "sellerEmail": "seller114@shop.com"
    },

    {
      "id": "mc101",
      "name": "Leather Finish Mobile Cover",
      "description": "Premium leather texture back cover",
      "price": 899,
      "category": "Mobile Covers",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlicv2akfw_MSij7x_x4StWA2BgViy_v72Lg&s",
      "sellerEmail": "seller115@shop.com"
    },

    {
      "id": "sp101",
      "name": "Full Glue Tempered Glass",
      "description": "Edge to edge screen protection",
      "price": 599,
      "category": "Screen Protectors",
      "image": "https://5.imimg.com/data5/SELLER/Default/2022/10/HX/FZ/FN/161129185/mobile-screen-protector.jpg",
      "sellerEmail": "seller116@shop.com"
    },

    {
      "id": "cc101",
      "name": "3-in-1 Charging Cable",
      "description": "Type-C, Micro USB & Lightning",
      "price": 499,
      "category": "Charging Cables",
      "image": "https://m.media-amazon.com/images/I/7100MyxcglL.jpg",
      "sellerEmail": "seller117@shop.com"
    }
];

export default productsData;
