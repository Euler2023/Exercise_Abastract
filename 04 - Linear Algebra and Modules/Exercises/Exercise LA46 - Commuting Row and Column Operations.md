---
title: "Exercise LA46: Commuting Row and Column Operations"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrices
  - row-reduction
  - column-operations
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, Section 3, Ex. 3.3, printed p. 33, PDF p. 45"
created: 2026-08-23
---

# Exercise LA46: Commuting Row and Column Operations

## Problem Statement

> [!question] Exercise 3.3
> Suppose a row operation and then a column operation are applied to $A$. Explain what happens if their order is switched.

## Hints

> [!hint]- Hint 1
> Represent the row operation by left multiplication and the column operation by right multiplication.

## Solution

> [!success]- Solution
> Let the row operation be left multiplication by an elementary matrix $E$, and let the column operation be right multiplication by an elementary matrix $F$. Row first and column second gives
> 
> $$
> (EA)F.
> $$
> 
> Column first and row second gives
> 
> $$
> E(AF).
> $$
> 
> Associativity implies $(EA)F=E(AF)$. Thus every row operation commutes with every column operation in this sense.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 1, §3, Ex. 3.3, printed p. 33, PDF p. 45]. The solution is an independent derivation for this vault, not a solution printed in Artin.
