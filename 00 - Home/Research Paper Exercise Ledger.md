---
title: Research Paper Exercise Ledger
aliases:
  - Paper Exercise Ledger
  - Paper Adaptation Ledger
tags:
  - index
  - exercise-archive
  - research-papers
registered_papers:
  - paper/carmeli-nikolaus-yuan-2026
  - paper/liu-tian-xiao-zhang-zhu-2022
  - paper/graham-2024
  - paper/shafarevich-2014
  - paper/goldfeld-1985
created: 2026-10-26
---

# Research Paper Exercise Ledger

This single ledger registers exercises adapted from research papers and surveys across all topic folders. Each paper has one section, with its bibliographic identity, adaptation scope, source issues, and a live list of corresponding exercise notes.

> [!info] Registration, proof scope, and learning status
> Registration means that an adapted exercise note has an identified paper source. It does not mean that every result in the paper has been archived, that the paper's main theorem has been reproved, or that the exercise has been studied. The tables display each note's current learning status independently.

The exercise tables read the existing exercise tag and paper references. They preserve the note's full source statement, including the original result number and printed/PDF page anchors. Paper-linked concept notes are excluded from the exercise lists.

## Registration Overview

```dataviewjs
const registered = new Set(Array.from(dv.current().registered_papers ?? []).map(String));
const refs = p => Array.from(p.paper_refs ?? []).map(String);
const paperKey = ref => ref.split("/").slice(0, 2).join("/");
const notes = dv.pages("#exercise").where(p => refs(p).length > 0);
const matched = notes.where(p => refs(p).some(ref => registered.has(paperKey(ref))));
dv.paragraph(registered.size + " registered papers; " + matched.length + " adapted exercise notes.");
const unregistered = notes.where(p => refs(p).some(ref => !registered.has(paperKey(ref))));
if (unregistered.length > 0) {
  dv.paragraph("The following exercises reference a paper that needs a section in this ledger:");
  dv.table(["Exercise", "Unregistered paper reference"],
    unregistered.map(p => [p.file.link, refs(p).filter(ref => !registered.has(paperKey(ref))).join("; ")]));
} else {
  dv.paragraph("Every paper-referenced exercise currently matches a registered paper.");
}
```

## Maps between spherical group rings

**Authors:** Shachar Carmeli, Thomas Nikolaus, and Allen Yuan.  
**Publication:** *Inventiones mathematicae*, 2026, online-first version.  
**Local PDF:** `Invent Math 2026 Maps between spherical group rings.pdf` in `E:/project/math/ant/input/`.

**Selected results and adaptation scope:**

- **Lemma 2.26:** The ordinary group-ring isomorphism between the augmentation ideal modulo its square and a tensor product. The exercise generalizes the purely algebraic statement to arbitrary commutative coefficient rings and abelian groups, with an explicit inverse map and cyclic examples.
- **Definition 2.1 and Proposition 2.10:** Delta-ring identities, semilinearity on square-zero delta ideals, and the first-order addition formula, with an independently constructed dual-number example.

**Source and proof notes:** The checked online-first pages have no printed page numbers, so the exercise sources cite physical PDF pages explicitly. The augmentation-ideal basis is indexed by nonidentity group elements; the source's zero-generator wording is clarified in the exercise. These adaptations concern ordinary algebraic preparation for the paper's spectral results.

```dataviewjs
const prefix = "paper/carmeli-nikolaus-yuan-2026/";
const notes = dv.pages("#exercise")
  .where(p => Array.from(p.paper_refs ?? []).some(ref => String(ref).startsWith(prefix)))
  .sort(p => p.file.name, "asc");
dv.table(["Exercise", "Original result and source pages", "Learning status"],
  notes.map(p => [p.file.link, p.source, p.status]));
```

## On the Beilinson–Bloch–Kato conjecture for Rankin–Selberg motives

**Authors:** Yifeng Liu, Yichao Tian, Liang Xiao, Wei Zhang, and Xinwen Zhu.  
**Publication:** *Inventiones mathematicae* 228 (2022), 107–375.  
**Local PDF:** `Invent Math 2022 On the Beilinson-Bloch-Kato.pdf` in `E:/project/math/ant/input/`.

**Selected results and adaptation scope:**

- **Definition 2.1.2 and Lemma 2.1.3:** Invariants, coinvariants, and their natural comparison map, isolated as an automorphism problem on a Noetherian module. The exercises include the Hopfian argument and explicit Jordan-block tests.
- **Lemma 2.1.5:** Lifting weak semisimplicity from a residue field to a finite free module over a DVR. Both residual weak semisimplicity and the invariant-dimension hypothesis are retained, with separate counterexamples to their omission.

**Source and proof notes:** The original arithmetic setting uses continuous procyclic actions over specified local coefficient rings. The notes prove the broader algebraic formulations they assign and identify the imported PID and Nakayama inputs. These exercises do not assert a proof of the paper's motivic main theorem.

```dataviewjs
const prefix = "paper/liu-tian-xiao-zhang-zhu-2022/";
const notes = dv.pages("#exercise")
  .where(p => Array.from(p.paper_refs ?? []).some(ref => String(ref).startsWith(prefix)))
  .sort(p => p.file.name, "asc");
dv.table(["Exercise", "Original result and source pages", "Learning status"],
  notes.map(p => [p.file.link, p.source, p.status]));
```

## On the p-adic interpolation of unitary Friedberg–Jacquet periods

**Author:** Andrew Graham.  
**Publication:** *Algebra & Number Theory* 18(6) (2024).  
**Local PDF:** `ANT 2026 On the p-adic interpolation of unitary Friedberg-Jacquet periods.pdf` in `E:/project/math/ant/input/`.

**Selected results and adaptation scope:**

- **Lemma 2.4.3(1):** The block-diagonal stabilizer calculation for one general linear group component, proved by explicit matrix multiplication, with a finite-field orbit count.
- **Lemma A.1.1:** A finite local ring adaptation of the triangular factorization near an antidiagonal matrix. Elimination proves existence, and uniqueness and explicit finite examples are additional deductions.

**Source and proof notes:** The publication year is **2024**, although the local filename says 2026. The stabilizer exercise isolates one component of the source construction. The factorization exercise replaces the source's adic-disc setting and Iwahori input with a finite ring and a complete elimination argument.

```dataviewjs
const prefix = "paper/graham-2024/";
const notes = dv.pages("#exercise")
  .where(p => Array.from(p.paper_refs ?? []).some(ref => String(ref).startsWith(prefix)))
  .sort(p => p.file.name, "asc");
dv.table(["Exercise", "Original result and source pages", "Learning status"],
  notes.map(p => [p.file.link, p.source, p.status]));
```

## On the problem of the 10th discriminant

**Author:** I. R. Shafarevich.  
**Publication:** *St. Petersburg Mathematical Journal* 25(4) (2014), 699–711; English translation of the 2013 Russian article.  
**Local PDF:** `[class 1] ON THE PROBLEM OF THE 10TH DISCRIMINANT.pdf` in `E:/project/math/ant/input/`.

**Selected results and adaptation scope:**

- **Section 2, Lemma 4:** Consequences of the displayed abstract abelian presentation: invariant factors, cyclic quotients, and the kernels of surjections onto a cyclic group of order eight. The exercise proves the abstract group calculation.
- **Section 3, Lemma 3, positive-parameter cases:** Coprime factorization, Euclidean division and norms in a quadratic integer ring, together with a congruence obstruction. The exercise completely solves its stated positive-parameter problem.

**Source and proof notes:** The Introduction and Section 3 print opposite signs in the curve equation; the curve exercise explicitly uses Lemma 3's equation. Exhaustion of negative-parameter solutions and identification of the abstract presentation with the source's congruence-group abelianization are outside these assigned proof scopes.

```dataviewjs
const prefix = "paper/shafarevich-2014/";
const notes = dv.pages("#exercise")
  .where(p => Array.from(p.paper_refs ?? []).some(ref => String(ref).startsWith(prefix)))
  .sort(p => p.file.name, "asc");
dv.table(["Exercise", "Original result and source pages", "Learning status"],
  notes.map(p => [p.file.link, p.source, p.status]));
```

## Gauss' class number problem for imaginary quadratic fields

**Author:** Dorian Goldfeld.  
**Publication:** *Bulletin of the American Mathematical Society (New Series)* 13(1) (1985), 23–37.  
**Local PDF:** `[Class 1] Gauss Class number Problem for imaginary quadratic fiedls.pdf` in `E:/project/math/ant/input/`.

**Selected results and adaptation scope:**

- **Section 1, reduction discussion before Definition 1:** A terminating reduction procedure, the coefficient bound, and exact enumeration at discriminants $-23$ and $-163$. Uniqueness of reduced representatives and the form–ideal correspondence are named external inputs.
- **Section 1, Euler's polynomial and the unnumbered Rabinovitch theorem:** An independent norm proof of the forty prime values, the endpoint, and a hypothesis audit using $D=-27$.

**Source and proof notes:** Proper determinant-one equivalence is stated explicitly for class-number counting. The displayed Rabinovitch hypotheses need a field-discriminant restriction under the literal full-ring-of-integers interpretation; the exercise gives a concrete nonfundamental-discriminant counterexample and proves only its assigned special case of the corrected theorem.

```dataviewjs
const prefix = "paper/goldfeld-1985/";
const notes = dv.pages("#exercise")
  .where(p => Array.from(p.paper_refs ?? []).some(ref => String(ref).startsWith(prefix)))
  .sort(p => p.file.name, "asc");
dv.table(["Exercise", "Original result and source pages", "Learning status"],
  notes.map(p => [p.file.link, p.source, p.status]));
```

## Related Paper-Based Proofs Awaiting Source Verification

[[01 - Group Theory/Exercises/Exercise G105 - The Homophonic Group Is Trivial|Exercise G105: The Homophonic Group Is Trivial]] remains an original Artin textbook exercise. Its Notes attribute the elimination proof to J.-F. Mestre, R. Schoof, L. Washington, and D. Zagier, “Homophonic Quotients of Free Groups,” *Experimental Mathematics* 2 (1993), 153–155.

This is a record of the existing note's attribution. The paper and its precise proof locator have not been checked for this ledger. This entry is therefore **pending source verification** and is separate from the directly adapted exercises in the live tables above.

## Registration and Maintenance

- Maintain one section per paper in this ledger, regardless of how many topic folders contain its adaptations. Add its prefix to the `registered_papers` field; the overview flags exercise references to unregistered papers.
- Preserve each exercise's human-readable `source` and its original theorem, proposition, lemma, or discussion identifier. State both printed and physical PDF pages when available; record explicitly when the checked version is unpaginated.
- Use the existing `paper_refs` namespace for structured article locators. Each section's table matches its paper prefix and the `exercise` tag, so later adaptations of that paper appear automatically without a manually maintained exercise list.
- State whether an exercise reproduces a source result, proves a special case, generalizes an algebraic assertion, or adds a deduction. Keep source issues and imported results visible in the exercise and summarize their scope here.
- Treat a paper cited only as background or further reading as a reference, rather than automatically registering the exercise as adapted from it. Record a textbook exercise with a paper-derived solution separately when that provenance matters.
- Registration does not change note learning status. The Study Progress Base discovers exercise-tagged notes independently of this ledger.
- The current daily sampler recognizes its registered textbook sources; these article prefixes do not enroll a note in the daily queue. Keep the existing S1–S11 source IDs, plugin code, runtime state, and generated daily lists unchanged.

## Related Navigation

- [[00 - Home/Index|Home]]
- [[00 - Home/Artin Exercise Archive|Artin Exercise Archive]]
- [[00 - Home/Lang Algebra Exercise Archive|Lang Algebra Exercise Archive]]
- [[00 - Home/Neukirch Algebraic Number Theory Exercise Archive|Neukirch Algebraic Number Theory Exercise Archive]]
- [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Modular Forms Exercise Archive]]
