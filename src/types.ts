declare global {
    interface Image {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    }

    interface MenuItem {
        image: Image;
        name: string;
        category: string;
        price: number;
    }

    interface CartItem extends MenuItem {
        quantity: number;
    }
}