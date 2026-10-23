---
title: 'Exercise Gal158: The Different Exponent from Ramification Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 2, printed p. 208, PDF p. 227
source_refs:
- S4/ch-III/sec-2/ex-2
created: '2026-10-23'
---

# Exercise Gal158: The Different Exponent from Ramification Groups

## Problem Statement

> [!question] Neukirch III.2.2
> Let $L|K$ be a Galois extension of henselian fields with separable residue field extension $\lambda|\kappa$, and let $G_i$, $i\ge0$, be the $i$-th ramification group. Then, if $\mathfrak D_{L|K}=\mathfrak P^s$, one has
> $$
> s=\sum_{i=0}^{\infty}(\#G_i-1).
> $$
> **Printed hint:** If $\mathcal O=\mathfrak o[x]$ (see chap. II, (10.4)), then $s=v_L(\delta_{L|K}(x))=\sum_{\sigma\in G,\ \sigma\ne1}v_L(x-\sigma x)$.

## Hints

> [!hint]- Hint 1
> Write the minimal polynomial using an integral-ring generator $x$ as $f(X)=\prod_{\sigma\in G}(X-\sigma x)$, then compute the valuation of $f'(x)$.

> [!hint]- Hint 2
> For $\sigma\ne1$, the integer $v_L(x-\sigma x)$ equals the number of nonnegative integers $i$ for which $\sigma\in G_i$. This integer can be zero, as in the main proof below.

## Solution

> [!success]- Independent derivation
> Use the discrete valuation setting of this chapter: $L/K$ is finite Galois, the discrete valuations are normalized, the integer rings are $\mathcal O/\mathfrak o$, and the residue extension is separable. First use the proved II (10.4) to choose $\mathcal O=\mathfrak o[x]$. The same page also gives
> $$
> G_i=\{\sigma\in G:v_L(\sigma x-x)\ge i+1\}.
> $$
> The reference is [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, printed p. 178, PDF p. 197]. Since $x$ generates $L/K$, no nonidentity $\sigma$ fixes $x$. Hence $i_G(\sigma)=v_L(x-\sigma x)$ is a finite nonnegative integer.
>
> The formula for the different of a ring with one generator, (2.4) [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, printed pp. 197–198, PDF pp. 216–217], gives
> $$
> \mathfrak D_{L|K}=(f'(x)),\qquad f'(x)=\prod_{\sigma\ne1}(x-\sigma x),
> $$
> Therefore
> $$
> s=\sum_{\sigma\ne1}i_G(\sigma).
> $$
> For every nonnegative integer $m$, we have $m=\sum_{i\ge0}\mathbf1_{m\ge i+1}$. Apply this to each $i_G(\sigma)$ and interchange the sums, which have only finitely many nonzero terms, to obtain
> $$
> \begin{aligned}
> s&=\sum_{\sigma\ne1}\sum_{i\ge0}\mathbf1_{i_G(\sigma)\ge i+1}\\
> &=\sum_{i\ge0}\#\{\sigma\in G_i:\sigma\ne1\}
> =\sum_{i\ge0}(\#G_i-1).
> \end{aligned}
> $$
> Finiteness is also established: beyond the largest $i_G(\sigma)$ for $\sigma\ne1$, each $G_i$ contains only the identity. If $G=1$, the empty sum is zero, and the conclusion still holds.
>
> For example, in a tame Galois extension, $G_0$ has order $e$ and $G_i=1$ for $i\ge1$. The formula reduces to $s=e-1$, agreeing with the proved bound for the different in (2.6).

## Related Concepts

- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Different and Discriminant Ideals]]

- [[05 - Galois Theory/Concepts/Higher Ramification Groups and Herbrand Functions|Higher Ramification Groups and Herbrand Functions]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Different Ideals within Ideal Theory]]
- [[05 - Galois Theory/Concepts/Normal Subgroups and Extensions|Galois Groups and Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 2, printed p. 208, PDF p. 227]. This is an independent counting argument retaining the printed hint. The source image has $i\ge0$; the OCR omits the equality sign.
- **Hypotheses:** Finiteness of the extension and the discrete valuation assumptions are inherited from II §10 and III §2. Outside that setting, the integer exponent $s$ and the integer-indexed formula cannot simply be retained.
- **Routing:** The main step counts nonidentity elements in the ramification subgroup filtration, so the note is placed in Galois Theory. Differents and valuations are linked as prerequisites from other topics.
