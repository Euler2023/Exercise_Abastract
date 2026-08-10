---
title: "Exercise F12: Divisibility of Frobenius Polynomials"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - polynomial-divisibility
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.12, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F12: Divisibility of Frobenius Polynomials

## Problem Statement

> [!question] Exercise
> Let $p$ be a prime integer, and let $q=p^r$ and $q'=p^k$. For which values of $r$ and $k$ does $x^q-x$ divide $x^{q'}-x$ in $\mathbb Z[x]$?

## Hints

> [!hint]- Hint 1
> Cancel the common factor $x$.

> [!hint]- Hint 2
> Use $x^m-1\mid x^n-1$ if and only if $m\mid n$.

## Solution

> [!success]- Solution
> Since
> $$
> x^q-x=x(x^{q-1}-1),\qquad x^{q'}-x=x(x^{q'-1}-1),
> $$
> divisibility is equivalent to
> $$
> x^{p^r-1}-1\mid x^{p^k-1}-1.
> $$
> In $\mathbb Z[x]$, $x^m-1$ divides $x^n-1$ exactly when $m$ divides $n$. Thus the condition is
> $$
> p^r-1\mid p^k-1.
> $$
> If $r\mid k$, the usual geometric-series factorization proves the divisibility. Conversely, write $k=ar+s$ with $0\le s<r$. Modulo $p^r-1$ one has $p^r\equiv1$, so
> $$
> p^k-1\equiv p^s-1\pmod{p^r-1}.
> $$
> If $p^r-1$ divides $p^k-1$, it must divide $p^s-1$. For $0<s<r$ this is impossible because $0<p^s-1<p^r-1$. Thus $s=0$ and $r\mid k$.
> Therefore the required condition is $r\mid k$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

The divisibility is explicitly in $\mathbb Z[x]$, not merely after reducing modulo $p$.
