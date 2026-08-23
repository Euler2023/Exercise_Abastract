---
title: "Exercise G49: The Center of $GL_n(\\mathbb R)$"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - center
  - matrix-groups
  - scalar-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 5, Ex. 5.6, printed p. 71, PDF p. 83"
created: 2026-08-23
---

# Exercise G49: The Center of $GL_n(\mathbb R)$

## Problem Statement

> [!question] Exercise 5.6
> Determine the center of $GL_n(\mathbb R)$.

## Hints

> [!hint]- Hint 1
> Commute first with invertible diagonal matrices, then with elementary shears.

## Solution

> [!success]- Solution
> Commuting with every invertible diagonal matrix forces all off-diagonal entries of a central matrix $A$ to vanish, so $A=\operatorname{diag}(a_1,\ldots,a_n)$. Commuting with $I+e_{ij}$ then gives $a_i=a_j$ for every $i\ne j$. Hence
> 
> $$
> Z(GL_n(\mathbb R))=\{\lambda I_n:\lambda\in\mathbb R^\times\}.
> $$
> 
> Every such scalar matrix plainly commutes with all matrices.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §5, Ex. 5.6, printed p. 71, PDF p. 83]. The solution is an independent derivation for this vault, not a solution printed in Artin.
