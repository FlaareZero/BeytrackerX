// BeyTracker X — Database

const BX_BLADES = [
  "Bear Scratch","Bite Croc","Black Shell","Cobalt Dragoon","Cobalt Drake",
  "Crimson Garuda","Croc Crunch","Dran Dagger","Dran Strike","Dran Sword",
  "Goat Tackle","Hack Viking","Hells Chain","Hells Scythe","Knife Shinobi",
  "Knight Lance","Knight Shield","Leon Claw","Mammoth Tusk","Phoenix Feather",
  "Phoenix Wing","Ridge Triceratops","Rhino Horn","Samurai Calibur","Samurai Steel",
  "Savage Bear","Shark Edge","Shark Gill","Shelter Drake","Shinobi Knife",
  "Sphinx Cowl","Talon Ptera","Tricera Press","Tusk Mammoth","Tyranno Beat",
  "Tyranno Roar","Unicorn Sting","Viper Tail","Weiss Tiger","Whale Wave",
  "Wizard Arrow","Wyvern Gale","Yell Kong",
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

// Assist Blades (anello dentato) — lettere
const CX_ASSIST_BLADES = [
  "A (Assault)","B (Bumper)","C (Charge)","D (Dual)","E (Erase)",
  "F (Free)","H (Heavy)","J (Jaggy)","K (Knuckle)","M (Massive)",
  "R (Round)","S (Slash)","T (Turn)","V (Vertical)","W (Wheel)",
  "Z (Zillion)",
];
const CX_ASSIST_WEIGHTS = {
  "A (Assault)":4.5,"B (Bumper)":4.5,"C (Charge)":4.5,"D (Dual)":5,
  "E (Erase)":4.5,  "F (Free)":6,   "H (Heavy)":8,  "J (Jaggy)":6,
  "K (Knuckle)":4.5,"M (Massive)":4.5,"R (Round)":4.5,"S (Slash)":5,
  "T (Turn)":4.5,   "V (Vertical)":4.5,"W (Wheel)":6,"Z (Zillion)":7,
};

// Lock Chips (disco animale)
const CX_LOCK_CHIPS = [
  "Bahamut","Cerberus","Dran","Emperor","Fox",
  "Hells","Hornet","Knight","Kraken","Leon",
  "Pegasus","Perseus","Phoenix","Ragna","Rhino",
  "Sol","Stag","Valkyrie","Whale","Wizard","Wolf",
];
const CX_LOCK_CHIPS_WEIGHTS = {
  "Bahamut":1,"Cerberus":1,"Dran":1,"Emperor":6.4,"Fox":1,
  "Hells":1,"Hornet":1,"Knight":1,"Kraken":1,"Leon":1,
  "Pegasus":1,"Perseus":1,"Phoenix":1,"Ragna":1,"Rhino":1,
  "Sol":1,"Stag":1,"Valkyrie":5.2,"Whale":1,"Wizard":1,"Wolf":1,
};

// Main Blades — SOLO la lama (senza prefisso lock chip)
const CX_MAIN_BLADES = [
  "Arc","Blast","Blitz Break","Brave","Brush",
  "Dark","Eclipse (Smash)","Eclipse (Upper)",
  "Fang","Flame (Cerberus)","Flame (Whale)","Flare","Flow","Fortress Guard",
  "Hunt","Might","Reaper (Hells)","Reaper (Rhino)",
  "Stag","Volt","Wriggle",
];
const CX_MAIN_BLADE_WEIGHTS = {
  "Arc":18.5,"Blast":19.5,"Blitz Break":19,"Brave":19,"Brush":18.5,
  "Dark":19,"Eclipse (Smash)":19,"Eclipse (Upper)":19,
  "Fang":19,"Flame (Cerberus)":18.5,"Flame (Whale)":18.5,"Flare":18.5,"Flow":19,"Fortress Guard":20,
  "Hunt":19,"Might":20,"Reaper (Hells)":19,"Reaper (Rhino)":20,
  "Stag":18,"Volt":21,"Wriggle":18.5,
};

const RATCHETS = [
  "1-60","2-60","3-60","4-60","5-60","6-60","7-60","9-60","S6-60","F0-60",
  "9-65","4-55","4-50",
  "0-70","1-70","2-70","3-70","4-70","5-70","6-70","7-70","8-70","9-70","D5-70",
  "0-80","1-80","2-80","3-80","4-80","5-80","6-80","7-80","9-80",
  "3-85","M-85","ATr","Turbo","Operate",
];
const RIBS = new Set(["Turbo","Operate"]);

const _B = (n,t,sp,st,df,bu,da,notes) => ({name:n,type:t,speed:sp,stamina:st,defense:df,burst:bu,dash:da,notes});
const BITS_DATA = [
  // Ordine alfabetico
  _B("Accel",       "Attack",  4,   1,   1,   8, 4,   "Alta burst resistance, UX"),
  _B("Ball",        "Stamina", 1.5, 5,   2.5, 3, 1,   "Top competitivo, alto LAD"),
  _B("Bound Spike", "Defense", 0.5, 3,   6,   3, 0.5, "UX, alta difesa"),
  _B("Cyclone",     "Attack",  4,   1,   0.5, 8, 4.5, "Aggressivo, BX"),
  _B("Disk Ball",   "Stamina", 1.5, 5.5, 2,   3, 1,   "LAD eccellente e stabilità superiore"),
  _B("Dot",         "Defense", 1,   3,   5.5, 3, 1,   "Eccellente evasione sotto pressione"),
  _B("Elevate",     "Stamina", 3,   2,   1.5, 3, 3.5, "Spin equalization, chiave per Cobalt Dragoon"),
  _B("Flat",        "Attack",  4,   1,   1.5, 8, 3.5, "Pattern a fiore aggressivo"),
  _B("Free Ball",   "Stamina", 1,   6,   2.5, 3, 0.5, "Ibrido stamina/difesa, burst ridotto"),
  _B("Free Flat",   "Attack",  0,   0,   0,   0, 0,   "Dati non disponibili (BX Blue)"),
  _B("Gear Ball",   "Stamina", 1,   4.5, 1.5, 3, 3,   "Variante ingranaggio del Ball"),
  _B("Gear Flat",   "Attack",  5,   0.5, 0.5, 8, 4,   "Boost velocità Xtreme dash"),
  _B("Gear Needle", "Defense", 2,   1,   4,   3, 3,   "Si muove al contatto"),
  _B("Gear Point",  "Balance", 3,   1.5, 2.5, 8, 3,   "Variante ingranaggio del Point, BX"),
  _B("Gear Rush",   "Attack",  4.5, 1,   1,   8, 3.5, "Versione Gear della Rush, CX"),
  _B("Glide",       "Stamina", 2,   5.5, 1,   3, 1.5, "Movimento bilanciato consistente"),
  _B("Hexa",        "Balance", 3,   3.5, 3.5, 8, 1.5, "6 lati di stabilità, UX"),
  _B("High Needle", "Defense", 1.5, 5.5, 2,   3, 1,   "Punta stretta difesa/stamina, BX"),
  _B("High Taper",  "Balance", 3,   2,   2.5, 8, 2.5, "Versione alta del Taper, BX"),
  _B("Ignition",    "Attack",  5,   0.5, 1.5, 8, 3,   "CX Purple, molto aggressivo"),
  _B("Jolt",        "Attack",  3.5, 1.5, 1,   8, 4,   "Punto ridotto allo stadio"),
  _B("Kick",        "Balance", 3.5, 1.5, 2.5, 8, 2.5, "Aggressività e LAD alta, CX"),
  _B("Level",       "Attack",  4,   1.5, 0.5, 8, 4,   "3 livelli di velocità"),
  _B("Low Flat",    "Attack",  4.5, 1,   0.5, 8, 4,   "Profilo basso, più aggressivo del Flat"),
  _B("Low Orb",     "Stamina", 0.5, 5.5, 2.5, 3, 1.5, "Orb compatta, CX"),
  _B("Low Rush",    "Attack",  4.5, 1.5, 0.5, 8, 3.5, "Profilo ultra-basso"),
  _B("Merge",       "Balance", 5,   1,   2,   8, 2,   "BX, balance con alta velocità"),
  _B("Metal Needle","Defense", 0.8, 3,   5.7, 3, 0.5, "UX, alta difesa"),
  _B("Needle",      "Defense", 1,   3,   5,   3, 1,   "Assorbe colpi, si muove al contatto"),
  _B("Operate",     "Balance", 3.5, 2.5, 2.5, 8, 2.5, "CX — Variabile in base all'angolo di lancio"),
  _B("Orb",         "Stamina", 1,   5,   3,   3, 1,   "Ottima resistenza al burst"),
  _B("Point",       "Balance", 2.5, 2.5, 2.5, 8, 2.5, "Flower pattern di movimento"),
  _B("Quake",       "Attack",  5.5, 0.5, 0.5, 8, 2.5, "Alta velocità, BX Orange"),
  _B("Rubber Accel","Attack",  6,   0.3, 1.7, 8, 2,   "Aggressività + stamina LAD"),
  _B("Rush",        "Attack",  4,   2,   1,   8, 3,   "Movimento consistente e sicuro"),
  _B("Spike",       "Defense", 1,   3.5, 4.5, 3, 1,   "Evasione LAD massimizzata"),
  _B("Taper",       "Attack",  3.5, 2,   2,   8, 2.5, "Attacco con backup stamina"),
  _B("Trans Kick",  "Balance", 3.5, 2,   3,   8, 1.5, "Abbassa il bey a contatto, CX"),
  _B("Trans Point", "Balance", 3.5, 2.5, 2.5, 8, 1.5, "Tocca la rail abbassando il bey"),
  _B("Under Flat",  "Attack",  5.5, 0.5, 0.5, 8, 3.5, "Low flat estrema"),
  _B("Under Needle","Defense", 1,   2,   6,   3, 1,   "UX, alta difesa"),
  _B("Unite",       "Balance", 2.5, 3,   2.5, 8, 2,   "Alta velocità, poco controllo"),
  _B("Vortex",      "Attack",  4.5, 0.5, 1,   8, 4,   "CX, aggressivo alta burst resistance"),
  _B("Wall Ball",   "Stamina", 1.5, 4.5, 3,   3, 1,   "Anello wall stabilizza, CX"),
  _B("Wall Wedge",  "Defense", 4,   4,   6,   3, 1,   "Più stabile del Wedge"),
  _B("Wedge",       "Defense", 0.5, 3,   5.5, 3, 1,   "Piccolo punto di contatto"),
  _B("Yielding",    "Stamina", 1,   6.5, 1.5, 3, 1,   "CX Orange, alta stamina"),
  _B("Zap",         "Balance", 3,   1.5, 2,   8, 3.5, "UX, balance/attacco"),
];
const BITS_MAP  = Object.fromEntries(BITS_DATA.map(b => [b.name, b]));
const BIT_NAMES = BITS_DATA.map(b => b.name);
const BIT_TYPES = ["All","Attack","Stamina","Defense","Balance"];

const META_PRESETS = [
  {label:"Wizard Rod 9-60 Ball",        system:"UX",blade:"Wizard Rod",    ratchet:"9-60",bit:"Ball",     role:"Stamina",tier:"S",note:"Benchmark stamina WC2025"},
  {label:"Wizard Rod 1-60 Hexa",        system:"UX",blade:"Wizard Rod",    ratchet:"1-60",bit:"Hexa",     role:"Stamina",tier:"A",note:"Leobardo #1 WC2025"},
  {label:"Silver Wolf 9-60 Free Ball",  system:"UX",blade:"Silver Wolf",   ratchet:"9-60",bit:"Free Ball",role:"Stamina",tier:"A",note:"Ibrido stamina/difesa"},
  {label:"Clock Mirage 4-55 Low Orb",   system:"UX",blade:"Clock Mirage",  ratchet:"4-55",bit:"Low Orb",  role:"Stamina",tier:"B",note:"Build bassa, ottima LAD"},
  {label:"Aero Pegasus 3-60 Low Rush",  system:"UX",blade:"Aero Pegasus",  ratchet:"3-60",bit:"Low Rush", role:"Attack", tier:"S",note:"Leobardo #3 WC2025"},
  {label:"Aero Pegasus 7-60 Level",     system:"UX",blade:"Aero Pegasus",  ratchet:"7-60",bit:"Level",    role:"Attack", tier:"S",note:"Leobardo #2 WC2025"},
  {label:"Phoenix Wing 1-60 Low Rush",  system:"BX",blade:"Phoenix Wing",  ratchet:"1-60",bit:"Low Rush", role:"Attack", tier:"A",note:"Alta velocità rail"},
  {label:"Shark Scale 1-70 Low Rush",   system:"UX",blade:"Shark Scale",   ratchet:"1-70",bit:"Low Rush", role:"Attack", tier:"A",note:"Balya #2 WC2025"},
  {label:"Shark Scale 3-60 Rush",       system:"UX",blade:"Shark Scale",   ratchet:"3-60",bit:"Rush",     role:"Attack", tier:"A",note:"Alternativa alla combo sopra"},
  {label:"Wyvern Hover 9-60 Kick",      system:"UX",blade:"Wyvern Hover",  ratchet:"9-60",bit:"Kick",     role:"Attack", tier:"A",note:"LA Combo della Viverna"},
  {label:"Cobalt Dragoon 5-60 Elevate", system:"BX",blade:"Cobalt Dragoon",ratchet:"5-60",bit:"Elevate",  role:"Spin-Eq",tier:"S",note:"Meta spin-eq BX"},
  {label:"Meteor Dragoon 7-60 Level",   system:"UX",blade:"Meteor Dragoon",ratchet:"9-60",bit:"Level",    role:"Spin-Eq",tier:"A",note:"Eccellente attacker + Spin-steal"},
];
const ROLE_COL = {Attack:"#ef4444",Stamina:"#22c55e",Defense:"#3b82f6","Spin-Eq":"#a855f7",Balance:"#f59e0b"};
const TIER_COL = {S:"#f59e0b",A:"#22c55e",B:"#00b4ff"};

const RATCHET_DATA = {
  "0-60":[60,0,76,3,14,13],"1-60":[60,1,72,17,9,4],"2-60":[60,2,70,16,8,6],
  "3-60":[60,3,68,15,9,6],"4-60":[60,4,66,11,13,6],"5-60":[60,5,64,12,9,9],
  "6-60":[60,6,62,14,8,8],"7-60":[60,7,60,8,14,8],"9-60":[60,9,58,13,10,7],
  "S6-60":[60,6,63,0,2,2],"F0-60":[60,0,70,0,0,0],"9-65":[65,9,58,13,10,7],
  "4-55":[55,4,70,7,11,12],"4-50":[50,4,72,12,13,5],
  "0-70":[70,0,64,3,13,14],"1-70":[70,1,60,17,6,7],"2-70":[70,2,58,10,12,8],
  "3-70":[70,3,56,15,8,7],"4-70":[70,4,54,11,12,7],"5-70":[70,5,52,12,8,9],
  "6-70":[70,6,50,14,7,9],"7-70":[70,7,48,8,12,10],"8-70":[70,8,47,8,10,12],
  "9-70":[70,9,46,13,10,7],"D5-70":[70,5,53,0,3,2],
  "0-80":[80,0,48,3,14,13],"1-80":[80,1,44,17,4,9],"2-80":[80,2,42,10,11,9],
  "3-80":[80,3,40,15,7,8],"4-80":[80,4,38,11,11,8],"5-80":[80,5,36,12,8,10],
  "6-80":[80,6,34,14,6,10],"7-80":[80,7,32,7,14,9],"9-80":[80,9,30,13,10,7],
  "3-85":[85,3,30,5,15,10],"M-85":[85,0,28,8,19,13],
  "ATr":[70,0,65,-3,1,0],"Turbo":[70,0,62,-3,1,0],"Operate":[70,5,60,0,2,2],
};
const RATCHET_WEIGHTS = {
  "0-60":5.8,"1-60":6.0,"2-60":6.1,"3-60":6.35,"4-60":6.4,"5-60":6.5,
  "6-60":6.6,"7-60":7.1,"9-60":6.7,"S6-60":6.5,"F0-60":5.9,"9-65":6.75,
  "4-55":6.0,"4-50":5.7,
  "0-70":6.2,"1-70":6.3,"2-70":6.4,"3-70":6.5,"4-70":6.6,"5-70":6.7,
  "6-70":6.75,"7-70":6.9,"8-70":7.0,"9-70":6.8,"D5-70":6.7,
  "0-80":6.5,"1-80":6.6,"2-80":6.7,"3-80":6.75,"4-80":6.8,"5-80":6.85,
  "6-80":6.9,"7-80":7.0,"9-80":6.85,"ATr":6.0,"M-85":7.2,"3-85":7.0,
  "Turbo":8.2,"Operate":8.4,
};
const BIT_WEIGHTS = {
  "Accel":2.4,"Cyclone":2.4,"Flat":2.3,"Free Flat":2.3,"Gear Flat":2.5,
  "Gear Rush":2.5,"Ignition":2.4,"Jolt":2.4,"Level":2.5,"Low Flat":2.2,
  "Low Rush":2.3,"Quake":2.4,"Rubber Accel":2.6,"Rush":2.4,"Taper":2.4,
  "Under Flat":2.2,"Vortex":2.4,
  "Ball":2.4,"Disk Ball":2.55,"Elevate":2.4,"Free Ball":2.5,"Gear Ball":2.5,
  "Glide":2.4,"Low Orb":2.3,"Metal Needle":2.3,"Orb":2.4,"Yielding":2.4,"Zap":2.4,
  "Bound Spike":2.3,"Dot":2.1,"Gear Needle":2.3,"High Needle":2.3,"Needle":2.2,
  "Spike":2.2,"Under Needle":2.2,"Wedge":2.3,"Wall Wedge":2.41,
  "Gear Point":2.5,"Hexa":2.45,"High Taper":2.4,"Kick":2.4,"Merge":2.4,
  "Operate":2.4,"Point":2.3,"Trans Kick":2.4,"Trans Point":2.4,"Unite":2.4,"Wall Ball":2.45,
};
const BLADE_WEIGHTS = {
  "Bear Scratch":31.5,"Bite Croc":31.0,"Black Shell":32.0,"Cobalt Dragoon":33.0,
  "Cobalt Drake":33.0,"Crimson Garuda":32.0,"Croc Crunch":31.5,"Dran Dagger":31.0,
  "Dran Strike":30.5,"Dran Sword":31.5,"Goat Tackle":31.0,"Hack Viking":31.0,
  "Hells Chain":31.5,"Hells Scythe":31.0,"Knife Shinobi":30.5,"Knight Lance":31.0,
  "Knight Shield":32.0,"Leon Claw":31.5,"Mammoth Tusk":33.0,"Phoenix Feather":30.5,
  "Phoenix Wing":33.5,"Ridge Triceratops":33.5,"Rhino Horn":33.0,"Samurai Calibur":31.5,
  "Samurai Steel":31.5,"Savage Bear":31.0,"Shark Edge":32.5,"Shark Gill":31.0,
  "Shelter Drake":31.0,"Shinobi Knife":30.5,"Sphinx Cowl":31.0,"Talon Ptera":30.5,
  "Tricera Press":33.5,"Tusk Mammoth":32.5,"Tyranno Beat":32.0,"Tyranno Roar":32.0,
  "Unicorn Sting":30.0,"Viper Tail":30.5,"Weiss Tiger":31.0,"Whale Wave":30.0,
  "Wizard Arrow":29.5,"Wyvern Gale":30.5,"Yell Kong":31.0,
  "Dran Buster":34.0,"Hells Hammer":33.5,"Wizard Rod":32.0,"Shinobi Shadow":33.0,
  "Leon Crest":33.5,"Phoenix Rudder":33.0,"Silver Wolf":32.5,"Samurai Saber":33.0,
  "Knight Mail":34.0,"Ptera Swing":33.5,"Impact Drake":36.0,"Ghost Circle":32.0,
  "Golem Rock":35.5,"Scorpio Spear":33.0,"Shark Scale":35.5,"Clock Mirage":32.0,
  "Meteor Dragoon":34.5,"Mummy Curse":33.0,"Aero Pegasus":34.0,"Wyvern Hover":33.5,
  "Orochi Cluster":33.0,
  "Courage Dran":30.0,"Wizard Arc":29.0,"Perseus Dark":30.5,"Hells Reaper":30.0,
  "Rhino Reaper":31.0,"Fox Brush":29.5,"Pegasus Blast":30.5,"Cerberus Flame":30.0,
  "Whale Flame":29.0,"Sol Eclipse":30.0,"Wolf Hunt":30.0,"Emperor Might":31.0,
  "Phoenix Flare":30.0,"Bahamut Blitz":31.0,"Knight Fortress":31.5,"Ragna Rage":30.5,
  "Kraken Wriggle":30.0,"Valkyrie Volt":30.0,"Leon Fang":30.0,"Antler Stag":30.5,
};

function calcComboWeight(combo) {
  if (!combo) return null;
  const rw = RATCHET_WEIGHTS[combo.ratchet];
  if (!rw) return null;
  const isRib = RIBS.has(combo.ratchet);
  if (combo.system === "CX") {
    if (!combo.lockChip || !combo.assistBlade || !combo.mainBlade) return null;
    if (!isRib && !combo.bit) return null;
    const lw  = CX_LOCK_CHIPS_WEIGHTS[combo.lockChip]  || 1.0;
    const aw  = CX_ASSIST_WEIGHTS[combo.assistBlade]   || 4.5;
    const mw  = CX_MAIN_BLADE_WEIGHTS[combo.mainBlade] || 18.0;
    const btw = isRib ? 0 : (BIT_WEIGHTS[combo.bit] || 0);
    return Math.round((lw + aw + mw + rw + btw) * 10) / 10;
  }
  const bw  = BLADE_WEIGHTS[combo.blade];
  if (!bw) return null;
  const btw = isRib ? 0 : BIT_WEIGHTS[combo.bit];
  if (!isRib && !btw) return null;
  return Math.round((bw + rw + btw) * 10) / 10;
}

function calcComboStats(combo) {
  if (!combo) return null;
  const bladeKey = combo.system === "CX" ? combo.mainBlade : combo.blade;
  const bData = BLADE_STATS[bladeKey];
  const rd    = RATCHET_DATA[combo.ratchet];
  const isRib = RIBS.has(combo.ratchet);
  const bit   = isRib ? {speed:4,stamina:3,defense:3,burst:6,dash:2} : BITS_MAP[combo.bit];
  if (!bData || !rd || !bit) return null;
  const [bAtk,bDef,bSta] = bData;
  const [height,sides,bstBase,atkMod,defMod,staMod] = rd;
  const hFactor  = (height-60)/10;
  const owdBonus = (sides-1)*0.5;
  let atk = bAtk*0.70 + (atkMod-hFactor*1.5)*4 + bit.speed*1.5;
  let def = bDef*0.70 + (defMod+hFactor*2)*4   + bit.defense*1.5;
  let sta = bSta*0.70 + (staMod+owdBonus)*3    + bit.stamina*2.0;
  let bst = bstBase*0.60 + bit.burst*10*0.40   - hFactor*15;
  let spd = bAtk*0.30 + bit.speed*7 + (bit.dash||0)*3;
  const clamp = v => Math.round(Math.max(0,Math.min(100,v)));
  return {attack:clamp(atk),defense:clamp(def),stamina:clamp(sta),burst:clamp(bst),speed:clamp(spd)};
}

const BLADE_STATS = {
  // BX
  "Bear Scratch":[25,45,30],"Bite Croc":[60,22,18],"Black Shell":[10,65,25],
  "Cobalt Dragoon":[60,15,25],"Cobalt Drake":[70,35,25],"Crimson Garuda":[45,25,30],
  "Croc Crunch":[60,22,18],"Dran Dagger":[50,25,25],"Dran Strike":[0,0,0],
  "Dran Sword":[55,25,20],"Goat Tackle":[13,65,22],"Hack Viking":[47,28,25],
  "Hells Chain":[35,40,25],"Hells Scythe":[30,35,35],"Knife Shinobi":[23,50,27],
  "Knight Lance":[25,60,15],"Knight Shield":[20,55,25],"Leon Claw":[40,40,20],
  "Mammoth Tusk":[38,40,37],"Phoenix Feather":[50,30,20],"Phoenix Wing":[65,30,20],
  "Ridge Triceratops":[32,55,13],"Rhino Horn":[20,50,30],"Samurai Calibur":[40,30,30],
  "Samurai Steel":[40,37,23],"Savage Bear":[17,50,33],"Shark Edge":[60,25,15],
  "Shark Gill":[20,25,55],"Shelter Drake":[25,40,35],"Shinobi Knife":[23,50,27],
  "Sphinx Cowl":[35,55,10],"Talon Ptera":[27,23,50],"Tricera Press":[20,65,15],
  "Tusk Mammoth":[33,35,32],"Tyranno Beat":[65,30,5],"Tyranno Roar":[65,25,18],
  "Unicorn Sting":[35,35,30],"Viper Tail":[30,20,50],"Weiss Tiger":[45,30,25],
  "Whale Wave":[45,35,20],"Wyvern Gale":[10,40,50],"Wizard Arrow":[15,30,55],
  "Yell Kong":[13,37,50],
  // UX
  "Dran Buster":[68,22,20],"Hells Hammer":[65,25,18],"Wizard Rod":[15,25,56],
  "Shinobi Shadow":[68,20,22],"Leon Crest":[65,22,22],"Phoenix Rudder":[62,20,28],
  "Silver Wolf":[25,28,55],"Samurai Saber":[65,20,25],"Knight Mail":[20,55,30],
  "Ptera Swing":[55,25,28],"Impact Drake":[75,25,10],"Ghost Circle":[30,30,50],
  "Golem Rock":[20,60,25],"Scorpio Spear":[65,20,25],"Shark Scale":[70,15,15],
  "Clock Mirage":[10,10,80],"Meteor Dragoon":[68,30,22],"Mummy Curse":[35,35,40],
  "Aero Pegasus":[60,20,40],"Wyvern Hover":[68,18,24],"Orochi Cluster":[55,30,25],
  // CX — keyed per Main Blade (solo lama, senza lock chip)
  "Arc":[20,20,60],"Blast":[75,20,20],"Blitz Break":[65,20,15],"Brave":[60,20,20],
  "Brush":[60,30,10],"Dark":[20,60,20],"Eclipse (Smash)":[33,47,20],"Eclipse (Upper)":[47,33,20],
  "Fang":[45,20,35],"Flame (Cerberus)":[10,30,60],"Flame (Whale)":[10,30,60],
  "Flare":[0,0,0],"Flow":[25,20,55],"Fortress Guard":[25,55,20],
  "Hunt":[25,30,55],"Might":[44,44,37],"Reaper (Hells)":[40,20,40],
  "Reaper (Rhino)":[35,25,15],"Stag":[18,35,47],"Volt":[45,15,15],"Wriggle":[28,22,50],
  // Legacy compatibility
  "Courage Dran":[70,22,18],"Sol Eclipse":[35,30,45],"Bahamut Blitz":[72,20,18],
  "Knight Fortress":[22,58,25],"Ragna Rage":[70,20,20],"Valkyrie Volt (old)":[65,22,22],
  "Leon Fang (old)":[68,20,22],"Antler Stag (old)":[60,28,22],
  "Perseus Dark (old)":[65,25,20],"Emperor Might (old)":[50,40,25],
  "Hells Reaper (old)":[68,22,20],"Rhino Reaper (old)":[45,48,18],
  "Fox Brush (old)":[55,30,28],"Cerberus Flame (old)":[65,25,20],
  "Whale Flame (old)":[22,28,58],"Wolf Hunt (old)":[65,25,20],
  "Phoenix Flare (old)":[68,20,22],"Kraken Wriggle (old)":[55,28,28],
  "Wizard Arc (old)":[18,22,58],
};

const FINISH_TYPES = ["KO","Xtreme Finish","Burst","OS (Outspin)"];
const SYS_COL  = {BX:"#00b4ff",UX:"#a855f7",CX:"#f59e0b"};
const TYPE_COL = {Attack:"#ef4444",Stamina:"#22c55e",Defense:"#3b82f6",Balance:"#f59e0b"};
const STAT_BARS = [["VEL","speed","#ef4444"],["STA","stamina","#22c55e"],["DIF","defense","#3b82f6"],["BST","burst","#f59e0b"]];
