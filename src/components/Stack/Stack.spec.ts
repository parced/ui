import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Stack from "./Stack.vue";

describe("Stack component", () => {
    test("renders", () => {
        expect(Stack).toBeTruthy();
        const stack = shallowMount(Stack);
        expect(stack.html()).toBeTruthy();
    });
});
