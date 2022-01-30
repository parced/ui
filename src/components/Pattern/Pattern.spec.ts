import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Pattern from "./Pattern.vue";

const PATTERN_CONTENT = "Some content";

describe.concurrent("Pattern component", () => {
    test("renders", () => {
        expect(Pattern).toBeTruthy();
        const pattern = shallowMount(Pattern, {
            props: {
                type: "polka",
            },
        });
        expect(pattern.html()).toBeTruthy();
    });

    test("renders the content", () => {
        const pattern = shallowMount(Pattern, {
            props: {
                type: "polka",
            },
            slots: {
                default: PATTERN_CONTENT,
            },
        });

        expect(pattern.html()).toContain(PATTERN_CONTENT);
    });

    test("adds the class for the correct pattern", () => {
        const pattern = shallowMount(Pattern, {
            props: {
                type: "polka",
            },
        });
        expect(pattern.classes()).toContain("type-polka");
    });
});
