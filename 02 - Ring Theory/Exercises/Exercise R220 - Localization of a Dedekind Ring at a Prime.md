---
title: "Exercise R220: Localization of a Dedekind Ring at a Prime"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - localization
  - local-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 16, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R220: Localization of a Dedekind Ring at a Prime

## Problem Statement

> [!question] Exercise 16
> Let $\mathfrak o$ be a Dedekind ring and $\mathfrak p$ a nonzero prime ideal. Let $\mathfrak o_{\mathfrak p}$ be the local ring at $\mathfrak p$. Show that $\mathfrak o_{\mathfrak p}$ is Dedekind and has only one nonzero prime ideal.

## Hints

> [!hint]- Hint 1
> Every fractional ideal of $\mathfrak o_{\mathfrak p}$ is the localization of a fractional ideal of $\mathfrak o$.

> [!hint]- Hint 2
> Prime ideals of a localization correspond to primes of the original ring that avoid the multiplicative set.

## Solution

> [!success]- Solution
> Put $S=\mathfrak o\setminus\mathfrak p$. By II.13, $\mathfrak o$ is Noetherian, and therefore its localization $\mathfrak o_{\mathfrak p}=S^{-1}\mathfrak o$ is Noetherian.
>
> Let $\mathfrak A$ be a nonzero fractional ideal of $\mathfrak o_{\mathfrak p}$ in the common quotient field $K$. After multiplying by a nonzero element of $\mathfrak o_{\mathfrak p}$, it becomes an integral ideal, hence is finitely generated. Thus $\mathfrak A$ itself is generated over $\mathfrak o_{\mathfrak p}$ by finitely many elements $x_1,\ldots,x_n\in K$. Put
>
> $$
> \mathfrak a=\mathfrak ox_1+\cdots+\mathfrak ox_n.
> $$
>
> Clearing the finitely many denominators shows that $\mathfrak a$ is a fractional ideal of $\mathfrak o$, and by construction
>
> $$
> \mathfrak A=S^{-1}\mathfrak a.
> $$
>
> Since $\mathfrak o$ is Dedekind, $\mathfrak a$ has an inverse and
>
> $$
> \mathfrak a\mathfrak a^{-1}=\mathfrak o.
> $$
>
> Localizing gives
>
> $$
> (S^{-1}\mathfrak a)(S^{-1}\mathfrak a^{-1})
> =S^{-1}\mathfrak o
> =\mathfrak o_{\mathfrak p}.
> $$
>
> Hence every nonzero fractional ideal of $\mathfrak o_{\mathfrak p}$ is invertible, so this local ring is Dedekind in Lang's sense.
>
> A nonzero prime ideal of $S^{-1}\mathfrak o$ is $S^{-1}\mathfrak q$ for a nonzero prime $\mathfrak q$ of $\mathfrak o$ disjoint from $S$. Disjointness means $\mathfrak q\subseteq\mathfrak p$. By the comparison lemma in II.14, comparable nonzero prime ideals in a Dedekind ring are equal. Thus $\mathfrak q=\mathfrak p$. Therefore
>
> $$
> \mathfrak p\mathfrak o_{\mathfrak p}
> $$
>
> is the only nonzero prime ideal of $\mathfrak o_{\mathfrak p}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Zero-prime convention:** Because $\mathfrak o_{\mathfrak p}$ is a domain, $(0)$ is also prime in the modern unrestricted terminology. Lang's chapter-exercise convention excludes the zero ideal, so “only one prime ideal” here means only one nonzero prime ideal.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 16, printed p. 116, PDF p. 131]. The proof is independent and uses II.13-II.14.

