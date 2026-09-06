---
title: "Exercise F75: Prime to Characteristic Degree Implies Separability"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 14, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F75: Prime to Characteristic Degree Implies Separability

## Problem Statement

> [!question] Lang, Chapter V, Exercise 14
> Let $\operatorname{char}K=p$. Let $L$ be a finite extension of $K$, and suppose $[L:K]$ prime to $p$. Show that $L$ is separable over $K$.

## Hints

> [!hint]- Hint 1
> The inseparable degree is a power of $p$ dividing the total degree.

## Solution

> [!success]- Solution and proof status
> For a finite extension in characteristic $p>0$, Lang's separable/inseparable degree theorem gives
> $$
> [L:K]=[L:K]_s[L:K]_i,\qquad [L:K]_i=p^r
> $$
> for an integer $r\ge0$. Since $p\nmid[L:K]$, we must have $r=0$. Thus $[L:K]_s=[L:K]$, which is precisely separability.
>
> For clarity, the power-of-$p$ assertion follows by writing a minimal polynomial in a simple step as $g(X^{p^e})$ with $g$ separable, and then multiplying these factors over a tower of simple extensions. It does not assume the entire extension is simple.

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]

## Notes

- **Imported input:** The degree factorization and criterion are [S2, Ch. V, Cor. 6.2, printed p. 248, PDF p. 263; Cor. 6.3, printed p. 249, PDF p. 264].

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 14, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
