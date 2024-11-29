export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;  
};

export interface MenuItem {
    image: Image;
    name: string;
    category: string;
    price: number;
}

export interface CartItem {
    id: string,
    product: MenuItem,
    quantity: number;
}

// declare global {
//     interface Image {
//         thumbnail: string;
//         mobile: string;
//         tablet: string;
//         desktop: string;
//     }

//     interface MenuItem {
//         image: Image;
//         name: string;
//         category: string;
//         price: number;
//     }

//     interface CartItem {
//         id: string,
//         menuItem: MenuItem,
//         quantity: number;
//     }
// }