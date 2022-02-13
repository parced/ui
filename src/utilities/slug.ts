export const slugify = (value: string): string => {
    return value
        .normalize("NFKD")
        .toLowerCase()
        .replace(/[^\s\w-]/g, "")
        .trim()
        .replace(/[\s-]+/g, "-");
};
