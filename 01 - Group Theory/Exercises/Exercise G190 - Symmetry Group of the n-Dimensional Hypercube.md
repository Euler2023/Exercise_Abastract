---
title: "Exercise G190: Symmetry Group of the n-Dimensional Hypercube"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - semidirect-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.4, printed p. 193, PDF p. 205"
created: 2026-08-27
---

# Exercise G190: Symmetry Group of the n-Dimensional Hypercube

## Problem Statement

> [!question] Miscellaneous Exercise M.4
> Let $C_n=\{x\in\mathbb R^n:-1\le x_i\le1\}$ and let $G_n\le O_n$ be its full symmetry group.
>
> (a) Use the counting formula and induction to determine $|G_n|$.
>
> (b) Describe $G_n$ explicitly, identify the stabilizer of $(1,\ldots,1)$, and check that $G_2\cong D_4$.

## Hints

> [!hint]- Hint 1
> A symmetry permutes the $2n$ facets in $n$ opposite pairs.

> [!hint]- Hint 2
> The matrices are exactly signed permutation matrices.

## Solution

> [!success]- Solution
> Every signed permutation matrix preserves $C_n$. Conversely, an orthogonal symmetry permutes its pairs of opposite facets and hence their unit normal vectors $\{\pm e_i\}$. Therefore it is a signed permutation matrix. Thus
>
> $$
> G_n\cong C_2^n\rtimes S_n,qquad |G_n|=2^n n!.
> $$
>
> This also follows inductively by acting on the $2n$ facets: the stabilizer of one facet acts as $G_{n-1}$ on that facet, so $|G_n|=2n|G_{n-1}|$.
>
> A signed permutation matrix fixes $(1,\ldots,1)$ only when all signs are positive. Hence the stabilizer is the permutation-matrix subgroup $S_n$ of order $n!$. Orbit–stabilizer gives $2^n$ vertices, as expected.
>
> For $n=2$, $G_2$ consists of the eight signed permutation matrices, the full symmetry group of a square. Hence $G_2\cong D_4$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct and semidirect products]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- $G_n$ is the hyperoctahedral group, also expressible as the wreath product $C_2\wr S_n$.
- **Source status:** The inequalities, facets, and both parts were visually checked at [S1, Ch. 6, M.4, printed p. 193, PDF p. 205]. The signed-permutation proof is independent.

