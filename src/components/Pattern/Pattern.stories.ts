import PcPattern, { PatternProps } from "./Pattern.vue";

export default {
    title: "Components/Pattern",
    component: PcPattern,
    argTypes: {
        type: {
            control: { type: "radio" },
            defaultValue: "polka",
            options: ["cross", "polka", "polkav2", "rectangle"],
        },
    },
};

export const Pattern = (args: PatternProps) => ({
    components: { PcPattern },
    setup() {
        return { args };
    },
    template: `
        <div class="h-80 w-80">
            <pc-pattern v-bind="args">
                <div class="flex items-center justify-center h-full">
                    <div class="h-20 w-20 bg-red-500"></div>
                </div>
            </pc-pattern>
        </div>
    `,
});
