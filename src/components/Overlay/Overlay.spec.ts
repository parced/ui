import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { FocusTrap } from "focus-trap-vue";
import Text from "../Text/Text.vue";
import Overlay from "./Overlay.vue";

const OVERLAY_LABEL = "My Overlay Text";
const OVERLAY_SLOT_COMPONENT = `<pc-text tabindex="0">${OVERLAY_LABEL}</pc-text>`;

const OVERLAY_ID = '[data-test-id="overlay"]';

describe.concurrent("Overlay component", () => {
    test("renders", () => {
        expect(Overlay).toBeTruthy();
        const overlay = mount(Overlay, {
            attachTo: document.body,
            global: {
                components: {
                    "pc-text": Text,
                    "focus-trap": FocusTrap,
                },
                stubs: {
                    teleport: true,
                },
            },
            slots: {
                default: OVERLAY_SLOT_COMPONENT,
            },
        });

        const overlayContent = overlay.getComponent(Text);
        expect(overlayContent.html()).toContain(OVERLAY_LABEL);
    });

    test("doesn't renders the content when it is not shown", () => {
        const overlay = mount(Overlay, {
            global: {
                components: {
                    "pc-text": Text,
                    "focus-trap": FocusTrap,
                },
                stubs: {
                    teleport: true,
                },
            },
            slots: {
                default: OVERLAY_SLOT_COMPONENT,
            },
            props: {
                show: false,
            },
        });

        expect(() => overlay.getComponent(Text)).to.throw();
    });

    test("emit on click", () => {
        const overlay = mount(Overlay, {
            global: {
                components: {
                    "pc-text": Text,
                    "focus-trap": FocusTrap,
                },
                stubs: {
                    teleport: true,
                },
            },
            slots: {
                default: OVERLAY_SLOT_COMPONENT,
            },
            props: {
                show: true,
            },
        });

        const overlayContent = overlay.getComponent(Text);
        overlayContent.trigger("click");
        expect(overlay.emitted().click).toBeTruthy();
        expect(overlay.emitted().close).toBeFalsy();
    });

    test("emit on click and close event when persistant is off", () => {
        const overlay = mount(Overlay, {
            global: {
                components: {
                    "pc-text": Text,
                    "focus-trap": FocusTrap,
                },
                stubs: {
                    teleport: true,
                },
            },
            slots: {
                default: OVERLAY_SLOT_COMPONENT,
            },
            props: {
                show: true,
                persistant: false,
            },
        });

        overlay.find(OVERLAY_ID).trigger("click");
        expect(overlay.emitted().click).toBeTruthy();
        expect(overlay.emitted().close).toBeTruthy();
    });
});
