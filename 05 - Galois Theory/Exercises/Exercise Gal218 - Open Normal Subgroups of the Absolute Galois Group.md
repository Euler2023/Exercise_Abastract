---
title: "Exercise Gal218: Open Normal Subgroups of the Absolute Galois Group"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.1, printed p. 389, PDF p. 401"
source_refs:
  - "S7/ch-9/sec-3/ex-1"
created: 2026-10-28
---

# Exercise Gal218: Open Normal Subgroups of the Absolute Galois Group

## Problem Statement

> [!question] Original Exercise 9.3.1
> Show that every open normal subgroup of $G_{\mathbb Q}$ takes the form $U(F)$ for a Galois number field $F$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> An open identity neighborhood contains $U(K)$ for some finite Galois extension $K$.

> [!hint]- Hint 2
> Pass to the finite quotient $\operatorname{Gal}(K/\mathbb Q)$ and use its Galois correspondence.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $H\triangleleft G_{\mathbb Q}$ be open. By the defining neighborhood basis, $U(K)\subseteq H$ for some Galois number field $K$. Restriction $\pi:G_{\mathbb Q}\twoheadrightarrow\operatorname{Gal}(K/\mathbb Q)$ has kernel $U(K)$, so $H=\pi^{-1}(\pi(H))$. Its image is normal. By finite Galois correspondence the fixed field $F=K^{\pi(H)}$ is finite Galois over $\mathbb Q$, and $\pi(H)=\operatorname{Gal}(K/F)$. Its inverse image consists exactly of the automorphisms fixing $F$, hence is $U(F)$. This also proves that every such subgroup has finite index.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported input:** The finite Galois correspondence and the surjectivity of restriction from the absolute Galois group to a finite Galois quotient.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
