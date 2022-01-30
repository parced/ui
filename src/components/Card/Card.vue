<template>
    <component
        :is="component ?? (to ? 'a' : 'div')"
        class="max-w-[300px] cursor-pointer flex flex-col bg-white dark:bg-gray-800 rounded shadow-lg overflow-hidden select-none border dark:border-gray-900"
        :href="to"
        @click="!to && onClick()"
    >
        <Pattern v-if="coverUrl" type="polka">
            <div class="flex items-center justify-center h-[200px] -mt-1">
                <img
                    v-if="!wrongCoverUrl"
                    :src="coverUrl"
                    :alt="coverAlt"
                    :class="['w-full', maximizeCover ? 'object-contain' : 'object-scale-down']"
                    data-test-id="card-image"
                    @error="onLoadingCoverError"
                />
                <div
                    v-if="wrongCoverUrl"
                    class="flex flex-col text-yellow-700 items-center max-w-[140px]"
                    data-test-id="card-image-error"
                >
                    <ExclamationIcon class="w-24 h-24" />
                    <Text alignment="center">Error while loading the cover.</Text>
                </div>
            </div>
        </Pattern>
        <div class="flex flex-col p-4" data-test-id="card-content">
            <slot />
        </div>
    </component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { RenderFunction } from "vue";
import Text from "@components/Text/Text.vue";
import Pattern from "@components/Pattern/Pattern.vue";
import { ExclamationIcon } from "@heroicons/vue/outline";

export type CardProps = {
    coverUrl?: string;
    coverAlt?: string;
    maximizeCover?: boolean;
    to?: string;
    component?: string | RenderFunction;
};

type CardEvent = {
    (event: "click"): void;
};

const { coverUrl, to, component = "div", maximizeCover = true } = defineProps<CardProps>();
const emit = defineEmits<CardEvent>();

const wrongCoverUrl = ref(false);
const onLoadingCoverError = () => (wrongCoverUrl.value = true);

const onClick = () => emit("click");
</script>
