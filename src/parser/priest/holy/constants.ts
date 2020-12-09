import SPELLS from 'common/SPELLS';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.GREATER_HEAL.id,
  SPELLS.FLASH_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  SPELLS.PRAYER_OF_HEALING.id,
  SPELLS.RENEW.id,
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.HOLY_WORD_SANCTIFY.id,
  SPELLS.HOLY_WORD_SALVATION_TALENT.id,
  SPELLS.DESPERATE_PRAYER.id,
  SPELLS.COSMIC_RIPPLE_TALENT.id,
  SPELLS.BINDING_HEAL_TALENT.id,
  SPELLS.CIRCLE_OF_HEALING_TALENT.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_STAR_TALENT.id,
  SPELLS.TRAIL_OF_LIGHT_TALENT.id,
];

// better off making things that -dont- proc it perhaps?
export const ABILITIES_THAT_TRIGGER_MASTERY = [
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.GREATER_HEAL.id,
  SPELLS.FLASH_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  SPELLS.PRAYER_OF_HEALING.id,
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.HOLY_WORD_SANCTIFY.id,
  SPELLS.HOLY_WORD_SALVATION_TALENT.id,
  SPELLS.DESPERATE_PRAYER.id,
  SPELLS.COSMIC_RIPPLE_HEAL.id,
  SPELLS.BINDING_HEAL_TALENT.id,
  SPELLS.CIRCLE_OF_HEALING_TALENT.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_STAR_HEAL.id,
  SPELLS.RENEW.id, // this is reduced in calculations, due to the initial tick proccing EoL but not the periodic ticks
  SPELLS.TRAIL_OF_LIGHT_TALENT.id,
  SPELLS.HOLY_NOVA_HEAL.id,
  SPELLS.GUARDIAN_SPIRIT_HEAL.id,

  // Azerite
  // SPELLS.BLESSED_PORTENTS_HEAL.id,
  // SPELLS.LASER_MATRIX_HEAL.id,
  280658, // Cauterized from Ricocheting Inflatable Pyrosaw (280168)
  // SPELLS.TWIST_MAGIC_HEAL.id,
  // SPELLS.BRACING_CHILL_HEAL.id,
  // SPELLS.SAVIOR_HEAL.id,
  280583, // M.E.N.D. from Auto-Self-Cauterizer (280172)

  // Trinkets
  SPELLS.HARMONIOUS_CHORD.id,
  SPELLS.MUTATING_ANTIBODY.id,
  276136, // Darkmoon Deck Ace
  276137, // Darkmoon Deck 2
  276138, // Darkmoon Deck 3
  276139, // Darkmoon Deck 4
  276140, // Darkmoon Deck 5
  276141, // Darkmoon Deck 6
  276142, // Darkmoon Deck 7
  276143, // Darkmoon Deck 8
];

export const ABILITIES_AFFECTED_BY_APOTHEOSIS_TALENT = [
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.HOLY_WORD_SANCTIFY.id,
];

export const HOLY_PRIEST_HEALING_INCREASE_AURA = .4;
