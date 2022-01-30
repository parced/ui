import { create } from "@storybook/theming";

// TODO: add brand color
export const light = create({
    base: "light",

    // colorPrimary: "hotpink",
    colorSecondary: "#2873F2",

    // UI
    // appBg: "white",
    // appContentBg: "silver",
    // appBorderColor: "grey",
    // appBorderRadius: 4,

    // Typography
    fontBase: '"Manrope VF", Manrope, sans-serif',
    fontCode: "monospace",

    // Text colors
    // textColor: "black",
    // textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    // barTextColor: "silver",
    barSelectedColor: "#2873F2",
    // barBg: "hotpink",

    // Form colors
    // inputBg: "white",
    // inputBorder: "silver",
    // inputTextColor: "black",
    // inputBorderRadius: 4,

    brandTitle: "Parced storybook",
    brandUrl: "https://parced.app",
    brandImage: "/logo_with_text.svg",
});

export const dark = create({
    base: "dark",

    // colorPrimary: "hotpink",
    colorSecondary: "#2873F2",

    // UI
    // appBg: "white",
    // appContentBg: "silver",
    // appBorderColor: "grey",
    // appBorderRadius: 4,

    // Typography
    fontBase: '"Manrope VF", Manrope, sans-serif',
    fontCode: "monospace",

    // Text colors
    // textColor: "black",
    // textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    // barTextColor: "silver",
    barSelectedColor: "#2873F2",
    // barBg: "hotpink",

    // Form colors
    // inputBg: "white",
    // inputBorder: "silver",
    // inputTextColor: "black",
    // inputBorderRadius: 4,

    brandTitle: "Parced storybook",
    brandUrl: "https://parced.app",
    brandImage: "/logo_with_text_dark.svg",
});
