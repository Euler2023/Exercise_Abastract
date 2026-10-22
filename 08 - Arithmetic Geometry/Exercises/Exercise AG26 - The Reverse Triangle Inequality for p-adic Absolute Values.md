---
title: 'Exercise AG26: The Reverse Triangle Inequality for p-adic Absolute Values'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 1, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-1
created: '2026-10-23'
---

# Exercise AG26: The Reverse Triangle Inequality for p-adic Absolute Values

## Problem Statement

> [!question] Neukirch II.2.1
> $|x-y|_p\ge\bigl||x|_p-|y|_p\bigr|$.

## Hints

> [!hint]- Hint 1
> Apply the ordinary triangle inequality to $x=(x-y)+y$.

> [!hint]- Hint 2
> Interchange $x$ and $y$. If their absolute values differ, the ultrametric inequality even gives equality with their maximum.

## Solution

> [!success]- Independent derivation and stated source corrections
> From $|x|_p\le|x-y|_p+|y|_p$ we get $|x|_p-|y|_p\le|x-y|_p$. Interchanging the variables gives its negative as another lower bound. Taking the larger of the two proves the assertion, including $x=y$ and zero arguments.
>
> For the stronger statement, suppose $|x|_p>|y|_p$. The ultrametric bound gives $|x-y|_p\le|x|_p$. If strict inequality held, applying that same bound to $x=(x-y)+y$ would give $|x|_p<|x|_p$. Hence $|x-y|_p=|x|_p$. If $|x|_p=|y|_p$, the requested lower bound is zero; cancellation may make $|x-y|_p$ arbitrarily small. For example $x=1$, $y=1+p^N$ gives $|x-y|_p=p^{-N}$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 1, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
