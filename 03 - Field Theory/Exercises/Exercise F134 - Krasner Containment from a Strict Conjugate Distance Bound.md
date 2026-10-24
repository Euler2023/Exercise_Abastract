---
title: 'Exercise F134: Krasner Containment from a Strict Conjugate Distance Bound'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 2, printed p. 152, PDF p. 171
source_refs:
- S4/ch-II/sec-6/ex-2
created: '2026-10-23'
---

# Exercise F134: Krasner Containment from a Strict Conjugate Distance Bound

## Problem Statement

> [!question] Neukirch II.6.2
> Let $\alpha\in\overline K$ be separable over $K$ and $\alpha=\alpha_1,\ldots,\alpha_n$ its conjugates over $K$. If $\beta\in\overline K$ satisfies $|\alpha-\beta|<|\alpha-\alpha_i|$ for $i=2,\ldots,n$, then $K(\alpha)\subseteq K(\beta)$.

## Hints

> [!hint]- Hint 1
> The ambient field $K$ is henselian, as in this section; automorphisms preserve its unique extended valuation.

> [!hint]- Hint 2
> Any automorphism fixing $\beta$ must fix $\alpha$, or the ultrametric inequality contradicts the strict bound.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Retain the section hypothesis that $K$ is henselian. By (6.2), printed p. 144 / PDF p. 163, its valuation has a unique extension to $\overline K$. For every $K$-automorphism $\sigma$ of the closure, composing the valuation with $\sigma$ gives another extension, hence the same one. If $\sigma$ fixes $\beta$, then
> $$
> |\sigma\alpha-\beta|=|\sigma(\alpha-\beta)|=|\alpha-\beta|,
> \qquad
> |\sigma\alpha-\alpha|\le\max\{|\sigma\alpha-\beta|,|\beta-\alpha|\}=|\alpha-\beta|.
> $$
> If $\sigma\alpha\ne\alpha$, it would be one of the other conjugates and violate the strict inequality. Thus every automorphism fixing $K(\beta)$ fixes $\alpha$.
>
> To conclude without a hidden separability assumption on $\beta$, note that $\alpha$ is separable over $K(\beta)$ because its minimal polynomial there divides a separable polynomial over $K$. If its degree over $K(\beta)$ were greater than one, one of the distinct embeddings of $K(\alpha,\beta)$ fixing $K(\beta)$ would move $\alpha$; that embedding extends to an automorphism of an algebraic closure (the extension theorem for embeddings of algebraic extensions). This contradicts what was just proved. Therefore the degree is one. If $n=1$, $\alpha\in K$ and the conclusion is immediate. Strictness is essential: an equal-distance competing conjugate is not excluded by the ultrametric argument.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 2, printed p. 152, PDF p. 171].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
