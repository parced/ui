import PcLoader, { LoaderProps } from "./Loader.vue";

export default {
    title: "Components/Loader",
    component: PcLoader,
    argTypes: {
        size: {
            control: { type: "radio" },
            defaultValue: "medium",
            options: ["small", "medium", "large"],
        },
        variant: {
            control: { type: "radio" },
            defaultValue: "primary",
            options: ["primary", "inverted"],
        },
        disabled: { type: { name: "boolean", required: false }, defaultValue: false },
    },
};

export const Loader = (args: LoaderProps) => ({
    components: { PcLoader },
    setup() {
        return { args };
    },
    template: '<pc-loader v-bind="args" />',
});
