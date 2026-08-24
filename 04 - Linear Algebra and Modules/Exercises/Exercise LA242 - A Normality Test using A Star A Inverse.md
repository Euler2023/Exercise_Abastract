---
title: "Exercise LA242: A Normality Test using A Star A Inverse"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - normal-matrices
  - unitary-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 6, Ex. 6.6, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA242: A Normality Test using A Star A Inverse

## Problem Statement

> [!question] Exercise 6.6
> Prove that an invertible matrix $A$ is normal if and only if $A^*A^{-1}$ is unitary.

## Hints

> [!hint]- Hint 1
> Put $U=A^*A^{-1}$ and compute $U^*U$.

## Solution

> [!success]- Solution
> Let $U=A^*A^{-1}$. Then
>
> $$
> U^*=(A^{-1})^*A,
> $$
>
> and therefore
>
> $$
> U^*U=(A^{-1})^*AA^*A^{-1}.
> $$
>
> If $A$ is normal, $AA^*=A^*A$, so
>
> $$
> U^*U=(A^{-1})^*A^*AA^{-1}=I.
> $$
>
> Conversely, if $U$ is unitary, then $U^*U=I$. Multiplying
>
> $$
> (A^{-1})^*AA^*A^{-1}=I
> $$
>
> on the left by $A^*$ and on the right by $A$ gives $AA^*=A^*A$. Hence $A$ is normal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- Invertibility is needed to define $A^{-1}$.
- **Source status:** Verified at [S1, Ch. 8, §6, Ex. 6.6, printed p. 256, PDF p. 268]. The calculation is independent.

