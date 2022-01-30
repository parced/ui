import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Button from "./Button.vue";

const BUTTON_LABEL = "My Button";

describe.concurrent("Button component", () => {
    test("renders", () => {
        expect(Button).toBeTruthy();
        const button = shallowMount(Button);
        expect(button.html()).toBeTruthy();
    });

    test("renders the label", () => {
        const button = shallowMount(Button, {
            slots: {
                default: BUTTON_LABEL,
            },
        });

        expect(button.html()).toContain(BUTTON_LABEL);
    });

    test("emit an event when clicked", () => {
        const button = shallowMount(Button);
        button.trigger("click");
        expect(button.emitted().click).toBeTruthy();
    });

    test("emit an event when enter is pressed", () => {
        const button = shallowMount(Button);
        button.trigger("keydown.enter");
        expect(button.emitted().click).toBeTruthy();
    });

    test("emit an event when space is pressed", () => {
        const button = shallowMount(Button);
        button.trigger("keydown.space");
        expect(button.emitted().click).toBeTruthy();
    });

    test("should not emit a click event when disabled", () => {
        const button = shallowMount(Button, {
            props: {
                disabled: true,
            },
        });
        button.trigger("click");
        expect(button.emitted().click).toBeFalsy();
    });

    test("should not emit a click event when loading", () => {
        const button = shallowMount(Button, {
            props: {
                loading: true,
            },
        });
        button.trigger("click");
        expect(button.emitted().click).toBeFalsy();
    });
    test("should not emit a space keydown event when disabled", () => {
        const button = shallowMount(Button, {
            props: {
                disabled: true,
            },
        });
        button.trigger("keydown.space");
        expect(button.emitted().click).toBeFalsy();
    });

    test("should not emit a space keydown event when loading", () => {
        const button = shallowMount(Button, {
            props: {
                loading: true,
            },
        });
        button.trigger("keydown.space");
        expect(button.emitted().click).toBeFalsy();
    });
    test("should not emit an enter keydown event when disabled", () => {
        const button = shallowMount(Button, {
            props: {
                disabled: true,
            },
        });
        button.trigger("keydown.enter");
        expect(button.emitted().click).toBeFalsy();
    });

    test("should not emit an enter keydown event when loading", () => {
        const button = shallowMount(Button, {
            props: {
                loading: true,
            },
        });
        button.trigger("keydown.enter");
        expect(button.emitted().click).toBeFalsy();
    });
});
