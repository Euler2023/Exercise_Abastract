---
title: "Exercise G57: Inverse-Transpose Automorphism of $GL_n$"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - matrix-groups
  - transpose
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.8, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G57: Inverse-Transpose Automorphism of $GL_n$

## Problem Statement

> [!question] Exercise 6.8
> Prove that $\Phi(A)=(A^{\mathsf T})^{-1}$ is an automorphism of $GL_n(\mathbb R)$.

## Hints

> [!hint]- Hint 1
> The reversal from transpose is canceled by the reversal from inverse.

## Solution

> [!success]- Solution
> For $A,B\in GL_n$,
> 
> $$
> \Phi(AB)=((AB)^{\mathsf T})^{-1}=(B^{\mathsf T}A^{\mathsf T})^{-1}
> =(A^{\mathsf T})^{-1}(B^{\mathsf T})^{-1}=\Phi(A)\Phi(B).
> $$
> 
> Moreover,
> 
> $$
> \Phi(\Phi(A))=A,
> $$
> 
> so $\Phi$ is its own inverse and is therefore bijective. Hence it is an automorphism.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.8, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.
