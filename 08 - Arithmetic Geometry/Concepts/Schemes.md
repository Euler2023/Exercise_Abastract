---
title: Schemes
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
---

# Schemes

## Motivation

Classical varieties work well over algebraically closed fields, but arithmetic geometry needs:
- Varieties over $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{F}_p$
- Nilpotent elements (infinitesimal information)
- A unified framework for local and global properties

**Schemes** (Grothendieck) provide this generalization.

## Definition

> [!info] Definition (Affine Scheme)
> For a commutative ring $R$, the **affine scheme** $\text{Spec}(R)$ is:
> - **Points**: Prime ideals of $R$
> - **Topology**: Zariski topology (closed sets = $V(I)$ for ideals $I$)
> - **Structure sheaf**: $\mathcal{O}_{\text{Spec}(R)}$ with stalks = localizations

> [!info] Definition (Scheme)
> A **scheme** is a locally ringed space $(X, \mathcal{O}_X)$ that is locally isomorphic to affine schemes.

## Key Examples

> [!example] Example 1: $\text{Spec}(\mathbb{Z})$
> Points: $(0)$ (generic point) and $(p)$ for each prime $p$.
>
> This is the "arithmetic line" - all primes living together.

> [!example] Example 2: $\text{Spec}(k[x])$ for field $k$
> Points: $(0)$ (generic) and $(x-a)$ for $a \in k$ (if $k = \bar{k}$).
>
> This is the affine line $\mathbb{A}^1_k$.

> [!example] Example 3: $\text{Spec}(\mathbb{Z}[x])$
> - Generic point: $(0)$
> - "Horizontal" curves: $(f(x))$ for irreducible $f$
> - Closed points: $(p, f(x))$ for prime $p$ and $f$ irreducible mod $p$
>
> This is the "arithmetic plane."

## Generic Points

> [!tip] Generic Point
> In a scheme, an irreducible closed subset $Z$ has a unique **generic point** $\eta$ with $\overline{\{\eta\}} = Z$.
>
> This is a key difference from classical varieties!

## Scheme-Theoretic vs Classical

| Classical Variety | Scheme |
|-------------------|--------|
| Closed points only | All prime ideals |
| Over a field | Over any ring |
| Reduced | May have nilpotents |
| Maximal ideals | Prime ideals |

## Fiber Products

> [!info] Definition (Base Change)
> For schemes $X \to S$ and $S' \to S$, the **fiber product** $X \times_S S'$ represents:
> $$\text{Hom}(T, X \times_S S') = \text{Hom}(T, X) \times_{\text{Hom}(T,S)} \text{Hom}(T, S')$$

> [!tip] Fibers
> For $X \to \text{Spec}(\mathbb{Z})$, the fiber over $(p)$ is $X_{\mathbb{F}_p} = X \times_{\mathbb{Z}} \mathbb{F}_p$, the **reduction mod $p$**.

## Smooth and Proper Schemes

> [!info] Definition (Smooth)
> A morphism $X \to S$ is **smooth** if it is flat, of finite presentation, and all geometric fibers are smooth.

> [!info] Definition (Proper)
> A morphism is **proper** if it is separated, of finite type, and universally closed (the scheme-theoretic analogue of "compact").

## Arithmetic Schemes

> [!info] Definition (Arithmetic Variety)
> An **arithmetic variety** is a scheme $X$ of finite type over $\text{Spec}(\mathbb{Z})$.
>
> For each prime $p$: fiber $X_{\mathbb{F}_p}$ is a variety over $\mathbb{F}_p$.
> Generic fiber $X_\mathbb{Q}$ is a variety over $\mathbb{Q}$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Morphisms of Schemes|Morphisms of Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Étale Cohomology]]
