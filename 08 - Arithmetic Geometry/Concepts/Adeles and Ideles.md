---
title: Adèles and Idèles
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - number-theory
created: 2026-01-19
---

# Adèles and Idèles

## Motivation

The adèles package all completions of a number field into a single object, allowing us to study local-global phenomena systematically.

## Definition

> [!info] Definition (Adèle Ring)
> For a number field $K$, the **adèle ring** is:
> $$\mathbb{A}_K = \prod_v{}' K_v = \left\{(x_v) \in \prod_v K_v : x_v \in \mathcal{O}_v \text{ for almost all } v\right\}$$
> where the product runs over all places $v$ of $K$ (finite and infinite).

The prime notation $\prod'$ denotes the **restricted product**.

> [!info] Definition (Idèle Group)
> The **idèle group** is the unit group of the adèles:
> $$\mathbb{I}_K = \mathbb{A}_K^\times = \prod_v{}' K_v^\times = \left\{(x_v) \in \prod_v K_v^\times : x_v \in \mathcal{O}_v^\times \text{ for almost all } v\right\}$$

## For $K = \mathbb{Q}$

$$\mathbb{A}_\mathbb{Q} = \mathbb{R} \times \prod_p{}' \mathbb{Q}_p$$

An adèle $(x_\infty, x_2, x_3, x_5, \ldots)$ satisfies $x_p \in \mathbb{Z}_p$ for all but finitely many $p$.

## Key Properties

### Topology

| Object | Topology |
|--------|----------|
| $\mathbb{A}_K$ | Locally compact |
| $K \hookrightarrow \mathbb{A}_K$ | Discrete, cocompact |
| $\mathbb{I}_K$ | Locally compact |
| $K^\times \hookrightarrow \mathbb{I}_K$ | Discrete |

### Diagonal Embedding

$$K \hookrightarrow \mathbb{A}_K, \quad x \mapsto (x, x, x, \ldots)$$

> [!abstract] Theorem (Strong Approximation)
> $K$ is dense in $\mathbb{A}_K^S = \prod_{v \notin S} K_v$ for any finite set $S$ of places.

## Class Field Theory

### Idèle Class Group

> [!info] Definition
> The **idèle class group** is:
> $$C_K = \mathbb{I}_K / K^\times$$

> [!abstract] Theorem (Global Artin Map)
> There is a canonical surjection:
> $$\text{Art}: C_K \twoheadrightarrow \text{Gal}(K^{\text{ab}}/K)$$
> with kernel the connected component of the identity.

### Relationship to Classical Objects

| Adèlic Object | Classical Object |
|---------------|------------------|
| $\mathbb{I}_K / K^\times \cdot \prod_v \mathcal{O}_v^\times \cdot K_\infty^+$ | Class group $\text{Cl}(K)$ |
| $\prod_v \mathcal{O}_v^\times / \mathcal{O}_K^\times$ | Related to unit group |
| Content map $\mathbb{I}_K \to \mathbb{R}_{>0}$ | Norm map |

## Adèlic Points

> [!info] Definition (Adèlic Points)
> For a variety $X/K$:
> $$X(\mathbb{A}_K) = \prod_v{}' X(K_v)$$
> where the restricted product requires $x_v \in X(\mathcal{O}_v)$ for almost all $v$.

### Local-Global Principle

$$X(K) \neq \emptyset \stackrel{?}{\iff} X(\mathbb{A}_K) \neq \emptyset$$

- **Hasse-Minkowski**: True for quadratic forms
- **Fails in general**: Brauer-Manin obstruction

## Examples

> [!example] Example 1: Principal Adèles
> For $x = 2 \in \mathbb{Q}$:
> $$(2, 2, 2, 2, \ldots) \in \mathbb{A}_\mathbb{Q}$$
> Each component is $2 \in K_v$.

> [!example] Example 2: Non-principal Adèle
> $(1, 1, 1, \pi_5, 1, 1, \ldots)$ where $\pi_5 = 5 \in \mathbb{Q}_5$.
> This is in $\mathbb{A}_\mathbb{Q}$ but NOT of the form $(x, x, x, \ldots)$.

> [!example] Example 3: Idèle Class Group of $\mathbb{Q}$
> $$C_\mathbb{Q} = \mathbb{I}_\mathbb{Q} / \mathbb{Q}^\times \cong \mathbb{R}_{>0} \times \prod_p \mathbb{Z}_p^\times / \{\pm 1\}$$
> The quotient by the connected component gives the trivial group (since $\mathbb{Q}$ has class number 1).

## Tamagawa Measures

> [!info] Definition
> The **Tamagawa measure** on $\mathbb{A}_K$ is the product of local Haar measures, normalized so that $\mathcal{O}_v$ has measure 1 for finite places.

This leads to **Tamagawa numbers** measuring the volume of $G(\mathbb{A}_K)/G(K)$ for algebraic groups.

## L-functions

Adèlic methods unify L-functions:
- Tate's thesis: $\zeta(s)$ via adèlic integrals
- Automorphic representations: functions on $G(\mathbb{A}_K)$

$$\zeta_K(s) = \int_{\mathbb{I}_K} |x|^s d^\times x$$

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]]
