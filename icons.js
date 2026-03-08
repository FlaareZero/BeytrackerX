// ════════════════════════════════════════════════════════════════
// BeyTracker X — Icons & UI Constants
// Solo costanti JS pure (no JSX). ResultIcon è in BeyTrackerX.html
// perché richiede Babel per il JSX.
// ════════════════════════════════════════════════════════════════

// ── NAVIGATION TABS ──────────────────────────────────────────
const BNAV_TABS = [
  { v: "tracker", icon: "⚔",  label: "Tracker" },
  { v: "deck",    icon: "🃏", label: "Deck"    },
  { v: "stats",   icon: "📊", label: "Stats"   },
  { v: "bits",    icon: "🔩", label: "Bits"    },
  { v: "bp",      icon: "📡", label: "Pass"    },
  { v: "backup",  icon: "💾", label: "Backup"  },
];

// ── SIDEBAR ICONS (desktop) ───────────────────────────────────
const SIDEBAR_ICONS = {
  tracker: "⚔",
  deck:    "🃏",
  stats:   "📊",
  bits:    "🔩",
  bp:      "📡",
  backup:  "💾",
};

// ── THEME TOGGLE ─────────────────────────────────────────────
const THEME_ICONS  = { dark: "☀️", light: "🌙" };
const THEME_LABELS = { dark: "tema chiaro", light: "tema scuro" };
