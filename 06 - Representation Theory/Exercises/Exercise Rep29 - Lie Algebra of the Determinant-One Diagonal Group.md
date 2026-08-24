---
title: "Exercise Rep29: Lie Algebra of the Determinant-One Diagonal Group"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - diagonal-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.5, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep29: Lie Algebra of the Determinant-One Diagonal Group

## Problem Statement

> [!question] Exercise 6.5
> Show that the set defined by $xy=1$ is a subgroup of the group of invertible diagonal $2\times2$ matrices, and compute its Lie algebra.

## Hints

> [!hint]- Hint 1
> Parametrize the identity component by $(e^t,e^{-t})$.

## Solution

> [!success]- Solution
> The product and inverse of $\operatorname{diag}(x,x^{-1})$ and $\operatorname{diag}(y,y^{-1})$ again have the same form, so the set is a subgroup. A path through $I$ satisfies $x(t)y(t)=1$; differentiation at $0$ gives $x'(0)+y'(0)=0$. Hence
>
> $$
> L=\left\{\begin{pmatrix}a&0\\0&-a\end{pmatrix}:a\in\mathbb R\right\}.
> $$
>
> Conversely these matrices exponentiate to $\operatorname{diag}(e^{at},e^{-at})$. The Lie algebra is one-dimensional and abelian. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- The real subgroup has two components, but its Lie algebra records only the identity component.
- **Source status:** Ex. 6.5 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The proof is independent.
