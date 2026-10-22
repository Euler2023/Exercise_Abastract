---
title: Neukirch Algebraic Number Theory Exercise Archive
aliases:
  - Neukirch Exercise Archive
  - Neukirch Algebraic Number Theory Archive Status
  - Neukirch Algebraic Number Theory Exercise Coverage
tags:
  - index
  - exercise-archive
  - neukirch-algebraic-number-theory
created: 2026-09-29
---

# Neukirch Algebraic Number Theory Exercise Archive

This dashboard records the archival coverage of the numbered exercises in Jürgen Neukirch's *Algebraic Number Theory*, English translation by Norbert Schappacher, Springer, 1999 (Grundlehren 322).

> [!info] Archive status and learning status
> An exercise is **archived** when the vault contains a source-identified exercise note for it. This is separate from the note's learning `status`: an archived exercise may remain `not-started`.

> [!note] Audit scope
> **Complete source archive: 293/293 numbered exercises in 293 notes.** Chapters I–VII contain **75, 51, 15, 51, 33, 46, 22** exercises. The 2026-10-23 pass added the remaining **212** notes and preserved the existing 81. Expected source labels and printed/PDF anchors were registered before archival; post-archive reconciliation found **zero missing, duplicate, unexpected or unparsed locators**. Chapter II §2 includes Exercise 9 on printed p. 116 / PDF p. 135.
>
> Archive completeness records source coverage. Source defects, corrected formulations, named external proof inputs and the unresolved capital-$K$/lowercase-$k$ ambiguity in VI.7.5 remain visible in the notes. All new learning statuses remain `not-started`.

## Chapter Coverage

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const chapterTitles = new Map([
  ["I", "Algebraic Integers"],
  ["II", "The Theory of Valuations"],
  ["III", "Riemann-Roch Theory"],
  ["IV", "Abstract Class Field Theory"],
  ["V", "Local Class Field Theory"],
  ["VI", "Global Class Field Theory"],
  ["VII", "Zeta Functions and L-series"],
]);

// Populate only after inspecting the original exercise pages.
// Each entry records { labels: [...], pages: "...", reconciled: false }.
// Labels include chapter, section, and exercise, for example "I.1.1".
// Set reconciled to true only after the post-archive source reconciliation.
const auditedCoverage = new Map([
  ["I", {
    labels: ["I.1.1", "I.1.2", "I.1.3", "I.1.4", "I.1.5", "I.1.6", "I.1.7", "I.2.1", "I.2.2", "I.2.3", "I.2.4", "I.2.5", "I.2.6", "I.2.7", "I.3.1", "I.3.2", "I.3.3", "I.3.4", "I.3.5", "I.3.6", "I.3.7", "I.3.8", "I.3.9", "I.3.10", "I.4.1", "I.4.2", "I.4.3", "I.5.1", "I.5.2", "I.5.3", "I.6.1", "I.6.2", "I.6.3", "I.6.4", "I.6.5", "I.6.6", "I.6.7", "I.7.1", "I.7.2", "I.7.3", "I.7.4", "I.7.5", "I.7.6", "I.8.1", "I.8.2", "I.8.3", "I.8.4", "I.8.5", "I.8.6", "I.8.7", "I.8.8", "I.8.9", "I.8.10", "I.8.11", "I.9.1", "I.9.2", "I.9.3", "I.9.4", "I.10.1", "I.10.2", "I.10.3", "I.10.4", "I.10.5", "I.11.1", "I.11.2", "I.11.3", "I.11.4", "I.11.5", "I.11.6", "I.11.7", "I.12.1", "I.12.2", "I.12.3", "I.12.4", "I.12.5"],
    pages: "printed pp. 5, 15, 23, 27-28, 34, 38, 43-44, 52-53, 58, 64-65, 71-72, 84 / PDF pp. 24, 34, 42, 46-47, 53, 57, 62-63, 71-72, 77, 83-84, 90-91, 103; sections 13-14 checked: no numbered exercises",
    reconciled: true,
  }],
  ["II", {"labels": ["II.1.1", "II.1.2", "II.1.3", "II.1.4", "II.1.5", "II.1.6", "II.2.1", "II.2.2", "II.2.3", "II.2.4", "II.2.5", "II.2.6", "II.2.7", "II.2.8", "II.2.9", "II.3.1", "II.3.2", "II.3.3", "II.3.4", "II.4.1", "II.4.2", "II.4.3", "II.4.4", "II.4.5", "II.4.6", "II.5.1", "II.5.2", "II.5.3", "II.5.4", "II.5.5", "II.5.6", "II.6.1", "II.6.2", "II.6.3", "II.6.4", "II.6.5", "II.7.1", "II.7.2", "II.7.3", "II.8.1", "II.8.2", "II.8.3", "II.8.4", "II.8.5", "II.8.6", "II.9.1", "II.9.2", "II.9.3", "II.9.4", "II.10.1", "II.10.2"], "pages": "printed pp. 106, 115, 116, 123, 134, 142, 152, 159, 165, 166, 176, 181 / PDF pp. 125, 134, 135, 142, 153, 161, 171, 178, 184, 185, 195, 200", "reconciled": true}],
  ["III", {"labels": ["III.1.1", "III.1.2", "III.1.3", "III.1.4", "III.1.5", "III.1.6", "III.2.1", "III.2.2", "III.2.3", "III.2.4", "III.2.5", "III.4.1", "III.4.2", "III.4.3", "III.4.4"], "pages": "printed pp. 193, 194, 207, 208, 233 / PDF pp. 212, 213, 226, 227, 252", "reconciled": true}],
  ["IV", {"labels": ["IV.1.1", "IV.1.2", "IV.1.3", "IV.1.4", "IV.1.5", "IV.2.1", "IV.2.2", "IV.2.3", "IV.2.4", "IV.2.5", "IV.2.6", "IV.3.1", "IV.3.2", "IV.3.3", "IV.3.4", "IV.3.5", "IV.3.6", "IV.3.7", "IV.3.8", "IV.4.1", "IV.4.2", "IV.4.3", "IV.4.4", "IV.5.1", "IV.5.2", "IV.5.3", "IV.6.1", "IV.6.2", "IV.6.3", "IV.6.4", "IV.6.5", "IV.6.6", "IV.6.7", "IV.6.8", "IV.6.9", "IV.6.10", "IV.6.11", "IV.6.12", "IV.6.13", "IV.6.14", "IV.6.15", "IV.6.16", "IV.6.17", "IV.6.18", "IV.6.19", "IV.6.20", "IV.7.1", "IV.7.2", "IV.7.3", "IV.7.4", "IV.7.5"], "pages": "printed pp. 264, 265, 274, 283, 284, 290, 298, 299, 305, 306, 307, 308, 309, 310, 314, 315 / PDF pp. 283, 284, 293, 302, 303, 309, 317, 318, 324, 325, 326, 327, 328, 329, 333, 334", "reconciled": true}],
  ["V", {"labels": ["V.1.1", "V.1.2", "V.1.3", "V.1.4", "V.1.5", "V.1.6", "V.1.7", "V.1.8", "V.1.9", "V.1.10", "V.1.11", "V.2.1", "V.2.2", "V.2.3", "V.2.4", "V.3.1", "V.3.2", "V.3.3", "V.3.4", "V.3.5", "V.3.6", "V.3.7", "V.4.1", "V.4.2", "V.4.3", "V.4.4", "V.4.5", "V.4.6", "V.5.1", "V.5.2", "V.5.3", "V.5.4", "V.5.5"], "pages": "printed pp. 325, 326, 332, 340, 341, 345, 346, 351, 352 / PDF pp. 344, 345, 351, 359, 360, 364, 365, 370, 371", "reconciled": true}],
  ["VI", {"labels": ["VI.1.1", "VI.1.2", "VI.1.3", "VI.1.4", "VI.1.5", "VI.1.6", "VI.1.7", "VI.1.8", "VI.1.9", "VI.1.10", "VI.1.11", "VI.1.12", "VI.1.13", "VI.1.14", "VI.2.1", "VI.2.2", "VI.2.3", "VI.2.4", "VI.2.5", "VI.3.1", "VI.3.2", "VI.3.3", "VI.3.4", "VI.4.1", "VI.4.2", "VI.4.3", "VI.4.4", "VI.4.5", "VI.5.1", "VI.5.2", "VI.5.3", "VI.5.4", "VI.6.1", "VI.6.2", "VI.6.3", "VI.6.4", "VI.6.5", "VI.6.6", "VI.6.7", "VI.7.1", "VI.7.2", "VI.7.3", "VI.7.4", "VI.7.5", "VI.7.6", "VI.7.7"], "pages": "printed pp. 367, 368, 373, 379, 385, 394, 404, 405, 413, 414 / PDF pp. 386, 387, 392, 398, 404, 413, 423, 424, 432, 433", "reconciled": true}],
  ["VII", {"labels": ["VII.1.1", "VII.1.2", "VII.1.3", "VII.1.4", "VII.1.5", "VII.2.1", "VII.2.2", "VII.2.3", "VII.2.4", "VII.6.1", "VII.6.2", "VII.6.3", "VII.6.4", "VII.6.5", "VII.6.6", "VII.7.1", "VII.7.2", "VII.7.3", "VII.7.4", "VII.7.5", "VII.7.6", "VII.7.7"], "pages": "printed pp. 433, 434, 443, 484, 493 / PDF pp. 452, 453, 462, 503, 512", "reconciled": true}],
]);
const auditedSections = new Map([
  ["I.1", {
    title: "The Gaussian Integers",
    labels: ["I.1.1", "I.1.2", "I.1.3", "I.1.4", "I.1.5", "I.1.6", "I.1.7"],
    pages: "printed p. 5 / PDF p. 24",
    reconciled: true,
  }],
  ["I.2", {
    title: "Integrality",
    labels: ["I.2.1", "I.2.2", "I.2.3", "I.2.4", "I.2.5", "I.2.6", "I.2.7"],
    pages: "printed p. 15 / PDF p. 34",
    reconciled: true,
  }],
  ["I.3", {
    title: "Ideals",
    labels: ["I.3.1", "I.3.2", "I.3.3", "I.3.4", "I.3.5", "I.3.6", "I.3.7", "I.3.8", "I.3.9", "I.3.10"],
    pages: "printed p. 23 / PDF p. 42",
    reconciled: true,
  }],
  ["I.4", {
    title: "Lattices",
    labels: ["I.4.1", "I.4.2", "I.4.3"],
    pages: "printed pp. 27-28 / PDF pp. 46-47",
    reconciled: true,
  }],
  ["I.5", {
    title: "Minkowski Theory",
    labels: ["I.5.1", "I.5.2", "I.5.3"],
    pages: "printed p. 34 / PDF p. 53",
    reconciled: true,
  }],
  ["I.6", {
    title: "The Class Number",
    labels: ["I.6.1", "I.6.2", "I.6.3", "I.6.4", "I.6.5", "I.6.6", "I.6.7"],
    pages: "printed p. 38 / PDF p. 57",
    reconciled: true,
  }],
  ["I.7", {
    title: "Dirichlet's Unit Theorem",
    labels: ["I.7.1", "I.7.2", "I.7.3", "I.7.4", "I.7.5", "I.7.6"],
    pages: "printed pp. 43-44 / PDF pp. 62-63",
    reconciled: true,
  }],
  ["I.8", {
    title: "Extensions of Dedekind Domains",
    labels: ["I.8.1", "I.8.2", "I.8.3", "I.8.4", "I.8.5", "I.8.6", "I.8.7", "I.8.8", "I.8.9", "I.8.10", "I.8.11"],
    pages: "printed pp. 52-53 / PDF pp. 71-72",
    reconciled: true,
  }],
  ["I.9", {
    title: "Hilbert's Ramification Theory",
    labels: ["I.9.1", "I.9.2", "I.9.3", "I.9.4"],
    pages: "printed p. 58 / PDF p. 77",
    reconciled: true,
  }],
  ["I.10", {
    title: "Cyclotomic Fields",
    labels: ["I.10.1", "I.10.2", "I.10.3", "I.10.4", "I.10.5"],
    pages: "printed pp. 64-65 / PDF pp. 83-84",
    reconciled: true,
  }],
  ["I.11", {
    title: "Localization",
    labels: ["I.11.1", "I.11.2", "I.11.3", "I.11.4", "I.11.5", "I.11.6", "I.11.7"],
    pages: "printed pp. 71-72 / PDF pp. 90-91",
    reconciled: true,
  }],
  ["I.12", {
    title: "Orders",
    labels: ["I.12.1", "I.12.2", "I.12.3", "I.12.4", "I.12.5"],
    pages: "printed p. 84 / PDF p. 103",
    reconciled: true,
  }],
  ["I.13", {
    title: "One-dimensional Schemes",
    labels: [],
    pages: "body printed pp. 84-93 / PDF pp. 103-112; no numbered exercises",
    reconciled: true,
  }],
  ["I.14", {
    title: "Function Fields",
    labels: [],
    pages: "body printed pp. 94-97 / PDF pp. 113-116; no numbered exercises",
    reconciled: true,
  }],
  ["II.1", {
    title: "The p-adic Numbers",
    labels: ["II.1.1", "II.1.2", "II.1.3", "II.1.4", "II.1.5", "II.1.6"],
    pages: "printed p. 106 / PDF p. 125",
    reconciled: true,
  }],
  ["II.2", {"title": "The p-adic Absolute Value", "labels": ["II.2.1", "II.2.2", "II.2.3", "II.2.4", "II.2.5", "II.2.6", "II.2.7", "II.2.8", "II.2.9"], "pages": "printed pp. 115, 116 / PDF pp. 134, 135", "reconciled": true}],
  ["II.3", {"title": "Valuations", "labels": ["II.3.1", "II.3.2", "II.3.3", "II.3.4"], "pages": "printed pp. 123 / PDF pp. 142", "reconciled": true}],
  ["II.4", {"title": "Completions", "labels": ["II.4.1", "II.4.2", "II.4.3", "II.4.4", "II.4.5", "II.4.6"], "pages": "printed pp. 134 / PDF pp. 153", "reconciled": true}],
  ["II.5", {"title": "Local Fields", "labels": ["II.5.1", "II.5.2", "II.5.3", "II.5.4", "II.5.5", "II.5.6"], "pages": "printed pp. 142 / PDF pp. 161", "reconciled": true}],
  ["II.6", {"title": "Henselian Fields", "labels": ["II.6.1", "II.6.2", "II.6.3", "II.6.4", "II.6.5"], "pages": "printed pp. 152 / PDF pp. 171", "reconciled": true}],
  ["II.7", {"title": "Unramified and Tamely Ramified Extensions", "labels": ["II.7.1", "II.7.2", "II.7.3"], "pages": "printed pp. 159 / PDF pp. 178", "reconciled": true}],
  ["II.8", {"title": "Extensions of Valuations", "labels": ["II.8.1", "II.8.2", "II.8.3", "II.8.4", "II.8.5", "II.8.6"], "pages": "printed pp. 165, 166 / PDF pp. 184, 185", "reconciled": true}],
  ["II.9", {"title": "Galois Theory of Valuations", "labels": ["II.9.1", "II.9.2", "II.9.3", "II.9.4"], "pages": "printed pp. 176 / PDF pp. 195", "reconciled": true}],
  ["II.10", {"title": "Higher Ramification Groups", "labels": ["II.10.1", "II.10.2"], "pages": "printed pp. 181 / PDF pp. 200", "reconciled": true}],
  ["III.1", {"title": "Primes", "labels": ["III.1.1", "III.1.2", "III.1.3", "III.1.4", "III.1.5", "III.1.6"], "pages": "printed pp. 193, 194 / PDF pp. 212, 213", "reconciled": true}],
  ["III.2", {"title": "Different and Discriminant", "labels": ["III.2.1", "III.2.2", "III.2.3", "III.2.4", "III.2.5"], "pages": "printed pp. 207, 208 / PDF pp. 226, 227", "reconciled": true}],
  ["III.3", {"title": "Riemann-Roch", "labels": [], "pages": "No numbered exercises; boundary printed p. 224 / PDF p. 243", "reconciled": true}],
  ["III.4", {"title": "Metrized o-Modules", "labels": ["III.4.1", "III.4.2", "III.4.3", "III.4.4"], "pages": "printed pp. 233 / PDF pp. 252", "reconciled": true}],
  ["III.5", {"title": "Grothendieck Groups", "labels": [], "pages": "No numbered exercises; boundary printed p. 243 / PDF p. 262", "reconciled": true}],
  ["III.6", {"title": "The Chern Character", "labels": [], "pages": "No numbered exercises; boundary printed p. 246 / PDF p. 265", "reconciled": true}],
  ["III.7", {"title": "Grothendieck-Riemann-Roch", "labels": [], "pages": "No numbered exercises; boundary printed p. 255 / PDF p. 274", "reconciled": true}],
  ["III.8", {"title": "The Euler-Minkowski Characteristic", "labels": [], "pages": "No numbered exercises; boundary printed p. 259 / PDF p. 278", "reconciled": true}],
  ["IV.1", {"title": "Infinite Galois Theory", "labels": ["IV.1.1", "IV.1.2", "IV.1.3", "IV.1.4", "IV.1.5"], "pages": "printed pp. 264, 265 / PDF pp. 283, 284", "reconciled": true}],
  ["IV.2", {"title": "Projective and Inductive Limits", "labels": ["IV.2.1", "IV.2.2", "IV.2.3", "IV.2.4", "IV.2.5", "IV.2.6"], "pages": "printed pp. 274 / PDF pp. 293", "reconciled": true}],
  ["IV.3", {"title": "Abstract Galois Theory", "labels": ["IV.3.1", "IV.3.2", "IV.3.3", "IV.3.4", "IV.3.5", "IV.3.6", "IV.3.7", "IV.3.8"], "pages": "printed pp. 283, 284 / PDF pp. 302, 303", "reconciled": true}],
  ["IV.4", {"title": "Abstract Valuation Theory", "labels": ["IV.4.1", "IV.4.2", "IV.4.3", "IV.4.4"], "pages": "printed pp. 290 / PDF pp. 309", "reconciled": true}],
  ["IV.5", {"title": "The Reciprocity Map", "labels": ["IV.5.1", "IV.5.2", "IV.5.3"], "pages": "printed pp. 298, 299 / PDF pp. 317, 318", "reconciled": true}],
  ["IV.6", {"title": "The General Reciprocity Law", "labels": ["IV.6.1", "IV.6.2", "IV.6.3", "IV.6.4", "IV.6.5", "IV.6.6", "IV.6.7", "IV.6.8", "IV.6.9", "IV.6.10", "IV.6.11", "IV.6.12", "IV.6.13", "IV.6.14", "IV.6.15", "IV.6.16", "IV.6.17", "IV.6.18", "IV.6.19", "IV.6.20"], "pages": "printed pp. 305, 306, 307, 308, 309, 310 / PDF pp. 324, 325, 326, 327, 328, 329", "reconciled": true}],
  ["IV.7", {"title": "The Herbrand Quotient", "labels": ["IV.7.1", "IV.7.2", "IV.7.3", "IV.7.4", "IV.7.5"], "pages": "printed pp. 314, 315 / PDF pp. 333, 334", "reconciled": true}],
  ["V.1", {"title": "The Local Reciprocity Law", "labels": ["V.1.1", "V.1.2", "V.1.3", "V.1.4", "V.1.5", "V.1.6", "V.1.7", "V.1.8", "V.1.9", "V.1.10", "V.1.11"], "pages": "printed pp. 325, 326 / PDF pp. 344, 345", "reconciled": true}],
  ["V.2", {"title": "The Norm Residue Symbol over Qp", "labels": ["V.2.1", "V.2.2", "V.2.3", "V.2.4"], "pages": "printed pp. 332 / PDF pp. 351", "reconciled": true}],
  ["V.3", {"title": "The Hilbert Symbol", "labels": ["V.3.1", "V.3.2", "V.3.3", "V.3.4", "V.3.5", "V.3.6", "V.3.7"], "pages": "printed pp. 340, 341 / PDF pp. 359, 360", "reconciled": true}],
  ["V.4", {"title": "Formal Groups", "labels": ["V.4.1", "V.4.2", "V.4.3", "V.4.4", "V.4.5", "V.4.6"], "pages": "printed pp. 345, 346 / PDF pp. 364, 365", "reconciled": true}],
  ["V.5", {"title": "Generalized Cyclotomic Theory", "labels": ["V.5.1", "V.5.2", "V.5.3", "V.5.4", "V.5.5"], "pages": "printed pp. 351, 352 / PDF pp. 370, 371", "reconciled": true}],
  ["V.6", {"title": "Higher Ramification Groups", "labels": [], "pages": "No numbered exercises; boundary printed p. 355 / PDF p. 374", "reconciled": true}],
  ["VI.1", {"title": "Ideles and Idele Classes", "labels": ["VI.1.1", "VI.1.2", "VI.1.3", "VI.1.4", "VI.1.5", "VI.1.6", "VI.1.7", "VI.1.8", "VI.1.9", "VI.1.10", "VI.1.11", "VI.1.12", "VI.1.13", "VI.1.14"], "pages": "printed pp. 367, 368 / PDF pp. 386, 387", "reconciled": true}],
  ["VI.2", {"title": "Ideles in Field Extensions", "labels": ["VI.2.1", "VI.2.2", "VI.2.3", "VI.2.4", "VI.2.5"], "pages": "printed pp. 373 / PDF pp. 392", "reconciled": true}],
  ["VI.3", {"title": "The Herbrand Quotient of the Idele Class Group", "labels": ["VI.3.1", "VI.3.2", "VI.3.3", "VI.3.4"], "pages": "printed pp. 379 / PDF pp. 398", "reconciled": true}],
  ["VI.4", {"title": "The Class Field Axiom", "labels": ["VI.4.1", "VI.4.2", "VI.4.3", "VI.4.4", "VI.4.5"], "pages": "printed pp. 385 / PDF pp. 404", "reconciled": true}],
  ["VI.5", {"title": "The Global Reciprocity Law", "labels": ["VI.5.1", "VI.5.2", "VI.5.3", "VI.5.4"], "pages": "printed pp. 394 / PDF pp. 413", "reconciled": true}],
  ["VI.6", {"title": "Global Class Fields", "labels": ["VI.6.1", "VI.6.2", "VI.6.3", "VI.6.4", "VI.6.5", "VI.6.6", "VI.6.7"], "pages": "printed pp. 404, 405 / PDF pp. 423, 424", "reconciled": true}],
  ["VI.7", {"title": "The Ideal-Theoretic Version of Class Field Theory", "labels": ["VI.7.1", "VI.7.2", "VI.7.3", "VI.7.4", "VI.7.5", "VI.7.6", "VI.7.7"], "pages": "printed pp. 413, 414 / PDF pp. 432, 433", "reconciled": true}],
  ["VI.8", {"title": "The Reciprocity Law of the Power Residues", "labels": [], "pages": "No numbered exercises; boundary printed p. 417 / PDF p. 436", "reconciled": true}],
  ["VII.1", {"title": "The Riemann Zeta Function", "labels": ["VII.1.1", "VII.1.2", "VII.1.3", "VII.1.4", "VII.1.5"], "pages": "printed pp. 433, 434 / PDF pp. 452, 453", "reconciled": true}],
  ["VII.2", {"title": "Dirichlet L-series", "labels": ["VII.2.1", "VII.2.2", "VII.2.3", "VII.2.4"], "pages": "printed pp. 443 / PDF pp. 462", "reconciled": true}],
  ["VII.3", {"title": "Theta Series", "labels": [], "pages": "No numbered exercises; boundary printed p. 453 / PDF p. 472", "reconciled": true}],
  ["VII.4", {"title": "The Higher-dimensional Gamma Function", "labels": [], "pages": "No numbered exercises; boundary printed p. 457 / PDF p. 476", "reconciled": true}],
  ["VII.5", {"title": "The Dedekind Zeta Function", "labels": [], "pages": "No numbered exercises; boundary printed p. 470 / PDF p. 489", "reconciled": true}],
  ["VII.6", {"title": "Hecke Characters", "labels": ["VII.6.1", "VII.6.2", "VII.6.3", "VII.6.4", "VII.6.5", "VII.6.6"], "pages": "printed pp. 484 / PDF pp. 503", "reconciled": true}],
  ["VII.7", {"title": "Theta Series of Algebraic Number Fields", "labels": ["VII.7.1", "VII.7.2", "VII.7.3", "VII.7.4", "VII.7.5", "VII.7.6", "VII.7.7"], "pages": "printed pp. 493 / PDF pp. 512", "reconciled": true}],
  ["VII.8", {"title": "Hecke L-series", "labels": [], "pages": "No numbered exercises; boundary printed p. 504 / PDF p. 523", "reconciled": true}],
  ["VII.9", {"title": "Values of Dirichlet L-series at Integer Points", "labels": [], "pages": "No numbered exercises; boundary printed p. 517 / PDF p. 536", "reconciled": true}],
  ["VII.10", {"title": "Artin L-series", "labels": [], "pages": "No numbered exercises; boundary printed p. 527 / PDF p. 546", "reconciled": true}],
  ["VII.11", {"title": "The Artin Conductor", "labels": [], "pages": "No numbered exercises; boundary printed p. 535 / PDF p. 554", "reconciled": true}],
  ["VII.12", {"title": "The Functional Equation of Artin L-series", "labels": [], "pages": "No numbered exercises; boundary printed p. 542 / PDF p. 561", "reconciled": true}],
  ["VII.13", {"title": "Density Theorems", "labels": [], "pages": "No numbered exercises; boundary printed p. 549 / PDF p. 568", "reconciled": true}],
]);

const noteFiles = new Map([...chapterTitles.keys()].map(ch => [ch, new Set()]));
const mappings = new Map();
const unparsed = [];

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapterTitles.has(chapter)) noteFiles.get(chapter).add(page.file.path);
    if (!chapterTitles.has(chapter) || !section || !exercise) {
      unparsed.push([page.file.link, segment]);
      continue;
    }
    const label = chapter + "." + Number(section) + "." + Number(exercise);
    if (!mappings.has(label)) {
      mappings.set(label, {
        chapter, section: Number(section), exercise: Number(exercise), notes: new Map(),
      });
    }
    mappings.get(label).notes.set(page.file.path, page);
  }
}

const rows = [];
const reconciliationRows = [];
for (const [chapter, title] of chapterTitles) {
  const found = new Set(
    [...mappings.entries()].filter(([, entry]) => entry.chapter === chapter).map(([label]) => label)
  );
  const duplicateCount = [...found].filter(label => mappings.get(label).notes.size > 1).length;
  const audit = auditedCoverage.get(chapter);
  let coverage = "Pending source-total audit";
  let status = found.size > 0 ? "Partial; source audit pending" : "Not archived";
  if (noteFiles.get(chapter).size > 0 && found.size === 0) status = "Needs locator review";
  if (audit) {
    const expected = new Set(audit.labels);
    const missing = [...expected].filter(label => !found.has(label));
    const unexpected = [...found].filter(label => !expected.has(label));
    coverage = [...found].filter(label => expected.has(label)).length + "/" + expected.size;
    const clean = missing.length === 0 && unexpected.length === 0
      && duplicateCount === 0 && unparsed.length === 0;
    status = audit.reconciled && clean ? "Complete" : "Source-audited; reconciliation pending";
    reconciliationRows.push([
      chapter, expected.size, missing.length, duplicateCount, unexpected.length,
      audit.pages, status,
    ]);
  }
  rows.push([chapter, title, found.size, noteFiles.get(chapter).size, coverage, status]);
}

dv.table(
  ["Chapter", "Original title", "Archived source exercises", "Note files",
   "Verified source coverage", "Archive status"],
  rows
);

dv.header(3, "Verified Chapter Coverage");
if (reconciliationRows.length === 0) {
  dv.paragraph("No chapter has completed a source-total audit yet. Missing and unexpected label counts are unknown until the source sets are recorded.");
} else {
  dv.table(
    ["Chapter", "Verified total", "Missing", "Duplicate mappings", "Unexpected",
     "Exercise pages", "Archive status"],
    reconciliationRows
  );
}

dv.header(3, "Verified Section Coverage");
const sectionRows = [];
for (const [section, audit] of auditedSections) {
  const expected = new Set(audit.labels);
  const found = new Set([...mappings.keys()].filter(label => label.startsWith(section + ".")));
  const missing = [...expected].filter(label => !found.has(label));
  const unexpected = [...found].filter(label => !expected.has(label));
  const duplicates = [...found].filter(label => mappings.get(label).notes.size > 1);
  const clean = missing.length === 0 && unexpected.length === 0
    && duplicates.length === 0 && unparsed.length === 0;
  sectionRows.push([
    section, audit.title, [...expected].filter(label => found.has(label)).length + "/" + expected.size,
    missing.length, duplicates.length, unexpected.length, audit.pages,
    audit.reconciled && clean ? "Complete" : "Source-audited; reconciliation pending",
  ]);
}
dv.table(
  ["Section", "Original title", "Verified coverage", "Missing", "Duplicate mappings",
   "Unexpected", "Exercise pages", "Archive status"], sectionRows
);

dv.header(3, "Source Locator Checks");
const duplicates = [...mappings.entries()].filter(([, entry]) => entry.notes.size > 1);
dv.paragraph("Duplicate mappings: " + duplicates.length + ". Unparsed source locators: " + unparsed.length + ".");
if (duplicates.length > 0) {
  dv.table(["Source exercise", "Mapped notes"], duplicates.map(([label, entry]) =>
    [label, [...entry.notes.values()].map(page => page.file.link)]));
}
if (unparsed.length > 0) {
  dv.table(["Note", "Source segment needing review"], unparsed);
}

```

## Chapter Scope Notes

| Chapter | Original title | Source exercise audit |
|---------|----------------|-----------------------|
| I | Algebraic Integers | Complete: 75/75 source exercises in 75 notes; §1–§14 reconciled. This batch added 44 notes and reused R329 for I.8.2. §13–§14 have no numbered exercises. Source issues remain visibly recorded in their notes and section warnings. |
| II | The Theory of Valuations | Complete: 51/51 source exercises in 51 notes; all sections reconciled on 2026-10-23. |
| III | Riemann-Roch Theory | Complete: 15/15 source exercises in 15 notes; all sections reconciled on 2026-10-23. |
| IV | Abstract Class Field Theory | Complete: 51/51 source exercises in 51 notes; all sections reconciled on 2026-10-23. |
| V | Local Class Field Theory | Complete: 33/33 source exercises in 33 notes; all sections reconciled on 2026-10-23. |
| VI | Global Class Field Theory | Complete: 46/46 source exercises in 46 notes; all sections reconciled on 2026-10-23. |
| VII | Zeta Functions and L-series | Complete: 22/22 source exercises in 22 notes; all sections reconciled on 2026-10-23. |

The chapter titles and order were visually checked on all three original contents pages. The contents end with the bibliography and index and do not list a separate appendix. This contents check is not an audit of the full exercise corpus. [S4, Contents, printed pp. xv-xvii, PDF pp. 16-18]

## Source Exercise to Archived Note Mapping

Each section has its own query under a chapter heading. These Markdown headings can be folded and selected in the outline. A section table matches the exact edition, chapter, and section in the same source segment; exercise numbers are sorted numerically within that section.

### Chapter I — Algebraic Integers

#### I.1 — The Gaussian Integers

Source-audited labels: I.1.1-I.1.7, printed p. 5 / PDF p. 24. The verified section coverage above reports the current reconciliation status.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 1;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.2 — Integrality

Source-audited and reconciled on 2026-10-11: the ordered labels are I.2.1-I.2.7, all on printed p. 15 / PDF p. 34. The following page begins §3, confirming the end of the exercise group. Verified coverage: 7/7; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. No source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 2;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.3 — Ideals

Source-audited and reconciled on 2026-10-17: the ordered labels are I.3.1-I.3.10, all on printed p. 23 / PDF p. 42. The exercise group precedes the §4 body heading on the same page, despite the §4 running header. The section begins on printed p. 16 / PDF p. 35. Verified coverage: 10/10; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. No source figure is required.

> [!warning] Source wording and scope in Exercises I.3.3 and I.3.5
> I.3.3 implicitly needs a genuine quadratic field: under the usual definition of squarefree, $d=1$ is allowed by the printed wording and gives a counterexample. Its note preserves the original and proves the intended $d\ne1$ version.
>
> I.3.5 calls the quotient a "principal ideal domain." This fails for $\mathbb Z/4\mathbb Z$. Its note preserves the original statement, gives the counterexample, and proves the intended principal ideal **ring** version, allowing zero divisors. Its printed hint also omits the zero ideal from the list of proper quotient ideals. These source issues do not change the one-note-per-number archival count.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 3;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.4 — Lattices

Source-audited and reconciled on 2026-10-17: the ordered labels are I.4.1-I.4.3. Exercises 1-2 are on printed p. 27 / PDF p. 46; Exercise 3 is on printed p. 28 / PDF p. 47, immediately before the §5 body heading. The section begins on printed p. 23 / PDF p. 42. Verified coverage: 3/3; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. No source figure is required.

> [!note] Source precision in Exercise I.4.3
> The printed conclusion does not require the integer vector to be nonzero, so the zero vector already satisfies it. The archived note preserves that true statement and derives the stronger nonzero-vector conclusion from the printed strict determinant bound. I.4.2 explicitly works in positive dimension for its nonzero-point equality conclusion and records the zero-dimensional exception.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 4;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.5 — Minkowski Theory

Source-audited and reconciled on 2026-10-17: the ordered labels are I.5.1-I.5.3, all on printed p. 34 / PDF p. 53, immediately before the §6 body heading. The section begins on printed p. 28 / PDF p. 47. Verified coverage: 3/3, mapping one-to-one to LA537-LA539; no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. All three learning states remain `not-started`. No source figure is required.

> [!warning] Source parameter range in Exercise I.5.2
> The printed volume formula does not specify the range of $t$. It holds for $t\ge0$; for $t<0$ the set is empty while the printed polynomial is nonzero. The note preserves the original, proves the intended $t>0$ calculation, and states the full real-parameter version. I.5.3 uses only positive parameters and separately justifies its non-strict endpoint by the minimum positive integer norm.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 5;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.6 — The Class Number

Source-audited and reconciled on 2026-10-20: ordered labels I.6.1-I.6.7, printed p. 38 / PDF p. 57. Verified coverage 7/7; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Invalid discriminant entry in I.6.2
> The source prints positive $11$, which is not a quadratic-field discriminant. Its note preserves the entry, explains its impossibility, and proves the remaining seven valid cases without guessing a replacement.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 6;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.7 — Dirichlet's Unit Theorem

Source-audited and reconciled on 2026-10-20: ordered labels I.7.1-I.7.6, printed pp. 43–44 / PDF pp. 62–63. Verified coverage 6/6; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 7;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.8 — Extensions of Dedekind Domains

Source-audited and reconciled on 2026-10-20: ordered labels I.8.1-I.8.11, printed pp. 52–53 / PDF pp. 71–72. Verified coverage 11/11; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Source statement refuted
> Exercise I.8.2's prescribed coprime-conductor claim is false even for a separable cubic number field. Its archived note preserves the full mathematical claim and gives an independent integral-basis calculation, the quotient $\mathcal O_L/2\mathcal O_L\simeq\mathbb F_2^3$, and a contradiction for every integral primitive element. Archival coverage records this source issue; it does not treat the printed claim as a proved theorem.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const matches = [];
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== "I" || Number(section) !== 8 || !exercise) continue;
    matches.push({
      number: Number(exercise), path: page.file.path,
      row: ["I.8." + Number(exercise), page.file.link, page.topic,
        page.status, page.source_status ?? "See note"],
    });
  }
}
matches.sort((a, b) => a.number - b.number || a.path.localeCompare(b.path));
dv.table(["Source exercise", "Archived note", "Topic", "Learning status", "Source status"],
  matches.map(entry => entry.row));
```

#### I.9 — Hilbert's Ramification Theory

Source-audited and reconciled on 2026-10-20: ordered labels I.9.1-I.9.4, printed p. 58 / PDF p. 77. Verified coverage 4/4; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Incorrect exponent in I.9.2
> The source sets the Frobenius exponent to the residue-extension degree. Its note preserves that formula, gives a counterexample in $\mathbb Q(i)$ above $3$, and proves the corrected statement with $q=\#\kappa(\mathfrak p)$. The term nonsplit in I.9.1 means exactly one prime above the base prime.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 9;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.10 — Cyclotomic Fields

Source-audited and reconciled on 2026-10-20: ordered labels I.10.1-I.10.5, printed pp. 64–65 / PDF pp. 83–84. Verified coverage 5/5; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 10;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.11 — Localization

Source-audited and reconciled on 2026-10-20: ordered labels I.11.1-I.11.7, printed pp. 71–72 / PDF pp. 90–91. Verified coverage 7/7; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 11;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.12 — Orders

Source-audited and reconciled on 2026-10-20: ordered labels I.12.1-I.12.5, printed p. 84 / PDF p. 103. Verified coverage 5/5; one note per source number, including all subparts. Missing labels, duplicate mappings, unexpected labels, and unparsed Neukirch locators are all zero. All new notes remain `not-started`; no source figure is required.

> [!warning] Reversed parameter in the hint to I.12.1
> The printed parametrization $X=t^2-1$, $Y=t(t^2-1)$ requires $t=Y/X$, although the hint prints $t=X/Y$. The note preserves the original, explains the correction, and proves the printed kernel and all four normalizations.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 12;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("No source-identified exercises are archived for this section yet. This does not establish its source total.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.13 — One-dimensional Schemes

Source-audited and reconciled on 2026-10-20: no numbered exercises occur in this section (body printed pp. 84–93 / PDF pp. 103–112). The expected source-label set is empty, verified total 0 and coverage 0/0. This is a checked zero-exercise section, rather than an unaudited or missing batch. No exercise note is created.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 13;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

#### I.14 — Function Fields

Source-audited and reconciled on 2026-10-20: no numbered exercises occur in this section (body printed pp. 94–97 / PDF pp. 113–116). The expected source-label set is empty, verified total 0 and coverage 0/0. This is a checked zero-exercise section, rather than an unaudited or missing batch. No exercise note is created.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "I";
const targetSection = 14;
const matches = new Map();

for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const number = Number(exercise);
    const label = chapter + "." + targetSection + "." + number;
    matches.set(label + "\0" + page.file.path, {
      number, label, path: page.file.path,
      row: [label, page.file.link, page.topic, page.status, page.difficulty],
    });
  }
}

const rows = [...matches.values()].sort((a, b) =>
  a.number - b.number || a.path.localeCompare(b.path)
);
if (rows.length === 0) {
  dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
} else {
  dv.table(
    ["Source exercise", "Archived note", "Topic", "Learning status", "Difficulty"],
    rows.map(entry => entry.row)
  );
}
```

### Chapter II — The Theory of Valuations

#### II.1 — The p-adic Numbers

Ordered source labels **II.1.1–II.1.6**, verified total **6**; printed pp. 106 / PDF pp. 125. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 1;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.2 — The p-adic Absolute Value

Ordered source labels **II.2.1–II.2.9**, verified total **9**; printed pp. 115, 116 / PDF pp. 134, 135. Reconciled one-to-one on 2026-10-23: coverage **9/9**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 2;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.3 — Valuations

Ordered source labels **II.3.1–II.3.4**, verified total **4**; printed pp. 123 / PDF pp. 142. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 3;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.4 — Completions

Ordered source labels **II.4.1–II.4.6**, verified total **6**; printed pp. 134 / PDF pp. 153. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 4;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.5 — Local Fields

Ordered source labels **II.5.1–II.5.6**, verified total **6**; printed pp. 142 / PDF pp. 161. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 5;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.6 — Henselian Fields

Ordered source labels **II.6.1–II.6.5**, verified total **5**; printed pp. 152 / PDF pp. 171. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 6;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.7 — Unramified and Tamely Ramified Extensions

Ordered source labels **II.7.1–II.7.3**, verified total **3**; printed pp. 159 / PDF pp. 178. Reconciled one-to-one on 2026-10-23: coverage **3/3**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 7;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.8 — Extensions of Valuations

Ordered source labels **II.8.1–II.8.6**, verified total **6**; printed pp. 165, 166 / PDF pp. 184, 185. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 8;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.9 — Galois Theory of Valuations

Ordered source labels **II.9.1–II.9.4**, verified total **4**; printed pp. 176 / PDF pp. 195. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 9;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### II.10 — Higher Ramification Groups

Ordered source labels **II.10.1–II.10.2**, verified total **2**; printed pp. 181 / PDF pp. 200. Reconciled one-to-one on 2026-10-23: coverage **2/2**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "II";
const targetSection = 10;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

### Chapter III — Riemann-Roch Theory

#### III.1 — Primes

Ordered source labels **III.1.1–III.1.6**, verified total **6**; printed pp. 193, 194 / PDF pp. 212, 213. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 1;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.2 — Different and Discriminant

Ordered source labels **III.2.1–III.2.5**, verified total **5**; printed pp. 207, 208 / PDF pp. 226, 227. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 2;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.3 — Riemann-Roch

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 224 / PDF p. 243; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 3;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.4 — Metrized o-Modules

Ordered source labels **III.4.1–III.4.4**, verified total **4**; printed pp. 233 / PDF pp. 252. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 4;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.5 — Grothendieck Groups

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 243 / PDF p. 262; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 5;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.6 — The Chern Character

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 246 / PDF p. 265; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 6;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.7 — Grothendieck-Riemann-Roch

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 255 / PDF p. 274; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 7;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### III.8 — The Euler-Minkowski Characteristic

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 259 / PDF p. 278; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "III";
const targetSection = 8;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

### Chapter IV — Abstract Class Field Theory

#### IV.1 — Infinite Galois Theory

Ordered source labels **IV.1.1–IV.1.5**, verified total **5**; printed pp. 264, 265 / PDF pp. 283, 284. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 1;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### IV.2 — Projective and Inductive Limits

Ordered source labels **IV.2.1–IV.2.6**, verified total **6**; printed pp. 274 / PDF pp. 293. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 2;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### IV.3 — Abstract Galois Theory

Ordered source labels **IV.3.1–IV.3.8**, verified total **8**; printed pp. 283, 284 / PDF pp. 302, 303. Reconciled one-to-one on 2026-10-23: coverage **8/8**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 3;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### IV.4 — Abstract Valuation Theory

Ordered source labels **IV.4.1–IV.4.4**, verified total **4**; printed pp. 290 / PDF pp. 309. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 4;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### IV.5 — The Reciprocity Map

Ordered source labels **IV.5.1–IV.5.3**, verified total **3**; printed pp. 298, 299 / PDF pp. 317, 318. Reconciled one-to-one on 2026-10-23: coverage **3/3**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 5;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### IV.6 — The General Reciprocity Law

Ordered source labels **IV.6.1–IV.6.20**, verified total **20**; printed pp. 305, 306, 307, 308, 309, 310 / PDF pp. 324, 325, 326, 327, 328, 329. Reconciled one-to-one on 2026-10-23: coverage **20/20**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 6;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### IV.7 — The Herbrand Quotient

Ordered source labels **IV.7.1–IV.7.5**, verified total **5**; printed pp. 314, 315 / PDF pp. 333, 334. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "IV";
const targetSection = 7;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

### Chapter V — Local Class Field Theory

#### V.1 — The Local Reciprocity Law

Ordered source labels **V.1.1–V.1.11**, verified total **11**; printed pp. 325, 326 / PDF pp. 344, 345. Reconciled one-to-one on 2026-10-23: coverage **11/11**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "V";
const targetSection = 1;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### V.2 — The Norm Residue Symbol over Qp

Ordered source labels **V.2.1–V.2.4**, verified total **4**; printed pp. 332 / PDF pp. 351. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "V";
const targetSection = 2;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### V.3 — The Hilbert Symbol

Ordered source labels **V.3.1–V.3.7**, verified total **7**; printed pp. 340, 341 / PDF pp. 359, 360. Reconciled one-to-one on 2026-10-23: coverage **7/7**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "V";
const targetSection = 3;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### V.4 — Formal Groups

Ordered source labels **V.4.1–V.4.6**, verified total **6**; printed pp. 345, 346 / PDF pp. 364, 365. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "V";
const targetSection = 4;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### V.5 — Generalized Cyclotomic Theory

Ordered source labels **V.5.1–V.5.5**, verified total **5**; printed pp. 351, 352 / PDF pp. 370, 371. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "V";
const targetSection = 5;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### V.6 — Higher Ramification Groups

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 355 / PDF p. 374; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "V";
const targetSection = 6;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

### Chapter VI — Global Class Field Theory

#### VI.1 — Ideles and Idele Classes

Ordered source labels **VI.1.1–VI.1.14**, verified total **14**; printed pp. 367, 368 / PDF pp. 386, 387. Reconciled one-to-one on 2026-10-23: coverage **14/14**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 1;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.2 — Ideles in Field Extensions

Ordered source labels **VI.2.1–VI.2.5**, verified total **5**; printed pp. 373 / PDF pp. 392. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 2;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.3 — The Herbrand Quotient of the Idele Class Group

Ordered source labels **VI.3.1–VI.3.4**, verified total **4**; printed pp. 379 / PDF pp. 398. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 3;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.4 — The Class Field Axiom

Ordered source labels **VI.4.1–VI.4.5**, verified total **5**; printed pp. 385 / PDF pp. 404. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 4;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.5 — The Global Reciprocity Law

Ordered source labels **VI.5.1–VI.5.4**, verified total **4**; printed pp. 394 / PDF pp. 413. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 5;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.6 — Global Class Fields

Ordered source labels **VI.6.1–VI.6.7**, verified total **7**; printed pp. 404, 405 / PDF pp. 423, 424. Reconciled one-to-one on 2026-10-23: coverage **7/7**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 6;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.7 — The Ideal-Theoretic Version of Class Field Theory

Ordered source labels **VI.7.1–VI.7.7**, verified total **7**; printed pp. 413, 414 / PDF pp. 432, 433. Reconciled one-to-one on 2026-10-23: coverage **7/7**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 7;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VI.8 — The Reciprocity Law of the Power Residues

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 417 / PDF p. 436; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VI";
const targetSection = 8;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

### Chapter VII — Zeta Functions and L-series

#### VII.1 — The Riemann Zeta Function

Ordered source labels **VII.1.1–VII.1.5**, verified total **5**; printed pp. 433, 434 / PDF pp. 452, 453. Reconciled one-to-one on 2026-10-23: coverage **5/5**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 1;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.2 — Dirichlet L-series

Ordered source labels **VII.2.1–VII.2.4**, verified total **4**; printed pp. 443 / PDF pp. 462. Reconciled one-to-one on 2026-10-23: coverage **4/4**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 2;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.3 — Theta Series

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 453 / PDF p. 472; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 3;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.4 — The Higher-dimensional Gamma Function

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 457 / PDF p. 476; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 4;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.5 — The Dedekind Zeta Function

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 470 / PDF p. 489; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 5;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.6 — Hecke Characters

Ordered source labels **VII.6.1–VII.6.6**, verified total **6**; printed pp. 484 / PDF pp. 503. Reconciled one-to-one on 2026-10-23: coverage **6/6**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 6;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.7 — Theta Series of Algebraic Number Fields

Ordered source labels **VII.7.1–VII.7.7**, verified total **7**; printed pp. 493 / PDF pp. 512. Reconciled one-to-one on 2026-10-23: coverage **7/7**; missing labels, duplicate mappings, unexpected labels and unparsed locators are all zero. Multipart exercises remain in one note; no source figure is required.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 7;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.8 — Hecke L-series

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 504 / PDF p. 523; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 8;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.9 — Values of Dirichlet L-series at Integer Points

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 517 / PDF p. 536; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 9;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.10 — Artin L-series

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 527 / PDF p. 546; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 10;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.11 — The Artin Conductor

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 535 / PDF p. 554; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 11;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.12 — The Functional Equation of Artin L-series

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 542 / PDF p. 561; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 12;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

#### VII.13 — Density Theorems

No numbered exercises. The empty expected label set was checked at the section boundary, printed p. 549 / PDF p. 568; reconciled coverage **0/0**.

```dataviewjs
const sourcePrefix = "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999";
const targetChapter = "VII";
const targetSection = 13;
const matches = new Map();
for (const page of dv.pages("#exercise")) {
  if (typeof page.source !== "string") continue;
  for (const rawSegment of page.source.split(";")) {
    const segment = rawSegment.trim();
    if (!segment.startsWith(sourcePrefix + ",")) continue;
    const chapter = segment.match(/\bCh\.\s*([IVXLCDM]+)\b/i)?.[1].toUpperCase();
    const section = segment.match(/§\s*([1-9]\d*)(?=\s*,)/)?.[1];
    const exercise = segment.match(/\bExercise\s+([1-9]\d*)(?=\s*(?:,|$))/i)?.[1];
    if (chapter !== targetChapter || Number(section) !== targetSection || !exercise) continue;
    const label = chapter + "." + targetSection + "." + exercise;
    matches.set(label + "\0" + page.file.path, {number:Number(exercise),path:page.file.path,
      row:[label,page.file.link,page.topic,page.status,page.difficulty]});
  }
}
const rows = [...matches.values()].sort((a,b)=>a.number-b.number || a.path.localeCompare(b.path));
if (rows.length) dv.table(["Source exercise","Archived note","Topic","Learning status","Difficulty"],rows.map(e=>e.row));
else dv.paragraph("Source-audited: this section has no numbered exercises; no exercise note is expected.");
```

## Source Identity and Numbering

- **Source:** S4, Jürgen Neukirch, *Algebraic Number Theory*, English translation by Norbert Schappacher, Springer, 1999, Grundlehren 322.
- **Registered original PDF:** `E:/project/math/ant/input/ANT_neurich.pdf`. The filename misspells the author's surname; this is the registered source, not a different edition.
- **Exercise identity:** chapter + section + numbered exercise. Use archive labels such as `I.1.1` and `I.2.1`; preserve all subparts in the same note.
- **Canonical source prefix:** `Jürgen Neukirch, Algebraic Number Theory, English ed., 1999`.
- **Source anchors:** every exercise note must record its chapter, section, original exercise number, printed page, and physical PDF page.

For example, the following locator identifies the first exercise of Chapter I, §1:

```yaml
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 1, printed p. 5, PDF p. 24"
```

The exercise groups of Chapter I §1 and §2 both begin with Exercise 1. They establish the section-sensitive numbering convention. The complete Chapter I total is independently established by the full audit above. [S4, Ch. I, §1, Exercises, printed p. 5, PDF p. 24; §2, Exercises, printed p. 15, PDF p. 34]

> [!warning] Section boundaries
> Printed p. 5 / PDF p. 24 carries a §2 running header, but the exercises above the §2 body heading belong to **§1**. Determine ownership from the surrounding text and section boundaries, not the running header.

## Counting and Reconciliation Rules

1. Count one numbered source exercise once, regardless of its subparts or the note's learning status. A section number is required because exercise numbers restart.
2. Parse each semicolon-separated source segment independently. Each segment counted here must begin with the canonical edition prefix; references to Lang, Artin, or other books do not contribute.
3. Keep **archived source exercises**, **note files**, and **verified source totals** distinct. Exercise notes are discovered through `#exercise` and `source`, across all topic folders.
4. Before a chapter or section batch, inspect its exercise pages and record the ordered source-label set, verified total, and printed/PDF page anchors in this dashboard. Update `auditedSections` for checked sections and `auditedCoverage` only for a checked whole chapter; a completed section does not establish the full chapter total.
5. After archival, reconcile expected labels against note provenance. Mark a chapter `Complete` only after missing labels, duplicate mappings, unexpected labels, and unparsed locators are all absent and the total agrees.
6. Preserve durable coverage and source-status records after reconciliation; remove temporary batch-planning material. Archive completeness does not certify every mathematical claim or change any learning status.
7. For every new section batch, add or update its own Markdown subsection and independent query under the correct chapter in the mapping area. Match both chapter and section exactly within the same source segment; do not append its notes to another section table. Keep the chapter overview separate from these section-level mappings.

## Classification and Source Status

Exercises are routed by the primary computational or proof method, following the existing vault policy. Chapter titles alone do not determine their destination. Cross-topic prerequisites belong under `Related Concepts`.

Notes distinguish the printed problem, independently derived solutions, imported results, computational checks, and source errors or unresolved ambiguities. Preserve any defective printed statement visibly before presenting a corrected formulation.

Chapter I §1 was source-audited on 2026-09-29 against the ordered labels I.1.1-I.1.7, all on printed p. 5 / PDF p. 24. The complete section text on printed pp. 1-5 / PDF pp. 20-24 was visually checked, including the exercise group's end before the §2 heading. No exercise requires a source figure. The separate full-chapter source audit and reconciliation were completed on 2026-10-20, as recorded above.

On 2026-09-29, all seven labels were reconciled one-to-one with R322-R328 in Ring Theory: no missing labels, duplicate mappings, unexpected labels, or unparsed locators remain in this section. All seven notes preserve the source problem, contain progressive hints and an independently derived solution, and remain `not-started`. Mathematical cross-review covered every solution. Existing concepts suffice; no new concept note or topic directory was needed.

Exercise I.1.2 makes explicit the intended positive-integer exponent convention and handles zero factors. I.1.3 preserves the original Gaussian-factorization hint and proves both directions of the parametrization. I.1.4 specifies an order compatible with ring operations. I.1.5-I.1.6 distinguish the specified quadratic subrings from the full rings of integers. I.1.6 proves infinitude by pigeonhole approximation and congruent equal-norm elements, without importing Dirichlet's unit theorem. I.1.7 proves Euclidean division using the absolute norm, the full unit group, and the complete prime-element classification, including the square criterion for 2 modulo an odd prime. No incorrect printed assertion was identified in this batch.

Chapter I §2 was source-audited on 2026-10-11 against the ordered labels I.2.1-I.2.7, all on printed p. 15 / PDF p. 34. The entire exercise page and the following §3 opening were visually checked. All seven labels were reconciled one-to-one with R330-R335 and LA532: no missing labels, duplicate mappings, unexpected labels, or unparsed Neukirch locators remain. Every note preserves the problem, supplies progressive hints and a complete independent derivation, and remains `not-started`. Mathematical cross-review covered all seven solutions; existing concepts suffice and no new directory or concept note was required.

I.2.1 simplifies its fraction before checking a monic integer equation. I.2.2 proves polynomial normality in arbitrary characteristic using roots-of-unity coefficient sums and two coprime multipliers. I.2.3 computes the cusp kernel and exhibits a missing integral element in the quotient's own fraction field. I.2.4 treats positive and negative squarefree radicands and verifies the uniform basis $(d+\sqrt d)/2$. I.2.5 proves maximality of the cube-root-of-two power order by excluding denominators 2 and 3. I.2.6 uses discriminant -107 to establish its integral basis and distinguishes the original proper power order from the full ring generated by a different element. I.2.7 follows the printed determinant hint, proving that the parity-symmetric combinations are rational integers. No incorrect printed assertion was identified in this section. The full chapter was separately audited and reconciled on 2026-10-20.

Chapter I §4 was source-audited and reconciled on 2026-10-17 against I.4.1-I.4.3, printed pp. 27-28 / PDF pp. 46-47. The three labels map one-to-one to LA534-LA536, with all source-locator exception sets empty. Every note retains the original exercise, supplies progressive hints and a complete independent derivation, and remains `not-started`. The compact-quotient proof specifies the quotient topology, the equality exercise keeps both tasks together, and the linear-forms proof preserves the printed wording while deriving a nonzero integer vector. Existing lattice concepts were expanded with the source's full-rank convention, covolume and Minkowski theorem, retaining dynamic exercise backlinks and existing metadata. No new concept or directory was needed; the complete chapter total was subsequently verified as 75 on 2026-10-20.

Chapter I §5 was source-audited and reconciled on 2026-10-17 against I.5.1-I.5.3, all on printed p. 34 / PDF p. 53. The three labels map one-to-one to LA537-LA539, with all source-locator exception sets empty. Every note retains the original exercise, supplies progressive hints and a complete independent derivation, and remains `not-started`. I.5.1 supplies an explicit field-dependent embedding bound; I.5.2 computes canonical volume by polar coordinates and an elementary simplex integral while recording the omitted parameter range; I.5.3 derives the Minkowski norm bound and proves its endpoint with the least positive integer norm. Existing lattice concepts were expanded with Minkowski space, the canonical metric and its $2^s$ measure factor, ideal-lattice covolumes, and the all-embedding norm convention. Dynamic exercise backlinks and existing concept metadata are retained. No new concept or directory was needed; the full chapter total was subsequently verified as 75 on 2026-10-20.

Chapter I was finally source-audited and reconciled on 2026-10-20. The ordered section totals are 7, 7, 10, 3, 3, 7, 6, 11, 4, 5, 7, 5, 0 and 0, totaling 75. The original §1–§5 exercise pages (printed pp. 5, 15, 23, 27–28 and 34 / PDF pp. 24, 34, 42, 46–47 and 53) were re-rendered at 200 dpi and their 30 labels rechecked. Together with the independently checked §6–§12 groups, the expected 75 labels map to 75 distinct notes, with no missing, duplicate, unexpected or unparsed entries. Sections §13 and §14 contain no numbered exercises; §14 ends at printed p. 97 / PDF p. 116, PDF p. 117 is blank, and Chapter II begins at printed p. 99 / PDF p. 118. The permanent chapter and section ledgers above retain the source anchors and final status. Learning status remains separate from archive coverage.

Chapter II §1 was source-audited and reconciled on 2026-10-20 against its complete ordered set II.1.1–II.1.6. All six exercises and the first exercise’s printed periodicity hint were visually checked on printed p. 106 / PDF p. 125 at 200 dpi. Definition (1.1), Proposition (1.2), Proposition (1.3), the inverse-limit ring interpretation and the fraction-field construction were checked on printed pp. 100–101 and 103–104 / PDF pp. 119–120 and 122–123. All six solutions are independent derivations and were mathematically cross-reviewed. Exercise 4 concerns $2/3$ and $-2/3$; the dropped numerators in text extraction are not a source error. Exercise 5 treats abstract field automorphisms, including $p=2$, without assuming continuity or importing a later Hensel theorem; its separately archived Lang analogue remains F108. Exercise 6 keeps all four operations in one note, with complete carry, borrow, unit-division and exponent-shift arguments. The existing p-adic concept was expanded, preserving its metadata, partial source-verification status, older content and dynamic exercise query; no new concept, folder or tracker configuration was needed. The six expected labels map one-to-one to six notes, with all source exception sets empty; no incorrect printed assertion was found. Chapter II was subsequently fully audited and reconciled on 2026-10-23 (51/51).

## Final Reconciliation and Proof Status

On 2026-10-23, all remaining original exercise pages were checked from 200 dpi renders. Chapters II–VII reconcile to 51, 15, 51, 33, 46 and 22 unique labels. Together with the previously reconciled Chapter I, the complete expected set has 293 labels and maps to 293 distinct exercise notes. All four source-locator exception sets are empty. Existing 81 notes retain their contents and learning statuses; the 212 new notes are `not-started` and carry structured S4 source references for Exercise Manager.

The archive retains the printed problem and printed hints before any source correction. Independently supplied derivations identify every imported result; false printed claims receive explicit counterexamples or corrected hypotheses. The negative radius in II.5.1 concerns continuous homomorphism extension, not convergence of the exponential series, and is not treated as a source error. The printed logarithm target in that exercise is the un-subscripted rational field and is corrected visibly.

Eight prerequisite concepts were added in the existing concept directories, linked from the topic hubs and from the exercises. Their exercise lists are dynamic outgoing-link queries. Human-readable source citations name Jürgen Neukirch, Algebraic Number Theory, English edition, 1999; S4 is retained only as the vault's stable structured source identity where required.

**Unresolved source ambiguity:** [[02 - Ring Theory/Exercises/Exercise R409 - Class Number One for the Intended Quintic Field|VI.7.5, class number one]]. The original prints the degree-120 splitting field $K$, while the hint switches to $\mathcal O_k$ and uses the degree-five Minkowski bound. The note completely proves the hint's lowercase-$k$ conclusion and preserves the capital-$K$ assertion as unproved. A coverage status of Complete does not erase this distinction.

## Next Archive Target

No numbered source exercise remains unarchived in this book. Further proof work, if undertaken, should resolve the explicitly recorded source ambiguity rather than create a duplicate exercise note.

## Related Archives

- [[00 - Home/Artin Exercise Archive|Artin Exercise Archive]]
- [[00 - Home/Lang Algebra Exercise Archive|Lang Algebra Exercise Archive]]
- [[00 - Home/Index|Home]]
