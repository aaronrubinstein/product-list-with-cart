<script lang="ts">
    import type { CartItem } from "../types";

    interface Props {
        cart: CartItem[];
        showOrderConfirmation: boolean;
        resetCart: () => void;
    }

    let { cart, showOrderConfirmation = $bindable(), resetCart }: Props = $props();

    let dialog: HTMLDialogElement;
    // let dialog = $state();

    let orderTotal = $derived.by(() => {
        let total = 0;
        for (const product of cart) {
            total += product.quantity * product.product.price;
        }
        return total;
    });

    const startNewOrder = () => {
        resetCart();
        dialog.close();
    };

    $effect(() => {
        if (showOrderConfirmation) dialog.showModal();
    });
</script>

<dialog bind:this={dialog} onclose={() => (showOrderConfirmation = false)}>
    <div>
        <img src="images/icon-order-confirmed.svg" alt="Order confirmed" />
        <h1 class="text1">Order Confirmed</h1>
        <p class="message">We hope you enjoy your food!</p>
    </div>

    <div class="order-details">
        <div class="order-items">
            {#each cart as cartItem}
                <div class="order-item">
                    <img src={cartItem.product.image.thumbnail} alt="Menu item thumbnail" />
                    <div class="item-details">
                        <p class="item-name text4bold">{cartItem.product.name}</p>
                        <div class="qty-and-price">
                            <span class="qty text4bold">{cartItem.quantity}x</span>
                            <span class="price text4">@ ${cartItem.product.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <span class="item-total text3"
                        >{(cartItem.quantity * cartItem.product.price).toFixed(2)}</span
                    >
                </div>
                <hr />
            {/each}
        </div>
        <div class="order-total">
            <span class="order-total-label text4">Order Total</span>
            <span class="order-total-amount text2">${orderTotal.toFixed(2)}</span>
        </div>
    </div>

    <button onclick={() => startNewOrder()}>Start New Order</button>
</dialog>

<style>
    dialog[open] {
        background-color: var(--white);
        width: 592px;
        padding: 40px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        border: none;
        margin: auto;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }

    h1 {
        color: var(--rose900);
        margin-top: 24px;
        margin-bottom: 8px;
    }

    .message {
        font-size: 16px;
        font-weight: 400;
        color: var(--rose500);
    }

    .order-details {
        padding: 24px;
        border-radius: 8px;
        background-color: var(--rose50);
    }

    .order-item {
        display: flex;
        align-items: center;
    }

    img {
        width: 48px;
        height: 48px;
        border-radius: 4px;
        margin-right: 16px;
    }

    .item-name {
        color: var(--rose900);
        margin-bottom: 8px;
    }

    .qty {
        min-width: 21px;
        color: var(--red);
        margin-right: 8px;
    }

    .price {
        color: var(--rose500);
    }

    .item-total {
        color: var(--rose900);
        margin-left: auto;
    }

    hr {
        height: 1px;
        background: var(--rose50);
        border-color: var(--rose50);
        margin: 16px 0;
    }

    .order-total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
    }

    button {
        background-color: var(--red);
        border-radius: 999px;
        color: var(--white);
        padding: 16px 24px;
        width: 100%;
    }

    button:hover {
        filter: brightness(80%);
    }

    @media (752px <= width < 1296px) {
        dialog[open] {
            width: 688px;
        }
    }

    @media (width < 752px) {
        dialog[open] {
            min-width: 100%;
            position: fixed;
            inset: auto 0 0 0;
            margin: 0;
            border-radius: 12px 12px 0 0;
            padding: 40px 24px 24px 24px;
        }
    }
</style>
