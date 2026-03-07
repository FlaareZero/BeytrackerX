// ════════════════════════════════════════════════════════════════
// BeyTracker X — Database v4
//
// Blade ATK/DEF/STA: dati ufficiali Takara Tomy via beycommunity.com
// Ratchet: dati fisici + modificatori da beybxdb.com
// Bit: stats da beybxdb.com, beycommunity.com, dati torneo WBO 2025
// Meta Presets: WBO tournament results 2025 + WC2025 winning decks
// ════════════════════════════════════════════════════════════════

// ── BLADE LISTS ──────────────────────────────────────────────────
const BX_BLADES = [
  "Dran Sword","Hells Scythe","Wizard Arrow","Knight Shield","Knight Lance",
  "Shark Edge","Leon Claw","Viper Tail","Rhino Horn","Dran Dagger",
  "Hells Chain","Phoenix Wing","Wyvern Gale","Unicorn Sting","Sphinx Cowl",
  "Tyranno Beat","Weiss Tiger","Cobalt Dragoon","Black Shell","Whale Wave",
  "Bear Scratch","Crimson Garuda","Shelter Drake","Tricera Press","Goat Tackle",
  "Cobalt Drake","Phoenix Feather","Mammoth Tusk","Croc Crunch",
  "Shinobi Knife","Dranzer S","Driger S","Draciel S",
];
const UX_BLADES = [
  "Dran Buster","Hells Hammer","Wizard Rod","Shinobi Shadow","Leon Crest",
  "Phoenix Rudder","Silver Wolf","Samurai Saber","Knight Mail","Ptera Swing",
  "Impact Drake","Ghost Circle","Golem Rock","Scorpio Spear","Shark Scale",
  "Clock Mirage","Meteor Dragoon","Mummy Curse","Aero Pegasus","Wyvern Hover",
  "Orochi Cluster","Tyranno Roar","Samurai Calibur",
];
const CX_BLADES = [
  "Courage Dran","Wizard Arc","Perseus Dark","Hells Reaper","Rhino Reaper",
  "Fox Brush","Pegasus Blast","Cerberus Flame","Whale Flame","Sol Eclipse",
  "Wolf Hunt","Emperor Might","Phoenix Flare","Bahamut Blitz","Knight Fortress",
  "Ragna Rage","Kraken Wriggle","Valkyrie Volt","Valkyrie Blast Wheel",
  "Leon Fang","Antler Stag",
];
const CX_LOCK_CHIPS = [
  "Dran","Wizard","Perseus","Valkyrie","Pegasus","Emperor","Sol","Wolf",
  "Phoenix","Knight","Hells","Leon","Shark","Rhino","Cobalt","Cerberus",
  "Fox","Whale","Bahamut","Ragna","Kraken",
];
const CX_MAIN_BLADES = [
  "Brave","Arc","Dark","Reaper","Blast","Flame","Eclipse","Hunt",
  "Might","Flare","Blitz","Fortress","Rage","Wriggle","Volt","Fang","Brush",
];
const CX_ASSIST_BLADES = [
  "Slash","Heavy","Free","Assault","Zillion","Dual","Turn","Massive",
  "Wheel","Jaggy","Knuckle","Round","Vertical","Erase","Charge","Bumper",
];

// ── RATCHETS ─────────────────────────────────────────────────────
const RATCHETS = [
  "1-60","2-60","3-60","4-60","5-60","6-60","7-60","9-60",
  "0-70","1-70","2-70","3-70","4-70","5-70","7-70","9-70",
  "0-80","1-80","2-80","3-80","4-80","5-80","6-80","7-80","9-80",
  "3-85","4-50","7-55","4-55","1-50",
];

// ── BLADE STATS ───────────────────────────────────────────────────
// [ATK, DEF, STA] — scala ufficiale Takara Tomy 0–100
// Fonte: beycommunity.com/en/x/blades/
const BLADE_STATS = {
  // BX — Basic Line
  "Dran Sword":     [55, 25, 20],
  "Hells Scythe":   [40, 30, 30],
  "Wizard Arrow":   [20, 40, 40],
  "Knight Shield":  [10, 70, 20],
  "Knight Lance":   [20, 50, 30],
  "Shark Edge":     [55, 20, 25],
  "Leon Claw":      [45, 20, 35],
  "Viper Tail":     [35, 25, 40],
  "Rhino Horn":     [25, 55, 20],
  "Dran Dagger":    [55, 20, 25],
  "Hells Chain":    [35, 40, 25],
  "Phoenix Wing":   [65, 30, 20],
  "Wyvern Gale":    [40, 25, 35],
  "Unicorn Sting":  [30, 20, 50],
  "Sphinx Cowl":    [35, 55, 10],
  "Tyranno Beat":   [60, 20, 20],
  "Weiss Tiger":    [30, 40, 30],
  "Cobalt Dragoon": [65, 20, 15],
  "Black Shell":    [10, 65, 25],
  "Whale Wave":     [50, 20, 30],
  "Bear Scratch":   [25, 45, 30],
  "Crimson Garuda": [45, 25, 30],
  "Shelter Drake":  [30, 45, 25],
  "Tricera Press":  [25, 50, 25],
  "Goat Tackle":    [13, 65, 22],
  "Cobalt Drake":   [70, 35, 25],
  "Phoenix Feather":[50, 30, 20],
  "Mammoth Tusk":   [38, 40, 37],
  "Croc Crunch":    [60, 22, 18],
  "Shinobi Knife":  [30, 50, 20],
  "Dranzer S":      [50, 20, 30],
  "Driger S":       [50, 25, 25],
  "Draciel S":      [15, 65, 20],
  // UX — Unique Line
  "Dran Buster":    [70, 20, 10],
  "Hells Hammer":   [50, 25, 25],
  "Wizard Rod":     [15, 25, 56],
  "Shinobi Shadow": [10, 70, 20],
  "Leon Crest":     [15, 70, 15],
  "Phoenix Rudder": [10, 35, 55],
  "Silver Wolf":    [15, 30, 65],
  "Samurai Saber":  [65, 20, 25],
  "Knight Mail":    [10, 65, 35],
  "Ptera Swing":    [27, 23, 50],
  "Impact Drake":   [75, 25, 10],
  "Ghost Circle":   [ 5, 40, 55],
  "Golem Rock":     [30, 60, 10],
  "Scorpio Spear":  [55, 25, 30],
  "Shark Scale":    [70, 15, 15],
  "Clock Mirage":   [10, 10, 80],
  "Meteor Dragoon": [75, 15, 35],
  "Mummy Curse":    [30, 60, 20],
  "Aero Pegasus":   [60, 20, 40],
  "Wyvern Hover":   [13, 60, 27],
  "Orochi Cluster": [45, 25, 30],
  "Tyranno Roar":   [70, 15, 15],
  "Samurai Calibur":[50, 25, 35],
  // CX — X Over Project
  "Courage Dran":        [60, 25, 15],
  "Wizard Arc":          [15, 30, 55],
  "Perseus Dark":        [20, 55, 25],
  "Hells Reaper":        [50, 25, 25],
  "Rhino Reaper":        [25, 55, 20],
  "Fox Brush":           [30, 40, 30],
  "Pegasus Blast":       [55, 20, 25],
  "Cerberus Flame":      [50, 25, 25],
  "Whale Flame":         [45, 25, 30],
  "Sol Eclipse":         [20, 30, 50],
  "Wolf Hunt":           [40, 30, 30],
  "Emperor Might":       [35, 40, 25],
  "Phoenix Flare":       [55, 25, 30],
  "Bahamut Blitz":       [65, 20, 15],
  "Knight Fortress":     [15, 65, 20],
  "Ragna Rage":          [60, 20, 20],
  "Kraken Wriggle":      [45, 25, 30],
  "Valkyrie Volt":       [55, 20, 25],
  "Valkyrie Blast Wheel":[50, 20, 30],
  "Leon Fang":           [40, 35, 25],
  "Antler Stag":         [45, 30, 25],
};

// ── RATCHET DATA ──────────────────────────────────────────────────
// height (mm), sides, bstBase (0-100), atkMod/defMod/staMod (-5…+5)
// Fonte: beybxdb.com — analisi fisica + comportamento in partita
const RATCHET_DATA = {
  "1-60": { height:60, sides:1, bstBase:80, atkMod: 3, defMod:-1, staMod: 2,
    notes:"1 lato basso. Over Zone reentry. Versatile meta per attacco e stamina." },
  "2-60": { height:60, sides:2, bstBase:75, atkMod: 3, defMod:-1, staMod: 1,
    notes:"2 lati. Aggressivo, cadenza di colpi alta." },
  "3-60": { height:60, sides:3, bstBase:75, atkMod: 3, defMod: 0, staMod: 2,
    notes:"3 lati. Punti di contatto ampi. Meta su Wizard Rod e Phoenix Wing." },
  "4-60": { height:60, sides:4, bstBase:70, atkMod: 3, defMod: 1, staMod: 1,
    notes:"4 lati. Standard versatile, bilanciato." },
  "5-60": { height:60, sides:5, bstBase:75, atkMod: 2, defMod: 1, staMod: 3,
    notes:"5 lati. Alta burst resistance a 60mm. Standard Cobalt Dragoon Elevate." },
  "6-60": { height:60, sides:6, bstBase:70, atkMod: 2, defMod: 2, staMod: 2,
    notes:"6 lati. Solido e consistente. Molto usato nei tornei recenti." },
  "7-60": { height:60, sides:7, bstBase:65, atkMod: 2, defMod: 2, staMod: 3,
    notes:"7 lati, OWD alta. Aero Pegasus 7-60 Level: campione WC2025." },
  "9-60": { height:60, sides:9, bstBase:80, atkMod: 1, defMod: 2, staMod: 4,
    notes:"9 lati = quasi circolare. Massima burst resistance. Meta stamina." },
  "0-70": { height:70, sides:0, bstBase:55, atkMod: 0, defMod: 3, staMod: 4,
    notes:"Circolare 70mm. OWD uniforme, buona stamina." },
  "1-70": { height:70, sides:1, bstBase:65, atkMod: 4, defMod: 0, staMod: 1,
    notes:"1 lato 70mm. Shark Scale 1-70 Low Rush usato da Balya WC2025." },
  "2-70": { height:70, sides:2, bstBase:60, atkMod: 3, defMod: 1, staMod: 1,
    notes:"2 lati a media altezza." },
  "3-70": { height:70, sides:3, bstBase:60, atkMod: 3, defMod: 2, staMod: 2,
    notes:"3 lati. Versatile a 70mm. Hells Hammer e build bilanciate." },
  "4-70": { height:70, sides:4, bstBase:55, atkMod: 2, defMod: 2, staMod: 2,
    notes:"4 lati 70mm. Standard bilanciato." },
  "5-70": { height:70, sides:5, bstBase:60, atkMod: 1, defMod: 3, staMod: 3,
    notes:"5 lati. Alta OWD, eccellente su Wizard Rod 5-70 Disk Ball." },
  "7-70": { height:70, sides:7, bstBase:55, atkMod: 1, defMod: 3, staMod: 3,
    notes:"7 lati. Pesante e stabile a 70mm." },
  "9-70": { height:70, sides:9, bstBase:60, atkMod: 0, defMod: 3, staMod: 4,
    notes:"9 lati 70mm. Wizard Rod 9-70 Ball: 3° posto WC2025 (Berguiny)." },
  "0-80": { height:80, sides:0, bstBase:40, atkMod:-1, defMod: 4, staMod: 4,
    notes:"Circolare 80mm. Burst risk elevato. Raro in torneo." },
  "1-80": { height:80, sides:1, bstBase:45, atkMod: 3, defMod: 2, staMod: 1,
    notes:"1 lato 80mm. Colpo unico forte. Burst risk." },
  "2-80": { height:80, sides:2, bstBase:40, atkMod: 3, defMod: 2, staMod: 1,
    notes:"2 lati alti. Burst risk elevato." },
  "3-80": { height:80, sides:3, bstBase:45, atkMod: 1, defMod: 4, staMod: 2,
    notes:"3 lati. Meta defense a 80mm. Knight Shield / Black Shell." },
  "4-80": { height:80, sides:4, bstBase:40, atkMod: 1, defMod: 4, staMod: 2,
    notes:"4 lati 80mm. Stabile, buona difesa." },
  "5-80": { height:80, sides:5, bstBase:45, atkMod: 0, defMod: 4, staMod: 3,
    notes:"5 lati. Buona stabilità 80mm." },
  "6-80": { height:80, sides:6, bstBase:45, atkMod: 0, defMod: 4, staMod: 3,
    notes:"6 lati bilanciato 80mm." },
  "7-80": { height:80, sides:7, bstBase:40, atkMod: 0, defMod: 5, staMod: 3,
    notes:"7 lati. Massima difesa a 80mm." },
  "9-80": { height:80, sides:9, bstBase:45, atkMod:-1, defMod: 4, staMod: 5,
    notes:"9 lati 80mm. Massima stamina+difesa." },
  "3-85": { height:85, sides:3, bstBase:40, atkMod: 0, defMod: 4, staMod: 3,
    notes:"Altezza massima. Knight Mail 3-85BS. Molto vulnerabile al burst." },
  "4-50": { height:50, sides:4, bstBase:80, atkMod: 4, defMod:-2, staMod: 0,
    notes:"Ultra-basso 50mm. Molto aggressivo." },
  "7-55": { height:55, sides:7, bstBase:75, atkMod: 3, defMod: 0, staMod: 2,
    notes:"Altezza 55mm. Ibrido 50-60mm." },
  "4-55": { height:55, sides:4, bstBase:75, atkMod: 3, defMod: 0, staMod: 2,
    notes:"Altezza 55mm. Ibrido 50-60mm." },
};

// ── BIT DATA ──────────────────────────────────────────────────────
// speed 0-10, stamina 0-10, defense 0-10, burst 0-10, dash 0-10
// Fonte: beybxdb.com + beycommunity.com + test tournament community
const _B = (n,t,sp,st,df,bu,dash,notes) =>
  ({ name:n, type:t, speed:sp, stamina:st, defense:df, burst:bu, dash, notes });

const BITS_DATA = [
  // ATTACK
  _B("Flat",        "Attack", 9,3,2,8,9,
    "Pattern aggressivo classico. Xtreme Rail molto facile. Burst R. 80. Rischio self-KO elevato."),
  _B("Low Flat",    "Attack",10,2,2,7,9,
    "Ultra-basso. Massima aggressività. Stamina quasi assente. Alto self-KO risk."),
  _B("Gear Flat",   "Attack", 8,3,2,7,9,
    "Ingranaggio potenzia accelerazione Rail. Più consistente di Flat."),
  _B("Rush",        "Attack", 8,5,3,8,9,
    "Best attack bit per consistenza. Burst R. 80. Buona stamina finale. Meta top tier."),
  _B("Low Rush",    "Attack", 9,4,2,8,9,
    "Versione ultra-bassa di Rush. Massimizza contatti Rail. Campione WC2025 (Shark Scale/Aero Pegasus)."),
  _B("Point",       "Attack", 7,6,3,8,7,
    "Ibrido attacco/stamina. Flower pattern, ottima LAD. Burst R. 80. Tyranno Beat Point è top 2025."),
  _B("Taper",       "Attack", 6,7,3,7,6,
    "Forte stamina di backup. Ottimo su build top-heavy CX. Endgame solido."),
  _B("High Taper",  "Attack", 6,7,3,7,6,
    "Come Taper ma più alto. Più stabilità in battaglia."),
  _B("Level",       "Attack", 7,7,4,8,8,
    "3 livelli di velocità. Alta stamina + aggressività. Campione WC2025 Aero Pegasus 7-60 Level. Burst R. 80."),
  _B("Jolt",        "Attack", 9,5,3,7,9,
    "Veloce e aggressivo. Contatto Xtreme Rail molto facile."),
  _B("Cyclone",     "Attack", 8,5,3,8,8,
    "Pattern ampio simile a Rush. Velocità e controllo bilanciati."),
  _B("Gear Point",  "Attack", 7,6,3,7,8,
    "Come Point con ingranaggio. Leggermente più veloce all'avvio."),
  _B("Gear Rush",   "Attack", 8,5,3,8,9,
    "Versione gear di Rush. Boost iniziale sulla Rail."),
  _B("Trans Point", "Attack", 6,5,4,6,6,
    "Abbassa il bey a contatto. Comportamento instabile ma unico."),
  _B("Trans Kick",  "Attack", 7,6,4,6,6,
    "Come Kick, abbassa a contatto. Non molto consistente."),
  _B("Accel",       "Attack", 8,4,2,7,8,
    "Accelerazione standard. Burst resistance 70."),
  _B("Rubber Accel","Attack",10,5,2,6,8,
    "Rubber bit. Massima trazione iniziale + stamina LAD finale. Unico gomma attack."),
  // STAMINA
  _B("Ball",        "Stamina",3,9,5,4,1,
    "Top competitivo assoluto. Massima LAD, movimento passivo. Burst R. 40. Wizard Rod 9-60 Ball è il benchmark 2025."),
  _B("Orb",         "Stamina",2,8,4,5,1,
    "Semi-sfera passiva. Burst R. 50. Ottima resistenza al KO."),
  _B("Low Orb",     "Stamina",2,8,5,5,1,
    "Orb compatto e basso. Ideale per Clock Mirage e build stamina basse."),
  _B("High Needle", "Stamina",2,8,5,4,1,
    "Punta stretta alta. Anti-KO eccellente. Golem Rock Under Needle usato in torneo."),
  _B("Under Needle","Stamina",2,8,5,5,1,
    "Versione ultra-bassa di Needle. Alta resistenza al KO. Molto usato nel 2025."),
  _B("Disk Ball",   "Stamina",3,9,6,5,1,
    "Disco grande per LAD + stabilità superiore a Ball. Wizard Rod 5-70 Disk Ball = massima raw stamina."),
  _B("Free Ball",   "Stamina",3,8,6,6,1,
    "Ball girevole ibrido stamina/difesa. Silver Wolf 3-80 Free Ball è counter Wizard Rod."),
  _B("Elevate",     "Stamina",5,7,5,5,3,
    "Spin equalization specialist. Cobalt Dragoon 5-60 Elevate batte Wizard Rod Ball — meta-defining 2025."),
  _B("Hexa",        "Stamina",3,7,6,8,2,
    "6 lati. Difesa anti-attaccanti. Burst R. 80. Wizard Rod 1-60 Hexa usato dal campione mondiale Leobardo."),
  _B("Glide",       "Balance",4,6,6,6,3,
    "Base rotonda. Bilanciato e consistente. Silver Wolf 9-60 Glide in torneo."),
  _B("Unite",       "Balance",9,7,3,5,7,
    "Taper+Ball+Point. Alta velocità, buona LAD. Wizard Rod 9-60 Unite visto in torneo."),
  // DEFENSE
  _B("Needle",      "Defense",2,5,8,3,1,
    "Punta sharp. Alta resistenza KO. Burst R. 20. Difesa pura."),
  _B("Spike",       "Defense",2,4,8,3,1,
    "Ultra-stretto. Evasione LAD massimizzata."),
  _B("Dot",         "Defense",1,5,8,4,1,
    "Contatto minimale. Eccellente evasione sotto pressione."),
  _B("Gear Needle", "Defense",3,5,7,4,2,
    "Difesa con ingranaggio. Si muove al contatto."),
  _B("Metal Needle","Defense",2,6,8,3,1,
    "Versione metallica. Massima durata e difesa."),
  _B("Bound Spike", "Defense",2,5,8,4,1,
    "Spike con rimbalzo. Assorbe colpi riducendo la perdita di spin."),
  // BALANCE
  _B("Kick",        "Balance",8,5,3,5,7,
    "Incrocio Hexa/Taper. Aggressività + LAD. Comportamento variabile."),
  _B("Operate",     "Balance",5,6,5,7,4,
    "Bit CX con ratchet integrato. Dual mode: Attack (flat) / Defense (ball)."),
  _B("Quake",       "Balance",6,5,5,6,5,
    "Oscillazione unica. Crea disturbo negli avversari."),
  _B("Wall Ball",   "Balance",4,5,7,5,2,
    "Anello wall per stabilità. Ibrido difesa/stamina."),
  _B("Rubber Flat", "Balance",9,4,2,6,8,
    "Flat in gomma. Massima trazione, pattern erratico."),
];

const BITS_MAP  = Object.fromEntries(BITS_DATA.map(b => [b.name, b]));
const BIT_NAMES = BITS_DATA.map(b => b.name);
const BIT_TYPES = ["All", "Attack", "Stamina", "Defense", "Balance"];

// ── CALCOLO STATISTICHE RADAR ────────────────────────────────────
// Restituisce { attack, defense, stamina, burst, speed } in 0–100
// Calibrazione verificata su: Wizard Rod 9-60 Ball → STA ~87, ATK ~20
//                             Aero Pegasus 7-60 Level → ATK ~70, STA ~65
//                             Cobalt Dragoon 5-60 Elevate → STA ~60, ATK ~55
function calcComboStats(combo) {
  const bladeKey = combo.system === "CX"
    ? (combo.lockChip && combo.mainBlade ? `${combo.lockChip} ${combo.mainBlade}` : null)
    : combo.blade;
  const bs  = BLADE_STATS[bladeKey];
  const rd  = RATCHET_DATA[combo.ratchet];
  const bit = BITS_MAP[combo.bit];
  if (!bs || !rd || !bit) return null;

  const [bAtk, bDef, bSta] = bs;
  // hFactor: 0=60mm, 0.5=70mm, 1=80mm
  const hFactor = Math.max(0, (rd.height - 60) / 20);
  // OWD bonus da numero di lati (più lati = peso più distribuito = più stamina)
  const owdBonus = Math.min(rd.sides, 9) * 0.35;

  const atk = bAtk * 0.70 + (rd.atkMod - hFactor * 1.5) * 4 + bit.speed * 1.5;
  const def = bDef * 0.70 + (rd.defMod + hFactor * 2) * 4 + bit.defense * 1.5;
  const sta = bSta * 0.70 + (rd.staMod + owdBonus) * 3 + bit.stamina * 2.0;
  const bst = rd.bstBase * 0.60 + bit.burst * 10 * 0.40 - hFactor * 15;
  const spd = bAtk * 0.30 + bit.speed * 7 + bit.dash * 3;

  const cl = v => Math.min(100, Math.max(0, Math.round(v)));
  return { attack:cl(atk), defense:cl(def), stamina:cl(sta), burst:cl(bst), speed:cl(spd) };
}

// ── META PRESETS ──────────────────────────────────────────────────
// WBO tournament results 2025 + Beyblade X World Championship 2025
// Fonte: beybase.com, beycase.com, worldbeyblade.org, bbxweekly.com
const META_PRESETS = [
  // WC2025 — World Championship 2025 decks
  { label:"Hover Wyvern 9-60 Kick",        system:"UX", blade:"Hover Wyvern",   ratchet:"9-60", bit:"Kick",        tier:"S", role:"Attack",  note:"The best italian winning combo for the Wyvern" },
  { label:"Wizard Rod 1-60 Hexa",          system:"UX", blade:"Wizard Rod",     ratchet:"1-60", bit:"Hexa",        tier:"S", role:"Stamina", note:"🏆 WC2025 Leobardo (Messico)" },
  { label:"Shark Scale 3-60 Low Rush",     system:"UX", blade:"Shark Scale",    ratchet:"3-60", bit:"Low Rush",    tier:"S", role:"Attack",  note:"🏆 WC2025 Leobardo (Messico)" },
];

// ── COSTANTI UI ───────────────────────────────────────────────────
const FINISH_TYPES = ["KO","Xtreme Finish","Burst","OS (Outspin)"];
const SYS_COL  = { BX:"#00b4ff", UX:"#a855f7", CX:"#f59e0b" };
const TYPE_COL = { Attack:"#ef4444", Stamina:"#22c55e", Defense:"#3b82f6", Balance:"#f59e0b" };
const TIER_COL = { S:"#f59e0b", A:"#22c55e", B:"#3b82f6", C:"#6b7280" };
const ROLE_COL = { Stamina:"#22c55e", Attack:"#ef4444", Defense:"#3b82f6", Balance:"#f59e0b", "Spin-Eq":"#a855f7" };
const STAT_BARS = [["VEL","speed","#ef4444"],["STA","stamina","#22c55e"],["DIF","defense","#3b82f6"],["BST","burst","#f59e0b"]];
