---
title: Schemes
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
source: "Jürgen Neukirch, Algebraic Number Theory, Ch. I, §§13–14, printed pp. 85–90, 96–97, PDF pp. 104–109, 115–116; Serge Lang, Algebra, rev. 3rd ed., Ch. IX, §5, printed pp. 405–409, PDF pp. 420–424"
source_status: partially-verified
status: not-started
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
> - "Horizontal" curves: $(f(x))$ for primitive irreducible $f\in\mathbb Z[x]$
> - "Vertical" curves: $(p)$ for primes $p$
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
> $$
> \text{Hom}(T, X \times_S S') = \text{Hom}(T, X) \times_{\text{Hom}(T,S)} \text{Hom}(T, S')
> $$

> [!tip] Fibers
> For $X \to \text{Spec}(\mathbb{Z})$, the fiber over $(p)$ is $X_{\mathbb{F}_p} = X \times_{\mathbb{Z}} \mathbb{F}_p$, the **reduction mod $p$**.

## Smooth and Proper Schemes

> [!info] Definition (Smooth)
> A morphism $X \to S$ is **smooth** if it is flat, of finite presentation, and all geometric fibers are smooth.

> [!info] Definition (Proper)
> A morphism is **proper** if it is separated, of finite type, and universally closed (the scheme-theoretic analogue of "compact").

## Arithmetic Schemes

> [!info] Definition (Arithmetic Scheme)
> An **arithmetic scheme** is a scheme $X$ of finite type over $\text{Spec}(\mathbb{Z})$. The term “arithmetic variety” often adds integrality, flatness, or other hypotheses, depending on the author.
>
> For each prime $p$: fiber $X_{\mathbb{F}_p}$ is a variety over $\mathbb{F}_p$.
> Generic fiber $X_\mathbb{Q}$ is a variety over $\mathbb{Q}$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Morphisms of Schemes|Morphisms of Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Étale Cohomology]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Neukirch defines $\operatorname{Spec}(R)$ as the prime spectrum with the Zariski topology, constructs the structure sheaf with stalks $R_{\mathfrak p}$, defines affine schemes and affine-scheme morphisms, and then defines a general scheme by an affine open cover on the cited pages. He also treats $\operatorname{Spec}(\mathbb Z)$, generic and closed points, discrete valuation rings, Dedekind schemes, singularities, and the projective line over a finite field. Lang independently verifies the prime-spectrum topology, contravariant functoriality, field-valued points, and irreducible closed subsets. Fiber products, smoothness, properness, general arithmetic schemes, and the detailed $\operatorname{Spec}(\mathbb Z[x])$ description are not established in those bounded slices and remain external inputs.
