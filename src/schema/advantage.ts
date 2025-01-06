import {z} from "zod";
import {JSONSchema} from './common'

export const AdvantageRequirementTypeName = z.enum([
    "stat",
    "skill",
    "tier",
    "power_pool",
    "race",
    "advantage",
    "power"
]);

export type AdvantageRequirementType = z.infer<typeof AdvantageRequirementTypeName>


export const SkillName = z.union([
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
]);

export type Stat = z.infer<typeof StatName>

export const AdvantageRequirementSchema = z.object({
    type: AdvantageRequirementTypeName,
    skill: SkillName.optional(),
    power: PowerName.optional(),
    stat: StatName.optional(),
    raceId: z.string().optional(),
    advantageId: z.string().optional(),
    value: z.number().optional()
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
    raceIds: z.array(z.string()).optional(),
    requirements: z.array(AdvantageRequirementSchema),
    cost: z.number(),
    special: JSONSchema.optional(),
});

export const CreateAdvantageRequestSchema = z.object({
    body: CreateAdvantageSchema
});

export const UpdateAdvantageSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: AdvantageCategoryName.optional(),
    raceIds: z.array(z.string()).optional(),
    requirements: z.array(AdvantageRequirementSchema).optional(),
    cost: z.number().optional(),
    special: z.string().optional(),
});

export const UpdateAdvantageRequestSchema = z.object({
    body: UpdateAdvantageSchema
});
