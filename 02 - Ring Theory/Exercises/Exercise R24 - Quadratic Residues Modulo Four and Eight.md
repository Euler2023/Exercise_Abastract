---
title: "Exercise R24: Quadratic Residues Modulo 4 and 8"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - quadratic-residues
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.2, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R24: Quadratic Residues Modulo 4 and 8

## Problem Statement

> [!question] Exercise 9.2
> What are the possible values of $a^2$ modulo $4$ and modulo $8$?

## Hints

> [!hint]- Hint 1
> Separate even and odd integers.

## Solution

> [!success]- Solution
> Modulo $4$, an even square is $0$ and an odd square is $1$, so the possibilities are
> 
> $$
> 0,1\pmod4.
> $$
> 
> Modulo $8$, an odd integer has square $1$. An even integer is congruent to $0,2,4,$ or $6$, whose squares are $0,4,0,4$. Thus the possibilities are
> 
> $$
> 0,1,4\pmod8.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.2, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
