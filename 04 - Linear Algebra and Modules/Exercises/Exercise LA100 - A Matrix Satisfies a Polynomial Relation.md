---
title: "Exercise LA100: A Matrix Satisfies a Polynomial Relation"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-powers
  - dimension
  - polynomial-identities
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Miscellaneous Problems, Ex. M.2, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA100: A Matrix Satisfies a Polynomial Relation

## Problem Statement

> [!question] Exercise M.2
> Let $A$ be a real $n\times n$ matrix. Prove that for some integer $N$, it satisfies a nontrivial relation
> 
> $$
> A^N+c_{N-1}A^{N-1}+\cdots+c_1A+c_0I=0.
> $$

## Hints

> [!hint]- Hint 1
> The vector space of real $n\times n$ matrices has dimension $n^2$.

## Solution

> [!success]- Solution
> The $n^2+1$ matrices
> 
> $$
> I,A,A^2,\ldots,A^{n^2}
> $$
> 
> lie in the $n^2$-dimensional vector space $M_n(\mathbb R)$, so they are linearly dependent. Choose a dependence and let $N$ be the largest exponent with nonzero coefficient. Dividing by that leading coefficient produces
> 
> $$
> A^N+c_{N-1}A^{N-1}+\cdots+c_0I=0.
> $$
> 
> Thus one may take $N\le n^2$. This argument proves existence but not the sharper Cayley–Hamilton bound $N\le n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, Misc. Problems, Ex. M.2, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Method boundary:** This dimension argument is independent of the Cayley–Hamilton theorem and yields the weaker degree bound $n^2$.
