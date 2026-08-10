---
title: "Exercise F23: Factor Degrees after a Quadratic Extension"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - field-extensions
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Miscellaneous Ex. M.3, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise F23: Factor Degrees after a Quadratic Extension

## Problem Statement

> [!question] Exercise
> Let $f(x)$ be an irreducible polynomial of degree $6$ over a field $F$, and let $K$ be a quadratic extension of $F$. What can be said about the degrees of the irreducible factors of $f$ in $K[x]$?

## Hints

> [!hint]- Hint 1
> If $\alpha$ is any root, compare $F(\alpha)$ and $K(\alpha)$.

> [!hint]- Hint 2
> Use the tower law and the fact that $[K(\alpha):F(\alpha)]$ divides $2$.

## Solution

> [!success]- Solution
> Let $\alpha$ be any root of $f$ in an extension field and put $E=F(\alpha)$. Since $f$ is irreducible of degree $6$,
> $$
> [E:F]=6.
> $$
> The compositum $K(\alpha)=KE$ has degree over $E$ equal to either $1$ or $2$, because it is generated over $E$ by the elements of the quadratic extension $K/F$. The tower law gives
> $$
> [K(\alpha):K],[K:F]
> =[K(\alpha):E],[E:F],
> $$
> hence
> $$
> [K(\alpha):K]cdot2=[K(\alpha):E]\cdot6.
> $$
> Therefore the minimal polynomial of $\alpha$ over $K$ has degree either $3$ or $6$.
>
> The same argument applies to every root and hence to every irreducible factor in $K[x]$. Since the total degree is $6$, the only possibilities are:
>
> 1. $f$ remains irreducible of degree $6$ over $K$; or
> 2. $f$ is a product of two irreducible cubic factors over $K$ (counted with multiplicity if inseparability is present).
>
> In particular, no irreducible factor can have degree $1$, $2$, $4$, or $5$.

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

The degree conclusion uses only the tower law and does not assume that $K/F$ is separable. Inseparability can affect multiplicities, not the possible irreducible-factor degrees.
