---
title: "Exercise G138: Centers of Real and Complex Special Linear Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - centers
  - special-linear-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.5, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G138: Centers of Real and Complex Special Linear Groups

## Problem Statement

> [!question] Exercise 8.5
> Determine the centers of the groups $SL_n(\mathbb R)$ and $SL_n(\mathbb C)$.

## Hints

> [!hint]- Hint 1
> A central matrix commutes with every elementary matrix $I+tE_{ij}$.

## Solution

> [!success]- Solution
> Let $P$ be central in $SL_n(F)$, where $F=\mathbb R$ or $\mathbb C$. Commuting with all elementary matrices forces $P$ to preserve every coordinate line and to have equal diagonal entries. Hence $P=\lambda I$. Conversely, every scalar matrix is central. The determinant condition is $\lambda^n=1$, so
>
> $$
> Z(SL_n(\mathbb C))=\{\lambda I:\lambda^n=1\}\cong\mu_n.
> $$
>
> Over $\mathbb R$, the only real roots of unity are $\pm1$. Therefore
>
> $$
> Z(SL_n(\mathbb R))=
> \begin{cases}
> \{I\},&n\text{ odd},\\
> \{I,-I\},&n\text{ even}.
> \end{cases}
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- For $n=2$, this recovers the center $\{\pm I\}$ used in the definition of $PSL_2(F)$ when the characteristic is not $2$.
- **Source status:** The center is referenced immediately before Theorem 9.8.1 at [S1, Ch. 9, §9.8, printed p. 280, PDF p. 292], and Ex. 8.5 was visually checked at [S1, printed p. 287, PDF p. 299]. The elementary-matrix proof is independent.
