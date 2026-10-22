---
title: 'Exercise R412: Power Sums from Bernoulli Differences'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 4, printed p. 433, PDF p. 452
source_refs:
- S4/ch-VII/sec-1/ex-4
created: '2026-10-23'
---

# Exercise R412: Power Sums from Bernoulli Differences

## Problem Statement

> [!question] Neukirch VII.1.4
> For the power sum
> $$
> s_k(n)=1^k+2^k+\cdots+n^k
> $$
> one has
> $$
> s_k(n)=\frac1{k+1}\bigl(B_{k+1}(n)-B_{k+1}(0)\bigr).
> $$

## Hints

> [!hint]- Hint 1
> Apply the preceding backward-difference formula with index $k+1$.

> [!hint]- Hint 2
> Sum the resulting identities at $x=1,\ldots,n$ and telescope.

## Solution

> [!success]- Independent derivation
> For an integer $k\ge0$, the generating-function subtraction gives
> $$
> B_{k+1}(j)-B_{k+1}(j-1)=(k+1)j^k\qquad(j\ge1).
> $$
> Summing over $j=1,\ldots,n$, every intermediate Bernoulli value cancels:
> $$
> (k+1)\sum_{j=1}^n j^k=\sum_{j=1}^n\bigl(B_{k+1}(j)-B_{k+1}(j-1)\bigr)
> =B_{k+1}(n)-B_{k+1}(0).
> $$
> Divide by $k+1$, which is nonzero in characteristic zero. The same formula holds at $n=0$ by the empty-sum convention.
>
> For $k=0$, $B_1(x)=x+1/2$ gives $s_0(n)=n$. For $k=1$, $B_2(x)=x^2+x+1/6$ gives
> $$
> s_1(n)=\frac{n^2+n}{2}.
> $$
> For $k=2$, $B_3(x)=x^3+\tfrac32x^2+\tfrac12x$ gives $s_2(n)=n(n+1)(2n+1)/6$. These are algebraic checks of the endpoint convention; using $B_{k+1}^{\mathrm{usual}}(n)$ without shifting would sum $0^k+\cdots+(n-1)^k$ instead.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The complete exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 4, printed p. 433, PDF p. 452]. There are no subparts, printed hints or required figures.
- **Proof scope:** Independent telescoping derivation from the generating function of the preceding exercise. Assumptions are $k,n\in\mathbb Z_{\ge0}$; the source's positive-$B_1$ convention is retained.
