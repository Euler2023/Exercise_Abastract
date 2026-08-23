---
title: "Exercise LA162: Structure and Trace of a Projection"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - projections
  - direct-sums
  - trace
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.9, printed p. 131, PDF p. 143"
created: 2026-08-23
---

# Exercise LA162: Structure and Trace of a Projection

## Problem Statement

> [!question] Exercise M.9
> Let $K=\ker T$ and $W=\operatorname{im}T$ for a finite-dimensional operator $T$.
>
> (a) Prove that $T$ is a projection onto $W$ ($T^2=T$) iff $T|_W=I_W$. (b) If $T$ is a projection, prove $V=W\oplus K$. (c) Prove $\operatorname{tr}T=\operatorname{rank}T$.

## Hints

> [!hint]- Hint 1
> Decompose $v$ as $Tv+(v-Tv)$.

## Solution

> [!success]- Solution
> (a) If $T^2=T$, then $T(Tv)=Tv$ for every $Tv\in W$. Conversely, if $T$ fixes $W$, then $Tv\in W$ implies $T^2v=Tv$.
>
> (b) For every $v$, $v=Tv+(v-Tv)$ with $Tv\in W$ and $v-Tv\in K$. If $x\in W\cap K$, then $Tx=x$ and $Tx=0$, so $x=0$.
>
> (c) In a basis formed from bases of $W$ and $K$, the matrix is $\operatorname{diag}(I_r,0)$, where $r=\dim W=\operatorname{rank}T$. Its trace is $r$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA151 - Idempotent Matrices Are Diagonalizable|Exercise LA151]]

## Notes

- **Source status:** [S1, Ch. 4, Misc. Problems, Ex. M.9, printed p. 131, PDF p. 143]; independent solution.

