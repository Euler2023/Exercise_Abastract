---
title: "Exercise Rep31: Lie Algebras of Four Classical Groups"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - classical-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.7, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep31: Lie Algebras of Four Classical Groups

## Problem Statement

> [!question] Exercise 6.7
> Determine the Lie algebras of (a) $U_n$, (b) $SU_n$, (c) $O_{3,1}$, and (d) $SO_n(\mathbb C)$.

## Hints

> [!hint]- Hint 1
> Differentiate each defining equation at the identity.

## Solution

> [!success]- Solution
> With $J=I_{3,1}$, differentiation gives
>
> $$
> \begin{aligned}
> \mathfrak u_n&=\{A\in M_n(\mathbb C):A^*+A=0\},\\
> \mathfrak{su}_n&=\{A\in M_n(\mathbb C):A^*+A=0,\ \operatorname{tr}A=0\},\\
> \mathfrak o_{3,1}&=\{A\in M_4(\mathbb R):A^{\mathsf T}J+JA=0\},\\
> \mathfrak{so}_n(\mathbb C)&=\{A\in M_n(\mathbb C):A^{\mathsf T}+A=0\}.
> \end{aligned}
> $$
>
> Conversely, differentiating $(e^{tA})^*e^{tA}$ or $(e^{tA})^{\mathsf T}Je^{tA}$ shows its derivative is zero under the corresponding condition, so each listed $A$ exponentiates into the required group. For $SU_n$, $\det e^{tA}=e^{t\operatorname{tr}A}=1$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- $\mathfrak u_n$ and $\mathfrak{su}_n$ are real Lie algebras, whereas $\mathfrak{so}_n(\mathbb C)$ is naturally complex.
- **Source status:** Ex. 6.7 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The equations and converse checks are independent.
