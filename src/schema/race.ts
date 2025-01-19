import {z} from "zod";
import {JSONSchema, StatBlockSchema} from './common'

export const RaceTypesSchema = z.union([
    z.literal('Alien'),
    z.literal('Beasts and Plants'),
    z.literal('Construct'),
    z.literal('Humanoid'),
    z.literal('Illusion'),
    z.literal('Undead'),
]).describe('{"multiple": true, "template": "Union"}');

export const CreateRaceSchema = z.object({
        name: z.string(),
        type: z.array(RaceTypesSchema).nullish(),
        stats: StatBlockSchema.nullish(),
        advantageIds: z.array(z.string().describe(
            '{"template": "AsyncSelect", "endpoint": "/advantage", "selectionKey": "id", "multiple": true}'
        )).nullish(),
        cost: z.number().nullish(),
        move: z.number().nullish(),
        languageIds: z.array(z.string().describe(
            '{"template": "AsyncSelect", "endpoint": "/language", "selectionKey": "id", "multiple": true}'
        )).nullish(),
        special: JSONSchema.nullish().describe('{"template":"JSON"}'),
});

export const CreateRaceRequestSchema = z.object({
    body: CreateRaceSchema
});


export const UpdateRaceSchema = z.object({
    name: z.string().nullish(),
    type: z.array(RaceTypesSchema).nullish(),
    stats: StatBlockSchema.nullish(),
    advantageIds: z.array(z.string().describe(
        '{"template": "AsyncSelect", "endpoint": "/advantage", "selectionKey": "id", "multiple": true}'
    )).nullish(),
    cost: z.number().nullish(),
    move: z.number().nullish(),
    languageIds: z.array(z.string().describe(
        '{"template": "AsyncSelect", "endpoint": "/language", "selectionKey": "id", "multiple": true}'
    )).nullish(),
    special: JSONSchema.nullish().describe('{"template":"JSON"}'),
});

export const UpdateRaceRequestSchema = z.object({
    body: UpdateRaceSchema
});
