const SIZE_JUSTIFY = 80;

export function justify(text: string): string[] {
    const chunks = [];

    for (let i = 0, length = text.length; i < length; i += SIZE_JUSTIFY) {
        chunks.push(text.substring(i, i + SIZE_JUSTIFY).trim());
    }

    return chunks;
}