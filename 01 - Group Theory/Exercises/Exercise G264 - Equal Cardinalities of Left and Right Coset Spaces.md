---
title: "Exercise G264: Equal Cardinalities of Left and Right Coset Spaces"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.8, printed p. 227, PDF p. 239; Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 10, printed p. 75, PDF p. 90"
created: 2026-08-27
---

# Exercise G264: Equal Cardinalities of Left and Right Coset Spaces

## Problem Statement

> [!question] Exercise M.8
> Prove that the numbers of left and right cosets of $H\le G$ are equal even when $G$ is infinite.

> [!question] Lang Exercise 10
> Let $H$ be a finite-index subgroup of $G$. Prove that there are finitely many right cosets and that their number equals the number of left cosets.

## Hints

> [!hint]- Hint 1
> Use inversion.

## Solution

> [!success]- Solution
> Define
>
> $$
> G/H\longrightarrow H\backslash G,\qquad gH\longmapsto Hg^{-1}.
> $$
>
> If $gH=g'H$, then $g'=gh$ for some $h\in H$, so $Hg'^{-1}=Hh^{-1}g^{-1}=Hg^{-1}$; hence the map is well defined. Applying the same construction again is its inverse. Therefore the two coset sets are bijective, without any finiteness assumption. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.8, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.
- **Additional source:** [S2, Ch. I, Ex. 10, printed p. 75, PDF p. 90]; Lang's finite-index statement is the finite special case of the displayed bijection.
