<template>
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <span
        :class="[
            'select-none font-normal transition-colors ease-in duration-200',
            sizeMap[size],
            disabled || readonly
                ? 'cursor-auto text-gray-500 dark:text-gray-500'
                : 'cursor-pointer text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-200 group-active:text-black dark:group-active:text-gray-300',
        ]"
    >
        <slot />
        {{" "}}
        <span class="text-red-600 font-medium" title="Required">{{ required ? "*" : null }}</span>
    </span>
</template>

<script lang="ts" setup>
export type InputLabelProps = {
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
};

const { size = "medium", disabled = false, required = false, readonly = false } = defineProps<InputLabelProps>();

const sizeMap: Record<Exclude<InputLabelProps["size"], undefined>, string> = {
    small: "text-sm",
    medium: "text-base",
    large: "text-base",
};
</script>
