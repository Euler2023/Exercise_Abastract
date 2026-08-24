---
title: "Exercise LA237: Intrinsic Tests for Hermitian and Unitary Operators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-operators
  - unitary-operators
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.1, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA237: Intrinsic Tests for Hermitian and Unitary Operators

## Problem Statement

> [!question] Exercise 6.1
> Prove Proposition 8.6.3(c), (d).

## Hints

> [!hint]- Hint 1
> Use $(Tv,w)=(v,T^*w)$.

> [!hint]- Hint 2
> Nondegeneracy lets equality of inner products against every vector identify operators.

## Solution

> [!success]- Solution
> **(c)** If $T^*=T$, then
>
> $$
> (Tv,w)=(v,T^*w)=(v,Tw).
> $$
>
> Conversely, if $(Tv,w)=(v,Tw)$ for all $v,w$, the adjoint identity gives $(v,T^*w)=(v,Tw)$. Nondegeneracy implies $T^*w=Tw$ for every $w$, so $T^*=T$.
>
> **(d)** If $T$ is unitary, $T^*T=I$, and
>
> $$
> (Tv,Tw)=(v,T^*Tw)=(v,w).
> $$
>
> Conversely, if this equality holds for all $v,w$, then
>
> $$
> (v,T^*Tw)=(v,w)
> $$
>
> for all $v,w$. Nondegeneracy yields $T^*T=I$, so $T$ is unitary.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source status:** The exercise was verified at [S1, Ch. 8, §6, Ex. 6.1, printed p. 256, PDF p. 268] and Proposition 8.6.3 at printed p. 243/PDF p. 255. The proof is independent.

