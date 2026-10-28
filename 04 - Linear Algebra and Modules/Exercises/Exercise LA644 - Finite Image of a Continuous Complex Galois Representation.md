---
title: "Exercise LA644: Finite Image of a Continuous Complex Galois Representation"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.4, printed p. 389, PDF p. 401"
source_refs:
  - "S7/ch-9/sec-3/ex-4"
created: 2026-10-28
---

# Exercise LA644: Finite Image of a Continuous Complex Galois Representation

## Problem Statement

> [!question] Original Exercise 9.3.4
> Show that any continuous homomorphism $\rho:G_{\mathbb Q}\longrightarrow\mathrm{GL}_d(\mathbb C)$ factors through $\operatorname{Gal}(F/\mathbb Q)\longrightarrow\mathrm{GL}_d(\mathbb C)$ for some Galois number field $F$. Hence its image is finite. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use a complex identity neighborhood that contains no nontrivial subgroup.

> [!hint]- Hint 2
> Its inverse image contains an open normal subgroup $U(F)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Exercise 9.2.2 supplies an identity neighborhood $W$ of $\mathrm{GL}_d(\mathbb C)$ containing no nontrivial subgroup. Continuity makes $\rho^{-1}(W)$ an open identity neighborhood of $G_{\mathbb Q}$, so it contains $U(F)$ for a Galois number field $F$. The image $\rho(U(F))$ is a subgroup contained in $W$, hence trivial. Thus $U(F)\subseteq\ker\rho$. The formula $\bar\rho(\sigma|_F)=\rho(\sigma)$ is well-defined and gives the asserted factorization. Its source is finite, so its image is finite. The factor map is continuous because a finite Galois group has the discrete topology.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Proof dependency:** The no-small-subgroups matrix argument is proved in Exercise 9.2.2, rather than inferred merely from compactness.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
