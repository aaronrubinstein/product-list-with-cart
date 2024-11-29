<script lang="ts">
    import type { CartItem, MenuItem } from "../types";

    interface Props {
        cart: CartItem[];
        product: MenuItem;
        addProductToCart: (product: MenuItem) => void;
        removeProductFromCart: (id: string) => void;
    }

    let { cart = $bindable(), product, addProductToCart, removeProductFromCart }: Props = $props();

    let selected = $derived.by(() => {
        let targetProduct = cart.find((cartProduct) => cartProduct.product.name === product.name);
        if (!targetProduct) {
            return;
        }
        let id = targetProduct.id;
        let quantity = targetProduct.quantity;
        return {
            id,
            quantity,
        };
    });

    const incrementQty = (id: string) => {
        let targetProduct = cart.find((product) => product.id === id);
        if (targetProduct) {
            targetProduct.quantity++;
        }
    };

    const decrementQty = (id: string) => {
        let targetProduct = cart.find((product) => product.id === id);
        if (targetProduct) {
            if (targetProduct.quantity === 1) {
                removeProductFromCart(id);
            } else {
                targetProduct.quantity--;
            }
        }
    };
</script>

<div class="item-card">
    <div class="img-and-button">
        <picture>
            <source srcset={product.image.desktop} media="(width >= 1296px)" />
            <source srcset={product.image.tablet} media="(752px <= width < 1296px)" />
            <source srcset={product.image.mobile} media="(width < 752px)" />
            <img class:selected src={product.image.desktop} alt={product.name} />
        </picture>

        {#if selected}
            <div class="selected-controls">
                <button
                    onclick={() => decrementQty(selected.id)}
                    class="quantity-btn"
                    type="button"
                    aria-label="Decrement quantity"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M10.6667 2.5C14.7917 2.5 18.1667 5.875 18.1667 10C18.1667 14.125 14.7917 17.5 10.6667 17.5C6.54166 17.5 3.16666 14.125 3.16666 10C3.16666 5.875 6.54166 2.5 10.6667 2.5ZM10.6667 1.25C5.85416 1.25 1.91666 5.1875 1.91666 10C1.91666 14.8125 5.85416 18.75 10.6667 18.75C15.4792 18.75 19.4167 14.8125 19.4167 10C19.4167 5.1875 15.4792 1.25 10.6667 1.25Z"
                            fill="white"
                        />
                        <path d="M5.66666 9.375H15.6667V10.625H5.66666V9.375Z" fill="white" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M10 1.25C5.25 1.25 1.25 5.25 1.25 10C1.25 14.75 5.25 18.75 10 18.75C14.75 18.75 18.75 14.75 18.75 10C18.75 5.25 14.75 1.25 10 1.25ZM15 10.625H5V9.375H15V10.625Z"
                            fill="white"
                        />
                    </svg>
                </button>
                {selected.quantity}
                <button
                    onclick={() => incrementQty(selected.id)}
                    class="quantity-btn"
                    type="button"
                    aria-label="Increment quantity"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M10.6667 2.5C14.7917 2.5 18.1667 5.875 18.1667 10C18.1667 14.125 14.7917 17.5 10.6667 17.5C6.54166 17.5 3.16666 14.125 3.16666 10C3.16666 5.875 6.54166 2.5 10.6667 2.5ZM10.6667 1.25C5.85416 1.25 1.91666 5.1875 1.91666 10C1.91666 14.8125 5.85416 18.75 10.6667 18.75C15.4792 18.75 19.4167 14.8125 19.4167 10C19.4167 5.1875 15.4792 1.25 10.6667 1.25Z"
                            fill="white"
                        />
                        <path
                            d="M15.6667 9.375H11.2917V5H10.0417V9.375H5.66666V10.625H10.0417V15H11.2917V10.625H15.6667V9.375Z"
                            fill="white"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M10 1.25C7.68807 1.27805 5.47873 2.20893 3.84383 3.84383C2.20893 5.47873 1.27805 7.68807 1.25 10C1.27805 12.3119 2.20893 14.5213 3.84383 16.1562C5.47873 17.7911 7.68807 18.7219 10 18.75C12.3119 18.7219 14.5213 17.7911 16.1562 16.1562C17.7911 14.5213 18.7219 12.3119 18.75 10C18.7219 7.68807 17.7911 5.47873 16.1562 3.84383C14.5213 2.20893 12.3119 1.27805 10 1.25ZM15 10.625H10.625V15H9.375V10.625H5V9.375H9.375V5H10.625V9.375H15V10.625Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        {:else}
            <button class="add-to-cart-btn" type="button" onclick={() => addProductToCart(product)}>
                <img src="images/icon-add-to-cart.svg" alt="Add to cart icon" />
                Add to Cart
            </button>
        {/if}
    </div>

    <div class="item-info">
        <p class="text4 category">{product.category}</p>
        <p class="text3 name">{product.name}</p>
        <p class="text3 price">${product.price.toFixed(2)}</p>
    </div>
</div>

<style>
    .item-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    .img-and-button {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    picture > img {
        height: 240px;
        border-radius: 8px;
        margin-bottom: -22px;
    }

    img.selected {
        box-shadow: 0 0 0 2px var(--red);
    }

    .selected-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--white);
        font-size: 14px;
        font-weight: 600;
        width: 160px;
        height: 44px;
        padding: 12px;
        background-color: var(--red);
        border-radius: 999px;
    }

    .quantity-btn svg:last-child {
        display: none;
    }

    .quantity-btn:hover svg:last-child {
        display: inline;
    }

    .quantity-btn:hover svg:first-child {
        display: none;
    }

    .add-to-cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 160px;
        height: 44px;
        border: 1px solid var(--rose400);
        border-radius: 999px;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--rose900);
        background-color: var(--white);
    }

    .add-to-cart-btn:hover {
        border: 1px solid var(--red);
    }

    .item-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }

    .category {
        color: var(--rose500);
    }

    .name {
        color: var(--rose900);
    }

    .price {
        color: var(--red);
    }

    @media (752px <= width < 1296px) {
        picture > img {
            height: 212px;
        }
    }

    @media (width < 752px) {
        picture > img {
            height: 212px;
        }
    }
</style>
