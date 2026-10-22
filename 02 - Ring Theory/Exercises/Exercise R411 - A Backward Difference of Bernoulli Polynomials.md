---
title: 'Exercise R411: A Backward Difference of Bernoulli Polynomials'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 3, printed p. 433, PDF p. 452
source_refs:
- S4/ch-VII/sec-1/ex-3
created: '2026-10-23'
---

# Exercise R411: A Backward Difference of Bernoulli Polynomials

## Problem Statement

> [!question] Neukirch VII.1.3
> $B_k(x)-B_k(x-1)=kx^{k-1}$.

## Hints

> [!hint]- Hint 1
> Subtract the two generating functions before comparing coefficients.

> [!hint]- Hint 2
> The factor $e^t-1$ cancels and leaves $te^{xt}$.

## Solution

> [!success]- Independent derivation
> Use the source's convention
> $$
> \sum_{k\ge0}B_k(x)\frac{t^k}{k!}=\frac{te^{(x+1)t}}{e^t-1}.
> $$
> Subtracting the same identity with $x-1$ in place of $x$ yields
> $$
> \sum_{k\ge0}\bigl(B_k(x)-B_k(x-1)\bigr)\frac{t^k}{k!}
> =\frac{te^{(x+1)t}-te^{xt}}{e^t-1}=te^{xt}.
> $$
> The coefficient of $t^k$ on the right is $x^{k-1}/(k-1)!$ for $k\ge1$. Multiplication by $k!$ proves the claim. At $k=0$ the difference is zero; the correct degree-zero reading is simply $B_0(x)-B_0(x-1)=0$, without assigning a value to $0x^{-1}$ at $x=0$.
>
> For $k=2$, direct calculation gives
> $$
> (x^2+x+\tfrac16)-((x-1)^2+(x-1)+\tfrac16)=2x.
> $$
> This confirms both the backward shift and the sign. With the other common Bernoulli convention the corresponding identity uses $B_k^{\mathrm{usual}}(x+1)-B_k^{\mathrm{usual}}(x)$ instead.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The printed one-line exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 3, printed p. 433, PDF p. 452], together with the preceding definition in Exercise 2. No printed hint or source figure occurs.
- **Convention:** The displayed expression is literally a polynomial identity for $k\ge1$; $k=0$ has the separate zero-difference interpretation described above. The proof is independent.
