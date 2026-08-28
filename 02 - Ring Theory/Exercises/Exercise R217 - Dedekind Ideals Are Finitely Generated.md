---
title: "Exercise R217: Dedekind Ideals Are Finitely Generated"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - fractional-ideals
  - finitely-generated-ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 13, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R217: Dedekind Ideals Are Finitely Generated

## Problem Statement

> [!question] Exercise 13
> Let $\mathfrak o$ be a Dedekind ring and let $K$ be its quotient field. Ideals are understood to be nonzero unless otherwise specified. Prove that every ideal is finitely generated.
>
> **Hint.** Given an ideal $\mathfrak a$, let $\mathfrak b$ be the fractional ideal such that $\mathfrak a\mathfrak b=\mathfrak o$. Write
>
> $$
> 1=\sum_{i=1}^n a_ib_i
> $$
>
> with $a_i\in\mathfrak a$ and $b_i\in\mathfrak b$. Show that $\mathfrak a=(a_1,\ldots,a_n)$.

## Hints

> [!hint]- Hint 1
> For $x\in\mathfrak a$, each coefficient $xb_i$ belongs to $\mathfrak o$.

## Solution

> [!success]- Solution
> By the Dedekind-ring definition used by Lang, the nonzero fractional ideal $\mathfrak a$ has an inverse $\mathfrak b=\mathfrak a^{-1}$ satisfying
>
> $$
> \mathfrak a\mathfrak b=\mathfrak o.
> $$
>
> Since $1$ belongs to the product ideal, it is a finite sum of products:
>
> $$
> 1=\sum_{i=1}^n a_ib_i,
> \qquad
> a_i\in\mathfrak a,
> \quad
> b_i\in\mathfrak b.
> $$
>
> Let $x\in\mathfrak a$. Because $\mathfrak b=\mathfrak a^{-1}$, every product $xb_i$ lies in $\mathfrak o$. Multiplying the displayed identity by $x$ gives
>
> $$
> x=\sum_{i=1}^n(xb_i)a_i.
> $$
>
> Thus $x\in(a_1,\ldots,a_n)$, proving $\mathfrak a\subseteq(a_1,\ldots,a_n)$. The reverse inclusion holds because every $a_i$ lies in $\mathfrak a$. Therefore
>
> $$
> \mathfrak a=(a_1,\ldots,a_n),
> $$
>
> and $\mathfrak a$ is finitely generated.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

- **Consequence:** Since every ideal is finitely generated, $\mathfrak o$ is Noetherian; this ascending-chain condition is used in Exercise II.14.
- **Source status:** The statement and hint were visually checked at [S2, Ch. II, Ex. 13, printed p. 116, PDF p. 131]. The proof follows the printed hint and is independently completed.

