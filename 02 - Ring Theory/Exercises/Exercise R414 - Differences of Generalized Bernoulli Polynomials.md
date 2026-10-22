---
title: 'Exercise R414: Differences of Generalized Bernoulli Polynomials'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §2, Exercise 2, printed p. 443, PDF p. 462
source_refs:
- S4/ch-VII/sec-2/ex-2
created: '2026-10-23'
---

# Exercise R414: Differences of Generalized Bernoulli Polynomials

## Problem Statement

> [!question] Neukirch VII.2.2
> $B_{k,\chi}(x)-B_{k,\chi}(x-m)=k\sum_{a=1}^m\chi(a)(a+x-m)^{k-1}$, $k\ge0$.

> [!warning] Source issue or convention
> The source includes $k=0$. At that index, read the right-hand side as the zero polynomial; its literal negative powers can be undefined at particular $x$. The proof states the constant case separately.

## Hints

> [!hint]- Hint 1
> Subtract $F_\chi(t,x-m)$ from $F_\chi(t,x)$.

> [!hint]- Hint 2
> Cancel $e^{mt}-1$ first; the result is $t\sum_a\chi(a)e^{(a+x-m)t}$.

## Solution

> [!success]- Independent derivation
> By the defining series,
> $$
> \begin{aligned}
> F_\chi(t,x)-F_\chi(t,x-m)
> &=\sum_{a=1}^m\chi(a)\frac{t(e^{(a+x)t}-e^{(a+x-m)t})}{e^{mt}-1}\\
> &=t\sum_{a=1}^m\chi(a)e^{(a+x-m)t}.
> \end{aligned}
> $$
> For $k\ge1$ the coefficient of $t^k$ on the last line is
> $$
> \frac1{(k-1)!}\sum_{a=1}^m\chi(a)(a+x-m)^{k-1}.
> $$
> Equating coefficients and multiplying by $k!$ proves the formula. At $k=0$ the constant term on the right is zero, so the correct separate assertion is $B_{0,\chi}(x)-B_{0,\chi}(x-m)=0$. This avoids evaluating a negative power at a zero base in the printed expression.
>
> For the odd character modulo $3$, with $\chi(1)=1$, $\chi(2)=-1$, $\chi(3)=0$, we get $B_{0,\chi}=0$ and $B_{1,\chi}=-1/3$. At $k=1$ the difference is zero on both sides. At $k=2$ the right side is $2((x-2)-(x-1))=-2$, agreeing with the slope $2B_{1,\chi}=-2/3$ over a shift of length $3$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The original range $k\ge0$, shift $x-m$, and exponent $k-1$ were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §2, Exercise 2, printed p. 443, PDF p. 462]. No printed hint or source figure occurs.
- **Source precision:** The degree-zero case is a zero coefficient identity. The formula with $k=0$ should not be interpreted as evaluating $0\cdot0^{-1}$; the positive-index formula and the separate constant case provide its precise meaning.
- **Proof scope:** Independent generating-function calculation.
