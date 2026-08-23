---
title: "Exercise LA133: Trace and Determinant of Two-Sided Multiplication"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - two-sided-multiplication
  - trace
  - determinant
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.10, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA133: Trace and Determinant of Two-Sided Multiplication

## Problem Statement

> [!question] Exercise 5.10
> Let $A,B$ be $n\times n$ matrices. Determine the trace and determinant of $M\mapsto AMB$ on $F^{n\times n}$.

## Hints

> [!hint]- Hint 1
> In vectorized coordinates, the operator has matrix $B^t\otimes A$.

## Solution

> [!success]- Solution
> Grouping coordinates by columns gives $\operatorname{vec}(AMB)=(B^t\otimes A)\operatorname{vec}(M)$. The standard Kronecker-product formulas yield
>
> $$
> \operatorname{tr}(B^t\otimes A)=\operatorname{tr}A\,\operatorname{tr}B,
> $$
>
> and, because both factors are $n\times n$,
>
> $$
> \det(B^t\otimes A)=(\det A)^n(\det B)^n.
> $$
>
> These formulas can also be obtained after triangularizing $A$ and $B$, when the $n^2$ diagonal eigenvalue products are $\alpha_i\beta_j$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA108 - Matrix of Two-Sided Multiplication on Two by Two Matrices|Exercise LA108]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA132 - Trace and Determinant of Left Multiplication|Exercise LA132]]

## Notes

- **External standard input:** The displayed Kronecker-product trace and determinant identities are standard; the triangularization sentence supplies an alternative proof boundary within Chapter 4.
- **Source status:** [S1, Ch. 4, §5, Ex. 5.10, printed p. 128, PDF p. 140]; independent solution.

