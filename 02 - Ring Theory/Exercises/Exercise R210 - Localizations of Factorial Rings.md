---
title: "Exercise R210: Localizations of Factorial Rings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - unique-factorization-domains
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 5, printed p. 115, PDF p. 130"
created: 2026-08-28
---

# Exercise R210: Localizations of Factorial Rings

## Problem Statement

> [!question] Exercise 5
> Let $A$ be a factorial ring and $S$ a multiplicative subset with $0\notin S$. Show that $S^{-1}A$ is factorial, and that the prime elements of $S^{-1}A$ are those primes $p$ of $A$ such that $(p)\cap S$ is empty.

## Hints

> [!hint]- Hint 1
> A prime $p$ of $A$ becomes a unit after localization exactly when some element of $S$ is divisible by $p$.

> [!hint]- Hint 2
> Factor the numerator of $a/s$ in $A$ and discard precisely the prime factors that become units.

## Solution

> [!success]- Solution
> Let $p$ be a prime element of $A$. If $(p)\cap S\ne\varnothing$, choose $s=pc\in S$. Then
>
> $$
> \frac p1\frac cs=1,
> $$
>
> so $p/1$ is a unit in $S^{-1}A$.
>
> Now suppose $(p)\cap S=\varnothing$. If $p/1$ divides $(a/s)(b/t)$, then there is a localization equality showing that $p$ divides $uab$ in $A$ for some $u\in S$. Since $p$ divides no element of $S$, it does not divide $u$. Primality in $A$ therefore gives $p\mid a$ or $p\mid b$, so $p/1$ divides $a/s$ or $b/t$. Thus $p/1$ remains prime.
>
> Take a nonzero element $a/s\in S^{-1}A$. Factor its numerator in the factorial ring $A$:
>
> $$
> a=u\prod_{j=1}^n p_j^{e_j},
> $$
>
> where $u$ is a unit and the $p_j$ are pairwise nonassociate primes. Since $s/1$ is a unit, $a/s$ is a unit times the same product in the localization. Every $p_j$ for which $(p_j)\cap S\ne\varnothing$ is also a unit and may be absorbed into the unit factor. All remaining $p_j/1$ are prime by the preceding paragraph. Hence every nonzero nonunit of $S^{-1}A$ factors into primes.
>
> Finally, any prime element of $S^{-1}A$ has such a factorization. Primality forces it to be associate to one of its non-inverted prime factors. Therefore, up to associates, the prime elements are exactly the images of primes $p$ of $A$ satisfying $(p)\cap S=\varnothing$. This proves that $S^{-1}A$ is factorial.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Associate convention:** The classification of prime elements is necessarily up to multiplication by units of $S^{-1}A$.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 5, printed p. 115, PDF p. 130]. The proof is independent.

