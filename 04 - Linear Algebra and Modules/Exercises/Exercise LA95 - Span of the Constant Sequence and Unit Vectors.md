---
title: "Exercise LA95: Span of the Constant Sequence and Unit Vectors"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - infinite-dimensional-spaces
  - spans
  - sequences
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 6, Ex. 6.1, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA95: Span of the Constant Sequence and Unit Vectors

## Problem Statement

> [!question] Exercise 6.1
> Let $e_1,e_2,\ldots$ be the standard unit vectors in $\mathbb R^\infty$, and let $w=(1,1,1,\ldots)$. Describe
> 
> $$
> \operatorname{Span}(w,e_1,e_2,\ldots).
> $$

## Hints

> [!hint]- Hint 1
> A linear combination uses only finitely many of the $e_i$.

## Solution

> [!success]- Solution
> A finite linear combination has the form
> 
> $$
> aw+\sum_{i\in I}b_ie_i
> $$
> 
> for a finite set $I$. Outside $I$, every coordinate equals $a$. Thus the span consists exactly of the eventually constant real sequences. Conversely, if a sequence is equal to $a$ from some point onward, subtracting $aw$ leaves a finitely supported sequence, which is a finite linear combination of the $e_i$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §6, Ex. 6.1, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
