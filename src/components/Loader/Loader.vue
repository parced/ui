<template>
    <svg
        :class="['animate-spin', sizeMap[size], disabled ? 'text-gray-600' : variantMap[variant]]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="img"
        :aria-labelledby="titleId"
    >
        <title :id="titleId">Loader icon</title>
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
    </svg>
</template>

<script setup lang="ts">
import { uid } from "uid/single";
import { computed } from "vue";

export type LoaderProps = {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "inverted-secondary";
    disabled?: boolean;
};

const { size = "medium", variant = "primary", disabled = false } = defineProps<LoaderProps>();

const sizeMap: Record<Exclude<LoaderProps["size"], undefined>, string> = {
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-8 w-8",
};

const variantMap: Record<Exclude<LoaderProps["variant"], undefined>, string> = {
    primary: "text-white",
    secondary: "text-white dark:text-black",
    "inverted-secondary": "text-black dark:text-white",
};

const titleId = computed(() => uid());
</script>
