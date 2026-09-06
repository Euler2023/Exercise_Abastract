---
title: "Exercise F74: Polynomials Whose Distinct Roots Form a Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 13, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F74: Polynomials Whose Distinct Roots Form a Field

## Problem Statement

> [!question] Lang, Chapter V, Exercise 13
> If the roots of a monic polynomial $f(X)\in k[X]$ in some splitting field are distinct, and form a field, then $\operatorname{char}k=p$ and $f(X)=X^{p^n}-X$ for some $n\ge1$.

## Hints

> [!hint]- Hint 1
> The root set is a finite field. Compare two monic polynomials with this same set of simple roots.

## Solution

> [!success]- Solution and proof status
> Let $S$ be the root set, assumed to be a field with the inherited operations. It is finite and contains its prime field, so its characteristic is a prime $p$, and $S$ has $p^n$ elements for some $n\ge1$. The ambient splitting field, its subfield $k$, and $S$ have the same characteristic.
>
> Every $a\in S$ satisfies $a^{p^n}=a$: this holds for zero, and for nonzero elements it follows from Lagrange's theorem in $S^\times$. Thus $X^{p^n}-X$ vanishes on all of $S$. It has degree $p^n$ and derivative $-1$, hence exactly these simple roots. Since $f$ is monic and all its roots are distinct, $\deg f=|S|=p^n$ and
> $$
> f(X)=\prod_{a\in S}(X-a)=X^{p^n}-X.
> $$
> The field $k$ itself need not be finite: the hypothesis concerns its polynomial's root set.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 13, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
