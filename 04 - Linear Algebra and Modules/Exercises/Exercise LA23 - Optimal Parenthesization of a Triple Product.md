---
title: "Exercise LA23: Optimal Parenthesization of a Triple Product"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - algorithms
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 1, Ex. 1.5, printed p. 31, PDF p. 43"
created: 2026-08-23
---

# Exercise LA23: Optimal Parenthesization of a Triple Product

## Problem Statement

> [!question] Exercise 1.5
> Let $A,B,C$ have sizes $\ell\times m$, $m\times n$, and $n\times p$. How many scalar multiplications compute $AB$? In which order should $ABC$ be computed to minimize the number of multiplications?

## Hints

> [!hint]- Hint 1
> Computing an $r\times s$ matrix times an $s\times t$ matrix costs $rst$ scalar multiplications.

## Solution

> [!success]- Solution
> The matrix $AB$ has $\ell n$ entries, each requiring $m$ scalar multiplications, so the cost is $\ell mn$.
> 
> The two possible total costs are
> 
> $$
> \operatorname{cost}((AB)C)=\ell mn+\ell np=\ell n(m+p),
> $$
> 
> and
> 
> $$
> \operatorname{cost}(A(BC))=mnp+\ell mp=mp(n+\ell).
> $$
> 
> Compute $(AB)C$ when $\ell n(m+p)\le mp(n+\ell)$, and compute $A(BC)$ otherwise.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §1, Ex. 1.5, printed p. 31, PDF p. 43]. The solution is an independent derivation for this vault, not a solution printed in Artin.
