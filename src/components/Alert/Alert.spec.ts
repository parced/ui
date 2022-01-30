import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Alert from "./Alert.vue";

const ALERT_TITLE = "My Alert Title";
const ALERT_SUBTITLE = "My Alert Subtitle";

const ALERT_CLOSE_ID = '[data-test-id="alert-close"]';

describe.concurrent("Alert component", () => {
    test("renders", () => {
        expect(Alert).toBeTruthy();
        const alert = mount(Alert);
        expect(alert.html()).toBeTruthy();
    });

    test("renders the title and subtitle", () => {
        const alert = mount(Alert, {
            props: {
                title: ALERT_TITLE,
                subtitle: ALERT_SUBTITLE,
            },
        });

        const alertHtml = alert.html();
        expect(alertHtml).toContain(ALERT_TITLE);
        expect(alertHtml).toContain(ALERT_SUBTITLE);
    });

    test("renders only the title", () => {
        const alert = mount(Alert, {
            props: {
                title: ALERT_TITLE,
            },
        });

        const alertHtml = alert.html();
        expect(alertHtml).toContain(ALERT_TITLE);
        expect(alertHtml).not.toContain(ALERT_SUBTITLE);
    });

    test("renders only the subtitle", () => {
        const alert = mount(Alert, {
            props: {
                subtitle: ALERT_SUBTITLE,
            },
        });

        const alertHtml = alert.html();
        expect(alertHtml).toContain(ALERT_SUBTITLE);
        expect(alertHtml).not.toContain(ALERT_TITLE);
    });

    test("renders the close button", () => {
        const alert = mount(Alert, {
            props: {
                closable: true,
            },
        });

        const alertClose = alert.find(ALERT_CLOSE_ID);
        expect(alertClose.exists()).toBe(true);
    });
});
