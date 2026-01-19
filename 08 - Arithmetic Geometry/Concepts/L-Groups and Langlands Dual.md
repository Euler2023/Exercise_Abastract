---
title: L-Groups and Langlands Dual
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - langlands
  - lie-theory
created: 2026-01-19
---

# L-Groups and Langlands Dual

## Introduction

The **L-group** (Langlands dual group) is a fundamental construction in the Langlands program. It provides the target for Langlands parameters and encodes deep relationships between representation theory and number theory.

## Root Data

### Definition

> [!info] Definition (Root Datum)
> A **root datum** is a quadruple $(X, \Phi, X^\vee, \Phi^\vee)$ where:
> - $X$ = character lattice (free abelian group)
> - $X^\vee$ = cocharacter lattice
> - $\Phi \subset X$ = roots
> - $\Phi^\vee \subset X^\vee$ = coroots
>
> with a perfect pairing $\langle \cdot, \cdot \rangle: X \times X^\vee \to \mathbb{Z}$ and bijection $\alpha \mapsto \alpha^\vee$ such that $\langle \alpha, \alpha^\vee \rangle = 2$.

### From Reductive Groups

For a reductive group $G$ with maximal torus $T$:
- $X = X^*(T) = \text{Hom}(T, \mathbb{G}_m)$ (characters)
- $X^\vee = X_*(T) = \text{Hom}(\mathbb{G}_m, T)$ (cocharacters)
- $\Phi$ = roots of $(G, T)$
- $\Phi^\vee$ = coroots

## The Dual Group

### Construction

> [!info] Definition (Dual Root Datum)
> The **dual root datum** is:
> $$(X^\vee, \Phi^\vee, X, \Phi)$$
>
> (swap $X \leftrightarrow X^\vee$ and $\Phi \leftrightarrow \Phi^\vee$).

> [!info] Definition (Dual Group)
> The **Langlands dual group** $\widehat{G}$ (or ${}^L G^0$) is the connected reductive group over $\mathbb{C}$ with dual root datum.

### Key Properties

1. $\widehat{\widehat{G}} = G$ (over $\mathbb{C}$)
2. $\text{rank}(\widehat{G}) = \text{rank}(G)$
3. Roots ↔ coroots are swapped
4. Representations of $\widehat{G}$ ↔ "dual" objects for $G$

## Examples

### Classical Groups

| $G$ | Root System | $\widehat{G}$ | Dual Root System |
|-----|-------------|---------------|------------------|
| $\text{GL}_n$ | $A_{n-1}$ | $\text{GL}_n$ | $A_{n-1}$ |
| $\text{SL}_n$ | $A_{n-1}$ | $\text{PGL}_n$ | $A_{n-1}$ |
| $\text{PGL}_n$ | $A_{n-1}$ | $\text{SL}_n$ | $A_{n-1}$ |
| $\text{Sp}_{2n}$ | $C_n$ | $\text{SO}_{2n+1}$ | $B_n$ |
| $\text{SO}_{2n+1}$ | $B_n$ | $\text{Sp}_{2n}$ | $C_n$ |
| $\text{SO}_{2n}$ | $D_n$ | $\text{SO}_{2n}$ | $D_n$ |

### Tori

> [!example] Dual of a Torus
> For a torus $T$ with character lattice $X$:
> $$\widehat{T} = X \otimes_\mathbb{Z} \mathbb{C}^\times = \text{Hom}(X^\vee, \mathbb{C}^\times)$$
>
> Characters of $T$ ↔ cocharacters of $\widehat{T}$.

### Exceptional Groups

| $G$ | $\widehat{G}$ |
|-----|---------------|
| $G_2$ | $G_2$ |
| $F_4$ | $F_4$ |
| $E_6$ | $E_6$ |
| $E_7$ | $E_7$ |
| $E_8$ | $E_8$ |

(All exceptional groups are self-dual!)

## The L-Group

### Full L-Group

> [!info] Definition (L-Group)
> For $G$ defined over a field $K$, the **L-group** is:
> $${}^L G = \widehat{G} \rtimes \Gamma_K$$
>
> where $\Gamma_K = \text{Gal}(\overline{K}/K)$ acts on $\widehat{G}$ via its action on the root datum.

### Split Case

If $G$ is **split** over $K$ (contains a split maximal torus):
- $\Gamma_K$ acts trivially on $\widehat{G}$
- ${}^L G = \widehat{G} \times \Gamma_K$

### Non-Split Case

For non-split $G$, the Galois action is non-trivial:

> [!example] Quasi-split unitary groups
> For $U_n$ (quasi-split unitary group for $E/F$):
> $${}^L U_n = \text{GL}_n(\mathbb{C}) \rtimes \text{Gal}(E/F)$$
>
> where $\sigma \in \text{Gal}(E/F)$ acts by $g \mapsto J (g^t)^{-1} J^{-1}$.

## Langlands Parameters

### Definition

> [!info] Definition (L-parameter)
> A **Langlands parameter** for $G$ over a local field $F$ is an admissible homomorphism:
> $$\phi: W_F \times \text{SL}_2(\mathbb{C}) \to {}^L G$$
>
> where:
> - $W_F$ is the Weil group
> - $\text{SL}_2(\mathbb{C})$ captures monodromy
> - Admissibility: $\phi|_{W_F}$ is continuous with bounded image; $\phi|_{\text{SL}_2}$ is algebraic

### For GLₙ

Parameters are simply $n$-dimensional representations:
$$\phi: W_F \times \text{SL}_2(\mathbb{C}) \to \text{GL}_n(\mathbb{C})$$

The $\text{SL}_2$ factor gives the Weil-Deligne monodromy operator $N$.

## L-Homomorphisms and Functoriality

### L-Homomorphisms

> [!info] Definition
> An **L-homomorphism** ${}^L \eta: {}^L H \to {}^L G$ is a homomorphism compatible with projections to $\Gamma_K$:
> ```
> ᴸH ──ᴸη──→ ᴸG
>  │          │
>  ↓          ↓
>  Γ_K ══════ Γ_K
> ```

### Functoriality Principle

> [!abstract] Langlands Functoriality
> An L-homomorphism ${}^L \eta: {}^L H \to {}^L G$ should induce a **transfer** of automorphic representations:
> $$\eta_*: \{\text{automorphic reps of } H\} \to \{\text{automorphic reps of } G\}$$
>
> compatible with L-functions:
> $$L(s, \eta_*(\pi), r) = L(s, \pi, r \circ {}^L\eta)$$

### Examples of Functoriality

| L-homomorphism | Transfer |
|----------------|----------|
| ${}^L \text{GL}_1 \hookrightarrow {}^L \text{GL}_n$ | Hecke characters → $\text{GL}_n$ |
| ${}^L \text{GL}_m \times {}^L \text{GL}_n \hookrightarrow {}^L \text{GL}_{mn}$ | Rankin-Selberg |
| $\text{Sym}^k: {}^L \text{GL}_2 \to {}^L \text{GL}_{k+1}$ | Symmetric power |
| Base change | Restriction of scalars |

## Satake Isomorphism

### Statement

> [!abstract] Theorem (Satake)
> For an unramified reductive group $G$ over a $p$-adic field $F$:
> $$\mathcal{H}(G(F), K) \cong \mathbb{C}[\widehat{T}]^{\widehat{W}}$$
>
> where:
> - $\mathcal{H}(G(F), K)$ = spherical Hecke algebra
> - $\widehat{T}$ = dual torus
> - $\widehat{W}$ = Weyl group of $\widehat{G}$

### Satake Parameters

Unramified representations $\pi$ of $G(F)$ are parametrized by **Satake parameters**:
$$s(\pi) \in \widehat{T}/\widehat{W}$$

Under local Langlands, this corresponds to the unramified L-parameter:
$$\phi: W_F \to {}^L G, \quad \phi(\text{Frob}) = s(\pi)$$

## Dual Groups and Representation Theory

### Geometric Satake

> [!abstract] Theorem (Ginzburg, Mirković-Vilonen)
> $$\text{Rep}(\widehat{G}) \cong \text{Perv}_{G(\mathcal{O})}(\text{Gr}_G)$$
>
> Representations of $\widehat{G}$ ↔ perverse sheaves on the affine Grassmannian.

This provides a geometric construction of $\widehat{G}$.

### Highest Weights

| $G$ | $\widehat{G}$ | Duality |
|-----|---------------|---------|
| Weights of $G$ | Coweights of $\widehat{G}$ | |
| Dominant weights | Dominant coweights | |
| Irreps of $G(\mathbb{C})$ | Irreps of $\widehat{G}$ | Dimension formulas |

## Applications

### L-Functions

The dual group determines L-function factors:
$$L(s, \pi, r) = \det(1 - r(\phi(\text{Frob})) q^{-s})^{-1}$$

where $r: {}^L G \to \text{GL}(V)$ is a representation.

### Standard L-Function

For the standard representation $\text{std}: {}^L \text{GL}_n \to \text{GL}_n(\mathbb{C})$:
$$L(s, \pi, \text{std}) = \text{standard L-function}$$

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[08 - Arithmetic Geometry/Concepts/Local Langlands Correspondence|Local Langlands Correspondence]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Representations|Automorphic Representations]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]
