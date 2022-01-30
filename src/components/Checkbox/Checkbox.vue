<template>
    <label
        :class="['inline-flex items-center gap-2 group', FOCUS_OUTLINE_CLASSES]"
        tabindex="0"
        :for="checkboxId"
        data-test-id="checkbox"
        @keyup.prevent.space="onChange"
        @click.prevent="onChange"
    >
        <input
            :id="checkboxId"
            class="sr-only"
            :required="required"
            :readonly="readonly"
            :checked="value"
            :indeterminate="mixed ? true : undefined"
        />
        <span
            :class="[
                'rounded inline-flex justify-center items-center transition-colors ease-in duration-200',
                sizeMap[size],
                disabled || readonly
                    ? `cursor-not-allowed ${variantMap['disabled']}`
                    : `cursor-pointer ${variantMap[`${value}`][variant]}`,
            ]"
            :data-test-id="mixed && value ? 'mixed' : `${value}`"
            aria-hidden="true"
        >
            <component
                :is="mixed && value ? iconMap['mixed'] : iconMap[`${value}`]"
                :class="[iconVariantMap[variant], iconSizeMap[size]]"
            />
        </span>

        <InputLabel :size="size" :required="required" :disabled="disabled" :readonly="readonly">{{ label }}</InputLabel>
    </label>
</template>

<script setup lang="ts">
import { FOCUS_OUTLINE_CLASSES } from "@utilities/focus";
import { uid } from "uid/single";
import { CheckIcon, MinusIcon } from "@heroicons/vue/outline";
import { computed } from "vue";
import type { RenderFunction } from "vue";
import InputLabel from "@components/InputLabel/InputLabel.vue";

export type CheckboxProps = {
    label: string;
    value?: boolean;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary";
    mixed?: boolean;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
};

export type CheckboxEvents = {
    (event: "change", value: boolean): void;
};

const onChange = () => !readonly && !disabled && emit("change", !value);

const {
    label,
    value = false,
    disabled = false,
    required = false,
    readonly = false,
    size = "medium",
    variant = "primary",
    mixed = false,
} = defineProps<CheckboxProps>();
const emit = defineEmits<CheckboxEvents>();

const sizeMap: Record<Exclude<CheckboxProps["size"], undefined>, string> = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-6 w-6",
};

const iconSizeMap: Record<Exclude<CheckboxProps["size"], undefined>, string> = {
    small: "h-3 w-3",
    medium: "h-4 w-4",
    large: "h-5 w-5",
};

const variantMap:
    | Record<
          `${Exclude<CheckboxProps["value"], undefined>}`,
          Record<Exclude<CheckboxProps["variant"], undefined>, string>
      > & { disabled: string } = {
    true: {
        primary:
            "border border-transparent bg-blue-500 dark:bg-blue-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-800 group-active:bg-blue-700 dark:group-active:bg-blue-900",
        // TODO: add secondary color scheme
        secondary: "abcdef",
    },
    false: {
        primary:
            "border border-gray-800 dark:border-white group-hover:border-black dark:group-hover:border-gray-200 group-hover:bg-gray-300 dark:group-hover:bg-gray-200 group-hover:bg-opacity-50 dark:group-hover:bg-opacity-40",
        // TODO: add secondary color scheme
        secondary: "abcdef",
    },
    disabled: "bg-gray-400 dark:bg-gray-600",
};

const iconVariantMap: Record<Exclude<CheckboxProps["variant"], undefined>, string> = {
    primary: "text-white",
    // TODO: add secondary color scheme
    secondary: "abcdef",
};

const iconMap: Record<`${Exclude<CheckboxProps["value"], undefined>}` | "mixed", RenderFunction> = {
    true: CheckIcon,
    false: () => null,
    mixed: MinusIcon,
};

const checkboxId = computed(() => uid());
</script>
