---
title: Class Field Theory and Reciprocity Maps
aliases:
  - Class Field Theory
  - Local Reciprocity
  - Global Reciprocity
  - Ray Class Fields
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, (6.3), printed p. 300, PDF p. 319; Chs. V–VI, local and global applications"
source_status: verified-bounded
---

# Class Field Theory and Reciprocity Maps

## Definition

> [!info] Reciprocity and norm quotients
> Class field theory identifies finite abelian Galois extensions with appropriate finite-index norm subgroups. For a finite Galois extension $L/K$, the local group is $K^*/N_{L/K}L^*$; the global group is $C_K/N_{L/K}C_L$, where $C_K=I_K/K^*$ is the idele class group. These identify with $\operatorname{Gal}(L/K)^{\rm ab}$ in their respective settings.

## Intuition

Reciprocity turns arithmetic data into commuting automorphisms. A local uniformizer maps to Frobenius on an unramified extension; in Neukirch's notation $r$ often denotes the inverse direction from automorphisms to norm classes. Check direction and normalization before comparing formulas.

## Key Properties

- Abstract reciprocity requires the class field axiom, a continuous degree map and a compatible henselian valuation. An unramified-unit condition alone does not imply the general reciprocity isomorphism. For general Mackey modulations, even the cyclic norm axioms need further descent or cohomological hypotheses; the linked IV.6.19–20 exercises give a counterexample to their unrestricted formulation.
- Finite nonabelian Galois groups enter through their abelianization, not through an asserted isomorphism from the full group.
- Norms on arithmetic groups correspond to restriction, and inclusion corresponds to transfer in the compatible Galois diagrams.
- Global ideal formulations require a modulus and its infinite sign conditions. Dyadic and real-place corrections matter in pro-2 questions and Grunwald–Wang phenomena.
- Hilbert pairings express reciprocity through Kummer characters; perfectness needs the stated root-of-unity and residue-characteristic hypotheses.

## Examples

For an unramified local extension of degree $n$, the norm subgroup contains all units, and the quotient is detected by valuation modulo $n$. For $K=\mathbb Q$, the real sign component distinguishes the full 2-primary cyclotomic extension from its maximal real part; discarding it loses a factor of order two.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, (6.3), printed p. 300, PDF p. 319; Chs. V–VI, local and global applications. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.
