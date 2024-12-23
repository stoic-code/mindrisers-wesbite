export function clearStyle(editor_content: string) {
    // Remove the style attribute from all tags
    return editor_content?.replace(
        /<(\w+)([^>]*)style\s*=\s*"[^"]*"(.*?)>/g,
        (match, p1, p2, p3) => `<${p1}${p2}${p3}>`,
    );
}
