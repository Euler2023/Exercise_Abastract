---
title: "Exercise LA157: When Infinite Matrix Multiplication Is Defined"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - infinite-matrices
  - sequence-spaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.4, printed p. 130, PDF p. 142"
created: 2026-08-23
---

# Exercise LA157: When Infinite Matrix Multiplication Is Defined

## Problem Statement

> [!question] Exercise M.4
> For an infinite row vector $X=(x_1,x_2,\ldots)$ and infinite real matrix $A=(a_{ij})$, characterize the matrices for which right multiplication is defined on (i) $\mathbb R^\infty$, all real sequences, and (ii) $Z$, the sequences with finite support.

## Hints

> [!hint]- Hint 1
> The $j$th output coordinate is $\sum_i x_i a_{ij}$; only finite algebraic sums are automatically defined.

## Solution

> [!success]- Solution
> On $\mathbb R^\infty$, the $j$th coordinate must be defined for every sequence $X$. This happens exactly when each column of $A$ has finite support: then each coordinate is a finite sum, while an infinite column would require assigning a value to an arbitrary infinite series.
>
> If $X\in Z$, every coordinate sum is automatically finite because $X$ has finite support. The output lies again in $Z$ for every such $X$ exactly when each row of $A$ has finite support: it suffices to test the standard basis rows, whose images are the rows of $A$.
>
> Thus the answer is **column-finite** for an action on $\mathbb R^\infty$ and **row-finite** for an endomorphism of $Z$. If the domain is $Z$ but the codomain is allowed to be the larger space $\mathbb R^\infty$, every infinite matrix can be multiplied by every vector of $Z$ coordinatewise.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Infinite Matrices|Infinite Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA95 - Span of the Constant Sequence and Unit Vectors|Exercise LA95]]

## Notes

- **Method boundary:** No topology or convergence convention is imposed; this is purely algebraic infinite matrix multiplication.
- **Source status:** The definitions of $\mathbb R^\infty$ and $Z$ were checked at [S1, Ch. 3, §3.7, printed pp. 96–97, PDF pp. 108–109], and the exercise at [S1, Ch. 4, Misc. Problems, Ex. M.4, printed p. 130, PDF p. 142].
