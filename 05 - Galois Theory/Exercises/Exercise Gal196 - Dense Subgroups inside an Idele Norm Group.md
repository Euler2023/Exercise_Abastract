---
title: 'Exercise Gal196: Dense Subgroups inside an Idele Norm Group'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 3, printed p. 379, PDF p. 398
source_refs:
- S4/ch-VI/sec-3/ex-3
created: '2026-10-23'
---

# Exercise Gal196: Dense Subgroups inside an Idele Norm Group

## Problem Statement

> [!question] Neukirch VI.3.3
> Let $L|K$ be a finite abelian extension, and let $D$ be a subgroup of $I_K$ such that $K^*D$ is dense in $I_K$ and $D\subseteq N_{L|K}L^*$. Then $L=K$.

> [!warning] Source issue / proof scope
> The printed condition puts $D$ inside principal ideles and makes the density hypothesis impossible. The solution states the vacuity and separately proves the intended idele-norm version.

## Hints

> [!hint]- Hint
> Test the printed $L^\times$ against the discreteness of principal idèles. For the intended idèle norm condition, take the image in $C_K$ and use closedness of norm groups.

> [!hint]- Stronger hint
> For the corrected idele condition, the closed norm subgroup contains a dense subgroup of C_K, and its index equals [L:K].

## Solution

> [!success]- Independent derivation
> **Source issue.** The printed $D\subseteq N_{L/K}L^\times$ places $D$ inside the principal idèle subgroup $K^\times$, forcing $K^\times D=K^\times$. This subgroup is discrete and closed in $I_K$, not dense, so the hypotheses cannot hold simultaneously. The intended version with nonvacuous hypotheses should be $D\subseteq N_{L/K}I_L$.
> For the corrected version, project the density condition to $C_K=I_K/K^\times$. The image of the classes of $D$ is dense in $C_K$ and is contained in $N_{L/K}C_L$. The latter is closed, by closedness of global norm groups for finite extensions, as proved in VI.§6 (6.1). Hence $N_{L/K}C_L=C_K$.
> The norm-index formula of global class field theory gives $[C_K:N C_L]=[L:K]$, since $L/K$ is abelian. The left side is $1$, so $L=K$. Closedness and the norm-index formula are proved inputs from global class field theory; density alone is not being mistaken for equality.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §3, Exercise 3, printed p.379, PDF p.398]. The solution is independently derived.
