---
title: "Exercise LA185: Cayley-Hamilton from Jordan Form"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - cayley-hamilton
  - jordan-form
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.2, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA185: Cayley-Hamilton from Jordan Form

## Problem Statement

> [!question] Miscellaneous Problem M.2
> Prove the Cayley-Hamilton Theorem using Jordan form.

## Hints

> [!hint]- Hint 1
> On a Jordan block $J_r(\lambda)$, the operator $J_r(\lambda)-\lambda I$ is nilpotent of index at most $r$.

## Solution

> [!success]- Solution
> Work first over $\mathbb C$. Let $A=PJP^{-1}$, where $J$ is a direct sum of Jordan blocks. Fix a block $J_r(\lambda)=\lambda I+N$, with $N^r=0$. If $m_\lambda$ is the algebraic multiplicity of $\lambda$ in $A$, then $m_\lambda\ge r$ and
>
> $$
> p_A(t)=(t-\lambda)^{m_\lambda}q(t)
> $$
>
> for some polynomial $q$. Therefore
>
> $$
> p_A(J_r(\lambda))=N^{m_\lambda}q(J_r(\lambda))=0.
> $$
>
> This holds on every Jordan block, so $p_A(J)=0$. Polynomial evaluation commutes with similarity:
>
> $$
> p_A(A)=Pp_A(J)P^{-1}=0.
> $$
>
> For a real matrix, apply the complex result to its complexification; the resulting real matrix identity is the same. This proves Cayley-Hamilton.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA168 - Inverse from the Cayley-Hamilton Theorem|Exercise LA168]]

## Notes

- **Source status:** [S1, Ch. 5, Miscellaneous Problems, Ex. M.2, printed p. 152, PDF p. 164]; independent proof using the Jordan theorem developed in Chapter 4.

