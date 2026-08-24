---
title: "Exercise Rep26: Jacobi Identity in Dimension Two"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - alternating-maps
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.2, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep26: Jacobi Identity in Dimension Two

## Problem Statement

> [!question] Exercise 6.2
> Let $V$ be a real vector space of dimension $2$, with a law of composition $[v,w]$ that is bilinear and skew-symmetric (see (9.6.7)). Prove that the Jacobi identity holds.

## Hints

> [!hint]- Hint 1
> The Jacobiator is an alternating trilinear map.

## Solution

> [!success]- Solution
> Define
>
> $$
> J(u,v,w)=[u,[v,w]]+[v,[w,u]]+[w,[u,v]].
> $$
>
> Bilinearity makes $J$ trilinear. Skew-symmetry of the bracket shows that interchanging any two arguments negates $J$, so $J$ is alternating. But every three vectors in the two-dimensional space $V$ are linearly dependent, and an alternating trilinear map vanishes on dependent triples. Thus $J=0$, which is the Jacobi identity. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- Consequently every skew-symmetric bilinear product on a real two-dimensional vector space is automatically a Lie bracket.
- **Source status:** Ex. 6.2 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The alternating-map proof is independent.
