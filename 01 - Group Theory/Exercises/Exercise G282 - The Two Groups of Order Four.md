---
title: "Exercise G282: The Two Groups of Order Four"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - classification
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 2, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G282: The Two Groups of Order Four

## Problem Statement

> [!question] Exercise 2
> Show that there are two nonisomorphic groups of order $4$: the cyclic group and the product of two cyclic groups of order $2$.

## Hints

> [!hint]- Hint 1
> Split according to whether the group contains an element of order $4$.

## Solution

> [!success]- Solution
> Let $G$ have order $4$. If some $a\in G$ has order $4$, then $G=\langle a\rangle\cong C_4$.
>
> Otherwise every nonidentity element has order $2$. Choose distinct nonidentity elements $a,b$. Then $ab$ is neither $e$, $a$, nor $b$, so
>
> $$
> G=\{e,a,b,ab\}.
> $$
>
> By Exercise G281 the group is abelian, and the map
>
> $$
> C_2\times C_2\longrightarrow G,\qquad
> (i,j)\longmapsto a^i b^j
> $$
>
> is a bijective homomorphism. Thus $G\cong C_2\times C_2$.
>
> These two groups are not isomorphic: $C_4$ has an element of order $4$, whereas every nonidentity element of $C_2\times C_2$ has order $2$. Hence there are exactly two isomorphism classes.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source status:** The statement was visually checked at [S2, Ch. I, Ex. 2, printed p. 75, PDF p. 90]. The classification proof is independent.
