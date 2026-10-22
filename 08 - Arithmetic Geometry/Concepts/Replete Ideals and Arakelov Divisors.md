---
title: Replete Ideals and Arakelov Divisors
aliases:
  - Replete Ideals
  - Replete Divisors
  - Arakelov Divisors
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.3)–(1.6), printed pp. 185–188, PDF pp. 204–207"
source_status: verified-bounded
---

# Replete Ideals and Arakelov Divisors

## Definition

> [!info] Replete ideal and divisor
> For a number field $K$, a replete ideal consists of a nonzero fractional ideal together with positive real components at its infinite places. The associated divisor group has integral coefficients at finite places and real coefficients at infinite places. Quotienting principal divisors gives $CH^1$; multiplicative ideal notation gives the replete Picard group.

## Intuition

The infinite components record the sizes ignored by ordinary fractional ideals. Neukirch calls these objects **replete**; they are commonly called Arakelov ideals or divisors. The notation $\overline{\mathcal O}_K$ here is not an algebraic closure of a ring.

## Key Properties

- At infinity the additive divisor valuation uses $-\log$ of the usual real or complex modulus. The prime norms carry the real/complex weights: $\log N(\mathfrak p)=1$ or $2$.
- The degree is $\deg D=\sum n_{\mathfrak p}\log N(\mathfrak p)$. The product formula makes principal divisors have degree zero.
- For an embedding $\tau:K\to L$, pushforward weights by residue degrees $f$ and pullback by ramification indices $e$.
- The book's unmodified infinite-place convention has $e(\mathbb C/\mathbb R)=1$, $f(\mathbb C/\mathbb R)=2$. Changing archimedean metrics later changes this convention; do not mix the two setups.
- Push-pull is $[L:K]$, pushforward preserves degree, and pullback multiplies degree by $[L:K]$.

## Examples

For $K=\mathbb Q$, every replete ideal class has a unique representative with trivial finite ideal and positive infinite component $r$. Its norm is $r$, giving $\operatorname{Pic}(\overline{\mathbb Z})\cong\mathbb R_{>0}$, whereas the ordinary ideal class group of $\mathbb Z$ is trivial.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.3)–(1.6), printed pp. 185–188, PDF pp. 204–207. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.
