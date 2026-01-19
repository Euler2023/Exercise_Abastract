---
title: Morphisms of Schemes
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
---

# Morphisms of Schemes

## Definition

> [!info] Definition (Morphism of Schemes)
> A **morphism of schemes** $f: X \to Y$ consists of:
> 1. A continuous map $f: |X| \to |Y|$ of underlying topological spaces
> 2. A morphism of sheaves $f^\#: \mathcal{O}_Y \to f_*\mathcal{O}_X$
>
> such that for each $x \in X$, the induced map on stalks $\mathcal{O}_{Y,f(x)} \to \mathcal{O}_{X,x}$ is a local ring homomorphism.

## Key Properties

### Types of Morphisms

| Type | Definition | Example |
|------|------------|---------|
| Open immersion | Isomorphism onto open subset | $D(f) \hookrightarrow \text{Spec}(A)$ |
| Closed immersion | $f_*\mathcal{O}_X \cong \mathcal{O}_Y/\mathcal{I}$ | $V(I) \hookrightarrow \text{Spec}(A)$ |
| Finite | $f_*\mathcal{O}_X$ locally finite $\mathcal{O}_Y$-module | $\text{Spec}(B) \to \text{Spec}(A)$, $B$ finite over $A$ |
| Proper | Separated, finite type, universally closed | Projective morphisms |
| Flat | Stalks are flat modules | Generic fibers |
| Étale | Flat + unramified | Covers in étale topology |
| Smooth | Flat + fibers are smooth | $\mathbb{A}^n \to \text{Spec}(k)$ |

### Fiber Products

> [!info] Definition (Fiber Product)
> For morphisms $X \to S$ and $Y \to S$, the **fiber product** $X \times_S Y$ satisfies the universal property:
> ```
>     Z -----> X
>     |        |
>     v        v
>     Y -----> S
> ```
> Any $Z$ with maps to both $X$ and $Y$ (compatible over $S$) factors uniquely through $X \times_S Y$.

### Fibers

> [!info] Definition (Fiber)
> The **fiber** of $f: X \to Y$ over a point $y \in Y$ is:
> $$X_y = X \times_Y \text{Spec}(\kappa(y))$$
> where $\kappa(y)$ is the residue field at $y$.

## Arithmetic Applications

### Base Change

For a scheme $X/\mathbb{Z}$:
- **Generic fiber**: $X_\mathbb{Q} = X \times_\mathbb{Z} \text{Spec}(\mathbb{Q})$
- **Special fiber at $p$**: $X_{\mathbb{F}_p} = X \times_\mathbb{Z} \text{Spec}(\mathbb{F}_p)$

This is the scheme-theoretic version of [[08 - Arithmetic Geometry/Concepts/Reduction mod p|reduction mod p]].

### Structure Morphism

Every scheme $X$ over a base $S$ has a **structure morphism** $X \to S$.
- $X/\mathbb{Q}$: structure morphism $X \to \text{Spec}(\mathbb{Q})$
- $X/\mathbb{Z}$: arithmetic scheme with fibers over each prime

## Examples

> [!example] Example 1: Affine Morphism
> A ring map $\phi: A \to B$ induces $\text{Spec}(B) \to \text{Spec}(A)$.
> - $\mathfrak{q} \mapsto \phi^{-1}(\mathfrak{q})$
> - $\mathbb{Z} \to \mathbb{Z}[i]$ gives $\text{Spec}(\mathbb{Z}[i]) \to \text{Spec}(\mathbb{Z})$

> [!example] Example 2: Projection
> $\mathbb{A}^2_k \to \mathbb{A}^1_k$ via $(x, y) \mapsto x$.
> Fiber over $a$: the line $\{x = a\} \cong \mathbb{A}^1_k$.

> [!example] Example 3: Elliptic Curve Family
> $\mathcal{E} \to \text{Spec}(\mathbb{Z}[1/N])$ where $\mathcal{E}$ is a Néron model.
> - Fiber over $(p)$: reduction $\tilde{E}_p$ for $p \nmid N$
> - Generic fiber: $E/\mathbb{Q}$

## Important Classes

### Separated Morphisms

> [!info] Definition
> $f: X \to Y$ is **separated** if the diagonal $\Delta: X \to X \times_Y X$ is a closed immersion.

Separatedness is the scheme-theoretic analogue of Hausdorff.

### Proper Morphisms

> [!info] Definition
> $f: X \to Y$ is **proper** if it is separated, of finite type, and universally closed.

> [!abstract] Valuative Criterion
> $f$ is proper iff for every valuation ring $R$ with fraction field $K$:
> ```
> Spec(K) ---> X
>    |         |f
>    v         v
> Spec(R) ---> Y
> ```
> There exists a unique lift $\text{Spec}(R) \to X$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Étale Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
