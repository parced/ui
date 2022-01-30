import PcInputLabel, { InputLabelProps } from "./InputLabel.vue";

export default {
    title: "Components/Input Label",
    component: PcInputLabel,
    argTypes: {
        size: {
            control: { type: "radio" },
            defaultValue: "medium",
            options: ["small", "medium", "large"],
        },
        defaultSlot: { type: { name: "string", required: false }, defaultValue: "Text Field Label" },
        disabled: { type: { name: "boolean", required: false }, defaultValue: false },
        required: { type: { name: "boolean", required: false }, defaultValue: false },
        readonly: { type: { name: "boolean", required: false }, defaultValue: false },
        onChange: { action: "onChange" },
    },
};

export const InputLabel = (args: InputLabelProps) => ({
    components: { PcInputLabel },
    setup() {
        return { args };
    },
    template: '<pc-input-label v-bind="args">{{ args.defaultSlot }}</pc-input-label>',
});
