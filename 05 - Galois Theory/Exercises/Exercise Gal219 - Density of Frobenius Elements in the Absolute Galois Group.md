---
title: "Exercise Gal219: Density of Frobenius Elements in the Absolute Galois Group"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.2, printed p. 389, PDF p. 401"
source_refs:
  - "S7/ch-9/sec-3/ex-2"
created: 2026-10-28
---

# Exercise Gal219: Density of Frobenius Elements in the Absolute Galois Group

## Problem Statement

> [!question] Original Exercise 9.3.2
> Show that Theorem 9.3.1 follows from Theorem 9.1.2. (A hint for this exercise is at the end of the book.)

> **Referenced context.** Theorem 9.1.2 says every element of a finite Galois group occurs as Frobenius at infinitely many prime ideals. Theorem 9.3.1 says that choosing an absolute Frobenius for each prime ideal above all but finitely many rational primes gives a dense set in $G_{\mathbb Q}$.

## Hints

> [!hint]- Hint 1
> Meet each basic open coset by prescribing its image in a finite Galois quotient.

> [!hint]- Hint 2
> Exclude the finite set of ramified primes before using the weak Chebotarev theorem.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\sigma U(F)$ be any nonempty basic open subset of $G_{\mathbb Q}$, with $F/\mathbb Q$ finite Galois. By the weak Chebotarev theorem, Theorem 9.1.2, the element $\sigma|_F$ is Frobenius at infinitely many prime ideals of $F$. Exclude the finitely many rational primes omitted in Theorem 9.3.1 and those ramified in $F$. There is still an eligible prime $\mathfrak p_F$ with this Frobenius. Choose a prime $\mathfrak p$ of the algebraic integers of $\overline{\mathbb Q}$ over it. The absolute Frobenius already chosen at $\mathfrak p$ restricts to $\operatorname{Frob}_{\mathfrak p_F}$, since the inertia ambiguity vanishes in the unramified quotient. Its restriction therefore equals $\sigma|_F$, placing it in $\sigma U(F)$. Every basic open set is met, which is precisely density.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced theorems:** Theorem 9.1.2, printed p. 377/PDF p. 389, and Theorem 9.3.1, printed p. 385/PDF p. 397, both directly checked. The latter chooses one Frobenius for each prime ideal above all but finitely many rational primes.
- **Proof boundary:** Weak Chebotarev is an imported theorem; the exercise proves the topological consequence, not that theorem.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
