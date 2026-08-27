---
title: "Exercise Rep69: Conjugate Representations of an Index Two Subgroup"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.12, printed p. 317, PDF p. 329"
created: 2026-08-27
---

# Exercise Rep69: Conjugate Representations of an Index Two Subgroup

## Problem Statement

> [!question] Exercise 4.12
> Let $H$ be a subgroup of index $2$ of a group $G$, and let $\sigma:H\to GL(V)$ be a representation. Let $a\in G\setminus H$. Define $\sigma':H\to GL(V)$ by $\sigma'(h)=\sigma(a^{-1}ha)$. Prove that **(a)** $\sigma'$ is a representation of $H$; **(b)** if $\sigma$ is the restriction to $H$ of a representation of $G$, then $\sigma'\cong\sigma$; **(c)** replacing $a$ by another element outside $H$ gives an isomorphic conjugate representation.

## Hints

> [!hint]- Hint 1
> An index-two subgroup is normal.

## Solution

> [!success]- Solution
> Since $H\triangleleft G$, conjugation by $a$ maps $H$ to itself, and
>
> $$
> \sigma'(h_1h_2)=\sigma(a^{-1}h_1aa^{-1}h_2a)=\sigma'(h_1)\sigma'(h_2),
> $$
>
> proving (a). If $\sigma=\rho|_H$ for $\rho:G\to GL(V)$, then
>
> $$
> \sigma'(h)=\rho(a)^{-1}\sigma(h)\rho(a),
> $$
>
> so $\rho(a)$ is an intertwining isomorphism, proving (b). If $b\notin H$, then $b=ha$ for some $h\in H$. The conjugate defined with $b$ is
>
> $$
> \sigma(b^{-1}kb)=\sigma(a^{-1}h^{-1}kha),
> $$
>
> which is conjugate to $\sigma'(k)$ by $\sigma(a^{-1}ha)$; hence it is isomorphic to $\sigma'$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** [S1, Ch. 10, §4, Ex. 4.12, printed p. 317, PDF p. 329]; the proof is independent.

