---
title: Automorphic Forms
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - langlands
  - modular-forms
created: 2026-01-19
---

# Automorphic Forms

## Introduction

**Automorphic forms** generalize classical modular forms to arbitrary reductive groups and number fields. They are functions on adelic groups satisfying transformation laws, growth conditions, and eigenfunction properties.

## Classical Motivation

### Modular Forms as Automorphic Forms

A classical modular form $f: \mathbb{H} \to \mathbb{C}$ of weight $k$ for $\text{SL}_2(\mathbb{Z})$ can be reinterpreted as a function:
$$\phi_f: \text{GL}_2(\mathbb{Q}) \backslash \text{GL}_2(\mathbb{A}_\mathbb{Q}) \to \mathbb{C}$$

The transformation law $f(\gamma \tau) = (c\tau + d)^k f(\tau)$ becomes invariance under $\text{GL}_2(\mathbb{Q})$.

## General Definition

> [!info] Definition (Automorphic Form)
> An **automorphic form** on a reductive group $G$ over a number field $K$ is a function:
> $$\phi: G(K) \backslash G(\mathbb{A}_K) \to \mathbb{C}$$
>
> satisfying:
> 1. **Left $G(K)$-invariance**: $\phi(\gamma g) = \phi(g)$ for $\gamma \in G(K)$
> 2. **Right $K_\infty$-finiteness**: $\phi$ generates a finite-dimensional space under right translation by $K_\infty$ (maximal compact at infinity)
> 3. **$\mathfrak{z}$-finiteness**: $\phi$ is annihilated by an ideal of finite codimension in the center $\mathfrak{z}$ of $U(\mathfrak{g}_\infty)$
> 4. **Moderate growth**: $|\phi(g)| \leq C \|g\|^N$ for some $C, N$
> 5. **Smoothness**: Smooth at archimedean places, locally constant at finite places

## Key Properties

### Types of Automorphic Forms

| Type | Condition |
|------|-----------|
| **Cusp form** | Constant term vanishes along all parabolics |
| **Square-integrable** | $\phi \in L^2(G(K) \backslash G(\mathbb{A}_K))$ |
| **Rapidly decreasing** | $\|\phi(g)\| \cdot \|g\|^N \to 0$ for all $N$ |

### Cuspidality Condition

> [!info] Definition (Cusp Form)
> $\phi$ is a **cusp form** if for every proper parabolic $P = MN$:
> $$\phi_N(g) := \int_{N(K) \backslash N(\mathbb{A}_K)} \phi(ng)\, dn = 0$$

## Structure

### Fourier Expansion

For $G = \text{GL}_2$, automorphic forms have Fourier expansions generalizing $q$-expansions:
$$\phi(g) = \sum_{\xi} W_\xi(g)$$

where $W_\xi$ are **Whittaker functions**.

### Hecke Operators

Automorphic forms are eigenfunctions of **Hecke operators** $T_v$ at almost all places $v$:
$$T_v \phi = \lambda_v \phi$$

The eigenvalues $\lambda_v$ encode arithmetic information.

## Examples

### GL₁: Hecke Characters

> [!example] Automorphic forms on GL₁
> $$\phi: K^\times \backslash \mathbb{A}_K^\times \to \mathbb{C}$$
>
> These are **Hecke characters** (Größencharaktere).
> - Finite-order characters ↔ Dirichlet characters
> - Algebraic Hecke characters ↔ CM motives

### GL₂ over ℚ

> [!example] Classical modular forms
> For $f \in M_k(\Gamma_0(N), \chi)$:
>
> Define $\phi_f: \text{GL}_2(\mathbb{A}_\mathbb{Q}) \to \mathbb{C}$ by:
> $$\phi_f(g) = f(g_\infty \cdot i) \cdot j(g_\infty, i)^{-k} \cdot \chi_{\text{fin}}(\det g_{\text{fin}})$$
>
> where $j(g, z) = cz + d$ is the automorphy factor.

| Classical | Adelic |
|-----------|--------|
| Weight $k$ | Representation of $K_\infty = \text{SO}(2)$ |
| Level $N$ | Invariance under $K_0(N)$ at finite places |
| Nebentypus $\chi$ | Central character |

### Siegel Modular Forms

> [!example] Genus 2
> Automorphic forms on $\text{GSp}_4$ generalize to Siegel modular forms of degree 2.
>
> $$f: \mathbb{H}_2 \to \mathbb{C}$$
>
> where $\mathbb{H}_2 = \{Z \in M_2(\mathbb{C}) : Z = Z^t, \text{Im}(Z) > 0\}$ is the Siegel upper half-space.

### Hilbert Modular Forms

> [!example] Totally real fields
> For a totally real field $K$ of degree $n$, automorphic forms on $\text{GL}_2/K$ give **Hilbert modular forms**:
> $$f: \mathbb{H}^n \to \mathbb{C}$$

### Maass Forms

> [!example] Non-holomorphic forms
> **Maass forms** are eigenfunctions of the hyperbolic Laplacian:
> $$\Delta f = \lambda f$$
>
> These correspond to automorphic representations with non-trivial archimedean component (principal series, not discrete series).

## Eisenstein Series

> [!info] Definition
> For a parabolic $P = MN$ and a character $\chi$ of $M(\mathbb{A}_K)$:
> $$E(g, \chi, s) = \sum_{\gamma \in P(K) \backslash G(K)} \chi(\gamma g) |\det(\gamma g)|^s$$
>
> **Eisenstein series** are non-cuspidal automorphic forms.

### Properties
- Meromorphic continuation in $s$
- Functional equations
- Residues at poles give other automorphic forms

## Whittaker Models

> [!info] Definition
> A **Whittaker function** for $\pi$ with respect to a character $\psi$ of $N(\mathbb{A}_K)$ is:
> $$W(g) = \int_{N(K) \backslash N(\mathbb{A}_K)} \phi(ng) \overline{\psi(n)}\, dn$$
>
> The space of Whittaker functions is the **Whittaker model** $\mathcal{W}(\pi, \psi)$.

### Multiplicity One

> [!abstract] Theorem
> For $\text{GL}_n$, the Whittaker model is unique:
> $$\dim \text{Hom}_{N(\mathbb{A})}(\pi, \psi) \leq 1$$
>
> Representations with non-zero Whittaker model are called **generic**.

## Automorphic Forms and L-Functions

### Standard L-Function

For a cusp form $\phi$ generating $\pi$:
$$L(s, \pi) = \prod_v L(s, \pi_v)$$

### Rankin-Selberg L-Functions

For two automorphic representations $\pi, \pi'$ of $\text{GL}_n, \text{GL}_m$:
$$L(s, \pi \times \pi') = \prod_v L(s, \pi_v \times \pi'_v)$$

### Integral Representations

> [!abstract] Rankin-Selberg Method
> L-functions can often be expressed as integrals:
> $$L(s, \pi \times \pi') = \int_{G(K) \backslash G(\mathbb{A}_K)} \phi(g) \phi'(g) E(g,s)\, dg$$
>
> This is fundamental for proving analytic properties.

## Adelization Dictionary

| Classical | Adelic |
|-----------|--------|
| $\mathbb{H}$ | $G(\mathbb{A}) / K_\infty K_{\text{fin}}$ |
| $\Gamma \backslash \mathbb{H}$ | $G(K) \backslash G(\mathbb{A}) / K_\infty K_{\text{fin}}$ |
| Transformation law | Left $G(K)$-invariance |
| Weight | $K_\infty$-type |
| Level | $K_{\text{fin}}$-fixed vectors |
| Nebentypus | Central character |
| Hecke eigenvalues | Satake parameters |

## Connection to Modular Forms Chapter

The concepts here generalize:
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms]] → Automorphic forms on $\text{GL}_2/\mathbb{Q}$
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]] → Cuspidal automorphic forms
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]] → Adelic Eisenstein series
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]] → Adelic Hecke algebra

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Representations|Automorphic Representations]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
