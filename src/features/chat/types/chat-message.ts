export type ChatMessage  = {
    id: number;
    role: "user" | "glyph";
    time: string;
    content: string;
};