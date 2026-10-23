---
title: 'Exercise AG39: Pushforward of Replete Divisor Classes'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 4, printed pp. 193–194, PDF pp. 212–213
source_refs:
- S4/ch-III/sec-1/ex-4
created: '2026-10-23'
---

# Exercise AG39: Pushforward of Replete Divisor Classes

## Problem Statement

> [!question] Neukirch III.1.4
> Let $K$ and $L$ be number fields, and let $\tau:K\longrightarrow L$ be a homomorphism. Given any replete divisor $D=\sum_{\mathfrak P}\nu_{\mathfrak P}\mathfrak P$ of $L$, define a replete divisor of $K$ by the rule
> $$
> \tau_*(D)=\sum_{\mathfrak p}\left(\sum_{\mathfrak P\mid\mathfrak p}\nu_{\mathfrak P}f_{\mathfrak P\mid\mathfrak p}\right)\mathfrak p,
> $$
> where $f_{\mathfrak P\mid\mathfrak p}$ is the inertia degree of $\mathfrak P$ over $\tau K$ and $\mathfrak P\mid\mathfrak p$ signifies $\tau\mathfrak p=\mathfrak P|_{\tau K}$. Show that $\tau_*$ induces a homomorphism
> $$
> \tau_*:CH^1(\overline{\mathcal O}_L)\longrightarrow CH^1(\overline{\mathcal O}_K).
> $$

## Hints

> [!hint]- Hint 1
> The required point is that principal divisors map to principal divisors; the formal summation already defines an additive homomorphism.

> [!hint]- Hint 2
> At finite places use the valuation formula for local norms, and at infinite places use $v_\infty=-\log|\cdot|$. Both give the identity $v_{\mathfrak p}(N_{L/\tau K}a)=\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}v_{\mathfrak P}(a)$.

## Solution

> [!success]- Independent derivation
> The field homomorphism $\tau$ is injective. Identify $K$ with its image in $L$ and apply $\tau^{-1}$ afterward; write $K\subset L$ for the proof. At finite places, $f_{\mathfrak P\mid\mathfrak p}$ is a positive integer, so integer coefficients remain integer coefficients. Real coefficients are allowed at infinite places. Finite support remains finite under the map, so the given formula defines a well-defined additive homomorphism $\operatorname{Div}(\overline{\mathcal O}_L)\to\operatorname{Div}(\overline{\mathcal O}_K)$.
>
> For $a\in L^\times$, we must prove
> $$
> \tau_*(\operatorname{div}_L(a))=\operatorname{div}_K(N_{L/K}a).
> $$
> At a finite place, the localized norm decomposition and valuation formula give
> $$
> N_{L/K}a=\prod_{\mathfrak P\mid\mathfrak p}N_{L_{\mathfrak P}/K_{\mathfrak p}}a,\qquad
> v_{\mathfrak p}(N_{L/K}a)=\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}v_{\mathfrak P}(a).
> $$
> At an infinite place with $K_{\mathfrak p}=\mathbb R$, the norm on a real extension component is its real embedding value, and the norm on a complex component is the square of the complex modulus. Taking $-\log$ gives coefficients 1 and 2, respectively. If $K_{\mathfrak p}=\mathbb C$, every component is $\mathbb C/\mathbb C$, with coefficient 1. Thus the same summation formula applies. This is an application of this section's (1.2)(iv) and the norm decomposition [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, printed pp. 184–185, PDF pp. 203–204].
>
> Comparing coefficients at every place proves the principal-divisor identity. Thus the subgroup of principal divisors maps into the subgroup of principal divisors, and the quotient map
> $$
> [D]\longmapsto[\tau_*D]
> $$
> is independent of the representative. Returning to the original homomorphism, the norm element on the right must be written as $\tau^{-1}(N_{L/\tau K}a)\in K^\times$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 4, printed pp. 193–194, PDF pp. 212–213]. An independent derivation place by place. The inertia degree at infinity is the local field degree. The book's convention for $\mathbb C/\mathbb R$ is $e=1,f=2$; a different convention calling this extension ramified must not be substituted.
- **Source anchors:** The compatibility of replete-ideal norms in (1.6)(v) and its proof appear on printed pp. 187–188 / PDF pp. 206–207, consistently with the divisor calculation above.
