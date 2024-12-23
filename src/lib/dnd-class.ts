export type Class =
  | 'Wizard'
  | 'Druid'
  | 'Fighter'
  | 'Cleric'
  | 'Warlock'
  | 'Ranger'
  | 'Barbarian'
  | 'Rogue'
  | 'Bard'

export type DNDClass = {
  name: Class
  stats: {
    strength: number
    vigor: number
    agility: number
    dexterity: number
    will: number
    knowledge: number
    resourcefulness: number
    health: number
    memory_capacity: number
    utility_effectiveness: number
    luck: number
    health_recovery_bonus: number
    spell_recovery_bonus: number
    move_speed: number
    action_speed: number
    manual_dexterity: number
    spell_casting_speed: number
    equip_speed: number
    regular_interaction_speed: number
    magical_interaction_speed: number
    persuasiveness: number
    buff_duration: number
    armor_penetration: number
    magic_penetration: number
    headshot_reduction: number
    projectile_damage_reduction: number
    physical_damage_reduction: number
    magic_resistance: number
    physical_power_bonus: number
    magic_power_bonus: number
    primary_weapon: number
    secondary_weapon: number
  }
}

export const WIZARD: DNDClass = {
  name: 'Wizard',
  stats: {
    strength: 6,
    vigor: 7,
    agility: 15,
    dexterity: 17,
    will: 20,
    knowledge: 25,
    resourcefulness: 15,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const DRUID: DNDClass = {
  name: 'Druid',
  stats: {
    strength: 12,
    vigor: 13,
    agility: 12,
    dexterity: 12,
    will: 18,
    knowledge: 20,
    resourcefulness: 18,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const FIGHTER: DNDClass = {
  name: 'Fighter',
  stats: {
    strength: 15,
    vigor: 15,
    agility: 15,
    dexterity: 15,
    will: 15,
    knowledge: 15,
    resourcefulness: 15,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const CLERIC: DNDClass = {
  name: 'Cleric',
  stats: {
    strength: 11,
    vigor: 13,
    agility: 12,
    dexterity: 14,
    will: 23,
    knowledge: 20,
    resourcefulness: 12,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const WARLOCK: DNDClass = {
  name: 'Warlock',
  stats: {
    strength: 11,
    vigor: 14,
    agility: 14,
    dexterity: 15,
    will: 22,
    knowledge: 15,
    resourcefulness: 14,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const RANGER: DNDClass = {
  name: 'Ranger',
  stats: {
    strength: 12,
    vigor: 10,
    agility: 20,
    dexterity: 18,
    will: 10,
    knowledge: 12,
    resourcefulness: 23,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const BARBARIAN: DNDClass = {
  name: 'Barbarian',
  stats: {
    strength: 25,
    vigor: 25,
    agility: 13,
    dexterity: 12,
    will: 18,
    knowledge: 5,
    resourcefulness: 7,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const ROGUE: DNDClass = {
  name: 'Rogue',
  stats: {
    strength: 9,
    vigor: 10,
    agility: 21,
    dexterity: 25,
    will: 10,
    knowledge: 10,
    resourcefulness: 20,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
export const BARD: DNDClass = {
  name: 'Bard',
  stats: {
    strength: 13,
    vigor: 13,
    agility: 13,
    dexterity: 20,
    will: 11,
    knowledge: 20,
    resourcefulness: 15,
    health: 60,
    memory_capacity: 0,
    utility_effectiveness: 0,
    luck: 0,
    health_recovery_bonus: 0,
    spell_recovery_bonus: 0,
    move_speed: 290,
    action_speed: 0,
    manual_dexterity: 0,
    spell_casting_speed: 0,
    equip_speed: 0,
    regular_interaction_speed: 0,
    magical_interaction_speed: 0,
    persuasiveness: 0,
    buff_duration: 0,
    armor_penetration: 0,
    magic_penetration: 0,
    headshot_reduction: 0,
    projectile_damage_reduction: 0,
    physical_damage_reduction: 0,
    magic_resistance: 0,
    physical_power_bonus: 0,
    magic_power_bonus: 0,
    primary_weapon: 0,
    secondary_weapon: 0,
  },
}
