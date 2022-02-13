import PcButton, { ButtonProps } from "./Button.vue";

export default {
    title: "Components/Button",
    component: PcButton,
    argTypes: {
        slotDefault: { type: { name: "string", required: false }, defaultValue: "Button" },
        size: {
            control: { type: "radio" },
            defaultValue: "medium",
            options: ["small", "medium", "large"],
        },
        onClick: { action: "onClick" },
    },
};

export const Showcase = (args: ButtonProps) => ({
    components: { PcButton },
    setup() {
        return { args };
    },
    template: `
        <div class="flex flex-col gap-8">
            <div class="flex gap-4">
                <pc-button variant="primary" v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="primary" loading v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="primary" disabled v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="primary" disabled loading v-bind="args">{{ args.slotDefault }}</pc-button>
            </div>
            <div class="flex gap-4">
                <pc-button variant="secondary" v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="secondary" loading v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="secondary" disabled v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="secondary" disabled loading v-bind="args">{{ args.slotDefault }}</pc-button>
            </div>
            <div class="flex gap-4">
                <pc-button variant="outlined" v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="outlined" loading v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="outlined" disabled v-bind="args">{{ args.slotDefault }}</pc-button>
                <pc-button variant="outlined" disabled loading v-bind="args">{{ args.slotDefault }}</pc-button>
            </div>
        </div>
    `,
});

export const Button = (args: ButtonProps) => ({
    components: { PcButton },
    setup() {
        return { args };
    },
    template: `
        <pc-button v-bind="args">
            {{ args.slotDefault }}
        </pc-button>
    `,
});

Button.argTypes = {
    disabled: { type: { name: "boolean", required: false }, defaultValue: false },
    loading: { type: { name: "boolean", required: false }, defaultValue: false },
    block: { type: { name: "boolean", required: false }, defaultValue: false },
    variant: {
        control: { type: "radio" },
        defaultValue: "primary",
        options: ["primary", "secondary", "outlined", "clear"],
    },
};
