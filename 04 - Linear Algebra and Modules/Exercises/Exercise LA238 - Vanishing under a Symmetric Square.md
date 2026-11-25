---
title: "Exercise LA238: Vanishing under a Symmetric Square"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - symmetric-operators
  - positive-definiteness
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.2, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA238: Vanishing under a Symmetric Square

## Problem Statement

> [!question] Exercise 6.2
> Let $T$ be a symmetric operator on a Euclidean space. Using Proposition 8.6.9, prove that if $v$ is a vector and $T^2v=0$, then $Tv=0$.

## Hints

> [!hint]- Hint 1
> Express $(Tv,Tv)$ using symmetry of $T$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent application of Artin's Proposition 8.6.9(a), the symmetric-operator characterization on a Euclidean space. It gives $(Tx,y)=(x,Ty)$ for all $x,y$. Taking $x=v$ and $y=Tv$,
>
> $$
> (Tv,Tv)=(v,T^2v)=0.
> $$
>
> The Euclidean form is positive definite, so a vector of squared length zero must be zero. Hence $Tv=0$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- Equivalently, a symmetric operator has $\ker T^2=\ker T$.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.2, printed p. 256, PDF p. 268]. The proof is independent.
- **Exact input:** Proposition 8.6.9(a) is on printed p. 245 / PDF p. 257. It is a characterization of symmetry, distinct from Theorem 8.6.10. This proof uses that characterization and positive definiteness directly; it does not need spectral diagonalization.

