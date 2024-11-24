<script lang="ts">
    import data from "./data";
    import MenuItem from "./lib/MenuItem.svelte";
    import Cart from "./lib/Cart.svelte";

    let cart: CartItem[] = $state([]);

    const addItemToCart = (item: CartItem) => {
        cart.push(item);
    };
</script>

<main>
    <div class="menu-content">
        <h1 class="text1">Desserts</h1>
        <div class="menu-items">
            {#each data as item}
                <MenuItem {item} {addItemToCart} />
            {/each}
        </div>
    </div>
    <Cart />
</main>

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

    @media (688px <= width < 1216px) {
        .menu-items {
            max-width: 688px;
        }
    }

    @media (width < 688px) {
        .menu-items {
            max-width: 327px;
            grid-template-columns: 1fr;
            row-gap: 24px;
        }
    }
</style>
