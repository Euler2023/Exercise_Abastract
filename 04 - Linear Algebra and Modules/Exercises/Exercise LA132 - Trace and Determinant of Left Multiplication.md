---
title: "Exercise LA132: Trace and Determinant of Left Multiplication"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - left-multiplication
  - trace
  - determinant
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §5, Ex. 5.9, printed p. 128, PDF p. 140"
created: 2026-08-23
---

# Exercise LA132: Trace and Determinant of Left Multiplication

## Problem Statement

> [!question] Exercise 5.9
> For an $m\times m$ matrix $A$, determine the trace and determinant of left multiplication by $A$ on $F^{m\times m}$.

## Hints

> [!hint]- Hint 1
> View a matrix as an ordered list of its $m$ columns.

## Solution

> [!success]- Solution
> Left multiplication acts independently by $A$ on each of the $m$ columns. In a basis grouped by columns, its matrix is block diagonal with $m$ copies of $A$. Therefore
>
> $$
> \operatorname{tr}L_A=m\operatorname{tr}A,
> \qquad
> \det L_A=(\det A)^m.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** [S1, Ch. 4, §5, Ex. 5.9, printed p. 128, PDF p. 140]; independent solution.

