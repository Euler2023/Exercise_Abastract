---
title: "Exercise F68: Degree of Square Root Two Plus Square Root Three"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 6, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F68: Degree of Square Root Two Plus Square Root Three

## Problem Statement

> [!question] Lang, Chapter V, Exercise 6
> Show that $\sqrt2+\sqrt3$ is algebraic over $\mathbb Q$, of degree $4$.

## Hints

> [!hint]- Hint 1
> The inverse of $\sqrt2+\sqrt3$ is $\sqrt3-\sqrt2$.

## Solution

> [!success]- Solution and proof status
> Put $\gamma=\sqrt2+\sqrt3$. Then $\gamma^{-1}=\sqrt3-\sqrt2$, so
> $$
> \sqrt3=\frac{\gamma+\gamma^{-1}}2,\qquad
> \sqrt2=\frac{\gamma-\gamma^{-1}}2.
> $$
> It follows that $\mathbb Q(\gamma)=\mathbb Q(\sqrt2,\sqrt3)$.
>
> If $\sqrt3=a+b\sqrt2$ with $a,b\in\mathbb Q$, squaring yields $3=a^2+2b^2+2ab\sqrt2$. Hence $ab=0$. The cases would respectively require $3$ or $3/2$ to be a square in $\mathbb Q$, both impossible because a rational square has even valuation at every prime. Thus $\sqrt3\notin\mathbb Q(\sqrt2)$, and the tower law gives degree four.
>
> Finally $(\gamma^2-5)^2=24$, so the monic polynomial
> $$
> X^4-10X^2+1
> $$
> annihilates $\gamma$. As its degree is four, it is the minimal polynomial.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 6, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
