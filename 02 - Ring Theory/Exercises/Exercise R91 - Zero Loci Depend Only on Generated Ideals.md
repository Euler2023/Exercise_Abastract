---
title: "Exercise R91: Zero Loci Depend Only on Generated Ideals"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.5, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R91: Zero Loci Depend Only on Generated Ideals

## Problem Statement

> [!question] Exercise 9.5
> Prove that the variety of zeros of $\{f_1,\ldots,f_r\}$ depends only on the ideal they generate.

## Hints

> [!hint]- Hint 1
> Evaluate an arbitrary polynomial combination of the $f_i$ at a common zero.

## Solution

> [!success]- Solution
> Let $I=(f_1,\ldots,f_r)$. If $p$ is a common zero of the $f_i$ and $g\in I$, write $g=\sum h_i f_i$. Then
>
> $$
> g(p)=\sum h_i(p)f_i(p)=0.
> $$
>
> Hence every common zero of the generators is a zero of all of $I$. The converse is immediate because each $f_i\in I$. Therefore
>
> $$
> V(f_1,\ldots,f_r)=V(I),
> $$
>
> which depends only on the generated ideal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.5, printed p. 357, PDF p. 369]. The proof is independent.

