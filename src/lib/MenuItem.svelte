<script lang="ts">
    import AddToCart from "./AddToCart.svelte";
</script>

<div class="item-card">
    <div class="img-and-button">
        <picture>
            <source srcset="public/images/image-waffle-desktop.jpg" media="(width >= 1216px)" />
            <source
                srcset="public/images/image-waffle-tablet.jpg"
                media="(688px <= width < 1216px)"
            />
            <source srcset="public/images/image-waffle-mobile.jpg" media="(width < 688px)" />
            <img src="public/images/image-waffle-desktop.jpg" alt="Waffle with Berries" />
        </picture>

        <AddToCart />
    </div>

    <div class="item-info">
        <p class="text4 category">Waffle</p>
        <p class="text3 name">Waffle with Berries</p>
        <p class="text3 price">$6.50</p>
    </div>
</div>

<style>
    .item-card {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
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
