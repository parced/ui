//@ts-ignore
const { alias, sharedPlugins } = require("../vite.config");

module.exports = {
    addons: ["@storybook/addon-essentials", "@storybook/addon-links", "@storybook/addon-a11y", "storybook-dark-mode"],
    core: {
        builder: "storybook-builder-vite",
    },
    framework: "@storybook/vue3",
    staticDirs: ["./assets", "../node_modules/@parced/fonts"],
    stories: ["../src/**/*.stories.ts"],
    async viteFinal(config: any) {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            ...alias,
        };

        config.plugins = [...config.plugins.filter((plugin: any) => plugin.name !== "vite:vue"), ...sharedPlugins];

        return config;
    },
};
