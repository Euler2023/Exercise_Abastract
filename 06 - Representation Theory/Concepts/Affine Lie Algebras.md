---
title: Affine Lie Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
  - infinite-dimensional
created: 2026-01-19
---

# Affine Lie Algebras

## Introduction

Affine Lie algebras are the most important class of infinite-dimensional Kac-Moody algebras. They arise as central extensions of loop algebras and play a fundamental role in conformal field theory, string theory, and the theory of modular forms.

## Construction

### Loop Algebra

> [!info] Definition
> Let $\mathfrak{g}$ be a finite-dimensional simple Lie algebra. The **loop algebra** is:
> $$L(\mathfrak{g}) = \mathfrak{g} \otimes \mathbb{C}[t, t^{-1}] = \mathfrak{g}[t, t^{-1}]$$
>
> with bracket:
> $$[X \otimes t^m, Y \otimes t^n] = [X, Y] \otimes t^{m+n}$$

Elements are finite Laurent series $\sum_n X_n \otimes t^n$ with $X_n \in \mathfrak{g}$.

### Central Extension

> [!info] Definition
> The **affine Lie algebra** $\widehat{\mathfrak{g}}$ is the central extension:
> $$0 \to \mathbb{C}c \to \widehat{\mathfrak{g}} \to L(\mathfrak{g}) \to 0$$
>
> with bracket:
> $$[X \otimes t^m, Y \otimes t^n] = [X, Y] \otimes t^{m+n} + m \delta_{m+n,0} \kappa(X, Y) c$$
>
> where $\kappa$ is the Killing form and $c$ is central.

### Full Affine Algebra

Adding the derivation $d = t\frac{d}{dt}$:
$$\widetilde{\mathfrak{g}} = \widehat{\mathfrak{g}} \oplus \mathbb{C}d$$

with $[d, X \otimes t^n] = n X \otimes t^n$.

## Notation

Common notations for the affine algebra associated to $\mathfrak{g}$:
- $\widehat{\mathfrak{g}}$ (most common)
- $\mathfrak{g}^{(1)}$ (untwisted affine)
- $A_n^{(1)}$, $D_n^{(1)}$, $E_6^{(1)}$, etc. (Dynkin notation)

## Structure

### Cartan Subalgebra

$$\widehat{\mathfrak{h}} = \mathfrak{h} \oplus \mathbb{C}c \oplus \mathbb{C}d$$

where $\mathfrak{h}$ is the Cartan subalgebra of $\mathfrak{g}$.

### Root System

> [!info] Affine Root System
> $$\widehat{\Delta} = \{\alpha + n\delta : \alpha \in \Delta, n \in \mathbb{Z}\} \cup \{n\delta : n \neq 0\}$$
>
> where:
> - $\Delta$ is the root system of $\mathfrak{g}$
> - $\delta$ is the **null root** (imaginary)

**Real roots**: $\alpha + n\delta$ with multiplicity 1
**Imaginary roots**: $n\delta$ with multiplicity $= \text{rank}(\mathfrak{g})$

### Simple Roots

$$\widehat{\Pi} = \{\alpha_0, \alpha_1, \ldots, \alpha_n\}$$

where $\alpha_1, \ldots, \alpha_n$ are simple roots of $\mathfrak{g}$ and $\alpha_0 = \delta - \theta$ ($\theta$ is the highest root).

### Affine Dynkin Diagrams

> [!example] Untwisted Affine Diagrams
> | Type | Diagram Description |
> |------|---------------------|
> | $A_n^{(1)}$ | Cycle of $n+1$ nodes |
> | $D_n^{(1)}$ | $D_n$ with extra node |
> | $E_6^{(1)}$ | $E_6$ with extra node on long arm |
> | $E_7^{(1)}$ | $E_7$ with extra node |
> | $E_8^{(1)}$ | $E_8$ with extra node |

## The Simplest Example: $\widehat{\mathfrak{sl}}_2$

### Generators

- $e_0, e_1$ (positive Chevalley generators)
- $f_0, f_1$ (negative Chevalley generators)
- $h_0, h_1, c, d$ (Cartan elements)

### Realization

$$e_1 = e \otimes 1, \quad f_1 = f \otimes 1, \quad h_1 = h \otimes 1$$
$$e_0 = f \otimes t, \quad f_0 = e \otimes t^{-1}, \quad h_0 = -h \otimes 1 + c$$

### Relations

$$[h_1, e_1] = 2e_1, \quad [h_1, f_1] = -2f_1, \quad [e_1, f_1] = h_1$$
$$[h_0, e_0] = 2e_0, \quad [h_0, f_0] = -2f_0, \quad [e_0, f_0] = h_0$$
$$[e_0, e_1] = [f_0, f_1] = 0, \quad [e_0, f_1] = [e_1, f_0] = 0$$

Plus Serre relations.

## Representation Theory

### Highest Weight Modules

> [!info] Definition
> A weight $\lambda \in \widehat{\mathfrak{h}}^*$ is specified by:
> - $\lambda|_\mathfrak{h}$ (classical part)
> - $\lambda(c) = k$ (the **level**)
> - $\lambda(d) = s$ (the **grade**)

### Integrable Modules

> [!abstract] Theorem
> Integrable highest weight modules $L(\lambda)$ exist iff:
> 1. $\lambda(c) = k \in \mathbb{Z}_{\geq 0}$ (non-negative integer level)
> 2. $\langle \lambda, \alpha_i^\vee \rangle \in \mathbb{Z}_{\geq 0}$ for all simple roots

At level $k$, there are finitely many integrable modules.

### Characters and Modular Forms

> [!abstract] Theorem
> The characters of integrable highest weight modules at level $k$:
> $$\chi_\lambda(\tau, z) = \text{tr}_{L(\lambda)} q^{L_0 - c/24} e^{2\pi i z \cdot h}$$
>
> are **modular forms** (or weak modular forms) for a congruence subgroup.

Here $q = e^{2\pi i \tau}$ and $L_0$ is the energy operator.

## Connection to Physics

### Conformal Field Theory

The **Wess-Zumino-Witten (WZW) model** has $\widehat{\mathfrak{g}}_k \oplus \widehat{\mathfrak{g}}_k$ symmetry at level $k$.

### Virasoro Algebra

> [!info] Sugawara Construction
> From $\widehat{\mathfrak{g}}_k$, one constructs Virasoro operators:
> $$L_n = \frac{1}{2(k + h^\vee)} \sum_m \sum_a :J^a_m J^a_{n-m}:$$
>
> with central charge:
> $$c = \frac{k \dim \mathfrak{g}}{k + h^\vee}$$
>
> where $h^\vee$ is the dual Coxeter number.

### String Theory

Affine Lie algebras appear in:
- **Heterotic string** worldsheet theory
- **Current algebras** on D-branes
- **Kaluza-Klein** compactifications

## Twisted Affine Algebras

> [!info] Definition
> **Twisted affine algebras** arise from automorphisms $\sigma$ of $\mathfrak{g}$:
> $$L(\mathfrak{g}, \sigma) = \bigoplus_{n \in \mathbb{Z}} \mathfrak{g}_{\bar{n}} \otimes t^n$$
>
> where $\mathfrak{g}_{\bar{n}}$ is the $\sigma$-eigenspace with eigenvalue $e^{2\pi i n/r}$.

Examples: $A_n^{(2)}$, $D_n^{(2)}$, $E_6^{(2)}$, $D_4^{(3)}$.

## Important Formulas

### Weyl-Kac Character Formula

For integrable $L(\lambda)$:
$$\chi_\lambda = \frac{\sum_{w \in W} \epsilon(w) e^{w(\lambda + \rho)}}{\prod_{\alpha \in \widehat{\Delta}^+} (1 - e^{-\alpha})^{\text{mult}(\alpha)}}$$

### Jacobi Triple Product (from $\widehat{\mathfrak{sl}}_2$)

$$\prod_{n=1}^\infty (1 - q^n)(1 - zq^{n-1})(1 - z^{-1}q^n) = \sum_{m \in \mathbb{Z}} (-1)^m z^m q^{m(m+1)/2}$$

### Macdonald Identities

Denominator identities for affine algebras give classical identities:
- $\widehat{\mathfrak{sl}}_n$: Jacobi identities
- $\widehat{\mathfrak{so}}_{2n}$: quintuple product
- Others: new identities

## Related Concepts

- [[06 - Representation Theory/Concepts/Kac-Moody Algebras|Kac-Moody Algebras]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Vertex Operator Algebras|Vertex Operator Algebras]]
- [[06 - Representation Theory/Concepts/Monstrous Moonshine|Monstrous Moonshine]]
- [[Modular Forms Hub|Modular Forms]]
