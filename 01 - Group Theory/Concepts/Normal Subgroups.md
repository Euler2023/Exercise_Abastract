---
title: Normal Subgroups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
created: 2025-01-19
---

# Normal Subgroups

## Definition

> [!info] Definition (Normal Subgroup)
> A [[01 - Group Theory/Concepts/Subgroups|subgroup]] $N$ of $G$ is **normal**, written $N \trianglelefteq G$, if for all $g \in G$:
> $$gNg^{-1} = N$$
> Equivalently: $gN = Ng$ for all $g \in G$ (left cosets equal right cosets).

## Equivalent Conditions

> [!tip] Equivalent Characterizations
> For $N \leq G$, the following are equivalent:
>
> 1. $N \trianglelefteq G$
> 2. $gNg^{-1} = N$ for all $g \in G$
> 3. $gNg^{-1} \subseteq N$ for all $g \in G$
> 4. $gng^{-1} \in N$ for all $g \in G$, $n \in N$
> 5. $gN = Ng$ for all $g \in G$
> 6. $N$ is a union of conjugacy classes
> 7. $N = \ker(\phi)$ for some homomorphism [[01 - Group Theory/Concepts/Group Homomorphisms|homomorphism]] $\phi$

## Key Properties

1. **Trivial normal subgroups**: $\{e\} \trianglelefteq G$ and $G \trianglelefteq G$ for any group $G$
2. **Subgroups of [[01 - Group Theory/Concepts/Abelian Groups|abelian groups]]**: If $G$ is [[01 - Group Theory/Concepts/Abelian Groups|abelian]], then every subgroup is normal
3. **Kernel is normal**: $\ker(\phi) \trianglelefteq G$ for any homomorphism [[01 - Group Theory/Concepts/Group Homomorphisms|homomorphism]] $\phi: G \to H$
4. **Index 2**: Any subgroup of index 2 is normal
5. **Intersection**: If $N_i \trianglelefteq G$ for all $i$, then $\bigcap_i N_i \trianglelefteq G$

## Examples

> [!example] Example 1: $A_n \trianglelefteq S_n$
> The alternating group is normal in $S_n$ because $[S_n : A_n] = 2$.

> [!example] Example 2: $SL_n(F) \trianglelefteq GL_n(F)$
> $SL_n(F) = \ker(\det)$, so it's normal as a kernel.

> [!example] Example 3: Center
> The center $Z(G) = \{z \in G : zg = gz \text{ for all } g \in G\}$ is always normal.

## Non-Examples

> [!warning] Non-Example: $\langle (12) \rangle$ in $S_3$
> $H = \{e, (12)\}$ is **not** normal in $S_3$:
> - $(23)(12)(23)^{-1} = (23)(12)(23) = (13) \notin H$

## Simple Groups

> [!info] Definition (Simple Group)
> A group $G$ is **simple** if its only normal subgroups are $\{e\}$ and $G$.

Examples of simple groups:
- $\mathbb{Z}/p\mathbb{Z}$ for prime $p$
- $A_n$ for $n \geq 5$
- Many finite simple groups (classified completely)

## Related Concepts

- [[01 - Group Theory/Concepts/Subgroups|Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
