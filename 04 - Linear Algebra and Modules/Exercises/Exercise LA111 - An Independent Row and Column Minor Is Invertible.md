---
title: "Exercise LA111: An Independent Row and Column Minor Is Invertible"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - rank
  - minors
  - independence
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §2, Ex. 2.5, printed p. 126, PDF p. 138"
created: 2026-08-23
---

# Exercise LA111: An Independent Row and Column Minor Is Invertible

## Problem Statement

> [!question] Exercise 2.5
> Let $A$ be an $m\times n$ matrix of rank $r$. Let $I$ be $r$ row indices whose rows are independent and $J$ be $r$ column indices whose columns are independent. Let $M$ be the $r\times r$ submatrix using rows $I$ and columns $J$. Prove that $M$ is invertible.

## Hints

> [!hint]- Hint 1
> If $Mx=0$, extend $x$ to a vector supported on the column set $J$.
>
> [!hint]- Hint 2
> The rows indexed by $I$ form a basis of the row space.

## Solution

> [!success]- Solution
> Suppose $Mx=0$ and extend $x\in F^r$ to $y\in F^n$ by putting its entries in positions $J$ and zeros elsewhere. The coordinates of $Ay$ indexed by $I$ are exactly $Mx$, hence vanish. Since the $r$ independent rows indexed by $I$ form a basis of the row space, every other row of $A$ is their linear combination; all remaining coordinates of $Ay$ also vanish. Thus $Ay=0$.
>
> But $Ay$ is the linear combination, with coefficients $x$, of the columns indexed by $J$. Those columns are independent, so $x=0$. Therefore $\ker M=0$, and the square matrix $M$ is invertible.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Imported input:** Equality of row rank and column rank is used to know that the selected $r$ rows span the row space; Artin proves it as Theorem 4.2.14.
- **Source status:** [S1, Ch. 4, §2, Ex. 2.5, printed p. 126, PDF p. 138]; independent solution.

