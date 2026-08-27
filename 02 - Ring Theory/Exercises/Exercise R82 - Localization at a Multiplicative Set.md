---
title: "Exercise R82: Localization at a Multiplicative Set"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - fractions
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §7, Ex. 7.5, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R82: Localization at a Multiplicative Set

## Problem Statement

> [!question] Exercise 7.5
> Let $S$ be a multiplicatively closed subset of a domain $R$ with $0\notin S$. Define $S$-fractions $a/b$ with $b\in S$. Show that their equivalence classes form a ring.

## Hints

> [!hint]- Hint 1
> Declare $a/b=c/d$ when $ad=bc$, then check that addition and multiplication do not depend on representatives.

## Solution

> [!success]- Solution
> Define $(a,b)\sim(c,d)$ when $ad=bc$. Because $R$ is a domain and $b,d\ne0$, this is an equivalence relation. On classes define
>
> $$
> \frac ab+\frac cd=\frac{ad+bc}{bd},
> \qquad
> \frac ab\frac cd=\frac{ac}{bd}.
> $$
>
> Since $S$ is multiplicatively closed, $bd\in S$. If equivalent representatives are substituted, cross-multiplication shows the resulting sums and products remain equivalent. The ring laws follow from those of $R$; $0/1$ and $1/1$ are the identities and $-a/b$ is the additive inverse. This ring is the localization $S^{-1}R$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Hypothesis boundary:** For a general ring with zero divisors, the usual localization relation needs a multiplier from $S$; the simplified cross-multiplication criterion here uses the domain hypothesis.
- **Source status:** The problem is from [S1, Ch. 11, §7, Ex. 7.5, printed p. 357, PDF p. 369]. The construction is independent.
