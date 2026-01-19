---
title: Linear Transformations
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Linear Transformations

## Definition

> [!info] Definition (Linear Transformation)
> A **linear transformation** (or linear map) $T: V \to W$ between vector spaces $V$ and $W$ over field $F$ is a function satisfying:
> 1. **Additivity**: $T(u + v) = T(u) + T(v)$ for all $u, v \in V$
> 2. **Homogeneity**: $T(cv) = cT(v)$ for all $c \in F, v \in V$
>
> Equivalently: $T(au + bv) = aT(u) + bT(v)$ for all scalars $a, b$ and vectors $u, v$.

> [!tip] Module Perspective
> A linear transformation is exactly a module homomorphism when viewing vector spaces as $F$-modules.

## Key Properties

1. **$T(0) = 0$**: Linear maps preserve the zero vector
2. **$T(-v) = -T(v)$**: Linear maps preserve negatives
3. **$T(\sum a_i v_i) = \sum a_i T(v_i)$**: Linear maps preserve linear combinations
4. **Composition**: If $S: U \to V$ and $T: V \to W$ are linear, so is $T \circ S: U \to W$

## Kernel and Image

> [!info] Definition (Kernel)
> The **kernel** (or null space) of $T: V \to W$ is:
> $$\ker(T) = \{v \in V : T(v) = 0\}$$
> This is a subspace of $V$.

> [!info] Definition (Image)
> The **image** (or range) of $T: V \to W$ is:
> $$\text{im}(T) = \{T(v) : v \in V\}$$
> This is a subspace of $W$.

## Fundamental Theorems

> [!abstract] Rank-Nullity Theorem (Dimension Theorem)
> For a linear transformation $T: V \to W$ with $V$ finite-dimensional:
> $$\dim V = \dim(\ker T) + \dim(\text{im } T)$$
> Or equivalently: $\dim V = \text{nullity}(T) + \text{rank}(T)$

> [!abstract] First Isomorphism Theorem
> For linear $T: V \to W$:
> $$V/\ker(T) \cong \text{im}(T)$$

## Types of Linear Transformations

| Type | Definition | Condition |
|------|------------|-----------|
| **Injective** (one-to-one) | $T(u) = T(v) \Rightarrow u = v$ | $\ker(T) = \{0\}$ |
| **Surjective** (onto) | $\text{im}(T) = W$ | Every $w \in W$ is hit |
| **Bijective** | Injective and surjective | $\ker(T) = \{0\}$, $\text{im}(T) = W$ |
| **Isomorphism** | Bijective linear map | Invertible |
| **Endomorphism** | $T: V \to V$ | Same domain and codomain |
| **Automorphism** | Bijective endomorphism | Invertible self-map |

## Matrix Representation

> [!info] Definition (Matrix of a Linear Transformation)
> Given bases $\mathcal{B} = \{v_1, \ldots, v_n\}$ for $V$ and $\mathcal{C} = \{w_1, \ldots, w_m\}$ for $W$, the **matrix of $T$** is the $m \times n$ matrix $[T]_\mathcal{B}^\mathcal{C}$ whose $j$-th column is $[T(v_j)]_\mathcal{C}$.

> [!tip] Matrix-Vector Correspondence
> $$[T(v)]_\mathcal{C} = [T]_\mathcal{B}^\mathcal{C} \cdot [v]_\mathcal{B}$$
> Linear transformations correspond to matrix multiplication.

## Examples

> [!example] Example 1: Zero Transformation
> $T: V \to W$ defined by $T(v) = 0$ for all $v$.
> - $\ker(T) = V$, $\text{im}(T) = \{0\}$

> [!example] Example 2: Identity Transformation
> $I: V \to V$ defined by $I(v) = v$.
> - $\ker(I) = \{0\}$, $\text{im}(I) = V$
> - Matrix: identity matrix $I_n$

> [!example] Example 3: Differentiation
> $D: P_n(\mathbb{R}) \to P_{n-1}(\mathbb{R})$ defined by $D(p) = p'$.
> - Linear: $(p + q)' = p' + q'$ and $(cp)' = cp'$
> - $\ker(D) = \{$constant polynomials$\}$
> - Matrix w.r.t. standard bases: $\begin{pmatrix} 0 & 1 & 0 & \cdots \\ 0 & 0 & 2 & \cdots \\ \vdots & & \ddots \end{pmatrix}$

> [!example] Example 4: Rotation in $\mathbb{R}^2$
> $R_\theta: \mathbb{R}^2 \to \mathbb{R}^2$ rotating by angle $\theta$:
> $$R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$
> - Isomorphism (bijective)
> - Preserves lengths and angles

> [!example] Example 5: Projection
> $P: \mathbb{R}^3 \to \mathbb{R}^2$ defined by $P(x, y, z) = (x, y)$.
> - Surjective but not injective
> - $\ker(P) = \{(0, 0, z) : z \in \mathbb{R}\}$

## Eigenvalues and Eigenvectors

> [!info] Definition
> For $T: V \to V$, a scalar $\lambda$ is an **eigenvalue** if there exists nonzero $v$ with:
> $$T(v) = \lambda v$$
> Such $v$ is called an **eigenvector** for $\lambda$.

The eigenspace $E_\lambda = \ker(T - \lambda I)$ is the set of all eigenvectors for $\lambda$ (plus 0).

## Space of Linear Transformations

> [!info] Definition
> $\text{Hom}(V, W)$ denotes the set of all linear transformations $V \to W$.
>
> This is itself a vector space under:
> - $(S + T)(v) = S(v) + T(v)$
> - $(cT)(v) = cT(v)$
>
> If $\dim V = n$ and $\dim W = m$, then $\dim \text{Hom}(V, W) = mn$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]

## Exercises

```dataview
LIST
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```
