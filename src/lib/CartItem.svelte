<script lang="ts">
    let { name, quantity, price } = $props();
    let total = quantity * price;
</script>

<div class="cart-item">
    <div class="item-details">
        <p class="text4bold">{name}</p>
        <div class="item-qty-and-price">
            <span class="qty text4bold">{quantity}x</span>
            <span class="price text4">@ ${price.toFixed(2)}</span>
            <span class="total text4bold">${total.toFixed(2)}</span>
        </div>
    </div>
    <button type="button" aria-label="Remove item from cart">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5Z"
                fill="currentColor"
            />
            <path
                d="M13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z"
                fill="currentColor"
            />
        </svg>
    </button>
</div>
<hr />

<style>
    .cart-item {
        display: flex;
        justify-content: space-between;
    }

    p {
        color: var(--rose900);
        margin-bottom: 8px;
    }

    .item-qty-and-price {
        display: flex;
        gap: 8px;
    }

    .qty {
        color: var(--red);
    }

    .price,
    .total {
        color: var(--rose500);
    }

    button {
        display: grid;
        place-items: center;
    }

    svg {
        color: var(--rose400);
    }

    svg:hover {
        color: var(--rose900);
    }

    hr {
        height: 1px;
        background: var(--rose50);
        border-color: var(--rose50);
        margin: 16px 0;
    }
</style>
