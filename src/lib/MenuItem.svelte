<script lang="ts">
    import AddToCart from "./AddToCart.svelte";
    import CartItem from "./CartItem.svelte";

    // interface Props {
    //     item: MenuItem;
    //     addItemToCart: (item: CartItem) => void;
    // }

    let { item, addItemToCart } = $props();
</script>

<div class="item-card">
    <div class="img-and-button">
        <picture>
            <source srcset={item.image.desktop} media="(width >= 1216px)" />
            <source srcset={item.image.tablet} media="(688px <= width < 1216px)" />
            <source srcset={item.image.mobile} media="(width < 688px)" />
            <img src={item.image.desktop} alt={item.name} />
        </picture>

        <AddToCart />
    </div>

    <div class="item-info">
        <p class="text4 category">{item.category}</p>
        <p class="text3 name">{item.name}</p>
        <p class="text3 price">${item.price.toFixed(2)}</p>
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

    img {
        height: 240px;
        border-radius: 8px;
        margin-bottom: -22px;
    }

    img.selected {
        box-shadow: 0 0 0 2px var(--red);
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

    @media (688px <= width < 1216px) {
        img {
            height: 212px;
        }
    }

    @media (width < 688px) {
        img {
            height: 212px;
        }
    }
</style>
