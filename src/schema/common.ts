import z from 'zod'

export const JSONSchema = z.custom<string>((value) => {
    try {
        JSON.parse(value);
        return true;
    } catch (_) {
        return false;
    }
});

export const NumberInputSchema = z.preprocess(
    (val) => Number(val),
    z.number()
)

export const StatSchema = z.object({
    min: z.number(),
    max: z.number(),
    current: z.number().nullish().describe('{"template": "none"}')
});

export const StatBlockSchema = z.object({
    str: StatSchema,
    con: StatSchema,
    siz: StatSchema,
    int: StatSchema,
    pow: StatSchema,
    dex: StatSchema,
    chr: StatSchema
});

export const StatName = z.union([
    z.literal("str"),
    z.literal("con"),
    z.literal("siz"),
    z.literal("int"),
    z.literal("pow"),
    z.literal("dex"),
    z.literal("chr"),
    z.undefined()
]);

export type Stat = z.infer<typeof StatName>

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
    z.literal("stealth")
]);

export type Skill = z.infer<typeof SkillName>

export const PowerName = z.union([
    z.literal("divination"),
    z.literal("energy"),
    z.literal("life"),
    z.literal("mind"),
    z.literal("planar"),
    z.undefined()
]);

export type Power = z.infer<typeof PowerName>

export const AthleticsSkills = z.object({
    base: z.number(),
    acrobatics: z.number(),
    dodge: z.number(),
    pilot: z.number(),
    stealth: z.number()
})

export const PowerSkills = z.object({
    base: z.number(),
    divination: z.number(),
    energy: z.number(),
    life: z.number(),
    mind: z.number(),
    planar: z.number()
})

export const CombatSkills = z.object({
    base          : z.number(),
    axes_and_picks: z.number(),
    blade         : z.number(),
    bludgeoning   : z.number(),
    natural       : z.number(),
    projectile    : z.number(),
    shield        : z.number(),
    staff_weapons : z.number(),
})

export const InteractionSkills = z.object({
    base        : z.number(),
    chicanery   : z.number(),
    command     : z.number(),
    diplomacy   : z.number(),
    fast_talking: z.number(),
})

export const ProfessionType =z.object({
    base: z.number(),
    name: z.string(),
})

export const ProfessionSkills = z.object({
    base: z.number(),
    knownTypes: ProfessionType.nullish()
})

export const LoreSkills = z.object({
    base      : z.number(),
    arcana    : z.number(),
    nature    : z.number(),
    history   : z.number(),
    social    : z.number(),
    technology: z.number(),
})

export const ObservationSkills = z.object({
    base      : z.number(),
    appraise  : z.number(),
    insight   : z.number(),
    navigate  : z.number(),
    perception: z.number(),
})

export const SkillsBlockSchema = z.object({
    athletics: AthleticsSkills,
    powers: PowerSkills,
    combat: CombatSkills,
    interaction: InteractionSkills,
    profession: ProfessionSkills,
    lore: LoreSkills,
    observation: ObservationSkills,
})
