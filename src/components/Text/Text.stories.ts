import PcText, { TextProps } from "./Text.vue";

export default {
    title: "Components/Text",
    component: PcText,
};

export const Showcase = () => ({
    components: { PcText },
    template: `
        <div class="flex flex-col gap-4">
            <pc-text variant="display-1">Display 1</pc-text>
            <pc-text variant="display-2">Display 2</pc-text>
            <pc-text variant="display-3">Display 3</pc-text>
            <pc-text variant="featured-1">Featured 1</pc-text>
            <pc-text variant="featured-2">Featured 2</pc-text>
            <pc-text variant="featured-3">Featured 3</pc-text>
            <pc-text variant="title-1">Title 1</pc-text>
            <pc-text variant="title-2">Title 2</pc-text>
            <pc-text variant="title-3">Title 3</pc-text>
            <pc-text variant="body-strong-1">Body strong 1</pc-text>
            <pc-text variant="body-strong-2">Body strong 2</pc-text>
            <pc-text variant="body-medium-1">Body medium 1</pc-text>
            <pc-text variant="body-medium-2">Body medium 2</pc-text>
            <pc-text variant="body-1">Body 1</pc-text>
            <pc-text variant="body-2">Body 2</pc-text>
            <pc-text variant="caption-1">Caption 1</pc-text>
            <pc-text variant="caption-2">Caption 2</pc-text>
        </div>
    `,
});

export const Text = (args: TextProps) => ({
    components: { PcText },
    setup() {
        return { args };
    },
    template: '<pc-text v-bind="args">{{ args.slotContent }}</pc-text>',
});

Text.argTypes = {
    slotContent: { type: { name: "string", required: false }, defaultValue: "Lorem Ipsum" },
    alignment: {
        control: { type: "radio" },
        defaultValue: "left",
        options: ["left", "center", "right", "justify"],
    },
    variant: {
        control: { type: "select" },
        defaultValue: "body-1",
        options: [
            "body-1",
            "body-2",
            "body-medium-1",
            "body-medium-2",
            "body-strong-1",
            "body-strong-2",
            "caption-1",
            "caption-2",
            "display-1",
            "display-2",
            "display-3",
            "featured-1",
            "featured-2",
            "featured-3",
            "title-1",
            "title-2",
            "title-3",
        ],
    },
    color: {
        control: { type: "select" },
        defaultValue: "primary",
        options: ["primary", "inverted", "success", "warning", "danger", "info"],
    },
};
