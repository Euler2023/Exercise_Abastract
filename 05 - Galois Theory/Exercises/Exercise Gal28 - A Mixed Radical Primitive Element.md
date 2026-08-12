---
title: "Exercise Gal28: A Mixed Radical Primitive Element"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, minimal-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.11, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal28: A Mixed Radical Primitive Element

## Problem Statement

> [!question] Exercise 7.11
> Let $\alpha=\sqrt[3]2$, $\beta=\sqrt3$, $\gamma=\alpha+\beta$, $L=\mathbb Q(\alpha,\beta)$, and let $K$ split $(x^3-2)(x^2-3)$. (a) Find the irreducible polynomial and complex roots of $\gamma$. (b) Determine $\operatorname{Gal}(K/\mathbb Q)$.

## Hints

> [!hint]- Hint 1
> Eliminate $\beta$ from $(\gamma-\beta)^3=2$ and $\beta^2=3$.

## Solution

> [!success]- Solution
> The six conjugates are
> $$
> \omega^j\alpha\pm\beta\qquad(j=0,1,2).
> $$
> Their product is
> $$
> f(x)=\prod_{j=0}^2\bigl((x-\omega^j\alpha)^2-3\bigr)
> =x^6-9x^4-4x^3+27x^2-36x-23.
> $$
> The fields $\mathbb Q(\alpha)$ and $\mathbb Q(\beta)$ have coprime degrees $3,2$, so $[L:\mathbb Q]=6$. Since $\beta$ is recovered rationally from $(\gamma-\beta)^3=2$, one has $L=\mathbb Q(\gamma)$; hence $f$ is irreducible.
>
> The splitting field of $x^3-2$ has group $S_3$ and unique quadratic subfield $\mathbb Q(\sqrt{-3})$, which differs from $\mathbb Q(\sqrt3)$. Thus the two splitting fields intersect in $\mathbb Q$, and
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong S_3\times C_2.
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

The elimination polynomial was expanded exactly; degree proves irreducibility.
