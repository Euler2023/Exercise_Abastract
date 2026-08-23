---
title: "Exercise G48: A Block-Triangular Subgroup and Its Kernel"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - homomorphisms
  - matrix-groups
  - block-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 5, Ex. 5.5, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G48: A Block-Triangular Subgroup and Its Kernel

## Problem Statement

> [!question] Exercise 5.5
> Show that matrices
> 
> $$
> M=\begin{bmatrix}A&B\\0&D\end{bmatrix},
> $$
> 
> with $A\in GL_r(\mathbb R)$ and $D\in GL_{n-r}(\mathbb R)$ form a subgroup $H\le GL_n(\mathbb R)$. Prove $M\mapsto A$ is a homomorphism and find its kernel.

## Hints

> [!hint]- Hint 1
> Use block multiplication and the block inverse formula.

## Solution

> [!success]- Solution
> Block multiplication preserves the form and multiplies the upper-left blocks. The inverse is
> 
> $$
> M^{-1}=\begin{bmatrix}A^{-1}&-A^{-1}BD^{-1}\\0&D^{-1}\end{bmatrix},
> $$
> 
> so $H$ is a subgroup. The projection $\pi(M)=A$ satisfies $\pi(MM')=AA'=\pi(M)\pi(M')$.
> 
> Its kernel is
> 
> $$
> \ker\pi=\left\{\begin{bmatrix}I_r&B\\0&D\end{bmatrix}:B\text{ arbitrary},\ D\in GL_{n-r}(\mathbb R)\right\}.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §5, Ex. 5.5, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
