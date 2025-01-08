import {z} from "zod";
import {JSONSchema, NumberInputSchema} from './common'

export const AdvantageRequirementTypeName = z.union([
    z.literal("stat"),
    z.literal("skill"),
    z.literal("tier"),
    z.literal("power_pool"),
    z.literal("race"),
    z.literal("advantage"),
    z.literal("power")
]);

export type AdvantageRequirementType = z.infer<typeof AdvantageRequirementTypeName>


export const SkillName = z.union([
    z.undefined(),
    z.literal("athletics"),
    z.literal("powers"),
    z.literal("combat"),
    z.literal("interaction"),
    z.literal("profession"),
    z.literal("lore"),
    z.literal("observation"),
    z.literal("appraise"),
    z.literal("insight"),
    z.literal("navigate"),
    z.literal("perception"),
    z.literal("arcana"),
    z.literal("nature"),
    z.literal("history"),
    z.literal("social"),
    z.literal("technology"),
    z.literal("chicanery"),
    z.literal("command"),
    z.literal("diplomacy"),
    z.literal("fast_talking"),
    z.literal("axes_and_picks"),
    z.literal("blade"),
    z.literal("bludgeoning"),
    z.literal("natural"),
    z.literal("projectile"),
    z.literal("shield"),
    z.literal("staff_weapons"),
    z.literal("divination"),
    z.literal("energy"),
    z.literal("life"),
    z.literal("mind"),
    z.literal("planar"),
    z.literal("acrobatics"),
    z.literal("dodge"),
    z.literal("pilot"),
    z.literal("stealth"),
]);

export type Skill = z.infer<typeof SkillName>

export const PowerName = z.union([
    z.literal("divination"),
    z.literal("energy"),
    z.literal("life"),
    z.literal("mind"),
    z.literal("planar"),
    z.undefined(),
]);

export type Power = z.infer<typeof PowerName>

export const StatName = z.union([
    z.literal("str"),
    z.literal("con"),
    z.literal("siz"),
    z.literal("int"),
    z.literal("pow"),
    z.literal("dex"),
    z.literal("chr"),
    z.undefined(),
]);

export type Stat = z.infer<typeof StatName>

export const AdvantageRequirementSchema = z.object({
    type: AdvantageRequirementTypeName,
    skill: SkillName.describe('{"template":"Conditional", "condition": {"key":"type", "value":"skill"}}').optional(),
    power: PowerName.describe('{"template":"Conditional", "condition": {"key":"type", "value":"power"}}').optional(),
    stat: StatName.describe('{"template":"Conditional", "condition": {"key":"type", "value":"stat"}}').optional(),
    raceId: z.string().describe(
        '{"template":"Conditional", "condition": {"key":"type", "value":"race"}, "subTemplate":{"template": "AsyncSelect", "endpoint": "/race", "selectionKey": "id"}}'
    ).optional(),
    advantageId: z.string().describe(
        '{"template":"Conditional", "condition": {"key":"type", "value":"advantage"}, "subTemplate":{"template": "AsyncSelect", "endpoint": "/race", "selectionKey": "id"}}'
    ).optional(),
    value: NumberInputSchema.optional()
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
        case "power":
            if (!data.power) {
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
                    path: ['advantageId']
                });
            }
            break;
        case "stat":
            if (!data.stat) {
                return ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'required',
                    path: ['advantageId']
                });
            }
            break;
        case "race":
            if (!data.raceId) {
                return ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'required',
                    path: ['advantageId']
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
    name: z.string(),
    description: z.string(),
    category: AdvantageCategoryName,
    requirements: z.array(AdvantageRequirementSchema),
    cost: NumberInputSchema,
    special: JSONSchema.optional(),
});

export const CreateAdvantageRequestSchema = z.object({
    body: CreateAdvantageSchema
});

export const UpdateAdvantageSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: AdvantageCategoryName.optional(),
    requirements: z.array(AdvantageRequirementSchema).optional(),
    cost: NumberInputSchema,
    special: z.string().optional(),
});

export const UpdateAdvantageRequestSchema = z.object({
    body: UpdateAdvantageSchema
});
