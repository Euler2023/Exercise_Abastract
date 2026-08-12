---
title: "Exercise Gal11: Automorphisms of Radical Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, automorphisms]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 4, Ex. 4.1, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise Gal11: Automorphisms of Radical Fields

## Problem Statement

> [!question] Exercise 4.1
> (a) Determine all automorphisms of $\mathbb Q(\sqrt[3]2)$ and $\mathbb Q(\sqrt[3]2,\omega)$, $\omega=e^{2\pi i/3}$. (b) For the splitting field $K$ of $(x^2-2x-1)(x^2-2x-7)$, determine all automorphisms.

## Hints

> [!hint]- Hint 1
> An automorphism sends generators to conjugate roots.

## Solution

> [!success]- Solution
> Put $\alpha=\sqrt[3]2$. The field $\mathbb Q(\alpha)\subset\mathbb R$ contains only one root of $x^3-2$, so its only automorphism is the identity. Its normal closure $L=\mathbb Q(\alpha,\omega)$ has degree $6$. The assignments
> $$
> \sigma(\alpha)=\omega\alpha,\ \sigma(\omega)=\omega,\qquad
> \tau(\alpha)=\alpha,\ \tau(\omega)=\omega^2
> $$
> generate all six automorphisms, with $\sigma^3=\tau^2=1$ and $\tau\sigma\tau=\sigma^{-1}$; hence the group is $S_3$.
>
> In (b), the roots are $1\pm\sqrt2$ and $1\pm2\sqrt2$, so $K=\mathbb Q(\sqrt2)$. Its two automorphisms are the identity and $\sqrt2\mapsto-\sqrt2$, the latter interchanging both root pairs.

## Related Concepts

- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

Independent derivation from [S1, printed p. 506, PDF p. 518].
