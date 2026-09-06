---
title: "Exercise F65: Coprime Degrees Preserve Irreducibility"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 3, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F65: Coprime Degrees Preserve Irreducibility

## Problem Statement

> [!question] Lang, Chapter V, Exercise 3
> Let $\alpha$ and $\beta$ be two elements which are algebraic over $F$. Let $f(X)=\operatorname{Irr}(\alpha,F,X)$ and $g(X)=\operatorname{Irr}(\beta,F,X)$. Suppose that $\deg f$ and $\deg g$ are relatively prime. Show that $g$ is irreducible in the polynomial ring $F(\alpha)[X]$.

## Hints

> [!hint]- Hint 1
> Compute $[F(\alpha,\beta):F]$ through both simple subfields.

## Solution

> [!success]- Solution and proof status
> Put $m=\deg f$, $n=\deg g$, and $r=[F(\alpha,\beta):F(\alpha)]$. Since $g(\beta)=0$, its minimal polynomial over $F(\alpha)$ divides $g$, so $r\le n$. The two degree towers give
> $$
> mr=[F(\alpha,\beta):F]
> =n[F(\alpha,\beta):F(\beta)].
> $$
> Therefore $n\mid mr$. Coprimality gives $n\mid r$, and $1\le r\le n$ forces $r=n$. The monic minimal polynomial of $\beta$ over $F(\alpha)$ is consequently $g$ itself. Neither extension needs to be separable.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 3, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
