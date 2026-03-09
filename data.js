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
// [ name, type, speed, stamina, defense, burst, notes ]
const _B = (n,t,sp,st,df,bu,notes) => ({ name:n, type:t, speed:sp, stamina:st, defense:df, burst:bu, notes });

const BITS_DATA = [
  // Attack
  _B("Flat",        "Attack",  9,3,2,4, "Pattern a fiore aggressivo, alto potenziale KO"),
  _B("Under Flat",  "Attack", 10,2,2,7, "Low flat estrema, aggancia rapidamente sulla rail. Quasi assente stamina LAD"),
  _B("Low Flat",    "Attack",  9,3,2,4, "Profilo basso, ancora più aggressivo del Flat"),
  _B("Gear Flat",   "Attack",  8,4,2,5, "Denti ingranaggio boost velocità Xtreme dash"),
  _B("Gear Point",  "Attack",  7,5,3,5, "Variante ingranaggio del Point, flower pattern più ampio con dash aumentato"),
  _B("Rush",        "Attack",  8,5,3,6, "Auto-KO ridotto, movimento consistente e sicuro"),
  _B("Low Rush",    "Attack",  9,4,2,5, "Profilo ultra-basso, massimizza contatti ratchet"),
  _B("Point",       "Attack",  7,6,3,5, "Bilanciato attacco/stamina, flower pattern di movimento"),
  _B("Taper",       "Attack",  6,7,3,6, "Attacco con backup stamina, forte nel finale sui CX top-heavy"),
  _B("Jolt",        "Attack",  9,7,3,4, "Aggressiva, punto ridotto allo stadio, molto veloce sulla rail"),
  _B("Trans Point", "Attack",  6,5,4,5, "Ampiezza ridotta, tocca la rail abbassando il bey. Instabile"),
  _B("Trans Kick",  "Attack",  7,6,4,5, "Simile a Kick, abbassa il bey a contatto. Non molto consistente"),
  _B("High Taper",  "Attack",  6,6,3,6, "Versione alta del Taper, più stabile"),
  _B("RubberAccel", "Attack", 10,5,2,4, "Unisce aggressività iniziale a stamina nella LAD"),
  // Stamina
  _B("Ball",        "Stamina", 3,9,5,7, "Top competitivo, alto LAD, perfetto su Wizard Rod"),
  _B("Gear Ball",   "Stamina", 4,8,5,6, "Variante ingranaggio del Ball, leggermente più mobile mantenendo alto LAD"),
  _B("Low Orb",     "Stamina", 2,8,5,7, "Orb compatta, ideale su Clock Mirage o build stamina basse"),
  _B("Orb",         "Stamina", 2,8,4,8, "Tenuta centrale passiva, ottima resistenza al burst"),
  _B("High Needle", "Stamina", 2,8,4,7, "Punta stretta, ideale per build bilanciate"),
  _B("Disk Ball",   "Stamina", 3,9,6,7, "Disco grande, LAD eccellente e stabilità superiore"),
  _B("Free Ball",   "Stamina", 3,8,6,8, "Ball girevole, ibrido stamina/difesa, burst ridotto"),
  _B("Level",       "Stamina", 9,6,5,4, "3 livelli di velocità in base al contatto. La rail fa accelerare il bey"),
  _B("Elevate",     "Stamina", 4,7,5,5, "Specialista spin equalization, chiave per Cobalt Dragoon"),
  _B("Hexa",        "Stamina", 3,7,6,7, "6 lati di stabilità, solida difesa contro attaccanti"),
  // Defense
  _B("Needle",      "Defense", 2,5,8,6, "Punta aguzzo assorbe colpi, si muove al contatto"),
  _B("Spike",       "Defense", 2,4,8,5, "Molto stretto, evasione LAD massimizzata"),
  _B("Dot",         "Defense", 1,5,8,7, "Contatto minimo, eccellente evasione sotto pressione"),
  _B("Gear Needle", "Defense", 3,5,7,6, "Difesa boost ingranaggio, si muove al contatto"),
  _B("Wedge",       "Defense", 3,4,7,4, "Resiste bene ai colpi grazie al piccolo punto di contatto"),
  _B("Wall Wedge",  "Defense", 4,4,6,3, "Come Wedge ma più stabile grazie alle protuzioni laterali"),
  // Balance
  _B("Operate",     "Balance", 5,6,5,6, "Comportamento variabile in base all'angolo di lancio"),
  _B("Glide",       "Balance", 4,6,6,7, "Base rotonda, movimento bilanciato consistente"),
  _B("Wall Ball",   "Balance", 4,5,7,5, "Anello wall stabilizza contro il pavimento dello stadio"),
  _B("Kick",        "Balance", 8,5,3,4, "Incrocio Hexa/Taper: aggressività e LAD alta"),
  _B("Unite",       "Balance", 9,7,3,4, "Unione Taper/Ball/Point. Alta velocità, poco controllo, buona LAD"),
];

// Lookup rapidi derivati
const BITS_MAP  = Object.fromEntries(BITS_DATA.map(b => [b.name, b]));
const BIT_NAMES = BITS_DATA.map(b => b.name);
const BIT_TYPES = ["All", "Attack", "Stamina", "Defense", "Balance"];

// ── META PRESET ───────────────────────────────────────────────
const META_PRESETS = [
  // ──Meta Picks: ──────────────────────────────────
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
  { label:"Shark Scale 3-60 Low Rush",    system:"UX", blade:"Shark Scale",    ratchet:"3-60", bit:"Low Rush",  role:"Attack",   tier:"A", note:"Leobardo #3 alt" },
  { label:"Wyvern Hover 9-60 Kick",       system:"UX", blade:"Wyvern Hover",   ratchet:"0-60", bit:"Kick",      role:"Attack",   tier:"A", note:"Standard hard hitter build di Wyvern" },
  // Spin-Eq
  { label:"Cobalt Dragoon 5-60 Elevate",  system:"BX", blade:"Cobalt Dragoon", ratchet:"5-60", bit:"Elevate",   role:"Spin-Eq",  tier:"S", note:"Meta spin-eq BX" },
  { label:"Cobalt Dragoon 1-60 Elevate",  system:"BX", blade:"Cobalt Dragoon", ratchet:"1-60", bit:"Elevate",   role:"Spin-Eq",  tier:"A", note:"Alternativa più bassa" },
  { label:"Meteor Dragoon 7-60 Level",    system:"UX", blade:"Meteor Dragoon", ratchet:"7-60", bit:"Level",     role:"Spin-Eq",  tier:"A", note:"Bilanciato con ottima LAD grazie a Level" },
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
  "1-60":[60,1,72,-2,0,0], "2-60":[60,2,70,-1,0,1], "3-60":[60,3,68,0,0,1],
  "4-60":[60,4,66,0,1,2],  "5-60":[60,5,64,0,1,2],  "7-60":[60,7,60,1,2,3],
  "9-60":[60,9,58,2,2,4],
  "1-70":[70,1,60,-3,2,-1], "2-70":[70,2,58,-2,2,0], "3-70":[70,3,56,-1,3,0],
  "4-70":[70,4,54,0,3,1],   "5-70":[70,5,52,0,3,2],  "7-70":[70,7,48,1,4,2],
  "9-70":[70,9,46,2,4,3],
  "1-80":[80,1,44,-4,4,-2], "3-80":[80,3,40,-2,5,-1],"5-80":[80,5,36,0,5,0],
};

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
const FINISH_TYPES = ["KO", "Xtreme Finish", "Burst", "OS (Outspin)", "Pareggio"];
const SYS_COL  = { BX:"#00b4ff", UX:"#a855f7", CX:"#f59e0b" };
const TYPE_COL = { Attack:"#ef4444", Stamina:"#22c55e", Defense:"#3b82f6", Balance:"#f59e0b" };
const STAT_BARS = [["VEL","speed","#ef4444"],["STA","stamina","#22c55e"],["DIF","defense","#3b82f6"],["BST","burst","#f59e0b"]];
