import PcTabs, { TabsProps } from "./Tabs.vue";
import PcTab from "./Tab.vue";
import PcText from "../Text/Text.vue";
import { useArgs } from "@storybook/client-api";

export default {
    title: "Components/Tabs",
    component: PcTabs,
    argTypes: {
        selectedId: {
            type: { name: "string", required: false },
            defaultValue: "",
        },
        size: {
            control: { type: "radio" },
            defaultValue: "medium",
            options: ["small", "medium", "large"],
        },
        variant: {
            control: { type: "radio" },
            defaultValue: "primary",
            options: ["primary", "secondary"],
        },
    },
};

export const Tabs = (args: TabsProps) => {
    const [{ selectedId }, updateArgs] = useArgs();
    const setSelectedId = (id: string) => updateArgs({ selectedId: id });

    return {
        components: { PcTabs, PcTab, PcText },
        setup() {
            return { selectedId, setSelectedId, args };
        },
        template: `
            <pc-tabs v-bind="args" :selectedId="selectedId" @change="setSelectedId">
                <pc-tab title="Tab 1">
                    <pc-text>Content of tab 1</pc-text>
                </pc-tab>
                <pc-tab title="Tab 2">
                    <pc-text>Content of tab 2</pc-text>
                </pc-tab>
                <pc-tab title="Tab 3" disabled>
                    <pc-text>Content of tab 3</pc-text>
                </pc-tab>
            </pc-tabs>
        `,
    };
};
