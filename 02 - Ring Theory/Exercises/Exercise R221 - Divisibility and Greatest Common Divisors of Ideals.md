---
title: "Exercise R221: Divisibility and Greatest Common Divisors of Ideals"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - ideal-divisibility
  - greatest-common-divisors
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 17, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R221: Divisibility and Greatest Common Divisors of Ideals

## Problem Statement

> [!question] Exercise 17
> In a Dedekind ring $\mathfrak o$, say that $\mathfrak a\mid\mathfrak b$ if there is an ideal $\mathfrak c$ such that $\mathfrak b=\mathfrak a\mathfrak c$. Prove:
>
> **(a)** $\mathfrak a\mid\mathfrak b$ if and only if $\mathfrak b\subseteq\mathfrak a$.
>
> **(b)** For ideals $\mathfrak a,\mathfrak b$, the sum $\mathfrak a+\mathfrak b$ is their greatest common divisor. In particular, $\mathfrak a$ and $\mathfrak b$ are relatively prime if and only if $\mathfrak a+\mathfrak b=\mathfrak o$.

## Hints

> [!hint]- Hint 1
> If $\mathfrak b\subseteq\mathfrak a$, consider $\mathfrak a^{-1}\mathfrak b$.

## Solution

> [!success]- Solution
> **(a)** If $\mathfrak b=\mathfrak a\mathfrak c$ for an integral ideal $\mathfrak c$, then $\mathfrak c\subseteq\mathfrak o$, so
>
> $$
> \mathfrak b=\mathfrak a\mathfrak c
> \subseteq\mathfrak a\mathfrak o
> =\mathfrak a.
> $$
>
> Conversely, suppose $\mathfrak b\subseteq\mathfrak a$. Multiplying by the inverse fractional ideal $\mathfrak a^{-1}$ gives
>
> $$
> \mathfrak c=\mathfrak a^{-1}\mathfrak b
> \subseteq\mathfrak a^{-1}\mathfrak a
> =\mathfrak o.
> $$
>
> Thus $\mathfrak c$ is an integral ideal, and
>
> $$
> \mathfrak a\mathfrak c
> =\mathfrak a\mathfrak a^{-1}\mathfrak b
> =\mathfrak b.
> $$
>
> Hence $\mathfrak a\mid\mathfrak b$.
>
> **(b)** Since
>
> $$
> \mathfrak a\subseteq\mathfrak a+\mathfrak b,
> \qquad
> \mathfrak b\subseteq\mathfrak a+\mathfrak b,
> $$
>
> part (a) shows that $\mathfrak a+\mathfrak b$ divides both $\mathfrak a$ and $\mathfrak b$. If $\mathfrak d$ is any common divisor, then
>
> $$
> \mathfrak a\subseteq\mathfrak d,
> \qquad
> \mathfrak b\subseteq\mathfrak d,
> $$
>
> and therefore $\mathfrak a+\mathfrak b\subseteq\mathfrak d$. Part (a) now gives
>
> $$
> \mathfrak d\mid(\mathfrak a+\mathfrak b).
> $$
>
> Thus $\mathfrak a+\mathfrak b$ is a greatest common divisor in the divisibility order. The only units in the monoid of integral ideals are represented by $\mathfrak o$, so the ideals are relatively prime exactly when their greatest common divisor is $\mathfrak o$, equivalently when $\mathfrak a+\mathfrak b=\mathfrak o$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Order reversal:** Ideal divisibility reverses inclusion; this is the central distinction from element divisibility.
- **Source status:** Both parts were visually checked at [S2, Ch. II, Ex. 17, printed p. 116, PDF p. 131]. The proof is independent.

