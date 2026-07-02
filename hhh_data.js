// ═══════════════════════════════════════════════════════════════════
// HUNGER, HARVEST, & HISTORY — Game Data
// Phase 1 (step 1). The SSS engine is forked with a NEUTRALIZE+ADAPTER strip:
// the proven dialogue engine is untouched and reads its data through a single
// adapter (getActiveCaseData in index.html) that flattens an HHH level into the
// SSS "caseData" shape. HHH_DATA below is the real authoring tree.
// ═══════════════════════════════════════════════════════════════════

// ── Engine runtime container + remaining SSS C2 stub ──
// GAME_DATA is LIVE, not a shim: enterLevel() writes the flattened active level to
// GAME_DATA.cases[0], and setActiveCampaign() (neutralized) pins GAME_DATA.ranks +
// GAME_DATA.personalities to HHH_DATA.meta. It stays.
const GAME_DATA = {
  cases: [],
  ranks: ['Archive Initiate'],     // placeholder; superseded at runtime by HHH_DATA.meta.ranks
};

// CAMPAIGN_2_DATA: DORMANT — RESERVED for a future HHH Campaign 2 (do NOT remove).
// A second HHH campaign IS planned (after Campaign 1 is fully finished). The scaffolding
// forked from SSS (this stub + the Incoming-Transmission button + char-creation +
// enterCampaign2 + callHome + the showVictory C2 branch, all in index.html) is kept
// dormant so C2 can reuse it. In SSS, C2 unlocked via an "Incoming Transmission" pickup
// on the title screen once the first campaign was finished (STATE.campaign1Complete);
// HHH sets that same "finished" flag on completing L7. The in-world manifestation of the
// C2 unlock on the HHH startup screen is still TBD (SSS's transmission conceit won't fit
// as-is). See HHH_HANDOFF.md "FUTURE — HHH Campaign 2". Empty until C2 content is authored.
const CAMPAIGN_2_DATA = {
  id: 'hhh_placeholder',
  name: 'placeholder',
  cases: [],
  ranks: ['Archive Initiate'],
  species: [],
};

// ── Embedded sprite-frame data (keyed by PNG path) ──
// loadSpritesheet() resolves frames from here so NO fetch() is needed — this is
// what makes spritesheets work from the file:// protocol (Chrome blocks fetch of
// local JSON). The PNG itself still loads via <img> (file:// safe). Same trick SSS
// used with CAMPAIGN_2_FRAMES. Regenerate from the .json files if art is re-packed.
const HHH_FRAMES = {
  "npc/nova/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":1,"y":1,"w":100,"h":100}},{"filename":"frame_001.png","frame":{"x":103,"y":1,"w":100,"h":100}},{"filename":"frame_002.png","frame":{"x":205,"y":1,"w":100,"h":100}},{"filename":"frame_003.png","frame":{"x":1,"y":103,"w":100,"h":100}},{"filename":"frame_004.png","frame":{"x":103,"y":103,"w":100,"h":100}},{"filename":"frame_005.png","frame":{"x":205,"y":103,"w":100,"h":100}},{"filename":"frame_006.png","frame":{"x":1,"y":205,"w":100,"h":100}},{"filename":"frame_007.png","frame":{"x":103,"y":205,"w":100,"h":100}},{"filename":"frame_008.png","frame":{"x":205,"y":205,"w":100,"h":100}},{"filename":"portrait_nova.png","frame":{"x":307,"y":1,"w":96,"h":96}}],
  "npc/nova/spritesheet_unmasked.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_nova_unmasked.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "npc/zelketh/spritesheet.png": [{"filename":"portrait_alien.png","frame":{"x":1,"y":1,"w":96,"h":96}},{"filename":"portrait_alien_confused.png","frame":{"x":99,"y":1,"w":96,"h":96}},{"filename":"portrait_alien_grateful.png","frame":{"x":1,"y":99,"w":96,"h":96}},{"filename":"portrait_alien_intrigued.png","frame":{"x":99,"y":99,"w":96,"h":96}},{"filename":"portrait_alien_neutral.png","frame":{"x":197,"y":1,"w":96,"h":96}}],
  "UI/spritesheet_badges.jpg": [{"filename":"badge_archive_initiate.jpg","frame":{"x":0,"y":0,"w":512,"h":512}},{"filename":"badge_field_recorder.jpg","frame":{"x":512,"y":0,"w":512,"h":512}},{"filename":"badge_historical_witness.jpg","frame":{"x":0,"y":512,"w":512,"h":512}},{"filename":"badge_keeper_of_the_chain.jpg","frame":{"x":512,"y":512,"w":512,"h":512}},{"filename":"badge_temporal_archivist.jpg","frame":{"x":1024,"y":0,"w":512,"h":512}},{"filename":"badge_thread_walker.jpg","frame":{"x":1024,"y":512,"w":512,"h":512}}],
  // L1 NPCs — portrait reordered LAST (engine: icon = last frame, talk anim = frames[:-1]).
  "npc/fertile_crescent_woman/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"fertile_crescent_woman.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  "npc/settlement_figure/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"settlement_figure.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L2 NPCs (portrait LAST → icon = last frame, talk anim = frames[:-1]).
  "npc/nile_overseer/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"nile_overseer.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "npc/river_worker/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"river_worker.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L3 NPCs (portrait LAST → icon = last frame, talk anim = frames[:-1]). cottage_family's
  //   portrait is frame 0 on disk → reordered here so it lands last.
  "npc/irish_farmer/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"irish_farmer.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "npc/cottage_family/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"cottage_family.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  "npc/road_traveler/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"road_traveler.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L4 NPC — Fritz Haber (portrait already LAST on disk → copied in order; icon = last frame, talk anim = frames[:-1]).
  "npc/fritz_haber/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"fritz_haber.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L5 NPCs (portrait LAST → icon = last frame, talk anim = frames[:-1]). dust_bowl_farmer's
  //   portrait is frame 0 on disk (with frames shifted) → reordered here so it lands last; hugh_bennett is standard.
  "npc/dust_bowl_farmer/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"dust_bowl_farmer.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  "npc/hugh_bennett/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"hugh_bennett.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L6 NPCs (portrait LAST → icon = last frame, talk anim = frames[:-1]). farm_researcher &
  //   facility_spokesperson have the portrait as frame 0 on disk (at 0,0) → reordered here so it
  //   lands last; systems_engineer is standard (portrait already last on disk).
  "npc/farm_researcher/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"farm_researcher.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  "npc/systems_engineer/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"systems_engineer.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "npc/facility_spokesperson/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"facility_spokesperson.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  // L7 companions (oolian/rhessi/vressk) — only the one chosen in L0 is wired into the level at
  //   runtime (getActiveCaseData companionDynamic). All three uniform: portrait already LAST on disk.
  "npc/companion/oolian/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_species_oolian.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "npc/companion/rhessi/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_species_rhessi.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "npc/companion/vressk/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_species_vressk.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
};
window.HHH_FRAMES = HHH_FRAMES;

// ── HHH's own data tree ──
const HHH_DATA = {
  meta: {
    title: 'Hunger, Harvest, & History',
    universe: 'Space Sprout Sleuth',
    accent: '#e8b84a',             // TAA amber-gold

    // Rank ladder (LOCKED): 6 ranks, names match the baked badge art.
    // Player starts at R0 Archive Initiate; first field level doesn't promote;
    // L2–L6 each promote; R5 Keeper of the Chain lands on the final mission (L6).
    // L0 & L7 grant no rank screen (level.ranksUp:false).
    ranks: [
      'Archive Initiate',          // R0  badge_archive_initiate
      'Field Recorder',            // R1  badge_field_recorder
      'Thread Walker',             // R2  badge_thread_walker
      'Historical Witness',        // R3  badge_historical_witness
      'Temporal Archivist',        // R4  badge_temporal_archivist
      'Keeper of the Chain',       // R5  badge_keeper_of_the_chain
    ],
    // Amber-tinted progression (authored ahead; step 4 wires getActiveRankColors to use these).
    rankColors: ['#8a8f9c', '#caa64a', '#e8b84a', '#f0c560', '#f6d27a', '#ffe6a0'],

    // Personality → mood thresholds (copied from SSS so HHH content can reuse the
    // full vocabulary). Engine reads GAME_DATA.personalities[key].{annoyThreshold,lockThreshold}.
    personalities: {
      patient:      { annoyThreshold: 3, lockThreshold: 5,    recoveryOptions: true },
      professional: { annoyThreshold: 2, lockThreshold: 4,    recoveryOptions: true },
      prickly:      { annoyThreshold: 1, lockThreshold: 3,    recoveryOptions: false },
      stressed:     { annoyThreshold: 2, lockThreshold: 4,    recoveryOptions: true },
      stoic:        { annoyThreshold: 4, lockThreshold: null, recoveryOptions: true },
      curious:      { annoyThreshold: 3, lockThreshold: null, recoveryOptions: true },
    },
  },

  // ── Levels 0–7 ──
  // Authoring shape (flattened by getActiveCaseData into caseData):
  //   { id, name, location, subtitle, briefing, palette:{bg,...}, ranksUp?,
  //     locations:[ { id, label, icon, clueTag, learned, actionLabel?, sprites?,
  //                   source:{ type, speaker, personality?, startMood?, nodes:{...} } } ],
  //     diagnoses:[{label,isCorrect,hint}], explanation:{title,body,funFact} }
  // ── LEVEL 0 — TAA Facility, 2387 (Prologue / Tutorial) ──
  // Medium-depth prologue. Teaches the premise + loop through Nova/Zel'keth dialogue
  // (clear & grounded on the time-travel "threading"), companion choice with a
  // non-committal preview, and a Thread Console that gates Initialize Thread on all
  // four interactions. TEACH STUBS: nodes that reference a mechanic carry an inert
  //   teach: { target:'<css selector>', note:'<popup text>' }
  // field — the engine ignores it for now; the NEXT conversation builds the
  // event-driven highlight/dim + popup tutorial that consumes these (author decision).
  // Clue gate: Initialize Thread activates once all 4 clues are found
  //   (briefed · met_zelketh · read_records · resonance_scanned).
  // Companion names (authored): Yvi (Oolian·scientific) / Saren (Rhessi·archival) /
  //   Korl (Vressk·cultural). Placeholders-no-more, but easy to rename here.
  levels: [
    {
      id: 'L0',
      menuName: 'TAA Facility',            // dev level-menu label only (banner still uses `name`)
      // Banner: line 1 = name [• tagline], line 2 = location - date.
      name: 'Temporal Agricultural Archive Facility',
      location: 'TAA Orientation',
      date: '2387',
      briefing: 'Year 2387. Your first day as a field archivist of the Temporal Agricultural Archive. Something is fraying the human agricultural record — the chain of moments that carried a single planted seed all the way to the stars. Your handlers are waiting in the Briefing Chamber.',
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #2a2014, #120d08)',  // shows behind/around the scene image
        bgMid:     '#1a1410',
        accent:    '#e8b84a',
        highlight: '#fff3d6',
      },
      sprites: {
        scene: 'scene/scene_taa_briefing.png',   // Briefing Chamber background (240×280, pixelated)
      },
      // Starfield behind the scene PNG — three windows (two side + center behind the
      // plants); one band covers all three, PNG alpha masks to the cutouts. TL(5,70)→BR(231,178).
      sceneWindow: { x: 5, y: 70, w: 226, h: 108 },
      resolveLabel: 'Initialize Thread',   // L0's resolve action (§4.3) — only at the anchor (Thread Console)
      resolveNag: 'Not ready to thread yet',   // shown if you initialize before finishing the briefing
      hideResolveOffAnchor: true,
      ranksUp: false,                      // L0 grants no rank-up screen
      // Event-triggered teaches (fired by the engine, not attached to a node):
      //   onInvestigationStart — a few moments after Begin Investigation drops you in.
      //   onFirstClue          — the moment your first Field Notes entry is logged.
      // (The location-bar lesson is delivered by the unlock TOAST, and the
      //  Initialize-Thread teach stays node-attached on the Thread Console scan.)
      teaches: {
        onInvestigationStart: { target: '#action-grid', delay: 1400, note: 'Each source you can examine appears as a button here.' },
        onFirstClue:          { target: '#speaker-bar .back-link', note: 'Everything you uncover is logged in your <b>Field Notes</b> — open them here anytime.' },
      },
      locations: [
        {
          id: 'briefing_chamber',
          label: 'Briefing Chamber',
          requires: null,                  // always available
          anchorPoint: false,
          sources: {
            nova: {
              type: 'conversation', speaker: 'Nova', personality: 'patient',
              clueTag: 'briefed', icon: '🧑', label: 'Speak to Nova', actionLabel: 'Speak to Nova',
              learned: 'Nova: the human record is fraying. Thread back, witness each pivotal harvest, and stabilize it.',
              // Crew spritesheet: 9 talk frames + portrait last → action icon = portrait, dialogue = talk anim.
              sprites: { spritesheet: 'npc/nova/spritesheet_unmasked.png', spritesheetJson: 'npc/nova/spritesheet_unmasked.json' },
              nodes: {
                start: {
                  text: "So you're the new archivist. I'm Dr. Nova and I'll be your handler from this side of the thread.\n\nBefore the Archive lets anyone touch history, let me ask you one question: who vouched for your appointment?",
                  options: [
                    { label: 'An Oolian.', goto: 'preview_oolian' },
                    { label: 'A Rhessi.',  goto: 'preview_rhessi' },
                    { label: 'A Vressk.',  goto: 'preview_vressk' },
                  ],
                },
                // Companion preview — face + name + note; NOT committed until confirmed
                // ("No, wait…" returns to the question). Introduced by name here (Bible §2.4).
                preview_oolian: {
                  image: 'npc/companion/oolian/portrait_species_oolian.png',
                  text: "Yvi. The Oolian — small, bioluminescent, and incapable of leaving a question alone. They read soil the way you read text. When the review board called you a risk, Yvi called you \"the only candidate who'd actually look.\" If anyone bullied the Archive into taking a chance on you, it was them. And they'll want every detail when you come home!",
                  options: [
                    { label: "Yes — that was Yvi.",                goto: 'chose', setsState: { field: 'companionSpecies', value: 'oolian' } },
                    { label: 'No, wait — maybe it was someone else.', goto: 'start' },
                  ],
                },
                preview_rhessi: {
                  image: 'npc/companion/rhessi/portrait_species_rhessi.png',
                  text: "Saren. The Rhessi — a keeper of records who never forgets a harvest, or a debt. Patient to a fault. They read your file when no one else would and used their own standing to get behind you. If they put your name forward, they meant it. And they'll be holding the ledger open until you return.",
                  options: [
                    { label: "Yes — that was Saren.",              goto: 'chose', setsState: { field: 'companionSpecies', value: 'rhessi' } },
                    { label: 'No, wait — maybe it was someone else.', goto: 'start' },
                  ],
                },
                preview_vressk: {
                  image: 'npc/companion/vressk/portrait_species_vressk.png',
                  text: "Korl. The Vressk — blunt as a dropped stone and twice as honest. They judge a people by how they share a meal, not how they file a report. Vouching for you was the warmest thing they have ever done out loud. And they'll deny doing it right up until you walk back through the door.",
                  options: [
                    { label: "Yes — that was Korl.",               goto: 'chose', setsState: { field: 'companionSpecies', value: 'vressk' } },
                    { label: 'No, wait — maybe it was someone else.', goto: 'start' },
                  ],
                },
                chose: {
                  text: "Good. They'll be waiting at the far end of all this, but that's a long way off. For now it's just you and me.\n\nLet me tell you what's wrong.",
                  buttonLabel: 'Nova',           // §4.4: button reads "Nova" once you're past the formalities
                  options: [ { label: "What's wrong?", goto: 'brief_premise' } ],
                },
                brief_premise: {
                  text: "The Archive preserves the moments that made agriculture possible. The human record used to be solid. But, lately it's fraying with different pivotal moments going thin, threatening to come loose.\n\nWe can reach them. Zel'keth's people gave us resonance threading — a way to anchor you, an observer, to a single moment in the past. You won't change it. You'll witness it, and that act of witnessing holds it in place.",
                  options: [
                    { label: "And if a moment comes loose, what then?", goto: 'brief_stakes' },
                    { label: 'So what do I actually do there?',          goto: 'brief_task' },
                  ],
                },
                // Optional flavor (no clue) — the stakes, in Nova's dry register.
                brief_stakes: {
                  text: "Then it thins until it tears, and everything it made possible starts to forget itself. A grain that was never tamed for cultivation. A people who never settled to farm it. The food that never feeds us today.\n\nThat's the theory anyway. Nobody's let one come fully loose to check. Let's try and keep it that way.",
                  options: [ { label: 'So what do I actually do there?', goto: 'brief_task' } ],
                },
                brief_task: {
                  text: "You investigate. Talk to who's there, read what they left behind, piece together what made the moment matter. When you understand it well enough, you Stabilize the Record and the thread holds.\n\nWhen you're ready, step over to the Thread Console and initialize your first thread. But say hello to Zel'keth first, and skim the Archive entry too. Humor me please.",
                  revealsClue: 'briefed',
                  endsConversation: true, exitLabel: 'Understood.',
                },
              },
            },
            zelketh: {
              type: 'conversation', speaker: "Zel'keth", personality: 'curious',
              clueTag: 'met_zelketh', icon: '👽', label: "Hear Zel'keth",
              learned: "Zel'keth: the 'deep current' of their network carries signals across time. Threading rides along it.",
              // Alien mood-portrait (NO talk loop): personality 'curious' → updateAlienPortrait
              // swaps portrait_alien_<mood> from the alien sheet (repointed to npc/zelketh).
              sprites: { alienPortrait: 'portrait_alien_neutral.png', alienIcon: 'portrait_alien_neutral.png' },
              nodes: {
                // 'start' is the hub: greeting + question menu. Branches loop back here;
                // once read, the greeting re-shows instantly (typewriter skip), so looping
                // isn't repetitive. Only deep_current reveals the clue — the rest is flavor.
                start: {
                  // SSS-style "universal translator" conceit: Zel'keth's speech arrives as
                  // plain (already-translated) English — NO §4.5 foreign-script engine here
                  // (that is reserved for the Sumerian/cuneiform time-location, L2) and NO translator
                  // glitches (the relationship/translator is well-established by now).
                  text: "New one! Good, good. Nova frowns; do not let the frown worry you. She has frowned at me for more than thirty years.",
                  options: [
                    { label: "How does a \"current\" let me travel through time?", goto: 'deep_current' },
                    { label: "Thirty years with Nova?!",                     goto: 'about_nova' },
                    { label: "What are you...exactly?",                      goto: 'about_species' },
                    { label: "Will it hurt?",                             goto: 'about_sensation' },
                    { label: 'Step back.',                                  goto: '__exit__' },
                  ],
                },
                deep_current: {
                  text: "We speak through a chemical network we call the deep current. It runs through air and, it turns out, through time too! Your scientists and ours learned to ride it, and travel with it.\n\nYou will not move your body, archivist. You will move your \"attention\" to the past, and home again. Try not to flinch.",
                  // Clue is earned only once you ask HOW threading works (not on the greeting).
                  revealsClue: 'met_zelketh',
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Noted.',                  goto: '__exit__' },
                  ],
                },
                // ── Optional flavor (no clue) ──
                about_nova: {
                  text: "Ha! Thirty years, yes. I was the first of my people she met without a wall of glass between us. She did not trust me. She wrote reports about it. Long reports.\n\nNow she trusts no one else to hold the other end of a thread while I send someone through. Frowning is only how her face says 'I care whether you come back.' You will learn to read it.",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.',              goto: '__exit__' },
                  ],
                },
                about_species: {
                  text: "Three bodies, one self. Where you say 'I,' I must decide whether I mean this body or the chorus thinking alongside with me. We are never quite alone. So we are very bad at grief, but very good at remembering.\n\nThat is why your Archive came to us. A people who cannot forget make a fine keeper of moments that must not be lost.",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.',              goto: '__exit__' },
                  ],
                },
                about_sensation: {
                  text: "Hurt? No. It is different than that. Your body stays here, alive and well, but dull as a stone. Your attention goes where it needs to in time.\n\nMost flinch the first time. The current does not mind a flinch. It minds only that you keep watching.",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.',              goto: '__exit__' },
                  ],
                },
              },
            },
            taa_records: {
              type: 'archive', speaker: 'TAA Records',
              clueTag: 'read_records', icon: '📜', label: 'Read TAA Records',
              learned: "Archive: the human chain runs from the first planted seed to humanity's journey to the stars.",
              nodes: {
                start: {
                  text: "TEMPORAL AGRICULTURAL ARCHIVE — ENTRY 0001\n\nSUBJECT: The Human Chain.\nA single line of moments connects the first seed a human chose to plant to the day humans fed themselves among the stars. Remove one link and the rest may not hold.\n\nSTATUS: integrity degrading. Cause: unknown.",
                  options: [
                    { label: 'Where does the chain begin?', goto: 'entry_begin' },
                    { label: 'What is the Archive for?',    goto: 'entry_mandate' },
                    { label: 'Close the record.',           goto: '__exit__' },
                  ],
                },
                entry_begin: {
                  text: "ENTRY 0002 — ORIGIN.\nThe first link is older than writing: a fertile crescent of river valleys where people stopped following the harvest and began to plant it. That is where your first thread will anchor.",
                  // Clue is earned only once you read to the origin entry (not the first screen).
                  revealsClue: 'read_records',
                  options: [
                    { label: "What's fraying the thread?",  goto: 'entry_threat' },
                    { label: 'Back to index.',      goto: 'start' },
                    { label: 'Close the record.',   goto: '__exit__' },
                  ],
                },
                // ── Optional flavor entries (no clue) ──
                entry_mandate: {
                  text: "ENTRY 0003 — MANDATE.\nThe Temporal Agricultural Archive does not own history. It witnesses it. Records it. Each member species contributes the harvests that made them: the first grain to their first bloom grown beyond a homeworld. Together they form the Common Record. A proof that to feed oneself is the oldest act of becoming a people.",
                  options: [
                    { label: 'Back to index.',    goto: 'start' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
                entry_threat: {
                  text: "ENTRY 0004 — THREAT ASSESSMENT.\nThe human chain is fraying faster than natural decay allows. Pattern: pivotal moments thinning from within, as though unseen. \nCause: UNKNOWN. \nAgent or accident: UNDETERMINED.\nRECOMMENDATION: send an observer. Begin at the first link.",
                  options: [
                    { label: 'Back to index.',    goto: 'start' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        {
          id: 'thread_console',
          label: 'Thread Console',
          requires: { clueFound: 'briefed' },   // unlocks once Nova has briefed you
          lockHint: 'Get your briefing from Nova in the Briefing Chamber first.',
          anchorPoint: true,                      // Initialize Thread resolves here
          // Living background: slow 2-frame "breathe" + blue console-screen glow.
          // Tuned in demos/console/. Frame A is `scene` (below); B crossfades over it.
          scene: 'scene/scene_taa_console.jpg',
          livingBg: {
            frameB: 'scene/scene_taa_console1.jpg',
            period: 5.5, bMin: 0.44, bMax: 1.0, ease: 'sine',
            glow: { color: '#1461d8', max: 0.50, size: 44, x: 51, y: 38, phaseOffset: -0.5 },
            // Rising particle column ("the thread") through the central portal.
            shimmer: { color: '#8fd8ff', count: 50, speed: 25, colX: 51, colW: 16, top: 5, bottom: 72, size: 2.5, max: 0.35, blur: 8.0, wobble: 8.0 },
            // Played when the player hits Initialize Thread: idle settles, then an
            // accelerating pulse burst, then a flash (→ the level transition).
            activate: { settle: 0.45, duration: 3.5, startPeriod: 0.7, endPeriod: 0.06, pulseSharpness: 0.2, endBOpacity: 0.70, endGlowOpacity: 0.40, ease: 'accel', particleBoost: 5.0, flash: 0.75 },
          },
          sources: {
            scan_resonance: {
              type: 'terminal', speaker: 'Thread Console',
              clueTag: 'resonance_scanned', icon: '🛰', label: 'Scan Resonance Map',
              learned: "Resonance map locked: first fray point is a river-valley crescent, roughly 9,700 BCE.",
              nodes: {
                start: {
                  text: "> THREAD CONSOLE ONLINE\n> SCANNING RESONANCE MAP...\n> STRONGEST FRAY POINT LOCATED:\n>   FERTILE CRESCENT  ·  ~9,700 BCE\n>   the first planted seed\n> ANCHOR READY",
                  revealsClue: 'resonance_scanned',
                  teach: { target: '#diagnose-btn', note: "When every interaction is done: Initialize Thread here to depart." },
                  options: [ { label: 'Step back.', goto: '__exit__' } ],
                },
              },
            },
          },
        },
      ],
      // L0 resolves via Initialize Thread (confirmInitializeThread), not a diagnosis
      // choice — these are unused for L0 but kept for engine shape.
      diagnoses: [
        { label: 'Initialize the thread.', isCorrect: true, hint: '' },
      ],
      explanation: {
        title: 'Thread Initialized',
        body: 'The Briefing Chamber dissolves into amber light. Your first thread takes hold.',
        funFact: 'Agriculture arose independently in at least 11 different regions of the ancient world.',
      },
    },

    // ── LEVEL 1 — The Fertile Crescent, ~9,700 BCE (First field mission) ──
    // STRUCTURAL SCAFFOLD. Prose below is concise PLACEHOLDER — every mechanic is
    // wired (gesture buttonLabel rotation Approach→Engage→Gesture, speech-only
    // moodShift penalties via redirect nodes, revealsClue tags, progressive
    // location locks, 3-option diagnosis, TAA Comms hints). The ultracode content
    // pass rewrites the prose INTO this locked node graph (same ids/gotos/tags).
    //
    // 4-clue gate (ALL required): replanting_seen · nonshatter_trait ·
    //   seed_selection · knowledge_spreading.
    // Locations unlock progressively: Grain Field (open, anchor) → Storage Pit
    //   (needs nonshatter_trait) → Settlement Edge (needs seed_selection).
    // ranksUp:false — first field level does NOT promote (locked ladder: L2–L6 do).
    // Gesture mechanic (§4.4 + mood): NPC text is third-person narration of
    //   speech+action; speech-only options goto a redirect node with moodShift:-1
    //   (forgiving — patient/curious personalities won't lock), gesture options
    //   are rewarded (+1) and carry the investigation forward.
    // NOTE: per-location living FX (storage dust motes, settlement fire/smoke) are
    //   DEFERRED to the demo-first FX pass — locations use static scene swaps now.
    {
      id: 'L1',
      // Banner: line 1 = name • tagline, line 2 = location - date.
      name: 'The Fertile Crescent',
      tagline: 'The first seed',
      location: 'a river valley',
      date: "9,700 BCE",
      briefing: "Welcome to the first thread, Archivist. You are standing at the edge of a river valley nearly twelve thousand years ago, where ice has only recently loosened its grip and the grasses grow thick and wild. A record is fraying here around a single woman and an ordinary act of attention. The Archive needs you to witness exactly what she did, find the evidence that proves it, and stabilize the moment before it slips away for good.",
      palette: {
        bg:        'radial-gradient(circle at 50% 35%, #2a2a14, #14140a)',
        bgMid:     '#1a1a10',
        accent:    '#e8b84a',
        highlight: '#fff3d6',
      },
      sprites: { scene: 'scene/scene_grain_field.jpg' },
      resolveLabel: 'Stabilize the Record',
      resolveNag: "The record's still frayed — there's more to witness first.",
      ranksUp: false,
      teaches: {
        onCommsAvailable: { target: '.call-home-btn', note: "This is your <b>TAA Comms</b> line to Nova. Tap it whenever you're unsure how to proceed. Her hints sharpen as you turn up more evidence. You get <b>one call per level</b>, so only use it when you're genuinely stuck." },
      },
      taaCommsHints: {
        low:  "Nova here, settling in alongside you. Take it slow on this one. There's a woman, a field, and a pit where she keeps something set aside. Watch what she does with her hands more than what she says, and let the place tell you the shape of it before you decide anything.",
        mid:  "Good progress. You've got part of the picture, but the record's still loose. There's ground you haven't covered yet. Handle the grain yourself if you haven't, and don't skip the stores. And remember she can't follow your words, only your gestures.",
        full: "You've found it all, Archivist! Get yourself back to the field to stabilize. The thing that matters isn't that the right grain appeared, it's that she chose it. Year after year she replants the heads that held onto their seed, and that choosing is what bends a wild plant into a crop. Hold onto that when you make the call.",
      },
      locations: [
        // ── Grain Field (anchor, always open) ──
        {
          id: 'grain_field',
          label: 'The Grain Field',
          requires: null,
          anchorPoint: true,
          scene: 'scene/scene_grain_field.jpg',
          // Ambient FX (tuned in demos/locationfx/lvl1.html): wind ripple on the wheat + birds.
          locationFx: {
            grain: { bandTop: 30, amplitude: 3.5, wavelength: 46, speed: 1, taper: 0.5 },
            birds: { interval: 15, flock: [1, 7], speed: [90, 120], size: [1, 5], altitude: [18, 25], arc: [1, 13], color: '#2a2620', flap: 13.5 },
          },
          sources: {
            woman: {
              type: 'conversation', speaker: 'The Woman', personality: 'patient', startMood: 0,
              clueTag: 'replanting_seen', icon: '🌾', label: 'The Woman', actionLabel: 'Approach',
              learned: "She deliberately replants only the grain heads that held their seed instead of shattering, season after season.",
              revisit: 'revisit',   // re-opening after the clue resumes at the post-clue hub
              sprites: { spritesheet: 'npc/fertile_crescent_woman/spritesheet.png', spritesheetJson: 'npc/fertile_crescent_woman/spritesheet.json' },
              nodes: {
                start: {
                  text: "She crouches low among the stalks, a fistful of ripe grain heads gathered against her chest, and watches you. Her eyes move over you the way she might weigh a strange animal at the edge of the field. She says something low and careful, the words shaped by a language you have never heard.",
                  buttonLabel: 'Approach',
                  options: [
                    { label: "[Gesture] Open your empty hands and lower yourself slowly to crouch beside her.", goto: 'observe' },
                    { label: "I'm an agent of the Archive. I've come to witness your work, not to take it. (speak)", goto: 'try_speak' },
                  ],
                },
                try_speak: {
                  text: "Your words land as nothing. A noise without meaning to her. Her brow tightens and she gives an uncertain sound, then turns back to the stalks.",
                  moodShift: -1,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "[Gesture] Stop talking. Hold still, meet her eyes, and let your hands offer to show instead of tell.", goto: 'observe' },
                  ],
                },
                observe: {
                  text: "Slowly, testing you, she lifts two grain heads into the light between you. One is whole with every seed still seated tight along the stalk. The other is bare and splayed, its joints broken open, the seed long since shaken loose to the ground. She holds them side by side and goes very still, waiting to see whether your eyes know the difference.",
                  moodShift: 1,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "[Gesture] Point to the whole wheat head, then to the soil at her feet, and mime pressing a seed into the earth.", goto: 'replant_reveal' },
                    { label: "The whole one. The head that kept its seed. That's the one you put back in the ground. (speak)", goto: 'try_speak' },
                  ],
                },
                replant_reveal: {
                  text: "She rises and walks you along the rows. Her hand passes over the stalks, fingers closing only on the heads that have held their seed, leaving the ones already scattering to fall. She presses the chosen heads into the soil, then sweeps her arm wide across the field and circles it. Each season, only the ones that held. A habit she is still learning to trust.",
                  revealsClue: 'replanting_seen',
                  bonusInsight: true,
                  buttonLabel: 'Gesture',
                  options: [
                    { label: "[Gesture] Cup your hands and hold them out. May I see the grain you've chosen?", goto: 'share_grain' },
                    { label: "[Gesture] Press a hand to your chest in thanks, then turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                // Optional loop-back branch (no clue) — author-approved texture.
                share_grain: {
                  text: "She tips a few of the kept heads into your cupped palms. They are heavier than they look, the seeds packed and unwilling to drop off. She watches your face as you turn them over.",
                  buttonLabel: 'Gesture',
                  options: [
                    { label: "[Gesture] Hand the grain gently back to her.", goto: 'revisit' },
                  ],
                },
                // Post-clue hub (source.revisit) — where re-opening the conversation resumes,
                // so it remembers you've already spoken. Always offers an obvious exit so it
                // never feels like an endless loop.
                revisit: {
                  text: "She glances up as you settle in beside her and gives a small nod. The two of you have already traded the shape of it. She goes back to choosing heads from the stalks.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "[Gesture] Ask once more to cup the grain she keeps.", goto: 'share_grain' },
                    { label: "[Gesture] Leave her to her work and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            handle_grain: {
              type: 'examination', speaker: 'The Grain', personality: 'stoic',
              clueTag: 'nonshatter_trait', icon: '🌱', label: 'Handle the Grain',
              sprites: { iconImg: 'UI/portrait_grain_specimen.png' },
              learned: "In these grain heads they does not shatter, so the seed stays fixed on the stalk instead of scattering to sow itself.",
              nodes: {
                start: {
                  text: "You roll a ripe grain head slowly between thumb and finger. Wild grain would already be coming apart by now. The little joint where each seed meets the stalk, snaps clean at ripeness and flings the seed to the ground to sow itself. But these joints hold. The seeds stay put, waiting on the stalk. And a plant that cannot drop its own seed cannot reseed itself. It can only be sown, by a hand that gathers it and presses it back into the soil.",
                  revealsClue: 'nonshatter_trait',
                  options: [
                    { label: "Pocket a specimen and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── Storage Pit (unlocks after the grain trait is understood) ──
        {
          id: 'storage_pit',
          label: 'The Storage Pit',
          requires: { clueFound: 'nonshatter_trait' },
          lockHint: 'Handle the grain in the field first — you won’t know what you’re looking at down here.',
          scene: 'scene/scene_storage_pit.jpg',
          // Ambient FX: dust motes in the light shaft (mask-clipped) + soft shaft glow.
          locationFx: {
            dust: { mask: 'scene/scene_storage_pit.mask.png', count: 50, speed: 12, drift: 5, size: 2, opacity: 0.65, twinkle: 0.6, color: '#ffe9c2' },
            shaft: { color: '#ffd478', opacity: 0.2, x: 55, y: 60, size: 68 },
          },
          sources: {
            examine_stores: {
              type: 'examination', speaker: 'The Stores', personality: 'stoic',
              clueTag: 'seed_selection', icon: '🫙', label: 'Examine the Stores',
              learned: "She sets aside only the non-shattering heads as next year's seed.",
              nodes: {
                start: {
                  text: "The pit is dry, lined with woven matting and tucked apart from the baskets of grain by the hearth. Every head in here is the same: plump, whole, still clutching its seed. It is a young habit, a choice about what gets to grow when the rains return to the hill-slopes, the heads that wouldn't shatter kept by themselves to seed the next season.",
                  revealsClue: 'seed_selection',
                  options: [
                    { label: "Cover the pit again and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── Settlement Edge (unlocks after the selection is understood) ──
        {
          id: 'settlement_edge',
          label: 'The Settlement Edge',
          requires: { clueFound: 'seed_selection' },
          lockHint: "Understand what she’s keeping before the neighbors’ interest will mean anything.",
          scene: 'scene/scene_settlement_edge.jpg',
          // Ambient FX: flickering fire glow + rising smoke column.
          locationFx: {
            fire: { x: 66, y: 69, size: 9, color: '#ff8a2a', intensity: 0.53, flicker: 0.44, flickerSpeed: 7.5 },
            smoke: { x: 67, y: 58, width: 3, count: 26, rise: 20, drift: 10.5, size: 5, growth: 3.5, opacity: 0.16, color: '#807c75' },
          },
          sources: {
            neighbor: {
              type: 'conversation', speaker: "The Neighbor", personality: 'curious', startMood: 0,
              clueTag: 'knowledge_spreading', icon: '🔥', label: "The Neighbor", actionLabel: 'Approach',
              learned: "A visitor leaves carrying the kept seed — the practice crosses to the next settlement.",
              revisit: 'revisit',   // after they leave with the seed, re-opening just acknowledges it
              sprites: { spritesheet: 'npc/settlement_figure/spritesheet.png', spritesheetJson: 'npc/settlement_figure/spritesheet.json' },
              nodes: {
                start: {
                  text: "A figure from the next valley over has been standing at the field's edge a while, just looking. Their eyes keep returning to the wheat still standing full and unbroken this late in the season. They say something low, in a language you don't share, and tilt their head at the field as if asking it a question.",
                  buttonLabel: 'Approach',
                  options: [
                    { label: "[Gesture] Hold out a kept head and let them take it; tip your head toward the grain still standing full.", goto: 'examine' },
                    { label: "It's the grain that doesn't shatter, the heads that hold their seed. (speak)", goto: 'try_speak' },
                  ],
                },
                try_speak: {
                  text: "They squint at you and the sounds you've made, then shake their head slowly. The words mean nothing to them. But their eyes are still on the standing grain.",
                  moodShift: -1,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "[Gesture] Show them instead — put a kept head in their hand and let them feel it.", goto: 'examine' },
                  ],
                },
                // Intermediate beat — they inspect the grain, curious but not yet convinced.
                examine: {
                  text: "They take the head and turn it over slowly, a thumbnail testing the joints that won't give. Their eyes go from it to their own palm — to the bare, broken stems they must know from home, the grain that spills itself to the ground before it can be gathered. Curious now they look back at you, waiting to learn what it is for.",
                  moodShift: 1,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "[Gesture] Mime it through: press the whole head into the soil, wait, then sweep a hand over a standing harvest — and again.", goto: 'share' },
                    { label: "Just tell them it comes back if you plant the ones that hold. (speak)", goto: 'try_speak' },
                  ],
                },
                share: {
                  text: "Understanding moves across their face all at once. They close the head in their fist, slow and careful, and look back toward their own valley as if measuring the walk home. They nod and turn to carry it there. One field set to sow, and now the makings of two.",
                  revealsClue: 'knowledge_spreading',
                  moodShift: 1,
                  bonusInsight: true,
                  buttonLabel: 'Gesture',
                  options: [
                    { label: "[Gesture] Press a second kept head into their hands, watch them go — then turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                // Post-clue (source.revisit) — they've already left with the seed; re-opening
                // acknowledges it rather than replaying the whole approach.
                revisit: {
                  text: "The neighbor is already gone, back over the ridge toward their own valley, the kept seed closed safe in one fist. The field's edge is quiet again — but the practice is walking to a second valley now.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "[Gesture] Turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      diagnoses: [
        { label: "She is deliberately selecting her crop: each harvest she sets aside the seed heads that held onto their grain and replants those, so generation by generation she has bred a wheat that depends on her hands to sow it.", isCorrect: true, hint: "" },
        { label: "The sturdy-headed grain happened to thrive on its own near her camp, and the plant essentially domesticated itself without any real choice on her part.", isCorrect: false, hint: "Look again at the stores. A head that won't shatter can't drop its own seed, so in the wild that trait is a dead end. It can't spread on its own. The only reason it survives and multiplies here is that she keeps replanting it." },
        { label: "An outsider arrived and taught her the whole method of farming at once. Planting, selecting, and storing as a finished system she simply adopted.", isCorrect: false, hint: "Nothing you witnessed shows a lesson handed down. What you saw was one person noticing one thing over many seasons and acting on it. Farming assembled itself slowly out of repeated attention, not arriving ready-made. The neighbor learns it from her, not the other way around." },
      ],
      explanation: {
        title: "Record Stabilized",
        body: "You witnessed the quiet beginning of agriculture as not an invention, but a practice built season by season. In wild wheat and barley, the little joint holding seed to stalk, shatters when ripe so the plant can scatter and reseed itself. A rare mutation occurred that keeps the joints intact, leaving the seed clinging to the stalk. Such a mutant can't sow itself and would vanish in the wild. But it's exactly the head a harvester can gather, and by setting those seeds apart in her storage pit and replanting them, she selected for it on purpose. And when the practice crossed to her neighbor, the thread held and spread.",
        funFact: "The trait that defines domesticated wheat, seed that stays on the stalk, is one that would doom the plant in the wild, since it can no longer drop and replant itself. Our most successful grain is, in a sense, a plant that can only survive because we promised to sow it each season.",
      },
    },

    // ══════════════════════════════════════════════════════════════════
    // LEVEL 2 — Sumer, southern Mesopotamia, ~2000 BCE — "Salt and Silt"
    // ══════════════════════════════════════════════════════════════════
    // SETTING = MESOPOTAMIA, NOT EGYPT (accuracy fix, author 2026-06-25). Broad
    //   over-irrigation salinization is THE documented Sumerian story — the
    //   Tigris-Euphrates floodplain, ~2400–1700 BCE, where cuneiform tablets record
    //   yields falling and fields "turning white" as salt-tolerant barley replaced
    //   wheat. The bible's subtitle "Salt and Silt" is literally the title of the
    //   Jacobsen & Adams 1958 paper on Mesopotamian salinization. The art (faces,
    //   linen/wool, river/reed banks, mud-brick interior) reads as Sumer; only the
    //   user-facing place names/script change. (Internal source key `overseer` still
    //   lives under npc/nile_overseer/ on disk — a harmless path misnomer, not renamed.)
    // FIRST PROMOTING LEVEL: ranksUp:true → completing L2 fires the rank-up badge
    //   screen for the first time in real play (R0 Archive Initiate → R1 Field
    //   Recorder), then Thread Forward → L3 "coming soon" placeholder.
    // TRANSLATION MECHANIC (§4.5) RETURNS here (dormant since L0): both NPCs speak via
    //   node.translated + node.foreignText — now SUMERIAN CUNEIFORM (Unicode block
    //   U+12000–U+123FF, bundled Noto Sans Cuneiform webfont, codepoint-safe typewriter;
    //   .foreign-script font-stack resolves cuneiform per-glyph). The translation TEACH
    //   is re-seeded on the overseer's first translated node (overseer.start →
    //   '.translating-label'). The Scribe's Room is records-only (no NPC) — the agent's
    //   TAA device reads the clay tablets' cuneiform as narration, NOT a translated source.
    // GATE = 5 REQUIRED clues (Stabilize anchors at the Irrigated Fields):
    //   Fields: salt_crust (Sample Soil) + irrigation_practice (Overseer) + no_drainage (Trace
    //   Channels) → river_comparison (River Bank/marsh, unlocked by salt_crust) → scribe_record
    //   (Scribe's Room, unlocked by river_comparison).
    // + 5 INSIGHT buttons (source `insight:true`): Examine Crops · Sample Water · Examine Plants ·
    //   Examine Room · Query TAA Archive. Found like clues (checkmark + Field Notes + bonus score)
    //   but OPTIONAL — they don't gate Stabilize (engine: caseData.requiredClueTags excludes them).
    //   Every location now has the bible's button count (Fields 4 · River Bank 3 · Scribe's Room 3).
    // SCIENCE (now historically TRUE): flat alluvial plain + high water table +
    //   irrigation with no drainage → table rises, evaporation cakes salt at surface;
    //   abandoning the old fallow rest (under the city's grain demand) + fighting falling
    //   yields with MORE water feeds it. The marsh/river (moving water carries salt away)
    //   and fallow rest are the control. Records show barley replacing wheat.
    {
      id: 'L2',
      // Banner: line 1 = name • tagline, line 2 = location - date.
      name: 'Sumer',
      tagline: 'Salt and Silt',
      location: 'the southern floodplain',
      date: '~2000 BCE',
      briefing: "The thread runs forward to the flat black plain of southern Mesopotamia. The land Sumerians call the place between the rivers, where the Tigris and Euphrates run down to the sea. Here people have built the first great irrigation works, leading river water out across fields the flood never reached, and for generations the harvests fed cities of tens of thousands. \n\nNow those same fields are failing. The grains coming up thin and pale-rooted, and the temple scribes say the gods are displeased. That reason is about to become the record. Witness what is truly killing the ground, find the evidence that proves it, and stabilize the moment before the truth is sealed into clay tablet.",
      palette: {
        bg:        'radial-gradient(circle at 50% 35%, #2d2416, #15110a)',
        bgMid:     '#1c1710',
        accent:    '#e8b84a',
        highlight: '#fff3d6',
      },
      sprites: { scene: 'scene/scene_irrigated_fields.jpg' },
      resolveLabel: 'Stabilize the Record',
      resolveNag: "The record's still frayed — there's more to witness first.",
      ranksUp: true,                       // FIRST promoting level → R0 → R1 Field Recorder
      teaches: {
        onCommsAvailable: { target: '.call-home-btn', note: "This is your <b>TAA Comms</b> line to Nova. Tap it whenever you're unsure how to proceed. Her hints sharpen as you turn up more evidence. You get <b>one call per level</b>, so only use it when you're genuinely stuck." },
      },
      taaCommsHints: {
        low:  "This one's a puzzle of cause, not of people. The overseer will tell you what they've done to the land, but read the ground itself just as closely. Sample the soil where the grain is worst, and don't take the gods for an answer just because the scribes did.",
        mid:  "You're partway there. You've seen the fields. Now go down to the marsh and the river channels, where the water never stops moving, the ground stays sweet. The old folk will tell you these fields used to be rested every other year. Ask what the moving water does, and what resting the land did.",
        full: "You've got it all! Anchor back at the fields to stabilize. This plain is dead flat and the water sits just under it. Pour river water on with no way to drain it and the water table climbs to the surface, where the sun pulls the water off and leaves the salt behind. They used to let the land rest so the salt could sink. But now the city wants grain every year, so they use the land without pause and fight the failing harvest with still more water. The land isn't cursed. It's drowning, and no one's letting it breathe.",
      },
      locations: [
        // ── The Irrigated Fields (anchor, always open) ──
        {
          id: 'irrigated_fields',
          label: 'The Irrigated Fields',
          requires: null,
          anchorPoint: true,                      // Stabilize the Record resolves here
          scene: 'scene/scene_irrigated_fields.jpg',
          // Ambient FX (tuned in demos/locationfx/lvl2.html): water shimmer mask-clipped to
          //   the irrigation channels + glint. Salt crust is static (baked into the scene art).
          locationFx: {
            water: { mask: 'scene/scene_irrigated_fields.mask.png', invert: false, amplitude: 1.50, wavelength: 30, speed: 1.50, glintColor: '#cfe6ff', glintOpacity: 0.12, glintSpeed: 1.20 },
          },
          sources: {
            // NPC — Sumerian field overseer, speaks via the translation mechanic.
            overseer: {
              type: 'conversation', speaker: 'The Overseer', personality: 'professional', startMood: 0,
              clueTag: 'irrigation_practice', icon: '🧑‍🌾', label: 'The Overseer', actionLabel: 'Approach',
              learned: "The overseer floods the fields from the channels again and again, and crops the land every season without the old fallow res. Answering each failing harvest with more water, never less.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/nile_overseer/spritesheet.png', spritesheetJson: 'npc/nile_overseer/spritesheet.json' },
              nodes: {
                start: {
                  translated: true,
                  foreignText: '\u{1202D}\u{12000}\u{12351} \u{12097}\u{121A0} \u{12157}\u{12217} \u{1230B}\u{122D8} \u{1228F}\u{1207A}',
                  text: "A man in a long fringed-wool skirt straightens as you approach, a cut-reed stylus tucked at his belt. He says something guarded like a greeting that is also a question about what you want with his failing fields.",
                  buttonLabel: 'Approach',
                  // §4.5 translation teach — re-seeded on the FIRST translated node of L2.
                  teach: { target: '.translating-label', note: "This person speaks an ancient language: Sumerian, written in cuneiform wedges. Your <b>TAA device translates it for you</b>: the signs type out, then resolve into plain words while <b>TRANSLATING</b> stays lit above. Your own replies are carried back to him in his language automatically." },
                  options: [
                    { label: "Ask him, plainly, why the fields are dying.", goto: 'blame' },
                    { label: "Ask him to show you how he waters this land.", goto: 'method_intro' },
                  ],
                },
                blame: {
                  translated: true,
                  foreignText: '\u{12217}\u{1202D} \u{12000}\u{12097} \u{121A0}\u{12157} \u{1224C}\u{1228F} \u{12313}\u{12000}',
                  text: "The gods have turned their faces from the work. The diviners have read it in the failing grain and the temple offerings have been doubled. \n\nHe says it the way a man repeats something he half-believes because the alternative is that the fault is his own. He gestures at the white-scabbed earth as proof of divine displeasure.",
                  moodShift: -1,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Ask how he waters the fields.", goto: 'method_intro' },
                    { label: "Point to the white crust on the soil. Ask if it was always there.", goto: 'method_intro' },
                  ],
                },
                method_intro: {
                  translated: true,
                  foreignText: '\u{12000}\u{12000}\u{12000} \u{12097}\u{121A0} \u{12157}\u{1230B} \u{12217}\u{12351} \u{1202D}\u{122D8}',
                  text: "He walks you to the head of a channel and shows the work. The river led out along the cuts, the gates opened, the water set loose to stand across the fields and soak the ground deep. For generations the harvests filled the temple granaries to the rafters. There was a time they let each field lie fallow a year and rest, but the city is greater now. And the land is worked every season without pause. As the yields fall he only opens the gates wider, floods longer, giving the ground more water, not less.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Ask what happens to all that water once the fields have drunk their fill?", goto: 'drainage' },
                  ],
                },
                drainage: {
                  translated: true,
                  foreignText: '\u{121A0}\u{12000} \u{12097}\u{1230B} \u{12217}\u{1202D} \u{12351}\u{12157} \u{1228F}\u{12000}',
                  text: "The question seems to puzzle him. It stays, it sinks, and it goes into the ground where the roots want it. There are no cuts to carry it back out again. Why would a man dig a channel to throw water away? On this dead-flat plain the water comes in, and it never, ever leaves.",
                  revealsClue: 'irrigation_practice',
                  bonusInsight: true,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Thank him, and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                // Post-clue hub (source.revisit) — remembers you've already spoken.
                // (The physical "no drainage" evidence is now its own action: Trace the Channels.)
                revisit: {
                  translated: true,
                  foreignText: '\u{1202D}\u{12157} \u{12000}\u{12097} \u{121A0}\u{1230B}\u{12217}',
                  text: "The overseer is back at the gates, opening them wider against the failing grain. More water, the only answer he has. He nods to you, distracted, and returns to the work that is quietly poisoning his fields.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Leave him to it and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination — the salt crust on the failing plots.
            sample_soil: {
              type: 'examination', speaker: 'The Soil', personality: 'stoic',
              clueTag: 'salt_crust', icon: '🧂', label: 'Sample the Soil',
              sprites: { iconImg: 'UI/portrait_salt_soil.png' },
              learned: "The pale crust scabbing the dying plots is salt drawn up to the surface and left behind as the standing water evaporates in the sun.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA SOIL PROBE — standby\n  sample plate: empty\n  surface: pale crust, composition unknown\n  Insert a sample to analyse, or survey the plots.",
                  options: [
                    { label: "Scrape the crust into the device and read what it is.", goto: 'test' },
                    { label: "Walk the plots first to see where the crust is and isn't.", goto: 'survey' },
                  ],
                },
                // Intermediate beat — what the crust IS, but not yet what it means.
                test: {
                  type: 'terminal',
                  text: "> TAA SOIL PROBE — analysis\n  composition: SALT — fine crystalline\n  ruled out: lime · blight · desert dust\n\n  Common salt — the kind the river carries dissolved and invisible in every drop, come out of solution and dried hard on the field. \n  Unresolved: how salt out of moving river water ends up caked dry on the land.",
                  options: [
                    { label: "Walk the plots to see where the crust is and isn't.", goto: 'survey' },
                  ],
                },
                // Reveal — the pattern (worst where water stands, absent where it drains).
                survey: {
                  text: "You pace the fields, reading the ground plot by plot, and a pattern appears out of it. By the channel-heads, where the water runs fast and sinks and is gone, the soil is nearly clean and the grain still stands. Out at the far flats, where the water pools and lies and waits for the sun to take it, the crust is thickest and the crop is dead. It's a map of where the water sat longest. The salt it carried can't evaporate, so it stays, and builds, exactly where the water lingers.",
                  revealsClue: 'salt_crust',
                  options: [
                    { label: "Seal a sample of the crust and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED clue) — tracing the channels: no drainage anywhere. Split out
            // of the overseer's dialogue so the physical evidence has its own action button (bible: "Trace Channels").
            trace_channels: {
              type: 'examination', speaker: 'The Channels', personality: 'stoic',
              clueTag: 'no_drainage', icon: '🌊', label: 'Trace the Channels',
              sprites: { iconImg: 'UI/icon_trace_signs.png' },
              learned: "Every channel feeds water onto the fields and not one drains it off again. On the dead-flat plain it can only sink into a water table already near the surface, then rise back to the sun.",
              nodes: {
                start: {
                  text: "You walk the channels to their ends, one cut after another. Every one carries water onto the land and none carries it away. The plain is dead level. Poured on, it can only soak down into a water table already lying close beneath the surface, then climb back to the sun. Where the standing water lingers longest, the white crust lies thickest.",
                  revealsClue: 'no_drainage',
                  options: [
                    { label: "Mark the dead-end channels and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the crops themselves: wheat dying, salt-tolerant barley holding on (bible: "Examine Crops").
            examine_crops: {
              type: 'examination', speaker: 'The Crops', personality: 'stoic', insight: true,
              clueTag: 'crops_examined', icon: '🌾', label: 'Examine Crops',
              sprites: { iconImg: 'UI/portrait_salt_crops.png' },
              learned: "The wheat dies in the same salted ground the barley still stands. The hardier grain outlasting the softer as the salt spreads.",
              nodes: {
                start: {
                  text: "You move through the rows. The wheat is worst, pale and stunted, the ears half-empty, whole stretches gone to bare salted dirt. But threaded among it the barley still stands but thinner than it should be, yet green, holding ground the wheat has surrendered. Same field, same water, same crust. One grain simply bears the salt longer than the other.",
                  revealsClue: 'crops_examined',
                  bonusInsight: true,
                  options: [
                    { label: "Note the barley outlasting the wheat, and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── The River Bank (unlocks once the salt is identified) ──
        {
          id: 'river_bank',
          label: 'The River Bank',
          requires: { clueFound: 'salt_crust' },
          lockHint: "Find out what's poisoning the field soil first — then the river will have something to show you.",
          scene: 'scene/scene_river_bank.jpg',
          // Ambient FX (tuned in demos/locationfx/lvl2.html): river/marsh water shimmer
          //   (mask-clipped) + birds occluded below the hill ridge (occludeBelow).
          locationFx: {
            water: { mask: 'scene/scene_river_bank.mask.png', invert: false, amplitude: 2.00, wavelength: 44, speed: 0.60, glintColor: '#497676', glintOpacity: 0.08, glintSpeed: 0.75 },
            birds: { interval: 13.0, flock: [1, 5], speed: [80, 120], size: [2.5, 5.0], altitude: [8, 18], arc: [2, 4], color: '#3a3630', flap: 12, occludeBelow: [[2.7, 29.3], [12.9, 24.5], [25.4, 21.9], [41.3, 18.6], [61.8, 13.7], [66.8, 11.9], [93.3, 6.8]] },
          },
          sources: {
            river_worker: {
              type: 'conversation', speaker: 'The Marsh Fisher', personality: 'curious', startMood: 0,
              clueTag: 'river_comparison', icon: '🛶', label: 'The Marsh Fisher', actionLabel: 'Approach',
              learned: "Where the river and the marsh keep the water moving, the ground stays sweet as the current carries the salt away. Exactly what the trapped, never-rested field-flats can never do.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/river_worker/spritesheet.png', spritesheetJson: 'npc/river_worker/spritesheet.json' },
              nodes: {
                start: {
                  translated: true,
                  foreignText: '\u{12000}\u{121A0} \u{1230B}\u{12097} \u{12157}\u{12217} \u{1202D}\u{1228F}',
                  text: "A lean man mending a reed net glances up from the shade of the marsh, unhurried and openly curious about a stranger who has walked all the way down from the fields to the water's edge. He lifts a hand in easy greeting and says something that sounds like a question.",
                  buttonLabel: 'Approach',
                  options: [
                    { label: "Ask him about the soil here at the water's edge.", goto: 'soil' },
                    { label: "Ask what he's heard about the fields failing inland.", goto: 'fields' },
                  ],
                },
                soil: {
                  translated: true,
                  foreignText: '\u{12000}\u{12000}\u{12097} \u{121A0}\u{1230B} \u{12217}\u{12157} \u{1202D}\u{12351}',
                  text: "Best ground in the world: black and soft and sweet. Down here the water never sits still. The river slides past, the marsh breathes in and out with it, and what little bitterness the water carries is carried off again, downstream, gone. \n\nThe water comes, and then, miming the pull of the current, the water goes.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Ask why the inland fields don't thrive the same way, on the same water.", goto: 'compare' },
                  ],
                },
                fields: {
                  translated: true,
                  foreignText: '\u{12217}\u{1202D} \u{12157}\u{12000} \u{121A0}\u{12097} \u{1230B}\u{1228F}\u{12000}',
                  text: "White ground and dying grain and the diviners calling for more offerings. He shakes his head, not unkindly, like a man watching someone do a simple thing the hard way. He doesn't understand the field-men, he says: they take the river and trap it out on the flats and never let it run off again, and they've stopped resting the land. Water that comes and is never allowed to leave.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Ask him about his own ground, and why it stays sweet.", goto: 'soil' },
                  ],
                },
                compare: {
                  translated: true,
                  foreignText: '\u{12000}\u{121A0}\u{12097} \u{1230B}\u{12217} \u{12157}\u{1202D} \u{12351}\u{1228F} \u{122D8}\u{12000}',
                  text: "He puzzles it out aloud, and lands on the truth without knowing its weight. The water always moving through and away, and whatever bitterness was in it going with the current, back to the river. The field-flats only ever drink so nothing washes through them and nothing leaves, and now they're not even rested between crops to let the ground recover. \n\n\"Standing water goes bad, everyone knows that. Maybe standing water makes bad ground too.\" He says it as a small joke. He has just described soil salinization exactly.",
                  revealsClue: 'river_comparison',
                  bonusInsight: true,
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Examine the marsh reeds and water for yourself.", goto: 'examine' },
                    { label: "Thank him, and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                // Optional insight beat (no clue) — physical confirmation.
                examine: {
                  text: "You test the marsh edge. The reeds stand thick and deep green, the soil beneath them dark and crumbling and almost free of salt; the device reads the water sliding steadily past, carrying its load downstream and away. It is the same river water that feeds the dying fields inland. The only difference is the motion. Here the water is always leaving, and the salt leaves with it.",
                  bonusInsight: true,
                  options: [
                    { label: "Note the sweet, salt-free marsh soil and step back.", goto: 'revisit' },
                  ],
                },
                revisit: {
                  translated: true,
                  foreignText: '\u{12000}\u{12097} \u{121A0}\u{1230B}\u{12157}',
                  text: "The marsh fisher has gone back to his net, the slow water sliding past at his feet. He gives you a friendly nod, as if you've shared a good idea and he's not quite sure which of you had it.",
                  buttonLabel: 'Engage',
                  options: [
                    { label: "Examine the marsh once more.", goto: 'examine' },
                    { label: "Leave him to his net and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — testing the moving water (bible: "Sample Water").
            sample_water: {
              type: 'examination', speaker: 'The Water', personality: 'stoic', insight: true,
              clueTag: 'water_sampled', icon: '💧', label: 'Sample Water',
              sprites: { iconImg: 'UI/portrait_river_sample.png' },
              learned: "The river water carries only a faint trace of salt, and never stops moving, so it never gets the chance to leave that salt behind the way the trapped fields do.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA WATER PROBE — current sample\n  salinity: faint trace only\n  flow: continuous, downstream\n\n  This is the same water the channels lead onto the fields — but here it never stops to dry. Whatever salt it carries, it carries off again. Only where the water is trapped and left to evaporate does the salt stay behind.",
                  revealsClue: 'water_sampled',
                  bonusInsight: true,
                  options: [
                    { label: "Seal the sample and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the bank growth vs the salted fields (bible: "Examine Plants").
            examine_plants: {
              type: 'examination', speaker: 'The Reeds', personality: 'stoic', insight: true,
              clueTag: 'plants_examined', icon: '🌿', label: 'Examine Plants',
              sprites: { iconImg: 'UI/icon_plants.png' },
              learned: "The reeds and levee plants grow thick and green in black, sweet soil. Everything the salted fields inland have lost, on the very same river water.",
              nodes: {
                start: {
                  text: "You examine the bank growth. The reeds stand tall and crowded, green down to the waterline, rooted in soil that is black and soft and almost free of salt. It is the opposite of the dying fields inland with the same river feeding both. Yet, here the ground is thick with life. Where the water comes and goes, the plants thrive; where it is trapped and left to dry, they burn.",
                  revealsClue: 'plants_examined',
                  bonusInsight: true,
                  options: [
                    { label: "Note the thriving bank growth and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── The Scribe's Room (unlocks once the river comparison is understood) ──
        // No NPC — scribes are static background figures. Records-only; the agent's
        // TAA device reads the cuneiform columns as narration (NOT a translated source).
        {
          id: 'scribes_room',
          label: "The Scribe's Room",
          requires: { clueFound: 'river_comparison' },
          lockHint: "Understand why the fields are dying before the scribes' explanation will mean anything.",
          scene: 'scene/scene_scribes_room.jpg',
          // Ambient FX (tuned in demos/locationfx/lvl2.html): flickering oil-lamp glow + rising smoke.
          locationFx: {
            lamp: { x: 44, y: 57, size: 13, color: '#ffb24a', intensity: 0.50, flicker: 0.28, flickerSpeed: 5 },
            smoke: { x: 43, y: 57, width: 5, count: 37, rise: 27, drift: 4, size: 3, growth: 2.10, opacity: 0.10, color: '#6b6660' },
          },
          sources: {
            read_records: {
              type: 'examination', speaker: 'The Records', personality: 'stoic',
              clueTag: 'scribe_record', icon: '📜', label: 'Read the Records',
              sprites: { iconImg: 'UI/portrait_clay_tablets.png' },
              learned: "The temple tallies track the harvest falling year on year and the salt-tolerant barley quietly replacing the failing wheat. Yet, wrote the cause down as the will of the gods, the true reason about to be sealed away under divine record.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — temple harvest tablets\n  rendering cuneiform → figures……\n  early years: yields high and climbing — the channels at their triumph\n  later years: the same fields giving less, and less, and less\n  shift: baskets of wheat give way to barley, season on season",
                  options: [
                    { label: "Read on — what cause do the scribes set down for the decline?", goto: 'cause' },
                  ],
                },
                cause: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — recorded cause\n  Beside each falling yield the scribes press a reason:\n    · the gods' favour withdrawn\n    · the offerings insufficient\n    · the king's piety in question\n  Remedies prescribed: more grain to the temple, more prayer, a festival restored.\n  Nowhere in the clay: salt · standing water · a field that will not drain.\n\n  The true cause is about to be written over — sealed into the record as the will of heaven.",
                  revealsClue: 'scribe_record',
                  options: [
                    { label: "Copy the tallies, note the interpretation, and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the room's mood: all eyes turned upward, none toward the soil (bible: "Examine Room").
            examine_room: {
              type: 'examination', speaker: "The Scribe's Room", personality: 'stoic', insight: true,
              clueTag: 'room_examined', icon: '🏺', label: 'Examine the Room',
              sprites: { iconImg: 'UI/portrait_temple_offerings.png' },
              learned: "The room has turned its mind to the gods, not the soil. Fresh offerings, an omen-priest's marks, daily prayers where they were once monthly. Every answer here looks upward, none looks down at the soil and salt.",
              nodes: {
                start: {
                  text: "You look the room over. Beyond the scribes at their tablets are heap of fresh offerings against the wall, an omen-priest's notations pinned beside the harvest tallies, a brazier kept burning for prayers that used to be monthly and are now daily. Every effort in the room reaches upward, toward the gods. Not one of them is bent toward the ground, where the white is quietly climbing.",
                  revealsClue: 'room_examined',
                  bonusInsight: true,
                  options: [
                    { label: "Take in the room's mood and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the device's factual counterpoint to the scribes (bible: "Query TAA Archive").
            // The educational payoff: names what the scribes can't, and where it led. Optional/bonus.
            query_archive: {
              type: 'examination', speaker: 'TAA Archive', personality: 'stoic', insight: true,
              clueTag: 'archive_queried', icon: '🛰️', label: 'Query TAA Archive',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "The TAA Archive names what the scribes can't: salinization. Across the southern plain barley overtakes the wheat as the soil sours, the great fields are abandoned to the crust, and power drifts north — a people undone by its own water.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — forward trace · southern Mesopotamia\n  The soil is salting, and it will not stop.\n  coming centuries:\n    · salt-shy wheat all but vanishes from the southern fields\n    · barley takes its place — then falters too\n    · the greatest irrigation lands abandoned to the white crust\n    · power drifts north, to ground that was never trapped\n  The first farmland a people ever engineered — undone by the very water they led onto it.",
                  revealsClue: 'archive_queried',
                  bonusInsight: true,
                  options: [
                    { label: "Log the Archive's account and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      diagnoses: [
        { label: "The fields are salting themselves. On this dead-flat plain the water table sits just beneath the surface. Irrigating with no way to drain raises it further, and as the standing water evaporates it draws salt up and cakes it on the soil. Abandoning the old fallow rest and fighting falling yields with still more water only feeds the process. Unlike the moving river and marsh, which carry their salt away, the trapped fields have no way to flush it out.", isCorrect: true, hint: "" },
        { label: "The gods truly have withdrawn their favour — or, in plainer terms, the rivers' flood has been failing and the fields are simply starved of water.", isCorrect: false, hint: "Look at the marsh and the river. That ground is fed by the very same water, and it's thriving — so the water hasn't failed. And the dying fields aren't short of it; the overseer pours more on every year. The problem isn't too little water. It's water that comes in and is never let out." },
        { label: "A blight or pest is spreading through the crop, the way disease moved through the wild grain upstream.", isCorrect: false, hint: "You found no disease on the plants themselves — what you found was salt crust on the ground, caked heaviest exactly where the water stands longest, and barley steadily pushed in to replace the wheat that can't bear it. The crop isn't sick. The soil beneath it has turned to salt." },
      ],
      explanation: {
        title: "Record Stabilized",
        body: "You witnessed the first agricultural crisis of human making: soil salinization. All river water carries some dissolved salt. When irrigated land can drain, or when it's rested fallow so the water table falls, that salt washes through and moves on. But on the flat alluvial plain of southern Mesopotamia the water table lays close beneath the surface, and water poured onto fields with no outlet had only one way to leave: evaporation. \n\nThe water rose off as vapor and the salt it carried did not, building season after season until a white crust scalded the ground and crops could no longer drink. As the cities' demand for grain grew, farmers abandoned the fallow rest that had let the land recover and fought the falling yields with still more water. Making the whole thing even worse. The marshes and the river held the answer all along. That where the water keeps moving, it carries its salt away.",
        funFact: "We can still read the disaster in the tablets: as the fields soured, salt-tolerant barley steadily replaced wheat across southern Mesopotamia — wheat fell from nearly half the crop to almost nothing over a few centuries — and scribes described the ground 'turning white.' The historians who first pieced it together titled their study 'Salt and Silt in Ancient Mesopotamian Agriculture,' and many believe the slow poisoning of the soil helped shift power from the salted south toward the north.",
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // LEVEL 3 — County Cork, Ireland, 1845 · "What the Land Forgot"
    //   The Great Famine. English from here on — NO foreign-script engine.
    //   Heaviest tonal level (bible §285): restrained, observational; the agent
    //   is an archivist, not a savior. ranksUp:true → R1 Field Recorder → R2
    //   Thread Walker (bible §384: Thread Walker earned after L3).
    //   ANCHOR = Cottage Interior (plan §566). Progression: Potato Field (open)
    //   → Cottage unlocks on `blight_agent` → The Road unlocks on `sole_food`;
    //   then RETURN to the Cottage to Stabilize.
    //   5 REQUIRED (sudden_collapse · blight_agent · monoculture · sole_food ·
    //   spreading) + 4 INSIGHT (soil_clear · exports_continue · oomycete ·
    //   displacement). Buttons 4/2/3 per bible §279-281.
    // ══════════════════════════════════════════════════════════════════════
    {
      id: 'L3',
      name: 'County Cork',
      tagline: 'What the Land Forgot',
      location: 'the Irish countryside',
      date: '1845',
      briefing: "The thread runs forward to the cold wet autumn of 1845 — a townland in the south of Ireland where nearly every family lives on one crop and almost nothing else. In a single season the potato fields have begun to rot where they stand and the country is already reaching for the reason: a judgment, a punishment, the idleness of the poor. That reason is about to become the record. \n\nBut something is killing the crop. A living thing, spreading field to field on the wind and rain. Witness what is truly destroying the harvest, find the evidence that proves it, and stabilize the moment before the truth is buried under blame. You cannot stop what is coming. You can only make sure it is remembered honestly.",
      palette: {
        bgDeep:    '#0e1011',
        bgMid:     '#15191a',
        bgPanel:   '#1b2021',
      },
      sprites: { scene: 'scene/scene_potato_field.jpg' },   // level-wide bg loadScene reads (caseData.sprites.scene)
      resolveLabel: 'Stabilize the Record',
      resolveNag: "The record isn't whole yet — there's more to witness first.",
      ranksUp: true,                       // R1 Field Recorder → R2 Thread Walker
      // NO `teaches` BY DESIGN — L3 introduces no new mechanic (English, no foreign-script;
      //   TAA Comms + location bar/unlock already taught in L0/L1). Intentional field-parity gap vs L2.
      taaCommsHints: {
        low:  "Nova here. This one's heavy, and I won't pretend otherwise. The people will tell you it's a judgment, and you'll feel the pull to leave it there. Don't. Read the field itself as closely as you read the man. Turn a leaf over and look at the underside.",
        mid:  "You've named the killer. Now ask the harder question: why does a sickness of one plant become the hunger of a whole people? Go to the cottage and see what they have to fall back on when the potato's gone. Then see how far this has already traveled.",
        full: "You've got it all. Anchor back at the cottage to stabilize. A living water-mold is destroying the crop, the whole country leans on a single, identical potato with nothing beneath it, and food is still leaving for the ports while people starve. We can't stop any of it. We can make sure it's remembered true. That has to be enough.",
      },
      diagnoses: [
        { label: "A living organism — a water-mould, later named Phytophthora infestans — is killing the potato, spreading on wind and rain from one identical Lumper to the next. Because the whole country leans on that single clonal crop with nothing beneath it, one plant disease becomes a famine — while grain and cattle that could feed the people are shipped out for the rents.", isCorrect: true, hint: "" },
        { label: "It is a judgment on the land — or, in plainer terms, the soil has finally failed after too many years of the same crop worked too hard.", isCorrect: false, hint: "The soil reads sound — good dirt, no exhaustion, no poison. What you found killing the crop was the white growth on the underside of the leaves: a living thing, spreading field to field on wind and rain. The ground didn't fail. Something is eating the plant alive." },
        { label: "It is simply the cold, wet season rotting the crop in the wet ground — bad weather, nothing more.", isCorrect: false, hint: "The wet matters — but only because it carries the organism. Weather alone doesn't fruit white spores that leap from parish to parish across a whole island in a single season, and it doesn't explain why every identical Lumper falls together while the soil stays healthy. The damp is the messenger, not the killer." },
      ],
      explanation: {
        title: "Record Stabilized",
        body: "You witnessed the Great Famine at its beginning, and you fixed its true cause in the record. The killer was Phytophthora infestans — a water-mold, an oomycete, not a true fungus though it wears the look of one. Spreading on cool, wet wind and rain, leaping field to field faster than anyone could flee it. \n\nWhat turned a crop disease into a catastrophe was uniformity and dependence: nearly the whole of poor Ireland lived on one potato, the Lumper, grown from cuttings of cuttings until every field was the same plant repeated — and a blight that fit one fit them all. With nothing else grown to fall back on, the failure of that single crop was the failure of the only food the people had. And all the while, grain, butter, and cattle left Irish ports under guard. The land was not empty of food. Its food simply belonged to someone else. The archivist cannot stop a famine. But the correct biological cause, set down clearly, is the seed of plant pathology. The science that would one day let humanity see a disease coming before it starves a people.",
        funFact: "It took years for the true cause to win out. At the time, many insisted the blight rose from the wet ground itself, or was punishment, or simple decay. The idea that an invisible living organism could cause disease was still radical. The clergyman-botanist Miles Berkeley argued correctly in 1846 that the mold itself was the cause of the rot, not merely a result of it — a radical idea he was largely disbelieved for, until Anton de Bary's work around 1861 proved him right — and showed the culprit was no ordinary fungus at all. Phytophthora infestans means, almost exactly, 'the plant-destroyer that attacks' — and the famine it triggered killed roughly a million people and drove a million more to emigrate, reshaping Ireland and the nations they sailed to. The same lineage of blight still hunts potatoes today.",
      },
      locations: [
        // ── The Potato Field (open start; primary investigation) ──
        {
          id: 'potato_field',
          label: 'The Potato Field',
          requires: null,
          scene: 'scene/scene_potato_field.jpg',
          // Ambient FX (author-tuned in demos/locationfx/lvl3.html): slow grey cloud
          //   drift across the upper sky band (bible §289).
          locationFx: {
            clouds: { bandTop: 2, bandBottom: 18, color: '#5e5e5e', count: 14, speed: 15.0, opacity: 0.35, size: 90 },
          },
          sources: {
            // NPC — the farmer, standing over his blackened rows. Stressed; reaches for a curse.
            farmer: {
              type: 'conversation', speaker: 'The Farmer', personality: 'stressed', startMood: 0,
              clueTag: 'sudden_collapse', icon: '🧑‍🌾', label: 'The Farmer', actionLabel: 'Approach',
              learned: "The crop stood green and sound a week ago; he woke to a stench and a field gone black overnight. He calls it a judgment because the speed of it frightens him past any other answer.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/irish_farmer/spritesheet.png', spritesheetJson: 'npc/irish_farmer/spritesheet.json' },
              nodes: {
                start: {
                  text: "A lean man stands over rows that should be green and aren't, the smell of them carrying on the cold air. He doesn't look up at once. When he does, there's no anger in it, only a kind of stunned silent gaze, a man counting something that won't add. This was his year's food in the ground, he says. All of it.",
                  buttonLabel: 'Approach',
                  options: [
                    { label: "Ask him how fast it took the field.", goto: 'speed' },
                    { label: "Ask him what he thinks brought it on.", goto: 'blame' },
                  ],
                },
                speed: {
                  text: "Days. \n\nHe'd walked the rows the past Sunday and they stood as fair a crop as he'd raised broad and green, the flowers gone over, the tubers growing underground. By Wednesday the leaves were spotted. And by the weekend the whole field lay down black, and the smell of it came up like something dead. He's never seen a thing move so fast in his life.",
                  options: [
                    { label: "Ask him what he thinks brought it on.", goto: 'blame' },
                    { label: "Tell him you mean to find the true cause of it.", goto: 'recap' },
                  ],
                },
                blame: {
                  text: "A judgment, it must be. Some blame the close wet summer, some the smoke off the new railway engines, some the old people's curses.",
                  moodShift: -1,
                  options: [
                    { label: "It came too fast and too wide to be one man's sin.", goto: 'recap' },
                    { label: "Ask him how quickly it actually struck.", goto: 'speed' },
                  ],
                },
                // Reveal — consolidates: fast, foul, and everywhere at once.
                recap: {
                  text: "He listens, and something in him eases, just the relief of being taken seriously. It took the lazy man's field and his own the same week, and his brother's twenty miles off by the last word that reached him. It came from somewhere. It went somewhere. It is still going.",
                  revealsClue: 'sudden_collapse',
                  options: [
                    { label: "Thank him, and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "The farmer is on his knees in the ruined rows, turning over the soft black tubers one by one, hunting for any that are still sound enough to keep for seed. He finds few. He nods to you without stopping.",
                  options: [
                    { label: "Leave him to it and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — the blight itself: a living, spreading organism.
            blight: {
              type: 'examination', speaker: 'The Blight', personality: 'stoic',
              clueTag: 'blight_agent', icon: '🍃', label: 'Examine the Blight',
              sprites: { iconImg: 'UI/portrait_blight_sample.png' },
              learned: "On the cool underside of the dying leaves grows a fine white down, fruiting along the lesion edges. A living organism throwing spores to the wind and rain, eating the plant alive. This is no mere rot.",
              nodes: {
                start: {
                  text: "You lift a collapsed stalk. The leaves are marked with dark, water-soaked blotches, each ringed by a paler bruise where the green is dying back. Topside it could pass for frost-kill or simple rot.",
                  options: [
                    { label: "Turn a leaf over and look at the underside.", goto: 'underside' },
                    { label: "Read the lesion with the device.", goto: 'device' },
                  ],
                },
                underside: {
                  text: "On the underside, where the damp sits and the sun never reaches, the lesions are fringed with a fine white down — soft threads, almost a bloom of mould, growing thickest right at the edge of the living tissue, reaching into the green that's left. It is not decay sitting on dead matter. It is something alive, advancing.",
                  options: [
                    { label: "Read the white growth with the device.", goto: 'device' },
                  ],
                },
                device: {
                  type: 'terminal',     // device confirmation; start/underside are physical prose
                  text: "> TAA BIO-SCAN — leaf lesion\n  white fringe: fruiting body of a living organism\n  threads: sunk through leaf and stem, drinking from inside\n  spores: present — too small to see, wind- and wet-borne\n\n  No rot of cold or curse. A living thing is eating the plant from the inside and sowing itself on every breath of wet wind — to the next plant, and the next.",
                  revealsClue: 'blight_agent',
                  options: [
                    { label: "Seal a sample of the leaf and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — the field is one plant repeated: genetic uniformity.
            survey_field: {
              type: 'examination', speaker: 'The Field', personality: 'stoic',
              clueTag: 'monoculture', icon: '🥔', label: 'Survey the Field',
              sprites: { iconImg: 'UI/icon_survey_land.png' },
              learned: "Every plant in the field is the one variety: the Lumper, grown from cuttings of cuttings until each is the twin of the last. Where the blight strikes one it strikes all. There's no plant set apart to resist it.",
              nodes: {
                start: {
                  text: "You walk the rows end to end. Every plant is the same plant. The same broad leaf, the same habit, the same Lumper the poor have lived on for two generations, raised not from seed but from cuttings of cuttings until a whole county grows a single line copied over and over. A mono-culture.",
                  options: [
                    { label: "Look for any plant standing apart — one that's resisting.", goto: 'resist' },
                  ],
                },
                resist: {
                  text: "There isn't one. Not a stalk in the field stands clear of it. No hardier strain holding the corner, no odd variety the rot passed over. Where one is struck all are struck, in the same week, in the same way, because they are not many plants at all but one plant repeated ten thousand times. A blight shaped to kill one of them is shaped to kill every one of them.",
                  revealsClue: 'monoculture',
                  options: [
                    { label: "Mark the field's sameness and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the soil is healthy; rules out exhaustion / curse-of-the-land.
            sample_soil: {
              type: 'examination', speaker: 'The Soil', personality: 'stoic', insight: true,
              clueTag: 'soil_clear', icon: '🪏', label: 'Sample the Soil',
              sprites: { iconImg: 'UI/portrait_soil_sample.png' },
              learned: "The ground itself is sound: good dirt, no exhaustion, no poison, no salt. Whatever has killed the crop is not in the soil; it rode in on the air and the rain and settled on the plant.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA SOIL PROBE — ruined rows\n  tilth: good\n  salt: none\n  poison: none\n  exhaustion: none\n\n  The ground is sound — it could carry a crop tomorrow. Whatever killed this crop did not rise out of the field; it came down onto the plant from the air and the rain. The soil is only where the dead are falling.",
                  revealsClue: 'soil_clear',
                  bonusInsight: true,
                  options: [
                    { label: "Note the healthy ground and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── The Cottage Interior (ANCHOR; unlocks on `blight_agent`) ──
        {
          id: 'cottage_interior',
          label: 'The Cottage Interior',
          requires: { clueFound: 'blight_agent' },
          anchorPoint: true,                      // Stabilize the Record resolves here
          lockHint: "You've no cause to go knocking yet — read the field first.",
          scene: 'scene/scene_cottage_interior.jpg',
          // Ambient FX (author-tuned in demos/locationfx/lvl3.html): a faint, slow
          //   flicker of warm hearth/window light (bible §289/§359 left this optional —
          //   author chose to keep a touch of life rather than dead-still).
          locationFx: {
            lamp: { x: 23, y: 72, size: 14, color: '#f65c4f', intensity: 0.36, flicker: 0.42, flickerSpeed: 1.7 },
          },
          sources: {
            // NPC — the woman at the hearth. Patient, conserving herself; the human cost.
            woman: {
              type: 'conversation', speaker: 'The Woman', personality: 'patient', startMood: 0,
              clueTag: 'sole_food', icon: '🧕', label: 'The Woman', actionLabel: 'Speak with her',
              learned: "The family lives on the potato and almost nothing else. An acre of Lumpers feeding the lot of them. The grain goes for rent, the pig is sold off. The potato was the one food that was theirs. With it gone there is nothing else left.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/cottage_family/spritesheet.png', spritesheetJson: 'npc/cottage_family/spritesheet.json' },
              nodes: {
                start: {
                  text: "A woman sits by a hearth. She's not old but the work has made her thin, and there's a stillness to her that isn't peace. It's the calm of someone holding very steady because there's nothing to be gained by anything else. She bids you welcome with the courtesy of a house that has always shared what it had.",
                  buttonLabel: 'Speak with her',
                  options: [
                    { label: "Ask what the family lives on.", goto: 'diet' },
                    { label: "Ask if there's anything else to fall back on.", goto: 'fallback' },
                  ],
                },
                diet: {
                  text: "The potato. Boiled in the morning, boiled at noon, boiled at night. A grown man will eat his fourteen pounds of them in a day and be glad. An acre of lumpers, dug and pitted, fed the whole house from one harvest to the next. It is the cheapest belly-filling thing that grows, and it grew well here, and so it became nearly the only thing we ate.",
                  options: [
                    { label: "Ask if there's anything else to fall back on.", goto: 'fallback' },
                    { label: "Ask, gently, what they'll do now.", goto: 'now' },
                  ],
                },
                fallback: {
                  text: "The oats go to the agent for the rent, every year, sold whether the belly's full or not, or the family's put out on the road. The pig's already gone the same way. The milk, when there's a cow. The potato was the one thing we grew to eat, the one food that was ours and not promised to another.",
                  options: [
                    { label: "Ask, gently, what they'll do now.", goto: 'now' },
                  ],
                },
                // Reveal — one crop and nothing beneath it.
                now: {
                  text: "Wait, and pray, and see what the spring brings. And if it brings nothing, take to the road like the others, west to a port and a ship if there's the fare, or to the workhouse if there isn't. There's no second crop to dig, no store but the one that's rotted. When the potato fails there is nothing under it. That is the whole of it.",
                  revealsClue: 'sole_food',
                  options: [
                    { label: "Thank her, and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "The woman sits as before, the child against her, the fire kept low. She's mending something by the last of the light — keeping her hands busy, keeping the house in order against a winter she has no stores to meet. She looks up and gives you a small, steady nod.",
                  options: [
                    { label: "Leave her in peace and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the ledgers: food leaving for the ports. Political economy.
            records: {
              type: 'examination', speaker: 'The Records', personality: 'stoic', insight: true,
              clueTag: 'exports_continue', icon: '📜', label: 'Read the Records',
              sprites: { iconImg: 'UI/portrait_parish_records.png' },
              learned: "The estate ledger and the parish book tell two halves of one truth: the potato has failed and the first hunger is setting in — while the same season's grain, butter, and cattle are logged leaving for the ports, sold against the rents. The land is not empty of food. Its food belongs to someone else.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — estate ledger + parish register\n  one side — the potato gone across the townland:\n          rents in arrears · the first hunger setting in\n  other side — the harvest that DID come in: \n          oats · barley · butter · live cattle \n          — all logged, all valued, all consigned to the ports",
                  revealsClue: 'exports_continue',
                  bonusInsight: true,
                  options: [
                    { label: "Close the ledgers and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── The Road (unlocks on `sole_food`) ──
        {
          id: 'the_road',
          label: 'The Road',
          requires: { clueFound: 'sole_food' },
          lockHint: "Stay with the family a while yet — the road will keep.",
          scene: 'scene/scene_the_road.jpg',
          // Ambient FX (author-tuned in demos/locationfx/lvl3.html): cloud drift only,
          //   matched to the Potato Field for continuity (bible §372). Surface dust cut
          //   by author.
          locationFx: {
            clouds: { bandTop: 3, bandBottom: 43, color: '#424242', count: 14, speed: 14.5, opacity: 0.35, size: 90 },
          },
          sources: {
            // NPC — the traveler, walking out. Stoic; the blight is everywhere.
            traveler: {
              type: 'conversation', speaker: 'The Traveler', personality: 'stoic', startMood: 0,
              clueTag: 'spreading', icon: '🚶', label: 'The Traveler', actionLabel: 'Hail them',
              learned: "The same rot stands in every field from here to the coast — the next parish, the next county, the far side of the island, all in the one season. It didn't begin here and it won't end here. It travels field to field, faster than the people fleeing it.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/road_traveler/spritesheet.png', spritesheetJson: 'npc/road_traveler/spritesheet.json' },
              nodes: {
                start: {
                  text: "A figure comes along the road with a bundle slung at the shoulder and a child's hand held in the other. They slow when you fall in beside them, but don't stop for long. Their eyes are fixed somewhere down the road, not on you.",
                  buttonLabel: 'Hail them',
                  options: [
                    { label: "Ask how far the blight has reached.", goto: 'reach' },
                    { label: "Ask where they're bound.", goto: 'going' },
                  ],
                },
                reach: {
                  text: "Everywhere. We've walked four days and not passed a sound field in any of them. The same black ruin in every parish, the same smell over every wall, the whole country struck in the one season as if a hand had passed across it. It didn't start in our townland. It started nowhere and everywhere. And it isn't finished.",
                  options: [
                    { label: "Ask where they're bound.", goto: 'going' },
                    { label: "Say you mean to write down what's truly happening.", goto: 'record' },
                  ],
                },
                going: {
                  text: "West where the ships go out. There's no living to be had standing still over a black field, and the rent's owed all the same. Some to the towns, some to the workhouse, some to the boats. The road's full of them now. With more every day, all moving the same way: away.",
                  options: [
                    { label: "Ask how far the blight has reached.", goto: 'reach' },
                    { label: "Say you mean to write down what's truly happening.", goto: 'record' },
                  ],
                },
                // Reveal — contagion at national scale, travelling field to field.
                record: {
                  text: "The traveler looks at you properly for the first time, and there's no hope in it, just a tired wish to be understood. \n\nThen set it down right. Not a curse, not the idle getting their due. The same sickness in every field across the whole island, all at once, moving quicker than any of us can walk from it. Whatever it is, it travels. Mind you write that it travels.",
                  revealsClue: 'spreading',
                  options: [
                    { label: "Give your word, and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "The traveler has stopped to rest at the verge, the child asleep against the bundle. They've not come far, and there's a long way still in front of them. They lift a hand to you, and turn their face back to the road west.",
                  options: [
                    { label: "Let them rest and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — TAA regional scan: names the organism (oomycete, water-mould).
            survey_region: {
              type: 'examination', speaker: 'TAA Survey', personality: 'stoic', insight: true,
              clueTag: 'oomycete', icon: '🛰️', label: 'Survey the Region',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "The regional scan maps the spread onto the weather: the organism rides cool, wet wind, fruiting in damp and stalling in drought, leaping farm to farm on rain and breeze. The device names it — a water-mold, an oomycete, not a true fungus though it mimics one, and only beginning to be understood.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA REGIONAL SCAN — spread vs. weather\n  pattern: NOT random — tracks the weather\n  blooms: cool, wet air   stalls: dry wind\n  vector: farm to farm, valley to valley, on rain and breeze\n  nature: a water-mold — an OOMYCETE, not a true fungus though it wears the shape of one\n\n  This century has no word for it yet. In yours it will be named Phytophthora infestans — and the naming will begin an entire science.",
                  revealsClue: 'oomycete',
                  bonusInsight: true,
                  options: [
                    { label: "Log the spread pattern and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the leavings of flight: the human scale, physical observation.
            examine_evidence: {
              type: 'examination', speaker: 'The Roadside', personality: 'stoic', insight: true,
              clueTag: 'displacement', icon: '👞', label: 'Examine the Evidence',
              sprites: { iconImg: 'UI/portrait_road_leavings.png' },
              learned: "The verge is strewn with the leavings of flight — a dropped pot, a child's shoe, the cold ash of roadside fires, cart-ruts worn deep by traffic all going one way. A whole people is moving with what it can carry and leaving the rest, and the road itself is becoming the record.",
              nodes: {
                start: {
                  text: "You read the roadside the way you read the field. A cooking pot dropped and not gone back for, a single small shoe trodden into the mud, the cold grey ash of a dozen fires where families slept rough, the verge cut to ribbons by cart-wheels and bare feet all traveling the one direction. Things carried until they couldn't be, then set down. No one is coming back for them. The road itself is filling up with the record of a people in flight.",
                  revealsClue: 'displacement',
                  bonusInsight: true,
                  options: [
                    { label: "Note what the road remembers and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
    },

    // ── LEVEL 4 — Karlsruhe, Germany, 1909 · "Nitrogen from Air" ──
    // Fritz Haber's synthesis of ammonia from atmospheric nitrogen. Two locations
    // (bible §299–300): Reactor Chamber (OPEN, ANCHOR — Stabilize resolves here) +
    // Haber's Office (locked until the apparatus is read). Reactor-first flow: arrive at
    // the flickering bench → read the physics → unlock the office for the human/conceptual
    // clues → RETURN to the reactor to stabilize. 5 REQUIRED + 1 INSIGHT, buttons 3/3.
    // TAA Comms = ZEL'KETH, not Nova (bible §296/§308 — Zhel'ii lens; `commsSpeaker:'zelketh'`).
    // ranksUp:true → R2 Thread Walker → R3 Historical Witness. English (no foreign-script).
    // NO `teaches` BY DESIGN — introduces no new player-facing mechanic (the gauge is ambient
    //   FX, not interactive; TAA Comms + location bar already taught L0/L1). Intentional gap vs L2.
    {
      id: 'L4',
      name: 'Karlsruhe',
      tagline: 'Nitrogen from Air',
      location: "Fritz Haber's laboratory",
      date: '1909',
      briefing: "The thread runs forward to a university laboratory in Karlsruhe in the spring of 1909. For the whole of human history the great limit on growing food has been nitrogen. Every plant must have it, the very air is 78% of it, and yet almost nothing alive can pull it out of the sky into a form a root can drink. Here a chemist named Fritz Haber stands a hair's breadth from breaking that limit: coaxing the nitrogen of the air into ammonia, the raw stuff of all fertilizer, inside a small steel tube on his bench. \n\nBut the experiment keeps failing, he cannot see why, and the record of the moment is flickering. The discovery is at risk of slipping a generation, or being lost entirely. Witness what is truly holding the reaction back, find the evidence that proves it, and stabilize the moment before it dims. Half the people who will ever live are waiting on what happens at this bench.",
      palette: {
        bgDeep:  '#0d0b08',
        bgMid:   '#171310',
        bgPanel: '#211a12',
      },
      sprites: { scene: 'scene/scene_reactor_chamber.jpg' },   // level-wide bg loadScene reads (caseData.sprites.scene)
      commsSpeaker: 'zelketh',             // TAA Comms voiced by Zel'keth this level (bible §296/§308), not Nova
      resolveLabel: 'Stabilize the Record',
      resolveNag: "The record isn't whole yet — there's more to settle at the bench first.",
      ranksUp: true,                       // R2 Thread Walker → R3 Historical Witness
      taaCommsHints: {
        low:  "Zel'keth, on the link. This thread I have waited to walk beside you, Archivist. It touches something my people hold close. Every living thing on this world is built around nitrogen, and almost none of it can take that nitrogen from the very air it floats in. A whole world starving in the middle of plenty, for want of a single molecule. Begin at the vessel itself, not at the man. And do not assume the machine is broken only because it will not do what he wishes.",
        mid:  "You see it now: the reaction is not failing, it is balancing. It runs forward and backward at once and rests where the two rates meet, with little to show for itself. On my world we would say it has found its level and grown content. The man cannot make it discontent by shouting heat at it. Heat only deepens its contentment with the wrong answer. Go to him in his office. Ask him not what he has tried, but what he has refused to try.",
        full: "You have all of it, Archivist. Anchor back at the reactor and stabilize there. This record lives at the bench, not in the man's notes. Hold the shape of it clearly: a reversible reaction that sheds heat as it works, that pressure pulls toward ammonia, that a catalyst coaxes into running without ruinous fire, that yields only a little each pass and so must be circled again and again. A small, patient trick. From it this species will feed half of all the people it will ever make. We Zhel'ii find that beautiful — that so much life should turn on a thing so quiet as air made edible.",
      },
      diagnoses: [
        { label: "The reaction is reversible and sheds heat as it works, so it settles at a balance with only a trace of ammonia — and forcing it hotter, the obvious move, only drives it further back. The answer is the opposite of brute force: hold the gases under great pressure, which favours the ammonia; use a catalyst so the reaction will run at a merely-warm temperature instead of a ruinous one; and recycle the unreacted gas around and around, skimming the small yield off each pass, until a trickle becomes a flood.", isCorrect: true, hint: "" },
        { label: "The apparatus is at fault — there is a leak in the high-pressure vessel, and the ammonia is escaping before it can ever be collected. Seal the steel and the yield will come.", isCorrect: false, hint: "You read the vessel yourself: the seals hold, the pressure sits steady, nothing fogs a film held to the joints. No ammonia is escaping through a fault in the steel. The trouble is the chemistry inside the tube, not the tube — the reaction reaches a balance and stops itself there, exactly as a reversible reaction must. No gasket changes that." },
        { label: "He is simply not pushing hard enough — drive the temperature far higher and the reaction will be forced to completion, the way heat hurries any sluggish process along.", isCorrect: false, hint: "This is the very trap. The reaction gives off heat as it makes ammonia, so by its own nature more heat tears that ammonia back apart — past a point, the hotter he pushes, the less he gets. Haber's whole leap was to stop pushing heat and start adding pressure and a catalyst instead." },
      ],
      explanation: {
        title: "Record Stabilized",
        body: "The trouble was the chemistry itself. Nitrogen and hydrogen combine into ammonia in a reaction that runs both ways and gives off heat, so left to itself it settles at a balance point with almost no ammonia to show. Adding heat only shoves that balance backward. Haber's breakthrough was to refuse the obvious on every count: squeeze the gases under enormous pressure, which favors the fewer, smaller molecules of ammonia. Using a catalyst so the reaction proceeds quickly at a moderate temperature rather than a self-defeating one. And accept that each pass yields only a little, then recycle the leftover gas without end until the little adds up. \n\nCarl Bosch would soon build that bench into a factory, and the factory would remake the world: roughly half the nitrogen atoms in the average person alive in the Archivist's own century were drawn out of the open air by this exact reaction. The crops that feed billions are, in a plain and literal sense, grown partly from the sky.",
        funFact: "Before Haber, the world's usable nitrogen came only from lightning, from soil bacteria, and from mined deposits like Chilean saltpeter that were already feared to be running out. And serious people warned that mass starvation would follow once they were gone. Working from the bench in Karlsruhe, Haber received the Nobel Prize in Chemistry in 1918 for pulling nitrogen out of the open air. Carl Bosch, who scaled it to industry, would win his own Nobel later. The process is sometimes called the most important invention of the twentieth century. And it may be the one that the fewest people have ever heard of.",
      },
      locations: [
        // ── The Reactor Chamber (OPEN start; ANCHOR — Stabilize resolves here) ──
        {
          id: 'reactor_chamber',
          label: 'The Reactor Chamber',
          requires: null,
          anchorPoint: true,                  // Stabilize the Record resolves here; wrong-location msg in the office
          scene: 'scene/scene_reactor_chamber.jpg',
          // Ambient FX (author-tuned 2026-06-27 in demos/locationfx/lvl4.html, bible §310):
          //   vessel glow pulse (lamp), steam drift off the vessel top (smoke), and the
          //   gauge needle twitch (1–2px micro-motion, plan §569–570).
          locationFx: {
            lamp:  { x: 50, y: 70, size: 21, color: '#ff9f5a', intensity: 0.38, flicker: 0.54, flickerSpeed: 1.60 },
            smoke: { x: 49, y: 30, width: 6, color: '#d2dae2', count: 30, rise: 30, drift: 2.5, size: 3.5, growth: 3.3, opacity: 0.17 },
            gauge: { x: 65.5, y: 38.5, length: 10, baseAngle: -29, twitchDeg: 11.0, period: 2.6, color: '#212121', width: 2.5 },
          },
          sources: {
            // Examination (REQUIRED) — the apparatus is sound; the reaction is at equilibrium, not failing.
            //   Reveals `equilibrium_stall` → also UNLOCKS Haber's Office.
            examine_apparatus: {
              type: 'examination', speaker: 'The Apparatus', personality: 'stoic',
              clueTag: 'equilibrium_stall', icon: '⚗️', label: 'Examine the Apparatus',
              sprites: { iconImg: 'UI/portrait_reactor_apparatus.png' },
              learned: "The apparatus is sound — the high-pressure vessel holds, the seals are tight, nothing is leaking. The gas leaving it is almost all unreacted nitrogen and hydrogen with only a thread of ammonia: the reaction runs forward and back at once and settles at a balance, stopping itself long before the gases are spent. It is not broken. It is balancing.",
              nodes: {
                start: {
                  text: "On the bench stands the thing the whole century turns on, and it is unremarkable to look at: a stout steel tube no longer than a forearm, wrapped in heating coils, fed by two thin gas lines and watched over by a pressure gauge that trembles a little under load. Nitrogen and hydrogen go in. Something is meant to come out — and almost nothing does. The man at the chalkboard keeps calling it a failure.",
                  options: [
                    { label: "Check the vessel and its seals for leaks.", goto: 'vessel' },
                    { label: "Read the gas leaving the tube with the device.", goto: 'device' },
                  ],
                },
                vessel: {
                  text: "You work along the apparatus joint by joint. The seals hold. The gauge sits steady under its load and does not bleed off; press a film to the fittings and nothing fogs it. Whatever is going wrong, no ammonia is escaping through a fault in the steel. The vessel is doing exactly what it was built to do. The trouble is not the machine. It is something happening inside it.",
                  options: [
                    { label: "Read the gas leaving the tube with the device.", goto: 'device' },
                  ],
                },
                device: {
                  type: 'terminal',     // device readout inside an otherwise-prose source (start/vessel are physical prose)
                  text: "> TAA GAS ANALYSIS — vessel outflow\n  N₂ ......... high\n  H₂ ......... high\n  NH₃ ........ trace\n  seals: tight  \n  pressure: steady  \n  leak: none\n\n  The vessel is sound; this reading is the reaction's true measure, not a fault in the steel. Almost everything fed in comes straight back out unchanged. The reaction is not refusing to happen — it happens, then un-happens: ammonia forms and breaks apart at the same breath, the two rates meet and hold. The tube has reached a balance and stopped itself. It has not failed. It has come to rest.",
                  revealsClue: 'equilibrium_stall',
                  options: [
                    { label: "Mark the balance point and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — pressure favours ammonia (4 molecules → 2). Ties to the gauge FX.
            measure_readings: {
              type: 'examination', speaker: 'TAA Readings', personality: 'stoic',
              clueTag: 'pressure_yield', icon: '🧭', label: 'Measure the Readings',
              sprites: { iconImg: 'UI/portrait_taa_scan.png' },
              learned: "The pressure tells the story the bench can't reach. Ammonia takes up far less room than the nitrogen and hydrogen it's made from — two molecules where there were four — so squeezing the gases harder tips the balance toward ammonia to make room. At the gentle pressures here the yield is a trace. Mdeled up to the great pressures the reaction wants, the ammonia fraction climbs steeply. Pressure is on the discovery's side.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA INSTRUMENT LINK — gauge + thermometer\n  status: online\n  pressure: low      \n  NH₃ yield: trace\n\n  Awaiting query.",
                  options: [
                    { label: "Model the yield as the pressure climbs.", goto: 'climb' },
                    { label: "Query: why should pressure matter at all?", goto: 'why' },
                  ],
                },
                why: {
                  type: 'terminal',
                  text: "> QUERY — pressure ↔ yield\n  N₂ + 3H₂  →  2NH₃\n  reactants: 4 parts gas\n  product:   2 parts gas\n\n  The product takes less room than the gases that make it. Squeeze the mixture harder and the balance eases the only way it can — by making more of the smaller thing. Pressure does not force the reaction so much as coax it toward ammonia.",
                  options: [
                    { label: "Model the yield as the pressure climbs.", goto: 'climb' },
                  ],
                },
                climb: {
                  type: 'terminal',
                  text: "> MODEL — ammonia yield vs. pressure\n  bench pressure ....... trace   ▁\n  driven far higher .... rising  ▁▂▃▅▇\n\n  At a gentle squeeze the balance allows almost nothing, no matter how long the gas sits. Forced many times higher — into the range that wants thick-walled steel and real danger — the allowed fraction climbs and climbs. This reaction will not give up its ammonia until it is pressed, and pressed hard.",
                  revealsClue: 'pressure_yield',
                  options: [
                    { label: "Log the pressure curve and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — exothermic: heat buys speed by burning yield. The catalyst is the way out.
            run_analysis: {
              type: 'examination', speaker: 'TAA Analysis', personality: 'stoic',
              clueTag: 'heat_paradox', icon: '🌡️', label: 'Run the Analysis',
              sprites: { iconImg: 'UI/portrait_reaction_analysis.png' },
              learned: "The reaction gives off heat as it makes ammonia. So by its own nature, adding heat tears the ammonia back apart. Cold favors a rich yield but the reaction moves too slowly to be of any use. Hot runs fast but leaves almost nothing. \n\nThe obvious cure: more heat — is the exact trap, and it is the trap the man keeps walking back into. The way through is not more heat: it is a way to make the reaction run quickly while staying cool enough to keep what it makes.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA THERMAL MODEL — reaction energetics\n  status: online\n  note: this reaction sheds heat as it forms ammonia\n  curves loaded: yield vs. temperature · speed vs. temperature\n\n  Select a region to model.",
                  options: [
                    { label: "Follow the cold end of the curve.", goto: 'cold' },
                    { label: "Follow the hot end of the curve.", goto: 'hot' },
                  ],
                },
                cold: {
                  type: 'terminal',
                  text: "> MODEL — cold region\n  equilibrium yield .... high\n  reaction speed ....... ▁  (near zero)\n\n  Kept cool, the balance would allow a fine, rich share of ammonia — but the reaction creeps so slowly it might take years to gather a cupful. The yield is real and wholly out of reach. Patience alone will not open this.",
                  options: [
                    { label: "Then follow the hot end of the curve.", goto: 'hot' },
                  ],
                },
                hot: {
                  type: 'terminal',
                  text: "> MODEL — hot region\n  reaction speed ....... ▇  (fast)\n  equilibrium yield .... ▂  (collapsing)\n\n  ⚠ reaction is exothermic ⚠\n\n  Added heat speeds the reaction — and tears the ammonia apart as fast as it forms. The hotter it is driven, the less it keeps. Speed and yield pull against each other; brute heat buys the one only by burning the other. Resolution requires speed without heat.",
                  revealsClue: 'heat_paradox',
                  options: [
                    { label: "Mark the paradox and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },

        // ── Haber's Office (locked until `equilibrium_stall` — read the apparatus first) ──
        {
          id: 'habers_office',
          label: "Haber's Office",
          requires: { clueFound: 'equilibrium_stall' },
          lockHint: "There's nothing to ask the man yet — read his apparatus first, and learn what's actually wrong.",
          scene: 'scene/scene_habers_office.jpg',
          // Ambient FX (author-tuned 2026-06-27 in demos/locationfx/lvl4.html, bible §310):
          //   slow morning-light shift on the window region (reuses the lamp glow, very gentle).
          locationFx: {
            lamp: { x: 39, y: 36, size: 28, color: '#ffe0a0', intensity: 0.71, flicker: 0.65, flickerSpeed: 0.25 },
          },
          sources: {
            // NPC (REQUIRED) — Fritz Haber, curious/excited. The catalyst is his way past the heat trap.
            haber: {
              type: 'conversation', speaker: 'Fritz Haber', personality: 'curious', startMood: 0,
              clueTag: 'catalyst_rate', icon: '🧑‍🔬', label: 'Fritz Haber', actionLabel: 'Speak with Haber',
              learned: "Haber is caught between cold yield and hot speed, and has been trying to break the bind not with heat but with a catalyst: a substance that hurries the reaction along without being consumed. Letting it run quickly at a merely-warm temperature instead of a ruinous one. The right catalyst is the hinge the whole thing turns on.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/fritz_haber/spritesheet.png', spritesheetJson: 'npc/fritz_haber/spritesheet.json' },
              nodes: {
                start: {
                  text: "A man in his forties stands at a chalkboard thick with equations, chalk in one hand, wiping at a number with the heel of the other and writing it again a little different. He's quick and warm and only half in the room with you. The rest of him is still at the board, circling something. \n\nWhen he turns he doesn't ask who you are so much as whether you might be useful. He has the bright, frayed energy of a man who can feel an answer just past his fingertips and cannot quite close them on it.",
                  buttonLabel: 'Speak with Haber',
                  options: [
                    { label: "Ask what's defeating him.", goto: 'bind' },
                    { label: "Ask what he's already tried.", goto: 'tried' },
                  ],
                },
                bind: {
                  text: "Here is my devil. Cold, the nitrogen and hydrogen will make me a handsome amount of ammonia — and take a hundred years to do it. Hot, they hurry, and give me nothing: the heat unmakes the ammonia as fast as I make it. Every chemist's instinct is to add heat — mine too — and this reaction punishes it. I am caught between a yield I cannot reach and a speed I cannot use.",
                  options: [
                    { label: "Ask what he's already tried.", goto: 'tried' },
                    { label: "Ask if there's a way to hurry it without the heat.", goto: 'catalyst' },
                  ],
                },
                tried: {
                  text: "Everything. Pressures as high as the steel will bear — and higher yet, whatever the glassblowers tell me. And metals: tray after tray of them, set in the path of the gas to see which might wake the reaction up. Most do nothing — they sit there like stones. But a few…Osmium. Uranium. Put them where the gas must pass and the reaction stirs at a temperature that would otherwise be hopeless. Why those and not iron, I cannot yet tell you. But they are the thread I am pulling.",
                  options: [
                    { label: "Ask why those metals should change anything.", goto: 'catalyst' },
                    { label: "Ask what's defeating him.", goto: 'bind' },
                  ],
                },
                catalyst: {
                  text: "Because they do the work the heat was meant to do. A catalyst hurries the reaction along and walks away unchanged, asking nothing for itself. With the right one in the path of the gas, I needn't roast the mixture to make it move — I can run it warm. Warm enough to be quick, cool enough that the balance still lets me keep my ammonia. That is the whole of it, if I can only find the metal. Not more fire. A better servant.",
                  revealsClue: 'catalyst_rate',
                  options: [
                    { label: "Tell him the thread is the right one — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "Haber is back at the board when you return, murmuring to himself, laying a fresh row of metals along the margin like a man writing out names. He glances over, nods as though you'd never left, and taps the chalk twice on the word catalyst before going on.",
                  options: [
                    { label: "Leave him to his work and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — the notebooks: every pass yields little; the answer is to recycle endlessly.
            review_notebooks: {
              type: 'examination', speaker: 'The Notebooks', personality: 'stoic',
              clueTag: 'recycle_yield', icon: '📓', label: 'Review the Notebooks',
              sprites: { iconImg: 'UI/portrait_lab_notebook.png' },
              learned: "The notebooks are columns of disappointment — every run yields only a few parts in a hundred, whatever the setting. But a later margin holds the turn: don't throw the unreacted gas away. Draw the ammonia off, send the leftover nitrogen and hydrogen back through the tube, and again, and again. No single pass need be rich. A small yield skimmed off an endless circle becomes, in the end, a flood.",
              nodes: {
                start: {
                  text: "The open notebooks are a record of patience bordering on stubbornness: page after page of runs, each logged in a neat hand, each ending in the same small number. A few percent. A few percent. You read down the columns and the discouragement is plain — by the measure of a chemist hunting a clean, complete reaction, this is years of failure.",
                  options: [
                    { label: "Read the columns of yields straight down.", goto: 'columns' },
                    { label: "Look for where the hand changes — a later note.", goto: 'margin' },
                  ],
                },
                columns: {
                  text: "The numbers never climb past a sliver. Even pressed hard and run warm with his best metals, the reaction gives up only a few parts of ammonia in a hundred before the balance stops it dead. If the discovery depended on making the gas convert all at once, cleanly, it would be no discovery at all. Whatever the answer is, it is not a single perfect pass. The chemistry simply will not grant one.",
                  options: [
                    { label: "Then look for where the hand changes — a later note.", goto: 'margin' },
                  ],
                },
                margin: {
                  text: "Lower on a later page the hand shifts — quicker, underlined — and the device lifts the thought clear. Do not discard the spent gas. The few percent of ammonia can be drawn off and the leftover nitrogen and hydrogen — still good, still willing — fed straight back into the tube to try again. And again. Round and round, skimming the small yield off each pass, never asking any one pass to do more than it can. A trickle, recycled without end, fills the vessel. The poverty of a single pass stops mattering the moment you stop throwing the rest away.",
                  revealsClue: 'recycle_yield',
                  options: [
                    { label: "Mark the recycling note and close the book.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the forward thread: half the world fed from the air. Educational payoff.
            query_archive: {
              type: 'examination', speaker: 'TAA Archive', personality: 'stoic', insight: true,
              clueTag: 'fertilizer_future', icon: '🗄️', label: 'Query TAA Archive',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "Within a few years Carl Bosch turns this bench into industry, and in time the trickle of ammonia becomes an ocean of fertilizer. Roughly half the nitrogen atoms in the average living human have passed through this reaction. The crops that feed billions are, in plain fact, grown partly from the open air — and almost no one who eats from them has ever heard the name of the man at the chalkboard.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — forward trace from this bench\n  querying………\n\n  Within a few years, Carl Bosch turns this tube into industry — a factory the length of a street. The few percent become millions of tons. In time the fertilizer drawn from this reaction spreads across the whole earth, and the harvests double, and double again.\n\n  KEY FIGURE: by the Archivist's own century, roughly half the nitrogen atoms in the average living human — the stuff of muscle and blood — were first pulled from the open air by this exact reaction.\n\n  Half the world at any table is fed, in the end, from the sky. And the man at the chalkboard has no idea.",
                  revealsClue: 'fertilizer_future',
                  bonusInsight: true,
                  options: [
                    { label: "Close the archive and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
    },

    // ── LEVEL 5 — Oklahoma & Washington DC, 1935 · "The Testimony" ──
    // TWO geographic locations in one level: the thread anchors to a TIME (1935), not a place,
    // so the player "travels" Oklahoma → Washington via the location bar. Anchor = the
    // Committee Room, DC (Bennett's testimony is where the record locks). 5 REQUIRED + 5 INSIGHT,
    // buttons 4/3/3 per bible §320–322. ranksUp → R3 Historical Witness → R4 Temporal Archivist.
    // TAA Comms = Nova (default; commsSpeaker omitted). English (no foreign-script).
    // New FX this level: windowHaze (Committee Room) — dust storm slowly hazing the windows.
    {
      id: 'L5',
      name: 'The Dust Bowl',
      tagline: 'The Testimony',
      location: 'Oklahoma & Washington, DC',
      date: '1935',
      briefing: "The thread runs forward to the southern plains of the United States in the spring of 1935, and to a hearing room in Washington D.C. For a decade the grasslands of Oklahoma and its neighbors were torn up and sown to wheat, fence to fence, faster than land was ever broken before. \n\nNow the rains have failed, and the bared soil is simply leaving. Lifting off the fields in black clouds that bury fences, darken noon, and carry whole farms away on the wind. The men who profited from the plow are calling it a drought, an act of God, a thing no one caused and no one can mend. That answer is about to become the record. But a soil scientist named Hugh Hammond Bennett knows better, and he is waiting in a committee room for a storm to make his case for him. Gather the evidence the fields themselves still hold, carry it east, and stabilize the moment before the lie is written down as history.",
      palette: {
        bgDeep:  '#100d08',
        bgMid:   '#1a150d',
        bgPanel: '#241c10',
      },
      sprites: { scene: 'scene/scene_dust_bowl_farm.jpg' },   // level-wide bg loadScene reads (caseData.sprites.scene)
      resolveLabel: 'Stabilize the Record',
      resolveNag: "The record won't hold yet — the testimony needs the whole of the evidence behind it. Gather what the fields are still holding.",
      ranksUp: true,                       // R3 Historical Witness → R4 Temporal Archivist
      teaches: {
        // Set the two-geography expectation up front (fires ~1.4s into the Farm). The geographic
        //   jump is also carried by the location labels, the Committee Room lockHint, and Bennett's line.
        onInvestigationStart: { target: '#location-banner', note: "This thread spans <b>two places at once</b> — the dust-blown plains of Oklahoma and a hearing room in Washington, a thousand miles east. The thread holds the <i>year</i>, not the place. As you gather evidence, new locations open in the bar above — and travelling to them carries you clear across the country, not just across the field.", delay: 1400 },
      },
      taaCommsHints: {
        low:  "This one isn't a whodunit, it's a why. Everyone can see the soil blowing away. The fight is over what set it loose. Start at the farm. Hear the man out, but read the ground he's standing on just as close. And notice what the wind did to the field that was plowed against anything that wasn't.",
        mid:  "You're getting there. You've seen the bare field. Now go where the land's cut open and read it like a book. There's a dark band of good topsoil that should run deep and instead runs thin as a knife, and dead sand below it. That thinness is the whole crime. Once you've got it, you'll need to carry it east where Bennett's testifying.",
        full: "That's all of it, Archivist. Anchor in the committee room and stabilize there. This one's sealed by testimony, not by soil. Hold the shape of it: the deep prairie grass held this fine dirt through every dry spell for ten thousand years, because its roots were a net underground. They plowed the net up for wheat; the dry years came like they always do. And with nothing left to hold it, the soil just got up and walked. The drought didn't cause this, it only pulled the trigger. And the fix was never rain. It was never farming the land naked again.",
      },
      diagnoses: [
        { label: "The Dust Bowl is not simply a drought. For ten thousand years the deep, matted roots of the native prairie grass held this fine soil in place through every dry spell the plains ever saw. In a single decade that grass was plowed up fence to fence for wheat, and when the inevitable drought came there were no roots left to anchor the bared ground — so the wind lifted the topsoil off millions of acres and carried it away. The cure is not to wait for rain but to stop farming the land bare: keep crop residue and grass cover on the soil, plow along the contours instead of straight downhill, and plant belts of trees to break the wind — the conservation program Bennett is testifying for, carried across the whole region.", isCorrect: true, hint: "" },
        { label: "This is only a drought — a natural disaster, an act of God. The rains failed and the land dried out; no human hand caused it and none can cure it but the return of the rain. There is nothing to be done but wait and endure.", isCorrect: false, hint: "You stood at the fence line yourself: the strip that was never plowed kept its grass and held its soil through the very same dry years, while the broken field beside it blew away. Same sky, same drought, two different fates — and the only difference between them was the plow. A drought that spares the unbroken ground and strips the bared ground is not the cause. It is only the trigger." },
        { label: "The soil is simply worn out — too many seasons of wheat have used up its richness. Feed it back with fertilizer and rotate the crops, and the land will recover its strength in time.", isCorrect: false, hint: "Read the gully again. The topsoil here has not been used up where it lies — it is physically gone, lifted off the ground and carried away on the wind, leaving a dark band thinner than a finger over dead pale sand. You cannot fertilize soil that is no longer there. The trouble isn't tired dirt; it's that the dirt itself is leaving, and nothing is left to hold the rest." },
      ],
      explanation: {
        title: "Record Stabilized",
        body: "You carried the plains into the committee room, and the record held. The catastrophe was never simply the weather. For millennia the shortgrass prairie had survived drought after drought because its dense, deep root systems bound the fine soil into a living mat the wind could not lift. In the wheat boom of the 1920s that sod was plowed under across millions of acres, faster than land had ever been broken, and the bared ground was left exposed. When the long drought of the 1930s arrived — as drought always eventually does on the plains — there was nothing left to hold the soil, and it rose into the air in storms that buried farms, turned midday to dark, and carried plains dirt as far east as the cities of the Atlantic coast. \n\nThe answer was not to pray for rain but to keep the land covered: leaving crop residue on the surface, plowing along the contours of the land rather than straight up and down it, and planting shelter-belts of trees to slow the wind. Hugh Hammond Bennett had argued this for years against men who insisted the soil could be mined like coal. He timed his testimony to a dust storm rolling toward Washington, and when the daylight went brown in the hearing-room windows he could simply turn and point at it. Congress passed the Soil Conservation Act that same year, and the service it created carried these practices across the country — the foundation of the sustainable farming the Archivist's own age takes for granted.",
        funFact: "On the 14th of April 1935 — 'Black Sunday' — a single afternoon's dust storm stripped an estimated 300 million tons of topsoil off the southern plains. In those same drought years, as Bennett pressed the case for conservation before Congress, dust blown east off the plains famously drifted over Washington itself and dimmed the daylight in the capital — and the story goes that he could simply point out the window and let the storm finish his argument. The Soil Conservation Act became law that same spring. Bennett — later called the father of soil conservation — went on to run the agency that helped plant some 200 million trees in shelterbelts across the plains.",
      },
      locations: [
        // ── The Farm, Oklahoma (OPEN start; the lived reality + the control case) ──
        {
          id: 'dust_bowl_farm',
          label: 'The Farm — Oklahoma',
          requires: null,
          scene: 'scene/scene_dust_bowl_farm.jpg',
          // Ambient FX (placeholder — tune in demos/locationfx/lvl5.html): low brown-tan dust drifting
          //   across the field (horizontal dust) under a thin yellow-brown sky haze (clouds). Windmill is
          //   STATIC (baked into the scene; rotation cut — author decision 2026-06-28, dust carries the scene).
          locationFx: {
            dust:   { horizontal: true, color: '#b89a6a', bandTop: 6, bandBottom: 96, count: 50, speed: 36, size: 1.5, opacity: 0.29 },
            clouds: { color: '#6e5c40', bandTop: 0, bandBottom: 46, count: 35, speed: 40, opacity: 0.32, size: 149 },
          },
          sources: {
            // NPC (REQUIRED) — the farmer, stressed. The native sod was ploughed up fence to fence for wheat.
            farmer: {
              type: 'conversation', speaker: 'The Farmer', personality: 'stressed', startMood: 0,
              clueTag: 'grass_plowed', icon: '🧑‍🌾', label: 'The Farmer', actionLabel: 'Approach',
              learned: "The farmer broke the native prairie sod and sowed it all to wheat in the boom years, fence to fence, the way everyone did. And now, with the rains gone, the bare soil is blowing away faster than any hand can hold it.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/dust_bowl_farmer/spritesheet.png', spritesheetJson: 'npc/dust_bowl_farmer/spritesheet.json' },
              nodes: {
                start: {
                  text: "A lean man stands at a half-buried fence line with his hat pushed back, watching a brown haze crawl along the horizon the way another man might watch a fire come on. He looks you over, then back at the dust, and asks, not unkindly, whether you're another government man come to tell him what he already knows.",
                  buttonLabel: 'Approach',
                  options: [
                    { label: "Ask what happened to this land.", goto: 'happened' },
                    { label: "Ask how he used to farm it.", goto: 'plough' },
                  ],
                },
                happened: {
                  text: "Wheat happened. Then the rain quit. Good years, wheat prices up, everyone breaking more ground, tractors that could turn under in a week what used to take a season. Then three years dry, then four, and one morning the field just lifted off the ground and went east on the wind. Did everything right. Everything my neighbors did. Everything the bank wanted.",
                  moodShift: -1,
                  options: [
                    { label: "Ask what the land was, before the wheat.", goto: 'plough' },
                    { label: "Ask why he says he did everything right.", goto: 'plough' },
                  ],
                },
                plough: {
                  text: "Grass. Tall as your knee, roots like wire, all the way down. My granddad ran cattle on it and never broke a furrow. Then the boom came — grass worth nothing, wheat worth everything — so they plowed it. All of it, fence to fence, his fields and his neighbors' both, the whole country turned over in a few good years. They took up the grass that had held forever, put in wheat, and when the wheat died there was just dirt. Nothing under it. Nothing holding it.",
                  revealsClue: 'grass_plowed',
                  options: [
                    { label: "Ask where you can see how deep the damage goes.", goto: 'gully_hint' },
                    { label: "Tell him you understand — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                gully_hint: {
                  text: "Want to see what it's doing? Follow the wash out past the dead field. Ground's cut clean open out there — gully deep as a man and getting deeper every blow. You'll see what's left.",
                  options: [
                    { label: "Thank him and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "The farmer is still at the fence when you come back, watching the same horizon. He nods like you'd never left.",
                  options: [
                    { label: "Leave him to it and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — the field soil has nothing holding it. Mixed: physical scoop (prose) → device readout (terminal).
            //   Reveals `no_root_structure` → also UNLOCKS the Eroded Gully.
            sample_soil: {
              type: 'examination', speaker: 'TAA Soil Analysis', personality: 'stoic',
              clueTag: 'no_root_structure', icon: '🧪', label: 'Sample the Soil',
              sprites: { iconImg: 'UI/portrait_soil_sample.png' },
              learned: "The field soil is fine as flour and just as loose. Almost no organic matter, no living root threads, no crumb structure to bind it. Whatever once held these grains together is gone, and without it the lightest wind can lift the topsoil off the field.",
              nodes: {
                start: {
                  text: "You crouch at the edge of the dead field and take up a handful of the topsoil. It runs through your fingers like dry flour. It has no weight to it, no give, no smell of anything living. Where good cropland should hold together in dark crumbs threaded with fine roots, this just pours. You let the TAA device read what your hand already suspects.",
                  options: [
                    { label: "Run the analysis on the sample.", goto: 'reading' },
                  ],
                },
                reading: {
                  type: 'terminal',     // device readout inside an otherwise-prose source (start is physical prose)
                  text: "> TAA SOIL ANALYSIS — surface, abandoned field\n  organic matter ..... trace\n  root mass .......... none detected\n  aggregate structure  collapsed\n  particle size ...... very fine / wind-portable\n\n  This soil has nothing holding it. The fine mineral grains that remain are bound by neither roots nor organic matter; no crumb structure is left to resist the wind. A surface like this does not need a storm to move it — a steady breeze will lift it. The field is not dying. It is departing.",
                  revealsClue: 'no_root_structure',
                  options: [
                    { label: "Mark the reading and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — THE CONTROL: the unploughed fence-line grass held its soil through the same drought.
            examine_evidence: {
              type: 'examination', speaker: 'The Fence Line', personality: 'stoic',
              clueTag: 'grass_control', icon: '🌾', label: 'Examine the Evidence',
              sprites: { iconImg: 'UI/icon_plants.png' },
              learned: "Along the fence line a narrow strip of native grass was never plowed, and it has kept its soil through the same drought that stripped the field bare beside it. Same wind, same dry years, two outcomes: where the grass and its roots remained, the ground held.",
              nodes: {
                start: {
                  text: "You walk the boundary of the dead field, reading the ground. On the field side: bare, cracked, drifted into dunes against the posts. But the fence line itself tells a stranger story. You stop where the difference is plain enough to put a hand on.",
                  options: [
                    { label: "Examine the strip of grass along the fence.", goto: 'strip' },
                    { label: "Compare the two sides of the fence.", goto: 'compare' },
                  ],
                },
                strip: {
                  text: "A ribbon of the old prairie grass survives here, a few feet wide, where the plow could never reach the posts. It's brown and starved for rain, but it's rooted, and the soil around those roots is still there. The drought hit this grass exactly as hard as it hit the wheat. The grass kept its ground anyway.",
                  options: [
                    { label: "Now compare the two sides of the fence.", goto: 'compare' },
                  ],
                },
                compare: {
                  text: "You stand astride the fence and look down at the proof. Same soil, same sky, the same rain-less years on both sides — and a single step apart, two different worlds. Where the grass was left, the land held. Where it was plowed up for wheat, the land blew away. The weather did not choose between them. The plow did.",
                  revealsClue: 'grass_control',
                  options: [
                    { label: "Mark the contrast and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the scale, seen from a rise: a whole region emptying out at once.
            survey_land: {
              type: 'examination', speaker: 'The Horizon', personality: 'stoic', insight: true,
              clueTag: 'extent', icon: '🏚️', label: 'Survey the Land',
              sprites: { iconImg: 'UI/icon_survey_land.png' },
              learned: "From a rise you can see how far the ruin runs. Abandoned farms, drifted lanes, the haze unbroken to the horizon every way you turn. This is not one failing farm. It is a whole region emptying out at once.",
              nodes: {
                start: {
                  text: "You climb the low rise behind the farmhouse to take the measure of it. There's no edge to find. Abandoned houses sit at the ends of drifted lanes; a tractor stands hub-deep in its own field, left where it died. Fence lines run off into a brown haze that swallows the horizon whole. Smoke would mean someone was still cooking somewhere. You don't see smoke.",
                  options: [
                    { label: "Take in the full extent of it.", goto: 'extent' },
                  ],
                },
                extent: {
                  text: "It goes on. Whatever took this farm took all of them, across counties, across state lines. Families loading what they can carry and driving west out of a country that is physically blowing out from under them. The scale is the thing that makes it history and not just one man's bad luck. This is a region erasing itself.",
                  revealsClue: 'extent',
                  bonusInsight: true,
                  options: [
                    { label: "Step back from the rise.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── The Eroded Gully, Oklahoma (unlocks on no_root_structure; the depth of the loss) ──
        {
          id: 'eroded_gully',
          label: 'The Eroded Gully — Oklahoma',
          requires: { clueFound: 'no_root_structure' },
          lockHint: "Read the field soil first — learn what's actually leaving — and you'll know where to go to see how deep it runs.",
          scene: 'scene/scene_eroded_gully.jpg',
          // Ambient FX (placeholder — tune in demos/locationfx/lvl5.html): denser, wider brown dust
          //   coming off the walls (horizontal dust) under a heavier haze (clouds). Starkest scene in the game.
          locationFx: {
            dust:   { horizontal: true, color: '#a89066', bandTop: 28, bandBottom: 98, count: 44, speed: 30, size: 2.0, opacity: 0.30 },
            clouds: { color: '#797060', bandTop: 0, bandBottom: 78, count: 15, speed: 38, opacity: 0.55, size: 130 },
          },
          sources: {
            // Examination (REQUIRED) — the soil profile: topsoil that should run a foot deep is worn to an inch over dead sand.
            examine_strata: {
              type: 'examination', speaker: 'The Gully Wall', personality: 'stoic',
              clueTag: 'profile_stripped', icon: '🪨', label: 'Examine the Strata',
              sprites: { iconImg: 'UI/portrait_dust_soil.png' },
              learned: "The cut wall of the gully reads like a ruined book: a dark band of topsoil that should run many inches deep is worn to barely one, and below it only pale, lifeless subsoil that will grow nothing. Most of the living soil that took millennia to build is already gone on the wind.",
              nodes: {
                start: {
                  text: "You climb down into the gully: a raw wound cut man-deep into what used to be flat field. The walls are sheared earth, and they show the soil's whole history in cross-section, layer on layer, the way a cliff face shows rock. You set your hand against the cut and read it from the bottom up.",
                  options: [
                    { label: "Read the layers in the gully wall.", goto: 'layers' },
                    { label: "Look for the topsoil band.", goto: 'topsoil' },
                  ],
                },
                layers: {
                  text: "Pale sand and clay at the bottom. The dead subsoil, mineral and starved, the kind of ground that grows nothing but more gully. Above it, where the living soil should be, a thin dark line. That dark band is the whole inheritance: the topsoil, the part it took the prairie thousands of years to build a root at a time. Everywhere good land survives, that band runs deep. Here you could cover it with two fingers.",
                  options: [
                    { label: "Measure the dark topsoil band.", goto: 'topsoil' },
                  ],
                },
                topsoil: {
                  text: "You lay your fingers flat against the dark line and it doesn't reach the second knuckle. An inch, where there should be a foot. And the rest hasn't been used up. Lifted clean off the ground and carried away on the wind, season after season, until only this last starved inch remains over dead sand. You cannot feed a field back to life that has already blown away.",
                  revealsClue: 'profile_stripped',
                  options: [
                    { label: "Mark the stripped profile and climb out.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — a core: the wound goes deeper than the eye; the subsoil is biologically dead.
            sample_core: {
              type: 'examination', speaker: 'TAA Core Analysis', personality: 'stoic', insight: true,
              clueTag: 'dead_soil', icon: '🧫', label: 'Sample the Core',
              sprites: { iconImg: 'UI/portrait_soil_core.png' },
              learned: "A core driven through the gully floor confirms the wound runs deeper than the eye: beneath the last residual topsoil, the subsoil is biologically dead — no organic matter, no microbial life, nothing for a root to take hold in. Even if the wind stopped tomorrow, what's left here could not grow a crop.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA SOIL CORE — gully floor, full column\n  drive depth ........ 1.2 m\n  topsoil horizon .... 2 cm (residual)\n  organic carbon ..... near zero below surface\n  microbial activity . none detected\n\n  Awaiting query.",
                  options: [
                    { label: "Query: how long to rebuild what's lost?", goto: 'rebuild' },
                    { label: "Query: could this ground still grow a crop?", goto: 'verdict' },
                  ],
                },
                rebuild: {
                  type: 'terminal',
                  text: "> QUERY — soil formation rate\n  natural topsoil formation: ~2–3 cm per CENTURY\n  topsoil lost here: estimated 10–20 cm\n\n  The plains built this soil grain by grain across thousands of years under unbroken grass. At nature's pace, replacing what blew away in a single decade would take many centuries. This is why the only real answer is to stop the loss — what is gone will not be back within any living memory.",
                  options: [
                    { label: "Then ask if it could still grow a crop.", goto: 'verdict' },
                  ],
                },
                verdict: {
                  type: 'terminal',
                  text: "> QUERY — viability\n  Below the residual topsoil: dead mineral subsoil.\n  No organic matter. \n  No living community. \n  No structure.\n\n  A seed set here would find nothing to root in and nothing to feed it. Stopping the wind would only preserve a corpse. The land cannot simply recover on its own — what was lost was not fertility but the living soil itself, and that is not waiting under the surface to be coaxed back.",
                  revealsClue: 'dead_soil',
                  bonusInsight: true,
                  options: [
                    { label: "Close the core log and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the regional dust survey: the scale that forces a national answer.
            survey_region: {
              type: 'examination', speaker: 'TAA Regional Survey', personality: 'stoic', insight: true,
              clueTag: 'scale', icon: '🛰️', label: 'Survey the Region',
              sprites: { iconImg: 'UI/portrait_taa_scan.png' },
              learned: "A regional dust survey puts numbers to the catastrophe: erosion like this gully repeated across a hundred million acres, tens of thousands of farms abandoned, soil from these plains falling on cities a thousand miles away. The scale is what forces a national answer rather than a local one.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA REGIONAL DUST SURVEY — southern plains, 1935\n  scanning…………\n\n  severe wind erosion ...... ~100 million acres\n  farms abandoned .......... tens of thousands\n  airborne soil tracked .... to the Atlantic seaboard\n  single-storm soil loss ... hundreds of millions of tons\n\n  This is not a local failure of a few poor farms. The same wound runs from Texas to the Dakotas. Soil lifted off this ground has fallen on distant cities and on ships at sea. A disaster this wide cannot be answered farm by farm — it will take a national hand, which is exactly what waits in the committee room to the east.",
                  revealsClue: 'scale',
                  bonusInsight: true,
                  options: [
                    { label: "Close the survey and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── The Committee Room, Washington DC (unlocks on profile_stripped; ANCHOR — the geographic jump) ──
        {
          id: 'committee_room',
          label: 'The Committee Room — Washington DC',
          requires: { clueFound: 'profile_stripped' },
          anchorPoint: true,                  // Stabilize the Record resolves HERE; wrong-location msg in Oklahoma
          lockHint: "The fields aren't where this record locks. Once you can prove how much soil is gone, the thread can carry you east — to Washington, where it will be heard.",
          scene: 'scene/scene_committee_room.jpg',
          // Ambient FX (placeholder — tune in demos/locationfx/lvl5.html): NEW windowHaze — the real dust
          //   storm slowly hazing the windows while the player is here (bible §446). Mask: windows = transparent
          //   region (verified) → invert:false keeps the haze on the glass. Starts faintly hazy, ramps to a cap.
          locationFx: {
            windowHaze: { mask: 'scene/scene_committee_room.mask.png', invert: false, color: '#c9b279', startOpacity: 0.00, maxOpacity: 0.90, duration: 90 },
          },
          sources: {
            // NPC (REQUIRED) — Hugh Hammond Bennett, patient. The answer is to never leave the land bare.
            bennett: {
              type: 'conversation', speaker: 'Hugh Bennett', personality: 'patient', startMood: 0,
              clueTag: 'conservation_answer', icon: '🧑‍💼', label: 'Hugh Bennett', actionLabel: 'Speak with Bennett',
              learned: "Bennett has the answer and the patience to land it: the land can be saved by never leaving it bare — keeping crop residue and grass cover, plowing along the contours, planting shelter-belts to break the wind. He has staked everything on testifying it into law, and timed his testimony to the day a dust storm would reach Washington and argue for him.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/hugh_bennett/spritesheet.png', spritesheetJson: 'npc/hugh_bennett/spritesheet.json' },
              nodes: {
                start: {
                  text: "You feel that? That's the plains, come to Washington. I've been trying to bring them here for fifteen years. Today the wind's doing my work for me.",
                  buttonLabel: 'Speak with Bennett',
                  options: [
                    { label: "Ask what he means to tell the committee.", goto: 'case' },
                    { label: "Ask why he's so sure the farmers were the cause.", goto: 'cause' },
                  ],
                },
                cause: {
                  text: "Not the farmers. The plowing. There's a difference, and the men out there breaking sod were never once told it. The prairie grass was a single living net that held the soil for ten thousand years, and tearing it up for wheat cut the net. They did what the banks and the bureaus and the good years all told them to do. The fault is in the practice, not the man behind the plow. So I have to make them see the soil itself, in the air, over their own heads.",
                  options: [
                    { label: "Ask how the land can be saved.", goto: 'answer' },
                    { label: "Ask what he means to tell the committee.", goto: 'case' },
                  ],
                },
                case: {
                  text: "The truth, and a bill to act on it. For years they've called this a drought — an act of God, nothing to be done. If that's what the record says, the Congress waits for rain and the plains finish blowing away. I mean to put the real cause in front of them, with the evidence behind it, while the proof is darkening their own windows.",
                  options: [
                    { label: "Ask how the land can be saved.", goto: 'answer' },
                  ],
                },
                answer: {
                  text: "By never letting the ground go naked again. Leave the old stalks and stubble on the field to shield the soil and hold it down. Plow along the curve of the land instead of straight up and down it, so the water walks instead of runs. And plant belts of trees across the open country to break the wind before it can lift anything at all. The grass knew how. We forgot, that's the whole of it — and today I make the Congress remember.",
                  revealsClue: 'conservation_answer',
                  options: [
                    { label: "Tell him the evidence is ready — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "Bennett is still watching the windows when you return, the folder closed on his knee. The light through the glass is browner than it was. \"Won't be long now,\" he says — and you can't tell whether he means the storm or the testimony, and you suspect he means them as the same thing.",
                  options: [
                    { label: "Leave him to his waiting and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the political contest: industry's "act of God" against Bennett's measured case.
            review_testimony: {
              type: 'examination', speaker: 'The Testimony Draft', personality: 'stoic', insight: true,
              clueTag: 'political_contest', icon: '📄', label: 'Review the Testimony',
              sprites: { iconImg: 'UI/portrait_usda_report.png' },
              learned: "Bennett's testimony draft and the papers beside it show the fight he's walking into: land and agricultural interests have spent years insisting the soil is an endless resource and the dusters a passing act of weather. He has marshalled survey after survey to prove the loss is man-made, measurable, and curable — and that the cost of doing nothing dwarfs the price of acting.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA RECORDS — Bennett testimony draft & related papers\n  reading………\n\n  THE OPPOSING CASE: soil is an inexhaustible resource · the storms are weather, not consequence · conservation rules are federal overreach onto private land.\n\n  BENNETT'S CASE: erosion surveyed across 100M+ acres · measured topsoil loss · ploughed ground set beside grassed ground · the projected cost of inaction against the price of conservation.\n\n  Underlined twice at the foot of the page, in his own hand: 'They will not believe a chart. Let them watch it come through the window.'",
                  revealsClue: 'political_contest',
                  bonusInsight: true,
                  options: [
                    { label: "Close the papers and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the forward thread: the Soil Conservation Act and the foundation of modern conservation.
            query_archive: {
              type: 'examination', speaker: 'TAA Archive', personality: 'stoic', insight: true,
              clueTag: 'soil_act', icon: '🗄️', label: 'Query TAA Archive',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "The forward thread is bright, for once: weeks after this testimony Congress passes the Soil Conservation Act and builds a permanent service to carry the work nationwide — contour plowing, terracing, cover crops, and shelter-belts of trees by the hundreds of millions. The practices proven in this room become the bedrock of the sustainable farming the Archivist's own century is built on.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — forward trace from this hearing\n  querying………\n\n  Within weeks: the Soil Conservation Act passes. A permanent national service is created to carry the work — contour ploughing, terracing, cover crops, crop residue left on the land, and shelterbelts of trees planted across the plains by the hundreds of millions.\n\n  Within decades: erosion across the region falls steeply. The practices argued in this room become standard — the foundation of soil conservation worldwide.\n\n  The plains did not become a permanent desert. Someone stood up while the light was still brown in the windows, and the record held. The world that grows the Archivist's food is built, in part, on this single afternoon.",
                  revealsClue: 'soil_act',
                  bonusInsight: true,
                  options: [
                    { label: "Close the archive and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
    },
    // ── LEVEL 6 — Near Future, 2041 · "The False Verdict" ──
    // The first commercial closed-loop vertical farm has failed publicly. The inquiry is about to
    // blame human/engineering error (the systems engineer who built the nutrient-cycling loop), but
    // the real cause is BIOLOGICAL: the microbial consortium that recycles nutrients collapsed, so
    // nitrification stopped — ammonia rose, nitrate crashed, the crops starved-and-burned while the
    // hardware kept dosing to spec. 3 locations, 5 REQUIRED + 5 INSIGHT, buttons 4/3/3 (bible §340-342).
    // Structure = anchor-middle-return (L3-style, author-locked): Failed Farm Floor (OPEN) → Control
    // Room (ANCHOR, unlock on ammonia_burn) → Press Briefing (unlock on consortium_crash), then RETURN
    // to the Control Room to Stabilize. ranksUp → R4 Temporal Archivist → R5 KEEPER OF THE CHAIN (the
    // FINAL promotion). On completion the engine sets STATE.level7Unlocked → hidden L7 appears in the
    // dev/level select. TAA Comms = Nova (default; commsSpeaker omitted) — carries the SSS-connection
    // weight (bible §346): the institutional world that eventually trains Dr. Nova is founded here.
    // English (no foreign-script). NEW FX (placeholder values — tune in demos/locationfx/lvl6.html):
    // grow-light flicker (Floor), monitor screen scroll + status blink (Control Room), camera flash
    // (Press Briefing). teaches OMITTED (consciously — L6 introduces no new player-facing mechanic;
    // same intentional gap as L3/L4).
    {
      id: 'L6',
      name: 'The Vertical Farm',
      tagline: 'The False Verdict',
      location: 'A commercial vertical farm',
      date: '2041',
      briefing: "The thread runs forward one last time before home, past the edge of your own century, to the year 2041 and the first of its kind: a commercial closed-loop vertical farm. Ten stories of crops grown with neither soil nor sky, its water and nutrients cycled round and round through a sealed living loop, built to prove that a city could at last grow its own food. Three weeks ago it failed — publicly, catastrophically, the trays dying floor by floor while the whole world watched. \n\nNow the inquiry is closing, and it has found its culprit: human error, the engineer who designed the nutrient-cycling system. That answer is an hour from becoming the permanent record. But the thread reads wrong against it. The failure here was not in the machinery, nor in the hand that built it, but in something alive. Walk the dead floor, read the system's own memory, and stand the true cause up before the false verdict is sealed. More rides on it than one man's name. Get this wrong, and the world loses its nerve for growing food this way — at the very moment it most needs it, and the future that builds the Archive itself grows a little less certain.",
      palette: {
        bgDeep:  '#080d12',
        bgMid:   '#0f1a24',
        bgPanel: '#18242f',
      },
      sprites: { scene: 'scene/scene_failed_farm_floor.jpg' },   // level-wide bg loadScene reads (caseData.sprites.scene)
      resolveLabel: 'Stabilize the Record',
      resolveNag: "The record won't hold yet — a verdict overturned needs the whole of the evidence standing behind it. Gather what the dead floor and the system's own memory still hold before you seal it.",
      ranksUp: true,                       // R4 Temporal Archivist → R5 Keeper of the Chain (FINAL promotion); engine also sets level7Unlocked
      taaCommsHints: {
        low:  "Don't let the size of this place fool you, nothing in it is broken. The pumps run, the lights burn, the machine is doing everything it was built to do. So the question isn't what broke. It's what stopped. Start on the floor. Look at the crops, and hear out the researcher who's actually been reading them instead of guessing.",
        mid:  "You're close. The floor tells you the crops starved and burned at the same time. Too much nitrogen in the wrong form, none in the right one. That's a clue, not a cause. The cause is in the control room, in the system's own memory: find where the living part of the loop died, and watch the numbers turn. And read the engineer's logs while you're at him. They'll clear the man they're about to blame.",
        full: "That's the shape of it. The consortium collapsed first, and everything else followed. The bacteria that turned ammonia into food died over three days, and after that the crops were starving in water full of nitrogen they couldn't drink. Anchor in the control room and set it straight there, where the verdict gets written. And — for what it's worth from someone who came after — thank you. The world that trained me, that gave me a place to stand, doesn't quite happen if this gets sealed wrong today. Somebody has to get it right. Today that's you.",
      },
      diagnoses: [
        { label: "The farm was not killed by human error or by any failure of its machinery. Its sealed loop depended on a living microbial consortium — a community of bacteria that continuously turned the crops' waste nitrogen from root-scorching ammonia into drinkable nitrate. A run of small, un-alarming insults — a pH dip, a warm spell, a trace of sanitizer left in the water — collapsed that consortium over three days. With the bacteria gone, nitrification stopped: ammonia climbed, nitrate crashed, and the crops starved and burned at once — while the pumps kept dosing and never registered that anything had died. This was a biological failure inside an engineering success. The cure is not to blame the engineer but to treat the living loop as the system it is: monitor the microbes, hold their conditions, and regulate the biology — not just the steel around it.", isCorrect: true, hint: "" },
        { label: "The failure was human error: the nutrient-cycling system was flawed as it was designed, and the engineer who built it is to blame. Tighten the oversight on the engineering and the technology itself is sound.", isCorrect: false, hint: "You read the engineer's own logs and audited the machine against them: the dosing units metered nutrient to the gram, the pumps held pressure, every setpoint he designed was met to the final hour. The engineering ran exactly to spec. And the system's memory shows the real first failure was in no machine at all — the microbial consortium collapsed days before the crops did. You cannot pin on an engineer a death that happened in the one part of the loop that was never a machine." },
        { label: "The nutrient solution was simply wrong — the formula was mis-mixed or a key nutrient ran dry, and the crops starved of nitrogen. Correct the recipe, refill the tanks, and the farm recovers.", isCorrect: false, hint: "The tissue analysis refutes it: the plants were not short of nitrogen at all. Nitrogen was abundant in the water — but stranded as ammonia, which burned their roots, instead of the nitrate they can actually drink. And the dosing logs show nutrient delivered on schedule. The food was present and the feeding never stopped; what failed was the living conversion between the two forms. You cannot fix with a fuller tank a loop whose bacteria have died." },
      ],
      explanation: {
        title: "Record Stabilized",
        body: "You set the true cause into the record with an hour to spare, and the false verdict never sealed. The first commercial closed-loop vertical farm did not fail because a man made a mistake. It failed because the part of it that was alive died, unnoticed, inside a machine that went on working perfectly. A sealed growing loop like this recycles its own nutrients: the plants' waste ammonia, which is toxic to roots, is converted into plant-available nitrate by a microbial consortium — nitrifying bacteria living in the system's biofilter, doing in the dark the one job the whole design depends on. Those bacteria are far more fragile than the pumps and sensors built around them. Nitrification stopped. Ammonia climbed, nitrate vanished, and the crops starved and scorched in water still being faithfully dosed by hardware that had no way to know the living heart of the loop was gone. \n\nBut an engineering success can still suffer a biological death, and telling the two apart is the whole of it — because the fix for each is the opposite of the other. Blame the engineer and you regulate the machinery and leave the biology unwatched, and the next farm dies the same way. Understand the biology and you build a discipline around it: monitor the microbes, guard their conditions, commission the living loop as carefully as the steel. That is the finding that let urban agriculture grow up instead of dying in its cradle — and the patient institutional world it founded is, in time, the one that an agronomist named Nova is born into and trained by. Someone kept the door open. It was you.",
        funFact: "This isn't science fiction — the bacteria really are the hard part. In today's recirculating systems, from aquaponics to hydroponic biofilters, the invisible workers are two partner microbes: Nitrosomonas, which turns plant-toxic ammonia into nitrite, and Nitrospira, which turns that nitrite into the nitrate plants can finally drink. They establish slowly — a brand-new system can take weeks to 'cycle' before it will support a single plant — and they're famously touchy about pH, temperature, and the faintest trace of chlorine. Experienced growers have a saying for it: you're not really growing plants. You're growing bacteria, and the plants just come along for the ride.",
      },
      locations: [
        // ── The Failed Farm Floor (OPEN start; the dead crops + the biological symptom) ──
        {
          id: 'failed_farm_floor',
          label: 'The Failed Farm Floor',
          requires: null,
          scene: 'scene/scene_failed_farm_floor.jpg',
          // Ambient FX — NEW ledFlicker (AUTHOR-TUNED 2026-06-29): clinical cool grow-light panels
          //   flickering intermittently (power instability). Each panel is a POLYGON ([x%,y%] points)
          //   shaped onto the PERSPECTIVE-angled LED panels in the scene (drag vertices / double-click an
          //   edge to add a point in demos/locationfx/lvl6.html). Red emergency strips are STATIC (baked in).
          locationFx: {
            ledFlicker: { color: '#f5f8f4', panels: [ [[0,6.6],[0.2,4.1],[4.5,4.1],[11.2,9.5],[11,14.5]], [[75.3,23.9],[75.4,22.1],[78.5,19.2],[84.4,19.6],[78.8,23.9]], [[28.7,26.1],[31.4,26],[33.3,28.4],[30.2,28.5]] ], intensity: 0.45, rate: 7, jitter: 0.76 },
          },
          sources: {
            // NPC (REQUIRED) — the farm researcher, curious. The crops starved while the feed system ran.
            farm_researcher: {
              type: 'conversation', speaker: 'The Researcher', personality: 'curious', startMood: 0,
              clueTag: 'starved_while_fed', icon: '🧑‍🔬', label: 'The Researcher', actionLabel: 'Approach',
              learned: "The researcher has documented the failure floor by floor: the crops showed nitrogen starvation and caustic root burn at once — yet the feed system never stopped dosing nutrient. The food was present the whole time; something between the tank and the root stopped working, something that was never a machine.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/farm_researcher/spritesheet.png', spritesheetJson: 'npc/farm_researcher/spritesheet.json' },
              nodes: {
                start: {
                  text: "You're with the inquiry? Good. Somebody up there has already decided what happened down here. I'd like one person to actually look first.",
                  buttonLabel: 'Approach',
                  options: [
                    { label: "Ask what actually happened to the crops.", goto: 'symptom' },
                    { label: "Ask why he doubts the inquiry.", goto: 'doubt' },
                  ],
                },
                symptom: {
                  text: "Same thing on every floor. They didn't dry out and they didn't drown. They went yellow from the bottom up — textbook nitrogen starvation — and the roots burned, like they'd been steeped in something caustic. Starved and poisoned at once. And here's the part nobody upstairs wants to hear: the feed system never stopped. The whole time these were starving, the pumps were delivering nutrient on schedule. I checked the logs myself.",
                  options: [
                    { label: "Starving while being fed — how is that possible?", goto: 'reveal' },
                    { label: "Ask why he doubts the inquiry.", goto: 'doubt' },
                  ],
                },
                doubt: {
                  text: "Because they named the cause before the plants were even cold. Engineer error. The man who built the cycling loop. He's good. His system did exactly what he designed it to do — I can show you it dosing right up to the end. Whatever killed these crops, it wasn't the machine breaking and it wasn't him forgetting a valve. It's as if the food was here the entire time, and the plants simply couldn't reach it.",
                  options: [
                    { label: "Starving while being fed — how is that possible?", goto: 'reveal' },
                  ],
                },
                reveal: {
                  text: "That's the whole question, isn't it. Nitrogen in the tank, nitrogen in the pipes, pumps running — and the crops dying of nitrogen hunger anyway. Something between the tank and the root stopped doing its job. Something that isn't on any of my engineering schematics, because it was never a machine. If you want to know what, you'll want the system's own memory. The control room logged everything — including, I'd bet, the moment the thing that actually mattered died.",
                  revealsClue: 'starved_while_fed',
                  options: [
                    { label: "Take his advice — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "Find it? Whatever you put in the record, put the truth in it. These earned that much.",
                  options: [
                    { label: "Leave him to his work and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — the dead crops: nitrogen starvation + ammonia burn together.
            //   Mixed: physical handling (prose) → device tissue readout (terminal). Reveals ammonia_burn → UNLOCKS Control Room.
            examine_crops: {
              type: 'examination', speaker: 'TAA Tissue Analysis', personality: 'stoic',
              clueTag: 'ammonia_burn', icon: '🥬', label: 'Examine the Crops',
              sprites: { iconImg: 'UI/portrait_failed_crops.png' },
              learned: "The dead crops carry a contradiction that resolves into a single cause: nitrogen starvation and ammonia burn together. Nitrogen was abundant — but stranded in the wrong form, present as root-scorching ammonia and almost absent as drinkable nitrate. The bacterial conversion that turns the one into the other had stopped, and the plants starved in water full of food they couldn't use.",
              nodes: {
                start: {
                  text: "You lift one of the dead plants from its tray. The leaves are bleached a brittle yellow-green, the oldest ones worst. The unmistakable signature of a plant starved for nitrogen. But the roots tell a second, contradictory story: brown, slimed, burned back, not starved but scorched, as if steeped in something caustic. You are holding a plant that was going hungry and being poisoned in the very same water. You let the device read the tissue.",
                  options: [
                    { label: "Run the tissue analysis.", goto: 'reading' },
                  ],
                },
                reading: {
                  type: 'terminal',     // device readout inside an otherwise-prose source (start is physical prose)
                  text: "> TAA TISSUE ANALYSIS — sample, dead crop tray\n  nitrate (plant-available N) .. critically low\n  ammonia / ammonium ........... toxic excess\n  root tissue .................. ammonia burn, severe\n\n  The contradiction resolves into one cause. Nitrogen is abundant here — but in the wrong chemical form. It is present as ammonia, which scorches roots, and nearly absent as nitrate, which a plant can actually drink. In a working system a community of bacteria converts the one into the other, continuously and unseen. Here that conversion has stopped. The crops drowned in a nitrogen they could not use.",
                  revealsClue: 'ammonia_burn',
                  options: [
                    { label: "Mark the reading and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — TAA scan of the mechanical systems: everything operational. The hardware never broke.
            scan_systems: {
              type: 'examination', speaker: 'TAA Systems Scan', personality: 'stoic', insight: true,
              clueTag: 'systems_running', icon: '📟', label: 'Scan Systems',
              sprites: { iconImg: 'UI/icon_sensors.png' },
              learned: "A full scan of the facility's machinery comes back clean: pumps, dosers, climate, circulation, sensors — every mechanical system operational, no faults. The building is running its own failure flawlessly, tending a loop that died days ago. The hardware never broke; it simply has no way to tell that anything is wrong.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA SYSTEMS SCAN — facility mechanical infrastructure\n  scanning…\n\n  nutrient pumps ......... operational\n  dosing units ........... operational, on schedule\n  climate control ........ within range\n  water circulation ...... nominal\n  sensor array ........... reporting, no faults\n\n  Every mechanical system in this building is working. The pumps push, the dosers measure, the air holds temperature, the water moves. Nothing here has broken. The facility is running its failure perfectly — feeding, circulating, regulating a loop that stopped living days ago. Machinery cannot tell the difference. It only does as it is told.",
                  revealsClue: 'systems_running',
                  bonusInsight: true,
                  options: [
                    { label: "Close the scan and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the scale of the floor and the stakes riding on the verdict.
            survey_floor: {
              type: 'examination', speaker: 'The Floor', personality: 'stoic', insight: true,
              clueTag: 'facility_scale', icon: '🏭', label: 'Survey the Floor',
              sprites: { iconImg: 'UI/icon_survey_land.png' },
              learned: "Seen whole, the floor is vast — ten storeys of soilless fields meant to feed a city, lit and circulating and immaculate, and entirely dead. This was the first of its kind, the proof that cities could grow their own food. The stakes of the verdict are written in its scale: if the record blames human failure, no one risks building the second one.",
              nodes: {
                start: {
                  text: "You step back to take in the whole floor. The racks climb out of sight overhead — ten storeys of them stacked into the dark, each level a field that needed no rain and no season, greens and grain that should have been feeding a city block by now. Red emergency strips wash the aisles. Grow-lights still burn cold over trays of the dead. It is enormous, and immaculate, and empty. You can feel the weight of what was riding on it: the first of its kind, the proof that a city could grow its own food. If the record says this proof died of human stupidity, no one builds the second one.",
                  revealsClue: 'facility_scale',
                  bonusInsight: true,
                  options: [
                    { label: "Step back from the floor.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── The Control Room (unlocks on ammonia_burn; ANCHOR — the system's memory + where the record locks) ──
        {
          id: 'control_room',
          label: 'The Control Room',
          requires: { clueFound: 'ammonia_burn' },
          anchorPoint: true,                  // Stabilize the Record resolves HERE; wrong-location msg elsewhere
          lockHint: "The crops can only tell you what died, not why. For that you need the system's own memory — the control room logged the loop as well as the machinery. Read the floor first and you'll know to go there.",
          scene: 'scene/scene_control_room.jpg',
          // Ambient FX (AUTHOR-TUNED 2026-06-30): screenScroll — slow vertical data scroll (green/amber
          //   on dark) on 3 monitor boxes (all one shared size, dragged onto the wall screens in the demo),
          //   reusing the terminal aesthetic; plus statusBlink — a single red status pixel on a slow cycle.
          locationFx: {
            screenScroll: { panels: [ { x: 9.7, y: 38.8, w: 16.5, h: 11.5 }, { x: 41.7, y: 21, w: 16.5, h: 11.5 }, { x: 73, y: 38.5, w: 16.5, h: 11.5 } ], color: '#94fb6a', amberColor: '#ffb300', speed: 10, fontSize: 6 },
            statusBlink: { x: 61, y: 56, size: 5, color: '#ff3030', period: 1.6 },
          },
          sources: {
            // NPC (REQUIRED) — the systems engineer, stressed: he's the one being blamed, and his logs clear him.
            systems_engineer: {
              type: 'conversation', speaker: 'The Engineer', personality: 'stressed', startMood: 0,
              clueTag: 'hardware_to_spec', icon: '🧑‍💻', label: 'The Engineer', actionLabel: 'Speak with the engineer',
              learned: "The engineer walks you through the operational history: dosing to the gram, pumps at pressure, temperature held, every setpoint he designed met to the final hour. The machinery ran exactly to spec. His own reading of it — that they built beautiful hardware around a living community and then only ever watched the hardware — is the thing no incident report will say, so it becomes his fault instead.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/systems_engineer/spritesheet.png', spritesheetJson: 'npc/systems_engineer/spritesheet.json' },
              nodes: {
                start: {
                  text: "Let me guess. You've read the finding. Engineer error. The cycling loop was my design, so the loop is my fault. I've run these logs forty times. I keep waiting to find the mistake they say I made. It isn't here.",
                  buttonLabel: 'Speak with the engineer',
                  options: [
                    { label: "Ask him to show you the logs.", goto: 'logs' },
                    { label: "Ask what he thinks really happened.", goto: 'theory' },
                  ],
                },
                logs: {
                  text: "There. That's the machine I built, doing exactly what I built it to do, right up until there was nothing left alive to feed. Audit my engineering for a year. It ran to spec. Whatever failed in here, it wasn't the hardware and it wasn't the man who drew the hardware. But 'the engineer made a mistake' is a finding people understand. 'The biology died' isn't.",
                  revealsClue: 'hardware_to_spec',
                  options: [
                    { label: "Ask what he thinks really happened.", goto: 'theory' },
                    { label: "Tell him you'll keep looking — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                theory: {
                  text: "Honestly? We treated the living part of this system like plumbing. The loop only closes because of the bacteria — they turn the plants' waste back into food, constantly, where nobody can see it. We built beautiful machinery around them, and then we monitored the machinery. Flow, pressure, temperature, pH on a good day. We never really watched them. You can't put 'we forgot the microbes were alive' in an incident report. So it becomes my valve. My formula. My fault.",
                  options: [
                    { label: "Ask him to show you the logs.", goto: 'logs' },
                    { label: "Tell him the system's own data may settle it — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "Still here. Somebody should be, when they come to turn the lights off. If you find what really did this — put it down plain. Not to clear me. So the next one doesn't die the same way.",
                  options: [
                    { label: "Leave him to his watch and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Examination (REQUIRED) — THE SMOKING GUN: the system logged its living loop. Microbial collapse → chemistry flip → crop death.
            query_systems: {
              type: 'examination', speaker: 'TAA Systems Query', personality: 'stoic',
              clueTag: 'consortium_crash', icon: '📊', label: 'Query Systems',
              sprites: { iconImg: 'UI/portrait_taa_scan.png' },
              learned: "The system logged its living loop as well as its machinery, and the two traces tell the whole story: the microbial consortium in the biofilter held steady for fifty-eight days, then collapsed over seventy-two hours and flatlined. From that day ammonia climbed and nitrate crashed — the exact signature of nitrification stopping — and only afterward did the crops begin to die. The biology failed first; everything else was consequence.",
              nodes: {
                start: {
                  type: 'terminal',
                  text: "> TAA SYSTEMS QUERY — nutrient-cycle subsystem, full history\n  The facility logged its living loop as well as its machinery.\n  Two records survive. Trace either.\n\n  Awaiting query.",
                  options: [
                    { label: "Query: microbial population, over time.", goto: 'microbes' },
                    { label: "Query: water chemistry, over time.", goto: 'chemistry' },
                  ],
                },
                microbes: {
                  type: 'terminal',
                  text: "> QUERY — biofilter microbial density, 90-day trace\n  day 00–58 ... stable ▇▇▇▇▇▇▇▇\n  day 59 ...... sharp decline ▇▅▂\n  day 60–62 ... collapse ▂▁ _\n  day 63+ ..... flatline\n\n  The nutrient loop ran on a living community of bacteria — a microbial consortium — seeded through the biofilter. For fifty-eight days it held steady. Then, across roughly seventy-two hours, it crashed: the population fell off a cliff and never recovered. The crops began dying days afterward. The biology failed first. Everything else was consequence.",
                  options: [
                    { label: "Query: water chemistry, over time.", goto: 'chemistry' },
                    { label: "Trace the population against the nutrients.", goto: 'reveal' },
                  ],
                },
                chemistry: {
                  type: 'terminal',
                  text: "> QUERY — nutrient chemistry, 90-day trace\n  ammonia ... low & steady ——— then climbing ▁▂▅▇\n  nitrite .... trace ——— then spiking ▁▃▇▅\n  nitrate ... healthy ▇▇▇ then crashing ▇▅▂▁\n  crossover at day ~60\n\n  As long as the consortium lived, it ran nitrification in two linked steps — one group of bacteria turning ammonia into nitrite, a second turning that nitrite into nitrate — as fast as the plants made waste. Ammonia low, nitrate high, the loop closed. From day sixty the steps fail in sequence: ammonia climbs unconverted, nitrite spikes in the broken middle, and nitrate falls away. This is the precise chemical signature of nitrification stopping — the fingerprint of a dead biofilter, written in the water.",
                  options: [
                    { label: "Query: microbial population, over time.", goto: 'microbes' },
                    { label: "Trace the population against the nutrients.", goto: 'reveal' },
                  ],
                },
                reveal: {
                  type: 'terminal',
                  text: "> QUERY — correlated trace\n  microbial collapse ...... day 59–62\n  nitrate crash ........... day 60 onward\n  crop death .............. day 64 onward\n\n  The sequence is unambiguous. First the microbial consortium collapsed. Then, with nothing left to convert it, ammonia rose and nitrate vanished. Then the crops — fed the whole time by machinery that never faltered — starved on a nitrogen they could not drink and burned on the ammonia that replaced it. This was not an engineering failure. It was an extinction, inside a sealed loop, of the one living part the whole loop depended on.",
                  revealsClue: 'consortium_crash',
                  options: [
                    { label: "Mark the trace and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the trigger: pH/temperature/sanitizer events, lethal to the bacteria, unflagged by the machine.
            review_records: {
              type: 'examination', speaker: 'Operational Log', personality: 'stoic', insight: true,
              clueTag: 'trigger_event', icon: '🗒️', label: 'Review Records',
              sprites: { iconImg: 'UI/portrait_operational_logs.png' },
              learned: "The maintenance log holds the trigger, buried under 'within tolerance': in the days before the collapse a sanitizer flush, a pH dip, a warm spell from a cycling chiller — none of them alarming to the machinery, every one of them lethal to a nitrifying consortium. The conditions that kill the bacteria are gentler than the conditions that trip an engineering alarm, so the system logged the triggers and never understood that they mattered.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> OPERATIONAL LOG — maintenance & alerts, days 55–60\n  reading…\n\n  day 56 · coolant loop serviced; sanitizer flush per schedule\n  day 57 · pH dipped below range (6.1); auto-corrected; no alarm raised\n  day 57 · water temperature +4°C for 9 hrs (chiller cycling); within tolerance\n  day 58 · residual sanitizer detected, trace; logged, not flagged\n\n  Not one of these tripped a critical alarm, because not one of them threatened the machinery. But the bacteria of a nitrifying consortium are far less forgiving than the equipment around them: a pH swing, a warm spell, a whisper of sanitizer in the water — any one can break them, and here they arrived together, in the days before the collapse. The triggers were all logged. Nothing in the system was built to understand that they mattered.",
                  revealsClue: 'trigger_event',
                  bonusInsight: true,
                  options: [
                    { label: "Close the log and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── The Press Briefing Area (unlocks on consortium_crash; the false verdict + the forward stakes) ──
        {
          id: 'press_briefing',
          label: 'The Press Briefing Area',
          requires: { clueFound: 'consortium_crash' },
          lockHint: "There's a verdict being readied for the cameras down the hall — but you've nothing to set against it until you've found what truly killed the loop. Read the system's memory first; then go hear what they mean to tell the world.",
          scene: 'scene/scene_press_briefing.jpg',
          // Ambient FX (AUTHOR-TUNED 2026-06-30): cameraFlash — a brief white flash at a camera position
          //   on a random ~14-30s timer (2-3 frames), suggesting a live press event. Off-screen-feeling.
          locationFx: {
            cameraFlash: { x: 18, y: 45.5, size: 26, color: '#ffffff', minGap: 14, maxGap: 30, flashMs: 120 },
          },
          sources: {
            // NPC (REQUIRED) — the spokesperson, professional. The false verdict, chosen because it fits on a card.
            facility_spokesperson: {
              type: 'conversation', speaker: 'The Spokesperson', personality: 'professional', startMood: 0,
              clueTag: 'false_verdict', icon: '🎤', label: 'The Spokesperson', actionLabel: 'Speak with the spokesperson',
              learned: "The spokesperson will tell the cameras the failure was human error — a flawed nutrient-cycling design, a named engineer, tighter oversight to come — because it is the version investors can act on and the inquiry can close. She isn't lying so much as choosing the survivable answer over the whole one: that 'the microbes died, and you can do everything right and still lose the building' is a truth she believes the industry can't survive hearing.",
              revisit: 'revisit',
              sprites: { spritesheet: 'npc/facility_spokesperson/spritesheet.png', spritesheetJson: 'npc/facility_spokesperson/spritesheet.json' },
              nodes: {
                start: {
                  text: "In the makeshift briefing room a woman in a sharp grey suit is rehearsing at the podium, a backdrop of company blue behind her, the press chairs ahead still empty. She's note-perfect and entirely calm — the calm of someone who has reduced a disaster to a single paragraph. She breaks off when she sees you. \"The inquiry liaison. We go live in an hour.\" A glance at her cards. \"You'll be glad to know we have a clear finding. It's cleaner this way. For everyone.\"",
                  buttonLabel: 'Speak with the spokesperson',
                  options: [
                    { label: "Ask what the finding will say.", goto: 'finding' },
                    { label: "Ask why 'cleaner' matters more than 'true'.", goto: 'cleaner' },
                  ],
                },
                finding: {
                  text: "\"Human error,\" she says, smooth and ready. \"A flaw in the nutrient-cycling system as it was designed. We've identified the responsible engineer; corrective oversight is already being drafted. The technology is sound — this was a failure of execution, not of concept. The public needs one sentence it can hold. 'The engineer got it wrong, and we'll watch the engineers more closely' — that, people understand. It restores confidence. It lets us rebuild.\" She isn't lying, exactly. She has simply chosen the version that fits on a card.",
                  revealsClue: 'false_verdict',
                  options: [
                    { label: "Ask why 'cleaner' matters more than 'true'.", goto: 'cleaner' },
                    { label: "Tell her the finding may be wrong — and turn back to your field notes.", goto: 'push' },
                  ],
                },
                cleaner: {
                  text: "\"Because 'the microbes died' isn't a sentence anyone can act on,\" she says, not unkindly. \"It sounds like the whole idea is fragile — like you can do everything right and still lose the building to something you can't even see. Tell investors that, and there's no second farm, no tenth, no industry at all. Name a person, name a fix, and the money stays in the room.\" For a moment something flickers under the polish. \"I don't enjoy it. But I have an hour, and one card, and I have to choose what goes on it.\"",
                  options: [
                    { label: "Ask what the finding will say.", goto: 'finding' },
                    { label: "Tell her the finding may be wrong — and turn back to your field notes.", goto: 'push' },
                  ],
                },
                push: {
                  text: "She studies you for a long moment. \"Then you have an hour too,\" she says, \"to give me a better sentence — one that's true and still leaves something standing.\" She turns back to her cards. \"Put it in the official record, where my finding comes from, and I'll read the right one off it. That's the only version I'm allowed to speak.\"",
                  options: [
                    { label: "Go set the record straight — and turn back to your field notes.", goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "The spokesperson is still at the podium, cards squared, the clock running down behind her. \"Whatever the record says when the hour's up,\" she says, \"that's the sentence I read. Make it the true one.\" She means it as a challenge — and, maybe, as a hope.",
                  options: [
                    { label: "Turn back to your field notes.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the forward trace: the two futures, and the institutional world that becomes Nova's (SSS connection).
            query_archive: {
              type: 'examination', speaker: 'TAA Archive', personality: 'stoic', insight: true,
              clueTag: 'regulatory_stakes', icon: '🗄️', label: 'Query TAA Archive',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "The forward trace lays two futures side by side. Sealed as human error, the verdict regulates the wrong failure: oversight falls on engineers, the living loop stays unwatched, confidence drains, and closed-loop urban agriculture stalls for a generation. Sealed as biological, a whole discipline grows up around the microbes — monitoring, standards, biological commissioning — and cities learn to feed themselves. The institutions that will one day train an agronomist named Nova are founded on getting this one record right.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — forward trace from this verdict\n  modelling two records…\n\n  IF SEALED AS HUMAN ERROR: regulators answer the wrong failure. Oversight tightens on engineers; the living core of the system stays unmonitored, unregulated. Confidence drains. Investment in closed-loop urban agriculture stalls for a generation. The second farm is never built.\n\n  IF SEALED AS BIOLOGICAL: the failure is understood for what it was. A framework grows up around the living loop — microbial monitoring, consortium-stability standards, biological commissioning. The technology becomes trustworthy because it is finally understood. Cities learn to feed themselves.\n\n  This is a hinge. The institutions that will one day grow food for a crowded, healing world — the bodies a young agronomist named Nova will be born into and trained by — turn on which way this single record is sealed.",
                  revealsClue: 'regulatory_stakes',
                  bonusInsight: true,
                  options: [
                    { label: "Close the archive and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
            // Insight (optional) — the public record: the launch fanfare against the failure, and the waiting headline.
            press_records: {
              type: 'examination', speaker: 'Media Archive', personality: 'stoic', insight: true,
              clueTag: 'public_record', icon: '📺', label: 'Review Records',
              sprites: { iconImg: 'UI/portrait_mission_logs.png' },
              learned: "The media archive runs the whole arc: the ribbon-cutting eighteen months ago — 'The Farm That Feeds the City,' a mayor, schoolchildren with seedlings — to the timelapse of the building browning from the inside while the lights stayed on. The public watched this farm rise as a promise, and it will remember whatever sentence is read in this room as the reason it fell.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> MEDIA ARCHIVE — facility launch to failure\n  compiling…\n\n  18 months ago: the ribbon-cutting. 'The Farm That Feeds the City.' Cameras, a mayor, schoolchildren holding seedlings. The future, on schedule.\n\n  3 weeks ago: the first dead floor reaches the feeds. Then the second. Then the timelapse — a building going brown from the inside while the lights stay on.\n\n  Today: a single headline waits on every desk, holding for the verdict that will be read in this room within the hour. The public watched this farm rise as a promise. It will remember whatever sentence is spoken here as the reason it fell.",
                  revealsClue: 'public_record',
                  bonusInsight: true,
                  options: [
                    { label: "Close the archive and step back.", goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
    },

    // ── LEVEL 7 — TAA Facility & Beyond, 2387 (HIDDEN FINALE) · "The Long Yield" ──
    // A TONE PIECE, not a mystery. The player has come home. There is no diagnosis, no wrong
    // cause to overturn — a thing to WITNESS. Nova (elderly, present) shows a small new plant
    // grown in the grove from the CONNECTION between species, matching no database. You observe,
    // then KEEP the moment (Stabilize at the grove only) — a choice, not a necessity — and the
    // game ends on a custom HHH end card (engine: confirmFinalStabilize → showL7Ending; NEVER the
    // SSS victory screen). Hidden until STATE.level7Unlocked (set when L6 completes).
    //
    // INTENTIONAL FIELD-PARITY OMISSIONS (documented — see HHH_HANDOFF.md):
    //   • diagnoses + explanation — L7 has no diagnosis/explanation screen; the witness-ending
    //       (the `ending` block below) replaces that whole SSS resolve pair.
    //   • taaCommsHints — TAA Comms is OMITTED in L7 (the companion is present in person, so a
    //       comms "call" is absurd — author decision); omitting the field hides the comms button.
    //   • teaches — no new player-facing mechanic this level (same conscious gap as L3/L4/L6).
    // NEW field: `ending` (title/lines[]/button) — consumed only by showL7Ending.
    //
    // REQUIRED gate (2): nova_speaks_of_it (Nova tells you of the plant) + witnessed_growth
    //   (Observe the Grove). INSIGHT (2, optional): companion_present + chain_intact.
    // Grove unlocks once Nova has spoken of the plant (requires nova_speaks_of_it); Stabilize is
    //   present ONLY at the grove (anchorPoint + hideResolveOffAnchor). ranksUp:false (already R5).
    // Companion source is ONE entry resolved at runtime from STATE.companionSpecies
    //   (companionDynamic + bySpecies) — only the L0-chosen species is wired in.
    {
      id: 'L7',
      menuName: 'Temporal Agricultural Archive',   // dev level-menu label only (banner still uses `name`)
      name: 'The Temporal Agricultural Archive',
      tagline: 'The Long Yield',
      location: 'home, at the end of the thread',
      date: '2387',
      briefing: "There is no fray here. No thread to chase, no record at risk. This dispatch is only a habit the Archive cannot break — a note left where a mission would be.\n\nYou have come home. The chain you walked is whole behind you, every link holding. Nova is waiting in the Briefing Chamber, older than the day she sent you out. And there is something she has been keeping in the grove until you got back.",
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #2a2014, #120d08)',
        bgMid:     '#1a1410',
        accent:    '#e8b84a',
        highlight: '#fff3d6',
      },
      sprites: {
        scene: 'scene/scene_taa_briefing_return.png',   // the Briefing Chamber, returned — warmer, fuller (240×280)
      },
      // LEVEL starfield = the Briefing Chamber's 3 windows (same as L0; scene_taa_briefing_return
      //   is basically the L0 chamber, returned). The grove location overrides this with its own
      //   window below (engine: per-location sceneWindow re-inits stars on location switch).
      sceneWindow: { x: 5, y: 70, w: 226, h: 108 },
      resolveLabel: 'Keep This Moment',     // L7's resolve reads as a choice, not a verdict (bible §368)
      resolveNag: 'Not yet. Stand a while — watch the grove first.',
      hideResolveOffAnchor: true,           // Stabilize absent in the Briefing Chamber; present only at the grove
      ranksUp: false,                       // already Keeper of the Chain — no promotion
      locations: [
        // ── The Briefing Chamber, returned (start; Nova / Companion / Archive; no Stabilize) ──
        {
          id: 'briefing_chamber_return',
          label: 'Briefing Chamber',
          requires: null,
          anchorPoint: false,
          scene: 'scene/scene_taa_briefing_return.png',
          // Living bg: warm amber grove-viewport pulse, higher frequency than L0 (no frameB, no
          //   shimmer — glow-only). Starfield (sceneWindow above) drifts behind. Tune in lvl7 demo.
          livingBg: {
            period: 4.0, bMin: 0, bMax: 1, ease: 'sine',
            glow: { color: '#f0b552', max: 0.30, size: 40, x: 50, y: 54, phaseOffset: 0 },   // author-tuned
          },
          sources: {
            // ── Nova (REQUIRED clue) — the heart of the level. Elderly, warm, dry. ──
            nova: {
              type: 'conversation', speaker: 'Nova', personality: 'patient',
              clueTag: 'nova_speaks_of_it', icon: '🧑', label: 'Speak to Nova', actionLabel: 'Speak to Nova',
              learned: "Nova: the chain held, every link. And something new has grown in the grove — from no database, from the connection between species itself. She wants you to witness it.",
              sprites: { spritesheet: 'npc/nova/spritesheet_unmasked.png', spritesheetJson: 'npc/nova/spritesheet_unmasked.json' },
              revisit: 'after',
              nodes: {
                start: {
                  text: "There you are.\n\nThe thread let you go at last. You've got that look they all come back with — one foot still in some other century, half-expecting the floor to be dirt. It passes. Give it a day.\n\nSit. Or don't. But you're home, archivist. That part's real.",
                  buttonLabel: 'Nova',
                  options: [
                    { label: 'Is it really finished? The chain held?', goto: 'held' },
                    { label: 'You waited for me.',                     goto: 'waited' },
                    { label: 'You look older than when I left.',       goto: 'older' },
                  ],
                },
                held: {
                  text: "It held. All of it.\n\nI won't pretend I understood what that would feel like when I sent you out. You walk a thing link by link — a woman with her seed-heads, a salt field, a hungry road, a man pulling bread out of the air, an old soil-man waiting on a dust storm, a farm that starved itself in the dark — and somewhere in there it stops being history. It starts being people. Yours, now. You carried them.\n\nThat's the whole job. Not fixing. Carrying.",
                  options: [
                    { label: 'So why does it feel unfinished?',          goto: 'unfinished' },
                    { label: 'You said you had something to show me.',   goto: 'the_plant' },
                  ],
                },
                waited: {
                  text: "Thirty years I held the other end of that thread. Longer, if you count the waiting before you came along. Zel'keth says I frown when I'm worried. I was worried the whole time you were gone — and there's no comms line into the past, so all I could do was watch the record and trust it not to thin while you weren't looking.\n\nIt didn't. You did that.",
                  options: [
                    { label: 'You could have sent someone more experienced.', goto: 'experience' },
                    { label: 'You said you had something to show me.',        goto: 'the_plant' },
                  ],
                },
                older: {
                  text: "Older. Yes. The mirror mentions it too.\n\nDon't make that face. I got to grow old inside a chain that holds — fed, certain, with a grove singing on the other side of that glass. Most of the people you just met didn't. The woman in the river valley. The ones on that road in the rain. Old is a gift the chain hands out, and not everyone in it got one. I'll take mine and not complain.",
                  options: [
                    { label: "I met them. I won't forget.",            goto: 'remember' },
                    { label: 'You said you had something to show me.', goto: 'the_plant' },
                  ],
                },
                unfinished: {
                  text: "Because nothing's at risk, and you've spent this whole journey with something always at risk. Quiet feels like a problem you haven't found yet. It isn't. Some moments you don't rescue. You just keep them.\n\nWhich brings me to why I asked you here.",
                  options: [ { label: 'Go on.', goto: 'the_plant' } ],
                },
                experience: {
                  text: "More experience. Sure. They'd have filed a cleaner report and felt none of it. The Archive has enough clerks. What a chain like this needs is someone who'll let it cost them something to carry. Your companion saw that in you before I did — that's half of why you got the post.",
                  options: [
                    { label: 'Tell me what you wanted to show me.', goto: 'the_plant' },
                    { label: 'Step back.',                          goto: '__exit__' },
                  ],
                },
                remember: {
                  text: "No. You won't. That's the difference between a record and a person who carried it — the record can't grieve, and you can. Hold onto that. It's the most useful thing an archivist owns.",
                  options: [
                    { label: 'You wanted to show me something.', goto: 'the_plant' },
                    { label: 'Step back.',                       goto: '__exit__' },
                  ],
                },
                // REVEAL — Nova speaks of the new growth and sends you to the grove.
                the_plant: {
                  text: "There's something growing in the grove. Through the glass, down where the three-who-are-one twine together.\n\nIt isn't Zhel'ii. It isn't ours, and it isn't any of the seed-stock the Concord brought up the gravity well. We ran it against every database the Archive holds and every one the Zhel'ii keep. Nothing. No parent species, no record, no name. It simply started — somewhere in the tangle where their roots and ours have shared the same water for thirty years.\n\nSomething new. Grown out of the connection itself, not out of either side of it. I've kept it until you got back. Go and see it — the Grove Viewing Area, past the inner doors. Then come and tell me it's worth keeping.",
                  revealsClue: 'nova_speaks_of_it',
                  options: [
                    { label: 'A plant from no database at all?', goto: 'no_database' },
                    { label: "I'll go and see it.",              goto: '__exit__' },
                  ],
                },
                no_database: {
                  text: "From no database at all. I argued with the machine about it for a week.\n\nYou've spent this whole chain proving that nothing in agriculture comes from nowhere — every crop has a hand behind it, a choice, a long slow line of people paying attention. And then this. The first thing I've seen in my life that nobody reached out and chose. It planted itself in the space between two peoples learning to trust each other.\n\nGo and look. I'll wait. I've gotten good at it.",
                  options: [ { label: 'Step back.', goto: '__exit__' } ],
                },
                // revisit hub (once nova_speaks_of_it found)
                after: {
                  text: "Still here? The grove's the other way, past the inner doors.\n\nBut I'm glad of the company.",
                  options: [
                    { label: 'A few more questions first.', goto: 'start' },
                    { label: 'Step back.',                  goto: '__exit__' },
                  ],
                },
              },
            },
            // ── Companion (INSIGHT) — ONE source, resolved from STATE.companionSpecies at runtime. ──
            //    First in-person meeting. Voice per species: Yvi (scientific) / Saren (archival) /
            //    Korl (cultural). companionDynamic merges bySpecies[chosen] over this base.
            companion: {
              type: 'conversation', companionDynamic: true, insight: true,
              clueTag: 'companion_present', icon: '🪶',
              bySpecies: {
                oolian: {
                  speaker: 'Yvi', personality: 'curious', label: 'Speak with Yvi',
                  learned: "Yvi: your Oolian sponsor, here in person at last — all questions and bright certainty that the journey was worth its cost.",
                  sprites: { spritesheet: 'npc/companion/oolian/spritesheet.png', spritesheetJson: 'npc/companion/oolian/spritesheet.json' },
                  revisit: 'again',
                  nodes: {
                    start: {
                      text: "You're back! You're back and you're solid and you're standing right here — I had to write my questions down, which I never do.\n\nWhat did the wild wheat smell like? Was the salt really white on the fields, or more grey? Did the air in the nitrogen man's laboratory— no. No. Start with this one: was it worth it? Not the data. You. Was it worth what it cost you?",
                      revealsClue: 'companion_present',
                      options: [
                        { label: 'It cost a lot. Yes — it was worth it.', goto: 'worth' },
                        { label: 'You vouched for me, Yvi. Why?',          goto: 'why' },
                        { label: 'Later. Let me breathe first.',           goto: '__exit__' },
                      ],
                    },
                    worth: {
                      text: "Worth it. I'm logging that — not the word, the way you said it. There's a whole grammar in how a person says “worth it” after they've earned the right to.\n\nNova thinks I sponsored you for your eye. I sponsored you because you were the only candidate who answered “I don't know” to the hard question instead of guessing. The grove's grown something none of us can name, you know. You'll like it. It's a very large “I don't know,” and it's beautiful.",
                      options: [ { label: 'Step back.', goto: '__exit__' } ],
                    },
                    why: {
                      text: "Why? Because every panel before me read your file as a risk, and I read it as a question nobody had bothered to finish asking. I dislike unfinished questions. I finished this one by betting my standing on you.\n\nI'd do it again. Go and see the grove — then come back and describe it to me in order, every detail, slowly. I've waited this long; I can wait through the back half of a sentence.",
                      options: [ { label: 'Step back.', goto: '__exit__' } ],
                    },
                    again: {
                      text: "Back already? The grove, archivist. Go and look at the grove. Then we'll talk until the station turns its lights down.",
                      options: [
                        { label: 'A moment more.', goto: 'start' },
                        { label: 'Step back.',     goto: '__exit__' },
                      ],
                    },
                  },
                },
                rhessi: {
                  speaker: 'Saren', personality: 'patient', label: 'Speak with Saren',
                  learned: "Saren: your Rhessi sponsor, keeper of every name — who left the new growth's record-line blank for you to witness first.",
                  sprites: { spritesheet: 'npc/companion/rhessi/spritesheet.png', spritesheetJson: 'npc/companion/rhessi/spritesheet.json' },
                  revisit: 'again',
                  nodes: {
                    start: {
                      text: "You came back. I had kept a place in the record for it either way — but this is the better entry to make.\n\nI have read your file more times than is reasonable. The arrivals, the clues, the moments you held. I know the shape of your whole journey on paper. What the paper doesn't have is you, standing in front of me, able to tell me the parts a report leaves out. Will you, sometime? Not now. Now you should rest. But sometime.",
                      revealsClue: 'companion_present',
                      options: [
                        { label: 'You kept my name on the rolls. Thank you.', goto: 'name' },
                        { label: 'Why did you vouch for me, Saren?',          goto: 'why' },
                        { label: 'Sometime. Let me settle first.',            goto: '__exit__' },
                      ],
                    },
                    name: {
                      text: "I keep all the names. It is the one thing my people are built for — we do not forget a harvest, or a kindness, or a debt. I entered yours the day you were posted and I have not closed the line since.\n\nThere is a new name waiting to be filed, as it happens. Out in the grove. Something grew there that has no entry anywhere, in any archive, mine or theirs. I have left the field blank for it. I thought you should be the one to see it before I decide what to write.",
                      options: [ { label: 'Step back.', goto: '__exit__' } ],
                    },
                    why: {
                      text: "Because a record is only as faithful as the one who keeps it, and I have rarely seen anyone guard a small true thing as stubbornly as you did. The board saw a risk. I saw a keeper. We were both right; you simply kept what mattered.\n\nGo to the grove. Then come and help me decide what the new entry should say. I would rather get it right than get it written.",
                      options: [ { label: 'Step back.', goto: '__exit__' } ],
                    },
                    again: {
                      text: "Still here. The grove is waiting, and I am patient enough for both of us. Go and see — the entry will keep until you have.",
                      options: [
                        { label: 'A moment more.', goto: 'start' },
                        { label: 'Step back.',     goto: '__exit__' },
                      ],
                    },
                  },
                },
                vressk: {
                  speaker: 'Korl', personality: 'stoic', label: 'Speak with Korl',
                  learned: "Korl: your Vressk sponsor, blunt and warm, who kept a place at the table the whole time you were gone.",
                  sprites: { spritesheet: 'npc/companion/vressk/spritesheet.png', spritesheetJson: 'npc/companion/vressk/spritesheet.json' },
                  revisit: 'again',
                  nodes: {
                    start: {
                      text: "Hah. You lived.\n\nSit. No — eat first, talk after; you've got the look of someone who forgot food was a thing while they were off being a ghost in other people's fields. I kept a place at the table for you the whole time. Denied it to anyone who asked, myself included. But it was yours.\n\nWas it bad? The hungry ones — the road, the famine. Don't soften it for me. I'd rather have it true.",
                      revealsClue: 'companion_present',
                      options: [
                        { label: "It was bad. I won't soften it.",          goto: 'bad' },
                        { label: 'You vouched for me, Korl. You never said why.', goto: 'why' },
                        { label: "Feed me first. Then I'll talk.",          goto: '__exit__' },
                      ],
                    },
                    bad: {
                      text: "Good. Keep it true. A people that softens its hungers forgets to feed itself.\n\nThat's why my lot judge a person by how they share a meal and nothing else — not their reports, not their rank. You went hungry in six centuries that weren't yours and came back still able to sit at a table. That's not nothing. That's the whole of it, really.\n\nThere's a strange green thing growing out in the grove. Go and look at it. Then come back, and we'll put real food in you, and you can tell me whether it's worth a place at the table.",
                      options: [ { label: 'Step back.', goto: '__exit__' } ],
                    },
                    why: {
                      text: "Why. Because the first day we met, you gave away half your plate without being asked and didn't make a speech about it. I decided then. Took me a while to say it out loud — saying warm things out loud is not a Vressk strength — but I put my name down hard when the time came.\n\nDon't thank me. Go and see the grove. The thanks is you walking back through that door, which you've done. We're square.",
                      options: [ { label: 'Step back.', goto: '__exit__' } ],
                    },
                    again: {
                      text: "Still upright? Good. The grove's that way. Go on — the table's not going anywhere, and neither am I.",
                      options: [
                        { label: 'A moment more.', goto: 'start' },
                        { label: 'Step back.',     goto: '__exit__' },
                      ],
                    },
                  },
                },
              },
            },
            // ── TAA Archive (INSIGHT) — the educational capstone: the whole human chain, intact. ──
            taa_archive: {
              type: 'archive', speaker: 'TAA Archive', insight: true,
              clueTag: 'chain_intact', icon: '📜', label: 'Query TAA Archive',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "Archive: the human chain is whole — six moments from the first chosen seed to a grove between the stars, every link stabilized. And a seventh entry is open: untraceable, unnamed, waiting in the grove.",
              nodes: {
                start: {
                  type: 'archive',
                  text: "> TAA ARCHIVE — THE HUMAN CHAIN\n>\n> integrity: WHOLE. all links holding.\n>\n> querying the walked record…",
                  revealsClue: 'chain_intact',
                  bonusInsight: true,
                  options: [
                    { label: 'Read the chain, link by link.', goto: 'chain' },
                    { label: 'Close the record.',             goto: '__exit__' },
                  ],
                },
                chain: {
                  type: 'archive',
                  text: "> THE HUMAN AGRICULTURAL CHAIN — six moments, held\n>\n>  I.   FERTILE CRESCENT · ~9,700 BCE — a wild grass taught to keep its seed. The first harvest chosen instead of found.   [STABILIZED]\n>  II.  SUMER · ~2,000 BCE — salt rising in over-watered fields; the first lesson that land can be used to death.   [STABILIZED]\n>  III. IRELAND · 1845 — one crop, one people, one blight. The cost of betting everything on a single root.   [STABILIZED]\n>  IV.  KARLSRUHE · 1909 — bread pulled from the air; nitrogen bound out of nothing.   [STABILIZED]\n>  V.   THE PLAINS · 1935 — soil that got up and walked; a dust storm to make them listen.   [STABILIZED]\n>  VI.  THE VERTICAL FARM · 2041 — a living system mistaken for a machine, and the verdict set right.   [STABILIZED]\n>\n> from the first chosen seed to a grove singing between the stars.\n> the chain is unbroken. \n> the record holds.",
                  options: [
                    { label: 'Is that the end of it?', goto: 'open' },
                    { label: 'Close the record.',     goto: '__exit__' },
                  ],
                },
                open: {
                  type: 'archive',
                  text: "> QUERY: is the chain complete?\n> RESPONSE: the chain is whole. the chain is not closed.\n>\n> a seventh entry is open, unfiled. classification: UNKNOWN.\n>   location: the grove.   \n>   origin: undetermined.   \n>   parent species: none on record.\n>\n> the Archive has never held a link it could not trace.\n> it is holding one now.\n>\n> recommendation: witness.",
                  options: [ { label: 'Close the record.', goto: '__exit__' } ],
                },
              },
            },
          },
        },
        // ── The Grove Viewing Area (anchor; Observe Grove; Stabilize present ONLY here) ──
        {
          id: 'grove_viewing',
          label: 'Grove Viewing Area',
          requires: { clueFound: 'nova_speaks_of_it' },
          lockHint: 'Nova has something to show you. Speak with her in the Briefing Chamber first.',
          anchorPoint: true,
          scene: 'scene/scene_grove_viewing.png',
          // Per-location starfield: the SSS scene_zhelii_grove window verbatim (this grove IS that
          //   grove, overgrown) — twinkle through its transparent ceiling-portal. Overrides the
          //   level's chamber window when the player is here.
          sceneWindow: { x: 65, y: 10, w: 110, h: 40, twinkle: true },
          // Living bg: the grove BREATHES — a slow crossfade between two hand-authored frames
          //   (scene_grove_viewing.png <-> scene_grove_viewing2.png, the bioluminescence lit
          //   differently) plus a soft amber glow. The same proven 2-frame mechanism as the L0
          //   Thread Console. (This is the SAME grove from SSS, now overgrown and older.) Author
          //   tunes the breathe (period/bMin/bMax) + glow in demos/grove/. Stars twinkle through
          //   the grove's ceiling-portal via this location's sceneWindow (above) — behind the PNG,
          //   masked by its alpha.
          livingBg: {
            frameB: 'scene/scene_grove_viewing2.png',
            period: 3.8, bMin: 0.0, bMax: 1.0, ease: 'sine',
            glow: { color: '#caa24a', max: 0.35, size: 82, x: 50, y: 55, phaseOffset: -0.3 },   // author-tuned
          },
          sources: {
            // ── Observe the Grove (REQUIRED) — the witness beat. Prose, 2nd person. ──
            observe_grove: {
              type: 'examination', speaker: 'The Grove',
              clueTag: 'witnessed_growth', icon: '🌱', label: 'Observe the Grove', actionLabel: 'Observe the Grove',
              sprites: { iconImg: 'UI/portrait_grove_specimen.png' },
              learned: "You witnessed it: a small new growth in the grove, grown from the connection between species — answering nothing in any record. A thing to keep, not to solve.",
              revisit: 'watch',
              nodes: {
                start: {
                  text: "You step through the inner doors and the air changes — warmer, wetter, alive. The grove fills the whole threshold, no glass between you and it now: crystalline fronds laced overhead, root-tangles breathing below, and everywhere between them the fine bright threads, each carrying a slow pulse of light along its length. The whole place keeps a rhythm, like something large and gentle drawing breath.\n\nNova comes to stand beside you. She doesn't say anything for a while. Neither do you.",
                  options: [ { label: 'Look closer at where the threads meet.', goto: 'closer' } ],
                },
                closer: {
                  image: 'UI/portrait_grove_specimen.png',
                  text: "Low in the tangle, where a Zhel'ii root and one of the Concord's own crossings have shared the same water for thirty years, something small is growing.\n\nIt is not large. A pale stem, a few leaves the colour of nothing you have a name for, a single closed bud holding a light of its own. You have spent six lifetimes learning to read what a plant is and where it came from, and this one answers none of it. Not Zhel'ii. Not human. Not any seed the Concord carried up the gravity well.\n\nIt grew here, low where the two root-systems have run together so long they have stopped being two. Not from either of them. From the place where they touch.",
                  revealsClue: 'witnessed_growth',
                  options: [ { label: 'Just watch it for a while.', goto: 'watch' } ],
                },
                watch: {
                  text: "So you watch it. The bud doesn't open. The threads pulse. Nova breathes beside you, old and unhurried.\n\nThere is nothing here to diagnose. No cause to name, no record to rescue, no wrong verdict to overturn. Only a new small living thing — the first the chain didn't plan — growing quietly at the end of everything you carried to get here.\n\nIt isn't at risk. But a moment like this should still be kept.",
                  options: [ { label: 'Stand a while longer.', goto: '__exit__' } ],
                },
              },
            },
          },
        },
      ],
      // The game-end card (consumed by showL7Ending — NOT the SSS victory screen). Lines allow
      //   light inline HTML (<i>/<b>/<span>). Nova's closing line lives here, at the grove.
      ending: {
        title: 'The Long Yield',
        button: 'Close the Record',
        lines: [
          "You keep it. Not because it would be lost otherwise — it wouldn't — but because some things are kept simply for being worth the keeping.",
          "The grove pulses once, slow and bright, and holds.",
          "Nova stands beside you a while longer. <i>“Twelve thousand years,”</i> she says at last. <i>“From a woman choosing which seed-heads to save, to a thing growing here that nobody chose at all. That's the chain, archivist. Not any one link of it. The whole long reach — every hand that fed the next.”</i>",
          "<i>“You carried it home. Go and rest now. You've earned the quiet.”</i>",
          "The thread is anchored. The record holds. The harvest is long, and it is yours.",
          "<span style=\"color:#8a8f9c\">— Hunger, Harvest, &amp; History —</span>",
        ],
      },
    },
  ],
};

// Expose for the engine / console inspection.
window.HHH_DATA = HHH_DATA;
