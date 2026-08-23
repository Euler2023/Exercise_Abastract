---
title: "Exercise LA110: Matrices Carrying One Line onto Another"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - linear-transformations
  - invariant-lines
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §2, Ex. 2.3, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA110: Matrices Carrying One Line onto Another

## Problem Statement

> [!question] Exercise 2.3
> Find all real $2\times2$ matrices that carry the line $y=x$ to the line $y=3x$.

## Hints

> [!hint]- Hint 1
> The first line is spanned by $(1,1)^t$ and the second by $(1,3)^t$.

## Solution

> [!success]- Solution
> For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, one has $A(1,1)^t=(a+b,c+d)^t$. Its span equals the line $y=3x$ exactly when
>
> $$
> c+d=3(a+b)\quad\text{and}\quad a+b\ne0.
> $$
>
> Thus these two conditions describe all such matrices. If “carry to” were interpreted only as mapping into the line, the zero-image case $a+b=c+d=0$ would also be allowed; “to the line” is taken here to mean onto that one-dimensional subspace.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** [S1, Ch. 4, §2, Ex. 2.3, printed p. 126, PDF p. 138]; independent solution.

