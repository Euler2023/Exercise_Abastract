---
title: 'Exercise F133: Continuity of Polynomial Roots in a Henselian Field'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 1, printed p. 152, PDF p. 171
source_refs:
- S4/ch-II/sec-6/ex-1
created: '2026-10-23'
---

# Exercise F133: Continuity of Polynomial Roots in a Henselian Field

## Problem Statement

> [!question] Neukirch II.6.1
> In a henselian field the zeroes of a polynomial are continuous functions of its coefficients. More precisely, let $f(x)\in K[x]$ be monic of degree $n$, with decomposition $f(x)=\prod_{i=1}^r(x-\alpha_i)^{m_i}$, $m_i\ge1$, $\alpha_i\ne\alpha_j$ for $i\ne j$. If a monic polynomial $g(x)$ of degree $n$ has all coefficients sufficiently close to those of $f(x)$, then it has $r$ roots $\beta_1,\ldots,\beta_r$ approximating $\alpha_1,\ldots,\alpha_r$ to any prescribed precision.

## Hints

> [!hint]- Hint 1
> For a fixed root $\alpha_i$, coefficient closeness makes $g(\alpha_i)$ small.

> [!hint]- Hint 2
> Factor $g$ in a common algebraic closure. If all roots had distance at least $\delta$ from $\alpha_i$, their product would have absolute value at least $\delta^n$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Fix the unique extension of the henselian absolute value to an algebraic closure, supplied by (6.2), printed p. 144 / PDF p. 163. Given the required precision, choose $\delta>0$ less than that precision and less than every nonzero $|\alpha_i-\alpha_j|$. Choose $\eta>0$ with
> $$
> \eta\max_{1\le i\le r,\ 0\le j<n}|\alpha_i|^j<\delta^n.
> $$
> Here $|\alpha_i|^0=1$, including zero roots. If every coefficient difference between $g$ and $f$ has absolute value less than $\eta$, then the ultrametric inequality gives $|g(\alpha_i)|=|g(\alpha_i)-f(\alpha_i)|<\delta^n$.
>
> Write $g(x)=\prod_{j=1}^n(x-\gamma_j)$ in the closure, counting multiplicities. If all $|\alpha_i-\gamma_j|\ge\delta$, the product formula for $g(\alpha_i)$ would contradict this bound. Therefore choose $\beta_i$ among its roots with $|\alpha_i-\beta_i|<\delta$. The balls around the distinct $\alpha_i$ are disjoint: a point in two would give $|\alpha_i-\alpha_j|<\delta$ by the ultrametric inequality. Hence the $r$ chosen roots are distinct and give the requested approximation.
>
> This is continuity of the roots as a multivalued set in the algebraic closure, not a global ordering of roots. If $f$ has distinct simple roots already in $K$, coefficient closeness can also ensure roots of $g$ in $K$: at each root $a$, $f'(a)\ne0$; choose the perturbation so that the scaled simple-root Hensel inequality holds for $g(a),g'(a)$. Hensel then gives one $K$-root in each disjoint ball. Repeated $K$-roots need not remain $K$-rational: $x^2+p^{2m+1}$ is arbitrarily close to $x^2$ over $\mathbb Q_p$ but has no $\mathbb Q_p$-root.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 1, printed p. 152, PDF p. 171].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
- The algebraic-closure reading of “roots” is essential at repeated roots. The product estimate proves the exact r-root conclusion, without claiming multiplicity-preserving K-rational branches.
