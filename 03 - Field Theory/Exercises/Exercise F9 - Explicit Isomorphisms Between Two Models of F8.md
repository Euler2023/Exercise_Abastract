---
title: "Exercise F9: Explicit Isomorphisms Between Two Models of F8"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - field-isomorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.8, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F9: Explicit Isomorphisms Between Two Models of $\mathbb F_8$

## Problem Statement

> [!question] Exercise
> The polynomials $f(x)=x^3+x+1$ and $g(x)=x^3+x^2+1$ are irreducible over $\mathbb F_2$. Let $K$ be obtained by adjoining a root of $f$, and let $L$ be obtained by adjoining a root of $g$. Describe explicitly an isomorphism from $K$ to $L$, and determine the number of such isomorphisms.

## Hints

> [!hint]- Hint 1
> If $\beta$ is a root of $g$, then $\beta^{-1}$ is a root of $f$.

> [!hint]- Hint 2
> The other roots are obtained by Frobenius: $u,u^2,u^4$.

## Solution

> [!success]- Solution
> Write
> $$
> K=\mathbb F_2(\alpha),\quad \alpha^3+\alpha+1=0,
> $$
> and
> $$
> L=\mathbb F_2(\beta),\quad \beta^3+\beta^2+1=0.
> $$
> Since
> $$
> x^3f(x^{-1})=x^3+x^2+1=g(x),
> $$
> the element $\beta^{-1}$ is a root of $f$. Also $\beta^7=1$, and direct reduction gives
> $$
> \beta^{-1}=\beta^6=\beta^2+\beta.
> $$
> Hence one explicit isomorphism is
> $$
> \phi:K\longrightarrow L,
> \qquad \phi(\alpha)=\beta^2+\beta.
> $$
> A homomorphism is determined by the image of $\alpha$, which may be any root of $f$ in $L$. These roots are the Frobenius conjugates
> $$
> \beta^6=\beta^2+\beta,
> \qquad \beta^5=\beta+1,
> \qquad \beta^3=\beta^2+1.
> $$
> Therefore there are exactly $3$ isomorphisms $K\to L$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]

## Notes

All reductions in $L$ use only $\beta^3=\beta^2+1$. The solution is an independent explicit construction.
