import {z} from "zod";

export const StatSchema = z.object({
    min: z.number(),
    max: z.number(),
    current: z.number().optional(),
});

export const StatBlockSchema = z.object({
    str: StatSchema,
    con: StatSchema,
    siz: StatSchema,
    int: StatSchema,
    pow: StatSchema,
    dex: StatSchema,
    chr: StatSchema,
});

export const CreateRaceSchema = z.object({
        name: z.string(),
        stats: StatBlockSchema.optional(),
        advantages: z.array(z.string()).optional(),
        cost: z.number().optional(),
        move: z.number().optional(),
        languageIds: z.array(z.string()).optional(),
        languages: z.any().optional(),
        special: z.any().optional()
});

export const CreateRaceRequestSchema = z.object({
    body: CreateRaceSchema
});


export const UpdateRaceSchema = z.object({
    name: z.string().optional(),
    stats: StatBlockSchema.optional(),
    advantages: z.array(z.string()).optional(),
    cost: z.number().optional(),
    move: z.number().optional(),
    languageIds: z.array(z.string()).optional(),
    special: z.any().optional()
});

export const UpdateRaceRequestSchema = z.object({
    body: UpdateRaceSchema
});
