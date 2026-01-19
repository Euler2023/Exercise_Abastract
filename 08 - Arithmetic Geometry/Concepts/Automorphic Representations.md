---
title: Automorphic Representations
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - langlands
  - representation-theory
created: 2026-01-19
---

# Automorphic Representations

## Introduction

**Automorphic representations** are the central objects on one side of the Langlands correspondence. They provide a representation-theoretic framework for studying automorphic forms and encode deep arithmetic information.

## Setup

### The Adele Ring

> [!info] Definition (Adeles)
> The **adele ring** of a number field $K$ is:
> $$\mathbb{A}_K = \prod'_{v} K_v$$
>
> the restricted product over all places $v$ of $K$, where almost all components lie in the ring of integers $\mathcal{O}_v$.

For $K = \mathbb{Q}$:
$$\mathbb{A}_\mathbb{Q} = \mathbb{R} \times \prod'_p \mathbb{Q}_p$$

### The Adelic Group

For a reductive algebraic group $G$ over $K$:
$$G(\mathbb{A}_K) = \prod'_v G(K_v)$$

with $G(\mathcal{O}_v)$ as the local compact subgroups for almost all $v$.

## Definition

> [!info] Definition (Automorphic Representation)
> An **automorphic representation** of $G(\mathbb{A}_K)$ is an irreducible constituent of the right regular representation of $G(\mathbb{A}_K)$ on:
> $$L^2(G(K) \backslash G(\mathbb{A}_K))$$
>
> or more generally, on the space of automorphic forms $\mathcal{A}(G)$.

### Cuspidal Representations

> [!info] Definition (Cuspidal)
> An automorphic representation $\pi$ is **cuspidal** if for every proper parabolic subgroup $P = MN$:
> $$\int_{N(K) \backslash N(\mathbb{A}_K)} \phi(ng)\, dn = 0$$
>
> for all $\phi$ in the space of $\pi$ and all $g \in G(\mathbb{A}_K)$.

Cuspidal representations are the "atoms" from which other automorphic representations are built.

## Tensor Product Structure

> [!abstract] Theorem (Flath)
> Every irreducible admissible representation $\pi$ of $G(\mathbb{A}_K)$ decomposes as a **restricted tensor product**:
> $$\pi = \bigotimes'_v \pi_v$$
>
> where $\pi_v$ is an irreducible admissible representation of $G(K_v)$, and $\pi_v$ is **unramified** for almost all $v$.

### Local Components

| Place | Type | Representation |
|-------|------|----------------|
| Finite unramified | Spherical | $\pi_v^{G(\mathcal{O}_v)} \neq 0$ |
| Finite ramified | Non-spherical | Conductor $> 1$ |
| Archimedean (real) | $(\mathfrak{g}, K)$-module | Discrete series, principal series |
| Archimedean (complex) | $(\mathfrak{g}, K)$-module | Similar |

## Examples

### GL₁: Hecke Characters

> [!example] Automorphic representations of GL₁
> These are exactly **Hecke characters** (or Größencharaktere):
> $$\chi: K^\times \backslash \mathbb{A}_K^\times \to \mathbb{C}^\times$$
>
> - Dirichlet characters are examples over $\mathbb{Q}$
> - Class field theory: these correspond to 1-dimensional Galois representations

### GL₂: Modular Forms

> [!example] Automorphic representations of GL₂
> For $G = \text{GL}_2$ over $\mathbb{Q}$:
>
> | Modular Object | Automorphic Representation |
> |----------------|---------------------------|
> | Newform $f \in S_k(\Gamma_0(N))$ | Cuspidal $\pi_f$ |
> | Eisenstein series | Non-cuspidal |
> | Maass form | Cuspidal (weight 0) |
>
> The newform $f = \sum a_n q^n$ determines $\pi_f = \otimes' \pi_v$ where:
> - For $p \nmid N$: $\pi_p$ is unramified, Satake parameter determined by $a_p$
> - For $p \mid N$: $\pi_p$ is ramified
> - At $\infty$: $\pi_\infty$ is a discrete series of weight $k$

### GLₙ: Isobaric Sums

> [!example] Non-cuspidal automorphic representations
> General automorphic representations of $\text{GL}_n$ are **isobaric sums**:
> $$\pi = \pi_1 \boxplus \pi_2 \boxplus \cdots \boxplus \pi_k$$
>
> where $\pi_i$ are cuspidal representations of $\text{GL}_{n_i}$ with $\sum n_i = n$.

## L-Functions

### Standard L-Function

> [!info] Definition
> The **standard L-function** of an automorphic representation $\pi = \otimes' \pi_v$ is:
> $$L(s, \pi) = \prod_v L(s, \pi_v)$$
>
> where the local factors $L(s, \pi_v)$ are defined via the Langlands classification.

### For GL₂

For a newform $f$ with $\pi_f$:
$$L(s, \pi_f) = \sum_{n=1}^\infty \frac{a_n}{n^s} = \prod_p L_p(s, \pi_{f,p})$$

where for unramified $p$:
$$L_p(s, \pi_{f,p}) = \frac{1}{1 - a_p p^{-s} + p^{k-1-2s}}$$

### Analytic Properties

> [!abstract] Theorem (Godement-Jacquet)
> For cuspidal $\pi$ on $\text{GL}_n$:
> 1. $L(s, \pi)$ extends to an entire function
> 2. Satisfies a functional equation relating $s$ and $1-s$
> 3. Bounded in vertical strips

## Classification

### Langlands Classification

> [!abstract] Theorem (Langlands)
> Irreducible admissible representations of $G(F)$ (local field) are classified by:
> $$\pi \longleftrightarrow (M, \sigma, \nu)$$
>
> - $M$: Levi subgroup
> - $\sigma$: tempered representation of $M$
> - $\nu$: positive character
>
> $\pi$ is the unique irreducible quotient of $\text{Ind}_P^G(\sigma \otimes \nu)$.

### For GL_n

| Type | Description |
|------|-------------|
| **Supercuspidal** | Doesn't appear in any parabolic induction |
| **Tempered** | Matrix coefficients in $L^{2+\epsilon}$ |
| **Generic** | Has a Whittaker model |
| **Square-integrable** | Matrix coefficients in $L^2$ |

## Multiplicity One

> [!abstract] Theorem (Multiplicity One for GLₙ)
> For $G = \text{GL}_n$:
> 1. **Strong multiplicity one**: If $\pi, \pi'$ are cuspidal with $\pi_v \cong \pi'_v$ for almost all $v$, then $\pi = \pi'$
> 2. Cuspidal representations appear with multiplicity one in $L^2_{\text{cusp}}$

This fails for other groups, leading to Arthur's work on **endoscopy**.

## The Automorphic Spectrum

```
                   L²(G(K)\G(𝔸))
                        │
          ┌─────────────┴─────────────┐
          │                           │
    Discrete spectrum         Continuous spectrum
          │                           │
    ┌─────┴─────┐                  Eisenstein
    │           │                   series
 Cuspidal    Residual
```

### Decomposition

$$L^2(G(K) \backslash G(\mathbb{A}_K)) = L^2_{\text{disc}} \oplus L^2_{\text{cont}}$$

where $L^2_{\text{disc}}$ decomposes discretely into irreducibles.

## Connection to Langlands Program

### The Correspondence

> [!abstract] Langlands Reciprocity (for GLₙ)
> There should be a bijection:
> $$\{\text{Cuspidal automorphic } \pi \text{ of } \text{GL}_n(\mathbb{A}_K)\} \longleftrightarrow \{\text{$n$-dim irreducible motives over } K\}$$
>
> matching L-functions: $L(s, \pi) = L(s, M)$.

### What's Known

| $n$ | Status |
|-----|--------|
| 1 | Class field theory (complete) |
| 2 | Many cases (modularity, Serre's conjecture) |
| $n$ | Local Langlands proved; global open |

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Forms|Automorphic Forms]]
- [[08 - Arithmetic Geometry/Concepts/Local Langlands Correspondence|Local Langlands Correspondence]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
