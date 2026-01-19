---
title: "Exercise AG1: p-adic Valuations"
topic: arithmetic-geometry
difficulty: beginner
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - p-adic
source: "Standard introductory exercise"
created: 2026-01-19
---

# Exercise AG1: p-adic Valuations

## Problem Statement

> [!question]
> Let $v_p$ denote the $p$-adic valuation on $\mathbb{Q}$.
>
> **(a)** Compute $v_2(72)$, $v_3(72)$, $v_5(72)$, and $v_7(72)$.
>
> **(b)** Compute $v_5(125/8)$ and $v_2(125/8)$.
>
> **(c)** Verify the **product formula**: for $x = 12$, show that
> $$\prod_{p \text{ prime}} p^{-v_p(x)} \cdot |x|_\infty = 1$$
>
> **(d)** What is the $p$-adic absolute value $|48|_3$?

## Hints

> [!hint]- Hint 1
> The $p$-adic valuation $v_p(n)$ counts the exact power of $p$ dividing $n$.
> Factor $72 = 2^3 \cdot 3^2$.

> [!hint]- Hint 2
> For rationals: $v_p(a/b) = v_p(a) - v_p(b)$.

> [!hint]- Hint 3
> The $p$-adic absolute value is $|x|_p = p^{-v_p(x)}$.

## Solution

> [!success]- Solution
>
> **(a)** Factor $72 = 2^3 \cdot 3^2$.
> - $v_2(72) = 3$ (since $2^3 \| 72$)
> - $v_3(72) = 2$ (since $3^2 \| 72$)
> - $v_5(72) = 0$ (since $5 \nmid 72$)
> - $v_7(72) = 0$ (since $7 \nmid 72$)
>
> **(b)** We have $125 = 5^3$ and $8 = 2^3$.
> - $v_5(125/8) = v_5(125) - v_5(8) = 3 - 0 = 3$
> - $v_2(125/8) = v_2(125) - v_2(8) = 0 - 3 = -3$
>
> **(c)** For $x = 12 = 2^2 \cdot 3$:
> - $v_2(12) = 2$, so $2^{-v_2(12)} = 2^{-2} = 1/4$
> - $v_3(12) = 1$, so $3^{-v_3(12)} = 3^{-1} = 1/3$
> - $v_p(12) = 0$ for all other primes $p$, so $p^{-v_p(12)} = 1$
> - $|12|_\infty = 12$
>
> Product: $\frac{1}{4} \cdot \frac{1}{3} \cdot 12 = \frac{12}{12} = 1$ ✓
>
> **(d)** $48 = 2^4 \cdot 3$, so $v_3(48) = 1$.
> Therefore $|48|_3 = 3^{-1} = 1/3$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
