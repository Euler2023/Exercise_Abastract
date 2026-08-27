---
title: "Exercise R63: Multiplication in a Cyclotomic Quotient"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - polynomial-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.1, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R63: Multiplication in a Cyclotomic Quotient

## Problem Statement

> [!question] Exercise 5.1
> Let $f=x^4+x^3+x^2+x+1$, and let $\alpha$ be the residue of $x$ in $R=\mathbb Z[x]/(f)$. Express $(\alpha^3+\alpha^2+\alpha)(\alpha^5+1)$ in the basis $(1,\alpha,\alpha^2,\alpha^3)$.

## Hints

> [!hint]- Hint 1
> Multiply the defining relation by $\alpha-1$.

## Solution

> [!success]- Solution
> In $R$,
>
> $$
> (\alpha-1)(\alpha^4+\alpha^3+\alpha^2+\alpha+1)=\alpha^5-1=0.
> $$
>
> Hence $\alpha^5=1$, so
>
> $$
> (\alpha^3+\alpha^2+\alpha)(\alpha^5+1)
> =2\alpha^3+2\alpha^2+2\alpha.
> $$
>
> Its coordinates in the indicated basis are $(0,2,2,2)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §5, Ex. 5.1, printed p. 356, PDF p. 368]. The reduction is independent.

