---
title: "Exercise G46: A Homomorphism from Upper-Triangular Matrices"
topic: group-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - group-theory
  - homomorphisms
  - matrix-groups
  - kernel
source: Michael Artin, Algebra, 2nd ed., Ch. 2, Section 5, Ex. 5.3, printed p. 71, PDF p. 83
created: 2026-08-23
---

# Exercise G46: A Homomorphism from Upper-Triangular Matrices

## Problem Statement

> [!question] Exercise 5.3
> Let $U$ be the group of invertible upper-triangular matrices $A=\begin{bmatrix}a&b\\0&d\end{bmatrix}$. Prove $\varphi(A)=a^2$ is a homomorphism $U\to\mathbb R^\times$, and find its kernel and image.

## Hints

> [!hint]- Hint 1
> The upper-left entry of a product is the product of the upper-left entries.

## Solution

> [!success]- Solution
> If $A,A'$ have upper-left entries $a,a'$, then $AA'$ has upper-left entry $aa'$. Hence
> 
> $$
> \varphi(AA')=(aa')^2=a^2(a')^2=\varphi(A)\varphi(A').
> $$
> 
> The kernel consists of matrices with $a^2=1$:
> 
> $$
> \ker\varphi=\left\{\begin{bmatrix}\varepsilon&b\\0&d\end{bmatrix}:\varepsilon=\pm1,\ b\in\mathbb R,\ d\ne0\right\}.
> $$
> 
> The image is exactly $\mathbb R_{>0}$, since every positive $r$ is $(\sqrt r)^2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §5, Ex. 5.3, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
