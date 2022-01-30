import { describe, expect, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Card from "./Card.vue";

const CARD_CONTENT = "My Card";
const CARD_IMAGE_URL = "https://picsum.photos/300/200";

const CARD_CONTENT_ID = '[data-test-id="card-content"]';
const CARD_IMAGE_ID = '[data-test-id="card-image"]';
const CARD_IMAGE_ERROR_ID = '[data-test-id="card-image-error"]';

describe.concurrent("Card component", () => {
    test("renders", () => {
        expect(Card).toBeTruthy();
        const card = shallowMount(Card);
        expect(card.html()).toBeTruthy();
    });

    test("renders the slot content", () => {
        const card = mount(Card, {
            slots: {
                default: CARD_CONTENT,
            },
        });

        const cardContent = card.find(CARD_CONTENT_ID);
        expect(cardContent.html()).toContain(CARD_CONTENT);
    });

    test("renders the cover image", async () => {
        const card = mount(Card, {
            props: {
                coverUrl: CARD_IMAGE_URL,
            },
        });

        const cardImage = card.find(CARD_IMAGE_ID);
        expect(cardImage.exists()).toBe(true);

        const cardImageError = card.find(CARD_IMAGE_ERROR_ID);
        expect(cardImageError.exists()).toBe(false);
    });

    test("renders the cover image and slot content", () => {
        const card = mount(Card, {
            slots: {
                default: CARD_CONTENT,
            },
            props: {
                coverUrl: CARD_IMAGE_URL,
            },
        });

        const cardImageError = card.find(CARD_CONTENT_ID);
        expect(cardImageError.exists()).toBe(true);

        const cardImage = card.find(CARD_IMAGE_ID);
        expect(cardImage.exists()).toBe(true);
    });
});
