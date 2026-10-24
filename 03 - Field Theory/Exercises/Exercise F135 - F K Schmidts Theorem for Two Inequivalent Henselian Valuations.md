---
title: 'Exercise F135: F K Schmidts Theorem for Two Inequivalent Henselian Valuations'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 3, printed p. 152, PDF p. 171
source_refs:
- S4/ch-II/sec-6/ex-3
created: '2026-10-23'
---

# Exercise F135: F K Schmidts Theorem for Two Inequivalent Henselian Valuations

## Problem Statement

> [!question] Neukirch II.6.3
> A field which is henselian with respect to two inequivalent valuations is separably closed (Theorem of F. K. Schmidt).

## Hints

> [!hint]- Hint 1
> Approximate the coefficients of a separable irreducible polynomial at the first valuation and those of a split simple polynomial at the second.

> [!hint]- Hint 2
> At the second valuation Hensel makes the perturbation split in K. At the first valuation root continuity and Krasner force a root of the original polynomial to lie in K.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Let $v,w$ be the two nontrivial inequivalent henselian valuations. A henselian valuation here is nonarchimedean, by Definition (6.1), printed p. 143 / PDF p. 162. Let $f\in K[X]$ be monic separable irreducible of degree $n$, with root $\alpha$. If $n=1$ there is nothing to prove. Otherwise choose $\delta>0$ smaller than the distances from $\alpha$ to all its other $K$-conjugates in the unique $v$-valued algebraic closure.
>
> Root continuity (II.6.1, independently proved by a product estimate) gives a positive bound on the coefficients ensuring that any monic $g$ that close to $f$ for $v$ has a root $\beta$ with $|\alpha-\beta|_v<\delta$. Choose distinct $c_1,\ldots,c_n\in K$, possible because a nontrivially valued field is infinite, and put $h=\prod(X-c_i)$. The simple-root form of Hensel's lemma for $w$ gives a positive coefficient bound such that a monic $g$ sufficiently $w$-close to $h$ has one $K$-root near each $c_i$. To see the hypothesis explicitly, each $h'(c_i)\ne0$; make $g(c_i)$ small and $g'(c_i)$ close to $h'(c_i)$, scale variable and polynomial to the valuation ring, and enforce $|g(c_i)|_w<|g'(c_i)|_w^2$. Choose disjoint root neighborhoods. The $n$ roots so obtained exhaust all roots of $g$, and all belong to $K$.
>
> Apply the approximation theorem (3.4), printed p. 117 / PDF p. 136, separately to each of the $n$ nonleading coefficients, with targets from $f$ at $v$ and from $h$ at $w$. It supplies such a monic $g\in K[X]$ satisfying both finite collections of strict bounds. Every root of $g$ lies in $K$, while its root $\beta$ selected at $v$ satisfies Krasner's strict bound. II.6.2 therefore gives $K(\alpha)\subseteq K(\beta)=K$, so $f$ has a root in $K$ and must have degree one. Every separable irreducible polynomial is linear, which is exactly separable closedness. The proof uses no completeness of either valuation.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 3, printed p. 152, PDF p. 171].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
