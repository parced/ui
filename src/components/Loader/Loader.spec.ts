import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Loader from "./Loader.vue";

describe("Loader component", () => {
    test("renders", () => {
        expect(Loader).toBeTruthy();
        const loader = shallowMount(Loader);
        expect(loader.html()).toBeTruthy();
    });
});
