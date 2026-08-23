---
title: "Exercise F29: A Four-Element Field of Matrices"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - matrix-rings
  - field-construction
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.10, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise F29: A Four-Element Field of Matrices

## Problem Statement

> [!question] Exercise 1.10
> Over $\mathbb F_2$, prove that the four matrices
> 
> $$
> 0,\quad I,\quad
> A=\begin{pmatrix}1&1\\1&0\end{pmatrix},\quad
> B=\begin{pmatrix}0&1\\1&1\end{pmatrix}
> $$
> 
> form a field.

## Hints

> [!hint]- Hint 1
> Observe that $B=A+I$ and $A^2=A+I$.

> [!hint]- Hint 2
> It remains to check that every nonzero element has an inverse.

## Solution

> [!success]- Solution
> The set is $\{0,I,A,A+I\}$, so it is closed under addition. Direct multiplication gives
> 
> $$
> A^2=A+I=B,
> \qquad A^3=I.
> $$
> 
> Thus $A^{-1}=A^2=B$ and $B^{-1}=A$. The set is also closed under multiplication, and matrix associativity and distributivity are inherited from $M_2(\mathbb F_2)$. Its multiplication is commutative because every element is a polynomial in $A$. Hence these four matrices form a field, isomorphic to $\mathbb F_2[x]/(x^2+x+1)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.10, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
