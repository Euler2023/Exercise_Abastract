---
title: "Exercise LA165: When the Orthogonal Group Splits as a Direct Product"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-groups
  - direct-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §1, Ex. 1.3, printed p. 150, PDF p. 162"
created: 2026-08-24
---

# Exercise LA165: When the Orthogonal Group Splits as a Direct Product

## Problem Statement

> [!question] Exercise 1.3
> Is $O_n$ isomorphic to the product group $SO_n\times\{\pm I\}$?

## Hints

> [!hint]- Hint 1
> Compare $\det(-I)=(-1)^n$ in odd and even dimensions.
>
> [!hint]- Hint 2
> For even $n$, compare centers (and treat $n=2$ separately if desired).

## Solution

> [!success]- Solution
> If $n$ is odd, $-I$ has determinant $-1$. Every $Q\in O_n$ is uniquely either $S$ or $-S$ with $S\in SO_n$. Since $-I$ is central, the map
>
> $$
> SO_n\times\{\pm I\}\longrightarrow O_n,\qquad (S,\varepsilon I)\longmapsto \varepsilon S
> $$
>
> is an isomorphism.
>
> If $n$ is even, then $-I\in SO_n$, so this multiplication map is not injective. In fact the groups are not abstractly isomorphic for $n\ge2$. For $n=2$, $SO_2\times C_2$ is abelian whereas $O_2$ is not. For even $n\ge4$, the center of $O_n$ is $\{\pm I\}$, while the center of $SO_n\times C_2$ contains $\{\pm I\}\times C_2$ and has at least four elements.
>
> Thus the asserted direct-product decomposition holds exactly when $n$ is odd (including $n=1$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

- **External standard input:** The elementary center calculation $Z(O_n)=\{\pm I\}$ for $n\ge2$ can be proved by commuting with coordinate reflections and permutations.
- **Source status:** [S1, Ch. 5, §1, Ex. 1.3, printed p. 150, PDF p. 162]; independent solution.
