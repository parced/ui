<template>
    <div class="select-none flex gap-8" role="tablist">
        <button
            v-for="tab of tabs"
            :id="`tab-title-${tab.id}`"
            :key="tab.id"
            :ref="(element) => setItemRef(tab.id, element as HTMLButtonElement)"
            :class="[
                'font-medium',
                FOCUS_OUTLINE_CLASSES,
                sizeMap[size],
                tab.disabled
                    ? `cursor-not-allowed ${variantMap[`${selectedIdRef === tab.id}`]['disabled']}`
                    : `cursor-pointer ${variantMap[`${selectedIdRef === tab.id}`][variant]}`,
            ]"
            role="tab"
            :tabindex="selectedIdRef === tab.id ? 0 : -1"
            :aria-selected="selectedIdRef === tab.id"
            :aria-controls="`tab-content-${tab.id}`"
            @click="() => !tab.disabled && emit('change', tab.id)"
            @keydown.left="() => selectPreviousTab(tab.id)"
            @keydown.right="() => selectNextTab(tab.id)"
        >
            {{ tab.title }}
        </button>
    </div>
    <div class="pt-2">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, provide, ref, useSlots, watch } from "vue";
import { FOCUS_OUTLINE_CLASSES } from "@utilities/focus";
import { TabProps } from "./Tab.vue";
import { slugify } from "@utilities/slug";

export type TabsProps = {
    selectedId?: string;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary";
};

// TODO: add animation when changing tabs
export type TabsEvents = {
    (event: "change", value: string): void;
};

const { variant = "primary", size = "medium", selectedId = "" } = defineProps<TabsProps>();
const emit = defineEmits<TabsEvents>();

const slots = useSlots();

const sizeMap: Record<Exclude<TabsProps["size"], undefined>, string> = {
    small: "text-sm pb-0.5 border-b-2",
    medium: "text-base pb-1 border-b-4",
    large: "text-lg pb-1.5 border-b-4",
};

const variantMap: Record<`${boolean}`, Record<Exclude<TabsProps["variant"], undefined> | "disabled", string>> = {
    true: {
        primary: "border-blue-500 dark:border-blue-700 text-black dark:text-white",
        // TODO: add secondary color scheme
        secondary: "abcdef",
        disabled: "text-gray-400 dark:text-gray-500 border-gray-400",
    },
    false: {
        primary:
            "border-transparent hover:border-blue-500 hover:border-opacity-40 dark:hover:border-opacity-40 text-black dark:text-white",
        // TODO: add secondary color scheme
        secondary: "abcdef",
        disabled: "text-gray-400 dark:text-gray-500 border-transparent",
    },
};

const tabs = ref<(TabProps & { id: string })[]>([]);

// Makes the provide reactive as props seems to not be
const selectedIdRef = ref(selectedId);
provide("selectedId", selectedIdRef);

const itemRefs = ref<Record<string, HTMLButtonElement>>({});
const setItemRef = (id: string, element: HTMLButtonElement) => {
    if (element) {
        itemRefs.value[id] = element;
    }
};

const selectPreviousTab = (id: string) => {
    const enabledTabs = tabs.value.filter((tab) => tab.disabled === false || tab.disabled === undefined);
    const itemIndex = enabledTabs.findIndex((tab) => tab.id === id);
    const previousItemIndex = itemIndex === 0 ? enabledTabs.length - 1 : itemIndex - 1;
    const previousItemId = enabledTabs[previousItemIndex].id;
    emit("change", previousItemId);
    itemRefs.value[previousItemId].focus();
};

const selectNextTab = (id: string) => {
    const enabledTabs = tabs.value.filter((tab) => tab.disabled === false || tab.disabled === undefined);
    const itemIndex = enabledTabs.findIndex((tab) => tab.id === id);
    const nextItemIndex = itemIndex === enabledTabs.length - 1 ? 0 : itemIndex + 1;
    const nextItemId = enabledTabs[nextItemIndex].id;
    emit("change", nextItemId);
    itemRefs.value[nextItemId].focus();
};

watch(
    () => selectedId,
    () => {
        if (selectedId) {
            selectedIdRef.value = selectedId;
            itemRefs.value[selectedId] && itemRefs.value[selectedId].focus();
        }
    },
);

onMounted(() => {
    tabs.value = slots.default?.()
        ? slots.default().map((tab) => ({
              id: slugify(tab.props?.title),
              title: tab.props?.title,
              disabled: tab.props?.disabled !== false && tab.props?.disabled !== undefined,
          }))
        : [];

    if (!selectedId) {
        selectedIdRef.value = tabs.value[0].id;
    }
});
</script>
