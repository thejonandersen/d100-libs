import {z} from "zod";
import {JSONSchema, StatBlockSchema} from './common'

export const RaceTypesSchema = z.union([
    z.literal('Alien'),
    z.literal('Beasts and Plants'),
    z.literal('Construct'),
    z.literal('Humanoid'),
    z.literal('Illusion'),
    z.literal('Undead'),
])

export const CreateRaceSchema = z.object({
        id: z.string().nullish(),
        name: z.string(),
        type: RaceTypesSchema.nullish(),
        stats: StatBlockSchema.nullish(),
        advantageIds: z.array(z.string().describe(
            '{"template": "AsyncSelect", "endpoint": "/advantage", "selectionKey": "id"}'
        )).nullish(),
        cost: z.number().nullish(),
        move: z.number().nullish(),
        languageIds: z.array(z.string().describe(
            '{"template": "AsyncSelect", "endpoint": "/language", "selectionKey": "id"}'
        )).nullish(),
        special: JSONSchema.nullish().describe('{"template":"JSON"}'),
});

export const CreateRaceRequestSchema = z.object({
    body: CreateRaceSchema
});


export const UpdateRaceSchema = z.object({
    id: z.string().nullish(),
    name: z.string().nullish(),
    type: RaceTypesSchema.nullish(),
    stats: StatBlockSchema.nullish(),
    advantageIds: z.string().describe(
        '{"template": "AsyncSelect", "endpoint": "/advantage", "selectionKey": "id"}'
    ).nullish(),
    cost: z.number().nullish(),
    move: z.number().nullish(),
    languageIds: z.string().describe(
        '{"template": "AsyncSelect", "endpoint": "/language", "selectionKey": "id"}'
    ).nullish(),
    special: JSONSchema.nullish().describe('{"template":"JSON"}'),
});

export const UpdateRaceRequestSchema = z.object({
    body: UpdateRaceSchema
});
