---
title: "Exercise Gal28: A Primitive Element of a Compositum"
topic: galois-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - galois-theory
  - composita
  - primitive-elements
  - minimal-polynomials
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.11, printed p. 507, PDF p. 519
created: 2026-08-12
---

# Exercise Gal28: A Primitive Element of a Compositum

## Problem Statement

> [!question] Exercise 7.11
> Let $\alpha=\sqrt[3]2$, $\beta=\sqrt3$, $\gamma=\alpha+\beta$, $L=\mathbb Q(\alpha,\beta)$, and let $K$ split $(x^3-2)(x^2-3)$. (a) Find the irreducible polynomial and complex roots of $\gamma$. (b) Determine $\operatorname{Gal}(K/\mathbb Q)$.

## Hints

> [!hint]- Hint 1
> Eliminate $\beta$ from $(\gamma-\beta)^3=2$ and $\beta^2=3$.

## Solution

> [!success]- Solution
> Put
>
> $$
> L_1=\mathbb Q(\alpha),
> \qquad
> L_2=\mathbb Q(\beta).
> $$
>
> Then the field in the problem is the compositum
>
> $$
> L=L_1L_2=\mathbb Q(\sqrt[3]2,\sqrt3).
> $$
>
> Since $[L_1:\mathbb Q]=3$ and $[L_2:\mathbb Q]=2$, their intersection has degree dividing both $3$ and $2$. Hence $L_1\cap L_2=\mathbb Q$. Moreover, $[L:\mathbb Q]$ is divisible by both $3$ and $2$, while the usual upper bound gives $[L:\mathbb Q]\leq 3\cdot2$. Therefore
>
> $$
> L_1\cap L_2=\mathbb Q,
> \qquad
> [L:\mathbb Q]=[L_1:\mathbb Q][L_2:\mathbb Q]=6.
> $$
>
> The six conjugates are
> $$
> \omega^j\alpha\pm\beta\qquad(j=0,1,2).
> $$
> Their product is
> $$
> f(x)=\prod_{j=0}^2\bigl((x-\omega^j\alpha)^2-3\bigr)
> =x^6-9x^4-4x^3+27x^2-36x-23.
> $$
> To see directly that $\gamma$ is a primitive element for this compositum, expand
>
> $$
> (\gamma-\beta)^3=2
> $$
>
> and use $\beta^2=3$. This gives
>
> $$
> \beta=\frac{\gamma^3+9\gamma-2}{3(\gamma^2+1)}\in\mathbb Q(\gamma).
> $$
>
> Therefore $\alpha=\gamma-\beta\in\mathbb Q(\gamma)$, so
>
> $$
> L=\mathbb Q(\alpha,\beta)=\mathbb Q(\gamma).
> $$
>
> Consequently $[\mathbb Q(\gamma):\mathbb Q]=6$, and the degree-$6$ polynomial $f$ is irreducible.
>
> For the Galois closure, let $K_1$ be the splitting field of $x^3-2$ and let $K_2=\mathbb Q(\sqrt3)$, the splitting field of $x^2-3$. Then
>
> $$
> K=K_1K_2.
> $$
>
> The group $\operatorname{Gal}(K_1/\mathbb Q)$ is $S_3$, and its unique quadratic subfield is $\mathbb Q(\sqrt{-3})$. Hence $K_1\cap K_2=\mathbb Q$. Because both factors are Galois, restriction gives
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong S_3\times C_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[03 - Field Theory/Concepts/Separable Extensions#Primitive Element Theorem|Primitive Element Theorem]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

This is simultaneously an example of a primitive element for the nonnormal compositum $L_1L_2$ and of a direct-product Galois group for the compositum of two linearly disjoint Galois extensions. The polynomial expansion and the recovery formula for $\beta$ are exact; the degree calculation proves irreducibility.
