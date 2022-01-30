import PcStack, { StackProps } from "./Stack.vue";

export default {
    title: "Layout/Stack",
    component: PcStack,
    argTypes: {
        direction: {
            control: { type: "select" },
            defaultValue: "row",
            options: ["row", "row-reverse", "column", "column-reverse"],
        },
        alignItems: {
            control: { type: "select" },
            defaultValue: "flex-start",
            options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
        },
        justifyContent: {
            control: { type: "select" },
            defaultValue: "flex-start",
            options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
        },
        spacing: {
            control: { type: "select" },
            defaultValue: "default",
            options: ["default", 1, 2, 4, 8, 12],
        },
    },
};

export const Stack = (args: StackProps) => ({
    components: { PcStack },
    setup() {
        return { args };
    },
    template: `
        <pc-stack v-bind="args" class="h-[100vh] w-full">
            <div class="h-[100px] w-[400px] bg-blue-500"></div>
            <div class="h-[100px] w-[400px] bg-red-500"></div>
            <div class="h-[100px] w-[400px] bg-green-500"></div>
        </pc-stack>
    `,
});
