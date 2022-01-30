import { describe, expect, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import InputLabel from "../InputLabel/InputLabel.vue";
import TextField from "./TextField.vue";

const TEXT_FIELD_LABEL = "My TextField Label";
const TEXT_FIELD_CONTENT = "My TextField Content";
const TEXT_FIELD_HELPER = "An helper text";

const TEXT_FIELD_INPUT_ID = '[data-test-id="text-field-input"]';
const TEXT_FIELD_HELPER_ID = '[data-test-id="text-field-helper"]';

describe.concurrent("TextField component", () => {
    test("renders", () => {
        expect(TextField).toBeTruthy();
        const textField = shallowMount(TextField, { props: { label: TEXT_FIELD_LABEL } });
        expect(textField.html()).toBeTruthy();
    });

    test("renders the label passed", () => {
        const textField = mount(TextField, {
            global: {
                components: {
                    "pc-input-label": InputLabel,
                },
            },
            props: { label: TEXT_FIELD_LABEL },
        });
        const textFieldLabel = textField.findComponent(InputLabel);
        expect(textFieldLabel.html()).toContain(TEXT_FIELD_LABEL);
    });

    test("emit an event when typing", () => {
        const textField = shallowMount(TextField, { props: { label: TEXT_FIELD_LABEL } });
        const textFieldInput = textField.find(TEXT_FIELD_INPUT_ID);
        textFieldInput.setValue(TEXT_FIELD_CONTENT);
        expect((textFieldInput.element as HTMLInputElement).value).toBe(TEXT_FIELD_CONTENT);
        expect(textField.emitted().input).toBeTruthy();
        expect(textField.emitted().change).toBeTruthy();
    });

    test("doesn't emit an event on typing when disabled", () => {
        const textField = shallowMount(TextField, { props: { label: TEXT_FIELD_LABEL, disabled: true } });
        const textFieldInput = textField.find(TEXT_FIELD_INPUT_ID);
        textFieldInput.setValue(TEXT_FIELD_CONTENT);
        expect((textFieldInput.element as HTMLInputElement).value).toBe(TEXT_FIELD_CONTENT);
        expect(textField.emitted().input).toBeFalsy();
        expect(textField.emitted().change).toBeFalsy();
    });

    test("doesn't emit an event on typing when readonly", () => {
        const textField = shallowMount(TextField, { props: { label: TEXT_FIELD_LABEL, readonly: true } });
        const textFieldInput = textField.find(TEXT_FIELD_INPUT_ID);
        textFieldInput.setValue(TEXT_FIELD_CONTENT);
        expect((textFieldInput.element as HTMLInputElement).value).toBe(TEXT_FIELD_CONTENT);
        expect(textField.emitted().input).toBeFalsy();
        expect(textField.emitted().change).toBeFalsy();
    });

    test("shows a helper", () => {
        const textField = mount(TextField, { props: { label: TEXT_FIELD_LABEL, helper: TEXT_FIELD_HELPER } });
        const textFieldHelper = textField.find(TEXT_FIELD_HELPER_ID);
        expect(textFieldHelper.html()).toContain(TEXT_FIELD_HELPER);
    });
});
