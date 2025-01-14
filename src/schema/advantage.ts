import {z} from "zod";
import {JSONSchema, NumberInputSchema, StatName, SkillName} from './common'

export const AdvantageRequirementTypeName = z.union([
    z.literal("stat"),
    z.literal("skill"),
    z.literal("tier"),
    z.literal("power_pool"),
    z.literal("race"),
    z.literal("advantage"),
]);

export type AdvantageRequirementType = z.infer<typeof AdvantageRequirementTypeName>

export const AdvantageRequirementSchema = z.object({
    type: AdvantageRequirementTypeName,
    skill: SkillName.describe('{"template":"Conditional", "condition": {"key":"type", "value":"skill"}}').nullish(),
    stat: StatName.describe('{"template":"Conditional", "condition": {"key":"type", "value":"stat"}}').nullish(),
    raceId: z.string().describe(
        '{"template":"Conditional", "condition": {"key":"type", "value":"race"}, "subTemplate":{"template": "AsyncSelect", "endpoint": "/race", "selectionKey": "id"}}'
    ).nullish(),
    advantageId: z.string().describe(
        '{"template":"Conditional", "condition": {"key":"type", "value":"advantage"}, "subTemplate":{"template": "AsyncSelect", "endpoint": "/advantage", "selectionKey": "id"}}'
    ).nullish(),
    value: NumberInputSchema.nullish()
}).superRefine((data, ctx) => {
    switch (data.type) {
        case "advantage":
            if (!data.advantageId) {
                return ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'required',
                    path: ['advantageId']
                });
            }
            break;
        case "skill":
            if (!data.skill) {
                return ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'required',
                    path: ['skill']
                });
            }
            break;
        case "stat":
            if (!data.stat) {
                return ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'required',
                    path: ['stat']
                });
            }
            break;
        case "race":
            if (!data.raceId) {
                return ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'required',
                    path: ['race']
                });
            }
            break;
    }
});

export type AdvantageRequirement = z.infer<typeof AdvantageRequirementSchema>

export const AdvantageCategoryName = z.union([
    z.literal("Ally_Framework"),
    z.literal("Archetype"),
    z.literal("Armor"),
    z.literal("Body"),
    z.literal("Divine_Pacts"),
    z.literal("Epic_Archetypes"),
    z.literal("Golden_Path"),
    z.literal("Melee_Combat"),
    z.literal("Mind"),
    z.literal("Power"),
    z.literal("Ranged_Combat"),
    z.literal("Tactical"),
]);

export type AdvantageCategory = z.infer<typeof AdvantageCategoryName>

export const CreateAdvantageSchema = z.object({
    id: z.string().nullish().describe('{"template":"none"}'),
    name: z.string(),
    description: z.string(),
    category: AdvantageCategoryName,
    requirements: z.array(AdvantageRequirementSchema),
    cost: NumberInputSchema,
    special: JSONSchema.nullish().describe('{"template":"JSON"}'),
});

export const CreateAdvantageRequestSchema = z.object({
    body: CreateAdvantageSchema
});

export const UpdateAdvantageSchema = z.object({
    id: z.string().nullish().describe('{"template":"none"}'),
    name: z.string().nullish(),
    description: z.string().nullish(),
    category: AdvantageCategoryName.nullish(),
    requirements: z.array(AdvantageRequirementSchema).nullish(),
    cost: NumberInputSchema,
    special: JSONSchema.nullish().describe('{"template":"JSON"}'),
});

export const UpdateAdvantageRequestSchema = z.object({
    body: UpdateAdvantageSchema
});
