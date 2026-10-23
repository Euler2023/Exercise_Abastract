---
title: 'Exercise Gal164: Kummer Cohomology without Roots of Unity in the Base'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 8, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-8
created: '2026-10-23'
---

# Exercise Gal164: Kummer Cohomology without Roots of Unity in the Base

## Problem Statement

> [!question] Neukirch IV.3.8
> If $n$ is not divisible by the characteristic of the field $K$ and if $\mu_n$ denotes the group of $n$-th roots of unity in the separable closure $\overline K$, then
> $$
> H^1(G_K,\mu_n)\simeq K^*/K^{*n}.
> $$

## Hints

> [!hint]- Hint 1
> The polynomial $X^n-a$ is separable when the characteristic does not divide $n$, so the power map is surjective on the multiplicative group of the separable closure.

> [!hint]- Hint 2
> Apply the preceding $H^1$ exact sequence to the Kummer short exact sequence, then use infinite Hilbert 90. Note that $\mu_n\subseteq K$ is not required.

## Solution

> [!success]- Independent derivation
> Set $K^s=\overline K$. Since $n\ne0$ in $K$, for any $a\in(K^s)^\times$ every root of $X^n-a$ is nonzero and its derivative $nX^{n-1}$ does not vanish at a root. The field $K^s$ is separably closed, so an $n$-th root exists. Thus there is a short exact sequence of continuous discrete $G_K$-modules
> $$
> 1\longrightarrow\mu_n\longrightarrow(K^s)^\times\xrightarrow{x\mapsto x^n}(K^s)^\times\longrightarrow1.
> $$
> The continuous infinite Hilbert 90 theorem from the preceding exercise and the exact sequence proved in Exercise 6 give
> $$
> K^\times\xrightarrow{n}K^\times\xrightarrow\delta H^1(G_K,\mu_n)\longrightarrow H^1(G_K,(K^s)^\times)=1.
> $$
> Hence $\delta$ is surjective with kernel $K^{\times n}$, giving the isomorphism.
>
> The isomorphism can be written directly: for $a\in K^\times$, choose $\alpha^n=a$ and set $c_a(\sigma)=\sigma(\alpha)/\alpha\in\mu_n$, or $\alpha^{\sigma-1}$ in the book's right-action notation. Choosing a different root changes the cocycle by a $\mu_n$-coboundary. Multiplying $a$ by $b^n$ with $b\in K^\times$ leaves its class unchanged. The description of the kernel by power classes is also direct: if $c_a=\zeta^{\sigma-1}$, then $\alpha/\zeta\in K$ and hence $a=(\alpha/\zeta)^n$.
>
> The roots $\mu_n$ are not assumed to lie in the base field. Thus the cohomology term is $H^1$ of $\mu_n$ with its Galois action and generally cannot be rewritten as the ordinary character group $\operatorname{Hom}(G_K,\mu_n)$. That additional interpretation is available only when the action is trivial.

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert 90]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 8, printed p. 284, PDF p. 303]. Independent application of the short exact sequence, with an explicit cocycle. The preceding exercise gives the finite-level proof of continuous infinite Hilbert 90.
- **Boundary:** If the characteristic divides $n$, the power map on the separable closure need not be surjective, and the classical étale Kummer sequence does not apply directly.
