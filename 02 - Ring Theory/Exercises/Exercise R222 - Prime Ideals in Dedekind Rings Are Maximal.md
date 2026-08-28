---
title: "Exercise R222: Prime Ideals in Dedekind Rings Are Maximal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - prime-ideals
  - maximal-ideals
  - chinese-remainder-theorem
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 18, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R222: Prime Ideals in Dedekind Rings Are Maximal

## Problem Statement

> [!question] Exercise 18
> Let $\mathfrak o$ be a Dedekind ring. Prove that every nonzero prime ideal $\mathfrak p$ is maximal. In particular, if $\mathfrak p_1,\ldots,\mathfrak p_n$ are distinct primes, then the Chinese remainder theorem applies to their powers
>
> $$
> \mathfrak p_1^{r_1},\ldots,\mathfrak p_n^{r_n}.
> $$
>
> Use this to prove Exercise II.19.

## Hints

> [!hint]- Hint 1
> If $\mathfrak p\subseteq\mathfrak m$, set $\mathfrak c=\mathfrak p\mathfrak m^{-1}$ and use primeness of $\mathfrak p$.

> [!hint]- Hint 2
> Distinct maximal ideals are comaximal. Raise an equation $x+y=1$ to a sufficiently high power to prove that their powers are comaximal.

## Solution

> [!success]- Solution
> Let $\mathfrak p\subseteq\mathfrak m\subsetneq\mathfrak o$, where $\mathfrak m$ is an ideal. Put
>
> $$
> \mathfrak c=\mathfrak p\mathfrak m^{-1}.
> $$
>
> The inclusion $\mathfrak p\subseteq\mathfrak m$ gives $\mathfrak c\subseteq\mathfrak o$, and
>
> $$
> \mathfrak p=\mathfrak m\mathfrak c.
> $$
>
> Since $\mathfrak p$ is prime, either $\mathfrak m\subseteq\mathfrak p$ or $\mathfrak c\subseteq\mathfrak p$. In the first case $\mathfrak m=\mathfrak p$. In the second case,
>
> $$
> \mathfrak p=\mathfrak m\mathfrak c
> \subseteq\mathfrak m\mathfrak p
> \subseteq\mathfrak p,
> $$
>
> so $\mathfrak m\mathfrak p=\mathfrak p$. Cancelling the invertible ideal $\mathfrak p$ gives $\mathfrak m=\mathfrak o$, contrary to the assumption that $\mathfrak m$ is proper. Therefore no proper ideal strictly contains $\mathfrak p$, and $\mathfrak p$ is maximal.
>
> Distinct primes $\mathfrak p_i,\mathfrak p_j$ are now distinct maximal ideals, so
>
> $$
> \mathfrak p_i+\mathfrak p_j=\mathfrak o.
> $$
>
> Choose $x\in\mathfrak p_i$ and $y\in\mathfrak p_j$ with $x+y=1$. In the expansion of $(x+y)^{r_i+r_j-1}$, every term contains either at least $r_i$ factors of $x$ or at least $r_j$ factors of $y$. Hence
>
> $$
> 1\in\mathfrak p_i^{r_i}+\mathfrak p_j^{r_j},
> $$
>
> so the powers are pairwise comaximal. The Chinese remainder theorem therefore gives
>
> $$
> \mathfrak o\Big/\prod_{i=1}^n\mathfrak p_i^{r_i}
> \cong
> \prod_{i=1}^n\mathfrak o/\mathfrak p_i^{r_i},
> $$
>
> together with
>
> $$
> \bigcap_{i=1}^n\mathfrak p_i^{r_i}
> =\prod_{i=1}^n\mathfrak p_i^{r_i}.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source convention:** The reminder $\mathfrak p\ne(0)$ is essential because the zero ideal of a nonfield domain is prime but not maximal.
- **Continuation:** The printed exercise ends with “Use this to prove:” and Exercise II.19 follows immediately. The present note preserves that dependency without merging the two numbered exercises.
- **Source status:** The maximality statement, prime-power CRT conclusion, and pointer to II.19 were visually checked at [S2, Ch. II, Ex. 18, printed p. 116, PDF p. 131]. The proof is independent.

