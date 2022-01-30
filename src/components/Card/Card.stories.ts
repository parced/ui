import PcText from "../Text/Text.vue";
import PcCard, { CardProps } from "./Card.vue";

export default {
    title: "Components/Card",
    component: PcCard,
    argTypes: {
        title: { type: { name: "string", required: false }, defaultValue: "Card Title" },
        subtitle: { type: { name: "string", required: false }, defaultValue: "Card Subtitle" },
        content: { type: { name: "string", required: false }, defaultValue: "Card Content" },
        coverUrl: { type: { name: "string", required: false }, defaultValue: "https://picsum.photos/300/200" },
        coverAlt: { type: { name: "string", required: false }, defaultValue: "a random image from picsum.photos" },
        maximizeCover: { type: { name: "boolean", required: false }, defaultValue: true },
        to: { type: { name: "string", required: false }, defaultValue: "" },
        onClick: { action: "onClick" },
    },
};

export const Card = (args: CardProps) => ({
    components: { PcCard, PcText },
    setup() {
        return { args };
    },
    template: `
        <pc-card v-bind="args">
            <pc-text variant="body-medium-2" class="text-gray-400 pb-2" v-if="args.subtitle">{{ args.subtitle }}</pc-text>
            <pc-text variant="title-3" weight="bold" size="large" v-if="args.title">{{ args.title }}</pc-text>
            <pc-text variant="body-2" size="large" v-if="args.content">{{ args.content }}</pc-text>
        </pc-card>
    `,
});
