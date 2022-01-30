<template>
    <div
        :role="closable ? 'alertdialog' : 'alert'"
        :aria-live="variant === 'danger' ? 'assertive' : 'polite'"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId"
        :class="['items-start gap-2 p-4 rounded', variantMap[variant], block ? 'flex' : 'inline-flex']"
    >
        <component :is="iconMap[variant]" class="w-6 h-6" />
        <div
            :class="['flex-grow inline-flex gap-2', !block && 'max-w-[50ch]', multiline ? 'flex-col' : 'items-center']"
        >
            <Text v-if="title" :id="titleId" variant="body-strong-1" :color="variant">
                {{ title }}
            </Text>
            <Text v-if="subtitle" :id="descriptionId" variant="body-2" :color="variant">
                {{ subtitle }}
            </Text>
        </div>
        <button
            v-if="closable"
            :class="['w-6 h-6 cursor-pointer rounded', closeIconVariantMap[variant], FOCUS_OUTLINE_CLASSES]"
            aria-label="Close"
            data-test-id="alert-close"
            @click="onClose"
        >
            <XIcon />
        </button>
    </div>
</template>

<script setup lang="ts">
import type { RenderFunction } from "vue";
import { computed } from "vue";
import Text from "@components/Text/Text.vue";
import { FOCUS_OUTLINE_CLASSES } from "@utilities/focus";
import { CheckIcon, ExclamationIcon, InformationCircleIcon, XIcon } from "@heroicons/vue/outline";
import { uid } from "uid/single";

export type AlertProps = {
    variant?: "success" | "warning" | "danger" | "info";
    title?: string;
    subtitle?: string;
    block?: boolean;
    closable?: boolean;
    multiline?: boolean;
};

export type AlertEvents = {
    (event: "close"): void;
};

const {
    variant = "info",
    title,
    subtitle,
    block = false,
    closable = true,
    multiline = true,
} = defineProps<AlertProps>();
const emit = defineEmits<AlertEvents>();

const onClose = () => emit("close");

const variantMap: Record<Exclude<AlertProps["variant"], undefined>, string> = {
    success: "bg-emerald-200 text-emerald-700",
    warning: "bg-yellow-200 text-yellow-700",
    danger: "bg-red-200 text-red-700",
    info: "bg-sky-200 text-sky-700",
};

const closeIconVariantMap: Record<Exclude<AlertProps["variant"], undefined>, string> = {
    success: "text-emerald-700 hover:text-emerald-800 active:text-emerald-900",
    warning: "text-yellow-700 hover:text-yellow-800 active:text-yellow-900",
    danger: "text-red-700 hover:text-red-800 active:text-red-900",
    info: "text-sky-700 hover:text-sky-800 active:text-sky-900",
};

const iconMap: Record<Exclude<AlertProps["variant"], undefined>, RenderFunction> = {
    success: CheckIcon,
    warning: ExclamationIcon,
    danger: ExclamationIcon,
    info: InformationCircleIcon,
};

const titleId = computed(() => uid());
const descriptionId = computed(() => uid());
</script>
