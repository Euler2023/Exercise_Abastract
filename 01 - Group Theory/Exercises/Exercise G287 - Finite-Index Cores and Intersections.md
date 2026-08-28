---
title: "Exercise G287: Finite-Index Cores and Intersections"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - finite-index
  - group-actions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 9, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G287: Finite-Index Cores and Intersections

## Problem Statement

> [!question] Exercise 9
> **(a)** Let $H$ be a subgroup of finite index in a group $G$. Show that $H$ contains a normal subgroup $N\trianglelefteq G$ of finite index.
>
> **(b)** If $H_1,H_2\le G$ both have finite index, prove that $H_1\cap H_2$ has finite index.

## Hints

> [!hint]- Hint 1
> Let $G$ act on the finite set $G/H$ and take the kernel.

> [!hint]- Hint 2
> Map a coset modulo $H_1\cap H_2$ to a pair of cosets modulo $H_1$ and $H_2$.

## Solution

> [!success]- Solution
> **(a)** Let $n=[G:H]$ and let $G$ act by left translation on the set $G/H$ of left cosets. This gives a homomorphism
>
> $$
> \rho:G\longrightarrow S_n.
> $$
>
> Put $N=\ker\rho$. Then $N\trianglelefteq G$ and $[G:N]=|\operatorname{im}\rho|\le n!$, so $N$ has finite index. Since every element of $N$ fixes the coset $H$, it belongs to $H$. Equivalently,
>
> $$
> N=\bigcap_{g\in G}gHg^{-1},
> $$
>
> the core of $H$ in $G$.
>
> **(b)** The map of left-coset sets
>
> $$
> G/(H_1\cap H_2)\longrightarrow G/H_1\times G/H_2,
> \qquad
> g(H_1\cap H_2)\longmapsto(gH_1,gH_2)
> $$
>
> is well defined and injective: equality of both target cosets means $g^{-1}g'\in H_1\cap H_2$. The target is finite, hence the source is finite and
>
> $$
> [G:H_1\cap H_2]\le [G:H_1][G:H_2].
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 9, printed p. 75, PDF p. 90]. Both arguments are independent.
