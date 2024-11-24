<script lang="ts">
    import CartItem from "./CartItem.svelte";

    let cartItemCount = 1;
</script>

<div class="cart">
    <h2 class="text2">Your Cart ({cartItemCount})</h2>
    {#if cartItemCount === 0}
        <div class="empty-state-cart-content">
            <img
                class="empty-state-img"
                src="images/illustration-empty-cart.svg"
                alt="Empty cart"
            />
            <p class="text4bold empty-state-msg">Your added items will appear here</p>
        </div>
    {:else}
        <CartItem name="Classic Tiramisu" quantity={1} price={5.5} />
        <CartItem name="Classic Tiramisu" quantity={1} price={5.5} />
        <CartItem name="Classic Tiramisu" quantity={1} price={5.5} />
        <CartItem name="Classic Tiramisu" quantity={1} price={5.5} />
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
</style>
