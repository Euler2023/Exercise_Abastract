---
title: Partial Fraction Decomposition
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - partial-fractions
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, §12.2, Ex. 2.5, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Partial Fraction Decomposition

## Definition

> [!info] Definition
> Let $F$ be a field and suppose a denominator splits as
>
> $$
> g(x)=c\prod_{j=1}^{s}(x-a_j)^{m_j}
> $$
>
> with distinct $a_j\in F$. A partial fraction decomposition of $f/g$ is an expression
>
> $$
> \frac{f(x)}{g(x)}
> =q(x)+\sum_{j=1}^{s}\sum_{i=1}^{m_j}
> \frac{c_{j,i}}{(x-a_j)^i},
> $$
>
> where $q\in F[x]$ and $c_{j,i}\in F$.

## Intuition

Polynomial division separates the behavior at infinity into $q(x)$. The remaining proper fraction is then separated by its finitely many poles; the powers $(x-a_j)^{-i}$ record the order and coefficients of the pole at $a_j$.

## Key Properties

- The decomposition exists whenever the denominator splits into linear factors over the coefficient field.
- It is unique after like poles and powers are collected.
- Existence follows from polynomial division and Bézout identities for pairwise coprime powers $(x-a_j)^{m_j}$.
- Uniqueness follows by isolating the highest-order term at each pole.
- Over $\mathbb C$, every nonzero denominator splits, so every rational function admits such a decomposition.

## Examples

> [!example] Two simple poles
> The identity
>
> $$
> \frac{1}{x(x-1)}
> =-\frac1x+\frac1{x-1}
> $$
>
> separates the poles at $0$ and $1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Exercises

~~~dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
~~~

## Source and Proof Status

- The decomposition problem and the $\mathbb C(x)$ basis application occur in [S1, Ch. 12, §12.2, Ex. 2.5, printed p. 379, PDF p. 391].
- The definition, existence route, uniqueness argument, and example here are independent exposition based on standard polynomial division and Bézout identities.

