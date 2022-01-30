import { describe, expect, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import InputLabel from "../InputLabel/InputLabel.vue";
import Checkbox from "./Checkbox.vue";

const CHECKBOX_LABEL = "My Checkbox Label";

const CHECKBOX_ID = '[data-test-id="checkbox"]';
const CHECKBOX_MIXED_STATE_ID = '[data-test-id="mixed"]';

describe.concurrent("Checkbox component", () => {
    test("renders", () => {
        expect(Checkbox).toBeTruthy();
        const checkbox = shallowMount(Checkbox, { props: { label: CHECKBOX_LABEL } });
        expect(checkbox.html()).toBeTruthy();
    });

    test("emit an event when clicking", () => {
        expect(Checkbox).toBeTruthy();
        const checkBox = shallowMount(Checkbox, { props: { label: CHECKBOX_LABEL } });
        const checkBoxElement = checkBox.find(CHECKBOX_ID);
        checkBoxElement.trigger("click");
        expect(checkBox.emitted().change).toBeTruthy();
    });

    test("doesn't emit an event on click when disabled", () => {
        const checkBox = shallowMount(Checkbox, { props: { label: CHECKBOX_LABEL, disabled: true } });
        const checkBoxElement = checkBox.find(CHECKBOX_ID);
        checkBoxElement.trigger("click");
        expect(checkBox.emitted().change).toBeFalsy();
    });

    test("doesn't emit an event on click when readonly", () => {
        const checkBox = shallowMount(Checkbox, { props: { label: CHECKBOX_LABEL, readonly: true } });
        const checkBoxElement = checkBox.find(CHECKBOX_ID);
        checkBoxElement.trigger("click");
        expect(checkBox.emitted().change).toBeFalsy();
    });

    test("renders the label passed", () => {
        const checkbox = mount(Checkbox, {
            global: {
                components: {
                    "pc-input-label": InputLabel,
                },
            },
            props: { label: CHECKBOX_LABEL },
        });
        const checkboxLabel = checkbox.findComponent(InputLabel);
        expect(checkboxLabel.html()).toContain(CHECKBOX_LABEL);
    });

    test("renders the mixed state", () => {
        const checkbox = shallowMount(Checkbox, {
            props: { mixed: true, label: CHECKBOX_LABEL, value: true },
        });

        const checkBoxElement = checkbox.find(CHECKBOX_MIXED_STATE_ID);
        expect(checkBoxElement.html()).toBeTruthy();
    });

    test("doesn't renders the mixed state when value is false", () => {
        const checkbox = shallowMount(Checkbox, {
            props: { mixed: true, label: CHECKBOX_LABEL, value: false },
        });

        const checkBoxElement = checkbox.find(CHECKBOX_MIXED_STATE_ID);
        expect(() => checkBoxElement.html()).to.throw();
    });

    test("doesn't renders the mixed state when mixed is false and value true", () => {
        const checkbox = shallowMount(Checkbox, {
            props: { mixed: false, label: CHECKBOX_LABEL, value: true },
        });

        const checkBoxElement = checkbox.find(CHECKBOX_MIXED_STATE_ID);
        expect(() => checkBoxElement.html()).to.throw();
    });

    test("doesn't renders the mixed state when mixed is false and value false", () => {
        const checkbox = shallowMount(Checkbox, {
            props: { mixed: false, label: CHECKBOX_LABEL, value: false },
        });

        const checkBoxElement = checkbox.find(CHECKBOX_MIXED_STATE_ID);
        expect(() => checkBoxElement.html()).to.throw();
    });
});
