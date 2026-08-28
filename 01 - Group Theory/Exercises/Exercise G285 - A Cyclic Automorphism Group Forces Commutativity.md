---
title: "Exercise G285: A Cyclic Automorphism Group Forces Commutativity"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - centers
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 7, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G285: A Cyclic Automorphism Group Forces Commutativity

## Problem Statement

> [!question] Exercise 7
> Let $G$ be a group such that $\operatorname{Aut}(G)$ is cyclic. Prove that $G$ is abelian.

## Hints

> [!hint]- Hint 1
> The inner automorphism group is a subgroup of $\operatorname{Aut}(G)$.

> [!hint]- Hint 2
> Use $\operatorname{Inn}(G)\cong G/Z(G)$ and the fact that a cyclic quotient by the center forces commutativity.

## Solution

> [!success]- Solution
> Every subgroup of a cyclic group is cyclic, so
>
> $$
> \operatorname{Inn}(G)\le\operatorname{Aut}(G)
> $$
>
> is cyclic. The conjugation homomorphism $G\to\operatorname{Inn}(G)$ has kernel $Z(G)$, hence
>
> $$
> G/Z(G)\cong\operatorname{Inn}(G)
> $$
>
> is cyclic. Choose $g\in G$ whose coset generates $G/Z(G)$. Every $x,y\in G$ can then be written
>
> $$
> x=g^m z,\qquad y=g^n w
> $$
>
> with $z,w\in Z(G)$. Centrality of $z,w$ gives
>
> $$
> xy=g^{m+n}zw=g^{n+m}wz=yx.
> $$
>
> Thus $G$ is abelian.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Exercises/Exercise G188 - Automorphism Groups and Inner Automorphisms|Exercise G188]]
- [[01 - Group Theory/Exercises/Exercise G196 - A Cyclic Quotient by the Center Forces Abelianity|Exercise G196]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 7, printed p. 75, PDF p. 90]. The proof is independent.
