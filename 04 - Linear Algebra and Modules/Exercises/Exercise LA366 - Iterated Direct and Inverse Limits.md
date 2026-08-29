---
title: "Exercise LA366: Iterated Direct and Inverse Limits"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - direct-limits
  - inverse-limits
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 20, printed p. 170, PDF p. 185"
created: 2026-08-29
---

# Exercise LA366: Iterated Direct and Inverse Limits

## Problem Statement

> [!question] Exercise 20
> Let $I,J$ be two directed sets, and give the product $I\times J$ the ordering
>
> $$
> (i,j)\le(i',j')
> \quad\Longleftrightarrow\quad
> i\le i'\text{ and }j\le j'.
> $$
>
> Let $A_{ij}$ be a family of abelian groups, with homomorphisms indexed by $I\times J$, and forming a directed family. Show that the direct limits
>
> $$
> \varinjlim_i\varinjlim_j A_{ij}
> \qquad\text{and}\qquad
> \varinjlim_j\varinjlim_i A_{ij}
> $$
>
> exist and are isomorphic in a natural way. State and prove the same result for inverse limits.

## Hints

> [!hint]- Hint 1
> First observe that $I\times J$ is directed. Compare each iterated limit with the single limit over $I\times J$.

> [!hint]- Hint 2
> A map out of either iterated direct limit is the same thing as a family of maps $A_{ij}\to X$ compatible in both indices. For inverse limits, reverse all arrows and use compatible cones $X\to A_{ij}$.

## Solution

> [!success]- Independently derived solution
> The product poset is directed: given $(i,j)$ and $(i',j')$, choose $i''\ge i,i'$ in $I$ and $j''\ge j,j'$ in $J$. Then $(i'',j'')$ is an upper bound in $I\times J$.
>
> **Direct limits.** Fix $i$ and form
>
> $$
> B_i=\varinjlim_jA_{ij}.
> $$
>
> The transition maps in the $i$-direction induce maps $B_i\to B_{i'}$ whenever $i\le i'$, so $(B_i)$ is a directed system. Let $X$ be any abelian group. By the universal property, a homomorphism
>
> $$
> \varinjlim_iB_i\longrightarrow X
> $$
>
> is equivalent to a compatible family $B_i\to X$. For each fixed $i$, such a map is in turn equivalent to a compatible family $A_{ij}\to X$ as $j$ varies. Compatibility of the maps $B_i\to X$ in the $i$-direction says exactly that the full family
>
> $$
> A_{ij}\longrightarrow X
> $$
>
> is compatible with every transition map indexed by $I\times J$. Consequently $\varinjlim_iB_i$ has the universal property of $\varinjlim_{(i,j)\in I\times J}A_{ij}$.
>
> Reversing the order in which the same argument is applied gives
>
> $$
> \varinjlim_i\varinjlim_jA_{ij}
> \cong
> \varinjlim_{(i,j)\in I\times J}A_{ij}
> \cong
> \varinjlim_j\varinjlim_iA_{ij}.
> $$
>
> The isomorphisms are natural because they are the unique maps carrying every canonical image of $A_{ij}$ to the corresponding canonical image.
>
> **Inverse limits.** Now suppose $(A_{ij})$ is an inverse system over $I\times J$. Put
>
> $$
> C_i=\varprojlim_jA_{ij}.
> $$
>
> The transition maps in the $i$-direction make $(C_i)$ an inverse system. A homomorphism
>
> $$
> X\longrightarrow\varprojlim_iC_i
> $$
>
> is equivalent first to a compatible family $X\to C_i$ and then to a family $X\to A_{ij}$ compatible in both indices. This is precisely a cone from $X$ to the inverse system over $I\times J$. Therefore
>
> $$
> \varprojlim_i\varprojlim_jA_{ij}
> \cong
> \varprojlim_{(i,j)\in I\times J}A_{ij}
> \cong
> \varprojlim_j\varprojlim_iA_{ij},
> $$
>
> again naturally.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Naturality:** No choice of representatives enters the construction. Both comparison maps are forced by the universal properties and commute with every morphism of doubly indexed systems.
- **Source status:** The product order, both iterated direct limits, and the request for the inverse-limit analogue were visually checked at [S2, Ch. III, Ex. 20, printed p. 170, PDF p. 185]. The proof is independent.

