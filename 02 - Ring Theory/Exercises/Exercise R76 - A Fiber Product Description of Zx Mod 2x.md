---
title: "Exercise R76: A Fiber Product Description of Zx Mod 2x"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - product-rings
  - quotient-rings
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.7, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R76: A Fiber Product Description of Zx Mod 2x

## Problem Statement

> [!question] Exercise 6.7
> Prove that in $\mathbb Z[x]$, $(2)\cap(x)=(2x)$, and that $R=\mathbb Z[x]/(2x)$ is isomorphic to the subring of $\mathbb F_2[x]\times\mathbb Z$ consisting of pairs $(f(x),n)$ such that $f(0)\equiv n\pmod2$.

## Hints

> [!hint]- Hint 1
> A polynomial divisible by both $2$ and $x$ has every coefficient even and zero constant term.

> [!hint]- Hint 2
> Use $g(x)\mapsto(g(x)\bmod2,g(0))$.

## Solution

> [!success]- Solution
> If $g\in(2)\cap(x)$, then $g=xh$ and all coefficients of $g$ are even. Hence all coefficients of $h$ are even, so $g\in(2x)$. The reverse inclusion is immediate; thus $(2)\cap(x)=(2x)$.
>
> Define
>
> $$
> \Phi:\mathbb Z[x]\to\mathbb F_2[x]\times\mathbb Z,
> \qquad g\mapsto(\overline g,g(0)).
> $$
>
> Its kernel is $(2)\cap(x)=(2x)$. Every image pair satisfies $\overline g(0)\equiv g(0)\pmod2$. Conversely, if $(f,n)$ satisfies this compatibility, lift $f-f(0)$ to an integral polynomial with zero constant term and add the constant $n$; its image is $(f,n)$. The first isomorphism theorem gives the claimed subring description.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Isomorphism Theorems for Rings|Isomorphism Theorems for Rings]]

## Notes

- **Method boundary:** This is a fiber-product compatibility condition, not a direct product, because $(2)+(x)\ne\mathbb Z[x]$.
- **Source status:** The problem is from [S1, Ch. 11, §6, Ex. 6.7, printed p. 356, PDF p. 368]. The proof is independent.

