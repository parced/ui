import { useArgs } from "@storybook/client-api";
import PcCheckbox, { CheckboxProps } from "./Checkbox.vue";

export default {
    title: "Components/Checkbox",
    component: PcCheckbox,
    argTypes: {
        value: { type: { name: "boolean", required: false }, defaultValue: false },
        size: {
            control: { type: "radio" },
            defaultValue: "medium",
            options: ["small", "medium", "large"],
        },
        label: { type: { name: "string", required: false }, defaultValue: "Checkbox Label" },
        name: { type: { name: "string", required: false }, defaultValue: "Checkbox Name" },
        mixed: { type: { name: "boolean", required: false }, defaultValue: false },
        disabled: { type: { name: "boolean", required: false }, defaultValue: false },
        required: { type: { name: "boolean", required: false }, defaultValue: false },
        readonly: { type: { name: "boolean", required: false }, defaultValue: false },
        onChange: { action: "onChange" },
    },
};

export const Checkbox = (args: CheckboxProps) => {
    const [{ value }, updateArgs] = useArgs();
    const toggleValue = () => updateArgs({ value: !value });

    return {
        components: { PcCheckbox },
        setup() {
            return { args, toggleValue, value };
        },
        template: '<pc-checkbox v-bind="args" :value="value" @change="toggleValue" />',
    };
};
