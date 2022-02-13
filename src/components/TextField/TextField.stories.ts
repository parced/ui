import PcTextField, { TextFieldProps } from "./TextField.vue";

export default {
    title: "Components/Text Field",
    component: PcTextField,
    argTypes: {
        variant: {
            control: { type: "radio" },
            defaultValue: "primary",
            options: ["primary", "error"],
        },
        size: {
            control: { type: "radio" },
            defaultValue: "medium",
            options: ["small", "medium", "large"],
        },
        type: {
            control: { type: "select" },
            defaultValue: "text",
            options: ["text", "password", "email", "search", "tel", "url"],
        },
        label: { type: { name: "string", required: false }, defaultValue: "Text Field Label" },
        placeholder: { type: { name: "string", required: false }, defaultValue: "Text Field Placeholder" },
        name: { type: { name: "string", required: false }, defaultValue: "Text Field Name" },
        helper: { type: { name: "string", required: false }, defaultValue: "Helper below the Text Field" },
        disabled: { type: { name: "boolean", required: false }, defaultValue: false },
        readonly: { type: { name: "boolean", required: false }, defaultValue: false },
        block: { type: { name: "boolean", required: false }, defaultValue: false },
        required: { type: { name: "boolean", required: false }, defaultValue: false },
        onBlur: { action: "onBlur" },
        onChange: { action: "onChange" },
        onInput: { action: "onInput" },
    },
};

export const TextField = (args: TextFieldProps) => ({
    components: { PcTextField },
    setup() {
        return { args };
    },
    template: `
        <pc-text-field v-bind="args" />
    `,
});
