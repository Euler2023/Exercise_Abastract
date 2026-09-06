---
title: "Exercise F76: Irreducibility of Purely Inseparable Binomials"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 15, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F76: Irreducibility of Purely Inseparable Binomials

## Problem Statement

> [!question] Lang, Chapter V, Exercise 15
> Suppose $\operatorname{char}K=p$. Let $a\in K$. If $a$ has no $p$-th root in $K$, show that $X^{p^n}-a$ is irreducible in $K[X]$ for all positive integers $n$.

## Hints

> [!hint]- Hint 1
> In an algebraic closure the binomial has only one distinct root.

> [!hint]- Hint 2
> A monic irreducible polynomial with only one distinct root is $X^{p^e}-b$.

## Solution

> [!success]- Solution and proof status
> Choose $\alpha$ in an algebraic closure with $\alpha^{p^n}=a$, and let $m(X)$ be its monic minimal polynomial over $K$. Since
> $$
> X^{p^n}-a=(X-\alpha)^{p^n},
> $$
> we have $m(X)=(X-\alpha)^d$ for some $1\le d\le p^n$. Write $d=p^e r$ with $p\nmid r$. Then
> $$
> m(X)=(X^{p^e}-\alpha^{p^e})^r.
> $$
> The coefficient of $X^{p^e(r-1)}$ is $-r\alpha^{p^e}$ and belongs to $K$. As $r$ is nonzero in $K$, $b=\alpha^{p^e}\in K$. Now $X^{p^e}-b$ is a polynomial over $K$ vanishing at $\alpha$, so minimality forces $d\le p^e$. Therefore $r=1$ and $m(X)=X^{p^e}-b$.
>
> If $e<n$, then
> $$
> a=b^{p^{n-e}}=\left(b^{p^{n-e-1}}\right)^p
> $$
> would have a $p$th root in $K$, contrary to hypothesis. Hence $e=n$ and $m(X)=X^{p^n}-a$.

## Related Concepts

- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 15, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
