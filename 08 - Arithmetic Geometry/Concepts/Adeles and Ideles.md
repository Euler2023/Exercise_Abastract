---
title: Adèles and Idèles
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - number-theory
created: 2026-01-19
source: "Serge Lang, Algebraic Number Theory, 2nd ed., Ch. VII, printed pp. 137–154, PDF pp. 146–163; Chs. X–XI, printed pp. 197–228, PDF pp. 204–233"
source_status: partially-verified
status: not-started
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
> If $S$ is a nonempty finite set of places, then the diagonal image of $K$ is dense in the restricted adèle ring away from $S$,
> $$
> \mathbb A_K^S=\prod_{v\notin S}'K_v.
> $$

## Class Field Theory

### Idèle Class Group

> [!info] Definition
> The **idèle class group** is:
> $$C_K = \mathbb{I}_K / K^\times$$

> [!abstract] Theorem (Global Artin Map)
> Global reciprocity induces a canonical topological isomorphism
> $$
> C_K/C_K^0\xrightarrow{\sim}\operatorname{Gal}(K^{\mathrm{ab}}/K),
> $$
> where $C_K^0$ is the identity component. Equivalently, the reciprocity map on $C_K$ has kernel $C_K^0$.

### Relationship to Classical Objects

| Adèlic Object | Classical Object |
|---------------|------------------|
| $\mathbb{I}_K / K^\times \cdot \prod_v \mathcal{O}_v^\times \cdot K_\infty^+$ | Class group $\text{Cl}(K)$ |
| $\prod_v \mathcal{O}_v^\times / \mathcal{O}_K^\times$ | Related to unit group |
| Content map $\mathbb{I}_K \to \mathbb{R}_{>0}$ | Norm map |

## Adèlic Points

> [!info] Definition (Adèlic Points)
> For a variety $X/K$:
> After choosing an integral model at almost all finite places, one writes
> $$
> X(\mathbb{A}_K) = \prod_v{}' X(K_v),
> $$
> with $x_v\in X(\mathcal O_v)$ for almost all $v$.

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
> Splitting off the idèlic norm gives an identification
> $$
> C_\mathbb Q\cong \mathbb R_{>0}\times\widehat{\mathbb Z}^{\times}.
> $$
> Hence $C_\mathbb Q/C_\mathbb Q^0\cong\widehat{\mathbb Z}^{\times}$, not the trivial group. Class number one concerns a different quotient and does not make the full idèle class group trivial.

## Haar and Tamagawa Measures

> [!info] Definition
> A standard additive Haar measure on $\mathbb A_K$ is assembled from local Haar measures, often normalized by $\operatorname{vol}(\mathcal O_v)=1$ at almost all finite places.

Tamagawa measures on algebraic groups require compatible invariant differential forms and convergence factors; their normalization is not exhausted by the preceding additive convention. Tamagawa numbers measure the resulting volume of $G(\mathbb A_K)/G(K)$ when defined.

## L-functions

Adèlic methods unify L-functions:
- Tate's thesis: $\zeta(s)$ via adèlic integrals
- Automorphic representations: functions on $G(\mathbb{A}_K)$

For a Schwartz–Bruhat function $\Phi$ on $\mathbb A_K$, Tate's zeta integral has the form
$$
Z(\Phi,s)=\int_{\mathbb A_K^\times}\Phi(x)|x|^s\,d^\times x.
$$
Suitable choices and factorizations recover completed zeta and Hecke $L$-functions; the integral without the test function generally diverges.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The restricted-product definitions, idèle classes, and class-field-theoretic framework were checked against Lang's Chapters VII and X–XI. The sections on varieties, Brauer–Manin obstructions, automorphic representations, and Tamagawa numbers go beyond those bounded slices and remain external inputs. The displayed reciprocity statements are summaries, not source-contained proofs.
