---
title: "Exercise R44: Polynomial Divisibility Modulo n"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §2, Ex. 2.1, printed p. 354, PDF p. 366"
created: 2026-08-27
---

# Exercise R44: Polynomial Divisibility Modulo n

## Problem Statement

> [!question] Exercise 2.1
> For which positive integers $n$ does $x^2+x+1$ divide $x^4+3x^3+x^2+7x+5$ in $[\mathbb{Z}/(n)][x]$?

## Hints

> [!hint]- Hint 1
> Reduce the dividend using $x^2=-x-1$, hence $x^3=1$ and $x^4=x$.

## Solution

> [!success]- Solution
> Modulo $x^2+x+1$ we have $x^2=-x-1$, $x^3=1$, and $x^4=x$. Therefore the remainder of the dividend is
>
> $$
> x+3+(-x-1)+7x+5=7x+7.
> $$
>
> It vanishes in $[\mathbb Z/(n)][x]$ exactly when $7=0$ modulo $n$, that is, when $n$ divides $7$. The positive possibilities are
>
> $$
> n=1\quad\text{or}\quad n=7.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Zero-ring boundary:** The answer includes $n=1$, as requested for positive integers; $\mathbb Z/(1)$ is the zero ring.
- **Source status:** The statement is from [S1, Ch. 11, §2, Ex. 2.1, printed p. 354, PDF p. 366]. The remainder computation is independent.

