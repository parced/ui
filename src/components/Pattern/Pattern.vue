<template>
    <div :class="['h-full w-full', typeMap[type]]">
        <slot />
    </div>
</template>

<script setup lang="ts">
export type PatternProps = {
    type: "cross" | "polka" | "polkav2" | "rectangle";
};

const { type = "polka" } = defineProps<PatternProps>();

const typeMap: Record<Exclude<PatternProps["type"], undefined>, string> = {
    cross: "type-cross",
    polka: "type-polka",
    polkav2: "type-polkav2",
    rectangle: "type-rectangle",
};
</script>

<style scoped>
.type-cross {
    background: radial-gradient(circle, transparent 20%, transparent 20%, transparent 80%, transparent 80%, transparent),
        radial-gradient(circle, transparent 20%, transparent 20%, transparent 80%, transparent 80%, transparent) 25px 25px,
        linear-gradient(#45b3f7 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #45b3f7 2px, transparent 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
}

.type-polka {
    background-image: radial-gradient(#45b3f7 1.3px, transparent 1.3px);
    background-size: 16px 16px;
}

.type-polkav2 {
    background-image: radial-gradient(#45b3f7 1.1px, transparent 1.1px), radial-gradient(#45b3f7 1.1px, transparent 1.1px);
    background-size: 16px 16px;
    background-position: 0 0, 8px 8px;
}

.type-rectangle {
    background-image: repeating-linear-gradient(
            45deg,
            #45b3f7 25%,
            transparent 25%,
            transparent 75%,
            #45b3f7 75%,
            #45b3f7
        ),
        repeating-linear-gradient(45deg, #45b3f7 25%, transparent 25%, transparent 75%, #45b3f7 75%, #45b3f7);
    background-position: 0 0, 8px 8px;
    background-size: 16px 16px;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .type-polka {
        background-image: radial-gradient(#45b3f7 0.65px, transparent 0.65px);
        background-size: 16px 16px;
    }

    .type-polkav2 {
        background-image: radial-gradient(#45b3f7 0.65px, transparent 0.65px),
            radial-gradient(#45b3f7 0.65px, transparent 0.65px);
        background-size: 16px 16px;
        background-position: 0 0, 8px 8px;
    }
}
</style>
