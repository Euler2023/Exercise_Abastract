---
title: "Exercise G50: The Additive Group as Unipotent Matrices"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - isomorphisms
  - matrix-groups
  - additive-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.1, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G50: The Additive Group as Unipotent Matrices

## Problem Statement

> [!question] Exercise 6.1
> Let $G'$ be the group of matrices
> 
> $$
> \begin{bmatrix}1&x\\0&1\end{bmatrix},\qquad x\in\mathbb R.
> $$
> 
> Is the map from the additive group $\mathbb R^+$ sending $x$ to this matrix an isomorphism?

## Hints

> [!hint]- Hint 1
> Multiply two such matrices.

## Solution

> [!success]- Solution
> Define $U(x)=\begin{bmatrix}1&x\\0&1\end{bmatrix}$. Then
> 
> $$
> U(x)U(y)=U(x+y).
> $$
> 
> Thus the map is a homomorphism. It is injective because $U(x)=I$ implies $x=0$, and surjective by the definition of $G'$. Hence it is an isomorphism
> 
> $$
> (\mathbb R,+)\cong G'.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.1, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
