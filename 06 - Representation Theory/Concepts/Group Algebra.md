---
title: Group Algebra
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - representation-theory
  - ring-theory
created: 2025-01-19
---

# Group Algebra

The group algebra is a fundamental construction that connects group theory with ring theory and enables the study of representations.

## Definition

> [!info] Definition (Group Algebra)
> Let $G$ be a group and $F$ a field. The **group algebra** $FG$ (or $F[G]$) is:
> - As a vector space: formal $F$-linear combinations of elements of $G$
> $$FG = \left\{ \sum_{g \in G} a_g \cdot g : a_g \in F, \text{ finitely many } a_g \neq 0 \right\}$$
> - Multiplication extends $G$-multiplication linearly:
> $$\left(\sum_g a_g g\right) \cdot \left(\sum_h b_h h\right) = \sum_{g,h} a_g b_h (gh)$$

## Properties

> [!tip] Basic Properties
> 1. $FG$ is an $F$-algebra (ring that's also an $F$-vector space)
> 2. $\dim_F FG = |G|$ (for finite $G$)
> 3. $FG$ is commutative iff $G$ is abelian
> 4. $G \hookrightarrow (FG)^*$ embeds as a subgroup of units

## Representations as Modules

> [!abstract] Key Correspondence
> $$\boxed{\text{Representations of } G \text{ over } F \longleftrightarrow FG\text{-modules}}$$
>
> Given $\rho: G \to GL(V)$, make $V$ an $FG$-module by:
> $$\left(\sum_g a_g g\right) \cdot v = \sum_g a_g \rho(g)(v)$$

This transforms representation theory into module theory.

## Structure Theorem

> [!abstract] Maschke + Wedderburn
> If $G$ is finite and $\text{char}(F) \nmid |G|$, then:
> $$FG \cong M_{n_1}(D_1) \times M_{n_2}(D_2) \times \cdots \times M_{n_k}(D_k)$$
> where $D_i$ are division algebras over $F$.
>
> Over $\mathbb{C}$: $D_i = \mathbb{C}$ and each factor corresponds to an irreducible representation.

## Examples

> [!example] Example 1: $\mathbb{C}[\mathbb{Z}/n\mathbb{Z}]$
> $$\mathbb{C}[\mathbb{Z}/n\mathbb{Z}] \cong \mathbb{C}[x]/(x^n - 1) \cong \mathbb{C}^n$$
> Isomorphism given by $n$ roots of unity.

> [!example] Example 2: $\mathbb{C}[S_3]$
> $$\mathbb{C}[S_3] \cong \mathbb{C} \times \mathbb{C} \times M_2(\mathbb{C})$$
> Corresponding to trivial, sign, and standard representations.
> Dimensions: $1 + 1 + 4 = 6 = |S_3|$ ✓

> [!example] Example 3: $\mathbb{R}[\mathbb{Z}/4\mathbb{Z}]$
> $$\mathbb{R}[\mathbb{Z}/4\mathbb{Z}] \cong \mathbb{R}[x]/(x^4 - 1) \cong \mathbb{R} \times \mathbb{R} \times \mathbb{C}$$
> Since $x^4 - 1 = (x-1)(x+1)(x^2+1)$.

## Center of Group Algebra

> [!info] Definition
> The **center** $Z(FG)$ consists of elements that commute with all of $FG$.
>
> **Basis**: Class sums $\hat{C} = \sum_{g \in C} g$ for conjugacy classes $C$.
> $$\dim Z(FG) = \text{number of conjugacy classes}$$

## Augmentation

> [!info] Augmentation Map
> The **augmentation** $\varepsilon: FG \to F$ is defined by:
> $$\varepsilon\left(\sum_g a_g g\right) = \sum_g a_g$$
>
> The **augmentation ideal** $I = \ker(\varepsilon)$ has basis $\{g - e : g \in G, g \neq e\}$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[Module Definition]]
