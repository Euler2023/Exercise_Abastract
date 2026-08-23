---
title: "Exercise G98: Normal Subgroups of the Upper-Triangular $2\\times2$ Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - quotient-groups
  - matrix-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 12, Ex. 12.5, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G98: Normal Subgroups of the Upper-Triangular $2\times2$ Group

## Problem Statement

> [!question] Exercise 12.5
> Let $G$ be the invertible upper-triangular matrices $\begin{bmatrix}a&b\\0&d\end{bmatrix}$. For the subsets defined by **(i)** $b=0$, **(ii)** $d=1$, and **(iii)** $a=d$, determine subgroup and normality status and identify each quotient when defined.

## Hints

> [!hint]- Hint 1
> Realize (ii) and (iii) as kernels of homomorphisms to $\mathbb R^\times$.

## Solution

> [!success]- Solution
> **(i)** The diagonal matrices form a subgroup, but not a normal one. Conjugating a nonscalar diagonal matrix by a unipotent upper-triangular matrix produces a nonzero upper-right entry.
> 
> **(ii)** The map
> 
> $$
> \delta:G\to\mathbb R^\times,\qquad
> \begin{bmatrix}a&b\\0&d\end{bmatrix}\mapsto d
> $$
> 
> is surjective, and its kernel is the subset $d=1$. Hence this subset is normal and $G/S\cong\mathbb R^\times$.
> 
> **(iii)** The map
> 
> $$
> \rho:G\to\mathbb R^\times,\qquad
> \begin{bmatrix}a&b\\0&d\end{bmatrix}\mapsto a/d
> $$
> 
> is surjective, and its kernel is the subset $a=d$. Hence it is normal and again $G/S\cong\mathbb R^\times$.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §12, Ex. 12.5, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
