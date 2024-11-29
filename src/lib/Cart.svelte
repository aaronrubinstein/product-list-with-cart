<script lang="ts">
    import type { CartItem } from "../types";
    import CartProduct from "./CartProduct.svelte";

    interface Props {
        cart: CartItem[];
        removeProductFromCart: (id: string) => void;
        showOrderConfirmation: boolean;
    }

    let {
        cart = $bindable(),
        removeProductFromCart,
        showOrderConfirmation = $bindable(),
    }: Props = $props();

    let cartStats = $derived.by(() => {
        let quantity = 0;
        let total = 0;
        for (const product of cart) {
            quantity += product.quantity;
            total += product.quantity * product.product.price;
        }
        return {
            quantity,
            total,
        };
    });
</script>

<div class="cart">
    <h2 class="text2">Your Cart ({cartStats.quantity})</h2>
    {#if cartStats.quantity === 0}
        <div class="empty-state-cart-content">
            <img
                class="empty-state-img"
                src="images/illustration-empty-cart.svg"
                alt="Empty cart"
            />
            <p class="text4bold empty-state-msg">Your added items will appear here</p>
        </div>
    {:else}
        {#each cart as cartProduct (cartProduct.id)}
            <CartProduct {cartProduct} {removeProductFromCart} />
        {/each}

        <div class="cart-total">
            <span class="cart-total-label text4">Order Total</span>
            <span class="cart-total-amount text2">${cartStats.total.toFixed(2)}</span>
        </div>

        <div class="carbon-neutral">
            <img src="images/icon-carbon-neutral.svg" alt="Carbon neutral delivery" />
            <span class="carbon-neutral-message text4">
                This is a <span class="text4bold">carbon-neutral</span> delivery
            </span>
        </div>

        <button
            onclick={() => (showOrderConfirmation = true)}
            type="button"
            class="confirm-btn text3"
        >
            Confirm Order
        </button>
    {/if}
</div>

<style>
    .cart {
        width: 384px;
        padding: 24px;
        border-radius: 12px;
        background-color: var(--white);
    }

    h2 {
        color: var(--red);
        margin-bottom: 24px;
    }

    .empty-state-cart-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .empty-state-img {
        margin-top: 16px;
        height: 128px;
        width: 128px;
    }

    .empty-state-msg {
        color: var(--rose500);
        text-align: center;
        margin-bottom: 16px;
    }

    .cart-total {
        margin-bottom: 24px;
        padding-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cart-total-label {
        color: var(--rose900);
    }

    .cart-total-amount {
        color: var(--rose900);
    }

    .carbon-neutral {
        background-color: var(--rose50);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 16px;
        margin-bottom: 24px;
    }

    .carbon-neutral-message {
        color: var(--rose900);
    }

    .confirm-btn {
        background-color: var(--red);
        border-radius: 999px;
        color: var(--white);
        padding: 16px 24px;
        width: 100%;
    }

    .confirm-btn:hover {
        filter: brightness(80%);
    }

    @media (width < 1296px) {
        .cart {
            width: 100%;
        }
    }
</style>
