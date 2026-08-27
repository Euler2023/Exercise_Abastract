---
title: "Exercise R100: Boolean Rings Have Characteristic Two"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - idempotents
  - characteristic
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Miscellaneous Exercises, Ex. M.1, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R100: Boolean Rings Have Characteristic Two

## Problem Statement

> [!question] Exercise M.1
> Prove or disprove: If $a^2=a$ for every $a$ in a nonzero ring $R$, then $R$ has characteristic $2$.

## Hints

> [!hint]- Hint 1
> Apply the hypothesis to $1+1$.

## Solution

> [!success]- Solution
> The statement is true. Since every element is idempotent,
>
> $$
> (1+1)^2=1+1.
> $$
>
> Expanding in the commutative ring gives $4=2$, hence $2=0$. Because the ring is nonzero, $1\ne0$, so its characteristic is not $1$ and is therefore exactly $2$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, Misc. Exercises, Ex. M.1, printed p. 358, PDF p. 370]. The proof is independent.

