import z from 'zod'
import {JSONSchema, SkillName, SkillsBlockSchema, StatBlockSchema} from './common'

export const CreateCharacterSchema = z.object({
    name: z.string(),
    userId: z.string(),
    raceId: z.string().nullish(),
    stats: StatBlockSchema.nullish(),
    skills: SkillsBlockSchema.nullish(),
    baseHP: z.number().nullish(),
    basePP: z.number().nullish(),
    currentHP: z.number().nullish(),
    currentPP: z.number().nullish(),
    points: z.number().nullish(),
    pointsSpent: z.number().nullish(),
    languageIds: z.array(z.string()).nullish(),
    advantageIds: z.array(z.string()).nullish(),
    special: z.array(JSONSchema.describe('{"template":"JSON"}')).nullish()
})

export const UpdateCharacterSchema = z.object({
    name: z.string().nullish(),
    userId: z.string().nullish(),
    raceId: z.string().nullish(),
    stats: StatBlockSchema.nullish(),
    skills: SkillsBlockSchema.nullish(),
    baseHP: z.number().nullish(),
    basePP: z.number().nullish(),
    currentHP: z.number().nullish(),
    currentPP: z.number().nullish(),
    points: z.number().nullish(),
    pointsSpent: z.number().nullish(),
    languageIds: z.array(z.string()).nullish(),
    advantageIds: z.array(z.string()).nullish(),
    special: z.array(JSONSchema.describe('{"template":"JSON"}')).nullish()
})

export const CreateCharacterRequestSchema = z.object({
    body: CreateCharacterSchema
})

export const UpdateCharacterRequestSchema = z.object({
    body: UpdateCharacterSchema
})

const TemplateSkill = z.object({
    name: SkillName,
    bonus: z.number(),
})

export const CreateCharacterTemplateSchema = z.object({
    name: z.string(),
    skills: z.array(TemplateSkill).nullish(),
    cost: z.number().nullish(),
    languageIds: z.array(z.string().describe(
        '{"template": "AsyncSelect", "collection": "language", "selectionKey": "id", "multiple": true}'
    )).nullish(),
    advantageIds: z.array(z.string().describe(
        '{"template": "AsyncSelect", "collection": "advantage", "selectionKey": "id", "multiple": true}'
    )).nullish(),
    special: JSONSchema.nullish().describe('{"template":"JSON"}')
})

export const UpdateCharacterTemplateSchema = z.object({
    name: z.string().nullish(),
    skills: z.array(SkillName).nullish(),
    cost: z.number().nullish(),
    languageIds: z.array(z.string().describe(
        '{"template": "AsyncSelect", "collection": "language", "selectionKey": "id", "multiple": true}'
    )).nullish(),
    advantageIds: z.array(z.string().describe(
        '{"template": "AsyncSelect", "collection": "advantage", "selectionKey": "id", "multiple": true}'
    )).nullish(),
    special: JSONSchema.nullish().describe('{"template":"JSON"}')
})


export const CreateCharacterTemplateRequestSchema = z.object({
    body: CreateCharacterTemplateSchema
})

export const UpdateCharacterTemplateRequestSchema = z.object({
    body: UpdateCharacterTemplateSchema
})
