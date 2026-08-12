// ═══════════════════════════════════════════════════════════════════
// HUNGER, HARVEST, & HISTORY — Campaign 2 Data — "The Forward Thread"
// C2 content lives here, parallel to hhh_data.js (the SSS campaign_2_data.js
// precedent). The engine reads whichever tree is active via activeData()
// (index.html), keyed on STATE.campaign (1 | 2).
// Design source of truth: c2/HHH_C2_DESIGN_BIBLE.md + HHH_C2_IMPLEMENTATION_PLAN.md.
// C2 assets ship from c2/scene, c2/npc, c2/ui (author-locked layout).
// ═══════════════════════════════════════════════════════════════════

// ── Embedded sprite-frame data (keyed by PNG path) ──
// Same file://-safe trick as HHH_FRAMES in hhh_data.js: loadSpritesheet()
// checks here before falling back to fetch (which Chrome blocks on file://).
// Regenerate from the c2/**/spritesheet.json files if art is re-packed.
// C2 NPC sheets are added level-by-level as content lands (L1 on).
const HHH_C2_FRAMES = {
  // C2 rank badges (6 × 512² on a 1536×1024 sheet). Frame names end .jpg
  // (packed from jpgs) even though the sheet itself is a .png — match EXACTLY.
  "c2/ui/spritesheet_badges.png": [{"filename":"badge_architect_of_the_chain.jpg","frame":{"x":0,"y":0,"w":512,"h":512}},{"filename":"badge_corruption_scout.jpg","frame":{"x":512,"y":0,"w":512,"h":512}},{"filename":"badge_temporal_advocate.jpg","frame":{"x":0,"y":512,"w":512,"h":512}},{"filename":"badge_the_unforged.jpg","frame":{"x":512,"y":512,"w":512,"h":512}},{"filename":"badge_thread_surgeon.jpg","frame":{"x":1024,"y":0,"w":512,"h":512}},{"filename":"badge_trace_analyst.jpg","frame":{"x":1024,"y":512,"w":512,"h":512}}],
  // L1 NPCs — portrait is frame 0 on disk (at 0,0) → reordered here so it lands
  // LAST (engine: icon = last frame, talk anim = frames[:-1]). Sheets verified 1×
  // (384×288 matches json meta) per the badge-sheet 2× incident rule.
  "c2/npc/chinampa_farmer/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"chinampa_farmer.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  "c2/npc/codex_keeper/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"codex_keeper.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  // L2 NPCs — portrait already LAST in json order (copied as-is). Sheets verified 1× (384×288).
  "c2/npc/seed_keeper/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"seed_keeper.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "c2/npc/vavilov_archive/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"vavilov_archive.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L3 NPCs — portrait is frame 0 on disk (at 0,0) → reordered here so it lands LAST.
  // Sheets verified 1× (384×288 matches json meta). borlaug_archive uses the archive
  // treatment (archiveFigure); field_agronomist is a live conversation.
  "c2/npc/borlaug_archive/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"borlaug_archive.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  "c2/npc/field_agronomist/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"field_agronomist.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  // L4 NPC — concord_regulator. Portrait is frame 0 on disk (at 0,0) → reordered here so it
  // lands LAST (engine: icon = last frame, talk anim = frames[:-1]). Verified 1× (384×288 matches json meta).
  // Nova archive-ghost (L4 corridor) reuses the C1 npc/nova/spritesheet_unmasked sheet (embedded in HHH_FRAMES).
  "c2/npc/concord_regulator/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"concord_regulator.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
  // L5 NPCs — the three First Garden summit delegates (SSS C2 Case 6 crossover cast).
  // UNLIKE the farmer/keeper/regulator sheets, these ship with the portrait as a DISTINCT
  // frame at (288,0) and frame_000 as a genuine talk pose at (0,0) — so the natural json
  // order is ALREADY portrait-last; no coordinate reshuffle. All three verified 384×288, 10
  // frames, 96×96. Roles (from SSS Case 6): kess = the fungal-network reader, shael =
  // Vorn-Shael the chemist ("islands"), ilreth = Ilreth-Mar the reform skeptic.
  "c2/npc/delegate_ilreth/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_ilreth.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "c2/npc/delegate_kess/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_kess.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  "c2/npc/delegate_shael/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":0,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"portrait_shael.png","frame":{"x":288,"y":0,"w":96,"h":96}}],
  // L6 NPC — the ARS delegate (the saboteur; twist-only, no prior appearance). LIKE the
  // farmer/keeper/regulator sheets (and UNLIKE the summit delegates), the portrait
  // (ars_delegate.png) sits FIRST on disk at (0,0) → reordered LAST here so the engine's
  // portrait-is-last-frame convention holds. Verified 384×288 (1×), 10 frames, 96×96
  // (2026-07-13). frame_008 sits at (288,0).
  "c2/npc/ars_delegate/spritesheet.png": [{"filename":"frame_000.png","frame":{"x":96,"y":0,"w":96,"h":96}},{"filename":"frame_001.png","frame":{"x":192,"y":0,"w":96,"h":96}},{"filename":"frame_002.png","frame":{"x":0,"y":96,"w":96,"h":96}},{"filename":"frame_003.png","frame":{"x":96,"y":96,"w":96,"h":96}},{"filename":"frame_004.png","frame":{"x":192,"y":96,"w":96,"h":96}},{"filename":"frame_005.png","frame":{"x":0,"y":192,"w":96,"h":96}},{"filename":"frame_006.png","frame":{"x":96,"y":192,"w":96,"h":96}},{"filename":"frame_007.png","frame":{"x":192,"y":192,"w":96,"h":96}},{"filename":"frame_008.png","frame":{"x":288,"y":0,"w":96,"h":96}},{"filename":"ars_delegate.png","frame":{"x":0,"y":0,"w":96,"h":96}}],
};
window.HHH_C2_FRAMES = HHH_C2_FRAMES;

const HHH_C2_DATA = {
  meta: {
    title: 'Hunger, Harvest, & History',
    campaignName: 'The Forward Thread',
    universe: 'Space Sprout Sleuth',
    accent: '#e8b84a',             // TAA amber-gold (onboarding/UI — unchanged from C1)
    corrupt: '#c94ad0',            // C2 corruption signature (glitch magenta)

    // C2 rank ladder (order LOCKED per sprite spec §6 author correction 2026-07-04):
    // the player ENTERS C2 holding C1's terminal rank (index 0, badge drawn from the
    // C1 sheet), then earns one rank per level L1–L5, with the true capstone on the
    // hidden finale L6. "The Unforged" = R5 (end of L5); "Architect of the Chain" = R6.
    ranks: [
      'Keeper of the Chain',       // R0  carried over from C1 (badge on the C1 sheet)
      'Corruption Scout',          // R1  earned L1  badge_corruption_scout
      'Trace Analyst',             // R2  earned L2  badge_trace_analyst
      'Thread Surgeon',            // R3  earned L3  badge_thread_surgeon
      'Temporal Advocate',         // R4  earned L4  badge_temporal_advocate
      'The Unforged',              // R5  earned L5  badge_the_unforged
      'Architect of the Chain',    // R6  earned L6 (hidden finale)  badge_architect_of_the_chain
    ],
    // Cool slate/cyan investigation ladder warming to gold at the capstone
    // (mirrors the badge art's palette arc). R0 = C1's terminal warm gold.
    rankColors: ['#ffe6a0', '#7f9fb5', '#6cb6c9', '#4fc3d0', '#d8b45a', '#e8d090', '#f6d27a'],

    // Same personality vocabulary as C1 (engine reads GAME_DATA.personalities).
    personalities: {
      patient:      { annoyThreshold: 3, lockThreshold: 5,    recoveryOptions: true },
      professional: { annoyThreshold: 2, lockThreshold: 4,    recoveryOptions: true },
      prickly:      { annoyThreshold: 1, lockThreshold: 3,    recoveryOptions: false },
      stressed:     { annoyThreshold: 2, lockThreshold: 4,    recoveryOptions: true },
      stoic:        { annoyThreshold: 4, lockThreshold: null, recoveryOptions: true },
      curious:      { annoyThreshold: 3, lockThreshold: null, recoveryOptions: true },
    },

    // Companion roster (Oolian/Rhessi/Vressk — sprite-spec resolution of the bible's
    // "Zhel'ii"; Vressk carries the sensory/relational modality). Names carried from
    // C1 L0 (Yvi/Saren/Korl). Blurbs = the always-visible intake pop-up 1 lines
    // (Design Bible §6 Level 0). Portraits reuse the root C1 companion art.
    companions: {
      vressk: { name: 'Korl',  label: 'Vressk',
        portrait: 'npc/companion/vressk/portrait_species_vressk.png',
        blurb: 'Reads the record by feel and connection — hints come as sensed, relational observations.' },
      oolian: { name: 'Yvi',   label: 'Oolian',
        portrait: 'npc/companion/oolian/portrait_species_oolian.png',
        blurb: 'Reads by cold logic — hints come as precise, structural reasoning.' },
      rhessi: { name: 'Saren', label: 'Rhessi',
        portrait: 'npc/companion/rhessi/portrait_species_rhessi.png',
        blurb: 'Reads for deception first — hints come as sharp, adversarial suspicion.' },
    },

    // Archivist Disciplines (bible §5b) — intake pop-up 2. STRUCTURAL layer only:
    // discipline foregrounds its favored evidenceType and adds one step to its
    // blind spot (source.blindspotFor). It NEVER touches hint text (content firewall).
    disciplines: {
      provenance: { label: 'Provenance', emblem: 'c2/ui/emblem_provenance.png',
        blurb: 'You trust where a record came from.',
        tag: "<b>Strong</b> on clear-origin records" },
      forensics:  { label: 'Forensics',  emblem: 'c2/ui/emblem_forensics.png',
        blurb: 'You trust the record itself.',
        tag: "<b>Strong</b> on flaws in the artifact" },
      testimony:  { label: 'Testimony',  emblem: 'c2/ui/emblem_testimony.png',
        blurb: 'You trust the witnesses.',
        tag: "<b>Strong</b> where voices contradict the record" },
    },

    // Intake pop-up copy (TAA Field Intake — the two post-bridge choices).
    intake: {
      eyebrow: 'TAA Field Intake',
      companionTitle: 'Assign Comms Partner',
      companionCarried: '↳ Your last partner — {name} ({species}) — is still cleared for fieldwork.',
      companionCarriedPrompt: 'Reconnect, or request a different partner?',
      companionFreshPrompt: "Choose who you trust at your side.",
      companionHint: "Sets companion for the campaign.",
      disciplineTitle: 'Declare Your Discipline',
      disciplinePrompt: "How were you trained to read a record?",
      disciplineHint: "Sets how you investigate.",
    },
  },

  // ── Levels 0–6 ──
  // Same authoring shape as hhh_data.js levels (flattened by getActiveCaseData).
  // C2 additions to the shape:
  //   level.diagnosisPrompt / diagnosisConfirmLabel — Validate-the-Record framing
  //     on the (reused) diagnosis screen.
  //   level.taaCommsHints = { oolian:{low,mid,full}, rhessi:{...}, vressk:{...} }
  //     — species-keyed (the companion IS the comms voice in C2). The engine
  //     falls back to a flat {low,mid,full} shape if no species keys (C1 parity).
  //   source.evidenceType: 'provenance'|'forensics'|'testimony' — discipline
  //     foregrounding (favored sources sort first in the action grid).
  //   source.blindspotFor: '<discipline>' + nodes.disfavoredStart — the one-extra-
  //     step route when this source is the active discipline's blind spot
  //     (disfavoredStart's option(s) must goto 'start'; it never replays post-clue).
  levels: [
    // ══ LEVEL 0 — The Audit (TAA Facility, 2387) ══
    // Prologue / Validate-the-Record tutorial. Design locked with the author
    // (2026-07-05): mirrors C1 L0's shape — 2 locations, 4-clue gate (audit_briefed ·
    // audit_current · audit_logged · memo_examined); Zel'keth present; the training
    // memo pair is the player's OWN C1 field report vs a doctored copy; TAA Comms
    // (companion voice) live from L0. Closes on the boundary-crossing pattern
    // (bible §6 L0). No rank (tutorial). No translation mechanic anywhere in C2.
    // AUTHORING RULE (harness-walkable): on the clue path, the FIRST option of
    // every node advances toward that source's clue.
    {
      id: 'C2L0',
      menuName: 'The Audit',
      name: 'The Audit',
      tagline: 'The second layer',
      location: 'TAA Facility',
      date: '2387',
      briefing: "Two days ago the Archive ran a routine audit of your six stabilized threads. Standard practice. Nobody expected anything.\n\nThe re-scan came back...wrong. \n\nBeneath every repair you made there is a second layer: records that were planted, not decayed. \nSomeone was in the chain before you, and they were careful.\n\nReport to the Briefing Chamber. This time, the job is different.",
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #2a2014, #120d08)',
        bgMid:     '#1a1410',
        accent:    '#e8b84a',
        highlight: '#fff3d6',
      },
      sprites: {
        scene: 'scene/scene_taa_briefing.png',   // reused C1 TAA chamber (sprite spec §1 L0)
      },
      sceneWindow: { x: 5, y: 70, w: 226, h: 108 },
      resolveLabel: 'Validate the Record',
      resolveNag: 'The audit is incomplete',
      diagnosisPrompt: 'Which record is genuine?',
      diagnosisConfirmLabel: 'Validate',
      hideResolveOffAnchor: true,
      ranksUp: false,                            // tutorial — no rank earned
      teaches: {
        // C2 vets know the base UI — L0 teaches only what's NEW.
        onInvestigationStart: { target: '#action-grid', delay: 1400,
          note: "Your <b>discipline</b> orders the evidence: favored sources surface first." },
        onCommsAvailable: { target: '.call-home-btn',
          note: "TAA Comms now reaches <b>your companion</b> — their voice, their way of seeing the record. One call per thread." },
      },
      // Species-keyed companion hints (bible §5.2 — three different KINDS of
      // observation, not rewordings; Oolian authored first as the baseline truth).
      taaCommsHints: {
        oolian: {
          low:  "Yvi: \"Sequence your inputs. Nova holds the audit result, the log holds the signature analysis, Zel'keth holds the anomaly's shape. Collect all three before you touch the memos.\"",
          mid:  "Yvi: \"Two documents, one claimed author. Compare their correction rates. A working record accumulates amendments at a measurable rate — one of these has a rate of zero. That is not precision. That is composition after the fact.\"",
          full: "Yvi: \"You hold everything. The flawless copy is structurally impossible; the amended copy matches your own logged behavior. Validate the record that carries its errors.\"",
        },
        rhessi: {
          low:  "Saren: \"Someone salted your own file and waited to see if you'd notice. Don't rush the memos — hear the room first. Nova. The log. The old one.\"",
          mid:  "Saren: \"Look at the untouched copy. No hesitations, no amendments, custody like polished glass. Nobody works that clean. Clean is a choice — and it was made for you.\"",
          full: "Saren: \"You already know. The pristine copy is bait. Validate the report with your own scratched-out mistakes in it. Nobody forges hesitation.\"",
        },
        vressk: {
          low:  "Korl: \"This room is holding its breath. Let each voice settle before you go to the console — Nova's worry, Zel'keth's listening, the log's cold account.\"",
          mid:  "Korl: \"I keep reaching toward the two memos and only one reaches back. The amended one breathes — it remembers being written. The other is sealed shut. Grown nowhere.\"",
          full: "Korl: \"Trust the one that breathes. The seamless copy was never alive. Validate the record that remembers your hand.\"",
        },
      },
      locations: [
        {
          id: 'briefing_chamber',
          label: 'Briefing Chamber',
          requires: null,
          anchorPoint: false,
          sources: {
            // ── Nova — the audit findings + the new assignment (REQUIRED) ──
            nova: {
              type: 'conversation', speaker: 'Nova', personality: 'patient',
              evidenceType: 'testimony',
              clueTag: 'audit_briefed', icon: '🧑', label: 'Speak to Nova', actionLabel: 'Speak to Nova',
              learned: "Nova: the audit found a second corruption layer beneath your own repairs. It was planted and deliberate. The new job is to Validate, not Stabilize.",
              sprites: { spritesheet: 'npc/nova/spritesheet_unmasked.png', spritesheetJson: 'npc/nova/spritesheet_unmasked.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "There you are. I'd say welcome back Keeper, but I don't have the luxury of pleasantries today.\n\nWe audited your six previous threads. Routine. I signed the order myself expecting six clean scans and an early evening.",
                  options: [
                    { label: 'What did the audit find?',   goto: 'findings' },
                    { label: "It's good to see you too, Nova.", goto: 'warm' },
                  ],
                },
                findings: {
                  text: "Under every repair you made, there's a second layer. Records we didn't know were there, like the floor under a rug.\n\nDecay doesn't stack. Decay thins. These were placed. Complete, plausible, professionally made. And every one of them false.",
                  options: [
                    { label: "So the fraying we fought was a cover?", goto: 'deliberate' },
                    { label: 'Who could even do that?',              goto: 'who' },
                  ],
                },
                deliberate: {
                  text: "That's my read. Whoever did this wanted the forgeries FOUND, standing alone as the only surviving record.\n\nWhich changes your job. Previously you filled gaps. There are no gaps now. \n\nEvery flagged record looks finished. Your work is deciding which finished is true.",
                  options: [
                    { label: 'Then how do I start?', goto: 'task' },
                    { label: "Who could even do that?!", goto: 'who' },
                  ],
                },
                task: {
                  text: "You start with what you'd know better than anyone: your own files.\n\nThe audit flagged a duplicate of your first field report. Two copies, both claiming to be yours. \nThe Thread Console has the pair loaded. Read the audit log first, and hear Zel'keth.\n\nWhen you've seen everything, Validate the Record at the console. Show that the Archive can still tell truth from forged lies.",
                  revealsClue: 'audit_briefed',
                  endsConversation: true, exitLabel: 'On it.',
                },
                // ── Optional flavor (no clue) ──
                warm: {
                  text: "...It is. Good to see you, I mean. Thirty years in this facility and you're the first field archivist I've briefed twice.",
                  options: [
                    { label: "What did the audit find?", goto: 'findings' },
                  ],
                },
                who: {
                  text: "Unknown. And that's the part that keeps me up.\n\nThis took years of access and the discipline to bury the work.\n\nWhoever they are, they weren't angry. They were CERTAIN.",
                  options: [
                    { label: "So how do I find them?", goto: 'task' },
                  ],
                },
                revisit: {
                  text: "The console has your memo pair whenever you're ready. Log, Zel'keth, then Validate. Trust your own hand.",
                  endsConversation: true, exitLabel: 'Back to work.',
                },
              },
            },
            // ── Zel'keth — the pattern in the flagged nodes (REQUIRED) ──
            zelketh: {
              type: 'conversation', speaker: "Zel'keth", personality: 'curious',
              evidenceType: 'testimony',
              clueTag: 'audit_current', icon: '👽', label: "Hear Zel'keth",
              learned: "Zel'keth: the flagged nodes are not random — every one sits where agricultural knowledge crossed a boundary. Hand to hand, people to people, worlds to worlds.",
              sprites: { alienPortrait: 'portrait_alien_neutral.png', alienIcon: 'portrait_alien_neutral.png' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "Come stand by me a moment — the chorus is loud tonight and your quiet helps.\n\nWe have been listening to the flagged records along the deep current. There is something Nova's instruments will not show her.",
                  options: [
                    { label: 'What did you hear?',            goto: 'pattern' },
                    { label: "How does a forgery...sound?",  goto: 'texture' },
                    { label: "Are you alright?",    goto: 'worry' },
                    { label: 'Step back.',                    goto: '__exit__' },
                  ],
                },
                pattern: {
                  text: "The flagged nodes are not scattered.\n\nEvery buried forgery sits at a crossing place. A moment where the knowledge of growing things passed over a boundary — hand to hand, village to village, your people to mine. \n\nFive nodes, five crossings. Random damage does not choose so carefully.\n\nSomeone is picking the crossings themselves.",
                  revealsClue: 'audit_current',
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Noted. And felt.',        goto: '__exit__' },
                  ],
                },
                // ── Optional flavor (no clue) ──
                texture: {
                  text: "Like a grafted branch, before the bark closes. The tree accepts it. The sap runs.\n\nA true record breathes with the records around it. These do not breathe. They hold their breath, forever. It is very well done and it makes my skins crawl.",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.',              goto: '__exit__' },
                  ],
                },
                worry: {
                  text: "You asked! Thirty years and Nova has never once asked. She frowns instead, which I have learned to accept as her dialect.\n\nWe are... unsettled. My people do not forget — it is why the Archive trusts us. To learn that someone has been quietly forging the record to lie... it is like being told your own memory has a stranger living in it.\n\nFind them.",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.',              goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "Whatever you validate at that console, remember: the target was the places where knowledge moves between us.",
                  endsConversation: true, exitLabel: 'I will.',
                },
              },
            },
            // ── The audit log — signature analysis (REQUIRED; provenance evidence;
            //    the FORENSICS blind spot: a custody ledger, not an artifact) ──
            audit_log: {
              type: 'archive', speaker: 'TAA Records',
              evidenceType: 'provenance',
              blindspotFor: 'forensics',
              clueTag: 'audit_logged', icon: '📜', label: 'Read the Audit Log',
              learned: "Audit log: the buried layer reads non-random and expert — five nodes, one hand. \n\nCustody of the audit itself is verified end to end.",
              nodes: {
                disfavoredStart: {
                  text: "Columns of transfer stamps, shelf assignments, signatures. No artifact to hold, no material to read. Just the long ledger of who touched what, and when.\n\nYou were trained to interrogate the object itself. This is not that.",
                  options: [
                    { label: 'Work through the ledger anyway.', goto: 'start' },
                  ],
                },
                start: {
                  text: "TEMPORAL AGRICULTURAL ARCHIVE — AUDIT 7-KILO\n\nSCOPE: post-stabilization re-scan, human chain, threads 1–6.\nEXPECTED: residual decay within tolerance.\nFOUND: secondary record beneath the stabilized chain.\nDEPTH: consistent. \nAGE: falsified to match.\n\nSTATUS: chain integrity UNVERIFIED pending field review.",
                  options: [
                    { label: 'Open the signature analysis.', goto: 'signature' },
                    { label: "How were the forgeries found at all?", goto: 'method' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
                signature: {
                  text: "ANALYSIS — INSERTION SIGNATURE\n\nPattern: NON-RANDOM. Five insertions, one hand.\nTarget profile: nodes of knowledge TRANSFER (flagged for field confirmation).\nIntent classification: not vandalism. Replacement.\n\nNOTE: audit custody chain verified end to end — this log may be trusted.",
                  revealsClue: 'audit_logged',
                  options: [
                    { label: 'Back to the summary.', goto: 'start' },
                    { label: 'Close the record.',    goto: '__exit__' },
                  ],
                },
                // ── Optional flavor (no clue) ──
                method: {
                  text: "METHOD NOTE\n\nThe buried layer was invisible to every scan. It surfaced only in the DIFFERENTIAL audit — comparing each record against the custody history of the shelf that holds it.\n\nA record can be forged. The long boring ledger of who carried it, catalogued it, and complained about it, is much harder to fake.",
                  options: [
                    { label: 'Back to the summary.', goto: 'start' },
                    { label: 'Close the record.',    goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        {
          id: 'thread_console',
          label: 'Thread Console',
          requires: { clueFound: 'audit_briefed' },   // unlocks once Nova assigns the memo pair
          lockHint: "Take Nova's briefing first.",
          anchorPoint: true,                          // Validate the Record resolves here
          // Living background — reuses C1 L0's author-tuned console block verbatim
          // (2-frame breathe + blue glow + thread shimmer; `activate` plays as the
          // thread-forward burst when the validated level transitions out).
          scene: 'scene/scene_taa_console.jpg',
          livingBg: {
            frameB: 'scene/scene_taa_console1.jpg',
            period: 5.5, bMin: 0.44, bMax: 1.0, ease: 'sine',
            glow: { color: '#1461d8', max: 0.50, size: 44, x: 51, y: 38, phaseOffset: -0.5 },
            shimmer: { color: '#8fd8ff', count: 50, speed: 25, colX: 51, colW: 16, top: 5, bottom: 72, size: 2.5, max: 0.35, blur: 8.0, wobble: 8.0 },
            activate: { settle: 0.45, duration: 3.5, startPeriod: 0.7, endPeriod: 0.06, pulseSharpness: 0.2, endBOpacity: 0.70, endGlowOpacity: 0.40, ease: 'accel', particleBoost: 5.0, flash: 0.75 },
          },
          sources: {
            // ── The memo pair — the training Validate (REQUIRED; forensics evidence;
            //    the TESTIMONY blind spot: documents with no one to ask) ──
            memo_pair: {
              type: 'archive', speaker: 'Thread Console',
              evidenceType: 'forensics',
              blindspotFor: 'testimony',
              clueTag: 'memo_examined', icon: '📄', label: 'Examine the Memo Pair', actionLabel: 'Examine the Memo Pair',
              sprites: { iconImg: 'c2/ui/portrait_memo_pair.png' },   // §3 audit — author-generated 2026-07-13 (emoji kept as graceful fallback)
              learned: "The memo pair: the genuine report keeps your amendments — a re-logged timestamp, a crossed-out coordinate. A 'flawless' copy.",
              nodes: {
                disfavoredStart: {
                  text: "Two records under glass, and no one to ask. No witness to read, no voice to catch out — the dead pages simply sit there, keeping whichever secrets they keep.\n\nYou were trained to question people. This will have to be questioned another way.",
                  options: [
                    { label: 'Read them anyway.', goto: 'start' },
                  ],
                },
                start: {
                  type: 'terminal',
                  text: "> RECORD COMPARISON — FLAGGED PAIR\n> SUBJECT: FIELD REPORT, THREAD 1 (FERTILE CRESCENT)\n> AUTHOR OF RECORD: you.\n>\n> COPY A — recovered from primary shelf. Complete. Pristine.\n> COPY B — recovered from working archive. Complete. Amended.\n>\n> ONE IS YOUR REPORT. \n> ONE IS NOT.",
                  options: [
                    { label: 'Compare the two copies.',  goto: 'compare' },
                    { label: "Check the chain of custody.", goto: 'trail' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                compare: {
                  text: "You lay the copies side by side and read your own handwriting twice.\n\nCopy A is beautiful. Every entry complete, every coordinate exact, your signature clean on every page. \n\nCopy B is messier: a timestamp struck through and re-logged, a margin note correcting a grain count, one coordinate crossed out.\n\nYou remember second-guessing that anchor point. You remember it taking three tries.",
                  revealsClue: 'memo_examined',
                  teach: { target: '#diagnose-btn', note: 'When the audit is complete: <b>Validate the Record</b> here — judge which finished record is the true one.' },
                  options: [
                    { label: 'Check their custody trails.', goto: 'trail' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                trail: {
                  type: 'terminal',
                  text: "> CUSTODY COMPARISON\n> COPY A: intake → catalogue → shelf. Three stamps, flawless, evenly spaced.\n> COPY B: intake → catalogue → RECALLED (your request, mid-mission) → re-filed → shelf. Five stamps, one smudged.\n>\n> ARCHIVIST NOTE: you did recall this report once. You needed to fix the grain count.",
                  options: [
                    { label: 'Compare the two copies.', goto: 'compare' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      // Candidate records — the Validate-the-Record reframe of the diagnoses array
      // (one genuine, the rest forgeries whose hint names the tell).
      diagnoses: [
        { label: 'Copy A — the pristine report: no amendments, immaculate custody, your signature clean on every page.',
          isCorrect: false,
          hint: 'Your signature — but not your habits. You amend. You re-log. You cross things out. A field report with no seams was not written in the field; it was composed afterward, by someone who needed it believed.' },
        { label: 'Copy B — the working report: a re-logged timestamp, a corrected grain count, one crossed-out coordinate.',
          isCorrect: true },
        { label: 'Neither — both copies are forgeries, planted to discredit the audit itself.',
          isCorrect: false,
          hint: "Tempting — the saboteur would love that. But the audit's custody chain verifies against live systems, and Copy B's amendments match your own logged field habits. Doubt everything and you validate nothing. Pick the record that carries its history." },
      ],
      explanation: {
        title: 'The Record Validates',
        body: "Copy B holds. The pristine copy was complete, professional, internally coherent — and false. That is the shape of the enemy now. Finished-looking things, and the judgment to tell which finished thing is true.\n\nZel'keth heard the rest of it: five buried forgeries, five crossing places — every flagged node a moment where the knowledge of growing things passed over a boundary. Someone is unpicking the crossings.\n\nThe first flagged node anchors in a lake city of floating gardens. Tenochtitlan. The year 1487. Validate carefully.",
        funFact: "Authenticating documents is a real science with a name: diplomatics, founded in 1681 when Jean Mabillon published rules for telling genuine charters from forgeries. Modern examiners still treat 'too clean' as a warning sign — genuine working records accumulate corrections, and forgeries rarely do.",
      },
    },

    // ══ LEVEL 1 — The Floating Gardens (Tenochtitlan, 1487) ══
    // Design locked with the author (2026-07-06): PROGRESSIVE CHAIN — Chinampa Field
    // (open) → farmer's testimony unlocks the Lake Causeway → the engineered salinity
    // separation unlocks the Codex House (anchor). 4-clue gate (gardens_thriving ·
    // soil_alive · salinity_engineered · harvest_counted); the forged Collapse
    // Account is an OPTIONAL insight source (bonus, no gate) carrying provenance's
    // blind-spot beat ("a forgery born clean"). Third Validate candidate =
    // OVERCORRECTION ("the lake never degraded") — its hint teaches the real, later
    // colonial-drainage harm. Water shimmer reuses C1's fx.water system with the
    // generated 240×280 masks (params are feel-pass tunables). Rank: Corruption Scout.
    // Connection seed (bible): optional farmer node echoes floating-forest resonance.
    {
      id: 'C2L1',
      menuName: 'Floating Gardens',
      name: 'The Floating Gardens',
      tagline: 'A triumph recast',
      location: 'Tenochtitlan',
      date: '1487',
      briefing: "The first flagged node. Tenochtitlan — a city built on a lake, feeding itself from gardens built on the water.\n\nThe buried record says these gardens killed the valley: salt in the plots, fouled canals, a system that farmed itself to death. If that account stands, every water-borne and closed-loop growing lineage that follows loses its ancestor.\n\nYou are at the gardens themselves. \nWitness what they actually were. \nThen judge the record that says otherwise.",
      palette: {
        bg:        'radial-gradient(circle at 50% 35%, #1a2a22, #0c1410)',
        bgMid:     '#121a14',
        accent:    '#e8b84a',
        highlight: '#fff3d6',
      },
      sprites: {
        scene: 'c2/scene/scene_chinampa_field.jpg',
      },
      resolveLabel: 'Validate the Record',
      resolveNag: 'The evidence is incomplete',
      diagnosisPrompt: 'Which record is genuine?',
      diagnosisConfirmLabel: 'Validate',
      ranksUp: true,                       // first C2 promotion: Keeper of the Chain → Corruption Scout
      rankUpText: "Corruption Scout. You have met a forgery in the field and named it false.",
      teaches: {},                         // nothing new to teach — every C2 mechanic debuted in L0
      taaCommsHints: {
        oolian: {
          low:  "Yvi: \"Work the chain in order. The farmer can attest the yields, the causeway shows you the water management, and the codex house holds the written record. Testimony, mechanism, documentation — collect all three layers.\"",
          mid:  "Yvi: \"The collapse account requires salt in the plots. But you have seen the waterworks: the builders separated brackish from fresh by design. A system cannot die of the poison it was engineered to exclude. One premise is false — find which record carries it.\"",
          full: "Yvi: \"Complete. The codex documents generations of stable harvests from named plots; the collapse account names none. Validate the record with the receipts. The collapse it describes belongs to a later century and other hands.\"",
        },
        rhessi: {
          low:  "Saren: \"A record that recasts a triumph as a disaster wasn't written to inform — it was written to teach a lesson someone wanted taught. Before you read it, see the gardens with your own eyes. Make the forger argue with your feet.\"",
          mid:  "Saren: \"Notice what the collapse account doesn't do: it names no plots, no seasons, no keepers. Specifics can be checked. Nobody forges what can be checked — they forge the summary. The codex is nothing BUT specifics.\"",
          full: "Saren: \"You have it. The account is a verdict in search of evidence; the codex is evidence that never needed a verdict. Validate the codex, and remember this move — recasting your triumph as your crime. You'll see it again.\"",
        },
        vressk: {
          low:  "Korl: \"The gardens are loud with living — mud, roots, water moving where it is told. Listen to the place before the paper. Whatever the record claims, the ground itself is a witness.\"",
          mid:  "Korl: \"The soil in your hands was alive. The account says this ground is dead salt. Both cannot be true, and only one of them ever breathed.\"",
          full: "Korl: \"Validate the codex. It grew here — season into season, hand into hand, like the gardens themselves. The collapse account was grown nowhere. You know that texture by now.\"",
        },
      },
      locations: [
        // ── 1 · The Chinampa Field (open at start) ──
        {
          id: 'chinampa_field',
          label: 'Chinampa Field',
          requires: null,
          anchorPoint: false,
          locationFx: {
            // Canal shimmer — clipped to the generated canal mask.
            // AUTHOR-TUNED 2026-07-06 in c2/resources/demos/locationfx/lvl1.html.
            water: { mask: 'c2/scene/scene_chinampa_field.mask.png', invert: false, amplitude: 0.75, wavelength: 16, speed: 0.65, glintColor: '#cfe6da', glintOpacity: 0.10, glintSpeed: 1.10 },
          },
          sources: {
            // Xochitl — the human who can attest the gardens thrive (REQUIRED)
            farmer: {
              type: 'conversation', speaker: 'Xochitl', personality: 'patient',
              evidenceType: 'testimony',
              clueTag: 'gardens_thriving', icon: '🌽', label: 'Speak to the Farmer', actionLabel: 'Speak to the Farmer',
              learned: 'Xochitl: the plots yield several harvests a year and never rest — canal mud re-laid each season feeds them continuously. The gardens are thriving, not failing.',
              sprites: { spritesheet: 'c2/npc/chinampa_farmer/spritesheet.png', spritesheetJson: 'c2/npc/chinampa_farmer/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "A woman looks up from the plot's edge, arms full of cut amaranth.\n\n\"You walk like a tax counter but you look at the plants. Ask, stranger. The gardens like being asked about.\"",
                  options: [
                    { label: 'How much do these gardens yield?', goto: 'yields' },
                    { label: "How is land built on a lake!?",     goto: 'built' },
                    { label: "Gardens grown on living water...?",   goto: 'resonance' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                yields: {
                  text: "\"Yield?\" She laughs, and gestures the length of the canal. Plot after plot after plot, green to the haze.\n\n\"This plot gave maize in spring. Beans stand in it now. Squash after, then amaranth, and it will not rest, because it does not need to. Each season we lift new mud from the canal floor and lay it on. The water keeps making soil and we keep taking it. My grandmother worked this same plot. And it was not young when she had it back then.\"\n\n\"Walk the causeway if you doubt me. Look how far the green goes. And look at the gates. The ones that keep our water sweet.\"",
                  revealsClue: 'gardens_thriving',
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: "I'll walk the causeway.", goto: '__exit__' },
                  ],
                },
                // ── Optional flavor (no clue) ──
                built: {
                  text: "\"Reeds first — a woven fence in the shallows, staked to the lakebed. Then mud and water-weed, layer over layer, until the land stands above the water. Willows at the corners; their roots hold what we built.\"\n\n\"People say we found this land. We didn't. We MADE it. There is a difference, and the difference is everything my people know.\"",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                // The bible's buried connection seed — resonance only, never a reference.
                resonance: {
                  text: "You watch the plots ride the water. Rooted, fed by it, part of it. Forests coaxed to grow on living water, tended the same patient way.",
                  options: [
                    { label: 'I have other questions for the farmer.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "Xochitl nods at you over the amaranth. \"Still asking? Good. The causeway is that way, and the record-keepers are past it in the city.\"",
                  endsConversation: true, exitLabel: 'Back to work.',
                },
              },
            },
            // The soil itself — alive, layered, unsalted (REQUIRED)
            soil: {
              type: 'examination', speaker: 'The Soil', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'soil_alive', icon: '🌱', label: 'Examine the Soil',
              sprites: { iconImg: 'c2/ui/portrait_chinampa_soil.png' },
              learned: "The plot soil is layered lake mud and green matter, actively cycling nutrients. It carries no salt crust at all. This ground is alive.",
              nodes: {
                start: {
                  text: "You crouch at the plot's edge and work your fingers into the ground. Dark, wet, dense with fiber. A maize root crosses your palm, and under it a paler stripe of older mud, and under that another, like layers that grow.\n\nLayers. This land is made of seasons.",
                  options: [
                    { label: 'Run the TAA soil probe.', goto: 'probe' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                probe: {
                  type: 'terminal',
                  text: "> TAA FIELD PROBE — chinampa plot, surface to 40cm\n  composition: layered lacustrine mud · decomposing green matter\n  nutrient cycle: ACTIVE (continuous replenishment)\n  salinity: none detected\n\n  verdict: soil is accruing fertility, not losing it",
                  revealsClue: 'soil_alive',
                  options: [
                    { label: 'Brush off your hands and step back.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 2 · The Lake Causeway (unlocks on the farmer's testimony) ──
        {
          id: 'lake_causeway',
          label: 'Lake Causeway',
          requires: { clueFound: 'gardens_thriving' },
          lockHint: "Hear the farmer out and find why she keeps pointing to the causeway.",
          anchorPoint: false,
          scene: 'c2/scene/scene_lake_causeway.jpg',
          locationFx: {
            // Open-lake shimmer — broader than the canals.
            // AUTHOR-TUNED 2026-07-06 in c2/resources/demos/locationfx/lvl1.html.
            water: { mask: 'c2/scene/scene_lake_causeway.mask.png', invert: false, amplitude: 1.25, wavelength: 32, speed: 1.00, glintColor: '#c9dde6', glintOpacity: 0.08, glintSpeed: 0.75 },
          },
          sources: {
            // The engineered brackish/fresh separation (REQUIRED)
            waterworks: {
              type: 'examination', speaker: 'The Waterworks', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'salinity_engineered', icon: '🌊', label: 'Survey the Waterworks',
              sprites: { iconImg: 'c2/ui/portrait_waterworks.jpg' },   // §3 portrait audit — author-generated
              learned: "The lake is managed: a long dike and gated sluices hold the brackish eastern water apart from the spring-fed west. \n\nThe salinity the collapse account blames was engineered OUT, on purpose.",
              nodes: {
                start: {
                  text: "From the causeway's height the lake stops being water and becomes a system. A long earthwork runs across the open lake to the east, low and deliberate, pierced by wooden gates. On this side of it the water sits clear over pale sand; beyond it, the eastern reach shows a different color entirely: grey-green brackish shallows.\n\nA gate crew is working one of the sluices as you watch, timing it against the wind.",
                  options: [
                    { label: 'Run the TAA overlay on the dike.', goto: 'overlay' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                overlay: {
                  type: 'terminal',
                  text: "> TAA HYDROLOGY OVERLAY — lake basin\n  east basin: brackish (natural mineral inflow)\n  west basin: fresh (spring-fed, garden side)\n  separation: artificial dike + managed sluice gates\n  gradient: MAINTAINED — salt held off the growing water by design\n\n  The collapse account requires salt to have crept into the plots. \n  The builders are standing right here, holding the salt out.",
                  revealsClue: 'salinity_engineered',
                  options: [
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
              },
            },
            // Canoe traffic — surplus made visible (OPTIONAL insight)
            canoes: {
              type: 'examination', speaker: 'The Lake Traffic', personality: 'stoic', insight: true,
              evidenceType: 'testimony',
              clueTag: 'surplus_seen', icon: '🛶', label: 'Watch the Canoe Traffic',
              sprites: { iconImg: 'c2/ui/portrait_canoe_traffic.jpg' },   // §3 portrait audit — author-generated
              learned: 'Insight: an unbroken stream of canoes hauls produce toward the city markets — the surplus of a system that feeds a capital, not one collapsing.',
              nodes: {
                start: {
                  text: "You count canoes for a while and give up. They move in both directions along the garden canals and out across the open water. A supply line with no beginning and no end.\n\nThis is a city being fed by its lake the way it has been every morning for longer than anyone on those canoes remembers.",
                  revealsClue: 'surplus_seen',
                  bonusInsight: true,
                  options: [
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 3 · The Codex House (unlocks on the waterworks; ANCHOR) ──
        {
          id: 'codex_house',
          label: 'Codex House',
          requires: { clueFound: 'salinity_engineered' },
          lockHint: 'See the waterworks from the causeway first — know the system before you judge its record.',
          anchorPoint: true,
          scene: 'c2/scene/scene_codex_house.jpg',
          sources: {
            // The harvest codex — centuries of counted harvests (REQUIRED)
            codex: {
              type: 'examination', speaker: 'The Harvest Codex', personality: 'stoic',
              evidenceType: 'provenance',
              clueTag: 'harvest_counted', icon: '📖', label: 'Read the Harvest Codex',
              sprites: { iconImg: 'c2/ui/portrait_harvest_codex.png' },
              learned: 'The harvest codex: plot-by-plot, season-by-season counts, generations deep — the same named gardens, yielding steadily, in an unbroken painted record.',
              nodes: {
                start: {
                  text: "The keeper sets the screenfold open before you, fold after fold after fold. Painted glyphs in ordered rows: plot signs, day signs, tally marks in red and turquoise.\n\nIt takes you a moment to understand what you're holding. It is a LEDGER. \nNamed plots, counted seasons, running totals. Reaching back further than you care to keep looking.",
                  options: [
                    { label: 'Cross-reference it with the TAA record.', goto: 'crossref' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                crossref: {
                  type: 'terminal',
                  text: "> TAA CROSS-REFERENCE — harvest codex\n  structure: plot-level tallies, continuous succession of keepers\n  span: multi-generational, unbroken\n  trend: yields stable to RISING across the whole span\n  custody: kept in place, hand to hand, no gaps\n\n  A record that grew season by season, in many hands, over generations.",
                  revealsClue: 'harvest_counted',
                  options: [
                    { label: 'Close the codex gently and step back.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The tlacuilo — keeper of the records (OPTIONAL insight)
            keeper: {
              type: 'conversation', speaker: 'The Tlacuilo', personality: 'professional', insight: true,
              evidenceType: 'testimony',
              clueTag: 'keeper_heard', icon: '🖌', label: 'Speak to the Keeper',
              learned: 'Insight: the tlacuilo counts every harvest three times — field, canoe, and market — and paints only what agrees. Accuracy here is a sacred profession.',
              sprites: { spritesheet: 'c2/npc/codex_keeper/spritesheet.png', spritesheetJson: 'c2/npc/codex_keeper/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"You may ask. Touch nothing wet.\"",
                  options: [
                    { label: 'How are the harvests recorded?', goto: 'method' },
                    { label: 'Could a false count enter this house?', goto: 'false_count' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                method: {
                  text: "\"Counted three times. Once at the plot, by the one who grew it. Once at the canoe, by the one who carries it. Once at the market, by the one who receives it. I paint what all three agree on, and when they do not agree, I paint nothing and someone walks back to the field to count again.\"\n\n\"A record is not what happened. It is what three honest counts agree happened. That is better.\"",
                  revealsClue: 'keeper_heard',
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                false_count: {
                  text: "\"Once. A market man painted his own tally, fat as he wished it. It disagreed with the field and the canoe, so it was found in a day.\" He taps the open codex. \"A lie can be painted. It cannot be made to AGREE. Remember that, whoever you are.\"",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "The tlacuilo tips his brush toward the table where the records lie. \"They are all there. They were counted carefully.\"",
                  endsConversation: true, exitLabel: 'Leave him to his work.',
                },
              },
            },
            // The forged Collapse Account — OPTIONAL insight; provenance's blind spot
            // ("a forgery born clean" — its pedigree is exactly what provenance trusts).
            collapse_record: {
              type: 'examination', speaker: 'The Collapse Account', personality: 'stoic', insight: true,
              evidenceType: 'forensics',
              blindspotFor: 'provenance',
              clueTag: 'collapse_read', icon: '📄', label: 'Read the Collapse Account',
              sprites: { iconImg: 'c2/ui/portrait_collapse_account.png' },   // §3 portrait audit — replaces the borrowed L6 forgery portrait
              learned: "Insight: the collapse account is beautifully made and cites nothing — no plot names, no seasons, no keepers. \n'The gardens' failed, it says. \nEvery REAL record in this house names its gardens.",
              nodes: {
                disfavoredStart: {
                  text: "Its shelf history is immaculate. Catalogued, cross-listed, in the right basket in the right room — a pedigree so clean you catch yourself trusting it before it's open.\n\nWhich is exactly the habit you were trained into. You make yourself slow down and read the thing itself.",
                  options: [
                    { label: 'Read it on its own merits.', goto: 'start' },
                  ],
                },
                start: {
                  text: "The account is beautiful. Correct bark paper, correct pigments, a fine certain hand: salt creeping into the plots, canals gone foul, the gardens failing the valley they fed.\n\nYou read it twice before you notice what is missing. No plot signs. No day signs. No keeper's mark. Every garden in it is just 'the gardens.' \n\nIn a house where every true record you've touched names its plots like children, this one forgot!",
                  revealsClue: 'collapse_read',
                  bonusInsight: true,
                  options: [
                    { label: 'Set it down and step back.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      // Candidate records — the forged collapse, the genuine ledger, and the
      // overcorrection (author-locked: its hint teaches the REAL later harm).
      diagnoses: [
        { label: 'The Collapse Account — salt crept into the plots, the canals fouled, and the gardens farmed the valley to death.',
          isCorrect: false,
          hint: "The soil carries no salt; the builders hold the brackish water out by engineered design. Plots were yielding the morning you arrived. The account describes the one thing this system was built to prevent and currently does prevent." },
        { label: 'The Harvest Codex — named plots, counted seasons, generations of tallies from the same living gardens, still rising.',
          isCorrect: true },
        { label: 'The Untouched Lake — the valley’s waters never suffered at all; the gardens were simply perfect, forever.',
          isCorrect: false,
          hint: 'Too far the other way. The lake DID suffer — centuries later, drained and dried by colonial engineering, long after these gardens had proven themselves. A record that erases the real harm is as false as one that invents a false one. Validate what happened, not what flatters.' },
      ],
      explanation: {
        title: 'The Record Validates',
        body: "The Harvest Codex holds. The gardens were a triumph — made land, managed water, soil that grew richer the harder it worked. Because lake systems CAN fail, it is the best forgeries which borrow real fears.\n\nPlots on living water, nutrients in a closed loop: this knowledge crosses generations, crosses cultures, and one day crosses worlds. Cut the ancestor and every descendant weakens.\n\nThe thread pulls forward — toward a frozen city under siege, and a locked door full of seeds.",
        funFact: "Chinampas are real, and they still work: farmers in Xochimilco, on the surviving southern lakes of Mexico City, farm plots whose design is seven centuries old — now a UNESCO World Heritage system studied as a model for sustainable urban agriculture. The valley's lakes were ultimately lost not to farming but to post-conquest drainage projects.",
      },
    },

    // ══ LEVEL 2 — The Seeds They Kept (Leningrad, 1941) ══
    // THE DIFFICULTY SPIKE + EMOTIONAL PEAK (bible: restraint and dignity — the
    // sacrifice, not spectacle). Design locked with the author (2026-07-06):
    // STREET-FIRST COLD OPEN (arrive on the besieged street; vault open off it;
    // the keeper's testimony unlocks the Institute Office = anchor); 6-CLUE GATE
    // (siege_witnessed required since the 2026-08-12 remediation — it gates the vault) —
    // the forged Consumption Report is REQUIRED reading this time (the level's
    // thesis: stare at the finished record and realize the finished one is the lie);
    // its internal tell: it cites Vavilov as present at the siege. 3rd candidate =
    // THE SURVIVAL COMPROMISE ("they ate some") — the most human wrong answer.
    // Blind spot: forensics (the report is materially PERFECT) — completing the
    // L0(testimony)/L1(provenance)/L2(forensics) arc: every discipline has now met
    // its blind spot. New FX: full-frame snow (street; author-specced, no mask) +
    // desk lamp (office). Vavilov = recovered archive figure (archiveFigure
    // treatment). Rank: Trace Analyst.
    {
      id: 'C2L2',
      menuName: 'The Seeds They Kept',
      name: 'The Seeds They Kept',
      tagline: 'What they would not eat',
      location: 'Leningrad',
      date: '1941',
      briefing: "Leningrad, winter of 1941. The city is under siege and starving. Inside it, a plant institute holds the largest collection of seeds ever gathered. A living record of the world's crops. Guarded by scientists with nothing to eat.\n\nThe buried record says the guardians ate the collection. ",
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #1c2430, #0a0e16)',
        bgMid:     '#121826',
        accent:    '#e8b84a',
        highlight: '#dfe9f6',
      },
      sprites: {
        scene: 'c2/scene/scene_besieged_street.jpg',
      },
      resolveLabel: 'Validate the Record',
      resolveNag: 'The evidence is incomplete',
      diagnosisPrompt: 'Which record is genuine?',
      diagnosisConfirmLabel: 'Validate',
      ranksUp: true,                       // second promotion: Corruption Scout → Trace Analyst
      rankUpText: 'Trace Analyst. You looked at a perfect record and saw the choice inside it.',
      teaches: {},                         // nothing new to teach
      taaCommsHints: {
        oolian: {
          low:  "Yvi: \"Five layers this time. The keeper, the seeds themselves, the ledger, the recovered Vavilov record — and the report. Read the report LAST if you can bear to; it argues better when you already know the facts.\"",
          mid:  "Yvi: \"Test the report's one checkable claim: it is countersigned by Director Vavilov, at the Institute, during the siege. Cross that against the recovered record. A signature is a date and a place. Dates and places can be impossible.\"",
          full: "Yvi: \"Complete. The countersignature is impossible — he was in prison. The accessions are continuous. The seeds are intact and old in place. The report is perfect in every way except being true. Validate the keeper's record.\"",
        },
        rhessi: {
          low:  "Saren: \"Whoever wrote the buried record chose the cruelest possible lie — the one that turns the sacrifice into appetite. Take that personally, but not quickly. Hear the keeper first.\"",
          mid:  "Saren: \"Look at the report's finish. Four starving months, typed clean in a single sitting — no strikeouts, no fatigue, no cold hands anywhere in it. Too clean is a choice. You've heard me say it before. This is the record I meant.\"",
          full: "Saren: \"You have them. A countersignature from a man in a prison cell, and a document with no winter in it. Validate the keeper's record — and remember what this forger was willing to say about the dead.\"",
        },
        vressk: {
          low:  "Korl: \"This place is heavy, friend. The vault most of all — it is full of held breath. Let the keeper speak at his own pace. Some testimony cannot be hurried.\"",
          mid:  "Korl: \"The vault remembers hands — tins opened for counting and sealed again, years of small careful touches. The report remembers one afternoon and one typewriter. Records that lived have texture. This one has none.\"",
          full: "Korl: \"Validate the keeper's record. It breathes — grief and cold and duty, all of it still in the pages. The other was never alive, and it slanders people who chose to stop being.\"",
        },
      },
      locations: [
        // ── 1 · The Street (arrival — the cold open; snow) ──
        {
          id: 'besieged_street',
          label: 'The Street',
          requires: null,
          anchorPoint: false,
          locationFx: {
            // Full-frame falling snow (no mask, fades near the bottom).
            // AUTHOR-TUNED 2026-07-06 in c2/resources/demos/locationfx/lvl2.html.
            snow: { count: 175, speed: 48, drift: 7.0, size: 2.1, opacity: 0.49, color: '#e8eef4', fadeBottom: 69 },
          },
          sources: {
            // The siege itself — REQUIRED context (remediation 2026-08-12, HHH-IMP-C2L2-001:
            // was insight:true, but it gates seed_vault, so the "optional" tag was structurally
            // false. Marked required to match the intended street-first flow; the reveal keeps
            // its bonusInsight score, exactly as the 2026-07-06 playtest note intended).
            street: {
              type: 'examination', speaker: 'The Street', personality: 'stoic',
              evidenceType: 'testimony',
              clueTag: 'siege_witnessed', icon: '❄', label: 'Take In the Street',
              sprites: { iconImg: 'c2/ui/portrait_ration_notice.jpg' },   // §3 portrait audit — author-generated
              learned: "The city is starving — the bread ration is 125 grams. This is what the word \"siege\" means.",
              nodes: {
                start: {
                  text: "A queue stands along the wall opposite, no one speaking. A notice is pasted at the corner: the bread ration, cut again. One hundred twenty-five grams. A bread slice and a half.\n\nSomewhere past the rooftops, artillery, far off and patient. Nobody in the queue looks up. The institute is ahead and inside it is a room full of food that no one ate.",
                  revealsClue: 'siege_witnessed',
                  bonusInsight: true,
                  options: [
                    { label: 'Go inside.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 2 · The Seed Bank Vault (unlocks on the street beat — playtest fix
        //    2026-07-06: an ungated vault fired no unlock nudge, leaving the player
        //    unguided off the street; gating on the cold-open clue restores the
        //    toast AND strengthens the street-first intent; siege_witnessed is a
        //    REQUIRED clue as of the 2026-08-12 remediation and stays bonus-scored) ──
        {
          id: 'seed_vault',
          label: 'Seed Bank Vault',
          requires: { clueFound: 'siege_witnessed' },
          lockHint: 'Take in the street first — understand the siege before you step inside.',
          anchorPoint: false,
          scene: 'c2/scene/scene_seed_vault.jpg',
          locationFx: {
            // The candle in the freezing vault (engine's existing fire type —
            // livelier flicker than the office lamp).
            // AUTHOR-TUNED 2026-07-06 in c2/resources/demos/locationfx/lvl2.html (Vault tab).
            fire: { x: 21, y: 76, size: 19, color: '#ffb24a', intensity: 0.47, flicker: 0.30, flickerSpeed: 5 },
          },
          sources: {
            // Dr. Morozov — the surviving keeper (REQUIRED; the living testimony)
            keeper: {
              type: 'conversation', speaker: 'Dr. Morozov', personality: 'stressed',
              evidenceType: 'testimony',
              clueTag: 'keeper_testimony', icon: '🧥', label: 'Speak to the Keeper', actionLabel: 'Speak to the Keeper',
              learned: "Dr. Morozov: the staff did not eat the collection — they starved beside it, by choice, so the seeds would outlive the siege.",
              sprites: { spritesheet: 'c2/npc/seed_keeper/spritesheet.png', spritesheetJson: 'c2/npc/seed_keeper/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "A man in a heavy coat is counting seed tins by lamplight, breath showing, someone rationing his own strength.\n\n\"You are not from the district committee. They don't look at the shelves the way you just did.\nAsk. I have an hour of light and forty years of answers.\"",
                  options: [
                    { label: 'What happened here during the siege?', goto: 'testimony' },
                    { label: 'Why keep seeds you could eat?',        goto: 'why' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                testimony: {
                  text: "\"What happened is that we kept working. We catalogued. We dried. We tested germination in the dark, in the cold, on schedule.\n\nAnd we did not eat the collection. Not the rice. Not the potatoes. Not one envelope of oats. Dmitri Sergeyevich died at his desk in January, beside the rice. The rice was still there in the morning. That is the whole of it.\"",
                  revealsClue: 'keeper_testimony',
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'I will. Thank you.',      goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                why: {
                  text: "\"Because a seed is not food. A potato is one meal. A seed potato is every harvest from now on.\n\nPeople say we starved beside food. We did not. We starved beside seed. If you cannot hear the difference, nothing in this building will make sense to you.\"",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The office is through there. The ledgers will say what I said. They always did.\"",
                  endsConversation: true, exitLabel: 'Leave him to the counting.',
                },
              },
            },
            // The collection itself (REQUIRED; physical condition)
            collection: {
              type: 'examination', speaker: 'The Collection', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'collection_intact', icon: '🌾', label: 'Examine the Collection',
              sprites: { iconImg: 'c2/ui/portrait_seed_collection.png' },
              learned: 'The collection is intact: pre-war seals unbroken, counts matching the catalogue, seed aged in place through the siege winters. Nothing here was eaten.',
              nodes: {
                start: {
                  text: "Row on row of tins and cloth envelopes, frost-furred, labelled in a dozen careful hands. You lift one tin of rice; 1938 and the wax seal is whole under your thumb, brittle but never broken.\n\nSomeone kept these through that winter.",
                  options: [
                    { label: 'Run the TAA preservation scan.', goto: 'scan' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                scan: {
                  type: 'terminal',
                  text: "> TAA PRESERVATION SCAN — seed accessions, sampled shelves\n  seals: pre-war, intact (no reseal signatures)\n  counts: match catalogue of record\n  aging profile: continuous, in place, siege winters included\n  consumption evidence: NONE\n\n  A collection that was eaten and rebuilt would be young. \n  This seed is old, and it never left the room.",
                  revealsClue: 'collection_intact',
                  options: [
                    { label: 'Set the tin back exactly where it was.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 3 · The Institute Office (unlocks on the keeper's testimony; ANCHOR) ──
        {
          id: 'institute_office',
          label: 'Institute Office',
          requires: { clueFound: 'keeper_testimony' },
          lockHint: 'The keeper in the vault can tell you what happened here first.',
          anchorPoint: true,
          scene: 'c2/scene/scene_institute_office.jpg',
          locationFx: {
            // The one warm accent in a cold room (engine's existing lamp type).
            // AUTHOR-TUNED 2026-07-06 in c2/resources/demos/locationfx/lvl2.html.
            lamp: { x: 34, y: 59, size: 28, color: '#ffb24a', intensity: 0.35, flicker: 0.16, flickerSpeed: 4 },
          },
          sources: {
            // The accession ledger (REQUIRED; continuity)
            ledger: {
              type: 'examination', speaker: 'The Accession Ledger', personality: 'stoic',
              evidenceType: 'provenance',
              clueTag: 'accessions_continuous', icon: '📒', label: 'Read the Accession Ledger',
              sprites: { iconImg: 'c2/ui/portrait_accession_ledger.png' },
              learned: "The ledger runs unbroken through the siege. Same numbers before and after. The collection never went away.",
              nodes: {
                start: {
                  text: "The ledger lies open where someone left it, a pair of reading glasses resting on the page. Columns of numbers in faded ink.  Entries dated straight through the siege winters, the handwriting thinning but never stopping.\n\nYou turn to the post-war pages. The numbers continue.",
                  options: [
                    { label: 'Cross-reference the accession numbers.', goto: 'crossref' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                crossref: {
                  type: 'terminal',
                  text: "> TAA CROSS-REFERENCE — accession continuity\n  1940 register → 1946 register: numbers CONTINUOUS\n  rebuild discontinuity: NONE (a re-collected bank would renumber)\n  hands: the same custodians through 1942, successors after\n\n  If the collection had been consumed and replaced, this ledger could not exist. \n  But it does exist.",
                  revealsClue: 'accessions_continuous',
                  options: [
                    { label: 'Replace the glasses on the page.', goto: '__exit__' },
                  ],
                },
              },
            },
            // Vavilov — recovered archive record (REQUIRED; the forgery-killer)
            vavilov: {
              type: 'archive', speaker: 'N. I. Vavilov — Recovered Record',
              evidenceType: 'provenance',
              archiveFigure: true,
              clueTag: 'vavilov_fate', icon: '🎞', label: 'Play the Vavilov Record', actionLabel: 'Play the Vavilov Record',
              learned: "The recovered record: Vavilov was arrested in August 1940 and died in prison in January 1943. He was never at the besieged Institute.\n\nAny record placing him there is lying!",
              sprites: { spritesheet: 'c2/npc/vavilov_archive/spritesheet.png', spritesheetJson: 'c2/npc/vavilov_archive/spritesheet.json' },
              nodes: {
                start: {
                  text: "The TAA surfaces a recovered record — scan-lined, desaturated, a man in a heavy wool coat addressing some long-ago meeting. The annotation identifies him: Nikolai Ivanovich Vavilov, the botanist who built this collection, expedition by expedition, across five continents.\n\n\"We shall go into the fire, we shall burn — but we shall not retreat from our convictions.\"",
                  options: [
                    { label: 'Pull his fate from the TAA annotation.', goto: 'fate' },
                    { label: 'Why did he gather all this?', goto: 'work' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
                fate: {
                  type: 'terminal',
                  text: "> TAA ANNOTATION — N. I. VAVILOV\n  arrested: August 1940, before the siege began\n  imprisoned: Saratov\n  died: January 1943, in prison\n  present at the besieged Institute 1941–42: NO — impossible\n\n  Hold that date against anything that claims his signature in this building.",
                  revealsClue: 'vavilov_fate',
                  options: [
                    { label: 'Back to the record.', goto: 'start' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                work: {
                  text: "The annotation unfolds his life in a few dry lines that fail to be dry: expeditions to five continents, the theory that every crop has a homeland where its wild cousins still grow, and the conviction that a collection of seeds was a collection of futures.\n\nHe gathered the world's harvests into one cold city. \nThen the world's worst winter came to it, and the people he trained kept it alive and kept it whole.",
                  options: [
                    { label: 'Back to the record.', goto: 'start' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The forged Consumption Report (REQUIRED this time; forensics' blind spot —
            // the document is materially PERFECT; the training that reads artifacts
            // keeps insisting it's genuine).
            report: {
              type: 'examination', speaker: 'The Consumption Report', personality: 'stoic',
              evidenceType: 'forensics',
              blindspotFor: 'forensics',
              clueTag: 'report_read', icon: '📄', label: 'Read the Consumption Report',
              sprites: { iconImg: 'c2/ui/portrait_consumption_report.png' },   // §3 portrait audit — author-generated
              learned: "The Consumption Report: typed, complete, materially perfect — staff 'consumed the collections under emergency authorization, witnessed by Director Vavilov at the Institute.' \n\nIts perfection, and that signature, are the tells.",
              nodes: {
                disfavoredStart: {
                  text: "You test it the way you were trained to. \nPaper: correct wartime stock. \nTypeface: correct machine for the office. \nInk: aging.\nBinding: correct, correct, correct.\n\nEvery instrument you trust keeps returning the same verdict. It's genuine and something older than your instruments keeps saying. You put the tools down and read it as a person.",
                  options: [
                    { label: 'Read it as a person.', goto: 'start' },
                  ],
                },
                start: {
                  text: "It is a beautiful document. Typed clean, complete, calm: under emergency authorization, the staff consumed the collections between December 1941 and March 1942 — the rice, the tubers, the grain stores — and the post-war bank was restocked from external sources. Signed by the surviving staff.\n\nAnd countersigned, at the bottom, in a firm hand: witnessed on site — Director N. I. Vavilov.\n\nFour starving months, and the typing never once shakes?!",
                  revealsClue: 'report_read',
                  options: [
                    { label: 'Look closer at the finish.', goto: 'finish' },
                    { label: 'Set it down.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                finish: {
                  text: "You go through it page by page. One typewriter ribbon, one weight of keystroke, first line to last. A document allegedly assembled across four months of famine, typed in a single warm sitting by steady hands? \n\nMakes no sense.\n\nThe papers in this office have thin wavering script and re-inked entries. Winter is IN them. \n\nThere is no winter in this.",
                  options: [
                    { label: 'Set it down.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      // Candidate records — the compromise (the most human wrong answer), the forged
      // report, and the keeper's true record (correct).
      diagnoses: [
        { label: 'The Rationed Collection — the staff ate some accessions to survive and preserved the rest.',
          isCorrect: false,
          hint: "It is what anyone would have done — which is why it feels true. But the ledger is continuous and the seals are pre-war: they saved it ALL. The completeness is the sacrifice. Reasonable is not the same as true." },
        { label: "The Consumption Report — under emergency authorization, the collections were consumed; the post-war bank was rebuilt later.",
          isCorrect: false,
          hint: 'Materially perfect — and impossible. Its countersigner was in a prison cell thirteen hundred kilometres away, and its four starving months were typed in one clean sitting. Perfection is not proof. Here, it is the confession.' },
        { label: "The Keeper's Record — the collection intact through the siege; the staff who starved rather than eat it, named and mourned.",
          isCorrect: true },
      ],
      explanation: {
        title: 'The Record Validates',
        body: "The keeper's record holds. The seeds were never eaten. The people who guarded them starved, some to death, a room away from enough calories to live. Because a seed is not food! A seed is every harvest that comes after.\n\nNote the forger's method this time was a perfect finished document. Perfection was supposed to win. But remember the winter that wasn't in it.\n\nThis vault held crops from every continent, gathered so no people would ever face famine alone. \n\nThe thread pulls forward, toward green fields and a quiet billion.",
        funFact: "The Vavilov Institute in St. Petersburg still operates — the world's first major seed bank. During the 900-day siege, at least nine of its staff died of starvation while guarding the collection, including the rice keeper who died at his desk. The collection they saved helped rebuild Soviet agriculture and still informs crop breeding today.",
      },
    },
    // ══ LEVEL 3 — The Quiet Billion (Mexico & South Asia, 1968) ══
    // Green Revolution / Norman Borlaug. Design locked with the author (2026-07-06):
    //   • Flow: Trial Plots (Mexico, open) → Research Station (records) → Deployment
    //     Field (South Asia) = ANCHOR & final — Validate standing in the harvest the
    //     forgery denies. Two geographies (like C1-L5).
    //   • Gate: 4 REQUIRED (trials_succeeded · lodging_resistance · pedigree_verified ·
    //     real_yields) + 2 INSIGHT (forgery_read · harvest_scale). Forgery OPTIONAL —
    //     the true evidence alone validates.
    //   • Discipline blind spot = PROVENANCE: the forged report's chain of custody is
    //     immaculate; only the data inside lies. (blindspotFor:'provenance' on the report;
    //     provenance runs hit its disfavoredStart. Since the report is insight/optional,
    //     a provenance player who skips it simply had an easy run — intentional.)
    //   • 3rd candidate = downside OVERCORRECTION ("the Revolution was a disaster");
    //     hint separates the real later costs from whether the trials themselves succeeded.
    // Borlaug = recovered archiveFigure (reuses L2 Vavilov treatment + AF_MOTION).
    // Boundary crossed = knowledge between NATIONS (Mexico → India/Pakistan).
    // AUTHORING RULE (harness-walkable): first option of every clue-path node advances.
    {
      id: 'C2L3',
      menuName: 'The Quiet Billion',
      name: 'The Quiet Billion',
      tagline: 'The wheat that stood',
      location: 'Mexico',   // per-location override: the deployment field reads 'South Asia' (bannerLocation); date 1968 stays for both
      date: '1968',
      briefing: "Mexico and the plains of South Asia, 1968. \n\nA plant breeder has bred a new kind of wheat. It's short and stiff, built to stand under a heavy head instead of falling over. Carried across to India and Pakistan, it will feed something close to a billion people who would otherwise have starved.\n\nThe buried record says it failed. And the whole green revolution was a quiet disaster. \n\nCross the fields, gather the truth, and judge what is genuine.",
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #2a2416, #12100a)',
        bgMid:     '#1c1810',
        accent:    '#e8b84a',
        highlight: '#f0e2c0',
      },
      sprites: {
        scene: 'c2/scene/scene_wheat_trial_field.jpg',
      },
      resolveLabel: 'Validate the Record',
      resolveNag: 'The evidence is incomplete',
      diagnosisPrompt: 'Which record is genuine?',
      diagnosisConfirmLabel: 'Validate',
      ranksUp: true,                       // third promotion: Trace Analyst → Thread Surgeon
      rankUpText: "Thread Surgeon. You found the single false flaw and the billion lives that hung on it.",
      teaches: {},                         // nothing new to teach
      taaCommsHints: {
        oolian: {
          low:  "Yvi: \"Four records worth reading, and one worth distrusting. Read the trial data and the pedigree before you touch the failure report — the report argues best against an empty mind.\"",
          mid:  "Yvi: \"The failure report makes one testable claim: the semi-dwarf lines lodged and collapsed. Hold it against the lodging-resistance trait in the specimen and the recorded yields. A single variety cannot both stand in the field and fall in the report.\"",
          full: "Yvi: \"Complete. The pedigree is continuous, the harvests are recorded across seasons and two countries, the straw is documented stiff. The failure report contradicts every verified number — and note its precision: one forged record, chosen to sever an entire lineage. That is not decay. Validate the trial record.\"",
        },
        rhessi: {
          low:  "Saren: \"Someone buried a failure here, and buried it well. Don't swallow it. Get the real numbers first — then you'll taste how wrong the fake one is.\"",
          mid:  "Saren: \"Look at what this forgery picks — not vague slander, the exact data point that drops the whole modern harvest if believed. Whoever did this knew the lineage cold. This is the sharpest work we've seen. Too precise to be an accident.\"",
          full: "Saren: \"You have it. The trials stood, the yields are real, the straw held — and the failure report is a surgeon's cut, aimed at the one record everything downstream hangs on. Validate the trial record. And mark the hand that made this: it is getting better at hiding.\"",
        },
        vressk: {
          low:  "Korl: \"There is warmth in this place, friend — a field that fed people, still humming with it. Stand in that before you read the cold report. You will feel which one belongs.\"",
          mid:  "Korl: \"The real records breathe together — the wheat, the pedigree, the harvest, all pulling one way. The failure report sits apart from them. It does not share their air. A thing that never touched the others.\"",
          full: "Korl: \"Validate the trial record. It is alive with everything that grew from it — a billion quiet lives, all connected back to this field. The failure report was set down beside them by someone who wanted the connections cut. You can feel where it does not reach.\"",
        },
      },
      locations: [
        // ── 1 · The Trial Plots (Mexico — open; where the wheat was proven) ──
        {
          id: 'trial_plots',
          label: 'The Trial Plots',
          requires: null,
          anchorPoint: false,
          locationFx: {
            // Wheat sway MASK-CLIPPED to the plots (the mask's opaque wedge = the road,
            // so the sway never smears it; engine grain.mask support added 2026-07-07).
            // AUTHOR-TUNED 2026-07-07 in c2/resources/demos/locationfx/lvl3.html.
            grain:  { bandTop: 34, taper: 0.30, amplitude: 1.6, wavelength: 26, speed: 0.40,
                      mask: 'c2/scene/scene_wheat_trial_field.mask.png' },
            clouds: { bandTop: 3, bandBottom: 20, color: '#d8cba0', count: 15, speed: 31, opacity: 0.31, size: 78 },
          },
          sources: {
            // Borlaug — recovered archive figure (REQUIRED; the breeder's own testimony)
            borlaug: {
              type: 'archive', speaker: 'N. E. Borlaug — Recovered Record',
              evidenceType: 'testimony',
              archiveFigure: true,
              clueTag: 'trials_succeeded', icon: '🎞', label: 'Play the Borlaug Record', actionLabel: 'Play the Borlaug Record',
              learned: 'The recovered record: Borlaug bred the wheat SHORT on purpose — a stiff dwarf straw that stands under a heavy, well-fed head instead of falling. In the trial plots, season after season, it stood.',
              sprites: { spritesheet: 'c2/npc/borlaug_archive/spritesheet.png', spritesheetJson: 'c2/npc/borlaug_archive/spritesheet.json' },
              nodes: {
                start: {
                  text: "The TAA surfaces a recovered record — scan-lined and warm-faded, a man in a field cap and rolled sleeves standing waist-deep in wheat. The annotation names him: Norman Borlaug, the breeder who ran these plots season after season.\n\n\"People think it was one clever idea. \nIt wasn't. \nIt was ten thousand crosses and most of them junk. \nYou keep the ones that stand up.\"",
                  options: [
                    { label: 'What were you breeding for?', goto: 'trait' },
                    { label: 'They call you the man who fed a billion.', goto: 'scale' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
                trait: {
                  text: "\"For a plant that could take fertilizer and turn it into grain instead of height. Old tall wheat, you feed it, it grows leggy and heavy, and the first hard wind lays it flat in the mud. You lose the crop to its own success.\n\nSo we bred it short. Short and stiff. A dwarf that holds a head twice the weight it should and doesn't go down. Took us years in these plots. But it stood. Season after season.\"",
                  revealsClue: 'trials_succeeded',
                  options: [
                    { label: 'I have more to ask.', goto: 'start' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                scale: {
                  text: "\"I don't much like that line. Wasn't me. Was the wheat, and the farmers who planted it, and the fellows in Mexico and India who ran it out to a million fields. I just kept the ones that stood.\n\nThey gave me a medal for it, later. I'd have traded it for a couple good years in a bad country.\"",
                  options: [
                    { label: 'I have more to ask.', goto: 'start' },
                    { label: 'Close the record.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The two wheats side by side (REQUIRED; the physical lodging-resistance proof)
            wheat: {
              type: 'examination', speaker: 'The Two Wheats', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'lodging_resistance', icon: '🌾', label: 'Compare the Trial Wheat',
              sprites: { iconImg: 'c2/ui/portrait_dwarf_wheat.png' },
              learned: "The short-strawed wheat stands under the same heavy head that flattens the tall wheat beside it. Same grain, same field, same weather. The stiff straw (and its rust resistance) is what lets the plant be fed at all.",
              nodes: {
                start: {
                  text: "Two plots sit side by side under the plot-marker stakes. On the left, tall wheat is chest-high, tangled, most of it bent flat to the ground under the weight of its own grain. On the right, the same heavy heads exactly but on short and stiff stalks barely past your hips, standing upright in the wavering wind.\n\nSame grain. Same field. Same weather. \n\nOne crop is lost and one is standing. \nThe only difference you can see is the height of the straw.",
                  options: [
                    { label: 'Run the TAA trait scan.', goto: 'scan' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                scan: {
                  type: 'terminal',
                  text: "> TAA TRAIT SCAN — comparative plots\n  tall variety:  stem ~120cm · LODGED under grain load · yield lost to rot\n  semi-dwarf:    stem ~90cm · stiff · STANDING under identical load\n  disease:       semi-dwarf carries stem-rust resistance · tall does not\n  fertilizer:    both take nitrogen — only the short straw survives the heavier head it makes\n\n  The short straw is not cosmetic.",
                  revealsClue: 'lodging_resistance',
                  options: [
                    { label: 'Note the standing plot.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 2 · The Research Station (unlocks on the lodging trait; the records room) ──
        {
          id: 'research_station',
          label: 'Research Station',
          requires: { clueFound: 'lodging_resistance' },
          lockHint: 'The standing wheat in the plots is a claim. The station holds the records that can prove it.',
          anchorPoint: false,
          scene: 'c2/scene/scene_field_station.jpg',
          locationFx: {
            // The calm, inhabited records room — warm window light at the right edge.
            // AUTHOR-TUNED 2026-07-07 in c2/resources/demos/locationfx/lvl3.html.
            lamp: { x: 96, y: 36, size: 26, color: '#ffcb6a', intensity: 0.47, flicker: 0.26, flickerSpeed: 3 },
          },
          sources: {
            // Yield & pedigree records (REQUIRED; provenance — the verified lineage & harvests)
            pedigree: {
              type: 'examination', speaker: 'The Pedigree Records', personality: 'stoic',
              evidenceType: 'provenance',
              clueTag: 'pedigree_verified', icon: '📈', label: 'Read the Pedigree Records',
              sprites: { iconImg: 'c2/ui/portrait_yield_record.jpg' },
              learned: "The variety pedigree runs unbroken from the dwarf parent to the seed going out by the ton, every cross dated and the recorded yields RISE across seasons in both Mexico and South Asia. A failed variety could not have this lineage, or these harvests.",
              nodes: {
                start: {
                  text: "The station's worktable is buried under a decade of paper. Seed envelopes, yield notebooks, and pinned to the wall is a hand-drawn pedigree chart: a branching tree tracing every released variety back through its crosses to the dwarfing stock at the root.\n\nEvery branch is dated. \nThe lineage is unbroken from the first dwarf parent to the seed now leaving here by the ton.",
                  options: [
                    { label: 'Cross-reference the yields and lineage.', goto: 'crossref' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                crossref: {
                  type: 'terminal',
                  text: "> TAA CROSS-REFERENCE — variety pedigree & harvest record\n  lineage:       continuous · dwarf parent → released lines, every cross documented\n  released seed: matches the varieties actually distributed to the field\n  yields:        recorded across multiple seasons, Mexico AND South Asia — RISING\n  independent:   national harvest figures agree with the trial figures\n\n  A variety that failed in the trials could not produce this pedigree, or these harvests.",
                  revealsClue: 'pedigree_verified',
                  options: [
                    { label: 'Note the unbroken lineage.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The forged failure report (INSIGHT/optional; PROVENANCE's blind spot —
            // its chain of custody is immaculate; only the data inside lies)
            report: {
              type: 'examination', speaker: 'The Failure Report', personality: 'stoic', insight: true,
              evidenceType: 'provenance',
              blindspotFor: 'provenance',
              clueTag: 'forgery_read', icon: '📄', label: 'Read the Failure Report',
              sprites: { iconImg: 'c2/ui/portrait_failure_report.png' },   // §3 portrait audit — author-generated
              learned: "Insight: the buried 'trial failure' report is professionally forged — real letterhead, yet it describes the wheat being abandoned, and recommends the seed stock be destroyed. Its pedigree is flawless; only its story is false.",
              nodes: {
                disfavoredStart: {
                  text: "Start with where it came from. And where it came from is flawless. Real station letterhead. A reviewer's initials you can trace to a real reviewer. The chain of custody is immaculate.\n\nWhich is exactly what should stop you. You have been trusting the pedigree of a document. Set that down, and read what it actually says.",
                  options: [
                    { label: 'Read what it claims.', goto: 'start' },
                  ],
                },
                start: {
                  text: "The report is professionally done: a trial-failure summary, stamped and filed, stating that the semi-dwarf lines lodged in the wind, and were quietly abandoned. The whole program was a well-funded disappointment buried to spare the embarrassment.\n\nIt is plausible. It is well-written. And it describes wheat you have just watched stand upright in its own plot.",
                  revealsClue: 'forgery_read',
                  bonusInsight: true,
                  options: [
                    { label: 'Read the closing recommendation.', goto: 'note' },
                    { label: 'Set the report down.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                note: {
                  text: "A closing paragraph recommends the trials be discontinued and the remaining seed stock destroyed 'to prevent propagation of an unstable variety.'\n\nDestroy the seed!? \n\nOf every line in the forgery, that is the one that gives it away. \n\nThe exact instruction that would erase the wheat from the world. Whoever wrote this did not want failure on record. They wanted the thing gone completely!",
                  options: [
                    { label: 'Set the report down.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 3 · The Deployment Field (South Asia — unlocks on the pedigree; ANCHOR) ──
        {
          id: 'deployment_field',
          label: 'Deployment Field',
          bannerLocation: 'South Asia',   // banner geography switches Mexico → South Asia here (date 1968 unchanged)
          requires: { clueFound: 'pedigree_verified' },
          lockHint: 'The records prove the wheat. The thread can carry you east — to the fields where it was planted.',
          anchorPoint: true,
          scene: 'c2/scene/scene_deployment_field.jpg',
          locationFx: {
            // Broad wheat sway across the deployment field.
            // AUTHOR-TUNED 2026-07-07 in c2/resources/demos/locationfx/lvl3.html.
            grain: { bandTop: 34, taper: 0.40, amplitude: 2.3, wavelength: 31, speed: 0.55 },
          },
          sources: {
            // The field agronomist (REQUIRED; testimony — real-world South Asia yields)
            agronomist: {
              type: 'conversation', speaker: 'Dr. Prakash Rao', personality: 'professional',
              evidenceType: 'testimony',
              clueTag: 'real_yields', icon: '📋', label: 'Speak to the Agronomist', actionLabel: 'Speak to the Agronomist',
              learned: "Dr. Rao ran the deployment: the new wheat near-doubled the old yield per acre and held through the season — harvests he counted himself. No one who stood in this field at harvest would have written that it failed.",
              sprites: { spritesheet: 'c2/npc/field_agronomist/spritesheet.png', spritesheetJson: 'c2/npc/field_agronomist/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "A man in a field shirt stands at the crop's edge with a clipboard, watching a line of harvesters move through wheat that runs unbroken to the horizon.\n\n\"You've come a long way to look at a good year. We don't tire of them yet. Ask what you came to ask.\"",
                  options: [
                    { label: 'Did the new variety deliver?', goto: 'yields' },
                    { label: 'Was it hard to convince the farmers?', goto: 'adoption' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                yields: {
                  text: "\"Delivered. The old wheat gave us so much per acre and no more. And in a bad year, gave us hunger. This wheat near-doubled it, and held.\n\nI have stood in this field at the cutting. Whatever paper says it failed was not written by anyone who did.\"",
                  revealsClue: 'real_yields',
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Thank you.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                adoption: {
                  text: "\"Hard? At first. You cannot eat a pedigree. A farmer plants what fed him last year. So we planted demonstration plots beside their own fields, and let the two crops answer for us.\n\nBy the third season they were asking for seed faster than we could clean it. A standing and productive field is a very persuasive argument.\"",
                  options: [
                    { label: 'I have other questions.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The record's in the standing crop, if you still need it. It isn't going anywhere.\"",
                  endsConversation: true, exitLabel: 'Leave him to the harvest.',
                },
              },
            },
            // Survey the deployment (INSIGHT; the scale of the change)
            survey: {
              type: 'examination', speaker: 'The Horizon', personality: 'stoic', insight: true,
              evidenceType: 'forensics',
              clueTag: 'harvest_scale', icon: '🌅', label: 'Survey the Deployment',
              sprites: { iconImg: 'UI/icon_survey_land.png' },   // §3 portrait audit — reuse C1 survey icon (sprite-spec §5)
              learned: 'Insight: the new crop runs to the horizon in every direction — one variety, one height, heavy-headed, standing. This is one field of thousands. The "buried disaster" of the forged report stretches past the curve of the earth.',
              nodes: {
                start: {
                  text: "You walk the field edge to take the size of it. The crop runs to the horizon in every direction. All one variety, one height, heavy-headed, standing firm. A cart waits at the margin, already stacked with grain sacks. This goes on for thousands of fields to both horizons.\n\nThe report in the station called this a disaster and unproductive?!",
                  revealsClue: 'harvest_scale',
                  bonusInsight: true,
                  options: [
                    { label: 'Take in the scale.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      // Candidate records — the forgery (crop-failure lie), the downside overcorrection
      // (true costs, wrong verdict), and the genuine trial record (correct, idx 2).
      diagnoses: [
        { label: "The Failure Report — the semi-dwarf trials lodged and were quietly abandoned; the green revolution was a buried disaster.",
          isCorrect: false,
          hint: "It reads well and its paperwork is perfect. But it describes wheat you watched stand upright in its own plot, against a verified pedigree and harvests recorded across seasons and two countries. Every number contradicts it. Do not validate the cut." },
        { label: 'The Reckoning — the wheat worked, but the green revolution was an ecological and social catastrophe not worth keeping in the record.',
          isCorrect: false,
          hint: "The later costs are real — monoculture, thirsty fields, fertilizers, and gains that reached some but not others. But that is a separate question from whether the wheat stood and fed people. It did — a billion of them. A true criticism cannot validate a false failure." },
        { label: "The Trial Record — the semi-dwarf varieties stood, resisted lodging and rust, and drove rising harvests across Mexico and South Asia.",
          isCorrect: true },
      ],
      explanation: {
        title: 'The Record Validates',
        body: "The trial record holds. The semi-dwarf wheat stood — short-strawed, rust-resistant, built to answer fertilizer with grain instead of collapse. Across Mexico, India, and Pakistan it turned a looming famine into a surplus. The failure report was a forgery, and a precise one. If believed, it would have erased the proof beneath all modern high-yield farming.\n\nBut there was wheat bred in Mexico, carried to South Asia, feeding people who never met the hands that made it. True human knowledge moving between nations.\n\nThe pedigree it faked was immaculate. Only the story inside was false.\nWhoever is doing this knows exactly which record carries the weight of a thousand others. \n\nStrategic.\n\nThe thread pulls forward now — toward the first time it crossed between species.",
        funFact: "Norman Borlaug's semi-dwarf wheat is credited with saving perhaps a billion lives, and in 1970 he received the Nobel Peace Prize. The dwarfing trait traced partly to a Japanese variety, Norin 10 — a reminder that the Green Revolution was itself a chain of borrowed knowledge crossing borders. (Its later costs — heavy fertilizer and water use, lost crop diversity — are real too, and an honest separate chapter of the same story.)",
      },
    },
    // ════════════════════════════════════════════════════════════════════
    // LEVEL 4 — "The Bloom That Needed Poison" — Concord space, 2301
    // First time the thread crossed BETWEEN SPECIES. SSS C2 callback (karreth
    // bloom) but fully self-contained: the radiation science is explained in-level.
    // Blind spot = TESTIMONY (the forged ratification lies in a DATE, not a
    // statement — no witness to cross-examine). 4 required + 2 insight, forgery
    // optional. Nova appears as an ARCHIVE-GHOST (queryable playback, §2.5 full).
    // The pattern becomes undeniable here — the companion NAMES it (patternInterject).
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'C2L4',
      menuName: 'The Bloom That Needed Poison',
      name: 'The Bloom That Needed Poison',
      tagline: 'The rule that failed biology',
      location: 'Concord space',
      date: '2301',
      briefing: "The year is 2301. A medicinal organism called the 'karreth bloom' is dying inside a perfect radiation-containment vault. And no one can say why. \n\nThe record you are sent to protect is the diagnosis that saved it.\n\nThe buried record says otherwise: that the vault's universal safety protocol was ratified as permanent before any such diagnosis was ever made. If that lie holds, the bloom dies. \n\nRead the vault, hear the witnesses, and judge which record is genuine.",
      palette: {
        bg:        'radial-gradient(circle at 50% 32%, #14202a, #080e14)',
        bgMid:     '#0e1820',
        accent:    '#e8b84a',
        highlight: '#bfe4ec',
      },
      sprites: {
        scene: 'c2/scene/scene_karreth_vault.png',
      },
      resolveLabel: 'Validate the Record',
      resolveNag: 'The evidence is incomplete',
      diagnosisPrompt: 'Which record is genuine?',
      diagnosisConfirmLabel: 'Validate',
      ranksUp: true,                       // fourth promotion: Thread Surgeon → Temporal Advocate
      rankUpText: "Temporal Advocate. You argued for the record that let two kinds of life trust each other.",
      teaches: {},
      // ── HHH C2: the pattern-naming beat (bible §6 L4 "the companion names it") ──
      // Fires ONCE, auto-opening comms, the moment all 4 required clues are in — BEFORE
      // Validate. Species-keyed; does not consume the tiered-hint budget. Engine: maybePatternInterject.
      patternInterject: {
        lines: {
          oolian: "Yvi, quiet on the line: \"Archivist. Stop and count with me. Tenochtitlan — knowledge crossing between cultures. The seed bank — across a war. The wheat — between nations. And now this: between species. Four forgeries, four boundary-crossings, no exceptions. That is not a pattern a random process makes. Someone is selecting these nodes. Someone is trying to keep the species apart.\"",
          rhessi:  "Saren, low and certain: \"I have been circling this and I will say it plain now. Every record they've buried sits exactly where knowledge jumped a gap — one people to another, one age to another, and now one species to another. Whoever is doing this isn't hiding failures. They are cutting the places where strangers learned to trust each other. Someone wants the species kept apart. Keep that in your teeth when you validate.\"",
          vressk:  "Korl, hushed: \"Feel it with me a moment, friend. Every wound we've found is in the same place — where one kind of life reached across to another and was answered. The gardens, the seeds, the wheat, and now a flower that only an alien vault could kill. Someone has been going to those exact reachings and severing them. Someone wants us apart. I have felt it building. Now I am sure.\"",
        },
      },
      taaCommsHints: {
        oolian: {
          low:  "Yvi: \"Two questions, held apart: is the bloom's need for radiation real, and did the ratification actually precede the diagnosis? Read the vault and the witnesses before the ratification record — it is the one document with no one behind it to question.\"",
          mid:  "Yvi: \"The forged record makes one structural claim: the Universal Shielding Protocol was ratified permanent BEFORE the bloom was ever diagnosed. But the diagnosis is what the recovered testimony describes, and the regulator confirms an exemption followed it. A ratification cannot be both permanent-from-the-start and later amended. The dates cannot both be true.\"",
          full: "Yvi: \"Complete. The bloom requires radiation — it drives the DNA-repair enzymes that also make its medicine; the telemetry shows the vault starved it to zero. Nova's record diagnoses it; the regulator confirms the Protocol was amended after. The forgery inverts the order to erase the correction. Validate the diagnosis record. Note the precision of the inversion — one date, chosen to unmake a lesson.\"",
        },
        rhessi: {
          low:  "Saren: \"Careful here — this forgery has no mouth to catch lying. It's a date on a document. Get the living voices first: the bloom, the instruments, the recorded one, the regulator. Then the paper won't fool you.\"",
          mid:  "Saren: \"Smell what this fake does — it doesn't accuse anyone, it just quietly moves one date so the diagnosis never happened. No villain, no witness, nothing to cross. That's the cleanest kind of lie. The regulator will tell you an exemption was made; the paper says it never needed to be. One of them is aimed.\"",
          full: "Saren: \"You have it. The bloom eats radiation to live and make its medicine; the vault choked it; the record shows they figured that out and bent the universal rule to save it. The forgery says the rule was never bent. Validate the diagnosis. And mark it — this hand keeps cutting exactly where two kinds of life first trusted each other.\"",
        },
        vressk: {
          low:  "Korl: \"There is something failing in this place, friend — you can feel the bloom guttering like a low flame. Sit with the living things first: the flower, the readings, the recorded voice, the regulator. The cold paper comes last.\"",
          mid:  "Korl: \"The true records all breathe together — the dying bloom, the starved instruments, Nova's voice, the regulator's exemption. They lean the same way. The ratification paper sits apart from them, not sharing their air. It does not belong to the same moment they do.\"",
          full: "Korl: \"Validate the diagnosis record. It is alive with the others — the bloom that needed its poison, the vault that withheld it, the moment they understood. The forged ratification was laid down cold beside them by someone who wanted that understanding unmade. You can feel where it does not reach.\"",
        },
      },
      locations: [
        // ── 1 · The Radiation Vault (open; the failing bloom) ──
        {
          id: 'karreth_vault',
          label: 'The Radiation Vault',
          requires: null,
          anchorPoint: false,
          // The vault PNG (both crossfade frames) has a transparent window — the starfield
          // shows through it, drawn BEHIND the scene (author-specified 2026-07-07: image rect
          // x14→63, y110→188). Coexists with livingBg + locationFx.
          sceneWindow: { x: 14, y: 110, w: 49, h: 78, twinkle: true },
          // The bloom-glow pulse = livingBg 2-frame crossfade (scene_karreth_vault ↔ _vault2) +
          // glow; the instrument banks = statusBlink. The engine runs BOTH together because the
          // livingBg has no `shimmer` (applyLocationScene, 2026-07-07).
          // AUTHOR-TUNED 2026-07-07 in c2/resources/demos/locationfx/lvl4.html (Vault tab).
          livingBg: {
            frameB: 'c2/scene/scene_karreth_vault2.png',
            period: 9, bMin: 0.12, bMax: 0.82, ease: 'cos',
            glow: { color: '#c58ad6', x: 49, y: 60, size: 35, max: 0.46, phaseOffset: 0 },
          },
          locationFx: {
            statusBlink: [
              { x: 36, y: 89, color: '#43e08a', size: 3, period: 1.6 },
              { x: 64, y: 89, color: '#43e08a', size: 3, period: 1.6 },
            ],
          },
          sources: {
            // The failing bloom (REQUIRED; the organism itself — forensics)
            bloom: {
              type: 'examination', speaker: 'The Karreth Bloom', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'bloom_failing', icon: '🌸', label: 'Examine the Bloom',
              sprites: { iconImg: 'c2/ui/portrait_karreth_bloom.png' },
              learned: "The karreth bloom is dying in a flawless vault. Its petals are dimmed, filament cores gone dark. A TAA bio-scan finds its DNA-repair machinery idle: the same enzymes that make its medicinal compounds have simply stopped. The organism is not sick. It is starved of something the vault was built to remove.",
              nodes: {
                start: {
                  text: "Under heavy shielded glass, the karreth bloom sits wilted and grey. Its crystalline petals, meant to be translucent and lit from within, have gone dull.\n\nEvery gauge around the vault reads green. Temperature, humidity, containment — nominal. \n\nBy every number the Concord trusts, this is the safest place in the sector for the fragile organism. And the organism is dying still.",
                  options: [
                    { label: 'Run the TAA bio-scan.', goto: 'scan' },
                    { label: 'Step back from the glass.', goto: '__exit__' },
                  ],
                },
                scan: {
                  type: 'terminal',
                  text: "> TAA BIO-SCAN — karreth bloom, containment vault\n  vitality:        critical · petal luminance ~4% of baseline\n  repair enzymes:  IDLE — DNA-repair pathway inactive\n  compounds:       medicinal synthesis HALTED (shares the repair pathway)\n  pathogens:       none · toxins: none · nutrient deficit: none\n  environment:     all containment parameters NOMINAL\n\n  The organism is failing with nothing wrong by any standard measure. Whatever it needs, the vault is withholding it somehow by design.",
                  revealsClue: 'bloom_failing',
                  options: [
                    { label: 'Note the idle repair enzymes.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The vault telemetry (REQUIRED; radiation = zero, the starvation proof — forensics)
            telemetry: {
              type: 'examination', speaker: 'The Vault Telemetry', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'vault_starved', icon: '📟', label: 'Read the Vault Telemetry',
              sprites: { iconImg: 'UI/portrait_taa_scan.png' },   // §3 audit — reuse the C1 TAA scan portrait
              learned: "The vault holds ambient radiation at ZERO — the Universal Shielding Protocol scrubs it flawlessly. \n\nBut the bloom evolved on a high-radiation world so it USES continuous low-level radiation to drive its DNA repair, and that same repair makes its medicine. \n\nThe perfect shield is a perfect starvation. This is what unlocks where the diagnosis was recorded.",
              nodes: {
                start: {
                  text: "You pull the radiation log. It is the proudest number in the room: ambient ionizing radiation held at a flat, unwavering zero, hour after hour. The Universal Shielding Protocol scrubbing the chamber to a sterile perfection.\n\nFor almost any other organism the Concord protects, zero is the goal. \nYou cross-reference what this organism actually is.",
                  options: [
                    { label: "Cross-reference the bloom's biology.", goto: 'crossref' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                crossref: {
                  type: 'terminal',
                  text: "> TAA CROSS-REFERENCE — karreth bloom native environment vs vault\n  homeworld:     high-radiation surface · karreth evolved UNDER constant flux\n  dependency:    low-level radiation DRIVES its DNA-repair enzymes\n  coupling:      those repair enzymes ALSO synthesize its medicinal compounds\n  vault ambient: 0.00 — Universal Shielding Protocol scrubbing to sterile\n\n  No radiation → no repair → no compounds → death. \n  The shield built to protect it is starving it.",
                  revealsClue: 'vault_starved',
                  options: [
                    { label: 'Follow the record to the corridor.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 2 · The Transit Corridor (unlocks on the starvation proof; Nova + the viewport) ──
        {
          id: 'transit_corridor',
          label: 'Transit Corridor',
          requires: { clueFound: 'vault_starved' },
          lockHint: "The vault tells you the bloom is starving. The record of who first understood that is held in the archive.",
          anchorPoint: false,
          scene: 'c2/scene/scene_concord_corridor.png',
          // Viewport starfield twinkle — sceneWindow is 240×280 IMAGE space, drawn BEHIND the
          // corridor PNG (which has transparent window holes across a mid strip). Author-specified
          // 2026-07-07: the window strip spans full width, image y≈77→180. densityRamp/starScale
          // (author feedback 2026-07-07): density grows left→right so the SMALL windows mid/right
          // always catch stars, while the big left window keeps roughly its original density
          // (left edge ≈ 0.8×, right edge ≈ 2.4× the old uniform density).
          sceneWindow: { x: 0, y: 77, w: 240, h: 103, twinkle: true, densityRamp: 2, starScale: 1.6 },
          sources: {
            // Nova archive-ghost (REQUIRED; the recorded diagnosis — testimony, FAVORED for testimony)
            nova: {
              type: 'conversation', speaker: 'Dr. Nova — Archive Playback', personality: 'professional',
              evidenceType: 'testimony',
              archiveGhost: true,   // HHH C2 §2.5 FULL: cyan-shifted, transparent, scanlined, glitching
              clueTag: 'diagnosis_recovered', icon: '🎞', label: 'Query the Nova Archive', actionLabel: 'Query the Nova Archive',
              learned: "A recovered archive of Dr. Nova — a TAA figure preserved as playback, not a living witness. \n\nHer entry diagnoses the bloom: it needs the radiation the vault removed, and she argued the Universal Shielding Protocol had to bend. Her voice is the record of the moment the Concord questioned its own universal rule. This is what unlocks the Regulation Office.",
              sprites: { spritesheet: 'npc/nova/spritesheet_unmasked.png', spritesheetJson: 'npc/nova/spritesheet_unmasked.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "The corridor archive terminal wakes at your query. A figure resolves in it — the image rolling and catching like preserved footage. This is Nova as the archive kept her: a recording. She is not looking at you. She is speaking to whoever would one day pull the file.\n\n\"Playback entry. If someone is hearing this, it means someone finally went looking. Good. Ask the archive what you came to ask.\"",
                  options: [
                    { label: 'Query: the bloom diagnosis.', goto: 'diagnosis' },
                    { label: 'Query: why keep this on record?', goto: 'why' },
                    { label: 'Close the playback.', goto: '__exit__' },
                  ],
                },
                diagnosis: {
                  text: "\"The bloom was dying and every instrument swore the vault was perfect. So I stopped trusting the instruments and asked where the thing came from. A high-radiation world. It doesn't tolerate radiation — it runs on it. The same enzymes that repair its cells make its medicine, and both need the dose the vault was scrubbing to zero.\n\nThe fix was heresy: put some of the danger back. Grant this one organism an exemption from the Universal Shielding Protocol.\"",
                  revealsClue: 'diagnosis_recovered',
                  options: [
                    { label: 'I have another query.', goto: 'start' },
                    { label: 'Close the playback.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                why: {
                  text: "\"Because a rule that has never been wrong is the most dangerous thing an institution owns. The Protocol was built by radiation-sensitive species, for radiation-sensitive species, and it was right for almost everyone. \n\nI kept this record so that the day someone decides the Protocol was always perfect the exception would still have a record of it.\"",
                  options: [
                    { label: 'I have another query.', goto: 'start' },
                    { label: 'Close the playback.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The entry's logged, Archivist. It will keep saying the same thing every time you ask it. That's what it's for.\"",
                  endsConversation: true, exitLabel: 'Let the archive rest.',
                },
              },
            },
            // The viewport (INSIGHT; the scale of what interspecies cooperation built — observation)
            viewport: {
              type: 'examination', speaker: 'The Viewport', personality: 'stoic', insight: true,
              evidenceType: 'forensics',
              clueTag: 'station_scale', icon: '🛰', label: 'Look Out the Viewport',
              sprites: { iconImg: 'c2/ui/portrait_concord_viewport.jpg' },   // §3 audit — author-generated 2026-07-07 (emoji kept as graceful fallback)
              learned: "Insight: through the corridor viewport, the Concord station sprawls across deep space — docking arms, habitat rings, ships of a dozen species moving between them. This is what shared knowledge built.",
              nodes: {
                start: {
                  text: "You stop at the long viewport. Beyond it the Concord station opens out against the dark. With its ringed docking arms, habitat modules lit warm from within, and between them the small moving lights of ships built by a dozen different worlds.\n\nThis is what came of species deciding to trust each other's knowledge. A dying flower in a vault two corridors back is a small thing against all of it. But it is one of the first threads. Pull it, and you are not cutting a flower. You are cutting the reason any of this could be built.",
                  revealsClue: 'station_scale',
                  bonusInsight: true,
                  options: [
                    { label: 'Take in the scale of it.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 3 · The Regulation Office (unlocks on the diagnosis; ANCHOR) ──
        {
          id: 'regulation_office',
          label: 'The Regulation Office',
          requires: { clueFound: 'diagnosis_recovered' },
          lockHint: 'The diagnosis is recovered. Where it was ruled on — where the Protocol was either bent or never touched — is the office where the record lives.',
          anchorPoint: true,
          scene: 'c2/scene/scene_regulation_office.jpg',
          locationFx: {
            // The ratification slate's steady cyan device glow (fx.lamp, reused — cool, not warm).
            // AUTHOR-TUNED 2026-07-07 in c2/resources/demos/locationfx/lvl4.html (Office tab).
            lamp: { x: 51, y: 63, size: 17, color: '#4fd6e0', intensity: 0.42, flicker: 0.12, flickerSpeed: 2 },
          },
          sources: {
            // The Concord regulator (REQUIRED; the honest believer — testimony, FAVORED)
            regulator: {
              type: 'conversation', speaker: 'Concord Regulator Vess', personality: 'stoic',
              evidenceType: 'testimony',
              clueTag: 'protocol_ratified', icon: '🛡', label: 'Speak to the Regulator', actionLabel: 'Speak to the Regulator',
              learned: 'Regulator Vess administered the Universal Shielding Protocol — and states plainly that after the karreth was diagnosed, the Protocol was AMENDED to grant the bloom a formal exemption. Vess is no liar; the exemption is something the office is quietly proud of. Their honest account is exactly what the forged ratification record denies.',
              sprites: { spritesheet: 'c2/npc/concord_regulator/spritesheet.png', spritesheetJson: 'c2/npc/concord_regulator/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"You have come about the karreth exemption. It is one of the few things this office has ever done that I am certain was right. Ask.\"",
                  options: [
                    { label: 'Was the Shielding Protocol ever amended?', goto: 'amended' },
                    { label: "Weren't universal rules the whole point?", goto: 'belief' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                amended: {
                  text: "\"It was. Formally, and against considerable resistance — including my own, at first. The bloom was dying under a Protocol we all trusted. When the diagnosis showed it required the very radiation we were scrubbing away, the Protocol was amended to grant this one organism an exemption.\n\nI signed it. It was the day this office learned it could be wrong.\"",
                  revealsClue: 'protocol_ratified',
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Thank you.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                belief: {
                  text: "\"They were. They are. A universal rule is how a hundred species agree to share a station without poisoning one another by accident. I do not apologize for believing in them.\n\nBut the bloom taught us the cost of a rule that cannot be questioned. Biology does not care what we think. The Protocol is stronger now for having one honest exception in it.\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The exemption is on the record, Archivist. Whatever paper says otherwise was not signed by anyone in this office who was there.\"",
                  endsConversation: true, exitLabel: 'Leave them to their post.',
                },
              },
            },
            // The forged ratification record (INSIGHT/optional; TESTIMONY's blind spot —
            // the lie is a DATE with no witness to cross-examine; provenance-dressed)
            ratification: {
              type: 'examination', speaker: 'The Ratification Record', personality: 'stoic', insight: true,
              evidenceType: 'provenance',
              blindspotFor: 'testimony',
              clueTag: 'ratification_examined', icon: '📜', label: 'Read the Ratification Record',
              sprites: { iconImg: 'c2/ui/portrait_regulation_record.jpg' },
              learned: "Insight: the buried record is a formal ratification of the Universal Shielding Protocol as PERMANENT and universal — dated before the karreth diagnosis, and containing no exemption at all. It is procedurally immaculate: real seal, valid clause structure, a clean chain of authority. Its only lie is the date, which erases the moment the rule was bent. No witness stands behind it to contradict — that is the point.",
              nodes: {
                disfavoredStart: {
                  text: "You reach for it the way you were trained to — you look for the person behind it. Who signed this, who witnessed it, who you could put a question to. And there is no one. It is a ratification record: a seal, a clause, a date. It does not speak, and it never will.\n\nThat absence is exactly the trap. You trust records that a voice can answer for. This forgery was built to have no voice — nothing to cross-examine, only a date to accept. Set down the reflex to ask it who it is, and read what it actually claims.",
                  options: [
                    { label: 'Read what it claims.', goto: 'start' },
                  ],
                },
                start: {
                  text: "The record ratifies the Universal Shielding Protocol as permanent, universal, and complete — every containment held to zero, no organism excepted. The seal is genuine. The clauses are correctly formed. The authority chain resolves. By every procedural test, it is a perfect document.\n\nAnd it is dated before the bloom was ever diagnosed, and it contains no exemption. \n\nA flawless record of a world where the Concord never had to learn it could be wrong.",
                  revealsClue: 'ratification_examined',
                  bonusInsight: true,
                  options: [
                    { label: 'Check what the date erases.', goto: 'note' },
                    { label: 'Set the record down.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                note: {
                  text: "Hold this record's date against everything else and the single moved number gives it away.\n\nIt does not argue with the diagnosis. It does not accuse Nova, or the regulator, or the keepers. \n\nIt just quietly claims the correction came too late to exist. Nobody forges a document this clean by accident!",
                  options: [
                    { label: 'Set the record down.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      // Candidate records — the forged ratification (the lie), the "Falsified Exemption"
      // (the Convenient Suspect: the saboteur's own distrust-worldview as bait), and the
      // genuine diagnosis record (correct, idx 2).
      diagnoses: [
        { label: 'The Ratification Record — the Universal Shielding Protocol was ratified permanent and universal before any diagnosis; no exemption was ever needed or made.',
          isCorrect: false,
          hint: "Its seal and clauses are perfect — but its date erases a moment three other records confirm: the bloom starving, the diagnosis, the exemption the regulator signed and is proud of. It contradicts no one; it simply moves a single date so the correction never happened. Do not validate the erasure." },
        { label: "The Falsified Exemption — the bloom's own keepers fabricated the radiation diagnosis to win themselves an exemption from Concord safety law.",
          isCorrect: false,
          hint: "Notice what this record teaches you to distrust — and who benefits from you believing it. It turns a shared discovery into a selfish trick, and the keepers into cheats. But the diagnosis is corroborated by the telemetry, the recovered archive, and the regulator who resisted it before signing. This candidate asks you to suspect the very cooperation the record proves. That suspicion is exactly what someone wants planted. A manufactured motive cannot validate a real forgery." },
        { label: "The Diagnosis Record — the bloom was starving under the universal Protocol; it was found to require radiation, and the Protocol was amended to grant a karreth bloom exemption.",
          isCorrect: true },
      ],
      explanation: {
        title: 'The Record Validates',
        body: "The diagnosis record holds. The karreth bloom was dying inside a flawless vault because the Universal Shielding Protocol — built by radiation-sensitive species, for radiation-sensitive species — scrubbed away the low-level radiation the karreth needed to live. Its DNA-repair enzymes, which also make its medicine, had nothing to run on. The Concord bent its own universal rule to save one organism, and in doing so learned the lesson beneath everything that came after: a rule that cannot be questioned will eventually be wrong.\n\nThe forgery tried to erase that day with a single moved date. An exception that never happened. \n\nFour forgeries, and every one sits exactly where one kind of life reached across to another and was answered. This was never decay, and it was never random. Someone is going to the precise moments the species learned to trust each other. Someone is trying to keep us apart. \n\nThe thread pulls forward — into the living present, where it is still being written.",
        funFact: "Life really does adapt to constant radiation: the fungus Cladosporium sphaerospermum thrives in the ruined Chernobyl reactor, and appears to use melanin to convert gamma radiation into usable energy — a process nicknamed 'radiosynthesis.' Organisms like Deinococcus radiodurans survive doses thousands of times what would kill a human by repairing their own shredded DNA. The karreth bloom is invented, but the principle isn't: 'safe for us' and 'safe for it' are not the same rule.",
      },
    },
    // ════════════════════════════════════════════════════════════════════
    // LEVEL 5 — "The Living Record" · First Garden summit, Earth, 2387
    // SSS C2 Case 6 crossover, fully self-contained (mycorrhizal science explained in-level).
    // THE STRUCTURAL BREAK: the corruption is LIVE — being written NOW, during the summit —
    // the first live-node validation in either campaign. The companion stops being a hint
    // button and becomes a live field agent (present-tense relays + a scripted live-urgency
    // beat reusing patternInterject). Nova appears LIVE (normal warm render) — the payoff of
    // L4's archive-ghost. Blind spot = FORENSICS (round 2 completes): a live record has no
    // finished artifact to examine. Rank → The Unforged (R5, terminal MAIN rank); completion
    // sets c2FinaleUnlocked (buildLevelSelect then reveals the hidden L6).
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'C2L5',
      menuName: 'The Living Record',
      name: 'The Living Record',
      tagline: 'The forgery written in real time',
      location: 'First Garden, Earth',
      date: '2387',
      briefing: "This time it has pulled level with you — into the living present.\n\nThe year is 2387, your own present. On a restored hillside garden on Earth, the Concord is holding its first agricultural summit ever convened on a human world. Three alien delegates have come to help Dr. Nova diagnose a soil that will not heal.\n\nAnd right now, as it happens, someone is writing over it. This forgery was not buried centuries ago for you to dig up. It is being composed live, overwriting the summit's true finding while the delegates still speak! \n\nTrust the living feed and the people in the room over any artifact, and validate the truth before the false one is recorded.",
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #2a2016, #120d08)',
        bgMid:     '#1c150d',
        accent:    '#e8b24a',
        highlight: '#f2e2b8',
      },
      sprites: {
        scene: 'c2/scene/scene_first_garden.png',
      },
      resolveLabel: 'Validate the Record',
      resolveNag: 'The record is not yet provable',
      diagnosisPrompt: 'The record is being written now. Which one is true?',
      diagnosisConfirmLabel: 'Validate',
      ranksUp: true,                       // fifth promotion: Temporal Advocate → The Unforged (R5, terminal MAIN rank)
      rankUpText: "You caught a lie while it was still being written and you kept the true record un-forged — a summit where three kinds of life read one small garden together, and were right. That record is permanent now because you would not let it be overwritten. There is one rank past this. To reach it you will have to find who has been holding the pen.",
      teaches: {},
      // ── HHH C2: the scripted LIVE-URGENCY beat (reuses the L4 patternInterject engine) ──
      // Fires ONCE, auto-opening comms, the moment all 5 required clues are in — BEFORE
      // Validate. Where L4's interject NAMED the pattern, L5's names the STRUCTURAL BREAK:
      // this forgery is live, the saboteur is acting in the present, and is close. Species-
      // keyed; does not consume the tiered-hint budget. Engine: maybePatternInterject (the
      // per-case 'pattern_named' flag is reused; each level's caseState is separate).
      patternInterject: {
        lines: {
          oolian: "Yvi cuts in, sharp: \"Archivist — stop. I am watching the record change as you hold it. This is not an old forgery you dug up. It is being written into the summit feed right now, this second, while the delegates speak. Every thread we chased before was already set before you arrived. This one is live. Whoever is doing it is not a ghost in the past — they are reaching into the present, and they are close. Validate the true record before the overwrite finishes setting.\"",
          rhessi:  "Saren, urgent and low: \"Listen — it's happening NOW. I can see the record moving under your hands. Not a buried lie, not something they left behind — someone is writing over this summit live, while it happens. Every wound before this was already cold when we found it. This one is still warm. Whoever cuts these threads didn't stop centuries ago. They are here, in the present, doing it. Seal the true record. Fast.\"",
          vressk:  "Korl, breathless: \"Friend, feel it — the cold is moving. The false record is being pressed over the true one right now, not long ago, now, while the delegates are still speaking. Everything we found before was already cold when we came to it. This is warm. This is happening. The hand that cuts our reachings is not a memory — it is here, in this moment, with us. Choose the living record before it sets.\"",
        },
      },
      // ── HHH C2: the companion as LIVE FIELD AGENT ── present-tense relays. The companion's
      // species is present at the summit, so their input is a live field feed, not a memory.
      // Species-distinct (Yvi structural / Saren adversarial / Korl sensory); content firewall
      // intact — hints are companion-keyed only, never discipline.
      taaCommsHints: {
        oolian: {
          low:  "Yvi, live on the summit channel: \"I'm reading the feed with you in real time, Archivist. Two records are being written into the same place at once, and they cannot both be true. Get the physical state first — the soil, the network — then hear what the delegates conclude as they conclude it.\"",
          mid:  "Yvi: \"Hold the structure. The record forming under your eyes makes one claim: the summit found no fix, the alien methods were incompatible with Earth soil. But Kess and Vorn-Shael are converging right now — a severed network, chemistry that maps to it exactly. A summit cannot be simultaneously producing a diagnosis and concluding none was reached. One of these records is being written over the other. Follow the one with the working behind it.\"",
          full: "Yvi: \"Resolved. The mycorrhizal network is severed between the terraces; the fix is cross-zone inoculation from mature ground; three species reached it together and the feed shows them reaching it. The overwrite asserts failure — an ending with no reasoning, laid over delegates who are, at this moment, reasoning. Validate the living diagnosis. And note the method: this forgery is not buried in the past. It is being composed live. Whoever writes it is here, now.\"",
        },
        rhessi: {
          low:  "Saren, low and fast on the live line: \"I don't like this one — the danger isn't old this time, it's happening while we talk. Don't chase the paper. Trust the living things in that garden: the soil, the fungal reader, the chemist. They'll tell you what's true before the record settles.\"",
          mid:  "Saren: \"Smell what the overwrite does. It doesn't accuse anyone — it just quietly writes FAILED over a summit that is succeeding in front of you. No villain, no argument, only a conclusion slid in while everyone is busy. The delegates are agreeing the network was cut and can be regrown. The false record says they found nothing. That gap is the knife.\"",
          full: "Saren: \"You've got it. Severed web, cross-zone graft, three species landing it together — that's the true record and the feed is writing it right now. The forgery erases exactly that: the moment aliens read a human garden and it worked. Validate the living diagnosis, and be fast — whoever is overwriting it is close enough to be doing it live. Same hand. Still cutting where we reach each other.\"",
        },
        vressk: {
          low:  "Korl, hushed but present on the channel: \"I am with you at the summit, friend — I can feel it happening, not remember it. Two records breathing in the same place, one alive and one laid cold over it. Go to the living things first — the ground, the ones reading it. Let them steady you before you choose.\"",
          mid:  "Korl: \"Feel how they lean. The tired soil, the severed web, Kess naming it, Vorn-Shael's islands — they all breathe the same way, toward one answer: the network can be rejoined. The other record does not share their air. It sits over them, cold, saying nothing was found. It does not belong to the moment it is trying to become.\"",
          full: "Korl: \"Validate the living diagnosis. It is alive with all of them — the tired soil, the broken threads, the three who came to read it and did. The overwrite is being pressed down over that living thing even now, to make it a failure. You can feel where it does not reach. Seal the true one before the cold one sets. And mark it, friend — this hand is not in the past. It is here.\"",
        },
      },
      locations: [
        // ── 1 · The Terraced Garden (open; Nova live + the mystery) ──
        {
          id: 'terraced_garden',
          label: 'The Terraced Garden',
          requires: null,
          anchorPoint: false,
          scene: 'c2/scene/scene_first_garden.png',
          // "Held golden hour" — a very slow warm-light breathe (livingBg, NO shimmer, so
          // locationFx runs alongside it: gentle plant sway + sparse warm motes across the
          // whole frame). PROPOSED defaults — author tunes in c2/resources/demos/locationfx/lvl5.html.
          // AUTHOR-TUNED 2026-07-08 in c2/resources/demos/locationfx/lvl5.html (Garden tab).
          livingBg: {
            period: 12, bMin: 0.54, bMax: 0.92, ease: 'cos',
            glow: { color: '#eacc3e', x: 29, y: 24, size: 68, max: 0.63, phaseOffset: 0 },
          },
          locationFx: {
            // Sway CONFINED to the planted terraces by the author-generated mask (like L3's road
            // mask: opaque = static cottage/stone/sky, transparent = rippling plants). Motes are
            // whole-frame (no mask). AUTHOR-TUNED 2026-07-08.
            grain: { bandTop: 10, taper: 0.55, amplitude: 1.2, wavelength: 10, speed: 0.35, mask: 'c2/scene/scene_first_garden.mask.png' },
            dust:  { count: 15, speed: 7, size: 1.0, color: '#ffe6b0', opacity: 0.19, drift: 13, twinkle: 0 },  // warm pollen/motes, whole frame
          },
          sources: {
            // Dr. Nova, LIVE (REQUIRED; the host — testimony; the ghost→living payoff)
            nova: {
              type: 'conversation', speaker: 'Dr. Nova', personality: 'professional',
              evidenceType: 'testimony',
              clueTag: 'garden_ailing', icon: '👩‍🌾', label: 'Speak with Dr. Nova', actionLabel: 'Speak with Dr. Nova',
              learned: "Dr. Nova is hosting the summit in the garden her family has rebuilt for forty years. The last time you 'met' her she was a recording in a corridor archive and now here she is a person in the sun. According to her the terraces fail in patches with no cause a human gardener can find. Same seeds, same water, same care. Which is why she invited three alien delegates to read the soil with senses she doesn't have.",
              sprites: { spritesheet: 'npc/nova/spritesheet_unmasked.png', spritesheetJson: 'npc/nova/spritesheet_unmasked.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"So it's you. The last time you came looking for me, all you found was a recording of me talking to no one. It's good to meet you in the actual light. I'd rather this were only a reunion. But my garden is dying in patches, and I can't tell why.\"",
                  options: [
                    { label: "What's wrong with the garden?", goto: 'ailing' },
                    { label: 'You knew I heard the recording?', goto: 'recording' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                ailing: {
                  text: "\"Look at it. That terrace thrives. The one beside it is starving. Same seed stock, same water, same hands tending both, the same forty years of care. By everything a human gardener knows, they should be identical. One is alive and one is giving up, and I have tried every remedy I have.\n\nThe answer isn't in anything I know. That's why the Concord is here — three delegates, three species, none of them born to Earth soil. I asked them to read my garden with senses I don't have. One of them is down at the failing terrace now; the others are up at the pavilion. Go and see what they see.\"",
                  revealsClue: 'garden_ailing',
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Go down to the failing terrace.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) — the ghost→living emotional payoff ──
                recording: {
                  text: "\"I did. I recorded that entry because I was afraid the truth would be overwritten once I wasn't there to defend it. I wanted a version of me that would keep arguing after I was gone. And here you are, standing in my living garden, because someone is overwriting a truth right now while I'm very much still here to watch them do it.\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"Go on down to them. Whatever's wrong with my soil, it's written in the ground, not in anything I could tell you.\"",
                  endsConversation: true, exitLabel: 'Head down the terraces.',
                },
              },
            },
          },
        },
        // ── 2 · The Failing Soil Zone (unlocks on Nova; the physical science + the fungal reader) ──
        {
          id: 'soil_zone',
          label: 'The Failing Soil Zone',
          requires: { clueFound: 'garden_ailing' },
          lockHint: "Nova's grief points down the slope — to the terrace that is giving up. What the soil is actually doing is down there, in the ground and in the delegate reading it.",
          anchorPoint: false,
          scene: 'c2/scene/scene_soil_zone.jpg',
          locationFx: {
            // A single blinking indicator on the Concord sensor probe + faint drifting motes.
            // AUTHOR-TUNED 2026-07-08 in the lvl5 demo (Soil Zone tab).
            statusBlink: [ { x: 39, y: 38, color: '#00e17f', size: 7.5, period: 2.0 } ],
            dust:        { count: 14, speed: 3, size: 0.5, color: '#9b8181', opacity: 0.25, drift: 14, twinkle: 0 },
          },
          sources: {
            // The mycorrhizal network (REQUIRED; the physical artifact/science — forensics,
            // FAVORED for a forensics run). Unlocks the pavilion anchor.
            mycorrhizal: {
              type: 'examination', speaker: 'The Soil Cross-Section', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'network_severed', icon: '🍄', label: 'Examine the Soil',
              sprites: { iconImg: 'c2/ui/portrait_mycorrhizal_network.jpg' },
              learned: "A TAA scan of the terrace edge finds the cause the surface hides. \n\nA mycorrhizal network — a web of fungal threads that carries water, nutrients, and chemical signal between plants across the whole slope — has been cleanly SEVERED between the thriving zone and the failing one. \n\nThe soil isn't diseased or drained. Its connections have been cut, leaving each terrace an island. Healthy soil is a network and this one was carved into pieces. This is what unlocks the summit pavilion.",
              nodes: {
                start: {
                  text: "At the terrace edge the earth shows itself in cross-section: rich dark soil on the thriving side, pale tired dirt on the failing side, and a thin exposed seam between them where the underground layer is visible. To the eye it is just a line between good ground and bad.",
                  options: [
                    { label: 'Run the TAA soil scan.', goto: 'scan' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                scan: {
                  type: 'terminal',
                  text: "> TAA SOIL SCAN — terrace boundary, thriving vs. failing\n  structure:     mycorrhizal network — fungal hyphae webbing root tip to root tip\n  function:      transports water · nutrients · chemical signal ACROSS zones\n  thriving side: network dense, continuous, healthy\n  failing side:  same species present — network SEVERED at the boundary\n  disease:       none · drought: none · toxicity: none\n\n  The soil has been cut. Each terrace is starving as an island because the web that fed the whole slope was severed clean between them.",
                  revealsClue: 'network_severed',
                  options: [
                    { label: 'Carry this up to the pavilion.', goto: '__exit__' },
                  ],
                },
              },
            },
            // Delegate Kess (REQUIRED; the fungal-network reader — testimony)
            // ⚠️ SPRITE = a preserved BRAIN IN A SENSING-VESSEL (delegate_kess portrait is a
            // brain in a jar) — it has NO hands/eyes/body. Never stage Kess kneeling, touching,
            // or gesturing: it reads the soil through fine filaments trailed from its vessel
            // (which also rhymes with the mycorrhizae it's reading) and speaks without a mouth.
            kess: {
              type: 'conversation', speaker: 'Delegate Kess', personality: 'gentle',
              evidenceType: 'testimony',
              clueTag: 'fungal_named', icon: '🌐', label: 'Consult Kess', actionLabel: 'Consult Kess',
              learned: "Delegate Kess — a preserved mind of a species that left soil-farming a thousand generations ago but carries a fragmented ancestral sense for it, kept alive in a sensing-vessel whose filaments read the failing terrace directly. \n\nKess names what the scan measures: the living network beneath the garden has been broken between zones, and it can be regrown. The fix is cross-zone inoculation — seed the failing soil with a graft from mature, healthy ground so the web reconnects. A living witness to the true diagnosis.",
              sprites: { spritesheet: 'c2/npc/delegate_kess/spritesheet.png', spritesheetJson: 'c2/npc/delegate_kess/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "A tall vessel of brass and glass has been set at the edge of the dying terrace, and inside it, suspended in faintly glowing fluid, is Kess — a mind without a body, of a people who gave up growing food in soil a thousand generations ago, and who read it now the way you might hum a lullaby you can't remember learning.\n\n\"There is a shape under this garden. A living web. In the oldest part of me, I remember what it should feel like. This one is… interrupted. Ask me what I feel and I will try to give it words your instruments will accept.\"",
                  options: [
                    { label: 'What is the web, and what happened to it?', goto: 'names' },
                    { label: 'How can you feel something your people abandoned?', goto: 'memory' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                names: {
                  text: "\"Beneath every healthy garden runs a network of fungal threads — mycorrhizae — laced between the roots of every plant. They trade water and food and warning across the whole ground. One web, feeding many. It is how soil is generous. Here, the web is cut. Clean, between this terrace and the next. Each side hoards what little it has and cannot share.\n\nAnd it can be healed. Take a graft of living, connected soil from the mature ground and work it into the broken zones. The web reaches for itself. It wants to reconnect.\"",
                  revealsClue: 'fungal_named',
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Take this to the pavilion.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                memory: {
                  text: "\"Because losing a thing is not the same as forgetting it. My ancestors ate from soil for longer than your species has existed. Your Nova asked outsiders to read her garden because she believed a stranger might see what she was too close to see. She was right. \n\nIt took one people's forgotten memory and another's living science to name what her own eyes could not. That is the whole point of this summit, is it not?\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The web is still there, Archivist. Broken, but there. Go up and see how the others are reading it.\"",
                  endsConversation: true, exitLabel: 'Climb to the pavilion.',
                },
              },
            },
          },
        },
        // ── 3 · The Summit Pavilion (unlocks on the severed-network science; ANCHOR) ──
        {
          id: 'summit_pavilion',
          label: 'The Summit Pavilion',
          requires: { clueFound: 'network_severed' },
          lockHint: "The ground has told you what is wrong. Where the summit is turning that finding into the record — and where the record is being overwritten — is the pavilion at the garden's edge.",
          anchorPoint: true,
          scene: 'c2/scene/scene_summit_pavilion.jpg',
          locationFx: {
            // Banner sway CONFINED to the two summit banners by the author-generated mask
            // (opaque = static structure/hillside, transparent = the swaying banners). The LIVE
            // record does NOT live in the scene (the art has no display) — it is a TAA record-
            // panel PORTRAIT treatment on portrait_live_record.png (source.liveRecord → the
            // .live-record CSS + LIVE_MOTION/LIVE_BADGE in afMotionLoop). AUTHOR-TUNED 2026-07-08.
            grain: { bandTop: 8, taper: 0.30, amplitude: 4.0, wavelength: 36, speed: 0.80, mask: 'c2/scene/scene_summit_pavilion.mask.png' },
          },
          sources: {
            // Delegate Vorn-Shael (REQUIRED; the chemist — forensics, FAVORED; corroborates the
            // severed network from the chemistry side: resources present, conduits missing)
            shael: {
              type: 'conversation', speaker: 'Delegate Vorn-Shael', personality: 'stoic',
              evidenceType: 'forensics',
              clueTag: 'chemistry_islands', icon: '⚗', label: 'Consult Vorn-Shael', actionLabel: 'Consult Vorn-Shael',
              learned: "Delegate Vorn-Shael — a chemist, pure observation. Their reading corroborates Kess's from the opposite direction: every nutrient and signaling compound the garden needs is PRESENT, but only in discrete circular zones that do not blend. The sources are there. The sinks are there. The conduits between them are gone. Chemistry proving the same severed network the scan and the fungal reader found — three methods, one truth.",
              sprites: { spritesheet: 'c2/npc/delegate_shael/spritesheet.png', spritesheetJson: 'c2/npc/delegate_shael/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"I have been mapping the chemical signatures of this site. The pattern is unusual. You will want to hear it before you decide what the record should say.\"",
                  options: [
                    { label: 'What does the chemistry show?', goto: 'maps' },
                    { label: 'Does it match what Kess feels?', goto: 'agree' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                maps: {
                  text: "\"Phosphorus. Nitrogen. Carbon chains. Signaling compounds — every nutrient this garden requires. All present. But only in discrete zones. Circular patches, four to six metres across. Between the patches, the same compounds fall to trace levels. The zones of abundance do not blend into one another. They are islands.\n\nOn a healthy world, chemistry forms smooth gradients where resources flow from source to sink through biological conduits. Here, I see the sources. I see the sinks. I do not see the conduits. Something that should carry them between the zones is not there.\"",
                  revealsClue: 'chemistry_islands',
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                agree: {
                  text: "\"Precisely. I am a chemist, not a biologist — I can describe the islands, but I cannot name the bridge that is missing. Kess can. What Kess feels as a severed web, I measure as a chemistry that will not flow. What the Archivist's scan draws as a cut network, I confirm as sources without conduits.\n\nThree of us, reading one garden by three unrelated methods, arriving at one finding. That convergence is itself evidence. A conclusion that says we found nothing would have to explain how three incompatible instruments happened to agree on the same nothing.\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The chemistry has not changed, Archivist. Sources, sinks, no conduits. Whatever the record ends up saying, that remains true.\"",
                  endsConversation: true, exitLabel: 'Turn to the record.',
                },
              },
            },
            // The live record (REQUIRED; the forgery caught MID-WRITE — forensics, and the
            // FORENSICS BLIND SPOT: a live record has no finished artifact to examine)
            liverecord: {
              type: 'examination', speaker: 'The Live Summit Record', personality: 'stoic',
              evidenceType: 'forensics',
              blindspotFor: 'forensics',
              liveRecord: true,   // HHH C2 L5: TAA record-panel treatment — portrait_live_record.png gets the .live-record CSS (LIVE badge + moving glitch band) driven by LIVE_MOTION in afMotionLoop. The record is being written NOW.
              clueTag: 'live_forgery', icon: '📡', label: 'Watch the Record Being Written',
              sprites: { iconImg: 'c2/ui/portrait_live_record.png' },
              learned: "The summit display shows the record forming in real time — and a second version overwriting it as you watch. The genuine feed carries the delegates' reasoning: severed network, cross-zone inoculation, a garden that can heal. The overwrite carries only a verdict: the alien methods failed, no fix was found, the decline is natural. It has no working, no author, no timestamp — it simply asserts the ending, sliding in over the truth. This is the forgery, and it is not finished. It is being written now.",
              nodes: {
                // FORENSICS BLIND SPOT — the live record refuses to sit still to be examined.
                disfavoredStart: {
                  text: "You go to it the way you were trained — you look for the artifact. The material to test, the ink to date, the fibre to hold up to the light. And there is nothing to hold. The record is not finished. It is being written, right now.\n\nYou trust what you can examine; you distrust what won't hold still. This record will not hold still. So you have to do the thing your training resists. Trust the live feed and the people in this room over the artifact that does not yet exist. \n\nWatch it being written...",
                  options: [
                    { label: 'Watch it being written.', goto: 'start' },
                  ],
                },
                start: {
                  text: "The summit display is alive. Severed network. Chemistry in islands. Cross-zone inoculation. A garden that heals.\n\nAnd over it, a second version is being written. This version has the delegates finding nothing. Their methods incompatible. The decline natural, beyond cross-species help. There is a jagged seam down the display where one record eats the other, and the false side is winning the tug of war.",
                  revealsClue: 'live_forgery',
                  options: [
                    { label: 'Look at what the overwrite leaves out.', goto: 'note' },
                    { label: 'Step back from the display.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                note: {
                  text: "Hold the two versions side by side and the forgery gives itself away by what it hasn't got. The true feed shows the work: three methods, the severed web, the graft that mends it, each step reasoned and witnessed. The overwrite shows only the conclusion — failure — with none of the road that would have led there.\n\nA real revision keeps its history: who changed it, when, and why. This one has no author, no timestamp, no working. \n\nIt simply appears, asserting an ending, over a summit that is at this moment reaching the opposite one.",
                  options: [
                    { label: 'Step back from the display.', goto: '__exit__' },
                  ],
                },
              },
            },
            // Delegate Ilreth-Mar (INSIGHT; the reform skeptic, converted — provenance:
            // a hostile witness authenticating the record)
            ilreth: {
              type: 'conversation', speaker: 'Delegate Ilreth-Mar', personality: 'stoic', insight: true,
              evidenceType: 'provenance',
              clueTag: 'skeptic_convinced', icon: '🗿', label: 'Consult Ilreth-Mar', actionLabel: 'Consult Ilreth-Mar',
              learned: "Insight: Delegate Ilreth-Mar came to the summit a reform skeptic — to observe and, they expected, to record that cross-species knowledge-sharing does not work. The evidence turned them. Having watched three species read a world none was born to and read it correctly, Ilreth-Mar authenticates the record against their own bias: a hostile witness vouching for its provenance. Their conversion is exactly what the overwrite must erase.",
              sprites: { spritesheet: 'c2/npc/delegate_ilreth/spritesheet.png', spritesheetJson: 'c2/npc/delegate_ilreth/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"I will be honest with you, Archivist, since honesty is your trade. I came to this summit to document a failure. My people hold that knowledge does not travel between species without corrupting. That a garden should be read by those born to it, or not at all. I expected to leave with my position confirmed.\"",
                  revealsClue: 'skeptic_convinced',
                  bonusInsight: true,
                  options: [
                    { label: 'And now?', goto: 'now' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                now: {
                  text: "\"And now I am the inconvenient witness. I watched a fungal reader from one world, a chemist from another, and a human archivist with a machine converge on the same severed network by three methods that share nothing. I came to prove strangers cannot read each other's ground. I have instead watched them do it, correctly, in an afternoon.\n\nA skeptic who authenticates against their own argument is worth more than a hundred friendly signatures. I will not let my doubt be used to bury that.\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Thank you.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"I am still here, Archivist. I still saw what I saw. Use it.\"",
                  endsConversation: true, exitLabel: 'Return to the record.',
                },
              },
            },
          },
        },
      ],
      // Candidate records — the LIVE overwrite (the forgery: the summit "found nothing"), the
      // "Routine Revision" (the 3rd flavor, NEW: normalization — 'live records are always
      // edited, nothing is being erased'), and the genuine living diagnosis (correct, idx 2).
      diagnoses: [
        { label: 'The Inconclusive Summit — the delegates’ alien methods proved incompatible with Earth soil; no fix was found; the garden’s decline is natural and beyond cross-species help.',
          isCorrect: false,
          hint: "This is the record being written over the true one as you watch. It has no reasoning behind it, no severed network, no chemistry, no graft, only a verdict that three species failed. \n\nBut Kess felt the cut web, Vorn-Shael measured the islands, your own scan drew the severance, and Ilreth-Mar authenticated all of it against their own doubt. Do not seal it into permanence." },
        { label: 'A Routine Revision — nothing is being erased; the record is simply updating itself as new data arrives, the ordinary way any live document corrects in real time.',
          isCorrect: false,
          hint: "It is tempting to call the overwrite housekeeping — records do change; live feeds do update.\n\nBut a real revision keeps its history: an author, a timestamp, a reason you can read. This change has none. It overwrites the moment three species succeeded with a bare assertion of failure, and leaves no trace of who changed it or why. \nNormalizing the overwrite is how you let it win." },
        { label: 'The Living Diagnosis — the mycorrhizal network was severed between the terraces; cross-zone inoculation from mature ground restores it; three species read it together and the garden can heal.',
          isCorrect: true },
      ],
      explanation: {
        title: 'The Record Validates',
        body: "The living diagnosis holds. Beneath Nova's garden ran a mycorrhizal network — a web of fungal threads laced between the roots of every plant, carrying water, nutrients, and chemical signal across the whole slope. One web, feeding many. It had been severed clean between the thriving terraces and the failing ones, leaving each an island that could not share what it had. And the fix was a graft of connected soil from mature ground, and the web reaches for itself and reconnects. \n\nThe forgery did not argue with any of that. It simply wrote FAILED over the top of it, in real time. No fix found, alien methods incompatible, the decline natural.\n\nEvery thread before this was already cut and cold by the time you arrived. \n\nBut the thread does not end here. It turns, and points at the source of the forgeries.",
        funFact: "When the first plants crept from water onto bare rock some 450 million years ago, they did not do it alone. Rock from that era already holds those fungi's spores, and in the oldest plants preserved in fine detail — some 400 million years old — fungal threads run inside the tissue itself: the ancestors of today's mycorrhizae. The early plants had no true roots to mine the barren ground for water and minerals; the fungi could not make sugar from sunlight. Each did for the other what it could not do for itself, and together they made land livable. Nearly every plant lineage that followed — forests, grasslands, and the crops in every field you have walked — inherited that partnership, and most still depend on it: a mesh so fine that a single teaspoon of healthy soil can hold kilometres of fungal thread. Life did not colonize the land as separate species. It crossed the boundary together, root laced to thread — and it has been quietly sharing underground ever since. Nova's garden is invented; the partnership beneath it is older than trees.",
      },
    },

    // ════════════════════════════════════════════════════════════════════
    // LEVEL 6 (HIDDEN) — "The Source" · TAA / ARS Chamber, 2389 — THE FINALE
    // ════════════════════════════════════════════════════════════════════
    // NOT a Validate level (design-locked 2026-07-13, 8 forks): the 5 required
    // clues ARE the dossier facets (TRACE/METHOD/IDENTITY/WORKS/MOTIVE); the
    // resolve at the chamber anchor = Confront the Source → the final exchange
    // → the 3-way verdict (solutionChoice, finale-restyled SSS screen). No
    // ending is punished. Completion → R6 Architect of the Chain → C2 victory.
    // INTENTIONAL FIELD OMISSIONS vs C2-L4/L5 (finale ≠ Validate): no
    // `diagnoses`, no `diagnosisPrompt`/`diagnosisConfirmLabel`, no
    // `blindspotFor`/`disfavoredStart` (both discipline rounds completed by L5),
    // no `patternInterject` (the dossier-complete profile carries that beat).
    {
      id: 'C2L6',
      menuName: 'The Source',
      name: 'The Source',
      tagline: 'The hand that held the pen',
      location: 'Concord space, the ARS Chamber',
      date: '2389',
      isBonus: true,                       // hidden finale (mirrors C1 L7); revealed by c2FinaleUnlocked
      briefing: "It has been two years and you have followed the forgery source forward, not backward this time.\n\nThere is no record to stabilize here. There is no forgery left to expose. \n\nThere is only the source: who they are, how they reached into the past, and why.",
      palette: {
        bg:        'radial-gradient(circle at 50% 30%, #1c2532, #0b0f16)',
        bgMid:     '#141b26',
        accent:    '#8fb8d0',
        highlight: '#dcebf4',
      },
      sprites: {
        scene: 'scene/scene_taa_briefing_return.png',
      },
      resolveLabel: 'Confront the Source',
      resolveNag: 'The dossier is incomplete',
      hideResolveOffAnchor: true,          // the confrontation exists only in the chamber (L7/L0 pattern)
      ranksUp: true,                       // final promotion: The Unforged → ARCHITECT OF THE CHAIN (R6 capstone)
      rankUpText: "Architect of the Chain. Built by every hand that ever passed a seed across a boundary. The chain is whole enough to carry it. That is the work of an architect making sure it stands.",
      teaches: {},
      // Companion voice, 3×3 (content firewall: companion-keyed only, never discipline).
      // The FULL tier leans into each companion's finale stance — emotional tinting
      // (§6), while discipline tints structurally on the verdict screen (§5b).
      taaCommsHints: {
        oolian: {
          low:  "Yvi, measured as ever: \"Two years of signal-chasing, and the trace still resolves. Note what that means, Archivist: the one forgery they could not finish is the one that identifies them. Start with Nova — the residue analysis is hers. Then make the console give you the write-path. Structure first. The argument comes later.\"",
          mid:  "Yvi: \"Look at the shape of what you are assembling. Chartered. Funded. Continuous for decades. This is not a criminal hiding from the Concord — it is an institution operating inside it, with a thesis it believes is load-bearing. That makes the confrontation a different kind of problem. You cannot arrest an argument. You can only answer it.\"",
          full: "Yvi: \"The dossier is complete and internally consistent: one hand, five cuts, one thesis. I have run their claim every way I know. The dangers they cite are real — and the record of what sharing has built is also real, and larger. When you stand in that chamber, remember you are not choosing between a villain and a hero. You are choosing what the evidence becomes. Choose like an archivist.\"",
        },
        rhessi: {
          low:  "Saren, quiet and sharp: \"So the knife finally has a hand. Two years is a long stalk — don't rush the last steps. Hear Nova out, then squeeze the console for the write-path. And watch yourself in that facility. A place that polite has been expecting company.\"",
          mid:  "Saren: \"Here's what unsettles me: they aren't hiding. Charter on file, credentials current, door open. Deceivers hide. Believers wait for you. Whatever you meet in that chamber is going to be calm, reasonable, and certain it's the responsible one — and that is the most dangerous kind of honest there is. Get their thesis from their own mouth. Make them say it to your face.\"",
          full: "Saren: \"Everything's in the dossier now. One hand. Five forgeries. A cause they'd do again tomorrow. I've read threats my whole life, and this one reads clean — no greed in it, no spite. Just a fear big enough to justify anything. That's why the ending is yours, not mine. Whatever you write into that record — write it so whoever reads it next can still smell the danger from both directions.\"",
        },
        vressk: {
          low:  "Korl, low and close: \"Friend. The cold trail is warm at last. I can feel it the way I felt the garden — something that was reaching away from us for years, now standing still, waiting to be found. Go gently. Gather what Nova kept for you first. Endings deserve to be walked toward, not run at.\"",
          mid:  "Korl: \"I have been feeling for them, friend — the ones at the end of the thread. And what I feel is not hate. It is grief, held so long it has gone hard. They cut the places where we reach each other because a reaching once wounded them. That does not make the cutting right. But you should know, before you stand in front of it, that it is grief you will be facing.\"",
          full: "Korl: \"The whole shape is in your hands now — the trace, the method, the name, the works, the why. When you enter what you decide, remember what the chain has felt like all this way: warm where it held, cold where they cut it. Both of those are true at once, friend. Whatever your record says, let it keep the warmth AND the scar. That is what my kind would call telling it whole.\"",
        },
      },
      // ── The CASE DOSSIER (the identity-assembly surface — engine: showDossier) ──
      // The 5 required clues ARE these facets; the profile reveals when all 5 land.
      dossier: {
        title: 'Case Dossier — The Source',
        sub: 'Assemble the source of the forgeries. Five facets remain sealed until the record yields them.',
        facets: [
          { tag: 'TRACE',    clue: 'trace_followed',   title: 'The Residue',    line: 'The live insertion carried a compression signature. Two years on, it has not decayed — and it runs forward, not back.' },
          { tag: 'METHOD',   clue: 'reachback_mapped', title: 'The Reach-Back', line: 'Archival write-access, threaded backward through sanctioned restoration channels. The forger worked from the present, with clearance.' },
          { tag: 'IDENTITY', clue: 'study_identified', title: 'The Study',      line: 'Agricultural Regression Study. Chartered 2311, the decade after the karreth ruling. Funded. Patient. Legal.' },
          { tag: 'WORKS',    clue: 'works_assembled',  title: 'The Long Work',  line: 'Five forgeries. One hand. Every node where agricultural knowledge crossed a boundary — displayed, by them, as accomplishments.' },
          { tag: 'MOTIVE',   clue: 'thesis_heard',     title: 'The Thesis',     line: 'Shared cultivation ends in shared collapse. Isolation, they say, is mercy. They believe it completely.' },
        ],
        profile: {
          img: 'c2/npc/ars_delegate/ars_delegate.png',
          name: 'AGRICULTURAL REGRESSION STUDY',
          cue: 'The source has a face now — and it is waiting for you in the chamber.',
        },
      },
      // ── The confrontation beat (resolve at the chamber anchor → this, → the verdict) ──
      confrontation: {
        title: 'Confront the Source',
        lines: [
          "The delegate does not argue when you rise. They step back from the platform as if they had been keeping your place at it, and the holographic threads — the cut ones, the whole ones — turn slowly between you.",
          "\"Every record you have ever touched, you touched to keep it true. Whatever you enter here will outlive your rank and everyone who remembers this room. Write knowing that each of us believes we are protecting the garden.\"",
          "The permanent record opens before you, patient as soil. It has been waiting two years. It can wait one more breath.",
        ],
        button: 'Give your answer',
      },
      // ── The 3-way VERDICT (finale-restyled solution-choice; no ending punished) ──
      solutionChoice: {
        finale: true,
        header: '✦ The Final Entry',
        prompt: 'The confrontation is over. The permanent record waits for what you write into it.',
        confirmLabel: 'Enter the Record',
        options: [
          {
            label: 'THE CHAIN MUST END',
            sub: 'Concede the thesis. Knowledge stays species-bound.',
            response: "\"Thank you. I hope you never learn whether we were right.\"",
            ending: {
              title: 'The Chain Goes Dark',
              core: [
                "The record holds your concession: that the reaching between kinds of life, however beautiful, carries a risk no one can bound — and that the responsible act was to stop. The exchange programs sunset. The summit gardens are archived as monuments instead of beginnings. Each species keeps its own seeds, its own soil, its own counsel.",
                "You spent two campaigns keeping the chain true, and your last act as its keeper was to end it deliberately. History will know exactly what was given up, and why, and by whom. You made sure of that. It is the strangest kind of faithfulness, and it is yours.",
              ],
              codas: {
                oolian: "I have checked your reasoning a hundred ways, and I cannot fault the caution — only mourn the data we will never gather. It was an honor to reach with you, while reaching was allowed.",
                rhessi: "I won't pretend I'm not grieving the bigger world. But you chose it awake, and that is more than most.",
                vressk: "It is quiet now, friend. So quiet. I will keep the memory of how the threads felt when they were warm — someone should, and my kind remembers longest.",
              },
            },
          },
          {
            label: 'THE CHAIN MUST HOLD',
            sub: 'Sharing is worth the risk. The record stays open.',
            response: "\"Then it is on the record that when the collapse comes, we tried. We will not forge again — you have made that impossible. We will simply be right too late.\"",
            ending: {
              title: 'The Chain Holds Open',
              core: [
                "The record holds your verdict: that the chinampa builders teaching the lake, the seed-keepers starving beside their seeds, the wheat crossing borders in famine years, the bloom that taught the Concord to question its own rules, the garden where three species read one soil — that this lineage is not a hazard to be contained but the single most consistently good idea life has ever had. The chain stays open, and every future crossing will carry your countersignature.",
                "You have also, permanently and on the record, made an enemy of a patient institution that believes you have doomed worlds — and that will now spend its charter watching for the day you are proven wrong. Vindication with a shadow. The chain's keepers have always lived there. Now its architect does too.",
              ],
              codas: {
                oolian: "The data agreed with you: across every node we walked, reaching helped more than it harmed, and by margins that were not close. Now we defend the proof — rigorously, forever. I would not want other work.",
                rhessi: "You called their bluff and signed your name to it. Stay sharp — a believer who loses the argument doesn't stop believing, they start waiting. Fortunately, so do I.",
                vressk: "The threads are warm again, friend — all of them, every reaching we saved. Somewhere a hand my kind has never touched is planting something we have no name for yet. Because of you, we will get to learn it.",
              },
            },
          },
          {
            label: 'THE RECORD, NOT THE VERDICT',
            sub: 'Preserve both arguments, unresolved, for every archivist to come.',
            response: "You enter neither a concession nor a verdict. You enter the entire case — their thesis at full strength, the chain's works at full strength, the five forgeries, the one quarantined world, the summit that succeeded — both arguments, complete, side by side, unresolved. Validated as an argument. Sealed as permanently open.\n\nThe delegate stares at the platform for a long time. \"You are not going to answer us,\" they say — and then, slowly, with something close to wonder: \"You are going to make everyone answer us. Forever.\"\n\n\"Yes,\" you say. It is the first word you have spoken in the chamber. It is enough.",
            ending: {
              title: 'The Argument Is Kept',
              core: [
                "The record holds the debate itself: the strongest case ever made against the chain, preserved intact beside the strongest case ever lived for it — and a keeper's note, in your hand, that the question belongs to whoever inherits it, each generation, every time. No forged answer. No imposed one either. The ARS's fear will never again need a forgery to be heard, and the chain's worth will never again rest on nobody asking.",
                "It was never an archivist's place to settle the argument. It was an archivist's place to keep it true, and whole, and available — and you have, at the one moment in history when you could have written the ending instead. The job, made into the verdict. There is no higher rank than that.",
              ],
              codas: {
                oolian: "Recording both arguments at full strength was the only conclusion the evidence actually supported. You resolved it correctly, Archivist — by refusing to resolve what is not yet resolvable. That is not indecision. That is precision.",
                rhessi: "You gave neither side the satisfaction of a verdict, and now every generation has to stay suspicious on its own. Ha. I taught you distrust, and you built a monument out of it.",
                vressk: "You kept the question breathing, friend. Warm and scarred at once, the way true things are. Someone not yet born will stand where you stood, feel both, and choose again — and that is the longest reaching of all.",
              },
            },
          },
        ],
      },
      locations: [
        // ── 1 · The TAA Archive (open; Nova + Zel'keth, two years on) ──
        {
          id: 'archive_return',
          label: 'The TAA Archive',
          requires: null,
          anchorPoint: false,
          scene: 'scene/scene_taa_briefing_return.png',
          bannerLocation: 'TAA Facility',   // banner geography: you're AT the TAA, not Concord space (author-locked 2026-07-14; L3 precedent)
          sceneWindow: { x: 5, y: 70, w: 226, h: 108 },   // the Briefing Chamber's windows (C1 L7 spec, reused)
          // Living-bg glow-pulse — REUSED from C1 L7's briefing_chamber_return (same room,
          // same scene). Glow-only (no frameB/shimmer) so the window starfield still drifts
          // behind it. Warm amber KEPT (author-locked 2026-07-14): the window shows the
          // grove's warm plants, so the amber reads as grove-light spilling in.
          livingBg: {
            period: 4.0, bMin: 0, bMax: 1, ease: 'sine',
            glow: { color: '#f0b552', max: 0.30, size: 40, x: 50, y: 54, phaseOffset: 0 },
          },
          sources: {
            // Dr. Nova (REQUIRED — TRACE; testimony)
            nova: {
              type: 'conversation', speaker: 'Dr. Nova', personality: 'professional',
              evidenceType: 'testimony',
              clueTag: 'trace_followed', icon: '👩‍🌾', label: 'Speak with Dr. Nova', actionLabel: 'Speak with Dr. Nova',
              learned: "Dr. Nova has spent two years following the last forgery with you in mind: it does not run backward into history like every corruption before it. It runs forward, into the present, toward a registered Concord facility.",
              sprites: { spritesheet: 'npc/nova/spritesheet_unmasked.png', spritesheetJson: 'npc/nova/spritesheet_unmasked.json' },
              teach: { target: '#dossier-btn', note: 'A Case Dossier has been opened for this investigation — you will find it in your Field Notes. Every facet you resolve assembles there, until the source has a face.' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"Archivist. The garden is thriving, in case you were going to be polite and ask. This is not about the garden. It's about what they left behind when you interrupted them — the one mistake in five perfect crimes. We found where it goes.\"",
                  options: [
                    { label: 'Show me the trace.', goto: 'trace' },
                    { label: 'How is the garden, really?', goto: 'garden' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                trace: {
                  text: "\"When the overwrite was interrupted mid-write, it couldn't seal itself. This is what kept me up at night for two years. Every corruption you ever chased decayed backward into history. This one doesn't decay at all. It isn't old, it's CURRENT. \n\nWe followed it forward. It ends at a chartered facility in Concord space that has never once refused a TAA query. They answer everything, politely, and tell us nothing. I can get you to the door but that is all.\"",
                  revealsClue: 'trace_followed',
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Take the trace to the Thread Console.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                garden: {
                  text: "\"The inoculation took. The web regrew across every terrace by the second spring — you can stand at the top now and not tell where the cut was. The summit record held, too. Three species read one soil and the permanent record says so, because you were standing in the room when someone tried to say otherwise.\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The trace is loaded on the console. Two years of my life are in that thin little line, Archivist — go make them count.\"",
                  endsConversation: true, exitLabel: 'Head to the Thread Console.',
                },
              },
            },
            // Zel'keth (INSIGHT — the shape of the thing; testimony)
            zelketh: {
              type: 'conversation', speaker: "Zel'keth", personality: 'curious',
              evidenceType: 'testimony',
              insight: true,
              clueTag: 'concord_shadow', icon: '👁', label: "Consult Zel'keth", actionLabel: "Consult Zel'keth",
              learned: "Zel'keth's counsel: whatever is at the end of the trace operates INSIDE Concord officialdom — chartered, funded, procedurally clean. The Concord has no precedent for prosecuting a body that has forged only the past. Whatever justice happens in that chamber, the record you enter may be the only verdict there ever is. Insight, not a facet: the weight of the confrontation, named before you carry it.",
              sprites: { alienPortrait: true, alienIcon: 'portrait_alien_neutral.png' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"Before you go, Archivist, I would have you understand what you are walking into. Not the danger. The SHAPE. Ask.\"",
                  options: [
                    { label: 'Who could have done this?', goto: 'inside' },
                    { label: 'What happens to them afterward?', goto: 'after' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                inside: {
                  text: "\"That is the wrong question, and I say so gently. You will have their name within the hour; the console will give it to you. The right question is: what KIND of thing could have done this?\n\nConsider. Archival write-access. Restoration credentials. Decades of funding that no auditor ever flagged. Whatever sits at the end of your trace is not hiding. It is inside the house.\"",
                  revealsClue: 'concord_shadow',
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                after: {
                  text: "\"I have consulted every precedent the Concord keeps. There is no statute for forging the past. How could there be? Until you, no one could REACH it. There will be hearings, perhaps. Charters reviewed.\"",
                  options: [
                    { label: 'I have another question.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"The shape does not change with re-asking, Archivist. Inside the house. No precedent. Your record as the only verdict.\"",
                  endsConversation: true, exitLabel: 'Step back.',
                },
              },
            },
          },
        },
        // ── 2 · The Thread Console (unlocks on the trace; the METHOD + IDENTITY terminals) ──
        {
          id: 'thread_console',
          label: 'Thread Console',
          requires: { clueFound: 'trace_followed' },
          lockHint: "Nova has the trace — hear her out first. The console can only follow what she hands you.",
          anchorPoint: false,
          bannerLocation: 'TAA Facility',   // banner geography: still at the TAA (author-locked 2026-07-14)
          // Reuses C1 L0's author-tuned console block verbatim (same as C2 L0 — the
          // breathe + blue glow + thread shimmer; the room where every thread starts,
          // now running its last query).
          scene: 'scene/scene_taa_console.jpg',
          livingBg: {
            frameB: 'scene/scene_taa_console1.jpg',
            period: 5.5, bMin: 0.44, bMax: 1.0, ease: 'sine',
            glow: { color: '#1461d8', max: 0.50, size: 44, x: 51, y: 38, phaseOffset: -0.5 },
            shimmer: { color: '#8fd8ff', count: 50, speed: 25, colX: 51, colW: 16, top: 5, bottom: 72, size: 2.5, max: 0.35, blur: 8.0, wobble: 8.0 },
            activate: { settle: 0.45, duration: 3.5, startPeriod: 0.7, endPeriod: 0.06, pulseSharpness: 0.2, endBOpacity: 0.70, endGlowOpacity: 0.40, ease: 'accel', particleBoost: 5.0, flash: 0.75 },
          },
          sources: {
            // The trace scan (REQUIRED — METHOD; forensics)
            trace_scan: {
              type: 'archive', speaker: 'Thread Console',
              evidenceType: 'forensics',
              clueTag: 'reachback_mapped', icon: '📡', label: 'Trace the Signature',
              sprites: { iconImg: 'UI/portrait_taa_scan.png' },
              learned: "The write-path, mapped. The forger never traveled anywhere: they used archival write-access, threaded BACKWARD through the TAA's own sanctioned channels with valid credentials. \n\nOne hand. Working from the present. With clearance.",
              nodes: {
                start: {
                  text: "The console wakes under your hands the way it has since your first day. \n\nYou load Nova's residue. For the first time in two campaigns, the thread bends FORWARD.",
                  options: [
                    { label: 'Run the trace.', goto: 'scan' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                scan: {
                  type: 'terminal',
                  text: "> RESIDUE TRACE — compression signature, First Garden insertion\n  signature match: chinampa forgery ............ EXACT\n  signature match: consumption report .......... EXACT\n  signature match: failure report .............. EXACT\n  signature match: ratification record ......... EXACT\n  signature match: live overwrite .............. ORIGIN\n  conclusion:      ONE HAND. FIVE FORGERIES.\n\n> WRITE-PATH ANALYSIS\n  vector:      TAA restoration channels (sanctioned)\n  direction:   PRESENT → PAST (reach-back writes)\n  credentials: CURRENT · VALID · UNREVOKED\n\n  They never traveled, never trespassed.",
                  revealsClue: 'reachback_mapped',
                  options: [
                    { label: 'Cross-reference the credentials.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The charter query (REQUIRED — IDENTITY; provenance)
            charter_query: {
              type: 'archive', speaker: 'Thread Console',
              evidenceType: 'provenance',
              clueTag: 'study_identified', icon: '🗄', label: 'Resolve the Credentials',
              sprites: { iconImg: 'UI/portrait_taa_device.png' },
              learned: "The credentials resolve. \nAGRICULTURAL REGRESSION STUDY: a chartered Concord research body, founded 2311 — the decade after the karreth ruling. Continuous funding, one registered facility, a stated remit of 'assessment of cross-biome agricultural risk.' Everything about it is filed, legal, and patient. The chain of custody on the forgeries' credentials runs straight to its door, and its door is open.",
              nodes: {
                start: {
                  text: "The credentials on the write-path are real. Somebody OWNS them — has owned them for a long time, paid for them, renewed them, filed the paperwork. Provenance is just a chain, and chains have ends.\n\nYou put the credentials to the Concord registry and ask the oldest question in your profession: where did this come from?",
                  options: [
                    { label: 'Cross-reference the registry.', goto: 'charter' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                charter: {
                  type: 'terminal',
                  text: "> CONCORD REGISTRY — credential resolution\n  holder:     AGRICULTURAL REGRESSION STUDY (chartered body)\n  chartered:  2311 — ten years after the karreth ruling\n  remit:      'assessment of cross-biome agricultural risk'\n  funding:    continuous, 78 years, never flagged\n  facilities: ONE (1) registered chamber, Concord space\n  status:     ACTIVE · query acknowledged · access GRANTED\n\n  They answered the registry ping in four seconds.\n  They have granted you entry before you asked for it.",
                  revealsClue: 'study_identified',
                  options: [
                    { label: 'Go to the chamber.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
        // ── 3 · The ARS Chamber (ANCHOR — the works, the delegate, the verdict) ──
        {
          id: 'ars_chamber',
          label: 'The ARS Chamber',
          requires: { clueFound: 'study_identified' },
          lockHint: 'The trace has a shape but not a name yet. Resolve the credentials at the Thread Console — the chamber will let you in when you know whose it is.',
          anchorPoint: true,
          scene: 'c2/scene/scene_ars_chamber.png',
          // The narrow viewport (a single quarantined world hangs in isolation) — the
          // scene PNG's alpha hole, verified x105–133 / y104–180 (2026-07-13). Sparse
          // stars per the spec.
          sceneWindow: { x: 105, y: 104, w: 29, h: 77 },
          // FX ★ ALL AUTHOR-TUNED 2026-07-13 (tuner = c2/resources/demos/locationfx/lvl6.html):
          // • lamp — the cold-cyan holographic underlight on the dais.
          // • statusBlink `regions` — the wall-display pulse: a deterministic random
          //   point inside one of the two display polygons each cycle (engine
          //   blinkRegionPoint; never twice in the same place).
          // • holo — THE DAIS HOLOGRAM: wireframe polyhedron (variant 4, picked from
          //   the demo's 4-way comparison; variants 1–3 are demo-only). Tiny offscreen
          //   canvas → ×2 blit, smoothing off (one holo pixel = one art pixel),
          //   fps-stepped, red segment pulses matching the wall-display #e22f34.
          locationFx: {
            lamp: { x: 50, y: 58, size: 35, color: '#4fd6e0', intensity: 0.25, flicker: 0.35, flickerSpeed: 3.5 },
            statusBlink: [ {
              color: '#e22f34', size: 11, period: 3,
              regions: [
                [ [5.5,38.1], [18.8,40.6], [18.8,59.3], [5.9,61.5] ],   // A — left display
                [ [80.9,40.5], [94.2,37.9], [94,62.3], [81,60] ],       // B — right display
              ],
            } ],
            holo: { type: 4, x: 50, y: 59.5, size: 120, color: '#7fe8ff',
                    opacity: 0.85, rot: 0.35, pulse: 0.15, fps: 10, flicker: 0.35 },
          },
          sources: {
            // The evidence dais (REQUIRED — WORKS; provenance)
            evidence_dais: {
              type: 'examination', speaker: "The Evidence Platform", personality: 'stoic',
              evidenceType: 'provenance',
              clueTag: 'works_assembled', icon: '📑', label: "Examine the Platform",
              sprites: { iconImg: 'c2/ui/portrait_forgery_evidence.jpg' },
              learned: "The Study's own display: all five forgeries, hung in holographic array beside the severed thread-diagrams of the chain — Tenochtitlan, Leningrad, the Green Revolution, the karreth vault, the First Garden. Not hidden. CURATED. Each cut annotated in their own hand as a 'necessary intervention.' \n\nThey are not ashamed. They are presenting it.",
              nodes: {
                start: {
                  text: "The chamber rhymes with the TAA the way a reflection rhymes with a face. Curved walls, even light, an insignia that is almost — almost — the one you wear. And at its center, a platform where records turn slowly in cold cyan light.\n\nYou know these records. You un-forged every one of them.",
                  options: [
                    { label: 'Study the display.', goto: 'works' },
                    { label: 'Why display it at all?', goto: 'why' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                works: {
                  text: "All five. The chinampa collapse that never happened. \nThe seed bank eaten in a winter when no one ate it. \nThe wheat that supposedly fell. The ratification that predated its own diagnosis. \nThe First Garden overwrite, still bearing the scar where you interrupted it. \n\nHung beside them: the thread-diagrams of the knowledge chain, each crossing-point marked, each cut annotated in a precise, unhurried hand. 'Intervention 1. Intervention 2.' Necessary, say the notes. Regrettable, say the notes. COMPLETE, says the arrangement — five interventions, displayed the way another institution would display its founding documents.",
                  revealsClue: 'works_assembled',
                  options: [
                    { label: 'Look somewhere else.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                why: {
                  text: "The annotations are METHODOLOGY. Sample, intervention, projected outcome. Someday, to be reviewed and found rigorous.\n\nThe chamber is comfortable. It was built by people who intended to spend long, calm decades in it, doing what they believed was the most responsible work in the Concord.",
                  options: [
                    { label: 'Look somewhere else.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
              },
            },
            // The ARS delegate (REQUIRED — MOTIVE; testimony; the debate itself)
            ars_delegate: {
              type: 'conversation', speaker: 'The ARS Delegate', personality: 'professional',
              evidenceType: 'testimony',
              clueTag: 'thesis_heard', icon: '🜍', label: 'Face the Delegate', actionLabel: 'Face the Delegate',
              learned: "The Study's delegate, in their own words: cross-species agricultural exchange is an existential hazard — when biospheres teach each other to farm, they contaminate each other, and the long arc ends in collapse across worlds. \n\nCutting the historical nodes that made interspecies trust inevitable. They grieve the method. They do not doubt the thesis. They are not lying about any of it, and that is the hardest part.",
              sprites: { spritesheet: 'c2/npc/ars_delegate/spritesheet.png', spritesheetJson: 'c2/npc/ars_delegate/spritesheet.json' },
              revisit: 'revisit',
              nodes: {
                start: {
                  text: "\"Archivist. Two years, from the garden to our door — faster than we projected, and we projected generously. You have questions. We have never refused a question. Ask.\"",
                  options: [
                    { label: 'Why did you do it?', goto: 'thesis' },
                    { label: 'You forged the record.', goto: 'method' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                thesis: {
                  text: "\"Because every reaching is also a road. When two biospheres teach each other to cultivate, they do not exchange only wisdom, Archivist. They exchange organisms. Chemistries. Assumptions bred into seeds over a billion years of separate evolution. Your own record — YOUR record, the true one — is a ledger of near-misses. The bloom that nearly died of a universal rule. The blight your Ireland taught the world about monoculture. Every 'lesson learned' was an accident survived.\n\nWe modeled the long arc. Not decades — centuries. Cross-biome cultivation ends, with a consistency that broke every optimist we ever employed, in collapse. Not this generation. Not the next. But it ends there. A species that farms alone survives its own mistakes. Species that farm TOGETHER share their mistakes at the speed of trust.\"",
                  options: [
                    { label: 'And so the forgeries.', goto: 'conviction' },
                    { label: "Ask about the world in the viewport.", goto: 'grief' },
                  ],
                },
                conviction: {
                  text: "\"We could not stop the present. But the present stands on the past. Erase the proof that sharing ever worked and interspecies trust never accumulates. The chain does not have to be cut in the present.\n\nYou have unmade five of our interventions. We hold no anger — you did your work honestly, which is more than we can claim. But before you write your ending, you deserved to hear it whole.\"",
                  revealsClue: 'thesis_heard',
                  options: [
                    { label: 'I have more to ask.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                // ── Optional depth (no clue) ──
                method: {
                  text: "\"Yes. Five times, with sanctioned tools, in the direction no law anticipated. If a statute existed for it, we would cite ourselves under it — we drafted one, in fact, and filed it with the Concord as a recommendation. It is still pending review.\"",
                  options: [
                    { label: 'I have more to ask.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                grief: {
                  text: "\"Virel. My grandmother's world. An early exchange — two species, two crop lineages, a shared harvest to seal a friendship. The blight that crossed with the seed stock was harmless in its home biosphere. Virel has been under quarantine for ninety years. The friendship survived, they tell me. The farms did not. Nothing grows there now that is not engineered to.\"",
                  options: [
                    { label: 'I have more to ask.', goto: 'start' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                revisit: {
                  text: "\"Our testimony stands, Archivist. When your dossier is complete, the record is yours to enter — we will not interfere with the truth. We never have. Only with its past.\"",
                  endsConversation: true, exitLabel: 'Step back.',
                },
              },
            },
            // The viewport (INSIGHT — their proof-case, made visible; forensics)
            // Portrait: bespoke Virel quarantine-world art (author-generated 2026-07-13,
            // replacing the interim L4 Concord-viewport borrow — spec §3).
            viewport: {
              type: 'examination', speaker: 'The Narrow Viewport', personality: 'stoic',
              evidenceType: 'forensics',
              insight: true,
              clueTag: 'quarantine_seen', icon: '🪐', label: 'Look Through the Viewport',
              sprites: { iconImg: 'c2/ui/portrait_quarantine_viewport.jpg' },
              learned: "Virel, seen with your own eyes: a quarantined world, ninety years silent, its farmlands dead of a blight that crossed during an early cross-species seed exchange. The Study built their chamber so that it is visible from the platform — their entire argument, hanging in the dark, real. The chain's record is longer and brighter than this one window. But the window is not a forgery, and pretending otherwise would be one.",
              nodes: {
                start: {
                  text: "The viewport is narrow — deliberately, you suspect, like a museum frame. Beyond it hangs a single world in managed darkness: pale, cloud-streaked, wrong in a way that takes a moment to name. No lights on its night side. No stations in its approaches except the quarantine beacons, blinking their patient, decades-old warning.",
                  options: [
                    { label: 'Look closer.', goto: 'virel' },
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
                virel: {
                  text: "Virel. The registry marker the delegate spoke of is visible from here — a ninety-year quarantine, renewed without ceremony every decade, for a blight that rode a gift of seeds between two species who only meant friendship by it.\n\nThe chamber was built so that this window faces the platform. Every day of their long work, they looked up from the forgeries and saw this. You have five living gardens in your record, and they have one dead world in their window, and both of you are telling the truth. Hold that. Whatever you write in the next hour should be written by someone who held it.",
                  revealsClue: 'quarantine_seen',
                  options: [
                    { label: 'Step back.', goto: '__exit__' },
                  ],
                },
              },
            },
          },
        },
      ],
      explanation: {
        title: 'The Source, On the Record',
        body: "The Agricultural Regression Study: chartered in the shadow of the karreth ruling, funded for seventy-eight patient years, staffed by people who watched one world die of a shared harvest and resolved that no world ever would again. They reached backward through the TAA's own restoration channels and cut the chain at every point where knowledge crossed a boundary — Tenochtitlan, Leningrad, the wheat, the bloom, the garden — not to destroy the truth, but to buy, at the truth's expense, futures they believed only isolation could protect. You traced them, named them, read their works, and heard their testimony from their own mouth. Then you did the one thing no forger, and no Study, could ever do: you entered your answer in the open, under your name, in a record anyone may read forever.\n\nThat entry — whatever it says — is the last line of this case and the first line of everything after it. The chain of agricultural knowledge now carries the full argument about its own worth, permanently, in the hand of the one archivist who walked all of it. The record holds. It holds even this.",
        funFact: "Deep in the Arctic, on the island of Spitsbergen, the real world keeps something like an answer to the ARS: the Svalbard Global Seed Vault, where over 1.2 million seed samples from nearly every nation — including nations that do not speak to each other — sleep side by side in the permafrost. Founded in 2008, it exists precisely because seed-keepers refused to let any single disaster, war, or ideology decide the future of agriculture alone. Its first-ever withdrawal, in 2015, went to researchers cut off from their own genebank in Aleppo by the Syrian civil war; they rebuilt the collection in Lebanon and Morocco and have been depositing it back into the vault ever since — knowledge crossing a boundary to heal, one more time, on the record.",
      },
    },
  ],
};
window.HHH_C2_DATA = HHH_C2_DATA;
