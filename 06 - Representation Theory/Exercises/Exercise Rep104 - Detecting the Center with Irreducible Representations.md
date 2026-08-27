---
title: "Exercise Rep104: Detecting the Center with Irreducible Representations"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.4, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep104: Detecting the Center with Irreducible Representations

## Problem Statement

> [!question] Miscellaneous Exercise M.4
> Prove that an element $z$ of a group $G$ is in the center of $G$ if and only if for all irreducible representations $\rho$, $\rho(z)$ is multiplication by a scalar.

## Hints

> [!hint]- Hint 1
> One direction is Schur's lemma; for the other use the regular representation.

## Solution

> [!success]- Solution
> If $z\in Z(G)$, then $\rho(z)$ commutes with every $\rho(g)$, so Schur's lemma makes it scalar on every irreducible complex representation.
>
> Conversely, suppose $z$ acts scalarly on every irreducible. The regular representation is a direct sum of irreducibles, with multiplicities. On each isotypic block, left multiplication by $z$ is scalar on the irreducible factor and therefore commutes with every left multiplication $L_g$. Hence $L_zL_g=L_gL_z$ for all $g$. Faithfulness of the regular representation gives $zg=gz$, so $z\in Z(G)$. $\square$

## Related Concepts

- [[06 - Representation Theory/Exercises/Exercise Rep1 - Schurs Lemma|Exercise Rep1: Schur's Lemma]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.4, printed p. 321, PDF p. 333].

