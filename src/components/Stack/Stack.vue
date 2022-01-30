<template>
    <div
        :class="[
            'flex',
            alignItems && alignItemsMap[alignItems],
            direction && directionMap[direction],
            justifyContent && justifyContentMap[justifyContent],
            spacing && spacingMap[spacing],
        ]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
export type StackProps = {
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    spacing?: 1 | 2 | 4 | 8 | 12;
};

const { alignItems, direction, justifyContent, spacing } = defineProps<StackProps>();

const alignItemsMap: Record<Exclude<StackProps["alignItems"], undefined>, string> = {
    baseline: "items-baseline",
    center: "items-center",
    "flex-end": "items-end",
    "flex-start": "items-start",
    stretch: "items-stretch",
};

const directionMap: Record<Exclude<StackProps["direction"], undefined>, string> = {
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
};

const justifyContentMap: Record<Exclude<StackProps["justifyContent"], undefined>, string> = {
    center: "justify-center",
    "flex-end": "justify-end",
    "flex-start": "justify-start",
    "space-around": "justify-around",
    "space-between": "justify-between",
    "space-evenly": "justify-evenly",
};

const spacingMap: Record<Exclude<StackProps["spacing"], undefined>, string> = {
    1: "gap-1",
    2: "gap-2",
    4: "gap-4",
    8: "gap-8",
    12: "gap-12",
};
</script>
