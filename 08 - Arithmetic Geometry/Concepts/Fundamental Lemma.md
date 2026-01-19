---
title: Fundamental Lemma
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - langlands
  - endoscopy
created: 2026-01-19
---

# Fundamental Lemma

## Introduction

The **Fundamental Lemma** is a collection of identities relating orbital integrals on a reductive group to orbital integrals on its endoscopic groups. Conjectured by Langlands and Shelstad in the 1980s, it was proved by **Ngô Bảo Châu** in 2008, earning him the Fields Medal in 2010.

Despite its modest name, the Fundamental Lemma is a deep and difficult result that was a major obstruction to progress in the Langlands program for over 20 years.

## The Problem

### Orbital Integrals

> [!info] Definition (Orbital Integral)
> For a reductive group $G$ over a local field $F$, an element $\gamma \in G(F)$, and a test function $f \in C_c^\infty(G(F))$:
> $$O_\gamma(f) = \int_{G_\gamma(F) \backslash G(F)} f(g^{-1}\gamma g)\, dg$$
>
> where $G_\gamma$ is the centralizer of $\gamma$.

Orbital integrals are fundamental objects in harmonic analysis on $p$-adic groups.

### The Transfer Problem

To prove cases of Langlands functoriality, one needs to **transfer** functions between groups:
- Given $f$ on $G$, find $f^H$ on an endoscopic group $H$
- Such that their orbital integrals match (up to transfer factors)

### Endoscopic Groups

> [!info] Definition (Endoscopic Group)
> An **endoscopic group** $H$ for $G$ is a quasi-split group whose L-group ${}^L H$ embeds into ${}^L G$ in a specific way.

Endoscopic groups are "smaller" groups that capture part of the representation theory of $G$.

> [!example] Example
> For $G = \text{GL}_n$: The only endoscopic group is $G$ itself (no proper endoscopy).
>
> For $G = \text{SL}_2$: Endoscopic groups include tori $T$ arising from quadratic extensions.
>
> For $G = \text{SO}_{2n}$: Endoscopic groups include products $\text{SO}_{2a} \times \text{SO}_{2b}$ with $a + b = n$.

## Statement of the Fundamental Lemma

### Setup

Let:
- $F$ = $p$-adic local field with ring of integers $\mathcal{O}$
- $G$ = unramified reductive group over $F$
- $H$ = endoscopic group for $G$
- $K = G(\mathcal{O})$ = hyperspecial maximal compact
- $\mathbf{1}_K$ = characteristic function of $K$

### The Identity

> [!abstract] Fundamental Lemma (Ngô, 2008)
> For matching regular semisimple elements $\gamma_H \in H(F)$ and $\gamma \in G(F)$:
> $$SO_{\gamma_H}(\mathbf{1}_{K_H}) = \Delta(\gamma_H, \gamma) \cdot O_\gamma^{\kappa}(\mathbf{1}_K)$$
>
> where:
> - $SO$ = stable orbital integral
> - $\Delta(\gamma_H, \gamma)$ = **transfer factor** (explicit, depends on choices)
> - $O^\kappa$ = $\kappa$-orbital integral (twisted by a character)

### Stable Orbital Integrals

> [!info] Definition
> The **stable orbital integral** sums over the stable conjugacy class:
> $$SO_\gamma(f) = \sum_{\gamma' \sim_{\text{st}} \gamma} e(\gamma') O_{\gamma'}(f)$$
>
> where $\gamma' \sim_{\text{st}} \gamma$ means $\gamma'$ is stably conjugate to $\gamma$ (conjugate over $\overline{F}$), and $e(\gamma')$ are signs.

## Why "Fundamental"?

### Role in Trace Formula Comparison

The **Arthur-Selberg trace formula** expresses spectral data (automorphic representations) in terms of geometric data (orbital integrals):

$$\sum_\pi m(\pi) \text{tr } \pi(f) = \sum_{\gamma} \text{vol} \cdot O_\gamma(f) + \cdots$$

To compare trace formulas for $G$ and $H$, one needs:
1. **Transfer**: A map $f \mapsto f^H$ on test functions
2. **Matching**: $O_\gamma(f)$ matches $O_{\gamma_H}(f^H)$

The Fundamental Lemma provides this matching for the basic functions $\mathbf{1}_K$.

### Consequences

With the Fundamental Lemma proved:

> [!success] Applications
> 1. **Arthur's classification** of automorphic representations of classical groups
> 2. **Endoscopic transfer** is now unconditional
> 3. Progress on **functoriality** conjectures
> 4. Sato-Tate conjecture (via potential modularity)

## Ngô's Proof

### Key Innovation: Geometry

Ngô's breakthrough was to translate the problem into **algebraic geometry**.

> [!abstract] Geometric Interpretation
> The Fundamental Lemma is equivalent to a statement about:
> - The **Hitchin fibration** for reductive groups
> - Perverse sheaves and the decomposition theorem
> - Support theorems for the Hitchin map

### The Hitchin Fibration

> [!info] Setup
> For a curve $X$ and group $G$:
> - $\mathcal{M}_G$ = moduli of Higgs bundles $(E, \phi)$ on $X$
> - $\mathcal{A}$ = Hitchin base (affine space of spectral data)
> - $h: \mathcal{M}_G \to \mathcal{A}$ = Hitchin map
>
> Fibers of $h$ are (compactified) Jacobians of spectral curves.

### Proof Outline

1. **Global-to-local**: Reduce to counting points on Hitchin fibers over finite fields
2. **Perverse sheaves**: The pushforward $h_* \mathbb{Q}_\ell$ decomposes
3. **Support theorem**: Control the supports of direct summands
4. **Product formula**: Global orbital integrals factor as products of local ones

### Key Technical Result

> [!abstract] Theorem (Ngô's Support Theorem)
> The support of any simple perverse constituent of $h_* \mathbb{Q}_\ell[\dim \mathcal{M}]$ is all of $\mathcal{A}$.

This "purity" result implies the Fundamental Lemma.

## Historical Development

| Year | Development |
|------|-------------|
| 1979 | Langlands-Shelstad formulate the conjecture |
| 1980s | Verified for $\text{SL}_2$ and small cases |
| 1990s | Waldspurger reduces to Lie algebra version |
| 2004 | Laumon-Ngô prove for unitary groups |
| 2006 | Ngô announces general proof |
| 2008 | Ngô's proof published |
| 2010 | Ngô receives Fields Medal |

## Variants and Generalizations

### Lie Algebra Version

> [!info] Waldspurger's Reduction
> The group version reduces to a **Lie algebra** Fundamental Lemma:
> $$SO_X(\mathbf{1}_{\mathfrak{g}(\mathcal{O})}) = \Delta(X_H, X) \cdot O_X^\kappa(\mathbf{1}_{\mathfrak{g}(\mathcal{O})})$$
>
> for regular semisimple elements $X \in \mathfrak{g}(F)$.

### Weighted Fundamental Lemma

For Arthur's trace formula, one also needs the **weighted** Fundamental Lemma (proved by Chaudouard-Laumon).

### Twisted Version

For base change and other functorialities, twisted versions are needed (proved by various authors).

## Transfer Factors

### Definition

> [!info] Transfer Factors
> The **transfer factor** $\Delta(\gamma_H, \gamma)$ is an explicit (but complicated) function:
> - Depends on auxiliary choices (splittings, $\chi$-data)
> - Satisfies cocycle conditions
> - Measures the "difference" between $H$ and $G$

### Properties

1. $\Delta(\gamma_H, \gamma) \in \mathbb{C}^\times$ (non-zero)
2. Well-defined on stable conjugacy classes
3. Product formula for global transfer factors

## Example: SL₂ and Endoscopy

### Setup

For $G = \text{SL}_2$ over $\mathbb{Q}_p$:
- Endoscopic groups: tori $T_E = \text{Res}_{E/\mathbb{Q}_p}^1 \mathbb{G}_m$ for quadratic $E/\mathbb{Q}_p$
- An element $\gamma \in \text{SL}_2$ is **elliptic** if its eigenvalues lie in a quadratic extension

### The Matching

For elliptic $\gamma$ with eigenvalues in $E$:
$$SO_\gamma^{\text{SL}_2}(\mathbf{1}_K) = \Delta(\gamma_T, \gamma) \cdot O_{\gamma_T}^{T_E}(\mathbf{1}_{T(\mathcal{O})})$$

This can be verified by explicit computation.

## Impact on the Langlands Program

> [!tip] Significance
> The Fundamental Lemma was the **last major obstacle** to:
> 1. Arthur's endoscopic classification of representations
> 2. Conditional results becoming unconditional
> 3. Applications of the trace formula method
>
> Its proof opened floodgates of progress in the field.

### Post-Fundamental Lemma Achievements

- Classification of automorphic representations of classical groups (Arthur)
- Endoscopic transfer for all groups
- Progress on Gan-Gross-Prasad conjectures
- Advances in relative Langlands program

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[08 - Arithmetic Geometry/Concepts/Local Langlands Correspondence|Local Langlands Correspondence]]
- [[08 - Arithmetic Geometry/Concepts/L-Groups and Langlands Dual|L-Groups and Langlands Dual]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Representations|Automorphic Representations]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
