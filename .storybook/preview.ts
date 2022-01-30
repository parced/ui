import "@parced/fonts";
import "../src/styles.css";
import { light, dark } from "./parcedTheme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ["Intro", "Tokens", "Layout", "Components"],
        },
    },
    darkMode: {
        darkClass: "dark",
        classTarget: "html",
        stylePreview: true,
        light: { ...light },
        dark: { ...dark },
    },
};
