---
title: 'Exercise F132: Infinite Algebraic Extensions and the Separability Boundary of Completeness'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 1, printed p. 134, PDF p. 153
source_refs:
- S4/ch-II/sec-4/ex-1
created: '2026-10-23'
---

# Exercise F132: Infinite Algebraic Extensions and the Separability Boundary of Completeness

## Problem Statement

> [!question] Neukirch II.4.1
> An infinite algebraic extension of a complete field $K$ is never complete.

> [!warning] Source issue
> The assertion is false for general purely inseparable extensions. It is valid for infinite separable algebraic extensions of a nontrivially valued complete field. The counterexample below preserves this distinction instead of assuming characteristic zero silently.

## Hints

> [!hint]- Hint 1
> Check purely inseparable extensions before attempting the unrestricted statement.

> [!hint]- Hint 2
> In the separable case, use Krasner containment to see that elements of bounded degree form closed sets, then apply Baire category.

## Solution

> [!success]- Independent derivation and stated source corrections
> **Counterexample to the printed statement.** In characteristic $p$, let $k=\mathbb F_p(t_1,t_2,\ldots)$, where the variables are algebraically independent, and $K=k((T))$ with its $T$-adic valuation. Put $L=k^{1/p}((U))$ and embed $K$ by $T=U^p$. Every Laurent series $x\in L$ satisfies $x^p\in k((U^p))=K$, so $L/K$ is algebraic and purely inseparable of exponent one. It has infinite degree: for every $r$, the $p^r$ monomials $\prod_{j=1}^r t_j^{e_j/p}$ with $0\le e_j<p$ are linearly independent over $k$, by uniqueness of rational-function monomials after taking $p$-th powers. They remain independent over $k((T))$, by coefficient comparison in Laurent series. Both $K$ and $L$ are complete Laurent-series fields. Giving $U$ value $1/p$ makes the valuation of $L$ extend that of $K$. Thus an infinite complete algebraic extension does exist.
>
> **Corrected separable version.** Assume $K$ complete with a nontrivial nonarchimedean absolute value and $L/K$ algebraic separable. Suppose $L$ is complete. We import Baire's category theorem for complete metric spaces and the source's uniqueness of extension of the absolute value to finite extensions, (4.8), printed p. 131 / PDF p. 150.
>
> We first prove the containment used below. For separable $a\in L$, let $\delta$ be the minimum distance between $a$ and its other $K$-conjugates; if $a\in K$ containment is automatic. If $|a-b|<\delta$, pass to a finite normal closure of $K(a,b)/K$. Any automorphism $\sigma$ fixing $b$ preserves the unique extended absolute value, so $|\sigma a-b|=|a-b|$ and $|\sigma a-a|\le|a-b|<\delta$. Therefore $\sigma a=a$, and Galois correspondence gives $K(a)\subseteq K(b)$. This proves the needed Krasner lemma, without importing its later exercise.
>
> Let $E_n=\{x\in L:[K(x):K]\le n\}$. If a sequence in $E_n$ tends to $a\in L$, containment for a sufficiently close term gives $[K(a):K]\le n$. Thus every $E_n$ is closed, and $L=\bigcup_{n\ge1}E_n$. Baire gives a ball $B(a,r)\subset E_n$ for some $a,n,r$. For any $x\in L$, nontriviality provides $0\ne c\in K$ with $|cx|<r$. Both $a$ and $a+cx$ have degree at most $n$, so
> $$
> [K(x):K]\le[K(a,a+cx):K]\le n^2.
> $$
> Every finite subextension is simple by the separable primitive element theorem and hence has degree at most $n^2$. If $[L:K]>n^2$, choose $n^2+1$ independent elements; their finite generated subextension would exceed that bound. Thus $L/K$ is finite. The contrapositive proves the corrected assertion for infinite separable extensions. Archimedean complete fields are $\mathbb R$ or $\mathbb C$ and have no infinite algebraic extension, by the fundamental theorem of algebra.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 1, printed p. 134, PDF p. 153].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
