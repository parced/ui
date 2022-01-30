import { describe, expect, test } from "vitest";
import { slugify } from "./slug";

describe("Slug utility", () => {
    test.each<[string, string]>([
        ["", ""],
        ["hello", "hello"],
        ["hello world", "hello-world"],
        ["hello world123", "hello-world123"],
        ["hello world 123", "hello-world-123"],
        ["text with accent àáãäâèéëêìíïîòóöôùúüûñç", "text-with-accent-aaaaaeeeeiiiioooouuuunc"],
        ["text with symbols ()=+{}[]'\"`,./?><\\", "text-with-symbols"],
    ])("convert %p to slug", (textToTransform, expected) => {
        expect(slugify(textToTransform)).toBe(expected);
    });
});
