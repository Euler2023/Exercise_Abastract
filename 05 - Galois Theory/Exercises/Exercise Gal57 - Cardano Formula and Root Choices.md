---
title: "Exercise Gal57: Cardano's Formula and Root Choices"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, cubic-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 11, Ex. 11.5, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal57: Cardano's Formula and Root Choices

## Problem Statement

> [!question] Exercise 11.5
> (a) Apply Cardano's formula to $x^3+3x$, $x^3+2$, $x^3-3x+2$, $x^3-3x+2$ as printed. (b) Determine the correct root choices.

## Hints

> [!hint]- Hint 1
> Always enforce $uv=-p/3$.

## Solution

> [!success]- Solution
> For $x^3+3x$, the radicands are $\pm i$, and compatible cube roots $u,v$ satisfy $uv=-1$, producing $0,\pm i\sqrt3$. For $x^3+2$, one radicand is $-2$ and the other $0$, giving the three cube roots of $-2$.
>
> For $x^3-3x+2=(x-1)^2(x+2)$, the inner square root vanishes and $u^3=v^3=-1$. Compatible choices satisfy $uv=1$, giving $u=v=-1$ and $x=-2$, or $u,v=-\omega,-\omega^2$ in either order, giving the double root $x=1$.
>
> In general, after choosing $u^3$, the correct $v$ is not arbitrary: it is $v=-p/(3u)$. This leaves exactly three compatible pairs.

## Related Concepts

- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

The source image appears to repeat $x^3-3x+2$ as the last two examples. This apparent source duplication is preserved rather than silently replaced.
