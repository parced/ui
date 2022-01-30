<template>
    <teleport to="#overlay">
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <focus-trap v-if="show" v-model="show" @click="onClick" @keydown.esc="onClick">
            <div
                :class="[
                    'w-full h-full fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center',
                    'overflow-y-auto overscroll-none bg-gray-800 bg-opacity-50',
                    'transition-opacity ease-in duration-1000',
                ]"
                data-test-id="overlay"
            >
                <slot />
            </div>
        </focus-trap>
    </teleport>
</template>

<script setup lang="ts">
import { FocusTrap } from "focus-trap-vue";

export type OverlayProps = {
    show?: boolean;
    persistant?: boolean;
};

export type OverlayEvents = {
    (event: "click"): void;
    (event: "close"): void;
};

const { show = true, persistant = true } = defineProps<OverlayProps>();
const emit = defineEmits<OverlayEvents>();

const onClick = () => {
    emit("click");
    !persistant && emit("close");
};
</script>
