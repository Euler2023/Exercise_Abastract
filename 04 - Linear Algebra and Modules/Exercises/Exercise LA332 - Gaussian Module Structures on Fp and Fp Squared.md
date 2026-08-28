---
title: "Exercise LA332: Gaussian Module Structures on Fp and Fp Squared"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - gaussian-integers
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 7, Structure of Abelian Groups, Ex. 7.8, printed p. 439, PDF p. 451"
created: 2026-08-28
---

# Exercise LA332: Gaussian Module Structures on Fp and Fp Squared

## Problem Statement

> [!question] Exercise 7.8
> Let $F=\mathbb F_p$. For which prime integers $p$ does the additive group $F^1$ have a structure of $\mathbb Z[i]$-module? How about $F^2$?

## Hints

> [!hint]- Hint 1
> A $\mathbb Z[i]$-action is determined by an additive endomorphism $J$ satisfying $J^2=-I$.

## Solution

> [!success]- Solution
> On the one-dimensional $\mathbb F_p$-space, every additive endomorphism commuting with the integer action is multiplication by some $a\in\mathbb F_p$. The required condition is
>
> $$
> a^2=-1.
> $$
>
> This has a solution exactly when $p=2$ or $p\equiv1\pmod4$. Thus
>
> $$
> \boxed{F^1\text{ admits the structure iff }p=2\text{ or }p\equiv1\pmod4.}
> $$
>
> On $F^2$, the matrix
>
> $$
> J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
> $$
>
> satisfies $J^2=-I$ over every $\mathbb F_p$, including $p=2$. Defining $i$ to act by $J$ gives a Gaussian-module structure for every prime:
>
> $$
> \boxed{F^2\text{ admits the structure for every }p.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Module Theory is primary because the scalar $i$ is realized as an endomorphism satisfying its defining polynomial.
- **Source status:** [S1, Ch. 14, §14.7, Ex. 7.8, printed p. 439, PDF p. 451]. The construction is independent.
