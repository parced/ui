import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Text, { TextProps } from "./Text.vue";

const TEXT_CONTENT = "My Text";

describe.concurrent("Text component", () => {
    test("renders", () => {
        expect(Text).toBeTruthy();
        const text = shallowMount(Text);
        expect(text.html()).toBeTruthy();
    });

    test("renders the text", () => {
        const text = shallowMount(Text, {
            slots: {
                default: TEXT_CONTENT,
            },
        });

        expect(text.html()).toContain(TEXT_CONTENT);
    });

    test.each<[TextProps["variant"], string]>([
        ["display-1", "H1"],
        ["display-2", "H2"],
        ["display-3", "H3"],
        ["featured-1", "H4"],
        ["featured-2", "H5"],
        ["featured-3", "H6"],
        ["body-strong-1", "STRONG"],
        ["body-strong-2", "STRONG"],
    ])("renders the %p variant with correct tag", (elementVariant: TextProps["variant"], expected: string) => {
        const text = shallowMount(Text, {
            slots: {
                default: TEXT_CONTENT,
            },
            props: {
                variant: elementVariant,
            },
        });

        expect(text.element.tagName).toBe(expected);
    });
});
