// ════════════════════════════════════════════════════════════════
// BeyTracker X — Database
// ════════════════════════════════════════════════════════════════

// ── BLADE LISTS ──────────────────────────────────────────────
const BX_BLADES = [
  "Dran Sword","Hells Scythe","Wizard Arrow","Knight Shield","Knight Lance",
  "Shark Edge","Leon Claw","Viper Tail","Rhino Horn","Dran Dagger",
  "Hells Chain","Phoenix Wing","Wyvern Gale","Unicorn Sting","Sphinx Cowl",
  "Tyranno Beat","Weiss Tiger","Cobalt Dragoon","Black Shell","Whale Wave",
  "Bear Scratch","Crimson Garuda","Shelter Drake","Tricera Press","Samurai Calibur",
  "Goat Tackle","Cobalt Drake","Phoenix Feather","Mammoth Tusk","Croc Crunch",
  "Samurai Steel","Shinobi Knife","Tyranno Roar",
];

const UX_BLADES = [
  "Dran Buster","Hells Hammer","Wizard Rod","Shinobi Shadow","Leon Crest",
  "Phoenix Rudder","Silver Wolf","Samurai Saber","Knight Mail","Ptera Swing",
  "Impact Drake","Ghost Circle","Golem Rock","Scorpio Spear","Shark Scale",
  "Clock Mirage","Meteor Dragoon","Mummy Curse","Aero Pegasus","Wyvern Hover",
  "Orochi Cluster",
];

const CX_BLADES = [
  "Courage Dran","Wizard Arc","Perseus Dark","Hells Reaper","Rhino Reaper",
  "Fox Brush","Pegasus Blast","Cerberus Flame","Whale Flame","Sol Eclipse",
  "Wolf Hunt","Emperor Might","Phoenix Flare","Bahamut Blitz","Knight Fortress",
  "Ragna Rage","Kraken Wriggle","Valkyrie Volt","Leon Fang","Antler Stag",
];

// ── CX SUB-PARTS ─────────────────────────────────────────────
const CX_LOCK_CHIPS = [
  "Dran","Wizard","Perseus","Valkyrie","Pegasus","Emperor","Sol","Wolf",
  "Phoenix","Knight","Hells","Leon","Shark","Rhino","Cobalt","Cerberus",
  "Fox","Whale","Bahamut","Ragna","Kraken",
];

const CX_MAIN_BLADES = [
  "Brave","Arc","Dark","Reaper","Blast","Flame","Eclipse","Hunt",
  "Might","Flare","Blitz","Fortress","Rage","Wriggle","Volt","Fang","Brush","Fort",
];

const CX_ASSIST_BLADES = [
  "Slash","Heavy","Free","Assault","Zillion","Dual","Turn","Massive",
  "Wheel","Jaggy","Knuckle","Round","Vertical","Erase","Charge","Bumper",
];

// ── RATCHETS ─────────────────────────────────────────────────
const RATCHETS = [
  "1-60","2-60","3-60","4-60","5-60","7-60","9-60",
  "1-70","3-70","4-70","5-70","7-70","9-70","0-70",
  "0-80","1-80","2-80","3-80","4-80","5-80","6-80","7-80","9-80",
  "D5-70","S6-60","F0-60","ATr",
];

// ── BITS ─────────────────────────────────────────────────────
// [ name, type, speed, stamina, defense, burst, dash, notes ]
// Valori fonte: beytrackr.com (scala 0-100 → 0-10)
const _B = (n,t,sp,st,df,bu,da,notes) => ({ name:n, type:t, speed:sp, stamina:st, defense:df, burst:bu, dash:da, notes });

const BITS_DATA = [
  // ── Attack ──────────────────────────────────────────────────
  _B("Accel",       "Attack",  4, 1, 1, 8, 4,  "Alta burst resistance, UX. Dash medio"),
  _B("Cyclone",     "Attack",  4, 1, 0.5,8,4.5,"Aggressivo, BX. Burst resistance alta"),
  _B("Flat",        "Attack",  4, 1, 1.5,8, 3.5,"Pattern a fiore aggressivo, alto potenziale KO"),
  _B("Free Flat",   "Attack",  0, 0, 0, 0, 0,  "Dati non ancora disponibili (BX Blue)"),
  _B("Gear Flat",   "Attack",  5, 0.5,0.5,8,4, "Denti ingranaggio boost velocità Xtreme dash"),
  _B("Gear Rush",   "Attack",  4.5,1,1, 8, 3.5,"Versione Gear della Rush, CX"),
  _B("Ignition",    "Attack",  5, 0.5,1.5,8,3, "CX Purple, molto aggressivo"),
  _B("Jolt",        "Attack",  3.5,1.5,1,8,4,  "Aggressiva, punto ridotto allo stadio, molto veloce sulla rail"),
  _B("Level",       "Attack",  4, 1.5,0.5,8,4, "3 livelli di velocità in base al contatto"),
  _B("Low Flat",    "Attack",  4.5,1, 0.5,8,4, "Profilo basso, ancora più aggressivo del Flat"),
  _B("Low Rush",    "Attack",  4.5,1.5,0.5,8,3.5,"Profilo ultra-basso, massimizza contatti ratchet"),
  _B("Quake",       "Attack",  5.5,0.5,0.5,8,2.5,"Alta velocità, BX Orange"),
  _B("Rubber Accel","Attack",  6, 0.3,1.7,8,2, "Unisce aggressività iniziale a stamina nella LAD"),
  _B("Rush",        "Attack",  4, 2, 1, 8, 3,  "Auto-KO ridotto, movimento consistente e sicuro"),
  _B("Taper",       "Attack",  3.5,2, 2, 8, 2.5,"Attacco con backup stamina, forte nel finale"),
  _B("Under Flat",  "Attack",  5.5,0.5,0.5,8,3.5,"Low flat estrema, aggancia rapidamente sulla rail"),
  _B("Vortex",      "Attack",  4.5,0.5,1, 8, 4, "CX, aggressivo con alta burst resistance"),
  // ── Stamina ─────────────────────────────────────────────────
  _B("Ball",        "Stamina", 1.5,5, 2.5,3, 1, "Top competitivo, alto LAD, perfetto su Wizard Rod"),
  _B("Disk Ball",   "Stamina", 1.5,5.5,2, 3, 1, "Disco grande, LAD eccellente e stabilità superiore"),
  _B("Elevate",     "Stamina", 3, 2, 1.5,3, 3.5,"Specialista spin equalization, chiave per Cobalt Dragoon"),
  _B("Free Ball",   "Stamina", 1, 6, 2.5,3, 0.5,"Ball girevole, ibrido stamina/difesa, burst ridotto"),
  _B("Gear Ball",   "Stamina", 1, 4.5,1.5,3, 3, "Variante ingranaggio del Ball, leggermente più mobile"),
  _B("Glide",       "Stamina", 2, 5.5,1, 3, 1.5,"Base rotonda, movimento bilanciato consistente"),
  _B("Hexa",        "Balance", 3, 3.5,3.5,8,1.5,"6 lati di stabilità, UX. Burst resistance alta"),
  _B("High Needle", "Defense", 1.5,5.5,2, 3, 1, "Punta stretta difesa/stamina, BX"),
  _B("Low Orb",     "Stamina", 0.5,5.5,2.5,3,1.5,"Orb compatta, ideale su build stamina basse, CX"),
  _B("Metal Needle","Defense", 0.8,3, 5.7,3, 0.5,"UX, alta difesa. Burst resistance bassa"),
  _B("Orb",         "Stamina", 1, 5, 3, 3, 1,  "Tenuta centrale passiva, ottima resistenza al burst"),
  _B("Yielding",    "Stamina", 1, 6.5,1.5,3, 1, "CX Orange, alta stamina"),
  _B("Zap",         "Balance", 3, 1.5,2, 8, 3.5,"UX, balance/attacco con alta burst resistance"),
  // ── Defense ─────────────────────────────────────────────────
  _B("Bound Spike", "Defense", 0.5,3, 6, 3, 0.5,"UX, difesa alta con buona stamina"),
  _B("Dot",         "Defense", 1, 3, 5.5,3, 1,  "Contatto minimo, eccellente evasione sotto pressione"),
  _B("Gear Needle", "Defense", 2, 1, 4, 3, 3,  "Difesa boost ingranaggio, si muove al contatto"),
  _B("Needle",      "Defense", 1, 3, 5, 3, 1,  "Punta aguzzo assorbe colpi, si muove al contatto"),
  _B("Spike",       "Defense", 1, 3.5,4.5,3,1,  "Molto stretto, evasione LAD massimizzata"),
  _B("Under Needle","Defense", 1, 2, 6, 3, 1,  "UX, alta difesa"),
  _B("Wedge",       "Defense", 0.5,3, 5.5,3,1,  "Resiste bene ai colpi grazie al piccolo punto di contatto"),
  _B("Wall Wedge",  "Defense", 4, 4, 6, 3, 1,  "Come Wedge ma più stabile grazie alle protuzioni laterali"),
  // ── Balance ─────────────────────────────────────────────────
  _B("Gear Point",  "Balance", 3, 1.5,2.5,8,3,  "Variante ingranaggio del Point, BX"),
  _B("High Taper",  "Balance", 3, 2, 2.5,8,2.5, "Versione alta del Taper, più stabile, BX"),
  _B("Kick",        "Balance", 3.5,1.5,2.5,8,2.5,"Incrocio Hexa/Taper: aggressività e LAD alta, CX"),
  _B("Merge",       "Balance", 5, 1, 2, 8, 2,   "BX, balance con alta velocità"),
  _B("Operate",     "Balance", 3.5,2.5,2.5,8,2.5,"CX — Comportamento variabile in base all'angolo di lancio"),
  _B("Point",       "Balance", 2.5,2.5,2.5,8,2.5,"Bilanciato attacco/stamina, flower pattern di movimento"),
  _B("Trans Kick",  "Balance", 3.5,2, 3, 8, 1.5,"Simile a Kick, abbassa il bey a contatto, CX"),
  _B("Trans Point", "Balance", 3.5,2.5,2.5,8,1.5,"Ampiezza ridotta, tocca la rail abbassando il bey"),
  _B("Unite",       "Balance", 2.5,3, 2.5,8,2,  "Unione Taper/Ball/Point. Alta velocità, poco controllo"),
  _B("Wall Ball",   "Stamina", 1.5,4.5,3, 3, 1, "Anello wall stabilizza contro il pavimento, CX"),
];

// Lookup rapidi derivati
const BITS_MAP  = Object.fromEntries(BITS_DATA.map(b => [b.name, b]));
const BIT_NAMES = BITS_DATA.map(b => b.name);
const BIT_TYPES = ["All", "Attack", "Stamina", "Defense", "Balance"];

// ── META PRESET ───────────────────────────────────────────────
const META_PRESETS = [
  // ── WC2025 + WBO top picks ──────────────────────────────────
  // Stamina
  { label:"Wizard Rod 9-60 Ball",         system:"UX", blade:"Wizard Rod",     ratchet:"9-60", bit:"Ball",      role:"Stamina",  tier:"S", note:"Benchmark stamina WC2025" },
  { label:"Wizard Rod 1-60 Hexa",         system:"UX", blade:"Wizard Rod",     ratchet:"1-60", bit:"Hexa",      role:"Stamina",  tier:"A", note:"Leobardo #1 WC2025" },
  { label:"Silver Wolf 9-60 Free Ball",   system:"UX", blade:"Silver Wolf",    ratchet:"9-60", bit:"Free Ball", role:"Stamina",  tier:"A", note:"Ibrido stamina/difesa" },
  { label:"Clock Mirage 4-55 Low Orb",    system:"UX", blade:"Clock Mirage",   ratchet:"4-55", bit:"Low Orb",   role:"Stamina",  tier:"B", note:"Build bassa, ottima LAD" },
  // Attack
  { label:"Aero Pegasus 3-60 Low Rush",   system:"UX", blade:"Aero Pegasus",   ratchet:"3-60", bit:"Low Rush",  role:"Attack",   tier:"S", note:"Leobardo #3 WC2025" },
  { label:"Aero Pegasus 7-60 Level",      system:"UX", blade:"Aero Pegasus",   ratchet:"7-60", bit:"Level",     role:"Attack",   tier:"S", note:"Leobardo #2 WC2025" },
  { label:"Phoenix Wing 1-60 Low Rush",   system:"BX", blade:"Phoenix Wing",   ratchet:"1-60", bit:"Low Rush",  role:"Attack",   tier:"A", note:"Alta velocità rail" },
  { label:"Shark Scale 1-70 Low Rush",    system:"UX", blade:"Shark Scale",    ratchet:"1-70", bit:"Low Rush",  role:"Attack",   tier:"A", note:"Balya #2 WC2025" },
  { label:"Shark Scale 3-60 Rush",        system:"UX", blade:"Shark Scale",    ratchet:"3-60", bit:"Rush",      role:"Attack",   tier:"A", note:"Alternativa alla combo sopra" },
  { label:"Wyvern Hover 9-60 Kick",       system:"UX", blade:"Wyvern Hover",   ratchet:"9-60", bit:"Kick",      role:"Attack",   tier:"A", note:"LA Combo della Viverna" },
  // Spin-Eq
  { label:"Cobalt Dragoon 5-60 Elevate",  system:"BX", blade:"Cobalt Dragoon", ratchet:"5-60", bit:"Elevate",   role:"Spin-Eq",  tier:"S", note:"Meta spin-eq BX" },
  { label:"Meteor Dragoon 7-60 Level",    system:"UX", blade:"Meteor Dragoon", ratchet:"9-60", bit:"Level",     role:"Spin-Eq",  tier:"A", note:"Come il bey sopra, eccellente attacker con ottima capacità di Spin-steal" },
];

// ── ROLE / TIER COLORS ───────────────────────────────────────
const ROLE_COL = {
  Attack:  "#ef4444",
  Stamina: "#22c55e",
  Defense: "#3b82f6",
  "Spin-Eq":"#a855f7",
  Balance: "#f59e0b",
};
const TIER_COL = { S:"#f59e0b", A:"#22c55e", B:"#00b4ff" };

// ── CALC COMBO STATS ─────────────────────────────────────────
// Dati fisici per ratchet: [height_mm, sides, bstBase, atkMod, defMod, staMod]
const RATCHET_DATA = {
  // 60mm height
  "0-60":[60,0,76,-3,-1,0], "1-60":[60,1,72,-2,0,0], "2-60":[60,2,70,-1,0,1],
  "3-60":[60,3,68,0,0,1],   "4-60":[60,4,66,0,1,2],  "5-60":[60,5,64,0,1,2],
  "6-60":[60,6,62,1,2,3],   "7-60":[60,7,60,1,2,3],  "9-60":[60,9,58,2,2,4],
  "S6-60":[60,6,63,0,2,2],  "F0-60":[60,0,70,-3,0,1],
  // 70mm height
  "0-70":[70,0,64,-4,1,-1], "1-70":[70,1,60,-3,2,-1], "2-70":[70,2,58,-2,2,0],
  "3-70":[70,3,56,-1,3,0],  "4-70":[70,4,54,0,3,1],   "5-70":[70,5,52,0,3,2],
  "7-70":[70,7,48,1,4,2],   "9-70":[70,9,46,2,4,3],   "D5-70":[70,5,53,0,3,2],
  "4-55":[55,4,70,1,1,1],
  // 80mm height
  "0-80":[80,0,48,-5,3,-2], "1-80":[80,1,44,-4,4,-2], "2-80":[80,2,42,-3,4,-1],
  "3-80":[80,3,40,-2,5,-1], "4-80":[80,4,38,-1,5,0],  "5-80":[80,5,36,0,5,0],
  "6-80":[80,6,34,0,5,1],   "7-80":[80,7,32,1,5,1],   "9-80":[80,9,30,2,5,2],
  // Special
  "Turbo": [70,0,65,-3,1,0],  "M-85":[85,0,28,-5,6,-3], "3-85":[85,3,30,-2,6,-2],
  "Operate": [70,5,6,5,6,0],
};

// ── PART WEIGHTS (grammi, fonte: beybladeplanner.com / beyblade wiki) ─────
const RATCHET_WEIGHTS = {
  "0-60":5.8,  "1-60":6.0,  "2-60":6.1,  "3-60":6.35, "4-60":6.4,
  "5-60":6.5,  "6-60":6.6,  "7-60":7.1,  "9-60":6.7,  "S6-60":6.5, "F0-60":5.9,
  "0-70":6.2,  "1-70":6.3,  "2-70":6.4,  "3-70":6.5,  "4-70":6.6,
  "5-70":6.7,  "7-70":6.9,  "9-70":6.8,  "D5-70":6.7, "4-55":6.0,
  "0-80":6.5,  "1-80":6.6,  "2-80":6.7,  "3-80":6.75, "4-80":6.8,
  "5-80":6.85, "6-80":6.9,  "7-80":7.0,  "9-80":6.85,
  "ATr":6.0,   "M-85":7.2,  "3-85":7.0,
};

const BIT_WEIGHTS = {
  // Attack
  "Accel":2.4,      "Cyclone":2.4,    "Flat":2.3,       "Free Flat":2.3,
  "Gear Flat":2.5,  "Gear Rush":2.5,  "Ignition":2.4,   "Jolt":2.4,
  "Level":2.5,      "Low Flat":2.2,   "Low Rush":2.3,   "Quake":2.4,
  "Rubber Accel":2.6,"Rush":2.4,      "Taper":2.4,      "Under Flat":2.2,
  "Vortex":2.4,
  // Stamina
  "Ball":2.4,       "Disk Ball":2.55, "Elevate":2.4,    "Free Ball":2.5,
  "Gear Ball":2.5,  "Glide":2.4,      "Low Orb":2.3,    "Metal Needle":2.3,
  "Orb":2.4,        "Yielding":2.4,   "Zap":2.4,
  // Defense
  "Bound Spike":2.3,"Dot":2.1,        "Gear Needle":2.3,"High Needle":2.3,
  "Needle":2.2,     "Spike":2.2,      "Under Needle":2.2,"Wedge":2.3,
  "Wall Wedge":2.41,
  // Balance
  "Gear Point":2.5, "Hexa":2.45,      "High Taper":2.4, "Kick":2.4,
  "Merge":2.4,      "Operate":2.4,    "Point":2.3,      "Trans Kick":2.4,
  "Trans Point":2.4,"Unite":2.4,      "Wall Ball":2.45,
};

// Pesi approssimativi delle blade BX/UX (metallo + plastica, fonte: wiki/beybxdb)
const BLADE_WEIGHTS = {
  // BX — media ~30-35g per blade standard
  "Dran Sword":31.5,    "Hells Scythe":31.0,  "Wizard Arrow":29.5,  "Knight Shield":32.0,
  "Knight Lance":31.0,  "Shark Edge":32.5,    "Leon Claw":31.5,     "Viper Tail":30.5,
  "Rhino Horn":33.0,    "Dran Dagger":31.0,   "Hells Chain":31.5,   "Phoenix Wing":33.5,
  "Wyvern Gale":30.5,   "Unicorn Sting":30.0, "Sphinx Cowl":31.0,   "Tyranno Beat":32.0,
  "Weiss Tiger":31.0,   "Cobalt Dragoon":33.0,"Black Shell":32.0,   "Whale Wave":30.0,
  "Bear Scratch":31.5,  "Crimson Garuda":32.0,"Shelter Drake":31.0, "Tricera Press":33.5,
  "Samurai Calibur":31.5,"Goat Tackle":31.0,  "Cobalt Drake":33.0,  "Phoenix Feather":30.5,
  "Mammoth Tusk":33.0,  "Croc Crunch":31.5,   "Samurai Steel":31.5, "Shinobi Knife":30.5,
  "Tyranno Roar":32.0,
  // UX — media ~32-37g (più metallo)
  "Dran Buster":34.0,   "Hells Hammer":33.5,  "Wizard Rod":32.0,    "Shinobi Shadow":33.0,
  "Leon Crest":33.5,    "Phoenix Rudder":33.0,"Silver Wolf":32.5,   "Samurai Saber":33.0,
  "Knight Mail":34.0,   "Ptera Swing":33.5,   "Impact Drake":36.0,  "Ghost Circle":32.0,
  "Golem Rock":35.5,    "Scorpio Spear":33.0, "Shark Scale":35.5,   "Clock Mirage":32.0,
  "Meteor Dragoon":34.5,"Mummy Curse":33.0,   "Aero Pegasus":34.0,  "Wyvern Hover":33.5,
  "Orochi Cluster":33.0,
  // CX — solo blade top layer, ~28-32g
  "Courage Dran":30.0,  "Wizard Arc":29.0,    "Perseus Dark":30.5,  "Hells Reaper":30.0,
  "Rhino Reaper":31.0,  "Fox Brush":29.5,     "Pegasus Blast":30.5, "Cerberus Flame":30.0,
  "Whale Flame":29.0,   "Sol Eclipse":30.0,   "Wolf Hunt":30.0,     "Emperor Might":31.0,
  "Phoenix Flare":30.0, "Bahamut Blitz":31.0, "Knight Fortress":31.5,"Ragna Rage":30.5,
  "Kraken Wriggle":30.0,"Valkyrie Volt":30.0, "Leon Fang":30.0,     "Antler Stag":30.5,
};

// CX sub-parts weights (g)
const CX_PART_WEIGHTS = {
  lockChip:  4.5,  // Lock Chip medio ~4-5g
  mainBlade: 18.0, // Main Blade ~16-20g
  assistBlade: 8.0,// Assist Blade ~7-9g
};

function calcComboWeight(combo) {
  if (!combo) return null;
  const bw = BLADE_WEIGHTS[combo.blade];
  const rw = RATCHET_WEIGHTS[combo.ratchet];
  const btw = BIT_WEIGHTS[combo.bit];
  if (!bw || !rw || !btw) return null;
  let total = bw + rw + btw;
  if (combo.system === "CX") {
    total += CX_PART_WEIGHTS.lockChip + CX_PART_WEIGHTS.mainBlade + CX_PART_WEIGHTS.assistBlade;
  }
  return Math.round(total * 10) / 10;
}

function calcComboStats(combo) {
  if (!combo) return null;
  const bData = BLADE_STATS[combo.blade];
  const rd    = RATCHET_DATA[combo.ratchet];
  const bit   = BITS_MAP[combo.bit];
  if (!bData || !rd || !bit) return null;

  const [bAtk, bDef, bSta] = bData;
  const [height, sides, bstBase, atkMod, defMod, staMod] = rd;
  const hFactor   = (height - 60) / 10; // 0 per 60mm, 1 per 70mm, 2 per 80mm
  const owdBonus  = (sides - 1) * 0.5;

  let atk = bAtk*0.70 + (atkMod - hFactor*1.5)*4 + bit.speed*1.5;
  let def = bDef*0.70 + (defMod + hFactor*2)*4  + bit.defense*1.5;
  let sta = bSta*0.70 + (staMod + owdBonus)*3   + bit.stamina*2.0;
  let bst = bstBase*0.60 + bit.burst*10*0.40    - hFactor*15;
  let spd = bAtk*0.30 + bit.speed*7 + (bit.dash||0)*3;

  const clamp = v => Math.round(Math.max(0, Math.min(100, v)));
  return { attack:clamp(atk), defense:clamp(def), stamina:clamp(sta), burst:clamp(bst), speed:clamp(spd) };
}

// ── BLADE STATS ──────────────────────────────────────────────
// [ATK, DEF, STA] — fonte: beycommunity.com / beybxdb.com
const BLADE_STATS = {
  // BX
  "Dran Sword":      [65,20,25], "Hells Scythe":    [60,25,20],
  "Wizard Arrow":    [20,25,55], "Knight Shield":   [15,55,30],
  "Knight Lance":    [35,40,30], "Shark Edge":      [70,15,15],
  "Leon Claw":       [68,20,20], "Viper Tail":      [55,25,30],
  "Rhino Horn":      [40,50,20], "Dran Dagger":     [72,15,18],
  "Hells Chain":     [62,22,22], "Phoenix Wing":    [75,15,15],
  "Wyvern Gale":     [65,18,22], "Unicorn Sting":   [55,20,30],
  "Sphinx Cowl":     [30,35,40], "Tyranno Beat":    [68,25,15],
  "Weiss Tiger":     [50,30,30], "Cobalt Dragoon":  [70,35,25],
  "Black Shell":     [25,55,25], "Whale Wave":      [20,30,55],
  "Bear Scratch":    [60,28,22], "Crimson Garuda":  [72,18,18],
  "Shelter Drake":   [30,50,30], "Tricera Press":   [45,45,20],
  "Samurai Calibur": [65,20,25], "Goat Tackle":     [55,35,20],
  "Phoenix Feather": [60,20,30], "Mammoth Tusk":    [50,40,20],
  "Croc Crunch":     [65,22,18], "Samurai Steel":   [60,25,25],
  "Shinobi Knife":   [70,18,20], "Tyranno Roar":    [65,25,18],
  "Cobalt Drake":    [70,35,25],
  // UX
  "Dran Buster":     [68,22,20], "Hells Hammer":    [65,25,18],
  "Wizard Rod":      [15,25,56], "Shinobi Shadow":  [68,20,22],
  "Leon Crest":      [65,22,22], "Phoenix Rudder":  [62,20,28],
  "Silver Wolf":     [25,28,55], "Samurai Saber":   [65,20,25],
  "Knight Mail":     [20,55,30], "Ptera Swing":     [55,25,28],
  "Impact Drake":    [75,25,10], "Ghost Circle":    [30,30,50],
  "Golem Rock":      [20,60,25], "Scorpio Spear":   [65,20,25],
  "Shark Scale":     [70,15,15], "Clock Mirage":    [10,10,80],
  "Meteor Dragoon":  [68,30,22], "Mummy Curse":     [35,35,40],
  "Aero Pegasus":    [60,20,40], "Wyvern Hover":    [68,18,24],
  "Orochi Cluster":  [55,30,25],
  // CX
  "Courage Dran":    [70,22,18], "Wizard Arc":      [18,22,58],
  "Perseus Dark":    [65,25,20], "Hells Reaper":    [68,22,20],
  "Rhino Reaper":    [45,48,18], "Fox Brush":       [55,30,28],
  "Pegasus Blast":   [72,18,18], "Cerberus Flame":  [65,25,20],
  "Whale Flame":     [22,28,58], "Sol Eclipse":     [35,30,45],
  "Wolf Hunt":       [65,25,20], "Emperor Might":   [50,40,25],
  "Phoenix Flare":   [68,20,22], "Bahamut Blitz":   [72,20,18],
  "Knight Fortress": [22,58,25], "Ragna Rage":      [70,20,20],
  "Kraken Wriggle":  [55,28,28], "Valkyrie Volt":   [65,22,22],
  "Leon Fang":       [68,20,22], "Antler Stag":     [60,28,22],
};

// ── COSTANTI UI ───────────────────────────────────────────────
const FINISH_TYPES = ["KO", "Xtreme Finish", "Burst", "OS (Outspin)"];
const SYS_COL  = { BX:"#00b4ff", UX:"#a855f7", CX:"#f59e0b" };
const TYPE_COL = { Attack:"#ef4444", Stamina:"#22c55e", Defense:"#3b82f6", Balance:"#f59e0b" };
const STAT_BARS = [["VEL","speed","#ef4444"],["STA","stamina","#22c55e"],["DIF","defense","#3b82f6"],["BST","burst","#f59e0b"]];
