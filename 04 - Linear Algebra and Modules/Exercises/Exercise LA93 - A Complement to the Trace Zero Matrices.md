---
title: "Exercise LA93: A Complement to the Trace-Zero Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - direct-sums
  - trace
  - matrix-spaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 5, Ex. 5.2, printed p. 100, PDF p. 112"
created: 2026-08-23
---

# Exercise LA93: A Complement to the Trace-Zero Matrices

## Problem Statement

> [!question] Exercise 5.2
> Let $W_1$ be the space of real $n\times n$ matrices of trace zero. Find $W_2$ such that
> 
> $$
> \mathbb R^{n\times n}=W_1\oplus W_2.
> $$

## Hints

> [!hint]- Hint 1
> Use the one-dimensional space spanned by the identity.

## Solution

> [!success]- Solution
> Take $W_2=\mathbb RI$. For every $A$,
> 
> $$
> A=\left(A-\frac{\operatorname{tr}A}{n}I\right)
> +\frac{\operatorname{tr}A}{n}I.
> $$
> 
> The first term has trace zero and the second lies in $W_2$. If $cI\in W_1$, then $0=\operatorname{tr}(cI)=cn$, so $c=0$. Hence $W_1\cap W_2=0$ and the sum is direct.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §5, Ex. 5.2, printed p. 100, PDF p. 112]. The solution is an independent derivation for this vault, not a solution printed in Artin.
