---
title: "Exercise LA59: The Identity Is Not a Matrix Commutator"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - trace
  - commutators
  - matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Miscellaneous Ex. M.4, printed p. 35, PDF p. 47"
created: 2026-08-23
---

# Exercise LA59: The Identity Is Not a Matrix Commutator

## Problem Statement

> [!question] Exercise M.4
> Show that $AB-BA=I$ has no solution in real $n\times n$ matrices.

## Hints

> [!hint]- Hint 1
> Take traces.

## Solution

> [!success]- Solution
> For all square matrices,
> 
> $$
> \operatorname{tr}(AB-BA)=\operatorname{tr}(AB)-\operatorname{tr}(BA)=0.
> $$
> 
> But over $\mathbb R$,
> 
> $$
> \operatorname{tr}(I_n)=n\ne0.
> $$
> 
> Therefore $AB-BA$ cannot equal $I_n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, Misc. Ex. M.4, printed p. 35, PDF p. 47]. The solution is an independent derivation for this vault, not a solution printed in Artin.
