<template>
    <button
        type="button"
        :class="[
            'relative font-sans rounded select-none transition-colors ease-in duration-200',
            sizeMap[size],
            block && 'w-full',
            disabled ? `${disabledVariantMap[variant]} cursor-not-allowed` : variantMap[variant],
            !disabled && !loading && `${actionsVariantMap[variant]} ${FOCUS_OUTLINE_CLASSES}`,
        ]"
        :tabindex="disabled || loading ? -1 : 0"
        @click="!disabled && !loading && onClick()"
    >
        <div v-if="loading" :class="[loading && 'invisible']">
            <slot />
        </div>
        <slot v-else />
        <div v-if="loading" class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Loader :size="size" :variant="loaderVariantMap[variant]" :disabled="disabled" />
        </div>
    </button>
</template>

<script setup lang="ts">
import Loader, { LoaderProps } from "@components/Loader/Loader.vue";
import { FOCUS_OUTLINE_CLASSES } from "@utilities/focus";

export type ButtonProps = {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outlined" | "clear";
    loading?: boolean;
    disabled?: boolean;
    block?: boolean;
};

export type ButtonEvents = {
    (event: "click"): void;
};

const {
    disabled = false,
    size = "medium",
    variant = "primary",
    loading = false,
    block = false,
} = defineProps<ButtonProps>();
const emit = defineEmits<ButtonEvents>();

const onClick = () => emit("click");

const sizeMap: Record<Exclude<ButtonProps["size"], undefined>, string> = {
    small: "text-sm px-6 py-1.5",
    medium: "text-base px-6 py-2",
    large: "text-lg px-8 py-3",
};

const variantMap: Record<Exclude<ButtonProps["variant"], undefined>, string> = {
    primary: "text-white bg-blue-500 dark:bg-blue-700 border border-transparent",
    secondary: "text-white dark:text-black bg-gray-600 dark:bg-gray-100 border border-transparent",
    outlined: "text-black bg-transparent border border-gray-600 dark:border-white dark:text-white",
    clear: "text-blue-500 bg-transparent border border-transparent",
};

const actionsVariantMap: Record<Exclude<ButtonProps["variant"], undefined>, string> = {
    primary:
        "hover:bg-blue-600 dark:hover:bg-blue-800 active:bg-blue-700 dark:active:bg-blue-900 shadow-md active:shadow-none",
    secondary:
        "hover:bg-gray-700 dark:hover:bg-gray-200 active:bg-black dark:active:bg-gray-300 shadow-md active:shadow-none",
    outlined:
        "hover:border-gray-800 dark:hover:border-gray-200 active:border-black dark:active:border-gray-300 shadow-md active:shadow-none",
    clear: "hover:text-blue-600 active:text-blue-700",
};

const disabledVariantMap: Record<Exclude<ButtonProps["variant"], undefined>, string> = {
    primary: "bg-gray-200 text-gray-400 border border-transparent",
    secondary: "bg-gray-200 text-gray-400 border border-transparent",
    outlined: "bg-transparent border border-gray-400 text-gray-400 hover:border-gray-400",
    clear: "border border-transparent text-gray-400",
};

const loaderVariantMap: Record<Exclude<ButtonProps["variant"], undefined>, LoaderProps["variant"]> = {
    primary: "primary",
    secondary: "secondary",
    outlined: "inverted-secondary",
    clear: "secondary",
};
</script>
