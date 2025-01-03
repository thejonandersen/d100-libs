import {z} from "zod/lib/index";

export const CreateLanguageSchema = z.object({
    name: z.string(),
});

export type Language = z.infer<typeof CreateLanguageSchema>

export const CreateLanguageRequestSchema = z.object({
    body: CreateLanguageSchema
});
