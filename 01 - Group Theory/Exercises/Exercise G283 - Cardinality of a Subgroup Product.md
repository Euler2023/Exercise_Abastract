---
title: "Exercise G283: Cardinality of a Subgroup Product"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - subgroups
  - counting
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 4, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G283: Cardinality of a Subgroup Product

## Problem Statement

> [!question] Exercise 4
> Let $H,K$ be subgroups of a finite group $G$, with $K\subseteq N_G(H)$. Show that
>
> $$
> |HK|=\frac{|H||K|}{|H\cap K|}.
> $$

## Hints

> [!hint]- Hint 1
> Count the fibers of the multiplication map $H\times K\to HK$.

## Solution

> [!success]- Solution
> Consider
>
> $$
> \mu:H\times K\longrightarrow HK,\qquad (h,k)\longmapsto hk.
> $$
>
> It is surjective by definition. Fix $hk\in HK$. If $h'k'=hk$, then
>
> $$
> h^{-1}h'=kk'^{-1}\in H\cap K.
> $$
>
> Conversely, every $t\in H\cap K$ gives another representation
>
> $$
> hk=(ht)(t^{-1}k).
> $$
>
> Hence the fiber over $hk$ is exactly
>
> $$
> \{(ht,t^{-1}k):t\in H\cap K\},
> $$
>
> and has cardinality $|H\cap K|$. All fibers have this size, so
>
> $$
> |H||K|=|HK|\,|H\cap K|,
> $$
>
> which gives the formula. The normalizer hypothesis ensures that $HK$ is itself a subgroup, although the cardinality formula holds for the product set of any two finite subgroups.

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Exercises/Exercise G93 - When a Product Set of Subgroups Is a Subgroup|Exercise G93]]

## Notes

- **Notation:** Lang writes the normalizer condition compactly; it is recorded here as $K\subseteq N_G(H)$.
- **Source status:** [S2, Ch. I, Ex. 4, printed p. 75, PDF p. 90]. The fiber count is independent.
