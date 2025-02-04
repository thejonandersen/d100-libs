import {z} from "zod"

export const PowerMiscellaneousSchema = z.union([
    z.literal("create_armor"),
    z.literal("create_food_and_water"),
    z.literal("create_weapon"),
    z.literal("dispel_power"),
    z.literal("invisibility"),
    z.literal("telekinesis"),
    z.literal("water_breathing")
])

export const PowerPolymorphSchema = z.union([
    z.literal("change_appearance"),
    z.literal("change_form"),
    z.literal("change_size"),
    z.literal("shape_change")
])

export const PowerWardingSchema = z.union([
    z.literal("acid"),
    z.literal("cold"),
    z.literal("electrical"),
    z.literal("fire"),
    z.literal("force"),
    z.literal("necrotic"),
    z.literal("psychic"),
    z.literal("radiant")
])

export const PowerTerrainSchema = z.union([
    z.literal("light"),
    z.literal("obscured"),
    z.literal("difficult_terrain"),
    z.literal("silenced"),
    z.literal("solid_terrain")
])

export const PowerBenefitSchema = z.union([
    z.literal("plus_ten_to_skill_group"),
    z.literal("plus_twenty_to_skill_group"),
    z.literal("plus_thirty_to_skill_group"),
    z.literal("plus_ten_to_save"),
    z.literal("plus_twenty_to_save"),
    z.literal("plus_thirty_to_save"),
    z.literal("reroll"),
    z.literal("success_shift"),
    z.literal("extra_defense_action")
])

export const PowerSenseSchema = z.union([
    z.literal("power_sight"),
    z.literal("lifesense"),
    z.literal("item"),
    z.literal("danger"),
    z.literal("low_light_vision"),
    z.literal("darkvision"),
    z.literal("blind_sight"),
    z.literal("true_seeing"),
    z.literal("telepathy"),
    z.literal("empathy")
])

export const PowerMovementSchema = z.union([
    z.literal("climb_duration"),
    z.literal("swim_duration"),
    z.literal("burrow"),
    z.literal("climb_add_to_move"),
    z.literal("swim_add_to_move"),
    z.literal("fly"),
    z.literal("water_walking"),
    z.literal("teleport"),
    z.literal("phasing"),
    z.literal("movement_equals_move"),
    z.literal("movement_equals_move_plus_2"),
    z.literal("movement_equals_move_plus_4"),
    z.literal("shift_2"),
    z.literal("shift_4"),
    z.literal("shift_6")
])

export const CombatEffectSchema = z.union([
    z.literal("trip"),
    z.literal("disarm"),
    z.literal("push"),
    z.literal("pull"),
    z.literal("slide"),
    z.literal("sunder"),
    z.literal("grapple"),
    z.literal("standard_attack")
])

export const EffectConditionSchema = z.union([
    z.literal("charm"),
    z.literal("dominate"),
    z.literal("stagger"),
    z.literal("slow"),
    z.literal("stun"),
    z.literal("weaken"),
    z.literal("blind"),
    z.literal("restrain"),
    z.literal("panic")
])

export const DamageTypeSchema = z.union([
    z.literal("energy"),
    z.literal("direct"),
    z.literal("ongoing"),
    z.literal("siphon"),
    z.literal("elemental_bonus"),
    z.literal("extra_weapon")
])

export const DamageElementSchema = z.union([
    z.literal("any"),
    z.literal("acid"),
    z.literal("cold"),
    z.literal("electrical"),
    z.literal("fire"),
    z.literal("force"),
    z.literal("necrotic"),
    z.literal("poison"),
    z.literal("psychic"),
    z.literal("radiant"),
])

export const HealingTypeSchema = z.union([
    z.literal("healing"),
    z.literal("regeneration"),
    z.literal("save_vs_condition"),
    z.literal("temp_HP")
])

export const EffectModifierLevelSchema = z.union([
    z.literal("low"),
    z.literal("medium"),
    z.literal("high"),
    z.literal("superior")
])

export const EffectTypeSchema = z.union([
    z.literal("damage"),
    z.literal("healing"),
    z.literal("condition"),
    z.literal("combat_effect"),
    z.literal("movement"),
    z.literal("sense"),
    z.literal("benefit"),
    z.literal("terrain"),
    z.literal("warding"),
    z.literal("polymorph"),
    z.literal("miscellaneous")
])

const effectTypeDescription = {
    conditions: [{
        key: "skill",
        options: {
            divination: ["sense", "benefit", "movement"],
            energy: ["damage", "condition", "combat_effect", "movement", "sense", "terrain", "warding", "miscellaneous"],
            life: ["damage", "healing", "condition", "combat_effect", "movement", "sense", "benefit", "terrain", "polymorph", "miscellaneous"],
            mind: ["damage", "healing", "condition", "combat_effect", "movement", "sense", "terrain", "polymorph", "miscellaneous"],
            melee: ["damage", "condition", "combat_effect", "movement", "benefit"],
            thrown: ["damage", "condition", "combat_effect", "movement", "benefit", "terrain"],
            projectile: ["damage", "condition", "combat_effect", "movement", "terrain", "benefit"],
            athletics: ["movement", "benefit"],
            interaction: ["healing", "condition", "combat_effect", "movement", "benefit"],
            observation: ["sense", "benefit"]
        }
    }]
}

export const AOETypeSchema = z.union([
    z.literal("burst"),
    z.literal("aura"),
    z.literal("blast"),
    z.literal("wall"),
    z.literal("trap"),
    z.literal("target")
])

const AreaOfEffectNumber = z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(12)
])

const aoeDescription = {
    shouldLabel: true,
    label: "Target/Area of Effect",
}

export const AreaOfEffectSchema = z.object({
    type: AOETypeSchema,
    value: AreaOfEffectNumber.describe(
        JSON.stringify({
            conditions: [{
                key: "areaOfEffect.type",
                options: {
                    burst: [1, 2, 3],
                    aura: [1, 2, 3],
                    blast: [3, 5, 7],
                    wall: [6, 12],
                    trap: [1],
                    target: [1, 2, 3, 4]
                }
            }]
        })
    ),
})

export const PowerRangeSchema = z.union([
    z.literal("personal"),
    z.literal("touch"),
    z.literal("ten"),
    z.literal("twenty"),
    z.literal("forty"),
    z.literal("weapon_range"),
])

export const PowerSkillSchema = z.union([
    z.literal("divination"),
    z.literal("energy"),
    z.literal("life"),
    z.literal("mind"),
    z.literal("planar"),
    z.literal("melee"),
    z.literal("thrown"),
    z.literal("projectile"),
    z.literal("athletics"),
    z.literal("interaction"),
    z.literal("lore_arcana"),
    z.literal("lore_nature"),
    z.literal("lore_social"),
    z.literal("lore_technology"),
    z.literal("observation")
])

export const PowerDurationSchema = z.union([
    z.literal("no_duration"),
    z.literal("one_minute"),
    z.literal("one_hour"),
    z.literal("eight_hours"),
    z.literal("twenty_four_hours"),
    z.literal("save_ends"),
])

export const PowerEffectSchema = z.object({
    type: EffectTypeSchema.describe(JSON.stringify(effectTypeDescription)),
    typeModifierLevel: EffectModifierLevelSchema.describe(
        JSON.stringify({
            template: "Conditional",
            label: "effect strength",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: ["damage", "healing", "miscellaneous"],
                },
                {
                    key: "damage",
                    scope: "parent",
                    options: {
                        energy: ["low", "high", "superior"],
                        direct: ["low", "high", "superior"],
                        ongoing: ["low", "high"],
                        siphon: ["low", "high"],
                        extra_weapon: ["low", "medium", "high"],
                    }
                },
                {
                    key: "healing",
                    scope: "parent",
                    options: {
                        healing: ["low", "medium", "high", "superior"],
                        temp_hp: ["low", "high"],
                    }
                },
                {
                    key: "miscellaneous",
                    scope: "parent",
                    options: {
                        create_armor: ["low", "superior"],
                    }
                }
            ]
        })
    ).nullish(),
    damage: DamageTypeSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "damage"
                }
            ]
        })
    ).nullish(),
    healing: HealingTypeSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "healing"
                }
            ]
        })
    ).nullish(),
    condition: EffectConditionSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "condition"
                }
            ]
        })
    ).nullish(),
    combatEffect: CombatEffectSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "combat_effect"
                }
            ]
        })
    ).nullish(),
    movement: PowerMovementSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "movement"
                }
            ]
        })
    ).nullish(),
    sense: PowerSenseSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "sense"
                }
            ]
        })
    ).nullish(),
    benefit: PowerBenefitSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "benefit"
                }
            ]
        })
    ).nullish(),
    terrain: PowerTerrainSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "terrain"
                }
            ]
        })
    ).nullish(),
    warding: PowerWardingSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "warding"
                }
            ]
        })
    ).nullish(),
    polymorph: PowerPolymorphSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "polymorph"
                }
            ]
        })
    ).nullish(),
    miscellaneous: PowerMiscellaneousSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "miscellaneous"
                }
            ]
        })
    ).nullish(),
    damageType: DamageElementSchema.describe(
        JSON.stringify({
            template: "Conditional",
            conditions: [
                {
                    key: "type",
                    scope: "parent",
                    equals: "damage"
                }
            ]
        })
    ).nullish()
})

export const PowerSaveSchema = z.union([
    z.literal("stamina"),
    z.literal("agility"),
    z.literal("will"),
])

export const CreatePowerSchema = z.object({
    name: z.string(),
    cpCost: z.number().describe('{"template": "none"}'),
    ppCost: z.number().describe('{"template": "none"}'),
    apCost: z.number(),
    skill: PowerSkillSchema,
    requiredSkillScore: z.number().describe('{"template": "none"}'),
    duration: PowerDurationSchema,
    areaOfEffect: AreaOfEffectSchema.describe(JSON.stringify(aoeDescription)),
    range: PowerRangeSchema,
    effects: z.array(PowerEffectSchema),
    save: PowerSaveSchema.nullish(),
})

export const UpdatePowerSchema = z.object({
    name: z.string().nullish(),
    cpCost: z.number().nullish().describe('{"template": "none"}'),
    ppCost: z.number().nullish().describe('{"template": "none"}'),
    apCost: z.number().nullish(),
    skill: PowerSkillSchema.nullish(),
    requiredSkillScore: z.number().nullish(),
    duration: PowerDurationSchema.nullish(),
    areaOfEffect: AreaOfEffectSchema.describe(JSON.stringify(aoeDescription)).nullish(),
    range: PowerRangeSchema.nullish(),
    effects: z.array(PowerEffectSchema).nullish(),
    save: PowerSaveSchema.nullish(),
})

export const CreatePowerRequestSchema = z.object({
    body: CreatePowerSchema
})

export const UpdatePowerRequestSchema = z.object({
    body: UpdatePowerSchema
})
