import PcAlert, { AlertProps } from "./Alert.vue";

export default {
    title: "Components/Alert",
    component: PcAlert,
    argTypes: {
        title: { type: { name: "string", required: false }, defaultValue: "Alert Title" },
        subtitle: { type: { name: "string", required: false }, defaultValue: "Alert Subtitle" },
        onClose: { action: "onClose" },
    },
};

export const Showcase = (args: AlertProps) => ({
    components: { PcAlert },
    setup() {
        return { args };
    },
    template: `
        <div class="flex flex-col gap-4">
            <div class="flex gap-4">
                <pc-alert v-bind="args" variant="success" />
                <pc-alert v-bind="args" variant="success" :closable="false" />
                <div><pc-alert v-bind="args" variant="success" :multiline="false" /></div>
            </div>
            <div class="flex gap-4">
                <pc-alert v-bind="args" variant="warning" />
                <pc-alert v-bind="args" variant="warning" :closable="false" />
                <div><pc-alert v-bind="args" variant="warning" :multiline="false" /></div>
            </div>
            <div class="flex gap-4">
                <pc-alert v-bind="args" variant="danger" />
                <pc-alert v-bind="args" variant="danger" :closable="false" />
                <div><pc-alert v-bind="args" variant="danger" :multiline="false" /></div>
            </div>
            <div class="flex gap-4">
                <pc-alert v-bind="args" variant="info" />
                <pc-alert v-bind="args" variant="info" :closable="false" />
                <div><pc-alert v-bind="args" variant="info" :multiline="false" /></div>
            </div>
        </div>
    `,
});

export const Alert = (args: AlertProps) => ({
    components: { PcAlert },
    setup() {
        return { args };
    },
    template: '<pc-alert v-bind="args"></pc-alert>',
});

Alert.argTypes = {
    block: { type: { name: "boolean", required: false }, defaultValue: false },
    closable: { type: { name: "boolean", required: false }, defaultValue: true },
    multiline: { type: { name: "boolean", required: false }, defaultValue: true },
    variant: {
        control: { type: "radio" },
        defaultValue: "success",
        options: ["success", "warning", "danger", "info"],
    },
};
