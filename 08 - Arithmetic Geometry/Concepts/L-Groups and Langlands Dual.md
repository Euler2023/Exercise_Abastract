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
source: "Getz–Hahn, An Introduction to Automorphic Representations, GTM 300 (2024), §§7.3–7.5 and 12.2"
source_status: partially-verified
status: not-started
---

# L-Groups and Langlands Dual

## Introduction

The **Langlands dual group** and the **L-group** are fundamental constructions in the Langlands program. The connected complex dual group is determined by the dual based root datum; the full L-group also records the Galois action and is the target of Langlands parameters.

> [!note] Source convention
> Getz–Hahn use the Galois-group convention
> $$
> {}^LG=\widehat G(\mathbb C)\rtimes \operatorname{Gal}_F.
> $$
> Local formulations often replace the Galois factor by the Weil group, or use the corresponding pullback along $W_F\to\operatorname{Gal}_F$. These conventions encode the same pinned action but should not be silently interchanged. [S11, §7.3, printed pp. 191–192, PDF pp. 204–205]

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
> $$
> (X^\vee, \Phi^\vee, X, \Phi)
> $$
>
> (swap $X \leftrightarrow X^\vee$ and $\Phi \leftrightarrow \Phi^\vee$).

> [!info] Definition (Dual Group)
> The **Langlands dual group** $\widehat{G}$ (or ${}^L G^0$) is the connected reductive group over $\mathbb{C}$ with dual root datum.

### Key Properties

1. Dualizing twice recovers the original based root datum; the corresponding complex reductive group is recovered up to the chosen identification
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
> $$
> \widehat{T} = X \otimes_\mathbb{Z} \mathbb{C}^\times = \text{Hom}(X^\vee, \mathbb{C}^\times)
> $$
>
> Characters of $T$ ↔ cocharacters of $\widehat{T}$.

### Exceptional Groups

| $G$   | $\widehat{G}$ |
| ----- | ------------- |
| $G_2$ | $G_2$         |
| $F_4$ | $F_4$         |
| $E_6$ | $E_6$         |
| $E_7$ | $E_7$         |
| $E_8$ | $E_8$         |

The exceptional **root systems** are self-dual. The dual group still depends on the full root datum: in particular, simply connected and adjoint isogeny forms are interchanged.

## The L-Group

### Full L-Group

> [!info] Definition (L-Group: S11 convention)
> For a reductive group $G$ over a local or global field $F$, choose the pinned action $\widehat\mu_G$ of $\operatorname{Gal}_F$ on the complex dual group. The **L-group** is
> $$
> {}^L G = \widehat{G}(\mathbb C) \rtimes_{\widehat\mu_G} \operatorname{Gal}_F.
> $$
>
> A local Weil-group version is obtained by pulling this action back along $W_F\to\operatorname{Gal}_F$. [S11, §7.3, printed p. 192, PDF p. 205]

### Split Case

If $G$ is **split** over $K$ (contains a split maximal torus):
- $W_K$ acts trivially on $\widehat{G}$
- ${}^L G = \widehat{G} \times W_K$ in the Weil-group convention

### Non-Split Case

For non-split $G$, the Galois action is non-trivial:

> [!example] Quasi-split unitary groups
> For the standard quasi-split unitary group $U_n$ attached to a quadratic extension $M/F$:
> $$
> {}^L U_n \simeq \operatorname{GL}_n(\mathbb C)\rtimes\operatorname{Gal}_F,
> $$
>
> where the action factors through $\operatorname{Gal}(M/F)$ and its nontrivial element acts by
> $$
> g\longmapsto (J_n')^{-1}g^{-t}J_n'.
> $$
> This is formula (7.20) in S11. See [[08 - Arithmetic Geometry/Concepts/Quasi-split Unitary Groups|Quasi-split Unitary Groups]]. [S11, Example 7.3, printed p. 193, PDF p. 206]

## Langlands Parameters

### Definition

> [!info] Definition (L-parameter)
> A **Langlands parameter** for $G$ over a local field $F$ is an admissible homomorphism:
> $$
> \phi: W_F \times \text{SL}_2(\mathbb{C}) \to {}^L G
> $$
>
> where:
> - $W_F$ is the Weil group
> - $\text{SL}_2(\mathbb{C})$ captures monodromy
> - Admissibility includes continuity on $W_F$, algebraicity on $\text{SL}_2$, compatibility with the projection to $W_F$, and a semisimplicity condition. Boundedness of the Weil-group image is the additional condition characterizing **tempered** parameters, not all L-parameters.

### For $GL_{n}$

Parameters are simply $n$-dimensional representations:
$$
\phi: W_F \times \text{SL}_2(\mathbb{C}) \to \text{GL}_{n}(\mathbb{C})
$$

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
> $$
> \eta_*: \{\text{automorphic reps of } H\} \to \{\text{automorphic reps of } G\}
> $$
>
> compatible with L-functions:
> $$
> L(s, \eta_*(\pi), r) = L(s, \pi, r \circ {}^L\eta)
> $$

### Examples of Functoriality

| L-homomorphism | Transfer |
|----------------|----------|
| ${}^L(\operatorname{Res}_{E/F}\text{GL}_1) \to {}^L\text{GL}_{[E:F]}$ | Automorphic induction of Hecke characters, when established |
| ${}^L \text{GL}_m \times {}^L \text{GL}_n \hookrightarrow {}^L \text{GL}_{mn}$ | Rankin-Selberg |
| $\text{Sym}^k: {}^L \text{GL}_2 \to {}^L \text{GL}_{k+1}$ | Symmetric power |
| Base change | Restriction of scalars |

## Satake Isomorphism

### Statement

> [!abstract] Theorem (Satake)
> For an unramified reductive group $G$ over a $p$-adic field $F$:
> $$
> \mathcal{H}(G(F), K) \cong \mathbb{C}[\widehat{T}]^{\widehat{W}}
> $$
>
> where:
> - $\mathcal{H}(G(F), K)$ = spherical Hecke algebra
> - $\widehat{T}$ = dual torus
> - $\widehat{W}$ = Weyl group of $\widehat{G}$

The displayed form suppresses normalization choices and, for nonsplit unramified groups, the Galois/Weil action and invariant form of the Satake isomorphism.

### Satake Parameters

Unramified representations $\pi$ of $G(F)$ are parametrized by **Satake parameters**:
$$
s(\pi) \in \widehat{T}/\widehat{W}
$$

Under local Langlands, this corresponds to the unramified L-parameter:
$$
\phi: W_F \to {}^L G, \quad \phi(\text{Frob}) = s(\pi)
$$

## Dual Groups and Representation Theory

### Geometric Satake

> [!abstract] Theorem (Ginzburg, Mirković-Vilonen)
> $$
> \text{Rep}(\widehat{G}) \cong \text{Perv}_{G(\mathcal{O})}(\text{Gr}_G)
> $$
>
> Representations of $\widehat{G}$ ↔ perverse sheaves on the affine Grassmannian.

This provides a geometric construction of $\widehat{G}$.

### Highest Weights

The character lattice of $\widehat T$ is $X_*(T)$. Consequently, highest weights of $\widehat G$ correspond to coweights of $G$, and dominant highest weights of $\widehat G$ correspond to dominant coweights of $G$. There is no general term-by-term identification of irreducible representations of $G(\mathbb C)$ with those of $\widehat G$.

## Applications

### L-Functions

The dual group determines L-function factors:
$$
L(s, \pi, r) = \det(1 - r(\phi(\text{Frob})) q^{-s})^{-1}
$$

where $r: {}^L G \to \text{GL}(V)$ is a representation.

### Standard L-Function

For the standard representation $\text{std}: {}^L \text{GL}_n \to \text{GL}_n(\mathbb{C})$:
$$
L(s, \pi, \text{std}) = \text{standard L-function}
$$

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[08 - Arithmetic Geometry/Concepts/Local Langlands Correspondence|Local Langlands Correspondence]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Representations|Automorphic Representations]]
- [[08 - Arithmetic Geometry/Concepts/Quasi-split Unitary Groups|Quasi-split Unitary Groups]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

**Status: partially verified.** The dual-root-datum construction, pinned Galois action, semidirect-product definition of ${}^LG$, definition of an $L$-map, local-to-global map, and the quasi-split unitary example were checked against Getz–Hahn [S11, §7.3–§7.4, printed pp. 187–195, PDF pp. 200–208]. The definition of $L$-parameters and their local factors was checked against [S11, §12.2, printed pp. 324–325, PDF pp. 335–336].

**External standard inputs.** S11 states the Satake theorems but refers out for the key algebra isomorphism; the geometric Satake theorem is not developed there. The functorial transfers in the examples table are established only in particular cases, while general Langlands functoriality remains conjectural. Consequently those sections are retained as orientation, not as source-contained proofs. The note is not `verified` because it combines S11-grounded definitions with these external results.
