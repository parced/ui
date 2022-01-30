import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import InputLabel from "./InputLabel.vue";

const INPUT_LABEL_CONTENT = "My Input Label";

describe.concurrent("InputLabel component", () => {
   test("renders", () => {
        expect(InputLabel).toBeTruthy();
        const inputLabel = shallowMount(InputLabel, {
            slots: {
                default: INPUT_LABEL_CONTENT,
            },
        });
        expect(inputLabel.html()).toBeTruthy();
    });

   test("renders the label", () => {
        const inputLabel = shallowMount(InputLabel, {
            slots: {
                default: INPUT_LABEL_CONTENT,
            },
        });
        expect(inputLabel.html()).toContain(INPUT_LABEL_CONTENT);
    });

   test("renders the asterisk with required", () => {
        const inputLabel = shallowMount(InputLabel, {
            props: {
                required: true,
            },
            slots: {
                default: INPUT_LABEL_CONTENT,
            },
        });
        expect(inputLabel.html()).toContain("*");
    });
});
