---
title: 'Exercise R418: Prime Factorization of Ideal Numbers'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 1, printed p. 493, PDF p. 512
source_refs:
- S4/ch-VII/sec-7/ex-1
created: '2026-10-23'
---

# Exercise R418: Prime Factorization of Ideal Numbers

## Problem Statement

> [!question] Neukirch VII.7.1
> Define ideal prime numbers and show that unique prime factorization holds in $\widehat K^*$.

## Hints

> [!hint]- Hint 1
> Use the ideal map from the exact sequence (7.1) and lift each nonzero prime ideal to an ideal number.

> [!hint]- Hint 2
> After matching all prime-ideal valuations, the quotient lies in the kernel, which is $\mathfrak o^*$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The source constructs a multiplicative group $\widehat K^*$ with a surjective ideal map $a\mapsto(a)$ and exact sequence
> $$
> 1\longrightarrow\mathfrak o^*\longrightarrow\widehat K^*\longrightarrow J\longrightarrow1.
> $$
> Its integral ideal numbers are $\widehat{\mathfrak o}=\{a:(a)\subseteq\mathfrak o\}$, and $a\sim b$ means $a/b\in K^*$. This multiplicative set is not generally a ring. Sums below are formed only among elements in a common $K$-multiple, where ordinary addition is defined.
>
> Call $\pi\in\widehat{\mathfrak o}$ an **ideal prime number** if $(\pi)$ is a nonzero prime ideal of $\mathfrak o$. Surjectivity of the ideal map supplies at least one $\pi_{\mathfrak p}$ over each prime ideal $\mathfrak p$; any two choices over the same prime differ by a unit.
>
> For $a\in\widehat K^*$, unique factorization of fractional ideals gives
> $$
> (a)=\prod_{\mathfrak p}\mathfrak p^{n_{\mathfrak p}},\qquad n_{\mathfrak p}\in\mathbb Z,
> $$
> with finite support. The element $u=a\prod_{\mathfrak p}\pi_{\mathfrak p}^{-n_{\mathfrak p}}$ maps to the unit ideal, so $u\in\mathfrak o^*$. Consequently
> $$
> a=u\prod_{\mathfrak p}\pi_{\mathfrak p}^{n_{\mathfrak p}}.
> $$
> If another expression is given, applying the ideal map makes every prime exponent agree. The remaining quotient is a unit. Thus factorization is unique up to order and multiplication of prime factors by units. For integral $a$ all exponents are nonnegative; for arbitrary $a\in\widehat K^*$ negative exponents must be allowed.
>
> This definition also has the divisibility property expected of primes: $\pi_{\mathfrak p}\mid ab$ exactly when $v_{\mathfrak p}((a))+v_{\mathfrak p}((b))\ge1$, so for integral $a,b$ at least one valuation is positive, and $\pi_{\mathfrak p}$ divides that factor. Conversely, a nonunit integral ideal number whose ideal has at least two prime factors counting multiplicity splits into two nonunits by lifting one factor. Hence these are precisely the irreducibles of the integral multiplicative monoid.
>
> For example, an ordinary element may generate the square of a nonprincipal prime ideal. Its ideal number factorization has two copies of a prime lift even though that prime lift does not belong to $K^*$. This is exactly the purpose of enlarging from $K^*$ to $\widehat K^*$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

- **Source status:** The complete one-line exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 1, printed p. 493, PDF p. 512]. The ideal-number construction and all notations were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Proposition (7.1) and following definitions, printed pp. 485–486, PDF pp. 504–505]; the residue classes and Proposition (7.3) at [printed p. 487, PDF p. 506]. The source's hats denote ideal numbers, not a completion. No source figure is required.
- **Proof scope:** Independent lift of the proved Dedekind factorization theorem. “Unique factorization” here refers to this multiplicative group/monoid; it does not assert that the ideal integers form a unique factorization domain under addition.
