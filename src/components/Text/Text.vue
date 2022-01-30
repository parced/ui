<template>
    <component
        :is="tagMap[variant]"
        :class="['font-sans', alignmentMap[alignment], variantMap[variant], colorMap[color]]"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
export type TextProps = {
    variant?:
        | "body-1"
        | "body-2"
        | "body-medium-1"
        | "body-medium-2"
        | "body-strong-1"
        | "body-strong-2"
        | "caption-1"
        | "caption-2"
        | "display-1"
        | "display-2"
        | "display-3"
        | "featured-1"
        | "featured-2"
        | "featured-3"
        | "title-1"
        | "title-2"
        | "title-3";
    alignment?: "left" | "center" | "right" | "justify";
    color?: "primary" | "inverted" | "success" | "warning" | "danger" | "info";
};

const { alignment = "left", variant = "body-1", color = "primary" } = defineProps<TextProps>();

const alignmentMap: Record<Exclude<TextProps["alignment"], undefined>, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
};

const variantMap: Record<Exclude<TextProps["variant"], undefined>, string> = {
    "body-1": "font-normal text-base",
    "body-2": "font-normal text-sm",
    "body-medium-1": "font-medium text-base",
    "body-medium-2": "font-medium text-sm",
    "body-strong-1": "font-bold text-base",
    "body-strong-2": "font-bold text-sm",
    "caption-1": "font-light text-xs",
    "caption-2": "font-light text-2xs",
    "display-1": "font-black text-8xl",
    "display-2": "font-black text-6xl",
    "display-3": "font-black text-4xl",
    "featured-1": "font-normal text-3xl",
    "featured-2": "font-normal text-2xl",
    "featured-3": "font-normal text-xl",
    "title-1": "font-bold text-3xl",
    "title-2": "font-bold text-2xl",
    "title-3": "font-bold text-xl",
};

const tagMap: Record<Exclude<TextProps["variant"], undefined>, string> = {
    "body-1": "span",
    "body-2": "span",
    "body-medium-1": "span",
    "body-medium-2": "span",
    "body-strong-1": "strong",
    "body-strong-2": "strong",
    "caption-1": "span",
    "caption-2": "span",
    "display-1": "h1",
    "display-2": "h2",
    "display-3": "h3",
    "featured-1": "h4",
    "featured-2": "h5",
    "featured-3": "h6",
    "title-1": "span",
    "title-2": "span",
    "title-3": "span",
};

const colorMap: Record<Exclude<TextProps["color"], undefined>, string> = {
    primary: "text-black dark:text-white",
    inverted: "text-white dark:text-black",
    success: "text-emerald-700",
    warning: "text-yellow-700",
    danger: "text-red-700",
    info: "text-sky-700",
};
</script>
