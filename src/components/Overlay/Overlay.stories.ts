import { useArgs } from "@storybook/client-api";
import PcButton from "../Button/Button.vue";
import PcText from "../Text/Text.vue";
import PcStack from "../Stack/Stack.vue";
import PcOverlay, { OverlayProps } from "./Overlay.vue";

export default {
    title: "Components/Overlay",
    component: PcOverlay,
    argTypes: {
        show: { type: { name: "boolean", required: false }, defaultValue: false },
        persistant: { type: { name: "boolean", required: false }, defaultValue: true },
        onClick: { action: "onClick" },
    },
};

export const Overlay = (args: OverlayProps) => {
    const [{ show }, updateArgs] = useArgs();
    const toggleShow = () => updateArgs({ show: !show });
    const hideOverlay = () => updateArgs({ show: false });

    return {
        components: { PcOverlay, PcButton, PcText, PcStack },
        setup() {
            return { toggleShow, args, show, hideOverlay };
        },
        template: `
            <div id="overlay"></div>

            <pc-button @click="toggleShow">Show overlay</pc-button>

            <pc-overlay v-bind="args" :show="show" @close="hideOverlay">
                <pc-stack justifyContent="center" alignItems="center">
                    <pc-button @click="hideOverlay">Close</pc-button>
                </pc-stack>
            </pc-overlay>
        `,
    };
};
