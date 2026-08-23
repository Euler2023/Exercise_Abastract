---
title: "Exercise LA32: Left Inverses of a Rectangular Matrix"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - one-sided-inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.14, printed p. 32, PDF p. 44"
created: 2026-08-23
---

# Exercise LA32: Left Inverses of a Rectangular Matrix

## Problem Statement

> [!question] Exercise 1.14
> Find infinitely many matrices $B$ such that $BA=I_2$ for
> 
> $$
> A=\begin{bmatrix}2&3\\1&2\\1&1\end{bmatrix},
> $$
> 
> and prove that there is no matrix $C$ such that $AC=I_3$.

## Hints

> [!hint]- Hint 1
> Solve separately for the two rows of $B$.

> [!hint]- Hint 2
> Compare the rank of $AC$ with the rank of $I_3$.

## Solution

> [!success]- Solution
> Solving the two row equations gives the two-parameter family
> 
> $$
> B=\begin{bmatrix}
> s&-1-s&2-s\\
> t&1-t&-1-t
> \end{bmatrix},\qquad s,t\in F.
> $$
> 
> Multiplication verifies $BA=I_2$ for every $s,t$.
> 
> For any $2\times3$ matrix $C$, the image of $AC$ is contained in the column space of the $3\times2$ matrix $A$, which has dimension at most $2$. Hence $\operatorname{rank}(AC)\le2$, whereas $\operatorname{rank}(I_3)=3$. Thus $AC=I_3$ is impossible.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.14, printed p. 32, PDF p. 44]. The solution is an independent derivation for this vault, not a solution printed in Artin.
