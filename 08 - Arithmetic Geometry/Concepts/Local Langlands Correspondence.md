---
title: Local Langlands Correspondence
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - langlands
  - representation-theory
  - p-adic
created: 2026-01-19
---

# Local Langlands Correspondence

## Introduction

The **local Langlands correspondence** (LLC) is a fundamental result/conjecture relating representations of $p$-adic groups to Galois representations. Unlike the global Langlands correspondence, the local version is now a theorem for many important groups.

## Setup

### Local Fields

Let $F$ be a **local field**:
- **Non-archimedean**: $\mathbb{Q}_p$, finite extensions, $\mathbb{F}_q((t))$
- **Archimedean**: $\mathbb{R}$, $\mathbb{C}$

### The Weil Group

> [!info] Definition (Weil Group)
> The **Weil group** $W_F$ of a local field $F$ fits in:
> $$1 \to I_F \to W_F \to \mathbb{Z} \to 0$$
>
> where $I_F$ is the inertia group and $\mathbb{Z} \cong \text{Gal}(\overline{\mathbb{F}}_q / \mathbb{F}_q)$ via Frobenius.
>
> For $p$-adic $F$: $W_F \subset \text{Gal}(\overline{F}/F)$ is a dense subgroup.

### Weil-Deligne Representations

> [!info] Definition
> A **Weil-Deligne representation** of $W_F$ is a pair $(\rho, N)$ where:
> - $\rho: W_F \to \text{GL}(V)$ is a smooth representation
> - $N: V \to V$ is nilpotent (the **monodromy operator**)
> - $\rho(w) N \rho(w)^{-1} = |w| N$ for all $w \in W_F$

These capture the "motivic" Galois representations at a prime.

## The Correspondence for GLₙ

### Statement

> [!abstract] Theorem (Local Langlands for GLₙ)
> **(Harris-Taylor 2001, Henniart 2000)**
>
> There is a canonical bijection:
> $$\text{rec}_F: \mathcal{A}_n(F) \xrightarrow{\sim} \mathcal{G}_n(F)$$
>
> where:
> - $\mathcal{A}_n(F)$ = isomorphism classes of irreducible smooth representations of $\text{GL}_n(F)$
> - $\mathcal{G}_n(F)$ = isomorphism classes of $n$-dimensional Frobenius-semisimple Weil-Deligne representations

### Characterization

The correspondence is uniquely characterized by:

1. **L-function matching**:
$$L(s, \pi \times \pi') = L(s, \text{rec}(\pi) \otimes \text{rec}(\pi'))$$

2. **ε-factor matching**:
$$\varepsilon(s, \pi \times \pi', \psi) = \varepsilon(s, \text{rec}(\pi) \otimes \text{rec}(\pi'), \psi)$$

3. **Compatibility with class field theory** for $n = 1$

4. **Central character**: $\omega_\pi = \det \circ \text{rec}(\pi)$ via class field theory

## Examples

### n = 1: Local Class Field Theory

> [!example] GL₁ case
> The correspondence is the **local Artin map**:
> $$F^\times \xrightarrow{\sim} W_F^{\text{ab}}$$
>
> Characters of $F^\times$ ↔ 1-dimensional Weil representations

### n = 2: Examples

> [!example] Unramified representations
> For $\pi$ unramified (spherical), $\text{rec}(\pi)$ is unramified:
> $$\text{rec}(\pi)(\text{Frob}) = \begin{pmatrix} \alpha & 0 \\ 0 & \beta \end{pmatrix}$$
>
> where $\alpha, \beta$ are the Satake parameters of $\pi$.

> [!example] Steinberg representation
> The Steinberg representation $\text{St}$ corresponds to:
> $$\text{rec}(\text{St}) = \left( \begin{pmatrix} |\cdot|^{1/2} & 0 \\ 0 & |\cdot|^{-1/2} \end{pmatrix}, N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \right)$$

> [!example] Supercuspidal representations
> Supercuspidal $\pi$ ↔ irreducible Weil representations (no monodromy)

### Classification Table

| $\pi$ on $\text{GL}_2(F)$ | Weil-Deligne rep | Type |
|---------------------------|------------------|------|
| Unramified principal series | Unramified, $N=0$ | Split |
| Ramified principal series | Ramified, $N=0$ | Characters |
| Steinberg (twisted) | $N \neq 0$ | Non-semisimple |
| Supercuspidal | Irreducible, $N=0$ | Induced from $W_E$ |

## General Reductive Groups

### Langlands Parameters

> [!info] Definition (L-parameter)
> A **Langlands parameter** (or L-parameter) for a reductive group $G$ over $F$ is a homomorphism:
> $$\phi: W_F \times \text{SL}_2(\mathbb{C}) \to {}^L G$$
>
> satisfying certain conditions (admissibility).

The $\text{SL}_2(\mathbb{C})$ factor encodes the monodromy (Jacobson-Morozov).

### L-Packets

> [!info] Definition (L-packet)
> An **L-packet** $\Pi_\phi$ is the (finite) set of irreducible representations of $G(F)$ conjecturally associated to an L-parameter $\phi$.

For $\text{GL}_n$: L-packets are singletons (multiplicity one).
For other groups: L-packets can have multiple elements.

### The Conjecture

> [!abstract] Local Langlands Conjecture (General)
> There should be a partition:
> $$\{\text{Irred. smooth reps of } G(F)\} = \bigsqcup_\phi \Pi_\phi$$
>
> where $\phi$ ranges over L-parameters.

### Status

| Group | Status |
|-------|--------|
| $\text{GL}_n$ | **Theorem** (Harris-Taylor, Henniart) |
| $\text{SL}_n$ | **Theorem** |
| $\text{SO}_n$, $\text{Sp}_{2n}$ | **Theorem** (Arthur 2013) |
| $\text{GSp}_4$ | **Theorem** (Gan-Takeda) |
| $G_2$ | Known |
| Exceptional groups | Partial results |
| General $G$ | Conjectural |

## Supercuspidal Representations

### Characterization

> [!info] Definition
> $\pi$ is **supercuspidal** if it doesn't appear as a subquotient of any parabolically induced representation.

Under LLC:
- Supercuspidal $\pi$ ↔ irreducible L-parameter (image not in proper parabolic)

### Construction

Supercuspidals are constructed via:
1. **Compact induction** from open compact subgroups
2. **Type theory** (Bushnell-Kutzko)
3. **Yu's construction** (general reductive groups)

## Depth and Conductors

### Depth

> [!info] Definition
> The **depth** of a representation $\pi$ measures its ramification:
> $$\text{depth}(\pi) = \min\{r : \pi^{G_r} \neq 0\}$$
>
> where $G_r$ is the Moy-Prasad filtration.

### Conductor

Under LLC, depth corresponds to **Artin conductor**:
$$\text{depth}(\pi) \leftrightarrow \text{conductor of } \text{rec}(\pi)$$

## Archimedean Case

### Real Case

For $F = \mathbb{R}$:
- $W_\mathbb{R} = \mathbb{C}^\times \cup j\mathbb{C}^\times$ where $j^2 = -1$
- Irreducible reps of $\text{GL}_n(\mathbb{R})$ ↔ $n$-dimensional representations of $W_\mathbb{R}$

### Complex Case

For $F = \mathbb{C}$:
- $W_\mathbb{C} = \mathbb{C}^\times$
- The correspondence is simpler (Langlands classification)

## Applications

### To Global Langlands

Local LLC is a key ingredient in:
- Proving global cases (modularity theorems)
- Understanding local-global compatibility
- Computing local factors of L-functions

### To Representation Theory

- Classification of representations
- Character formulas
- Branching rules

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Representations|Automorphic Representations]]
- [[08 - Arithmetic Geometry/Concepts/L-Groups and Langlands Dual|L-Groups and Langlands Dual]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
