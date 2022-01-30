<template>
    <div
        :id="`tab-content-${slugifiedTitle}`"
        role="tabpanel"
        tabindex="0"
        :aria-labelledby="`tab-title-${slugifiedTitle}`"
        :class="[selectedId === slugifiedTitle ? 'block' : 'hidden']"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { slugify } from "@utilities/slug";
import { inject } from "vue";

export type TabProps = {
    title: string;
    disabled?: boolean;
};

const { title } = defineProps<TabProps>();
const slugifiedTitle = slugify(title);

const selectedId = inject<string>("selectedId");
</script>
