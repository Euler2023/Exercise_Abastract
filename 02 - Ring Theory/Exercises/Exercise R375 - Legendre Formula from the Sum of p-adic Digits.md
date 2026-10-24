---
title: 'Exercise R375: Legendre Formula from the Sum of p-adic Digits'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 2, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-2
created: '2026-10-23'
---

# Exercise R375: Legendre Formula from the Sum of p-adic Digits

## Problem Statement

> [!question] Neukirch II.2.2
> Let $n$ be a natural number, $n=a_0+a_1p+\cdots+a_{r-1}p^{r-1}$ its $p$-adic expansion, with $0\le a_i<p$, and $s=a_0+a_1+\cdots+a_{r-1}$. Show that $v_p(n!)=(n-s)/(p-1)$.

## Hints

> [!hint]- Hint 1
> Count the factors divisible by $p$, then by $p^2$, and so on.

> [!hint]- Hint 2
> Expand $\sum_{j\ge1}\lfloor n/p^j\rfloor$ in terms of the digits.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Each integer $m\le n$ contributes once for every power $p^j$ dividing $m$. Thus the following finite sums count the same pairs $(m,j)$:
> $$
> v_p(n!)=\sum_{m=1}^n v_p(m)=\sum_{j\ge1}\left\lfloor\frac n{p^j}\right\rfloor.
> $$
> For $1\le j<r$, division of the digit expansion gives $\lfloor n/p^j\rfloor=\sum_{i=j}^{r-1}a_ip^{i-j}$. Reversing the finite summation order yields
> $$
> \sum_{j=1}^{r-1}\sum_{i=j}^{r-1}a_ip^{i-j}
> =\sum_{i=1}^{r-1}a_i\frac{p^i-1}{p-1}
> =\frac{n-\sum_{i=0}^{r-1}a_i}{p-1}.
> $$
> The formula also covers $n=0$ by $0!=1$. For example $n=10,p=3$ gives $10=(101)_3$, digit sum $2$, and $v_3(10!)=3+1=4=(10-2)/2$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 2, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
