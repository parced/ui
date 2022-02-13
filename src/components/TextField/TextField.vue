<template>
    <label
        :class="[
            'flex-col gap-2 font-normal text-black dark:text-white transition-colors ease-in duration-200',
            block ? 'flex' : 'inline-flex',
        ]"
        :for="inputId"
    >
        <InputLabel :size="size" :required="required" :disabled="disabled" :readonly="readonly">{{ label }}</InputLabel>

        <input
            :id="inputId"
            :class="[
                'rounded placeholder:text-gray-400',
                buttonSizeMap[size],
                disabled
                    ? 'cursor-not-allowed bg-gray-200'
                    : `bg-transparent border ${FOCUS_OUTLINE_CLASSES} ${variantMap[variant]}`,
            ]"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :aria-disabled="disabled"
            :required="required"
            :aria-required="required"
            :readonly="readonly"
            :aria-readonly="readonly"
            :aria-invalid="variant === 'error'"
            :aria-errormessage="variant === 'error' ? helperId : undefined"
            :aria-describedby="variant !== 'error' ? helperId : undefined"
            data-test-id="text-field-input"
            @blur="(event) => emitInputUpdate(event, 'blur')"
            @change="(event) => emitInputUpdate(event, 'change')"
            @input="(event) => emitInputUpdate(event, 'input')"
        />

        <Text
            v-if="helper"
            :id="helperId"
            data-test-id="text-field-helper"
            :color="variant === 'error' ? 'danger' : undefined"
            :variant="helperSizeMap[size]"
            :aria-live="variant === 'error' && helper ? 'polite' : 'off'"
        >
            {{ helper }}
        </Text>
    </label>
</template>

<script lang="ts" setup>
import { FOCUS_OUTLINE_CLASSES } from "@utilities/focus";
import { computed } from "vue";
import { uid } from "uid/single";
import Text, { TextProps } from "@components/Text/Text.vue";
import InputLabel from "@components/InputLabel/InputLabel.vue";

export type TextFieldProps = {
    label: string;
    variant?: "primary" | "error";
    size?: "small" | "medium" | "large";
    type?: "text" | "password" | "email" | "search" | "tel" | "url";
    disabled?: boolean;
    block?: boolean;
    name?: string;
    placeholder?: string;
    helper?: string;
    required?: boolean;
    readonly?: boolean;
};

export type TextFieldEvents = {
    (event: "blur", value: string): void;
    (event: "change", value: string): void;
    (event: "input", value: string): void;
};

const {
    variant = "primary",
    disabled = false,
    size = "medium",
    block = false,
    type = "text",
    label,
    placeholder,
    required,
    helper,
    readonly = false,
} = defineProps<TextFieldProps>();
const emit = defineEmits<TextFieldEvents>();

const emitInputUpdate = (event: Event, eventName: "blur" | "change" | "input") => {
    if (readonly || disabled) {
        return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    emit(eventName, (event.target as HTMLInputElement).value);
};

const buttonSizeMap: Record<Exclude<TextFieldProps["size"], undefined>, string> = {
    small: "text-sm px-2 py-1.5",
    medium: "text-base px-2.5 py-2",
    large: "text-base px-3 py-2.5",
};

const variantMap: Record<Exclude<TextFieldProps["variant"], undefined>, string> = {
    primary:
        "border-gray-600 dark:border-white hover:border-gray-800 dark:hover:border-gray-200 foucs:border-black dark:foucs:border-gray-300",
    error: "border-red-700 hover:border-red-800 focus:border-red-900 dark:focus:border-red-900",
};

const helperSizeMap: Record<Exclude<TextFieldProps["size"], undefined>, TextProps["variant"]> = {
    small: "body-2",
    medium: "body-2",
    large: "body-1",
};

const inputId = computed(() => uid());
const labelId = computed(() => uid());
const helperId = computed(() => uid());
</script>
