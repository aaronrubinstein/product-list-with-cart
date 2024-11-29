<script lang="ts">
    import type { MenuItem, CartItem } from "./types";
    import products from "./data";
    import Product from "./lib/Product.svelte";
    import Cart from "./lib/Cart.svelte";
    import OrderConfirmation from "./lib/OrderConfirmation.svelte";

    let cart: CartItem[] = $state([]);
    let showOrderConfirmation = $state(false);

    $inspect(cart);

    const addProductToCart = (product: MenuItem) => {
        cart.push({
            id: crypto.randomUUID(),
            product: product,
            quantity: 1,
        });
    };

    const removeProductFromCart = (id: string) => {
        cart = cart.filter((product) => product.id !== id);
    };

    const resetCart = () => {
        cart = [];
    };
</script>

<main>
    <div class="menu-content">
        <h1 class="text1">Desserts</h1>
        <div class="menu-items">
            {#each products as product}
                <Product bind:cart {product} {addProductToCart} {removeProductFromCart} />
            {/each}
        </div>
    </div>
    <Cart bind:cart {removeProductFromCart} bind:showOrderConfirmation />
</main>

<OrderConfirmation {cart} bind:showOrderConfirmation {resetCart} />

<style>
    main {
        margin: 88px 40px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 32px;
    }

    h1 {
        color: var(--rose900);
        margin-bottom: 32px;
    }

    .menu-items {
        max-width: 800px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 24px;
        row-gap: 32px;
    }

    @media (752px <= width < 1296px) {
        main {
            flex-direction: column;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        .menu-items {
            max-width: 688px;
        }
    }

    @media (width < 752px) {
        main {
            flex-direction: column;
            margin-top: 24px;
            margin-bottom: 24px;
        }

        .menu-items {
            max-width: 327px;
            grid-template-columns: 1fr;
            row-gap: 24px;
        }
    }
</style>
